# Week 4 - Day 3

**NOTE:** Follow the instructions carefully and follow coding discipline

**SUBMISSION:**

- Pull the `cohort_1` repo
- Go to `assignments/week_4/day_3` 
- Create a new file with the name `firstname_lastname.html` with your first name and last name.
- Once you complete the assignment push that file to the online repo

## FSD.W4.3.A (90 min)

**Website Design:**
Your webpage should look more or less like this design: [https://github.com/masai-school/full-stack-dev/blob/master/course/week_4/day_3/Day3_assignment_mockup.png](https://github.com/masai-school/full-stack-dev/blob/master/course/week_4/day_3/Day3_assignment_mockup.png)

**Functionality:**

1. When data is entered into the input boxes and the submit button is clicked, the data should appear on the table on the right.
2. New data can be entered at any time and your table should be updated accordingly. 
3. There are multiple filter checkboxes that can be selected.
4. When these checkboxes are selected, the table should show values who pass the filter.
5. Your filters should be based on the input from the input box labeled `Filter Input`
6. The languages input is a comma separated input which you must convert into an array.

## Filters

1. If the filter checkbox with the label `Population Greater Than` is checked, your table should only display the data from Countries with `population > input`. 

Eg: If input is > 1000. Your table should display the details of all countries with `population > 1000`

2. If the filter checkbox with the label `Population Lesser Than` is checked, your table should only display the data from Countries with `population < input`. 

3. If the filter checkbox with the label `GDP Greater Than` is checked, your table should only display the data from Countries with `GDP > input`. 

4. If the filter checkbox with the label `GDP Lesser Than` is checked, your table should only display the data from Countries with `GDP < input`.

5. If the filter checkbox with the label `Life Expectancy Equal To` is checked, your table should only display the data from Countries with `Average Life Expectancy == input`.

6. If the filter checkbox with the label `Language` is clicked, your table should only display the data from Countries where at least one language spoken is the same as the input language.    

**Note:** Multiple filters can be applied at the same time so write your code in such a way that you can select or unselect any number of filters and the table will update accordingly. 

**Note2:** You are free to use any inbuilt JavaScript functions you want.You can also use any HTML/CSS you desire too. There is no restriction on anything!
However, be warned that copy pasting code directly from stackoverflow.com or anyone in the class is considered cheating. We will be MOSS testing your code!


