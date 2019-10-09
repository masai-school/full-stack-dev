### Coding Task

**Build an application with the below mentioned features (If you are only building frontend use Redux and localstorage)**

Guidelines

- Write your own css files and the layouts should be responsive (Use of Bootstrap and Material UI is not allowed)
- Write clean code with proper formatting and good variable and function naming
- Submission Deadline 19:00
- Folder `cohort_1/submissions/week_18/day_3/`



**Application**

- Route `/home` should contain two buttons `Create` and `Show`
- On clicking the `Create` button it should a form with the below fields and should be able to save them (DB is case you are doing for Full Stack, Redux and Localstorage for Frontend)
  - Name (Text)
  - Grade (Dropdown 1-10)
  - Maths (Marks Scored 0-100)
  - Science (Marks Scored 0-100)
- On clicking the `Show` button you should be able to see all the students with a pagination of 10 results per page and should also have the ability to filter by grade and sort by Maths or Science marks
- On clicking on Name of any student you should show the report card with the Name, Grade, Maths, Science, Total (Sum of Maths and Science) and Rank (Criteria for calculating the rank is mentioned below)
  - The ranks are calculated based on the Student Grade (So the topper in each grade will get first rank)
  - If two students in the same grade those who got same marks they will get same rank
  - The student placed next to the same marks students will get the rank skipping the
    intermediate ranks. Refer to the example below
    MARKS IN GRADE 10
    Iron Man - 10, Spider Man - 10, Captain Marvel - 15, Thor - 13, Hulk - 10, Hawkeye - 8
    RANKS OF STUDENTS
    Captain Marvel - 1, Thor - 2, Iron Man - 3, Spider Man - 3, Hulk - 3, Hawkeye - 6

