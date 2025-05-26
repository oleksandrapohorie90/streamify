import {
	BadRequestException,
	ConflictException,
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { verify } from 'argon2'
import type { Request } from 'express'

import { PrismaService } from '../core/prisma/prisma.service'
import { RedisService } from '../core/redis/redis.service'
import { destroySession, saveSession } from '../shared/utils/session.util'
import { LoginInput } from './inputs/login.input'

@Injectable()
export class SessionService {
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly redisService: RedisService,
		private readonly configService: ConfigService,
	) {}

	// public async login(req: Request, input: LoginInput, userAgent: string) {
	// 	const { login, password } = input

	// 	const user = await this.prismaService.user.findFirst({
	// 		where: {
	// 			OR: [
	// 				{ username: { equals: login } },
	// 				{ email: { equals: login } }
	// 			]
	// 		},
	// 		// select: {
	// 		// 	id: true,
	// 		// 	username: true,
	// 		// 	email: true,
	// 		// 	password: true,
	// 		// 	displayName: true,
	// 		// 	avatar: true,
	// 		// 	bio: true,
	// 		// 	createdAt: true,
	// 		// 	updatedAt: true,
	// 		// 	isDeactivated: true,
	// 		// 	deactivatedAt: true
	// 		// }
	// 	})

	// 	if (!user) {
	// 		throw new NotFoundException('Пользователь не найден')
	// 	}

	// 	const isValidPassword = await verify(user.password, password)

	// 	if (!isValidPassword) {
	// 		throw new UnauthorizedException('Неверный пароль')
	// 	}

	// 	return saveSession(req, user)
	// }

	public async logout(req: Request) {
		return destroySession(req, this.configService)
	}

}