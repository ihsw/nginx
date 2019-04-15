FROM node

ENV PORT 8080

COPY ./app /srv/app
WORKDIR /srv/app
RUN npm install -s

CMD [ "node", "/srv/app/index.js" ]