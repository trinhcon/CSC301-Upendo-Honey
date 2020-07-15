# YOUR PRODUCT/TEAM NAME

 > _Note:_ This document is meant to be written during (or shortly after) your review meeting, which should happen fairly close to the due date.      
 >      
 > _Suggestion:_ Have your review meeting a day or two before the due date. This way you will have some time to go over (and edit) this document, and all team members should have a chance to make their contribution.


## Iteration XX - Review & Retrospect

 * When: July 13 5:00pm
 * Where: On Zoom

## Process - Reflection


#### Q1. Decisions that turned out well

List **process-related** (i.e. team organization and how you work) decisions that, in retrospect, turned out to be successful.
Scheduling Tasks on a Trello Board
Schedulung Regular Meetings for standups and meeting with the partner
Communication with the BRD and over whatsapp with the partner

 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Explain why (i.e. give a supporting argument) you consider a decision to be successful.
 * Feel free to refer/link to process artifact(s).

  1. Scheduling Regular Meetings and Standups with the partner:
    We Scheduled meetings with the partner every Tuesday morning and we scheduled
    regular standups twice a week for the development team. This decision was very
    helpful because it led to very consistent communication of new features and code
    infrastructure that was being developped. Each time we had a meeting we would
    record either in a ticket or in meeting minutes what was previously discussed.
    This was helpful in keeping track of progress between the development team members
    and prevent people from blocking eachother. In addition, this help with the
    clarification of feature details and implementation of those features among the
    entire team. A Sample artifact (meeting minutes) that resulted from this is show
    below:

```
Action Items:
    Partner to complete CO2 mock-up (and have a look at https://www.chartjs.org/samples/latest/
    Chart.js samples
    Area charts. Boundaries (line) Datasets (line)
    www.chartjs.org
    ) and add to BRD by the end of the day Thursday July 2nd

    Partner to organize tasks in BRD (COMPLETED)
    Partner to provide email information to front-end team via WhatsApp (COMPLETED)
    Linda to share Trello board with Partner (COMPLETED)
    Back-end to add fixing of api access to the backlog in Trello (COMPLETED)
    Front-end team to check information provided by Arno on Google Maps API and present thoughts
      by next week
    Back-end to confirm that Honey flow contains the required information for display based on
      Partner’s mockup in the BRD by next week

Decisions:
    Dev team to complete items according to priority list written in the BRD, trying to finish
      as much as they can (however we cannot guarantee completion of every item)
    Theme of the design flow is that of natural honey coming from the forest: naturesque, green
      and gold, less honey focused
    No particular attachment to the shape of the portrait, layout of icons on the menu, the
      icons used in the progress bar, the colour/shape of the next arrows

Meeting Minutes:
    Front-end presented the working version of the current design
        Links directly to the menu, partner is happy with the current functionality, just desires
          a change in aesthetics
        Email will information will be provided from partner so front-end can link it directly to them
    Update on the overall circumstances of the team, transfer of Natalia’s work to the rest of
      the team members
        Ashwin is handling most of the backend tasks, which were largely front-loaded.
        Conroy and Linda are handling the BRD, Trello and coordination tasks
        The deadline for the next deliverable is (small correction) given extenuating circumstances
          is July 16th rather than July 9th
        Team has created a list of tasks for the partner to prioritize in the BRD, the team will try
          their best to go through them in order of preference but there is no guarantee to finish
          every single one
    Discussion of aesthetics, changes and what to keep
        Would like to emphasize the branding as coming from the forest, natural, organic honey
        Very flexible on the way items are laid out in terms of size, positioning and filler so long
          as the forest theme is adhered to (i.e. using the leafy wallpaper and using green/gold
          aesthetic)
        Partner is aware that certain pages, such as the beekeeper and menu may look quite large on
          the desktop, so dev team will attempt to make appropriate adjustments
    In regards to specific elements of the design
        Landing Page: 
            Layout is fine, but would like to remove the bee to be coherent with the theme.
            Add the wallpaper filler instead.
        Beekeeper Flow: 
            No preference in terms of square or oval shape.
            Progress bar can be either the bee icons or a leaf, not particular attachment, can be
              different shapes or design as well
            Arrows can also be any design, so long as they match the theme (simpler is better)
        Forest Flow: 
            No major comments/questions from the dev team about the design.
            Dev team will follow Partner’s research on Google Maps API and get back by next meeting
              on how the zoom functionality will be incorporated (redesign to come first though)
        Honey Flow:
            Text will be configurable and come from the database (recipes will stay consistent)
            Back-end team to confirm the Honey model contains the required fields for front-end
              to display
            Honey harvesting and health information will be consistent for each flow
        CO2 Flow:  As confirmed earlier, will be consistent for each flow and provided within
          the next few days.
            Consider using less text for the flow, using infographic displays and less technical
              language
            Partner to look into Chart JS link to find graphs
            Idea of comparing the CO2 emissions between Upendo honey and the honey from other
              brands in a flow chart
    Backend presented the functionality of the admin side and api endpoints
        Slight issue with being able to modify api while not logged in, will be fixed
```

  2. Posting and Organizing Tasks as Tickets on Trello
    We simulated a pseudo scrum-kanban agile methodology using a trello board filled with
    tickets. Each ticket would represent either a user story or a key component that would
    lead to the completion of a user story. This process was very effective in organizing
    and planning progress of our project's development. We'd make "milestones" that are
    essentially sprints in scrum that would keep the project development at a steady pace.
    This also helps us keep track in terms of percentage of remaining work for the
    development team for the remainder of deliverable or the entire project. This was also
    particularly effective at helping us discuss specific features in detail because we
    could comment on the particular discussion that is local to each ticket. As a result
    communications, links and pictures could be easily found by finding the localized
    conversation on the ticket.

  ![Image of Trello Board](/docs/deliverable-2/trello.png)

  3. Communication with partner through BRD and WhatsApp group chat
    We created a business requirements document (BRD) with our partner to specify what
    features are required in the project and the details of these features. This includes
    any possible features that our partners are currently speculating. This document has
    greatly helped in the narrowing the specifications for all features necessary for the
    project. To avoid confusion about changing features and specifications, we kept many
    of our final (or pending) decisions grouped into a single document. The document
    contains various details such as a database schema, application mockups and links
    to possible tools we would use for the project.
    A copy of the BRD is also placed in our documentation repository, please check the
    artifact for more details and references


