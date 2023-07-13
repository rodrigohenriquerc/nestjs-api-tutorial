import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  signup() {
    return { message: 'You have signed up. Welcome!' };
  }

  signin() {
    return { message: 'You have signed in. Welcome back!' };
  }
}
