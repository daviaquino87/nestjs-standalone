import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { Request, Response } from 'express';
import { version, name, description } from 'package.json';

import { EnvService } from '@/infra/env/env.service';
import { ApiModule } from '@/main/api/api.module';
import { HttpExceptionFilter } from '@/main/api/exceptions.filter';

function enableDocs(app: NestExpressApplication) {
  const formatName = name?.toUpperCase()?.replace('-', ' ');

  const config = new DocumentBuilder()
    .setTitle(formatName)
    .setDescription(description)
    .setVersion('')
    .build();

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: `${formatName} ${version}`,
  };
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document, customOptions);
}

function enableCors(app: NestExpressApplication) {
  app.enableCors();
}

function enableExceptionFilter(app: NestExpressApplication) {
  app.useGlobalFilters(new HttpExceptionFilter());
}

function secureApp(app: NestExpressApplication) {
  app.getHttpAdapter().getInstance().disable('x-powered-by');

  app.use((_req: Request, res: Response, next) => {
    res.header('Server', name + 'server');
    next();
  });

  app.set('trust proxy', 1);
}

async function runServer(app: NestExpressApplication, port: number) {
  await app.listen(port);
}

async function bootstrap() {
  Logger.log(`Start api application: ${name}:${version}`);

  const app = await NestFactory.create<NestExpressApplication>(ApiModule);

  const env = app.get(EnvService);
  const PORT = env.get('PORT');
  const NODE_ENV = env.get('NODE_ENV');

  if (NODE_ENV === 'development' || NODE_ENV === 'test') {
    enableDocs(app);
  }

  secureApp(app);
  enableExceptionFilter(app);
  enableCors(app);
  runServer(app, PORT);
}

bootstrap();
