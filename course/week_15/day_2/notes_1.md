## Python

**Strings**  

https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str

```python
name = "Masai School"
print(name[2]) # character at position 2 starts with 0
print(name[-1]) # negative from last position
print(name[2:5]) # string from position 2 (included) to position 5 (excluded)
print(name[3:]) # string from positon 3 to end
print(name[-5:-3]) # string from position -5 (included) to position -3 (excluded)
print(name[:-4]) # string from starting to -4 

## Length of the string
print(len(name))

## String methods

print(name.lower()) # lower case
print(name.replace("a", "@")) # find and replace

# Concatenation
tag = "A transformation in education"
heading = name + " " + tag

# Check sub string exists in string
if "School" in heading:
    print("School exists in heading")
    
if "for" not in heading:
    print("for doesn't exists in heading")
```

**Sequence Types**

https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range

Range

```python
range(10)
range(2, 20)
range(5, 50, 5)

range(start, stop, step) # default start is 0 default step is 1

# looping the range
for x in range(10):
    print(x)

# Checking for items in range
if 35 in range(5, 50, 5):
    print("35 exists in range")

if 32 not in range(5, 50, 5):
    print("32 does no exists in range")

# Size/length of range
len(range(5, 50, 5))
```

List

```python
students = ["Ajay", "Akshay", "Haren"]
alphabets = ["a", "b", "c", "d", "e"]
primes = [2, 3, 5, 7, 11, 13, 17, 19]

alphabets[2] ## Item at position 2
alphabets[4:] ## Items from position to end

## Size/Length of list
len(primes)

## looping the list
for x in students:
    print(x)
    
## Adding item at the end
students.append("Anusha")

## Adding the item at a particular position
students.insert(2, "Rahul")

## Removing item from the end
students.pop()

## Remove a particular position from the list
students.pop(index)
del students[index]

## Remove the specified item (first occurance)
students.remove(value)

## Remove all the elements of the list
del students
students.clear()

## Count all the occurances
students.count(value)

## Check for existance
if "Ajay" in students:
    print("Ajay is present in students")
    
if "Priyanshu" not in students:
    print("Priyanshu doesn't exist in the list of students")
```

