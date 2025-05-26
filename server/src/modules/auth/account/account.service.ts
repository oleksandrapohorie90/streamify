import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../../../src/core/prisma/prisma.service';
import { CreateUserInput } from '../account/inputs/create-user.input';
import { UserModel } from './models/user.model';
import { hash } from 'argon2';

@Injectable()
export class AccountService {
	public constructor(
		private readonly prismaService: PrismaService,
	) {}

	public async findAll() {
		const users = await this.prismaService.user.findMany()
		return users
	}

	public async me(id: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id
			},
			// include: {
			// 	socialLinks: true,
			// 	stream: true,
			// 	notificationSettings: true
			// }
		})

		return user
	}

	public async create(input: CreateUserInput) {
		const { username, email, password } = input

		const isUsernameExists = await this.prismaService.user.findUnique({
			where: {
				username
			}
		})

		if (isUsernameExists) {
			throw new ConflictException('Это имя пользователя уже занято')
		}

		const isEmailExists = await this.prismaService.user.findUnique({
			where: {
				email
			}
		})

		if (isEmailExists) {
			throw new ConflictException('Эта почта уже занята')
		}

		const user = await this.prismaService.user.create({
			data: {
				username,
				email,
				password: await hash(password),
				displayName: username,
				// stream: {
				// 	create: {
				// 		title: `Стрим ${username}`
				// 	}
				// },
				// notificationSettings: {
				// 	create: {}
				// }
			}
		})

		return true
	}

	
}