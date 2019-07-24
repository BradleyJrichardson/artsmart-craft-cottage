<p align="center">
  <img width="" height="120" src=./artsmart-logo.jpg></p>

# <div align="center">Front end</div>

> This project is split over three Repos <br>[Frontend](https://github.com/BradleyJrichardson/artsmart-craft-cottage)<br> [Backend](https://github.com/BradleyJrichardson/artsmart-backend)<br>[Dashboard](https://github.com/BradleyJrichardson/artsmart-dashboard)<br>

A Marketplace application built for the final project at CoderAcademy

# Team Members

<i>GitHub Links<i>: [Bradley ](https://github.com/BradleyJrichardson), [Cooper](https://github.com/CoopsCodes), [Mahdi](https://github.com/MS944)

<br>

# Features

### `Artsmart Craft Cottage Storefront`

> ecommerce platform

- <b>Showcase key products</b>
- <b>View all products</b>
- <b>View products by category</b>
- <b>Shopping cart </b>
- <b>Checkout process</b>
- <b>Email form</b>

### `Stripe Dashboard`

> react client | order managment and processing platform

- <b>Login system</b>
- <b>View orders</b>
- <b>Process orders: </b> Created | Paid | Fullfilled | Refund
- <b>Sort orders by status</b>
- <b>View customers</b>
- <b>View orders associated with customer</b>

### `Node Server`

> interact with the DB and stripe API

- <b>Authenticate user</b>
- <b>Encrypt passwords</b>
- <b>Interact with MongoDB</b>
- <b>Create an order</b>
- <b>Create a product</b>
- <b>Create a SKU</b>
- <b>Create a customer</b>
- <b>Create a temporary order token to process card</b>

<br><br>

# Tech stack

    MERNs stack

- **_Mongo DB_**
- **_Express_**
- **_React_**
- **_Node_**
- **_Stripe_**
  
<br><br>

# Design documentation

[Figma](https://www.figma.com/file/ZrsUm4JyeonWInA91RQ01Eo4/Marketplace?node-id=0%3A1)

<br><br>

# Project Plan

- Client **_Libby Richrdson_**
- Project Name **_Artsmart Craft Cottage_**
- Delivery Date **_Friday 26<sup>th</sup> July 2019_**

### Scope

The Artsmart Marketplace is an online sales point where clients and wholesalers can view products, add items to cart and checkout without the need for a profile.

Financial settlement will be processed by Stripe, meaning customer information will not be stored or sent through the marketplace.

Database will contain product information and an Admin User (client) to access sales information.

### Roles

The project will be Pair Programmed for the entire basis of the MVP, once MVP is satisfied additional requirement will be discussed and build by the suggested party once approved.

Therefore, everyone will take part in building every part of the MPV, so roles will not be allocated.

### Timeline

Week 1 - Planning/documentation/sign-off to be completed.

Week 2 - MVP build, hosted and working.

Week 3 - Debugging, extra features and README-presentation planning.

### Risks

Project might not get completed due to time-frame.

Personalisation of Stripe payment system a forseen Risk, Stripe may need a second site to generate payments and track invoices, not in project scope.  
If needed, extra time will be allocated in week 3 to complete over extra features.

Customer information, ensuring customer information is handled securely through the site

### Deadlines

MVP completed 19<sup>th</sup> July 2019.

Marketplace completed and signed off by Wednesday 24<sup>th</sup> July 2019.

Presentation plan written and Client Handover Documents completed on Thursday 25<sup>th</sup> July 2019.

Presented on Friday 26<sup>th</sup> July 2019.
<br><br>

# Project Charter

**_Vision Statement_**

Artsmart Craft Cottage is a Marketplace being updated in the MERN stack.

The objective is to build a marketplace that improves on the current website's Search Engine Optimisation results while being designed for the clients needs.

Artsmart will be delivered with customer sales for the MVP, but post delivery will include Wholesale customers.  
Ongoing support will be provided by Bradley Richardson given the existing client relationship.

**_In Scope_**

- Tech Stack must use the complete MERN stack.
- Stripe must manage all the customer payment information.
- Should match and ideally improve on the existing websites SEO (Search Engine Optimisation) results.
- Must be large and easy to read images and text.
- Optimised for iPad/Tablets.

**_Out of Scope_**

Anything not included in scope

### Constraints

- Time, must be completed in the 3 week window.
- Due Dilligece in maintaining personal customer information in line with government guidelines.
- labour, only three workers to complete the entire project.
- Skill level, workers are inexperienced in fullstack web development.

### Stakeholders

- Website owner - **_Libby Richardson_**
- Coder Academy - **_Educators_**
- Developers - **_Brad, Cooper, Marhdi_**

### Benefits

A faster website with a smoother sales process, that should improve sales.

Modernisation and automisation of the payment system, leaving the client with more time to create than process payment and manage business finances.

### Project Costs

Nill
<br><br>

# Work Breakdown Structure

|                            |                                       | Marketplace                       |                   |                             |
| -------------------------- | ------------------------------------- | --------------------------------- | ----------------- | --------------------------- |
| Design                     | Content                               | Test                              | Hosting           | Production                  |
| 1. Research                | 1. Build back-end server and database | 1. Write test                     | 1. Host back-end  | 1. Client Sign off          |
| 2. Build Figma wire-frames | 2. Build framework                    | 2. End user testing               | 2. Host front-end | 2. Hand-off Documentation   |
| 3. Colour pallet and Fonts | 3. Build Context and global state     | 3. Test Sign-off                  |                   | 3. Present production build |
| 4. SEO analysis            | 4. Build site components              | 4. Test when pushed to production |                   |                             |

<br><br>

# Short Answer Questions

## What are the most important aspects of quality software?

- <b>Reliability </b>  
  The risk of software failure and the stability of a program when exposed to unexpected conditions. Reliable software has minimal downtime, good data integrity, and no errors that directly affect users.

- <b>Performance efficiency </b>  
  An application’s use of resources and how that affects its scalability, customer satisfaction, and response times. Software architecture, source code design, and individual architectural components all contribute to performance efficiency.

- <b>Security </b>  
  Assesses how well an application protects information against the risk of software breaches. The quantity and severity of vulnerabilities found in a software system are indicators of its security level. Poor coding and architectural weaknesses often lead to software vulnerabilities.

- <b>Maintainability </b>  
  The ease with which you can modify software, adapt it for other purposes, or transfer it from one development team to another. Compliance with software architectural rules and use of consistent coding across the application combine to make software maintainable.
- <b>Usability </b>  
  The user interface is the only part of the software visible to users, so it’s vital to have a good UI.
  Usability testing is a way to see how easy to use something is by testing it with real users.

## What libraries are being used in the app and why?

- ### <b>React</b>
  React is a frontend library that provides an intuitive way to work with HTML and JS.
  React is being used as it is the R in MERN stack. But also because everyone in the group agrees it is a much more enjoyable way to create websites and applications.
- ### <b>Express</b>

  Express is the de facto standard server framework for Node.js. It is designed for simple development of web applications and API’s. It can be used with Mongoose in order to talk to a Mongo Database.
  We are using Express in order to abstract away the complexities of writing server side code. It allows us to focus on building the project and ultimately delivering a reliable application.

- ### <b>Mongoose</b>

  Mongoose provides a straight-forward, schema-based solution to model your application data.

  <i>“Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.”

- ### <b>Node</b>

  Node.js is run-time environment and includes everything you need to execute a program written in JavaScript.

### NPM Packages

> Storefront Application

<b>axios</b>:<i> HTTP client library, the best choice in this category</i>  
<b>bootstrap</b>:<i> CSS framework, utilized as to speed up development time</i>  
<b>react-dom</b>:<i> Interact with the React DOM</i>  
<b>react-router-dom</b>:<i> Used for navigation and routing in the application</i>  
<b>react-stripe-elements</b>:<i> Stripe form integration library</i>

> Dashboard Application

<b>axios</b>:<i> HTTP client library, the best choice in this category</i>  
<b>bootstrap</b>:<i> CSS framework, utilized as to speed up development time</i>  
<b>react-dom</b>:<i> Interact with the React DOM</i>  
<b>react-router-dom</b>:<i> Used for navigation and routing in the application</i>

> Backend Application

<b>axios</b>:<i> HTTP client library, the best choice in this category</i>  
<b>bcrypt</b>:<i> Encrypt password to allow secure storage in DB</i>  
<b>body-parser</b>:<i> Parse incoming request bodies in a middleware</i>  
<b>dotenv</b>:<i> Read .env files</i>  
<b>jsonwebtoken</b>:<i> Generate a JWT for user authentication</i>  
<b>stripe</b>:<i> Interaction with the stripe orders, customers, products, API</i>  
<b>supertest</b>:<i> Testing for HTTP</i>  
<b>jest</b>:<i> Testing for javascript</i>  
<b>nodemon</b>:<i> Live refreshing of server upon save</i>  
<b>now</b>:<i> Deploy the server</i>

## A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

- <b>Social Skills</b>  
  STrong social skills are required for Client Management and to work in a team environment on a singular project.

- <b>Project Management </b>  
  In order to properly develope a project for a client, meet a deadline and deliver whats promised strong project management skills are the most important skill. In other parts of this readme we have discussed project management in depth.

- <b>Design / Wireframes </b>  
  In order to deliver a project to a client the design must be conceptually established, this is where wireframes need to be generated for the client to approve. 
  It can be beneficial if the client has a design concept, colour/font pallet and a list of examples going into the conceptual design phase.

  If the client just has a project outline pitch then knowledge of core graphic design principles and knowledge of a program such as Figma is helpful.

- <b> UX/UI </b>  
  What's a good website without careful thought taken regarding the UX/UI?  
  Not a good website.

  Considerations for user-flow and experience are key skills in developing a client project. UI/UX planning must be considered from conceptual designing through to user testing to ensure a good end user experience.

- <b> Coding</b>
  It is most important when working on a group project to have your team in mind when coding. Writing clean efficient code, leaving notes and discussing your concepts with the team so ensure everyone is on the same level.

- <b>Testing </b>  
  Testing is one of the most important parts of the whole project, between Functional and Non-Functional Testing the total time of the 3 week project could be taken up with building or a whole team member being a tester.
  Testing allows the most important aspects to be achieved consistently and reliably. Writing tests is a skill that we are going to hone in future projects, or in future professions.

## Within your own project what knowledge or skills were required to complete your project, and overcome challenges?

- <b>Social Skills</b>  
  Coming from different backgrounds and different stages in our lives, all working on a single project was a challenge.
  We learnt to respect and value the personal strengths and key skills of each team member.

- <b>Resilience</b>  
  When things don't quite go to plan, the ability to pick oneself up and tackle the new problem with a calm state of mind.
  There was several instances in this project that the client requested a change of direction. This initially proved difficult to deal with, but as we grew to understand this was the nature of working with a client it got easier.

- <b>Project Management</b>  
  The challenge is immense, planning such a large project can be significantly bigger than the actual programming itself.
  Therefore, we took all the steps we could in order to work together and plan to the best of our abilities. The difficultly lied in truly understanding project requirements and developing a good road-map of the path ahead.

- <b>UX/UI</b>  
  Our challenge with UX and UI was to improve on the current standards of the existing site. We needed to compromise as we attempted to deliver a product the client was happy with and was good by industry standards.

- <b>Coding</b>  
  The challenge on this front was about writing readable code. This was overcome by going through code that may be confusing or ambitious to break it down and refactor it.

- <b>Testing</b>
  Testing that being either manual or written tests where important to increase confidence in changing, refactoring or extending the codebase. The challenge involved writing tests isn't something any of us have done extensively. We overcame this by dedicating time to learning something new.

- <b>Design/Wire-framing </b>
  The challenge here was coming up with a design as per the clients specification that also was in line with good design principles. The challenge was overcome by making compromises.

## Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?

- <b>Testing</b>  
  Our skills in this area as mentioned are limited, numerous times we found ourselves writing ineffective tests.  
  Improvement for future projects could be a better understanding or just more experience writing tests.

- <b>Coding</b>  
  We found our skills to be quite effective in the capacity of building this project. It was a somewhat complex application so it allowed room for personal growth, working with React and creating API's. There's always room for improvements in future project.  
  Changes for future projects would be focus on writing code as clean as possible to increase readability, maintainability and to deliver quality software.

## Give an overview of our source control process.

During initial development we plan to pair program, each taking turns driving on our personal computers. We thus have a very simple source control process initially. We will create a branch for each programming session on each computer and merge them into the master before moving onto the next computer and session.

This will eliminate all possibilities of issues but will also ensure everyone understands the code and logic up to the MVP. As the project gets more complex and MVP is achieved we will each work on separate parts of the codebase on different branches.

We will use the GitHub setting that doesn’t allow a single person to merge the pull request. This way we get more eyes on each merge and reduces the possibilities for issues.

# Client Interactions

### Monday 8<sup>th</sup> July 2019

Initial Client Call, established base requirements, customer flow.

<hr>

### Tuesday 9<sup>th</sup> July 2019

Morning
Presented initial Figma Wireframes, took client feedback

Evening
Presented updated Figma Wireframes to establish Customer Flow and page structure. Established approval.

<hr>

### Wednesday 10<sup>th</sup> July 2019

Presented 3 different designs templates and colour pallets to the client.
Discussed the features and benefits of each and worked over the phone to design what the site should look like, and where things should go.

Settled on a final design and got official sign-off to build the structure.

<hr>

### Thursday 11<sup>th</sup> July 2019

Quick call regarding colour pallets and design.

<hr>

### Saturday 13<sup>th</sup> July 2019

Visit to the clients house by Brad. Discussion on steps that need to be taken to allow us to develop the site. Roadmap for content upload and delivery made.

<hr>

### Monday 15<sup>th</sup> July 2019

Just a call to check-in and the decision was made by the client to go a slightly different direction in the site content. Original plan proposed too much work for them.

  <hr>

### Thursday 18<sup>th</sup> July 2019

Realisation was made that the stripe dashboard will not suffice for processing payments using the stripe orders, customers, products API’s.
Discussion with client that established an MVP order processing dashboard system.

  <hr>

### Sunday 21<sup>th</sup> July 2019

Visit to the clients house to help them upload the required content for production. Discussion for future plans of the project outside the scope of the timeframe.

<br><br>

# Post Project Review

<br><br>

# Client Satisfaction Questionnaire

Will create a survey monkey for this
<br><br>

# <div align="center">2. Application Design</div>

## Summary of the application
