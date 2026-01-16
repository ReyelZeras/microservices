Gerenciador de Usuários Pro 🚀

Arquitetura de Microserviços com Mensageria Assíncrona

Este projeto é uma solução Full Stack robusta para gestão de usuários, utilizando uma arquitetura orientada a eventos. O sistema permite o cadastro, listagem, edição e exclusão de usuários, garantindo que processos pesados (como envio de e-mails) sejam processados em background via RabbitMQ.

🏗️ Arquitetura do Sistema

O ecossistema é composto por três módulos principais:

ms-user-front (Angular 18): Interface moderna e responsiva construída com Angular Material, utilizando componentes Standalone e gestão de estado via roteamento.

ms-user (Spring Boot): Microserviço principal responsável pelo CRUD de usuários, persistência em banco de dados e produção de eventos de mensageria.

ms-email (Spring Boot): Worker especializado que consome eventos da fila para realizar o disparo de notificações de boas-vindas.

🛠️ Tecnologias Utilizadas

Frontend

Angular 18 (Arquitetura Standalone)

Angular Material (UI/UX Design)

RxJS (Programação Reativa)

TypeScript

Backend

Java 17 / Spring Boot 3

Spring Data JPA (Persistência)

RabbitMQ / CloudAMQP (Mensageria na Nuvem)

Java Mail Sender (Integração com e-mail)

UUID (Identificadores únicos seguros)

📨 Fluxo de Mensageria (Event-Driven)

Para garantir alta disponibilidade e performance, o sistema utiliza o padrão Producer-Consumer:

Produtor (ms-user): Ao salvar um novo usuário, o sistema publica um JSON na exchange user.events.

Broker (CloudAMQP): Gerencia a fila registration.email.queue na nuvem.

Consumidor (ms-email): Escuta a fila em tempo real e dispara o e-mail assim que a mensagem chega.

🚀 Como Executar o Projeto

Pré-requisitos

JDK 17+

Node.js 18+ & Angular CLI

Conta no CloudAMQP (ou RabbitMQ local)

1. Configuração do Backend

Clone o repositório e configure o application.properties em ambos os microserviços com sua URL do CloudAMQP:

spring.rabbitmq.addresses=amqps://usuario:senha@host/vhost


Execute os serviços:

# Na pasta de cada microserviço
./mvnw spring-boot:run


2. Configuração do Frontend

cd ms-user-front
npm install
ng serve


Acesse: http://localhost:4200

📈 Diferenciais Técnicos Implementados

CORS Policy: Configuração restrita para segurança de comunicação entre domínios.

Durable Queues: As mensagens no RabbitMQ são persistentes, garantindo que não se percam se o serviço cair.

Separation of Concerns: Divisão clara entre camadas de controle, serviço e acesso a dados.

Material Design: Interface limpa, com feedbacks visuais via SnackBar e diálogos de confirmação.

👨‍💻 Autor

Desenvolvido Reyel Soares [https://www.linkedin.com/in/reyel-soares-4ba106251/]