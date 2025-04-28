import { RedisService } from './redis.service';
import { CreateRediDto } from './dto/create-redis.dto';
import { UpdateRediDto } from './dto/update-redis.dto';
export declare class RedisController {
    private readonly redisService;
    constructor(redisService: RedisService);
    create(createRediDto: CreateRediDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRediDto: UpdateRediDto): string;
    remove(id: string): string;
}
