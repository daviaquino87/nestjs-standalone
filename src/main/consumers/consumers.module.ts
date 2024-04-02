import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { envSchema } from '@/infra/env/env-schema';
import { RabbitMqModule } from '@/infra/rabbitmq/rabbitmq.module';
import { MessagesQueue } from '@/main/consumers/queues/messages.queue';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    RabbitMqModule,
  ],
  providers: [MessagesQueue],
})
export class ConsumersModule {}
