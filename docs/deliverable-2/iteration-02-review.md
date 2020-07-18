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

  1. Scheduling Regular Meetings and Standups with the partner:
    
We Scheduled meetings with the partner every Tuesday morning and we scheduled
regular standups twice a week for the development team. This decision was very
helpful because it led to very consistent communication of new features and code
infrastructure that was being developped. Each time we had a meeting we would
record either in a ticket or in meeting minutes what was previously discussed.
This was helpful in keeping track of progress between the development team members
and prevent people from blocking eachother. In addition, this help with the
clarification of feature details and implementation of those features among the
entire team.


Sample artifacts (meeting minutes) that resulted from these meetings are show
below:

(https://github.com/csc301-summer-2020/team-project-3-upendo-honey/docs/deliverable-2/Partner_Minutes.docx)

(https://github.com/csc301-summer-2020/team-project-3-upendo-honey/docs/deliverable-2/CSC301_Metting_Minutes.pdf)





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

  ![Image of Trello Board](/docs/deliverable-2/trello.png);

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
    artifact for more details and references.

    (https://github.com/csc301-summer-2020/team-project-3-upendo-honey/docs/deliverable-2/BRD.docx)


#### Q2. Decisions that did not turn out as well as we hoped

List **process-related** (i.e. team organization and how you work) decisions that, in retrospect, were not as successful as you thought they would be.

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

 Our frontend team depended on the idea that the database and REST APIs were
 made so that they could check that their interaction with backend was functional with it.
 Conversely the backend team were worried that they did not see as much progress
 from the frontend. This is because much of the frontend code that was initially
 developed were not all styling features and visual effects. This lead the backend
 end team to worry more than necessary. These effects made our team less
 synchronized, and this would have been solvable with less separation of responsibilities
 and more co-operation.

 Our backend team was also far more experienced with web development in comparison
 with the frontend team. Because of this descrepancy there was a much larger
 difference speed of development. A more ideal solution would have addressing the
 connection between frontend and backend prior to initial development. The many
 connection issues that arose could be more easily solved by backend members than
 by frontend members and so better synchronization would have been critical.

 An example of an issue that we had with frontend is shown in an image below.
 It turns out that this connection error was not an issue with frontend and that
 it was some dropbox configuration issue. This would be more easily solved if
 both teams had been more in sync.

 ![Issue with accessing data from frontend](/docs/deliverable-2/connection_error.png);
 

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

 Below, we can see that extended conversation into separate threads. While
 this may be okay for the conversation when we have it, it is much more
 difficult to find previously discussed information. In addition, the context
 of each conversation would be more ambiguous and less efficient because each
 topic would be brought up among eachother. This makes the overall conversations both
 intertwined but also unnecessarily complicated.

 ![Packed Slack Conversation](/docs/deliverable-2/packed_conversation.png);

 3. Development in large changes. An early issue we had in developing the

 frontend was implementing a large series of changes in a single pull request
 to master. This raised some concerns with integration testing to ensure that
 the code worked together. Although the code did work with minor changes, time
 was invested in tracing and debugging large amounts of code. In general smaller
 commits and increments are better changes.

 Visit:
 https://github.com/csc301-summer-2020/team-project-3-upendo-honey/pull/22
 for more details about an example

 Because our large amounts of commits in the first patch including frontend changes
 and connection to backend, the commit is very long. This causes iterations of our
 project to be completely mixed with each other. It is not obvious when or where
 a feature was developped by merely viewing the difference in content of files
 through Github's native support for viewing changes between branches. This made
 it substantially harder for the backend team to understand where a feature originated from
 and how to understand our code.

 On another note, because our commits are too large, reviewing and debugging the
 app would be more difficult. Since our collective changes are all together,
 discerning which of those changes causes unexpected behaviour would requiring
 more tracing of code to find our the origin of the bug. This means that we would
 spend more time looking for the problematic code rather than developping new code.
 We would save a substantial amount of time if we sent code in small increments.
 Althought this would mean more time spent on commits, this would increase
 the quality of our code, its maintainability and overall still consume less time.




#### Q3. Planned changes

List any **process-related** (i.e. team organization and how you work) changes you are planning to make (if there are any)

 1. Our team will be adding slack channels to our development process.
 
 We'll separate
 development channels for code specific discussions from the documentation channel
 involving conversations with our partner and documentation details required for
 both deliverables and the final handoff to the partner. This change will help
 us organize and separate any issues on our project.

 As we mentionnned before, this will clean up much of our discussion space because
 all of the issues and concerns are piled up together. It addresses the issue of
 a message being "lost in chat". And streamlines much of our conversations in a
 clear and retrievable fashion (we can come back to see them later).

 We will be including more channels so that we can better compartmentalize
 topics and discussions. You can see this in the image below:

 ![Slack Channels](/docs/deliverable-2/slack_channels.png);
 
 2. Our has team has decided to continue development but under the guidelines
 of what is best for development rather than deliverable deadlines.
 
 When the
 partner began to make changes to the design, and hence removed some progress,
 this made it considerably more difficult to adhere to course deadlines. To be
 more focused on delivering the best possible application for Upendo Honey
 we have decided to focus the rest of development by milestones that best
 fit development rather than deadlines. This means

  * We will be scheduling features that will be completed on a weekly basis
  * Features will be completed at a date before the deadline, that matches
  with our weekly standups so that there will be visible progress in those
  meetings
  * Features will be addressed one at a time in full and we will not progress
  to another untils those are finished. This is particularly important due to
  our partner's choice to redesign the project. If the partner wants more
  features, we will fully complete one and then proceed to the other to ensure
  that the overall will not need to be adjusted by the partners once the project
  is passed onto them.
  * Documentation and development of features will run in parallel to prevent
  any lapse on communication. This similar to how we do not want features to
  be partially finished: we also don't want them partially documented.

 3. We will be adding our partners to our trello board so they can keep track of 
 the progres with respect to each individual detail.
 
 We are making this change
 so they can keep up with our pace of development and prioritize which tasks
 they deem most important. This is particularly important because our partner
 requested a redesign of the overall application which dramatically increased
 workload. This fact is further exacerbated by the fact that 40% of our team
 decided to drop the course, leaving their responsibilities to the remaining
 three members

 With each trello ticket, we will also keep track of any potential features
 and any more features that our partner decides to add on. Because they have
 been adding more features that they desire, they can prioritize which
 features they feel are most important to them. They will be able to organize
 and section off which aspects are the most important. In particular, they can
 adjust thise prioritization in real time so that we can immediately shift
 gears and change what we're working on. The partner can also keep track of
 progress in terms of what has already been done so they know what to
 test (User Acceptance Testing). This keeps our entire team up to date of the
 current overall progress throughout the development of the project.

 you can see our Trello here:
 https://trello.com/invite/b/IEykzkUB/d8e0cf4047085d209953fcdf7d9de7aa/csc301


## Product - Review

#### Q4. How was your product demo?

 Our demonstration was prepared using a staging server that is part of our
 continous delpoyment and continuous integration pipeline. This was the most
 optimal method because it lets our partner view our tested and integrated
 project in its latest version. The staging server database does not change
 as different iterations of frontend code are applied to the frontend. This means
 every time we update the code, the data stored in the database will still be
 intact and we can test or use the same data an successive versions of the 
 project to ensure that its behaviour remains the same throughout development.
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

 You can see these features change requests in the minutes for the meeting that took 
 place on July 14th:

 https://github.com/csc301-summer-2020/team-project-3-upendo-honey/docs/deliverable-2/Partner_Minutes.docx


 Because we had recurring demonstrations we learned lessons much earlier than
 the D2 deadline. We learned that partners may want aspects to be slightly
 different than what they initially planned. Furthermore, When implementing a
 website, elements may be difficult to size and place precisely in terms of
 CSS styling and HTML element organization. We also learned that keeping a
 timeline of feature development can be very helpful for future review. This
 means that keeping track of what feature was developed when would be helpful
 in the review process later. You can see a makeshift of this idea on
 the Trello board to the far right where we have the completion of tasks in
 reverse-chronological order. You can also see this in the Github Repository
 by viewing our pull requests (due to our deployment and git pushing conventions)


