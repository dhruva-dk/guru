import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  async oAuthLogin(user) {
    if (!user) {
      throw new Error('User not found!!!');
    }

    //    .... your business logic. todo: save user to db and issue jwt

    //   .... add whatever payload you want to have
    const payload = {
      email: user.email,
      name: user.name,
    };

    const jwt = await this.jwtService.sign(payload);

    return { jwt };
  }
}
