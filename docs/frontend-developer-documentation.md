# Frontend Documentation

## 1 Technologies Used
The main technologies used for development are React libraries and Javascript
APIs. To understand the frontend code in this project a basic understanding
of React and/or Javascript, CSS and HTML features is required. This includes
also consulting the frontend documentation. You can learn more about these
technologies by using the following links:

It is recommended to learn these technologies in the order.

**HTML:**
https://developer.mozilla.org/en-US/docs/Web/HTML

**CSS:**
https://developer.mozilla.org/en-US/docs/Web/CSS

**Javascript:**
https://developer.mozilla.org/en-US/docs/Web/JavaScript

**ReactJS:**
https://reactjs.org/

**Supplementary Sources (Further explained in section 3: dependencies):**

* [CSS Flexbox Styling](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [CSS Grid Styling](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [Common Project Structure](https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70)
* [EmailJS API](https://www.emailjs.com/docs/examples/reactjs/)
* [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/overview)
* [Google Maps KML handling](https://developers.google.com/maps/documentation/javascript/kml)
* [Chart Library](https://www.chartjs.org/docs/latest/)

---

## 2 Frontend Only Installation and Local Testing

Run the following commands in the frontend development folder
on a commandline interface of your choice:

  * `npm install`, This simply installs all neccessary dependencies according
  to the `package.json` configuration.
  * `npm start` , This starts the app at a local host and allows you to test
  all frontend features. Data that is fetched needs to be substituted with
  static or mock objects (stubs) to test code.

---

## 3 File Structure


### 3.1 File Tree

Our Project frontend code is organized as follows:

* src 

  This file contains all content that is displayed on the webpage, but not all
  project metadata. It contains the `App.js/App.css` file and landing page
  files.

  `content.js` is static content that is displayed, this includes content that
  is not stored in the database and is constant regardless of the alphanumeric
  code entered. If `state.testFrontend` is set to true, then database content
  is also replaced by static content. It is normally set to false and can be
  used as a backup in production code. To change any content for testing, you
  only need to change members in the `content.js` file.
  * flows

    Each flow within our application has their content stored and structured in
    these files. Each flow's slides have a JS and CSS file pairs that contain
    that flow's components. The menu page has its js and css file stored
    directly in this subfolder. Because each page is very distinct in all
    of it's design and features, each page has it's own components and only
    import a header, a footer and arrow buttons (for desktop). CSS is styled
    mostly in grid format for desktop, but flexbox for mobile. Notice that when
    you see "header", "footer", and "*arrow", in CSS they refer to the imported
    components.

    Below is a list of the four flows, each with its own subfolder which
    contain the JS/CSS files for their structure.

    NOTE: Recall that to change content (and not structure) modify the
      `content.js` file instead.

    * Beekeeper Flow
    * Honey Flow
    * Tanzania Flow
    * Environment Flow

  * images (all image assets)
  * modules (code reused commonly among most if not all pages)
  * scripts (script assets, currently only contains kml sample file)
* README.md

  Installation instructions, requirements and testing/deployment procedure

* public

  Contains public files viewable by the user, currently only significant file
  is the `bee-bullet.png` as the favicon.

* build (project build)
* package.json (project data)
* node_modules (node project files, for dependencies)
* web (backend django integration files)

### 3.2 Content Organization

Each page has it's own js and css file where it defines it's own component.
Pages also connect/redirect to each other through react-router components
(explained below). Finally each page also fetches data using functions
implemented in `App.js`. 


## 4 Project Dependencies

This app was built on top of `create-react-app` and as a foundation, we then
added our application code and backend django code on top of it. This means
that standard dependencies required by react (e.g. `react-dom`) are neccessary
to build the project. Aside from that, below are other dependencies and
third-party software that is used in the project. Most slides contain some
sort of unique component, third-party service or structure that can be
read in section 3 (project dependencies).



### 4.1 React Router

[React Router Website](https://reactrouter.com/)
`import ... from "react-router-dom";`

This is a common library to use and is what handles frontend URL routing. It
will handle and parse all URLs prefixed with `/app/:alphacode/`. The app
simply designates that it is the application  interface part of the program
(instead of it's APIs, or administrative interface). The base URL is also
directed to the main landing page.

The `:alphacode` corresponds to the alphanumeric code that is entered by the
user. This allows the application to fetch data that matches the URL that was
used from the backend through its REST APIs. This feature allows a link to
our site to be embedded in a QR code. In addition, users that share a URL
will see identical flows. This is equivalent to entering the code in the
landing page except the URL can also lead to any where in the application
rather than just the menu. If the user enters an invalid code, PUREJOY data
is instead retrieved. If PUREJOY fails, the current implementation is to
default to static content. The application does not know why the request
from the API failed.

Unsurprisingly, this frontend routing is used on all pages to connect them
to eachother. The component representing each page is passed into the `Router`
component that the library provides. This also includes all props associated
with them and is performed in `App.js`.

All other URLs will be parsed by Django in the backend, please see their
documentation for further details. Worth quickly noting that URLs prefixed with
`/admin/` take the user to the administrative interface and `/api/v1/` takes
the user to the REST APIs developed by the backend.

---

### 4.2 Google Analytics


---

### 4.3 Google Maps API

[Google Maps Javascript API (same as above)](https://developers.google.com/maps/documentation/javascript/overview)

This feature is provided by google directly and requires an account (with
an associated API key) to use. Ask Upendo if credentials for the account are
necessary. It simply displays an interactable google map for the user to use.

This feature does not import the API in the same way as with other
dependencies, instead it dynamically imports the API using the script element
in the component where it is used (`tanzania-map,js`). The `src` link and the
API key are stored in `content.js` and passed into component. These fields
are necessary for the google map api to be associated with an account for
ownership. The display details for the map are also passed into the
component from `content.js`. These details include the inital coordinates
where the map is centered.

Upon loading, the map component containing the google map also loads a KML
file that is fetched when the user enters a code. This passed into the map
component which will then generate a display according to the KML file.
Processing of the file is implemented and handled by google. The only
important consideration to keep in mind is that the KML must be publicly
available and served to google from a link. This is the link that is
within the data that was fetched once a code is entered.

---

### 4.4 EmailJS + Sendgrid

[EmailJS API](https://www.emailjs.com/docs/examples/reactjs/)
[Sendgrid](https://sendgrid.com/)
`import emailjs from 'emailjs-com';`

Emailing is not handled by backend, it is fully handled by a pair of third
party service providers. EmailJS serves as an interface for our code to
integrate with, its code is used from within our email form component. Sendgrid
is the third party service that actually sends the email and is signaled by
EmailJS when to do so. Both account credentials and details can be obtained
from Upendo. There is also a gmail associated with the sendgrid, which it
uses to send emails to itself when the email form is used. The gmail must be
registered and verified with sendgrid (it already has been verified). Its
credentials can also be provided by Upendo.

The EmailJS interface requires:
  * User ID, of the EmailJS account
  * Service ID, On Email you don't have to use sendgrid, you can register any
    service by using an API key for security purposes. One has been created
    for sendgrid
  * Template ID, it converts input entries from the form into a email format
    that is specified by the developer on a template. Template ID simply
    represents that
  * The target of the Email form (the submission button on the form), this
    is passed through the event that passed as an event handler. This is the
    only parameter that is not in `content.js`

The submission will cause the EmailJS API to retrieve detail from the overall
form that surrounds the submission button. The inputs are formatted into an
email and sent by the service. The form currently takes in a message, an email,
a name and a hidden input that contains the beekeeper name (who is supposed
to receive the email). Simply adding new inputs with a name parameter will
allow them to be added to the email format on the EmailJS Account.

When an email is attempted to be sent, the input message is replaced by either
a success or failure message. These messages can also be editted in content.js
It is possible to detect why the email form failed, however, the current
implementation does not handle error cases separately.

Note that because the software is all frontend, using the email form in a
local environment for testing will be the same as if you were using the email
form in production. This means that it will count as an email usage that is
accounted for (and limited up to a maximum amount) on the EmailJS and sendgrid
accounts.

To fully understand this service it is recommended to access all three
accounts and perform a test run. In addition, to understand integration
or installation, please visit the EmailJS supplementary link.

---

### 4.5 ChartJS

[Chart Library](https://www.chartjs.org/docs/latest/)
`import Chart from 'chart.js';`

Charts through the environment flow are all generated using this chart js
library. The chart JS interface simply needs to be provided with labels and
corresponding data. Providing the chart with abnormal label/data sets, might
cause the API to generate abnormal graphs. Data for these graphs are passed in
through `content.js` to each page that uses it. This data can be updated in
real time using events and signialing the graph with `graph.update()`

Integration and Installation code can be found through the link provided.
This code is currently only used in the environment/C02 flow. Note that the
library provides a large number of other options can can be passed in as
supplementary objects when the chart is being parsed. You likely can edit
these options and update that chart if desired. Note that all features
including styling need to be configured through the chart API. Only the
sizing and position of the chart (or it's surrounding container) should be
styled through CSS.


---

### 4.6 Swipeable

[npm documentation](https://www.npmjs.com/package/react-swipeable)
`import ... from 'react-swipeable';`

On our mobile interface, users tap and swipe to move from page to page on our
application. This library implements this feature for mobile users. Note
that it is only designed to be used on devices with swiping enabled or
intended. Dragging across the screen with a mouse is not considered to be a
drag on regular desktop browser interfaces. We only utilize the swiping
left and right on screen feature in this library. It is used on all pages
except the landing page and main menu (where tapping is sufficient).

---

### 4.7 Media Query

[npm documentation](https://www.npmjs.com/package/react-responsive)
`import MediaQuery from 'react-responsive';`

CSS innately can style elements using its own media queries, our react project
uses a library to have similar behaviour for manipulating elements. We simply
specify relative screen sizes and decide what elements should appear
in specific screen sizes. Only those elements will exist in the DOM, when the
screen is in the specified range.

---