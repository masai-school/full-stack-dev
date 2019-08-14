### Week 1 - Day 1

#### Session 2

[GIT](https://xkcd.com/1597/) 

**Introduction to git (Part 1)**

`git init` `git config` `git add` `git commit` `git remote` `git clone` `git pull` `git push`

#### NOTES


**Why Use the Version Control?**

A big software project involves 100s of developers working simultaneously on 1000s of files changing millions of lines of code over a long time.

***Imagine all these developers using pen drives or email to share the changes they are making to the code***

Whenever you are working on something that changes over time, it’s useful to be able to track those changes. This can be for a number of reasons: it gives you a record of what changed, how to undo it, who changed it, and possibly even why. 

Version control systems (VCS) give you that ability. They let you commit changes to a set of files, along with a message describing the change, as well as look at and undo changes you’ve made in the past.

**Main categories of VCS**

- Centralised
- Distributed

<u>Centralised Version Control</u>

Centralized version control systems are based on the idea that there is a single “central” copy of your project somewhere (probably on a server), and programmers will “commit” their changes to this central copy.  
“Committing” a change simply means recording the change in the central system. Other programmers can then see this change. They can also pull down the change, and the version control tool will automatically update the contents of any files that were changed.

When you’re working with a centralised version control system, your workflow for adding a new feature or fixing a bug in your project will usually look something like this:

- Pull down any changes other people have made from the central server.
- Make your changes, and make sure they work properly.
- Commit your changes to the central server, so other programmers can see them.

<u>Distributed Version Control</u>

These systems do not necessarily rely on a central server to store all the versions of a project’s files. Instead, every developer “clones” a copy of a repository and has the full history of the project on their own hard drive. This copy (or “clone”) has all of the metadata of the original.

The act of getting new changes from a repository is usually called “pulling,” and the act of moving your own changes to a repository is called “pushing”. In both cases, you move changesets (changes to files groups as coherent wholes), not single-file diffs.

One common misconception about distributed version control systems is that there cannot be a central project repository. This is simply not true – there is nothing stopping you from saying “this copy of the project is the authoritative one.” This means that instead of a central repository being required by the tools you use, it is now optional and purely a social issue.



`git config` - sets or see the configuration for git  
`git config --global user.name [Firstname Lastname]` - set a name that is identifiable for credit when review version history  
`git config --global user.email [email]` - set an email address that will be associated with each history marker  
`git config user.name` - see the name set 

`git init` - initialize an existing directory as a Git repository  

`git clone [url]` - retrieve an entire repository from a hosted location via URL  

`git add [file]` - add a file as it looks now to your next commit (stage)  

`git commit -m "[descriptive message]"` - commit your staged content as a new commit snapshot  

`git remote add orgin [url]` - add a git URL as a remote

`git pull` - Fetch and merge any commits from the tracking remote branch  

`git push`  - Transmit local branch commits to the remote repository branch  