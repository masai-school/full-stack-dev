# Week 3 - Day 1

**NOTE:** Follow the instructions carefully and follow coding discipline



**SUBMISSION:**

- Pull the `cohort_1` repo
- Go to `assignments/week_3/day_1` 
- Create a new file with the name `firstname_lastname.html`
- Once you complete the assignment push that file `firstname_lastname.html` to the online repo



Design and implement a typewriter with all the mentioned special functionalities  
<https://raw.githubusercontent.com/masai-school/full-stack-dev/master/course/week_2/day_5/week_2_project.jpg>



**COMMON FUNCTIONALITY**

- Clicking on the keys `{A..Z}` adds the respective letter to the existing text in lower case `{a..z}`
- Clicking on `.com` adds the same to the existing text
- Clicking on `DEL`  removes the last letter from the existing text
- Clicking on the keys `{0..9}` adds the respective number to the existing text
- Clicking the `SPACE` bar adds space to the existing text
  



**SPECIAL FUNCTIONALITY**

When any of the special button is clicked if it is in `OFF MODE` (BLACK TEXT) it should change to `ON MODE` (GREEN TEXT) and vice versa

- CAPS
  - `OFF MODE` - Clicking `{A..Z}` adds the respective letter in lower case `{a..z}` 
  - `ON MODE` - Clicking `{A..Z}` adds the respective letter in upper case `{A..Z}`
- SHIFT
  - `ON MODE` - Clicking `{0..9}` adds the symbol above the respective number
  - Should automatically switch back to `OFF MODE` after single use
- PASSWD
  - `ON MODE` - Shows only the last typed letter all the other characters are masked with `*` (Eg: Instead of `masai` it should show `****i`)
  - `OFF MODE` - Shows normal text
- CLEAN
  - `ON MODE` - Masks any obscene words showing only the first and last characters (Eg: Instead of `shit` it should show `s**t`) You can pick any 10 words from <https://github.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/blob/master/en>
  - `OFF MODE` - Shows normal text
- REV
  - `ON MODE` - Shows the existing text in reverse mode (Eg: Instead of `masai` it should `iasam`)
  
  - `OFF MODE` - Shows the text in normal mode