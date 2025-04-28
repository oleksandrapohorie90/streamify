import { Injectable } from '@nestjs/common';
import { UserModel } from './models/user.model';

@Injectable()
export class AccountService {
  
    public findAll(): UserModel[] {
      // Replace with actual logic to fetch users
      return [];
    }
  }
