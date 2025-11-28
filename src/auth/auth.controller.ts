import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GoogleGuard } from './guards/google.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(GoogleGuard)
  @Get('google/login')
  googleLogin() {}

  @UseGuards(GoogleGuard)
  @Get('google/callback')
  async googleCallback(@Req() req, @Res() res) {
    // todo: implement jwt auth
  }
}
