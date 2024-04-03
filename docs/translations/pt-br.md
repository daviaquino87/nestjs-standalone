# NestJS Standalone

Esta aplicação foi desenvolvida para demonstrar o conceito de standalone, onde cada módulo funciona de forma independente e autossuficiente.

![Badge](https://img.shields.io/badge/standalone-api-%237159c1?style=for-the-badge&logo=ghost)

## Demonstração

[![Watch the video](https://miro.medium.com/v2/resize:fit:1400/1*s9kgU8F1eB7Tzs7sG0YhBg.jpeg)](https://vimeo.com/930232720)



## O que é uma aplicação standalone ?

Uma aplicação standalone, ou aplicação autônoma, é um software que pode executar de forma independente, sem a necessidade de instalação de outros programas. Normalmente, uma aplicação standalone incorpora todos os recursos e bibliotecas necessários para operar sem depender de software adicional. No contexto desta aplicação NestJS, podemos interpretar que os módulos podem funcionar de forma autônoma.

## Fluxo da aplicação
  O fluxo da aplicação no contexto do NestJS é estruturado em módulos, e cada módulo é concebido para operar de forma independente, como se fosse uma aplicação separada. Cada módulo possui seu próprio script de inicialização e é contido em seu próprio container.

  ![imagem representativa dos container](https://cdn.discordapp.com/attachments/1115324354658570261/1224730389080309780/image.png?ex=661e8e0f&is=660c190f&hm=27c6ad32ecda23935e3138330b543b3b7ed4afc4a44ae09b191012ad6c1e6c2f&)

  Ao dividir a aplicação em módulos separados, cada um em seu próprio container, a comunicação entre esses serviços é mantida através de mensageria, utilizando o broker do RabbitMQ. Essa abordagem permite uma arquitetura mais distribuída e escalável, onde cada módulo pode ser dimensionado individualmente conforme necessário.

  ![imagem representativa da comunicação dos serviços](https://cdn.discordapp.com/attachments/1115324354658570261/1224756531099074731/image.png?ex=661ea667&is=660c3167&hm=6c944e8a3cf4ccf7c9a91c407711d52e5f7bd92a1faf9b68cfc6253c4004d65f&)

 Essa organização proporciona uma visão clara do ambiente de implantação da aplicação. Por exemplo, se houver a necessidade de escalar a aplicação, basta fazer uma configuração no arquivo docker-compose para especificar quantas instâncias de cada serviço são desejadas.

Essa separação em módulos autônomos facilita não apenas a escalabilidade, mas também a manutenção, o desenvolvimento e a depuração da aplicação, uma vez que cada parte pode ser tratada de forma independente, sem interferir nas outras. Além disso, essa abordagem promove uma arquitetura mais resiliente, onde uma falha em um módulo não afeta necessariamente o funcionamento dos outros.

<hr>

## 🛠️ Pré-requisitos
* Docker e docker-compose instalados

## 🎲 Rodando o Backend

### Criar o arquivo .env e copiar as variáveis do .env.example
```=shell
cp ./.env.example ./.env
```
* Fazer alterações quando necessário

### Rodar aplicação
```=shell
docker-compose up -d 
```

### Verificar logs da aplicação
```=shell
docker logs -f {nome-do-container} --tail 200
```

### Entrar dentro do container da aplicação
```=shell
docker exec -it {nome-do-container} sh
```

## 📖 Documentação da api

[Documentação](http://localhost:3001/docs)

## 👨🏼‍💻 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Nest.js](https://docs.nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://docs.docker.com/)
- [RabbitMq](https://www.rabbitmq.com/docs)

## 🛠️ Observações
* Instalar dependências dentro do container
* A documentação não fica disponível caso a variável de ambiente NODE_ENV esteja como production

## 🌍 Leia isso em outro idioma
- <a href="../../README.md" >🇺🇸 Ingles/English</a>