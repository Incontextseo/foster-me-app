# Foster Me App
Foster Me is a foster animal tracker that allows users to sign up for a foster, build a foster animal profile, and keep track of the status of their past fosters.

**Deployed app:** https://vast-basin-88380.herokuapp.com/

**This app will streamline the process of fostering animals:**
* Reduce the strain on WHS staff/volunteers
* Improve communication
* Get foster pets adopted faster
* Increase satisfaction for foster participants

## Technologies used
* React
* Express
* Node JS
* MySql
* Sequelize
* API - Rescue Groups API
* Passport.js
* Bcrypt
* Sass
* MDB Bootstrap

## How it works
* Sign up / login uses Passport JS to add new users to the MySQL database or find and authenticate existing user. Passwords are hashed with Bcrypt for security.
* Clicking "Search" triggers a POST route to the RescueGroups.org API to search for cats or dogs available in your area.
* "Foster Me" triggers a POST route to save the animal to the database.
* The "Update animal profile" form uses React state change and a PUT route to update the database info.
* "Return" moves the animal to your past fosters page. From this page you can view the full profile. 
