FROM node:23-bullseye-slim as development

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

FROM node:23-bullseye-slim as production

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --only=production

COPY . .

EXPOSE 4000
