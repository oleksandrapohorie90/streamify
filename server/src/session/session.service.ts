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
import { getSessionMetadata } from 'src/shared/utils/session-metadata.util'

@Injectable()
export class SessionService {
  prismaService: any
  redisService: any
	//Accepts req, input, and userAgent.
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  // LOGIN
  // updated with week 7 to accomodate metadata
  public async login(req: Request, input: LoginInput, userAgent: string) {
    const { login, password } = input
  
    const user = await this.prismaService.user.findFirst({
      where: {
        OR: [{ username: login }, { email: login }]
      }
    })
  
    if (!user) throw new NotFoundException('User not found')
  
    const isValidPassword = await verify(user.password, password)
    if (!isValidPassword) throw new UnauthorizedException('Wrong password')
  
    const metadata = getSessionMetadata(req, userAgent)
  
    return saveSession(req, user, metadata)
  }
//   async login(req: Request, input: LoginInput, userAgent: string) {
//     const { login, password } = input;
// // Find user by login (username or email)
//     const user = await this.prisma.user.findFirst({
//       where: {
//         OR: [{ email: login }, { username: login }],
//       },
//     });
// // If not found → throw NotFoundException
//     if (!user) {
//       throw new NotFoundException('Пользователь не найден');
//     }
// // Validate password (use verify from argon2)
//     const isValid = await verify(user.password, password);
//     if (!isValid) {
// 		// If invalid → throw UnauthorizedException
//       throw new UnauthorizedException('Неверный пароль');
//     }
// // If valid → call saveSession(req, user)
//     await saveSession(req, user);
//     return { user };
//   }

  // LOGOUT
  async logout(req: Request) {
    await destroySession(req, this.configService);
    return true;
  }

  //implementfinByUser()
  public async findByUser(req: Request) {
    const userId = req.session.userId
    if (!userId) throw new NotFoundException('User not found')
  
    const keys = await this.redisService.keys('*')
  
    const userSessions = []
  
    for (const key of keys) {
      const sessionData = await this.redisService.get(key)
      if (sessionData) {
        const session = JSON.parse(sessionData)
        if (session.userId === userId) {
          userSessions.push({
            ...session,
            id: key.split(':')[1]
          })
        }
      }
    }
  
    userSessions.sort((a, b) => b.createdAt - a.createdAt)
  
    return userSessions.filter(session => session.id !== req.session.id)
  }

  //implement fidnByUser
  public async findCurrent(req: Request) {
    const sessionId = req.session.id
    const data = await this.redisService.get(`${this.configService.getOrThrow('SESSION_FOLDER')}${sessionId}`)
  
    return {
      ...JSON.parse(data),
      id: sessionId
    }
  }

  //clear session cookie on logout
  public async clearSession(req: Request) {
    req.res.clearCookie(this.configService.getOrThrow('SESSION_NAME'))
    return true
  }

  //remove a specific session
  public async remove(req: Request, id: string) {
    if (req.session.id === id) {
      throw new ConflictException('Cannot delete current session')
    }
  
    await this.redisService.del(
      `${this.configService.getOrThrow('SESSION_FOLDER')}${id}`
    )
  
    return true
  }
}

