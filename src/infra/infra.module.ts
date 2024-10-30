import { Module } from '@nestjs/common';
import { OpenIAService } from './openIA.service';

@Module({
  imports: [],
  providers: [OpenIAService],
  exports: [OpenIAService],
})
export class InfraModule {}
