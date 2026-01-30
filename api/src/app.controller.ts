import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('dima')
  getDima(): string {
    this.appService.getHelloDima();
    return 'Dima endpoint called';
  }
}
