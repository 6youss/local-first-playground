import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const validationPipe = new ValidationPipe({
  transformOptions: { enableImplicitConversion: true },
  transform: true,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(validationPipe);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
