# Docker tasks

PROD_APP=upendo
STAGING_APP=staging-upendo

build-dev:
	docker-compose build

compose-down: # terminate the docker compose services
	docker-compose down

compose-up: # run docker containers in dev mode
	docker-compose up -d

dev: compose-up open-pgadmin open-web # build containers and open dev server and pgadmin

logs-dev: # tail docker compose logs
	docker-compose logs -f

logs-prod: # tail production logs
	heroku logs --tail -a ${PROD_APP}

logs-staging: # tail production logs
	heroku logs --tail -a ${STAGING_APP}

migrations-dev: # make and apply migrations
	docker-compose exec app python manage.py makemigrations
	docker-compose exec app python manage.py migrate

open-web: # open django dev server in browser
	open "http://localhost:8000"

open-pgadmin: # open pgadmin in browser
	open "http://localhost:5051"

pyshell-dev: # run python/django shell in the app container
	docker-compose exec app python manage.py shell

shell-dev: # run the shell inside the app container
	docker-compose exec app sh

shell-prod: # run the shell inside the heroku staging server
	heroku run bash -a ${PROD_APP}

shell-staging: # run the shell inside the heroku staging server
	heroku run bash -a ${STAGING_APP}

stop: compose-down
