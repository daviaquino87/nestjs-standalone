import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { envSchema } from '@/infra/env/env-schema';
import { EnvModule } from '@/infra/env/env.module';
import { MessagesModule } from './messages/messages.module';
import { RabbitMqModule } from '@/infra/rabbitmq/rabbitmq.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    EnvModule,
    RabbitMqModule,
    MessagesModule,
  ],
  providers: [],
  controllers: [],
})
export class ApiModule {}
