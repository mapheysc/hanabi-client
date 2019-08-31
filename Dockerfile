FROM node AS builder
ARG build_env
WORKDIR /app/
COPY . .

RUN npm install -g @angular/cli && npm install && npm audit fix && ng b --configuration=production

FROM nginx:latest
LABEL version="1.0"
WORKDIR /app/
COPY --from=builder /app/dist/hanabi-client .
