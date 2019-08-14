### Week 1 - Day 2

#### Session 2

[GIT](https://xkcd.com/1597/) 

**Introduction to git (Part 2)**

`git init` `git add` `git commit` `git remote` `git clone` `git pull` `git push` `git status` `git log`

#### NOTES

**git init**

```
$ git init
```

Initialise an existing directory as a Git repository

**git add**

```
$ git add file.txt
```

Tell git to start tracking changes to the file `file.txt`

```
$ git add file1.txt file2.txt file3.txt
```

Tell git to start tracking changes to the file `file1.txt` `file2.txt` `file3.txt`

```
$ git add directory
```

Tell git to start tracking changes made in the folder with the name `directory`

```
$ git add directory/*.csv
```

Tell git to start tracking changes to all the `.csv` files in the folder with the name `directory`

**git commit**

```
$ git commit -m "message for the commit"
```

Create a new commit containing any changes to the previously added files with the mentioned message 

**git remote**

```
$ git remote add origin https://github.com/username/test.git
```

Add a git URL as a remote

**git push**

```
$ git push origin master
```

Transmit local commits to the remote repository

**git clone**

```
$ git clone https://github.com/username/test.git
```

retrieves an entire repository from a hosted location via URL  

**git pull**

```
$ git pull origin master
```

Fetch and merge any commits from the tracking remote branch

**git status**

```
$ git status
```

show modified files in working directory, staged for your next commit

**git log**

```
$ git log
```

show all commits in the current repository history



<u>CAUTION</u>

git is generally used for tracking changes to code file so don't put huge files of images, videos or any others. (remember everyone ends up copying those file)