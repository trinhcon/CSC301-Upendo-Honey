# Upendo Web

## Initial Setup

1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

2. Ensure you have python 3.7+ installed.

* Ashwin set it up with 3.7.7 on OS X, locally
* The docker images uses Python 3.8.3 running on Alpine (for local deployment)
* The Heroku runtime is Python 3.8.3

3. [Install docker](https://docs.docker.com/engine/install/)

4. Set up a virtual environment: `python3 -m venv env`

5. Activate the virtual environment: `source env/bin/activate`

6. Run `pip install -r requirements.txt`

7. When you're done and you want to exit the virtual environment, run `deactivate`


## Running the application locally

Docker is used to create a consistent development environment. At the time of timing, docker is not used in the deployment process.

1. Create a file named `.env.dev` in the project root to store environment variables for development:

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

2. Run `make dev`. This command runs the folowing (in the background)

* Runs `docker-compose up --build` to start the app, the DB, and pgadmin
* Points your browser to [localhost:5051](http://localhost:5051) to access pgadmin (using the `PGADMIN_DEFAULT_EMAIL` and `PGADMIN_DEFAULT_PASSWORD` you set in `.env.dev`, above)
* Points your browser to [localhost:8000](http://localhost:8000) to access the web app

3. When  you're finished and want to stop the docker containers, run `make stop`

## Developing Locally

1. Ensure you've run the Initial Setup and Running the application locally steps, above.

2. Make code and database changes as you see fit. The browser should update accordingly. Please make your code changes in a feature branch. When you're done, create a pull request to master.

## Deployment

1. Create a pull request from your feature branch to the master branch

2. Wait until tests are run successfully (this may take a few minutes; a green check mark will appear)

3. If you want some feedback, please tag your team members

4. (pending) Heroku will create a review app once tests have passed. Click on that link to make sure everything works as expected before merging your pull request

5. (pending) Merging to master will autoamtically trigger the staging server to automatically rebuild with your code changes. Please ping your coworkers on slack or WhatsApp for immediate review.

*_IMPORTANT_*: Once the application is live, only *one* change should be on the staging server at a given time to minimize risk. If your team mate is testing something, please help them resolve it before merging your stage.

6. (pending) Once you've tested your feature in staging, [Create a new release](https://github.com/csc301-summer-2020/team-project-3-upendo-honey/releases) in Github. This will apply a git tag to the most recent commit in master, which will automatically trigger the production server to rebuild.
