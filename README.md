# <a target="_blank" href="https://tribal-production.up.railway.app/">Tribal</a>

<a target="_blank" href="https://tribal-production.up.railway.app/">
  <img src="/public/imgs/tribalAnimation.gif" alt="Tribal Banner Gif">
</a>

Return to your community on <a target="_blank" href="https://tribal-production.up.railway.app/" >Tribal</a>! Dive into unforgettable moments and bond with souls that resonate with your vision.

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
Built using <a target="_blank" href="https://slides.com/jresiduum/mastering-mvc" >MVC (made a lecture about it)</a> as the server architecture. 
The model was implemented with Mongoose to handle communications with MongoDB, EJS was the view engine and express was the control.
Notable middleware includes passport.js to add local strategy authentication to the app and Cloudinary for user-generated image hosting.

## For Demo Use:

Demo Email: guest@tribal.com
Demo Password: tribaldemo

## Improvements

The first optimization would go into the UX of someone making their post and adding a preview system where they can see how their post would look before posting.
Major planned future features would include the tribe group system where you can join a subcommunity and a DM system where users are able to personally communicate with each other.

## Lessons Learned:

When building web apps, especially those that permit user registrations and content posting, scalability becomes EVERYTHING. 
It's paramount to utilize multiple databases for targeted information storage, and maintaining well-defined schemas for models ensures systematic organization and maintainability.

In the planning stage when building a site, visualizing the flow within the MVC, especially between the multiple DBs in the app and what information goes where on any template pages will save a lot of time and effort.

After delving deeply into the Bootstrap toolkit and going knee-deep with its components, I see that the strength of Bootstrap is the ability to use pre-defined components to quickly build a style.

Although Bootstrap can be seen as generic and rigid when compared to Tailwind CSS, it presents a familiar and reliable style that makes users more comfortable and trusting.
There are plenty of downsides though, the biggest being BLOAT of countless unused styles that do nothing but make the site less responsive.
