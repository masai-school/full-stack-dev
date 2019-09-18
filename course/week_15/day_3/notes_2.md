## Python

**Files**

https://docs.python.org/3/library/functions.html#open

Read File Content

```python
fl = open("demo.txt")
fl.read() # Whole file content
fl.close()
```

Read File line

```python
fl = open("demo.txt")
print(fl.readline()) # First Line
fl.close()
```

Read File line by line

```python
fl = open("demo.txt")
for line in fl:
    print(line)
fl.close()
```

Write File

```python
fl = open("demo.txt", "w")
fl.write("Masai School")
fl.close()
```

Append File

```python
fl = open("demo.txt", "a")
fl.write("Masai School")
fl.close()
```