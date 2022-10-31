# Dockerization

## About

-A Makefile is used to reference the commands to be used to start and/or setup the project.
```
# Command to start the project

start: elixir adminer

elixir:
	make kill && docker-compose up -d api

adminer:
	docker-compose up -d adminer

# Command to setup the project

ecto-create:
	docker-compose run --rm api mix ecto.create

ecto-migrate:
	docker-compose run --rm api mix ecto.migrate

deps-get:
	docker-compose run --rm api mix deps.get

kill:
	docker-compose kill api

```

## Project Setup

-Once the project is cloned we use the command ```make start``` to launch the project.

-At the first launch, we use```Make deps-get```, ```Make ecto-create``` and ``` Make ecto-migrate``` 
to set up the project.

-If the tables are modified, we use ``` Make ecto-migrate```.
