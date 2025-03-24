import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../services/user.service'; // UserServiceをインポート
import type { JwtPayload } from './JwtPayload';
import type { User } from '@/entities';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'secret', // 要改善
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const user = await this.userService.findOne({
      id: payload.id,
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
