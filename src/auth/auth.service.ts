import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { message: 'You have signed up. Welcome!' };
  }

  signin() {
    return { message: 'You have signed in. Welcome back!' };
  }
}
