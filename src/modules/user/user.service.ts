import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { _User } from './user.entity';
import { DeleteResult } from 'typeorm';
import { Observable, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { LoginUserDto } from 'src/dto/LoginUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private authService: AuthService,
  ) {}
  async getAllUser() {
    const users = await this.userRepository.find();
    const newUser = [];
    users.forEach((user) => {
      newUser.push({
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
      });
    });
    return newUser;
  }

  async getUserById(id: number): Promise<_User> {
    return await this.userRepository.findOneBy({ id: id });
  }

  create(createUserDto: CreateUserDto): Observable<any> {
    return this.mailExists(createUserDto.email).pipe(
      switchMap((exists: boolean) => {
        if (!exists) {
          return this.authService.hashPassword(createUserDto.password).pipe(
            switchMap((passwordHash: string) => {
              createUserDto.password = passwordHash;
              return from(this.userRepository.save(createUserDto)).pipe(
                map((savedUser: _User) => {
                  const { password, ...user } = savedUser;
                  return user;
                }),
              );
            }),
          );
        } else {
          throw new HttpException('Email already in use', HttpStatus.CONFLICT);
        }
      }),
    );
  }

  login(loginUserDto: LoginUserDto): Observable<string> {
    return this.findUserByEmail(loginUserDto.email).pipe(
      switchMap((user: _User) => {
        if (user)
          return this.validatePassword(
            loginUserDto.password,
            user.password,
          ).pipe(
            map((passwordsMatch: boolean) => {
              if (passwordsMatch) return 'Login was Successfull';
              throw new HttpException(
                'Login was not Successfull',
                HttpStatus.UNAUTHORIZED,
              );
            }),
          );

        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }),
    );
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }

  async update(id: number, user: CreateUserDto) {
    return await this.userRepository.update(
      { id },
      {
        firstname: user.firstname,
        lastname: user.lastname,
        password: user.password,
        role_id: user.role_id,
        lessons: user.lessons,
        formations: user.formations,
      },
    );
  }

  private findUserByEmail(email: string): Observable<_User> {
    return from(
      this.userRepository.findOne({
        select: ['id', 'email', 'firstname', 'lastname', 'password'],
        where: {
          email,
        },
      }),
    );
  }

  private validatePassword(
    password: string,
    storedPasswordHash: string,
  ): Observable<boolean> {
    return this.authService.comparePasswords(password, storedPasswordHash);
  }

  private mailExists(email: string): Observable<boolean> {
    return from(
      this.userRepository.findOne({
        select: ['id', 'email', 'firstname', 'lastname', 'password'],
        where: {
          email,
        },
      }),
    ).pipe(
      map((user: _User) => {
        if (user) return true;
        return false;
      }),
    );
  }
}
