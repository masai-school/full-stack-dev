### Week 2 - Day 1

#### Session 2

**Introduction to git (Part 3)**

`git checkout` `git revert` `git reset` `git diff` 

**git diff**

```
$ git diff
```

diff of what is changed but not staged

```
$ git diff --staged
```

diff of what is staged but not yet commited

```
$ git diff file.txt
```

diff of what is changed in `file.txt`

```
$ git diff folder
```

diff of what is changed in the directory `folder`

```
$ git diff <commit1> <commit2>
```

diff between two commits



**git reset**

```
$ git reset file.txt
```

unstage a file while retaining the changes



**git checkout**

```
$ git checkout file.txt
```

discards any modifications made to the file that are not staged

**NOTE: Be careful before using this command you might loose some data**



**git revert**

```
$ git revert <commit>
```

reverts the changes to the mentioned commit



**Resolving merge conflicts**

User 1 Project

```
~/masai/account1/project$ echo "Content 1" > file.txt
~/masai/account1/project$ git add file.txt
~/masai/account1/project$ git commit -m "user1 commit"
~/masai/account1/project$ git push origin master
```

User 2 Project

```
~/masai/account2/project$ echo "Content 2" > file.txt
~/masai/account2/project$ git add file.txt
~/masai/account2/project$ git commit -m "user2 commit"
~/masai/account2/project$ git pull origin master
```

You will get below message

```
Auto-merging file.txt
CONFLICT (add/add): Merge conflict in file.txt
Automatic merge failed; fix conflicts and then commit the result.
```

Contents of `file.txt`

```
<<<<<<< HEAD
Content 2
=======
Content 1
>>>>>>> 160199578ad0a96b3130233595a905bca4e52fae
```

Make changes to `file.txt`

```
Content 2
```

If you want to keep the new content

```
Content 1
```

If you want to keep the old content

```
$ git add file.txt
```

To mark the resolution of conflicts

```
$ git commit
```

To conclude the merge after resolving conficts

```
$ git push origin master
```

To push the changes back to the online repo