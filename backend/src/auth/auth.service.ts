import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../services/user.service'; // UserServiceをインポート
import { User } from '@/entities';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    try {
      const user = await this.userService.findOne({ email });

      if (user && (await bcrypt.compare(password, user.password_hash))) {
        return user;
      }
      throw new UnauthorizedException('ログインに失敗しました');
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('ログインに失敗しました');
    }
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    const payload = { sub: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
