import { Inject, Injectable } from '@nestjs/common';
import { UserService } from './modules/user/user.service';

@Injectable()
export class AppService {
  @Inject(UserService)
  private readonly userService: UserService;

  getUsers(): any {
    const users = this.userService.getAllUser();
    const tabUser = [];

    return users.then((user) => {
      for (const u of user) {
        tabUser.push(`
          <tr>
            <td>${u.id}</td>
            <td>${u.firstname}</td>
            <td>${u.lastname}</td>
          </tr>
        `);
      }
      return `<h1>Users</h1><table border='1'><thead><tr><th>id</th><th>firstname</th><th>lastname</th></tr></thead><tbody>${tabUser}</tbody></table>`;
    });
  }
}
