import {
  Controller,
  Get,
  HostParam,
  Param,
  Query,
  Redirect,
} from '@nestjs/common';
import { config } from 'dotenv';
import { resolve } from 'path';
config({ path: resolve(__dirname, '../../.env') });

@Controller()
export class HomeController {
  @Get('/dir')
  getRootDir() {
    return __dirname;
  }

  @Get('/docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version: any) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get('/get/:id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return `This action returns a #${id} param testing`;
  }

  @Get('/get-weekdays')
  getCurrentTotalDay() {
    const result = new Date('11/15/2022').getDay();
    return result;
  }

  @Get('/get-current-time')
  getCurrentTime() {
    const time = new Date();
    return new Date().getUTCMonth() + 1;
  }

  @Get('/env')
  getEnv() {
    return process.env;
  }

  @Get('/version')
  getCurrentVersion() {
    return '1.0.1';
  }
}