#### Q2. Decisions that did not turn out as well as we hoped

List **process-related** (i.e. team organization and how you work) decisions that, in retrospect, were not as successful as you thought they would be.

Communication issues between the frontend and backend development
Development in shorter iterations with the partner (they wanted a redesign)
Slack Channel division between slack


 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Explain why (i.e. give a supporting argument) you consider a decision to be unsuccessful
 * Feel free to refer/link to process artifact(s).

 1. Communication issues due to the separation of backend and frontend tasks.
 Our team divided the tasks between frontend and backend which resulted in
 tumultuous development early on in the project. Many issues and concerns were
 raised as different team members were not experienced in tool used by other
 members. As a result, preparation for development had a very high learning
 curve which resulted in a few weeks required to establish a stable set of
 tooling and basic code infrastructure. This decision is unsuccessful in
 simplifying development because when frontend and backend development
 connected through a REST API, it was not always clear which end of development
 was causing issues. This would recur a few times where one of the team's half
 would be blocked by another.

 2. Channel division for topics on slack. Our team did not use separate private
 channels for different topics on slack. This resulted in all of our conversation
 occuring mostly in threads or in the form of comments of other responses. By
 mixing all of our conversation into a single channel, it became more difficult
 to properly discuss each topic in depth because it could get lost in the chat.
 Although Slack has a search feature, it would make finding details that we
 discussed more difficult. In addition to remember all the necessary links and
 and tools we'd have to also search the details up through the slack. This was
 particularly inefficient when we had long messages for minutes or extended
 conversations.

 3. Development in large changes. An early issue we had in developing the
 frontend was implementing a large series of changes in a single pull request
 to master. This raised some concerns with integration testing to ensure that
 the code worked together. Although the code did work with minor changes, time
 was invested in tracing and debugging large amounts of code. In general smaller
 commits and increments are better changes.
 Visit:
 https://github.com/csc301-summer-2020/team-project-3-upendo-honey/pull/22
 for more details


#### Q3. Planned changes

List any **process-related** (i.e. team organization and how you work) changes you are planning to make (if there are any)


 * Ordered from most to least important.
 * Explain why you are making a change.

 Our team will be adding slack channels to our development process. We'll separate
 development channels for code specific discussions from the documentation channel
 involving conversations with our partner and documentation details required for
 both deliverables and the final handoff to the partner. This change will help
 us organize and separate any issues on our project.
 
 Our has team has decided to continue development but under the guidelines
 of what is best for development rather than deliverable deadlines. When the
 partner began to make changes to the design, and hence removed some progress,
 this made it considerably more difficult to adhere to course deadlines. To be
 more focused on delivering the best possible application for Upendo Honey
 we have decided to focus the rest of development by milestones that best
 fit development rather than deadlines.

 We will be adding our partners to our trello board so they can keep track of 
 the progres with respect to each individual detail. We are making this change
 so they can keep up with our pace of development and prioritize which tasks
 they deem most important. This is particularly important because our partner
 requested a redesign of the overall application which dramatically increased
 workload. This fact is further exacerbated by the fact that 40% of our team
 decided to drop the course, leaving their responsibilities to the remaining
 three members


## Product - Review

#### Q4. How was your product demo?
 * How did you prepare your demo?
 * What did you manage to demo to your partner?
 * Did your partner accept the features?
 * Were there change requests?
 * What did you learn from the demo from either a process or product perspective?
 * *This section will be marked very leniently so keep it brief and just make sure the points are addressed*

 Our demonstration was prepared using a staging server that is part of our
 continous delpoyment and continuous integration pipeline. This was the most
 optimal method because it lets our partner view our tested and integrated
 project in its latest version. The staging server database does not change
 as different iterations of frontend code are applied to the frontend.
 We managed to demo the landing page, the menu page, the beekeeper flow and
 the honey flow. The beekeeper flow consists of a potrait and letter from
 a beekeeper who contributed to the consumer's batch as well as an email
 form that allows the user to email back to the owner. The honey flow consists
 of teaching the purchaser details about their honey, how that honey is
 harvested and health benefits of honey usage.

 Our partner did accept our features, this is likely because we present to our
 partner every week based on new features that were implemented from the week
 prior. This means we can received up to date feedback from our partner and
 we can discuss more thoroughly details that they meant rather than details
 that they said. Because of these recurring "demos" we embededded in our 
 process, we increased the likelihood that the our project features would be
 accepted by our partner. Despite this, there were indeed minor changes
 requested such as sizing or adding labels to certain sections.

 Because we had recurring demonstrations we learned lessons much earlier than
 the D2 deadline. We learned that partners may want aspects to be slightly
 different than what they initially planned. Furthermore, When implementing a
 website, elements may be difficult to size and place precisely in terms of
 CSS styling and HTML element organization. We also learned that keeping a
 timeline of feature development can be very helpful for future review.


