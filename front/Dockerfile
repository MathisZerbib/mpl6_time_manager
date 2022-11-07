FROM node:18.10.0

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install -y curl dos2unix
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - 

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . .

RUN dos2unix start.sh

RUN chmod +x start.sh

EXPOSE 5173

CMD ["./start.sh"]