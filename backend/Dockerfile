FROM node:23-bullseye-slim as development

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

FROM node:23-bullseye-slim as production

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 4000

# 開発モードでアプリケーションを実行
CMD ["npm", "run", "start:dev"]