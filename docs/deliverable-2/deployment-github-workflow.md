 ## Deployment and Github Workflow

 ### How Do We Deploy?

 An overview of the deployment workflow was provided in the [main README](../../README.md).

 This document will go into more details, and explain reasoning for the decisions.

 ### Goals

 1. Iterate often, through small + frequent deployments
 2. Catch bugs early
 3. Keep production stable server stable for partner
 4. Keep staging server stable for team members
 5. Keep the flow as simple as possible
 6. Keep costs to $0


### Our Solution

1. Have a production-like development environment

* Accomplished using Docker Compose, and having the same, locked-in versions of Python, Python Requirements, and Postgres as we'd be using in Production
* Eliminates instances of "it works on my machine". If something is to fail in production, we want it to fail locally to allow us to catch and repair issues without disrupting others' workflow

2. Use a feature branch for your core development, which branches off of the master branch

* Feature branches make it easy to keep track of what's being developed
* Branching off of master aims to have us only one "step" or code change/commit away from the staging server
* Agreement between developers to keep feature branches small, and to deploy often to meet this goal and to reduce painful merge conflicts

3. Create a Pull Request to Master when you've completed your feature

* This triggers a CircleCI build
* Build instructions are defined in [circle.yml](../../.circleci/config.yml)
* CircleCI will run the unit tests and attempt to build the application
* This allows us to avoid failed builds to staging, and breaking the staging server
* CircleCI was chosen over Heroku Pipeline because it was free (whereas Heroku Pipeline was not)
* CircleCI was chosen over Github Actions because we found Github Actions to be a little slow (when working on A1)

* This also triggers a deployment of a [Heroku Review App](https://devcenter.heroku.com/articles/github-integration-review-apps)
* Heroku will deploy the branch to another server once CircleCI's build & tests are complete, and will throw a link up to the Github PR page to the deployed server
* We poke around in the deployed branch to ensure that the application behaves as expected
* The review apps share the same server as the staging server, to avoid having to populate the database with test data for each review app
* If something weird or unexpected is happening, the developer is expected to fix the code locally and push up their changes again. This will trigger a new CI build and a fresh deployment of the review app, allowing it to be re-tested
* Heroku Review Apps were chosen because they are a free feature that is not offered by CircleCI or Github Actions, and allow us to verify the veracity of our changes before merging into staging

4. Peer review of PR

* We have a private slack channel for the team where we post a link to PRs we've opened
* Team members are expected to review and comment on the PR, either in the private slack channel or on the PR itself
* Team members are given 24 hours for feedback, after which changes are merged. We've been good at providing timely feedback so far. No one has been blocked by having to wait for PR feedback

5. Merge the PR

* After unit tests and the CI build passes, the heroku app succeeds, and the PR has been peer reviewed, the developer can merge their branch to master
* Github has a feature which mandates that PRs be manually approved before merging. We did not turn this on because we trusted each other to be responsible, and found Slack as an easier medium to have conversations about the PRs than Github's PR interface.
* Developers try to "squash commits" and to rebase off master before/when merging to make the commit history as easy to read as possible.

6. Automated staging build

* Heroku is configured to listen to changes to the master branch and to deploy to the [upendo staging server](https://staging-upendo.herokuapp.com)
* When a PR is merged, a new commit is added to the master branch, which triggers an automated deployment to the staging server
* Migrations are run and Django static assets are collected as part of the build. No manual steps are needed. The build to staging is completely automated
* If any part of the build, migration, or static file collection (which includes running the react build and tests) fail, the entire build would fail, stopping faulty code from being pushed to production
* Ashwin receives an email notification whenever a build fails, and he looks into it. So far this has only happened if a developer accidentally overwrote or forgot to create a migration fail for the databse

* At this point, it may be sensible to ask why we don't have a development server and we merge directly to staging
* We were confident enough that our local Docker setup, our CircleCI builds, Heroku's review apps, and our manual PR review process allow us to catch enough bugs that if a feature branch's code passes these four steps, it's safe enough to merge to staging
* If we were a larger team across multiple departments, it might make more sense to cretae a development and/or integration environment before the staging environment. Given how small and cohesive our team was and given the additional safeguards we'd put in place, we opted for a simpler flow that allowed us to iterate quickly

7. Creating a Github Release / Git Tab

 * Around once every 7-10 days, we create a new release to production

 * This is done through Github Actions and Github's [release functionality](https://github.com/csc301-summer-2020/team-project-3-upendo-honey/releases).
 * When a team member is ready to deploy to production, they create a Github Release
 * Github releases are just wrappers around Git's Tag functionality. When a release is created, a tag is also created and appended to the latest commit in the master branch
 * A [Github Action](../../.github/workflows/deploy-prod.yml) is configured to listen for new tags to the master branch
 * When a new tag is detected, the Github Action [will deploy the master branch](https://github.com/csc301-summer-2020/team-project-3-upendo-honey/actions) to the production server

 * We wanted to automate as much of the production deployment process as possible while still controlling when to deploy to production. To keep the production server stable, we didn't want to automatically deploy every change to production
 * We opted for Git tags instead of another branch to enable simplicity. Developers only had to work off a single branch (i.e. master), but could still create a release whenever they wanted

 * We did this through Github Actions instead of Heroku or CircleCI because it was the most straightforward way to do it.
 * An open source Github Action existed for Heroku deployments, and could read the Heroku API key from the Github Repo's "secrets" section, which allows us to keep the production server more secure (by not checking the API key into source code)


### How We can Improve

* We believe this workflow achieves a balance between speed and stability (e.g. master branch + Git tags), and via security and usability (e.g. storing API keys securely + one-click production deployments).
* We've also accomplished this without using any paid functionality
* The main downside of this flow is that to leverage the functionality without paying any fees, we had to use three different tools (Heroku, CircleCI, Github Actions)
* If we had a larger budget, we could centralize functionality in a single service to make it easier for new developers to onboard
