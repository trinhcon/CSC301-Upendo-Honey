## Development Requirements

### Tech Stack

*Backend*:

* Python 3.7+
* Django
* Postgres

For details on the Python requirements, please see [requirements.txt](../../requirements.txt)


*Frontend*:

* Node.js (for the build)
* React

For details on the frontend requirements, see [package.json](../../upendo-frontend/package.json)


 ### How Do We Develop Locally?

 Please follow the detailed instructions in the [main readme](../../README.md)


 ### How Do we Deploy To Our Staging and Production Servers?

 Please follow the detailed instructions in the [deployment and github workflow readme](./deployment-github-workflow.md)


 ### What if I Want to Deploy to Another Server?

 1. Set up two servers:

 * A server to run the backend and build the frontend. This will need Python 3.7+ and Node.js 12+
 * A Postgres database

2. Configure the environment variables as defined in the [main readme](../../README.md)

3. Install the Python requirements by running `pip install -r requirements.txt`

4. Running Django migrations using `python manage.py migrate`

5. Run `npm install` from the project root to build the frontend

6. Run `python manage.py collectstatic` to allow Django to serve the frontend files

7. Start up the web server using the command: `gunicorn upendo.wsgi --log-file -`
