FROM node:16

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

ENV NODE_ENV=production
RUN npm install pm2 -g
RUN pm2 list
RUN yarn --prod
COPY . .

EXPOSE 3000

RUN chown -R node /usr/src/app
USER node

RUN npm -v
RUN pm2 list
CMD pm2-runtime 'yarn start'

