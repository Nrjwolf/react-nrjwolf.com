FROM node:16

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn
RUN npm install -g serve
COPY . .

EXPOSE 3000

RUN chown -R node /usr/src/app
USER node

RUN npm -v
RUN yarn build
CMD serve -s build

