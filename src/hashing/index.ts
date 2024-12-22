import { Module } from '@nestjs/common';
import { Hashing } from './hash';

@Module({
  providers: [Hashing],
  exports: [Hashing],
})
export class HashModule {}
