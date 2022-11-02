# Command to start the project

start: deps-get ecto-create ecto-migrate adminer vue elixir  

# Command to start the back

elixir:
	make kill && docker-compose up -d api

adminer:
	docker-compose up -d adminer

# Command to start the front

vue:
	docker-compose up -d front

# Command to setup the project

ecto-create:
	docker-compose run --rm api mix ecto.create

ecto-migrate:
	docker-compose run --rm api mix ecto.migrate

deps-get:
	docker-compose run --rm api mix deps.get

kill:
	docker-compose kill api
