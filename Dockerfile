FROM node:14
ENV DEBUG True

EXPOSE $STORK_FE_PORT

WORKDIR /app

COPY ./package* ./

RUN yarn install

COPY . ./

CMD yarn start