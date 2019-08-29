## Week 12 - Day 4

**Coding 1**

Create a react application with routing having the following pages and use cases (use bootstrap and don't write any css)

Code Location

```
~/coding/week_12/day_4/session_1
```

1. `/home` - Default Page (Should show the list of students in the form of a table from an array of objects ). ID = Index + 1
Similar to the one given at the bottom 
2. `/create` - Form Page with the fields `code` `name` `email` `location` `mobile`
3. `/show/<id>` - Can be navigated by clicking the id of the row, shows the page will all the details of the student
4. `/edit/<id>` - Show the form with the filled in details of that particular student, you should be able to make changes and save them back to the array and comes back to `/show/<id>` page
5. `/delete/<id>` - Show a page with the name and a delete button, if that is clicked the entry is removed from the array and comes back to `/home` page

| ID | Code   | Name | Edit | Delete |
|----|--------|------|------|--------|
| 1  | vk_001 | Ajay | link | link   |
