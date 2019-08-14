# Week 1 - Day 1

#### Coding Session 1

**The Linux Command Line (Part 1)**

**NOTE:** Try not to use google or stackoverflow when you are stuck instead explore the `man` pages when ever required. 

*For Example:* `man ls` will give you the manual page for the `ls` command.   

***NOTE**: Make sure that `wget` and `unzip` are installed on your system!  
You can check with the command `wget --version`, it should show the versions of `wget` and `unzip` that you currently have.  
If they are not installed you can do so using the commands given below*  
Ubuntu

```
sudo apt-get install wget
sudo apt-get install unzip
```
Mac
```
brew install wget
brew install unzip
```

### FSD.W1.1.1_1

Display the current date in UTC (Coordinated Universal) time

### FSD.W1.1.1_2

Display the calender for the year you were born

### FSD.W1.1.1_3

Display the amount of free space on your computer in human readable format in MB and GB

### FSD.W1.1.1_4

Display the free ram on your system in MB

### FSD.W.1.1_5

Restart your shell/terminal and print the working directory

### FSD.W.1.1_6

Download the file <https://raw.githubusercontent.com/masai-school/assignments-data/master/data/lists/countries.csv> and navigate through it using the `less` command also try to find the country `India` in it

### FSD.W.1.1_7

Create a folder called `practise` in your home directory and then create the below folders inside the `practise` folder

1. a folder named `movies` with 4 folders inside it with the names `english` `hindi` `french` `chinese`
2. a folder named `songs` with 3 folders inside it with the names `tamil` `kannada` `urdu`
3. a folder named `books` with 4 folders inside it with the names `english` `hindi` `french` `chinese`
4. A folder named `epsilon` inside `delta` which is inside `gamma` which is inside `beta` which is inside `alpha`

### FSD.W.1.1_8

Download and unzip the file https://github.com/masai-school/assignments-data/raw/master/downloads/course.zip in your home directory and navigate to the `course` folder 

### FSD.W.1.1_9

Do the below set of listing operations

1. List all the files and folders inside the `course` folder
2. Go to the `day_1` folder `week_1` and check if there are any hidden files in that folder
3. List all the files and folders in a recursively including the hidden folders inside `week_1`
4. List all the files in the `all` folder along with their modified time in the ascending order of the modified times (oldest first newest last)

### FSD.W1.1.1_10

Do the below set of copy operations inside the `course` folder

1. Copy the file `overall.txt` inside `all` folder to `practise` folder created during the task **FSD.W.1.1_7**
2. Copy the folder `week_1` inside `course` folder to `practise` folder
3. Copy all the files that belong to session1 (ends with `s1.txt`) to a new folder called `s1` inside `all` folder and all the files that belong to session2 to a new folder called `s2`
4. Copy all the files that belong to day3 (has `d3` in the name) to a new folder called `day_3` inside `all` folder

### FSD.W1.1.1_11

Do the below set of rename/move operations inside the `course` folder

1. Rename the files `w3_d3_s1.txt` to `w2_d3_s1.txt` and `w3_d3_s2.txt` to `w2_d3_s1.txt`
2. Rename the folder `day-4` inside `week_2` folder to `day_4`
3. Move all the week1 files (starts with `w1`) inside `all` folder to a new one inside it with the name `w1` and week2 files to a folder called `w2`
4. Create a folder named `session_wise` inside `all` folder and move the folders `s1` and `s2` created during the task  **FSD.W1.1.1_10** to that folder

### FSD.W1.1.1_12

Do the below set of delete operations inside `course` folder

1. Delete the file `overall.txt` inside `all` folder
2. Delete the files that belong to week3 (starts with `w3`) inside the `all` folder
3. Delete the folder `day_3` inside `all` folder
4. Delete any hidden folders inside `week_1` folder in `practise` folder copied during the task  **FSD.W1.1.1_10**
5. Delete the folders `week_1` and `week_2` inside `course` folder