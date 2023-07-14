import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    const user = await this.prismaService.user.create({
      data: { email: dto.email, hash },
      select: { id: true, email: true, createdAt: true },
    });

    return user;
  }

  signin() {
    return { message: 'You have signed in. Welcome back!' };
  }
}
