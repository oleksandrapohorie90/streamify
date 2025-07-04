import { Injectable } from '@nestjs/common'; //debugged needed to edit constructor to use real reddis
import { CreateRediDto } from './dto/create-redis.dto';
import { UpdateRediDto } from './dto/update-redis.dto';
import Redis from 'ioredis';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RedisService extends Redis {
  constructor(private readonly configService: ConfigService) {
    super(configService.getOrThrow<string>('REDIS_URI'));
  }
  create(createRediDto: CreateRediDto) {
    return 'This action adds a new redi';
  }

  findAll() {
    return `This action returns all redis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} redi`;
  }

  update(id: number, updateRediDto: UpdateRediDto) {
    return `This action updates a #${id} redi`;
  }

  remove(id: number) {
    return `This action removes a #${id} redi`;
  }
}
