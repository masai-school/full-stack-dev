# Week 2 - Day 4

**NOTE:** Follow the instructions carefully and follow coding discipline

**SUBMISSION:**

- Pull the `cohort_1` repo
- Go to `assignments/week_2/day_4` 
- Copy the folder `template` to a new folder with the name `firstname_lastname`
- Once you complete the assignment push that folder to the online repo



## FSD.W2.4.A (45 min)

- Complete the file `leaderboard.html` so that it looks similar to the link <https://github.com/masai-school/full-stack-dev/blob/master/course/week_2/day_4/w2_d4_assignment/leaderboard.jpg>
- Functionality
  - By clicking on any number it shows up in the score box joined to any previous numbers already present (Eg: To enter a score of `423` you have to press `4` `2` `3`)
  - Once the button `ENTER` is pressed the score gets compared with the `MIN` and `MAX` boxes, if the current score is less than the `MIN` score it gets updated with the current score, if the current score is greater than the `MAX` score it gets updated with the current score
  - The `SCORE` box will be reset with empty value



## FSD.W2.4.B (45 min)

- Complete the file `registration.html` so that it looks similar to the link <https://raw.githubusercontent.com/masai-school/full-stack-dev/master/course/week_2/day_4/w2_d4_assignment/registration.jpg>
- Functionality
  - The user should be able to fill the three fields in the form
  - Once the register button is clicked it should perform the below validations
    - Name show be more than 3 characters and less than 10 characters
    - The email should be valid one you can use the function from the coding session FSD.W2.4.1_3
    - The mobile must only consist of 10 digits
  - If any of the validations fail you should show the error messages below that particular field
  - If all the validations pass, the filled values should appear on the right side black box and the form should be reset to blank values