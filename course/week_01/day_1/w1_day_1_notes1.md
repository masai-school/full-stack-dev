### Week 1 - Day 1

#### Session 1

[Command Line Fun](https://xkcd.com/196/) 

**The Linux Command Line (Part 1)**

`date` `cal` `df` `free` `pwd` `cd` `ls` `less` `file` `mkdir` `cp` `mv` `rm` `wget` `unzip`

#### NOTES


**Why Use the Command Line?**

Both the GUI(Graphical User Interface) and CLI(Command Line Interface) are ways you can interact with your computer.  
But when it comes to the command line, once you learn the commands, it is faster and more powerful to navigate and use your computer. This is why many programmers prefer the command line.

***Graphical user interfaces make easy tasks easy, while command line interfaces make difficult tasks possible”***



### What is the shell?

When we speak of the command line, we are really referring to the shell. The shell is a program that takes keyboard commands and passes them to the operating system to carry out.  
Almost all Linux distributions supply a shell program from the GNU Project called bash.  
The name “bash” is an acronym for “Bourne Again SHell”, a reference to the fact bash is an enhanced replacement for sh, the original Unix shell.



------

**Note**: Don't be tempted to use Ctrl-c and Ctrl-v to perform copy and paste inside a terminal window. They don't work. These control codes have different meanings to the shell and were assigned many years before the release of Microsoft Windows.

------

### Some Simple Commands

`date` - displays current date and time  
`cal` - displays a calendar of the current month  
`df` - see the current amount of free space on our disk drives  
`free` - display the amount of free memory  

### Flags

Most command line utilities take parameters using **flags**.  
Flags usually come in short form (`-h`) and long form (`--help`).  
 Usually running `CMD -h` or `man CMD` will give you a list of the flags the program takes.  
 Short flags can usually be combined, running `date -u -R` is equivalent to running `date -uR` or `date -Ru`.

`tab` - auto fill (very handy)  
`q` - quit from command

### Navigation

`pwd` - print working directory  
`cd` - change directory  
    `cd /usr/bin` - absolute path   
    `cd ..` - working directory parent  
    `cd ./bin` or `cd bin` - relative path  
    `cd` or `cd ~` - home directory  
    `cd -` - previous working directory  
`ls` - list files  
    `ls -l` - show detailed info in columns  
    `ls -a` - include hidden files also  
    `ls -t` - sort by last modified date newest first  
    `ls -S` - sort by size  
    `ls -R` - recursively list subdirectories  
    `ls -F` - indicator at the end of each file `/` if it is a directory

    `ls /usr` - specify directory to list   

```
ls [-ABCFGHLOPRSTUW@abcdefghiklmnopqrstuwx1]
```

`file <filename>` - determine the file type  
`less <filename>` - show the contents of a file  
    `b` - scroll back one page  
    `space` - scroll forward one page  
    `up arrow` - scroll up one line  
    `down arrow` - scroll down one line  
    `G` - move to the end of file  
    `g` - move to the beginning of file  
    `/characters` - search forward the next occurance of characters  
    `n` - search for the next occurrence of the previous search  

### Wildcards

Before we begin using our commands, we need to talk about a shell feature that makes these commands so powerful. Since the shell uses filenames so much, it provides special characters to help us rapidly specify groups of filenames. These special characters are called wildcards. Using wildcards allows us to select filenames based on patterns of characters. 

`*` - Matches any characters
`?` - Matches any single character

### Manipulation

`mkdir <directory>` - create directory  
    `mkdir <dir1> <dir2> <dir3>` - create multiple directories  
    `mkdir -p <dir1>/<dir2>/<dir3>` - create intermediate   directories as required  

`cp <item1> <item2>` - copies the single file or directory item1 to the file or directory item2  
    `cp file1 file2 dir1` - Copy file1 and file2 into directory  
    `cp dir1/* dir2` - Using a wildcard, copy all the files in   dir1 into dir2. The directory dir2 must already exist.  
    `cp -r dir1 dir2` - Copy the contents of directory dir1 to directory dir2.  
    If directory dir2 does not exist, it is created and, after the copy, will contain the same contents as directory dir1.  
    If directory dir2 does exist, then directory dir1 (and its contents) will be copied into dir2.

`mv <item1> <item2>` - performs both file moving and file renaming
    `mv file1 file2` - Move file1 to file2. If file2 exists, it is overwritten with the contents of file1. If file2 does not exist, it is created. In either case, file1 ceases to exist.
    `mv file1 file2 dir1` - Move file1 and file2 into directory dir1. The dierctory dir1 must already exist.  
    `mv dir1 dir2` - If directory dir2 does not exist, create directory dir2 and move the contents of directory dir1 into dir2 and delete directory dir1.If directory dir2 does exist, move directory dir1 (and its contents) into directory dir2.  
    
`rm <item>` - used to remove (delete) files and directories  
    `rm -r dir1` - Delete dir1 and its contents.  
    `rm -r file1 dir1` - Delete file1 and dir1 and its contents.  

**<u>CAUTION</u>** 

Unix-like operating systems such as Linux do not have an undelete command.  
**Once you delete something with rm, it's gone!**  
Linux assumes you're smart and you know what you're doing.

**<u>TIP</u>**

Whenever you use wildcards with rm (besides carefully checking your typing!), test the wildcard first with ls.  
This will let you see the files that will be deleted. Then press the up arrow key to recall the command and
replace ls with rm.



### Extra Commands

`wget <location>` - command-line program for file downloading
`unzip <file>` - command to unzip a file