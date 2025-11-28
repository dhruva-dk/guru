import { registerAs } from '@nestjs/config';

// Google OAuth configuration wrapper registerAs to group these env variables under the "google" namespace
export default registerAs('google', () => ({
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  clientId: process.env.GOOGLE_CLIENT_ID,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
}));
