## Python

**Functions**

```python
# Defining a function
def some_function():
    print("Hello Masai")
    
# Using a function
some_function()

# Defining a function with params
def print_name(name):
    print(name)

# Calling a function with params
print_name("Ajay")
print_name("Akshay")

# Passing default values
def print_name(name = "Masai"):
    print(name)
    
print_name("Ajay")
print_name()
print_name("Akshay")

### Function return
def can_drive(student):
    if student.get("age") > 18 :
        return True
    else:
        return False

def show_student():
    student = {
        "name" : "Ajay",
        "age" : 23,
        "gender" : "M"
    }
    if can_drive(student):
        print(student["name"] + " of age " + str(student["age"]) + " is eligible for driving")
```

**Scope**

```python
"""
A variable inside function is only available inside
A variable outside the function and in the main body is available everywhere
"""
name = "Masai"

def show_name():
    name = "School"
    print(name)

print(name)
show_name()
print(name)
```

```python
"""
Use global keyword to define a variable available everywhere
"""
def show_name():
    global name
    name = "School"
    print(name)

show_name()
print(name)
```

```python
"""
Use the global keyword to change the global variable 
"""
name = "Masai"

def show_name():
    global name
    name = "School"
    print(name)
    name = "Hello"

print(name)
show_name()
print(name)
```
