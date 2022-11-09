FROM elixir:1.14.0

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - 
RUN apt-get install -y nodejs
RUN apt install postgresql-client -y
RUN apt-get install inotify-tools -y

WORKDIR /app

RUN mix local.hex --force
RUN mix local.rebar --force
RUN mix archive.install hex phx_new

EXPOSE 4000

CMD ["mix", "phx.server"]
