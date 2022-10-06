import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppUtils } from './app.utils';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppUtils],
})
export class AppModule {}
