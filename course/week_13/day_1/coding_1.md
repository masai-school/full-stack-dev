## Week 13 - Day 1

**Coding 1**

Create a express application with the mentioned routes all the data can be stored as a global variable in the server, make sure all the APIs are working using postman

Code Location

```
~/coding/week_13/day_1/session_1
```

1. `/users` - Get the list of all users [GET]
2. `/user/create` - Get the data from the frontend and add the new user [POST]
3. `/user/show/:id` - Get the details of a particular user [GET]
4. `/user/edit/:id` - Change the details of a particular user [POST]
5. `/user/delete/:id` - Delete the particular user from the list [GET]
6. `/user/:id/addresses` - Get the list of all the user addresses
7. `/user/:id/address/create` - Get the data from the frontend and create the new address for the corresponding user [POST]
8. `/user/:id/address/edit/:address_id` - Change the details of a particular address for a particular user [POST]
9. `/user/:id/address/delete/:address_id` - Delete the particular address for the particular user [GET]
10. `/user/:id/address/show/:address_id` - Get the details of a particular address for the particular user [GET]


The fields for the users
```
name: String
email: String
mobile: String
dob: String
gender: String
addresses: []
```

The fields for each address entity
```
location: String
area: String
city: String
pincode: String
```