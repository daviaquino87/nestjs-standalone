import { Module } from '@nestjs/common';
import { CreateMessageUseCase } from '@/main/api/messages/use-cases/create-message/create-message.usecase';
import { MessagesController } from '@/main/api/messages/controllers/messages.controller';
import { RabbitMqModule } from '@/infra/rabbitmq/rabbitmq.module';

@Module({
  imports: [RabbitMqModule],
  providers: [CreateMessageUseCase],
  controllers: [MessagesController],
})
export class MessagesModule {}
