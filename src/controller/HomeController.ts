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

  @Get('/get-current-total-day')
  getCurrentTotalDay() {
    const totalDay = new Date(2017, 7, 0).getDate();
    return totalDay;
  }

  @Get('/get-current-time')
  getCurrentTime() {
    const time = new Date();
    return time;
  }

  @Get('/env')
  getEnv() {
    return process.env;
  }
}
