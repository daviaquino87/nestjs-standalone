import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';

import { ExchangesEnum, QueuesEnum } from '@/infra/rabbitmq/enums';
import { CreateMessageDTO } from '@/common/dtos/create-message.dto';

@Injectable()
export class MessagesQueue {
  @RabbitSubscribe({
    exchange: ExchangesEnum.DEFAULT,
    queue: QueuesEnum.MESSAGES,
    routingKey: QueuesEnum.MESSAGES,
  })
  public async execute(message: CreateMessageDTO) {
    try {
      Logger.log(message, MessagesQueue.name);
    } catch (error) {
      Logger.error(error, MessagesQueue.name);
    }
  }
}
