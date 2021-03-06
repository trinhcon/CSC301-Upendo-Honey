# Upendo Web

A summary of the development requirements are described [here](./docs/deliverable-2/development-requirements.md), as required for the D2 deliverable.

For detailed requirements on setting up your local development environment and deploying to staging and production, see below.

## Initial Setup

1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) and run `heroku login` inside the project root

2. Ensure you have python 3.7+ installed.

* Ashwin set it up with 3.7.7 on OS X, locally
* The docker images uses Python 3.8.3 running on Alpine (for local deployment)
* The Heroku runtime is Python 3.8.3

## Running the application and developing locally (with Docker, recommended)

Docker is used to create a consistent development environment. At the time of writing, docker is not used in the deployment process.

1. [Install docker](https://docs.docker.com/engine/install/)

2. Create a file named `.env.dev` in the project root to store environment variables for development:

```
DJANGO_DEBUG=1
DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1 [::1]
POSTGRES_HOST=db

DJANGO_SECRET_KEY=foo
POSTGRES_USER=upendo
POSTGRES_PASSWORD=upendo
POSTGRES_DB=upendo
PGADMIN_DEFAULT_EMAIL=foobar@localhost
PGADMIN_DEFAULT_PASSWORD=upendo
```

The first three variables in the list above should not be modified, but feel free to change around any of the others.

3. Run `make dev`.

This builds the docker images by running `docker-compose up --build`

If you prefer the command to be run in daemon mode, you can run `docker-compose up --build -d`.

4. To access the admin interface:
`make shell-dev` # SSH into the shell of the app container
`python manage.py createsuperuser` # create a superuser
`exit` # leave the app container
`open "http://localhost:8000/admin"` # and login with the superuser credentials you created

* Ashwin has already created a superuser on prod and staging and can give you access on those servers if you need it.

5. Login to the [admin site](http://localhost:8000/admin) and create a few batches, beekeepers and forests

6. Visit the [index page](http://localhost:8000) and a [batch details page](http://localhost/batches/1)

7. When  you're finished and want to stop the docker containers, run `make stop`

## Django Models and Migrations

If you're new to Django, please [read about how migrations work](https://docs.djangoproject.com/en/3.0/topics/migrations/).

### Other helpful Make commands for local development

`make rebuild-dev` - rebuild and restart the 'app' container
`make shell-dev` - run the sh shell in the app container
`make pyshell-dev` - run the python django shell in the app container
`make migrations-dev` - makes and applies Django model migrations to the python app container


## Running the application and developing locally (without Docker)

*Caveat: Please only use this flow if you're having trouble with Docker on your machine. Ashwin has tried this out, but has not put a lot of time into it as he was focusing on the Docker flow. Please update the readme if you find that it does not work.*

_WARNING_: Please double and triple check your code works as expected on the staging server if you go this route, as your environment might not align with Heroku's.

1. [Install Postgres](https://www.postgresql.org/download/)

2. Set up a virtual environment: `python3 -m venv env`

3. Activate the virtual environment: `source env/bin/activate`

4. Run `pip install -r requirements.txt`

5. Set the following environment variables in your virtual environment:

```
DJANGO_DEBUG=1
DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1 [::1]
POSTGRES_HOST=localhost

DJANGO_SECRET_KEY=foo
POSTGRES_USER=upendo
POSTGRES_PASSWORD=upendo
POSTGRES_DB=upendo
```

6. Connect to postgres and:
* create a user with the password indicated in step 5 (or choose your own)
* create a database with the name you gave in step 5
* give the user you created access to that database


7. Run `python manage.py migrate`

8. Run `python manage.py createsuperuser` and run steps #4 and #5 from the docker section, above.

8. When you're done and you want to exit the virtual environment, run `deactivate`

## Deployment

1. Create a pull request from your feature branch to the master branch

2. Wait until tests are run successfully (this may take a few minutes; a green check mark will appear)

3. If you want some feedback, please tag your team members

4. Heroku will create a [review app](https://devcenter.heroku.com/articles/github-integration-review-apps) once tests have passed. Click on that link to make sure everything works as expected before merging your pull request

5. Merging to master will trigger the staging server to automatically rebuild with your code changes.

*_IMPORTANT_*: Once the application is live, only *one* change should be on the staging server at a given time to minimize risk. If your team mate is testing something, please help them resolve it before merging your stage.

6. Once you've tested your feature in staging, [Create a new release](https://github.com/csc301-summer-2020/team-project-3-upendo-honey/releases) in Github. This will apply a git tag to the most recent commit in master, which will automatically trigger the production server to rebuild.

For more details, please see the [Deployment and Github Workflow Documentation](docs/deliverable-2/deployment-github-workflow.md)

### Helpful Make commands for Heroku debugging

`make logs-prod` - tails the Heroku production logs
`make logs-staging` - tails the Heroku staging logs

### Data Model

![Data Model](docs/uml-diagrams/models.png)

For details on the model definition, see the Django [models.py](./web/models.py) file

### Danger Zone

*Danger Zone* - You should not need to use these:

* Heroku servers should be stateless. You shouldn't be tweaking the server. Instead, tweak the build script
* If you don't have enough visibility into what's going on, try logging more and tailing the logs rather than SSH'ing into the server

    `make shell-prod` - SSH into the prod server
    `make shell-staging` - SSH into the staging server
