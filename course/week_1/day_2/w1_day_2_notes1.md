### Week 1 - Day 2

#### Session 1

[Command Line Fun](https://xkcd.com/196/) 


**The Linux Command Line (Part 2)**

`>` `>>` `cat` `sort` `grep` `wc` `head` `tail`

#### NOTES

**Standard Input, Output, and Error**

All programs you launch (“processes”) have three “streams”:

`STDIN` -  when the program reads input, it comes from here
`STDOUT` - when the program prints something, it goes here
`STDERR` - a 2nd output the program can choose to use

**Redirecting Standard Output**

I/O redirection allows us to redefine where standard output goes. To redirect standard
output to another file instead of the screen, we use the `>` redirection operator followed by
the name of the file.

Send the output of the `ls` command to the file `ls-output.txt` instead of the screen

```
$ ls -l ~/masai > ls-output.txt
```

Having a look at the `ls-output.txt` file

```
$ less ls-output.txt
```

Doing the same with a directory that doesn't exist

```
$ ls -l ~/random > ls-output.txt
ls: cannot access '/home/username/random': No such file or directory
```

`ls` program does not send its error messages to standard output instead it sends its error messages to standard error

`>` The destination file is always rewritten from the beginning

`>>` Append redirected output to a file instead of overwriting the file from the
beginning

Doing the `ls` with `>>` redirection 

```
$ ls -l ~/masai >> ls-output.txt
$ ls -l ~/masai >> ls-output.txt
$ ls -l ~/masai >> ls-output.txt
```
Having a look at the `ls-output.txt` file
```
$ less ls-output.txt
```


**cat – Concatenate Files**

The cat command reads one or more files and copies them to standard output

```
$ cat file1.txt file2.txt
```

This shows the combined output joining both the files  

Using the redirection `>` you can write the combined into a new file

```
$ cat file_* > combined.txt
```

TIP: You can use the wildcards to select the files if there are many files  




**sort - sort lines of text files**

The sort command sorts the lines of the file in ascending order

```
$ sort file.txt
```

This shows the lines of the file in sorted order
```
$ sort file.txt > sorted_file.txt
```

In case you want to save the file in sorted order

```
$ sort -r file.txt
```

This sorts the file in reverse order

Suggestion: Explore `man` pages for more options



**grep – Print Lines Matching a Pattern** 

grep is a powerful program used to find text patterns within files

```
$ grep search_word file.txt
```

This shows all the lines in `file.txt` which contain the `search_word`

You can also use this to search in multiple files along with wild cards also

```
$ grep search_word file_1.txt file_2.txt 
```

```
$ grep search_word file_*
```



**wc – Print Line, Word, and Byte Counts**

The wc (word count) command is used to display the number of lines, words, and bytes
contained in files

```
$ wc file.txt
```

This shows the lines, words and bytes of `file.txt`

```
$ wc files_*
```

TIP: You can also use wild cards

<u>MORE OPTIONS</u>

```
$ wc -l
```

shows the no of lines

```
$ wc -w
```

shows the no of words

```
$ wc -m
```

shows the no of characters



**head / tail – Print First / Last Part of Files**

Sometimes we don't want all the output from a command. We may only want the first few lines or the last few lines. The head command prints the first ten lines of a file, and the tail command prints the last ten lines.

```
$ head file.txt
```

shows the first 10 lines of the file

```
$ tail file.txt
```

shows the last 10 lines of the file

```
$ head -n 20 file.txt
```

shows the first 20 lines of the file

```
$ tail -n 20 file.txt
```

shows the last 20 lines of the file