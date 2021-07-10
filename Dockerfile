FROM node:14-alpine as builder
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . ./app
RUN yarn build

FROM nginx:1.21-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
