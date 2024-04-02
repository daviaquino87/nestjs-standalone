import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMessageDTO } from '@/main/api/messages/dtos/create-message.dto';
import { PublisherService } from '@/infra/rabbitmq/publisher.service';
import { validateDTO } from '@/common/utils/validate-dto';

interface IExecuteInput {
  message: CreateMessageDTO;
}

type IApplyValidations = IExecuteInput;

@Injectable()
export class CreateMessageUseCase {
  constructor(private readonly publisherService: PublisherService) {}

  private async applyValidations({
    message: createMessageDTO,
  }: IApplyValidations): Promise<void> {
    const { error } = await validateDTO(CreateMessageDTO, createMessageDTO);

    if (error) {
      throw new BadRequestException(error);
    }
  }

  async execute(params: IExecuteInput): Promise<void> {
    await this.applyValidations(params);

    await this.publisherService.publishMessage(params.message);
  }
}
