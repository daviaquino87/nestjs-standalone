import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { ConsumersModule } from '@/main/consumers/consumers.module';

async function bootstrap() {
  Logger.log('Start consumers application');

  process.argv.push('--registerHandlers');

  const app = await NestFactory.createApplicationContext(ConsumersModule);

  await app.init();
}

bootstrap();
