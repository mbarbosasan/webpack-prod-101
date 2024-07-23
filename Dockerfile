FROM node:alpine as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

from nginx:latest as prod

COPY --from=build /app/dist/nginx-angular-app/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]