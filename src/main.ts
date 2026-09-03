import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,            // DTO me na likhe fields auto-strip
    forbidNonWhitelisted: true, // extra fields aayein to error de
    transform: true,            // string->number/boolean auto convert
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
