## Week 5 - Day 4

### Git Branch & Pull Request

When the project becomes big you will run into multiple problems because of many people/teams working on the same project, so the common problems are

- What is the code running on the production 
- What is the code that the QA team should test
- How multiple features can be built by seperate teams simultaneously
- How to quickly fix some serious issue that is occuring in production

Git Branching makes it harder for unstable code to get into the main code



**HOW IT WORKS**

A branch represents an independent line of development. It is kind of creating a copy of your project at a certain point and working independently on it



### COMMANDS



List all the branch in the repo 

```shell
$ git branch --list
```

`*`  - current branch you are using



Create a new branch with the given name

```shell
$ git branch <name>
```



Rename the branch to with the new name

```shell
$ git branch -m <new_name>
```



Switching to the new branch name

```shell
$ git checkout <branch_name>
```



Push a particular branch to the remote repo

```shell
$ git push origin <branch_name>
```

