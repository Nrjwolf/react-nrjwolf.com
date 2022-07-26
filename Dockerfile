FROM node:16

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn
COPY . .

EXPOSE 3000

RUN chown -R node /usr/src/app
USER node

RUN npm -v
RUN yarn build
CMD yarn start

