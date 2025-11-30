import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createGoogleUser(params: {
    provider: 'google';
    providerId: string;
    email: string;
  }): Promise<User> {
    // Return existing user if already exists based on params (email and provider id must be unique)
    const existing = await this.usersRepository.findOne({
      where: [{ providerId: params.providerId }, { email: params.email }],
    });
    if (existing) {
      return existing;
    }

    const user = this.usersRepository.create({
      provider: params.provider,
      providerId: params.providerId,
      email: params.email,
    });
    return this.usersRepository.save(user);
  }

  async findByProviderId(providerId: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { providerId } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async findById(id: number): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
