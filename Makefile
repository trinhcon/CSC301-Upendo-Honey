# Docker tasks

compose-down: # terminate the docker compose services
	docker-compose down

compose-up: # run docker containers in dev mode
	docker-compose up -d --build

dev: compose-up | open-pgadmin open-web # build containers and open dev server and pgadmin

open-web: # open django dev server in browser
	open "http://localhost:8000"

open-pgadmin: # open pgadmin in browser
	open "http://localhost:5051"

shell: # run the shell inside the web container
	docker-compose exec app sh

stop: compose-down
