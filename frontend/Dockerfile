FROM node:18-alpine

WORKDIR /frontend
COPY package* ./
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]