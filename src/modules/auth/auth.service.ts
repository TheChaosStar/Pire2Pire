import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  hashPassword(password: string): Observable<any> {
    return from(bcrypt.hash(password, 12));
  }

  comparePasswords(
    password: string,
    storedPasswordHash: string,
  ): Observable<any> {
    return from(bcrypt.compare(password, storedPasswordHash));
  }
}
