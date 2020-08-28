FROM node:12.16-alpine

WORKDIR /app/

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY dist ./dist

RUN ls -alh

ENV PORT 3002

EXPOSE 3002

CMD ["npm", "start"]
