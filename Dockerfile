FROM node:20
WORKDIR /app
COPY package.json ./
RUN npm install -g @angular/cli && npm install
COPY src/index.html .
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]