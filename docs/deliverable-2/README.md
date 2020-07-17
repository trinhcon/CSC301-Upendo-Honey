# YOUR PRODUCT/TEAM NAME

> _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical. 

## Description 
 * Provide a high-level description of your application and it's value from an end-user's perspective

 The overall application is a promotion app mobile web app. The user is supposed to receive
 an alphanumeric code from the label of a retail product made from our partner's honey. The
 product would also have a URL that takes the user to our website. From the landing page of
 our website the user can enter the alphanumeric code printed on the retail product's label.
 Entering the code will take them to a menu of customized flows of websites slides. Each
 code is related to a batch of honey made from beekeepers; one of which who is written their
 own letter to the customer. The customer will be able to choose between a variety of topics
 to explore further in each flow. After they are finished reading they can read a different
 topic by selecting another one from the main menu.

 * What is the problem you're trying to solve?

 The objective of the application is to promote tazanian honey and raise awareness to allow
 the partners to have premium on their sales. They want to publicize unique features of
 their honey and their manufacturing process; particularly how closely they work with their
 beekeepers to produce honey in wild environments.

 * Is there any context required to understand **why** the application solves this problem?

 There is no special context required to understand why the application solves this problem.
 The project is straight forward and openly advertise information about Upendo Honey's
 produce.

## Key Features
 * Described the key features in the application that the user can access

 The key features involve entering a code in the landing page, being able to select the
 flow for their preferred topic from the meny page and be able to slide back and forth
 between slides in their selected flow. The entire app is designed to be exploratory
 depending on the user's preferences. The user will be able to see whichever flwo they
 choose 

 * Provide a breakdown or detail for each feature that is most appropriate for your application
 
 Additional interactive features include:
  * Submitting a form to send an email back to the beekeeper
  * Being able to access any point in the application through a valid URL. This means that a URL or QR code (with the URL inside)
    can be used to share specific portions of the application.
  * Mobile users can slide their phones screens, while desktop users can use buttons instead. (Responsive Web Deisgn)

 * This section will be used to assess the value of the features built

## Instructions
 * Clear instructions for how to use the application from the end-user's perspective
 * How do you access it? Are accounts pre-created or does a user register? Where do you start? etc. 
 * Provide clear steps for using each feature described above
 * This section is critical to testing your application and must be done carefully and thoughtfully

 Go to "https://upendo.herokuapp.com/".
 From here you can enter any code that you've received from the label of a product
 made by Upendo's Honey. If you do not have a code you can use the standard "PUREJOY"
 code that is noted in the landing page's description. Once your code is entered,
 you will be taken to a menu page that let's you choose between a variety of topics
 to learn more about Upendo Honey products. These flows are customized for each
 code. Currently, only the beekeeper and honey flow work properly. A user can
 select either of those icons to progress thhrough these flows and learn more about
 the company's beekeepers or facts about honey. To progress through the flows the
 user will need to use the side arrows on desktop, or use slide left and/or right
 on a mobile phone. This is the general use of the application.
 
 Some slides will have additional features other than visual data. For instance the
 beekeeper flow contains an email form which uses EmailJS. The user can enter their
 name, email and a message that they would like to send to their beekeeper. After
 clicking the send button, a description will replace their message to let them
 know if the message was sent properly or not. The user can then continue on to
 other slides.

 Each **Page** in a flow can be accessed directly by a user through a URL. This means
 that if a user wants to share a particular page of the flow customized by the code,
 they can simply share the URL. Thus URL can also be embedded in a QR code and
 will present the exact same information that would be displayed by the sharing user.

 To be clear: There is NO need for a user to have done any registration or have done
 anything prior to use. Any user can use the "PUREJOY" basic code and any user can
 also user a code found on the label of one of Upendo Honey's products.

 This summarizes all of the current user features implemented in full for D2.
 Much of the user experienced is selected by the administrator who chooses what
 is presented on a slide to the user. There is an entire administrative interface
 to input data into the database, as well as new flow data for other alphanumeric
 codes so that the partner can customize the experience of the user based
 entirely on the codes provided by them. Most of the **user's** features are
 visual because the is a **promotional application** meaning while there are
 some interactive features, the application is meant to have information flow
 mostly in one direction: towards the user.

 To properly assess the development we would also like to briefly mention the
 the administrative interface because this is where most of the work is
 implemented. If you think of a tv commercial, most of the work is done by
 the people behind the scenes, not necessarily the "end-user". With that
 justification we will explain the administrative interface too. We can
 customize the text in each of the flows using properties that are changed
 in the backend administrative database interface. This includes uploading
 any images and text messages of the partner's choosing. Much of our work
 was in allowing the partner to have this flexibility in making each flow
 for each beekeeper or batch of honey.

 You can access the backend at: https://upendo.herokuapp.com/admin/
 Where you can login with the credentials provided to you on slack.
 From there you will see a screen where to can add or modify database
 table instances. This means that you can directly control what the user
 sees. After modifying or creatinga flow here, you can go to the original
 app landing page and enter the code of the flow you modified/created.
 This will take you to the new/updated flow that you just configured using
 our backend interface.

 You can see how the information is accessed from backend through the user
 interface from frontend by viewing the apis we've implemented. To do this,
 simply go to: https://upendo.herokuapp.com/api/v1/ and select the REST api
 that you want to view directly. The information provided is indeed public
 so you will be able to see the data displayed on the frontend website, here
 instead. The batchmember api translates the code into a key for each of the
 flows. The other flows take these keys to return the information specific
 to the alphanumeric code that was previously entered in the landing page.

 You can go to: https://upendo.herokuapp.com//api/v1/batch-members/PUREJOY/
 for an example of what would be returned. If you are logged in as an
 administrator, you could make changes. Otherwise, you are unable to make
 changes if your are not authenticated.


 
 ## Development requirements
 * If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
 * Briefly describe instructions for setting up and running the application (think a true README).
 
 ## Deployment and Github Workflow

Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.

 * Be concise, yet precise. For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Describe your overall deployment process from writing code to viewing a live applicatioon
 * What deployment tool(s) are you using and how
 * Don't forget to **briefly explain why** you chose this workflow or particular aspects of it!

 ## Licenses 

 Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

 * What type of license will you apply to your codebase?
 * What affect does it have on the development and use of your codebase?
 * Why did you or your partner make this choice?

 We will be applying the **GNU General Public License v3.0** to the project repository
 This decision had absolutely no effect on the development and use of our codebase.
 The choice of license had no effect whatsoever on development. This is because it
 is irrelevant to the development team how a third party uses the code.

 Our partner was the one who made this choice. They chose GNU GPL v3.0 because it
 was simply a standard licence used by many open source software repositories and
 Upendo heony had no particular need to conceal its codebase. They decided that
 simply following many other developers in using this commong licence was the best
 choice for them.
 

