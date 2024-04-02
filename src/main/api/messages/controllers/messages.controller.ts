import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMessageUseCase } from '@/main/api/messages/use-cases/create-message/create-message.usecase';
import { CreateMessageDTO } from '@/common/dtos/create-message.dto';

@ApiTags('Messages')
@Controller('messages')
export class MessagesController {
  constructor(private readonly createMessageUseCase: CreateMessageUseCase) {}

  @Post()
  async createMessage(@Body() createMessageDTO: CreateMessageDTO) {
    await this.createMessageUseCase.execute({
      message: createMessageDTO,
    });
  }
}
