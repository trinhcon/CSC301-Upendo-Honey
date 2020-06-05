# Docker tasks

PROD_APP=upendo
STAGING_APP=staging-upendo

compose-down: # terminate the docker compose services
	docker-compose down

compose-up: # run docker containers in dev mode
	docker-compose up -d --build

dev: compose-up | open-pgadmin open-web # build containers and open dev server and pgadmin

logs: logs-prod

logs-prod: # tail production logs
	heroku logs:tail -a $PROD_APP

logs-staging: # tail production logs
	heroku logs:tail -a $STAGING_APP

open-web: # open django dev server in browser
	open "http://localhost:8000"

open-pgadmin: # open pgadmin in browser
	open "http://localhost:5051"

shell: # run the shell inside the web container
	docker-compose exec app sh

stop: compose-down
