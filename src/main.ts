import { NestFactory } from '@nestjs/core';
import { AppModule } from './config/AppModule';
import { TimeoutInterceptor } from './config/TimeoutInterceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  app.useGlobalInterceptors(new TimeoutInterceptor());
  //const app = await NestFactory.create<NestExpressApplication>(AppModule); //you don't need to specify a type unless you actually want to access the underlying platform API
  await app.listen(3000);
}
bootstrap();
