import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}
  async findOne(username: string) {
    return await this.userRepo.findOne({ where: { username } });
  }

  async create(createUser: CreateUserDto) {
    return await this.userRepo.save(this.userRepo.create(createUser));
  }
}
