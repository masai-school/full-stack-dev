# Week 1 - Day 2

#### Coding Session 2

**Introduction to git (Part 2)**

**NOTE:** Follow the instructions carefully and follow coding discipline

### FSD.W1.2.2_1

- Go to your home directory `cd ~` and create a folder called `repos`
- Create a folder called `test` inside `repos` folder
- Navigate to `test` folder
- Initialise `test` folder with an empty repository  

### FSD.W1.2.2_2

- Create a file called `start`  inside `test` folder with the current `date` (HINT:  `date > start`)
- Add the file `start` to `git` (HINT: use `git add` command)
- Check the status of the `start` file using `git status` command
- Commit the changes to `git` with the message "Start Time" (HINT: use `git commit` command)

### FSD.W1.2.2_3

- Go to http://github.com and create a new repository called `test` (**NOTE**: Don't tick the option Initialize this repository with a README)
- Add the newly created repository as remote to git repo in `test` folder (HINT: use `git remote` command)
- Sync the local commit to the remote repo (HINT: use `git push` command)
- Go to the repo page on http://github.com and see if you can see the start file in the repository

### FSD.W1.2.2_4

Create a new file in the repo page with the name `profile.md` put your name as the contents of the file and commit the new file with the message "Online Commit"

### FSD.W1.2.2_5

- Download and unzip the file https://github.com/masai-school/assignments-data/raw/master/downloads/course.zip in the `test` repo folder (TIP : use`wget` and `unzip`)
- After unzipping you should in the `all` folder there is a file called `overall.txt` sync that file to the remote repo with the message "First File" (TIP: use the flow `add` `commit` `push`)

### FSD.W1.2.2_6

- Sync the folder `week_1` to the remote repo with the message "Week1 Course" (HINT: use the `git status` command to make sure only `week_1` folder is getting synced)
- Sync the folder `week2/day_5` to the remote repo with the message "W2 D5"
- Check if the online created file is now present in the `test` folder and see if the history of commits (HINT: use `git log`)

### FSD.W1.2.2_7

Create a new file called `complete` in the `test` folder and sync it to the online repo 

### FSD.W1.2.2_8

- Go to your home directory `cd ~`

- Navigate to the `repo` directory

- Clone the repo <https://github.com/masai-school/cohort_1> 

### FSD.W1.2.2_9

- There is folder called `attendance` inside the `cohort_1` repo
- Navigate to `attendance` folder
- Copy the `template.md` file with the name `firstname_lastname.md`
- Sync back the newly created file `firstname_lastname.md` to the remote repo