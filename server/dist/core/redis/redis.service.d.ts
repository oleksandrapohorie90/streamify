import { CreateRediDto } from './dto/create-redis.dto';
import { UpdateRediDto } from './dto/update-redis.dto';
export declare class RedisService {
    create(createRediDto: CreateRediDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRediDto: UpdateRediDto): string;
    remove(id: number): string;
}
