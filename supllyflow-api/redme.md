## Rodar Api

### Entrar na pasta da api

- cd ...

### Configurar arquivo .env

- Duplicar arquivo .env.example
- Renomear .env.example para .env
- No arquivo .env colocar ip da maquina fisica no local "meu_ip"

### Iniciar docker

docker-compose up --build

### Aplicar migrations no banco

npx prisma migrate dev
