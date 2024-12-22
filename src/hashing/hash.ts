import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Hashing {
  private salt = 10;
  constructor() {}
  async generate(password: string) {
    return await bcrypt.hash(password, this.salt);
  }
  async compare(password: string, hashPassword: string) {
    return await bcrypt.compare(password, hashPassword);
  }
}
