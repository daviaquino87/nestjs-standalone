import { Module } from '@nestjs/common';
import { CreateMessageUseCase } from '@/main/api/messages/use-cases/create-message/create-message.usecase';
import { MessagesController } from '@/main/api/messages/controllers/messages.controller';

@Module({
  providers: [CreateMessageUseCase],
  controllers: [MessagesController],
})
export class MessagesModule {}
