10/01 9:30am - Trello 1

As a personal side mission, for the project, I intend to add an option to also add images to the guestbook. One of my friends is having a wedding later this year and I think this would be a great addition to it.

In the info folder I will be adding any additional information in regards to this build including files, images and screenshots outside of the build.

---

10/01 12pm - Trello 2

After speaking with Joe, he suggested that I wait until week 7 to completed adding images, but I can focus on it as a stretch goal. For now, I'll ignore the first page of the layout concept and make it around page 2.

A friend recommended using the bootstrap NPM to setup media queries. I have done so using the help of the below tutorial and the below template.
https://www.youtube.com/watch?v=GJRd1yRGFuA
https://gist.github.com/mavieth/e0c8fdcb72a30d85f57a

I'm still not quite sure what bootstrap is actually doing, but that's something to figure out later.

As part of attempting to optimise the website, I have added multiple image sizes to scale based on the media querie screen size. The problem that I'm currently facing is that there's a little bit of the image wanting to side scroll still. The other issue I'm facing is that setting the body size to 100% height and width instead of actual pixel sizes is having a weird effect on the grid where it doesn't properly scale to the screen size.

Taking a break from front end, I setup my database. I've also now created my seed file and server file without issue until now. Currently I'm running into an error when attempting to run the server with a module not being found. I've tried individually reinstalled express, cors, pg and dotenv but that doesn't seem to be the issue.

I have just figured out that i was in the wrong root which was creating the issue. Now I just need to figure out how to properly connect my server and database.

---

10/01 2pm

I have setup a command to show me the rows from my table in the server in a console log, but it's not coming through. Attempting to get it through postman isn't working either.

I believe the issue was that i forgot to set the server to await a response from the database. I can connect and receive data from the database, now I'm just figuring out how to add information. I attempted to basically copy Manny's walking skeleton example, but that doesn't seem to be doing anything.

After googling some methods and trying to same code again, it seems to have just worked and sent the data. I'm not quite sure why, but I'm not complaining. What may have been the issue is potentially using the wrong route when posting on postman, but I'm sure I checked that.

---

10/01 3pm

Taking a break from that whole mess, I decided to tackle getting render setup. Having the initial issue where I forgot i had double foldered the client, i got everything running fairly smoothly. Now I just need to link the client and the server.

When attempting to prevent the default form behaviour, it working properly and the entire javascript file was malfunctioning. Eventually with the help of Craig, we figured out that part of what was causing it was not actually using for the function using an event listener. However, there were still numerous issues and errors when submitting, one of which saying I couldn't use the event listener. At some point, it just started working and continued working, so I still don't understand what caused the issue.
