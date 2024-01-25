FROM node:21 as build
COPY . .

RUN npm install
RUN npm run build

FROM node:21

WORKDIR /home/node
COPY --from=build package.json package-lock.json ./
COPY --from=build build build
RUN npm ci --omit dev
CMD [ "node", "build" ]
