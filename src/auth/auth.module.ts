import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import googleConfig from './config/google.config';
import { GoogleGuard } from './guards/google.guard';
import { GoogleStrategy } from './strategies/google.strategy';

@Module({
  imports: [ConfigModule.forFeature(googleConfig)],
  providers: [AuthService, GoogleGuard, GoogleStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
