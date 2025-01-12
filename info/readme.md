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

---

12/01 3pm

https://www.youtube.com/watch?v=w3vs4a03y3I
https://www.youtube.com/watch?v=mKmxc8TcWQ8&t=792s
https://www.youtube.com/watch?v=w3vs4a03y3I&t=655s

https://developer.mozilla.org/en-US/docs/Web/API/Headers

This one is a wild ride.

Yesterday i had a busy day and was unable to work fully on this. However, in the evening I worked on getting the database, server and client connected and after a few different youtube videos, some guidance from chatgpt on why my code wasn't working (Because the videos all wanted to use a variety of different things instead of what we've been learning, some are listed above), some healthy guesswork and some luck, I managed to get my server to send a new row to the database when I used postman to ping the server.

However, this morning while attempting to get the form data from the client to the server, I somehow messed up my code and couldn't figure out what I was doing wrong. And in my stupidity I forgot to push the working code the evening before so I couldn't refer back to that version. I reset the password for the database, rewatched the tutorials, asked chatgpt again and nothing worked. In the end I rewrote the script, env file and reset the database password again and now it works.

The current issues I'm having is submitting the form information from the client to the database. Initially I tried to use the script I used from the server file to create rows and send that to the server to be submitted, but even changing the content type (Using the headers guide), I couldn't figure out how to do it. Currently I'm working on sending the form over as an object, which is successful in itself, but when attempting to change the previously used code to send the it's coming up with an error. For some reason when doing data.name, it's trying to send the data to a collumn with the name of the name. I'm not sure what's causing the issue, but its where I'm currently at.

---

12/01 5pm

This one was a little annoying, but not as bad. The biggest issue I had with trying to send the information from the form to the database was having the object split at the server to add it to the SQL and send it to the database. I kept trying to treat it like I would a normal object, but i think due to the `` in the SQL lines, it wasn't properly using it. As mentioned previously a big repeat issue was that it was trying to send the row item as a column name.

In the end, I referred back to one of my previous attempts using the videos and figured out how to properly use what's in the server file lines 53 and 55 (not sure on what that particular thing is called). From what I can gather, using '$1, $2' etc, enables me to later fill in the values when using it in a query or function, eg, 'await db.query(query, [name, email, phone, words]);' which covers the 4 values on line 53.

Next ti work on is the client showing the database in a gallery style. In my week 2 assignment, I struggled with figuring out how to make the gallery and made it super manually. In this case, I don't have the same option, so I'll have to figure it out.

---

12/01 7pm

https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild

What got me before stumped me for a little bit and there was a lot of experiment with buttons and such. I ended up adding some buttons to hide the form and the gallery so I could focus on one thing without the other hanging in the background.

I used the above linked website to try and figure out how to append which is what got me before. This time however, I managed to figure it out. Using a combination of this and Manny's example I figured out how to list each of the database entries using 'forEach' (Which from what I can gather, will execute the function for each entry in the array). Then the part that stumped me again was that I was appending into the maindiv on each line, so it wasn't adding them to the created div like I thought it would automatically. I eventually figured out instead of appending into the maindiv, I needed to append into created div, which as a guess I just appended into listBox and it thankfully worked.

---

12/01 8pm

https://stackoverflow.com/questions/9422974/createelement-with-id

Adding stlyes was pretty easy. The only challenge was adding an ID to be able differentiate the created divs from the existing divs, which I did using the above help. I ended up adding another append to for the 'words' to make it look a little nicer.

In this push, I'm also going to change over the client app fetch URL to the render server, so we'll see how this goes. I wish I had time to make the form itself look a little nicer and reorganise the client JS, but it works and that's the important thing.

After updating the URLS to the render server, everything appears to work.

I'm happy enough with what I did for my assignment this week with how much I struggled with data information. I still don't get some of it, but I can catch up as I continue to work on new projects and assignments
