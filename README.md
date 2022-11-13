# Time Manager

Projet réalisé à Epitech pendant les 3 semaines de piscine. Le but était de réaliser une application permettant aux différents utilisateurs (manger ou employé) de badger leur heures de travail.

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


## API Reference

#### Get all users

```http://localhost:4000/api/users
  GET /api/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get all clocks

```http://localhost:4000/api/clocks
  GET /api/clocks
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Authors

- [@Mathis Zerbib](https://github.com/MathisZerbib/MathisZerbib)
- [@Thomas Caillau](https://github.com/caillau-thomas/caillau-thomas)
- [@Maxime Delorme](https://github.com/MaximeDelorme/MaximeDelorme)
- [@Laurent Cochonneau](https://github.com/LDB47)