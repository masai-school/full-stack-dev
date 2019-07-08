# Week 5 - Day 1

#### Coding Session 1

**SUBMISSION:**

- Pull the `cohort_1` repo
- Go to `practise/week_5/day_1/session1` 
- Make a folder called `firstname_lastname` with your own first name and last name. 
- Once you are done with the coding session push that folder to the online repo. 

**JavaScript (Part 10)**

**NOTE:** Follow the instructions carefully and follow coding discipline

**NOTE2:** Indent your code correctly and stick to one kind of naming style

**NOTE3:** You have only been given a basic HTML file. YOU MUST FILL`id` `class` and other basic attributes for all tags! You must also define your own JavaScript Functions!  

**NOTE4:** You must not write any JavaScript code within the `html`file! ***All*** your JS must be in the `js` file! Use the script tag to link your JS file from your HTML file. 

**NOTE5:** Only attempt the bonus questions once you have finished the basic questions. 


### FSD.W5.1.1_1

A simple API that allows you to register a user, login a user and view the profile of a user is given to you.

You can read the documentation here [https://github.com/masai-school/api-mocker/wiki/Authentication-API](https://github.com/masai-school/api-mocker/wiki/Authentication-API).

You must set up your own API server, follow the instructions here [https://github.com/masai-school/api-mocker/wiki](https://github.com/masai-school/api-mocker/wiki).

**Do the following:**

1.Create a file called `register.html` and a file called `register.js`. Link `register.js` from `register.html`.
2. Create a simple ***registration page*** that will allow a user to register with the necessary details mentioned in the API docs. 
3. When the user `submits` the registration form, it must POST the data to the api and receive a 200 status code. It must also verify that all fields have been filled in.
4. If it receives an error status code of 401 it must tell the user an error has occurred. 

### FSD.W5.1.1_2

**Do the following:**

1.Create a file called `login.html` and a file called `login.js`. Link `login.js` from `login.html`.

2.Create a simple **login page** that allows a user to enter their username and password.
 
3. When the user submits their login details you must send the data to the api.
 
4. If the login data is correct, you must display all the profile information. You must also delete the login page elements.

5. If the login data is incorrect you must tell the user `The username or password was incorrect, please try again!`
