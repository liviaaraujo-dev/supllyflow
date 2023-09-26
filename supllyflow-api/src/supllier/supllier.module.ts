import { Module } from '@nestjs/common';
import { SupllierService } from './supllier.service';
import { SupllierController } from './supllier.controller';

@Module({
  providers: [SupllierService],
  controllers: [SupllierController]
})
export class SupllierModule {}
