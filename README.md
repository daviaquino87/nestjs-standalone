# NestJS Standalone

This application was developed to demonstrate the concept of standalone, where each module works independently and self-sufficiently.

![Badge](https://img.shields.io/badge/standalone-api-%237159c1?style=for-the-badge&logo=ghost)

<video width="320" height="240" controls>
  <source src="./docs/demo/index.mp4" type="video/mp4">
  Your browser does not support the element <code>video</code>.
</video>


## What is a standalone application?

A standalone application is software that can run independently, without the need to install other programs. Typically, a standalone application incorporates all the resources and libraries necessary to operate without relying on additional software. In the context of this NestJS application, we can interpret that the modules can work autonomously.

## Application flow
  The application flow in the context of NestJS is structured into modules, and each module is designed to operate independently, as if it were a separate application. Each module has its own initialization script and is contained in its own container.

  ![imagem representativa dos container](https://cdn.discordapp.com/attachments/1115324354658570261/1224730389080309780/image.png?ex=661e8e0f&is=660c190f&hm=27c6ad32ecda23935e3138330b543b3b7ed4afc4a44ae09b191012ad6c1e6c2f&)

 By dividing the application into separate modules, each in its own container, communication between these services is maintained through messaging, using the RabbitMQ broker. This approach allows for a more distributed and scalable architecture, where each module can be scaled individually as needed.

  ![imagem representativa da comunicação dos serviços](https://cdn.discordapp.com/attachments/1115324354658570261/1224756531099074731/image.png?ex=661ea667&is=660c3167&hm=6c944e8a3cf4ccf7c9a91c407711d52e5f7bd92a1faf9b68cfc6253c4004d65f&)

This organization provides a clear view of the application deployment environment. For example, if there is a need to scale the application, simply make a configuration in the docker-compose file to specify how many instances of each service are desired.

This separation into autonomous modules facilitates not only scalability, but also maintenance, development and debugging of the application, since each part can be treated independently, without interfering with the others. Furthermore, this approach promotes a more resilient architecture, where a failure in one module does not necessarily affect the functioning of the others.

<hr>

## 🛠️ Prerequisites
* Docker e docker-compose installed

## 🎲 Running the Backend

### Create the .env file and copy the variables from .env.example
```=shell
cp ./.env.example ./.env
```
* Make changes when necessary

### Run application
```=shell
docker-compose up -d 
```

### Check application logs
```=shell
docker logs -f {container-name} --tail 200
```

### Enter the application container
```=shell
docker exec -it {container-name} sh
```

## 📖 API documentation

[Documentação](http://localhost:3001/docs)

## 👨🏼‍💻 Technologies

The following tools were used to build the project:

- [Node.js](https://nodejs.org/en/)
- [Nest.js](https://docs.nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://docs.docker.com/)
- [RabbitMq](https://www.rabbitmq.com/docs)

## 🛠️ Comments
* Install dependencies inside the container
* The documentation is not available if the NODE_ENV environment variable is set to production

## 🌍 Read this in other language
- <a href="./docs/translations/pt-br.md" >🇧🇷 Português/Portuguese</a>