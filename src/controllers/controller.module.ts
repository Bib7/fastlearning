import { Module } from '@nestjs/common';
import { ControllersService } from './controllers.service';

@Module({
  providers: [ControllersService],
  exports: [ControllersService],
})
export class ControllerModule {}
