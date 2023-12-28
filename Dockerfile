FROM node:21.5
RUN mkdir /app
WORKDIR /app
COPY package.json package-lock.json ./
COPY tsconfig.json .
COPY src prisma ./
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]