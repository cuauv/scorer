FROM node:10-slim

RUN apt -y update && apt -y upgrade && apt -y install libpng12-0 bzip2 autoconf

WORKDIR /code

ADD package.json package.json
ADD yarn.lock yarn.lock
ADD internals internals
RUN yarn install

CMD ["npm", "run", "start:production"]
