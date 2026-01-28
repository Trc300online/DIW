FROM node:20-alpine

WORKDIR /app

RUN npm install -g npm@latest

CMD ["sh"]

RUN npm create vite@latest KeySwapp
WORKDIR /KeySwapp

RUN npm install tailwindcss @tailwindcss/vite
