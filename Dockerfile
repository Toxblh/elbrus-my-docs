# Этап сборки
FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run docs:build

# Этап запуска
FROM nginx:alpine
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
