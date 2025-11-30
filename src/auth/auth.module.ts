import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigType } from '@nestjs/config';
import googleConfig from './config/google.config';
import { GoogleGuard } from './guards/google.guard';
import { GoogleStrategy } from './strategies/google.strategy';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from './config/jwt.config';
import { JwtGuard } from './guards/jwt.guard';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forFeature(googleConfig),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync({
      useFactory: (configuration: ConfigType<typeof jwtConfig>) => ({
        secret: configuration.secret,
        signOptions: {
          expiresIn: '3d',
        },
        global: true,
      }),
    }),
  ],
  providers: [AuthService, GoogleGuard, GoogleStrategy, JwtGuard, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
