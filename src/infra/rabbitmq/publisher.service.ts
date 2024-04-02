import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

import { ExchangesEnum, QueuesEnum } from '@/infra/rabbitmq/enums';

@Injectable()
export class PublisherService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  async publishMessage(message: any) {
    await this.amqpConnection.publish(
      ExchangesEnum.DEFAULT,
      QueuesEnum.MESSAGES,
      message,
    );
  }
}
