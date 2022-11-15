import { NestFactory } from '@nestjs/core';
import { AppModule } from './config/AppModule';
import { TimeoutInterceptor } from './config/TimeoutInterceptor';
import * as bodyParser from 'body-parser';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  app.useGlobalInterceptors(new TimeoutInterceptor());
  //const app = await NestFactory.create<NestExpressApplication>(AppModule); //you don't need to specify a type unless you actually want to access the underlying platform API
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  await app.listen(3000);
}
bootstrap();
