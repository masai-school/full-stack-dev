### Week 1 - Day 2

#### Session 1

[tar](https://xkcd.com/1168/) 

**The Linux Command Line (Part 3)**

`|` `find` `echo` `uniq` `<` `tar` `nano` `touch`



**| - Pipelines**

Using the pipe operator | (vertical bar), the standard output of one command can be piped into the standard input of another. 

```
$ grep masai demo.txt > masai.txt
```

Finds the occurrence word `masai` in the file `demo.txt` and writes it to masai.txt

```
$ wc -l masai.txt
```

Count the no of lines in the file `masai.txt` (Effectively giving the count of no. of times the word `masai` appears in the files `demo.txt`)

**The same can be done using | with the single line of commands**

```
$ grep masai demo.txt | wc -l
```

| (pipes) can also be used to connect any number of commands the syntax remains the same

```
$ command1 | command2 | command3 | command4
```



**find – Find Files the Hard Way**

The find program searches a given directory (and its sub-directories) for files based on a variety of attributes

```
$ find <path>
```

Find all the folders (including sub folders) and files in the given path

```
$ find <path> -type d
```

Adding the flag -type d limits the search to directories

```
$ find <path> -type f
```

Adding the flag -type f limits the search to files

```
$ find <path> -type d | wc -l
```

Remember pipes now the above command counts all the files in a particular folder

```
$ find <path> -type f -name "*.csv"
```

Finds all the files in the given path whose name ends with `.csv`

```
$ find <path> type f -name "*.csv" -size -1M
```

Finds all the files in the given path whose name ends with `.csv` and having size less than 1MB

**echo – Display a line of text**

```
$ echo "Hello MASAI"
```

That's pretty straightforward. Any argument passed to echo gets displayed

```
$ echo "Hello MASAI" > masai.txt
```

Writes the output of echo to the given file name

Expansion

```
$ echo *
```

Why didn't echo print *?  

As we recall from our work with wild-cards, the * character means match any characters in a filename, but what we didn't see in our original discussion was how the shell does that. The simple answer is that the shell expands the * into something else (in this instance, the names of the files in the current working directory) before the echo command is executed. When the Enter key is pressed, the shell automatically expands any qualifying characters on the command line before the command is carried out, so the echo command never saw the *, only its expanded result.

Brace Expansion

```
$ echo string_{a,b,c}
```

Output

```
string_a string_b string_c
```



```
$ echo number_{1..5}
```

Output

```
number_1 number_2 number_3 number_4 number_5
```



**uniq - Report or Omit Repeated Lines**

When given a sorted file (or standard input), it removes any duplicate lines and sends the results to standard output

```
$ uniq demo.txt
```

The results are no different from our original file; the duplicates were not removed. For `uniq` to do its job, the input must be sorted first. This is because uniq only removes duplicate lines that are adjacent to each other.

```
$ sort demo.txt | uniq
```

This will now gives us the unique lines from the file `demo.txt`

```
$ uniq -d sorted.txt
```

This will only show the duplicate lines from the files

```
$ uniq -c sorted.txt
```

Outputs the list of lines preceded by the number of times the line occurs

**tar**

The tar program is the classic tool for archiving files  

`c` Create an archive from a list of files and/or directories  
`x` Extract an archive  
`t` List the contents of an archive  

```
$ tar -cf demo.tar demo
```

Creates a tar file from all the folders and files in the folder `demo` to a file called  `demo.tar`

```
$ tar -tf demo.tar
```

Lists the contents of the tar file `demo.tar`

```
$ tar -xf demo.tar
```

Extracts the contents of the file `demo.tar`



**nano**

Popular command line text editor

```
$ nano
```

Opens the editor

```
$ nano file.txt
```

Opens the editor with the file `file.txt`

`[Ctrl]o` - Write to file  

`[Ctrl]w` - Search for word  

`[Ctrl][Shift]-`  `[Ctrl]_` - Go to line  

`[Ctrl]k` - Cut line  

`[Ctrl]u`- Uncut (Paste)



**touch**

The touch command is usually used to set or update the access, change, and modify times of files. However, if a filename argument is that of a nonexistent file, an empty file is created

```
$ touch file.txt
```

Creates the file `file.txt` if not exists

```
$ touch file1 file2
```

Creates the files `file1` and `file2` if not exists

```
$ touch file-{a,b,c,d}
```

Creates the files `file-a` `file-b` `file-c` `file-d` if not exists




**<  Standard Input**

Using the `<` redirection operator, we change the source of standard input from the key board to the file `demo.txt`