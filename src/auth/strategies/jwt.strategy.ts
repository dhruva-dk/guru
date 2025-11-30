import { ExecutionContext, Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  // The strategy doesn't create the JWT: it only validates it
  // Attach the validated user to req.user. Returns error code unauthorized if validation fails
  async validate(payload: any) {
    console.log('payload', payload);
    return payload;
  }
}
