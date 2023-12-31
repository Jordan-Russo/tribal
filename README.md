<p align="center"><a target="_blank" href="https://tribal-pvj0.onrender.com/"><img src="/public/imgs/tribalLogo.png" height="40"></img></a></p>
<h1 align="center"><a target="_blank" href="https://tribal-pvj0.onrender.com/">VISIT HERE</a></h1>

<a target="_blank" href="https://tribal-pvj0.onrender.com/">
  <img src="/public/imgs/tribalAnimation.gif" alt="Tribal Banner Gif">
</a>

<br/>
<br/>

<p>Return to your community on <a target="_blank" href="https://tribal-pvj0.onrender.com/">Tribal</a>! Dive into unforgettable moments and grow your tribe by bonding with other souls that resonate with you.</p>

## How It's Made:

**Featured Tech:** 
<div>
  <picture><img src="https://img.shields.io/static/v1?label=&message=HTML&color=285700&style=plastic&logo=html5&labelColor=333333" alt="HTML5"/></picture>
  <picture><img src="https://img.shields.io/static/v1?label=&message=JAVASCRIPT&color=285700&style=plastic&logo=javascript&labelColor=333333" alt="JavaScript"/></picture>
  <picture><img src="https://img.shields.io/static/v1?label=&message=BOOTSTRAP&color=285700&style=plastic&logo=bootstrap&labelColor=333333" alt="Bootstrap"/></picture>
  <picture><img src="https://img.shields.io/static/v1?label=&message=NODE-JS&color=285700&style=plastic&logo=nodedotjs&labelColor=333333" alt="NodeJS"/></picture>
  <picture><img src="https://img.shields.io/static/v1?label=&message=EXPRESS&color=285700&style=plastic&logo=express&labelColor=333333" alt="Express"/></picture>
  <picture><img src="https://img.shields.io/static/v1?label=&message=MONGO-DB&color=285700&style=plastic&logo=mongodb&labelColor=333333" alt="MongoDB"/></picture>
  <picture><img src="https://img.shields.io/static/v1?label=&message=MONGOOSE&color=285700&style=plastic&logo=mongoose&labelColor=333333" alt="Mongoose"/></picture>
  <picture><img src="https://img.shields.io/static/v1?label=EJS&message=EJS&color=285700&style=plastic&&labelColor=333333" alt="EJS"/></picture>
</div>
<p></p>Built using <a target="_blank" href="https://slides.com/jresiduum/mastering-mvc" >MVC (made a lecture about it)</a> as the server architecture. 
The model was implemented with Mongoose to handle communications with MongoDB, EJS was the view engine and express was the control.
Notable middleware includes passport.js to add local strategy authentication to the app and Cloudinary for user-generated image hosting.</p>

<p>A brief wireframe illustrating the overview of flow within the application is included below for your convenience.</p>

<picture><img src="/public/imgs/tribalWireframe.jpg.jpg" alt="Tribal Wireframe"/></picture>

## For Demo Use:

Demo Email: <span>guest@</span><span>tribal.com</span>

Demo Password: tribaldemo

## Improvements

A planned update would add a preview system where they can see how their post would look before posting.
Additional future major features would include implementing the tribe group system (where you can join a subcommunity, personalize your feed, and have a privacy messaging system).

## Lessons Learned:

When building web apps, especially those that permit user registrations and content posting, scalability becomes EVERYTHING. 
It's paramount to organize multiple databases for targeted information storage (like MongoDB holding user data in many collections and Cloudinary hosting user-submitted images). Finally when building collections, maintaining well-defined schemas for models ensures systematic organization and maintainability and adds a level of trust and reliability to the point where you don't need to look at the DB to work with it (which is needed in a team setting).

In the planning stage when building a site, visualizing the flow within the MVC, especially between the multiple DBs in the app and what information goes where on any template pages will save a lot of time and effort.

In terms of choosing the right stack, while EJS had some perks, the utility of React (with the ability to define not just the structure of all post previews but also the logic of how to shorten the descriptions of a post with it (this can be replicated to some extent with EJS partials) and while helpful, if I also needed to manage state, wouldn't be sufficient.

After delving deeply into the Bootstrap toolkit and going knee-deep with its components, I see that the strength of Bootstrap is the ability to use pre-defined components to quickly build a style.

Although Bootstrap can be seen as generic and rigid when compared to Tailwind CSS, it presents a familiar and reliable style that makes users more comfortable and trusting.
There are plenty of downsides though, the biggest being BLOAT of countless unused styles that do nothing but make the site less responsive.
