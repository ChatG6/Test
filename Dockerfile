FROM node:lts
WORKDIR /Front
EXPOSE 3000
COPY . .
RUN npm i
RUN npm run build
CMD npm run start
HEALTHCHECK --interval=30s --timeout=30s  --retries=3 CMD curl -f http://localhost:3000/ || exit 1
