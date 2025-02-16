FROM docker.arvancloud.ir/node:lts-alpine
ENV NODE_ENV=productiom
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]


RUN npm install --force
RUN npm i -g serve
COPY . .
RUN npm run build
# EXPOSE 3000
CMD [ "serve", "-s", "dist" ]
