**Guide to reviewing the Final Project for the second trimester.**

Due to technical difficulties, all that could be done to make the website functional, was done in JavaScript. Also, there are files which are not associated with this project, as we used the Starter Framework, but again, due to technical difficulties, upon deletion of any file, the code will break throughout the whole project.

To connect to the page, you first need writing this in the terminal:

php -S localhost:8082

After doing so, please access the localhost:8082/index.html manually, since if only trying to access lcoalhost:8082, it will redirect you to index.php, which isn't the part of the project. This file cannot be deleted due to code breaking.

**First page - index.html - Login page**

To login into the page, you must enter correct credentials:
email: admin@admin.com
password: topsecret

An error will appear if this isn't what you tried logging in with, and will require you to login again. Also, errors will appear if the email is not valid, or if the password is too short or long, or if there are any spaces in the password. You can toggle view your password upon clicking the eye icon in the password input.

When correctly inputting email and password, upon clicking the button login, it will redirect you to home.html.

**Second page - home.html - Home page**

The home page will display the songs from the database. These songs were displayed using axios to fetch data from the database, and display on frontend. Every element that is seen is created in homeScript.js, using a forEach loop. As artists are in another table, there is another function to fetch correct artists that correspond with songs. 

Upon clicking a placeholder with a song, more precisely the image, it will display a lightbox, which is possible to exit using the "Esc" button, and to skip through songs using "Left" and "Right" arrow keys. When reaching the end of the songs, it will put you back to the first song, and vice-versa.

**Third page - profile.html - Adding songs to database**

Due to technical difficulties, and compatability problems, this task could not be successfully done. The idea was, upon submitting a form seen on the page, it will input data accordingly in the database, and redirect you back to the page. 

**Fourth page - playlist.html - Playlist page**

Due to technical difficulties, and compatability problems, this task could not be successfully done. The main idea behind this page was to review songs that are in the database, but also having the ability to drop them from the database upon clicking the "Delete" button. 

