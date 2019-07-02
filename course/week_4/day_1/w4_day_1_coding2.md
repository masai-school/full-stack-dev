# Week 4 - Day 1

#### Coding Session 2

**SUBMISSION:**

- Pull the `cohort_1` repo
- Go to `practise/week_4/day_1/session1` 
- Copy  the file called `firstname_lastname.html`
- Complete all the problems given below in the `firstname_lastname.html` file.
- Push the file `firstname_lastname.html` with your first name and last name back to the online repo.

**JavaScript (Part 6)**

**NOTE:** Follow the instructions carefully and follow coding discipline

**NOTE2:** Indent your code correctly and stick to one kind of naming style

**NOTE3:** You have only been given a basic HTML file. YOU MUST FILL`id` and other basic attributes for all tags! You must also define your own JavaScript Functions!

### FSD.W4.1.2_1

You are given a button with the text `Add customer`

**Using JavaScript do the following:**

Create an object `constructor` called `Customers`

Your object should have the following keys/names:

1. firstName (String)
2. lastName (String)
3. dateOfBirth (String)
4. balance (Number)
5. accountNumber (Number) 
6. sharedAccountHolders (Array of Strings)(Input will be a comma separated string)

Also create input elements with `type = 'text'` for all the 5 above fields.

Also label each of the input elements appropriately with label tags!

Finally, create a `global` empty array variables called `customerArr` to store the objects in. 

When the button is clicked, a new object must be created with the appropriate values from the input elements. 

After the object is created, it must be pushed to the array called `customerArr`.

**Note:** The input type of number 6. sharedAccountHolders will be a comma separated string, you must parse the string and create an array. Example: `sister, mother, father` -> `["sister", "mother", "father"]`

### FSD.W4.1.2_2

**Using JavaScript do the following:**

Add a function called `displayDetails` to the `Customers` constructor. 

It should return a `string` with all the `keys/names` and `values` of a given customer object. 

However should not return the details of the `displayDetails` function itself.

Example:
For a `Customers` object with the following values.

```
firstName: "Masai",
lastName: "School",
dateOfBirth: "12/12/12",
balance: 999,
accountNumber: 12345,
sharedAccountHolders: ["sam", "patrick", "rahul"]
```
It must return the `string`:

```
First Name: Masai
Last Name: School
Date of Birth: 12/12/12
Balance: 999
Account Number: 12345
Share Account Holders: sam, patrick, rahul
```

Use the `\n` operator to create newlines. 

Also add the CSS `white-space: pre-line` to your `p` tags to allow newlines in the `p` tags. 

### FSD.W4.1.2_3

A button with the text `Print customers` is given to you. 

A `div` tag with `id="displayContainer` is given to you.

**Using JavaScript do the following:**

When the button with the text `Print Customers` is clicked the following must happen: 

1. Loop through the array `customerArr` and retrieve the string from the `displayDetails` function. 
2. Create a `p` tag with `innerText` = the string from the `displayDetails` function.
3. Append the newly created `p` tag to the div with  `id="displayContainer"`.

The above steps must be done to each element in the `customerArr` array. 

If the above instructions were too complicated just do the following. When the button with the text `Print Customers` is clicked, you must display all the customer objects from the `customerArr` within `p` tags which must be children of the div tag with `id="displayContainer"`.


**Note:** Feel free to add any CSS or HTML you wish to improve the page. However, the basic functionality of the page must remain intact!




  



