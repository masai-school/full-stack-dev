## Python

**Lists**
*mutable - liable to change*

```python
students_1 = ["Ajay", "Akshay", "Anusha"]
students_2 = ["Anuj", "Amit", "Ravi", "Nitin"]

## Joining Lists
students = students_1 + students_2

## Merging Lists
students_1.extend(students_2)
```

**Tuples**
*immutable - unchanging over time*

```python
students = ("Ajay", "Akshay", "Anusha", "Vetri", "Rahul", "Mahesh", "Pavan", "Haren")

students[1] ## Item at index 1
students[2:] ## Items from index 2 to end

students.index("Anusha") ## Gives the index of the item if found in the tuple
students.count("Vetri") ## The number of times the item appears in the tuple

len(students) ## Size/Length of the tuple
```



**Sets**

https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset

*Unordered collection of distinct items*

```python
students = {"Ajay", "Akshay", "Anusha", "Vetri", "Rahul", "Mahesh", "Pavan", "Haren"}

## Add items to the set
students.add("Priyanshu")

## Add multiple items to the set
students.update(["Hasaan", "Sumanta", "Mousumi"])

## Adding or updating existing elements
students.add("Ajay")

len(students) ## Count of items in the set

student.remove("Ajay") ## Remove an item from the set
student.discard("Akshay") ## Discards an item from the set

## Difference between remove and discard
students.remove("Chandrashekhara") ## Raises Error
students.discard("Chandrashekhara") ## Doesn't raise error

## Remove the last item
students.pop() # Since the items are unordered you can't know which will be removed

## Inbuilt methods

set.union(set1, set2...) # returns a set that contains all items from the original set, and all items from the specified sets

set.intersection(set1, set2 ... etc) # returns a set that contains the similarity between two or more sets

set.difference(set1) # returns set contains items that exist only in the first set, and not in both sets

set.symmetric_difference(set1) # returns set contains a mix of items that are not present in both sets

set.isdisjoint(set1) # returns True if none of the items are present in both sets, otherwise it returns False

set.issubset(set1) # returns True if all items in the set exists in the specified set, otherwise it retuns False

set.issuperset(set1) # returns True if all items in the specified set exists in the original set, otherwise it retuns False
```

Union  
https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Venn0111.svg/220px-Venn0111.svg.png

Intersection  
https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Venn0001.svg/220px-Venn0001.svg.png

Difference  
https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Venn0100.svg/220px-Venn0100.svg.png

Symmetic Difference  
https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Venn0110.svg/220px-Venn0110.svg.png

Subset & Superset  
https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Venn_A_subset_B.svg/150px-Venn_A_subset_B.svg.png



**Dictionaries**

https://docs.python.org/3/library/stdtypes.html#mapping-types-dict

```python
student = {
    "name": "Ajay",
    "state": "Tamil Nadu",
    "gender": "Male",
    "married": False,
    "age": 23
}

## Accessing the items of a dictionary
print(student["age"]) # raises an error if the key is not present
print(student.get("age")) # doesn't raise an error if the key is not present

## Update/Set the values
student["age"] = 22
student.update({"age": 23, "city": "Chennai"})

## Removing vales from dictionary
student.pop("gender")
del student["state"]

## Empty the dictionary
student.clear()

## Length of the dictionary
len(student)

## Looping a dictionary
for x in student:
    print(x)
    print(students[x])
    
for key, value in student.items():
    print(key)
    print(value)
    
student.keys() ## returns the list of all keys
student.values() ## returns the list of all values

## Check existance
if "age" in student:
    print("Age is present")
    
if "designation" not in student:
    print("Designation is not present")
```



**NOTE: You can't concatenate strings and numbers in python to do that you can cast it**
```python
name = "Ajay"
age = 23
heading = name + " " + str(age)
```