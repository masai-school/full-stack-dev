## Python

https://xkcd.com/353/

**Indentation**

```python
if 2 > 3:
    print("2 is greater than 2")

if 2 > 3:
print("2 is greater than 3")
```

**Variables**

```python
name = "Masai School"
num = 100
dec = 12.50
valid = True
```

**Data Types**  
https://docs.python.org/3/library/datatypes.html

```python
name = "Masai School" # str
num = 100 # int
dec = 12.50 #float
vaild = True # bool
fruits = ["grapes", "oranges", "mangoes"] # list
vegetables = ("carrot", "potato", "onion") # tuple
counter = range(100) # range
user = {"name": "Sid", "age": "21", "gender": "Male"} # dict
```

**Numbers**  
https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex

`int` `float` `complex`
```python
a = 2
b = 3.14
c = 4+5j
```

Conversion  
`int()` `float()` `complex()`

**Strings**
https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str

```python
a = "Masai"
b = 'School'
c = '''A Transformation in education
learn to earn, pay when you get
'''
```
```python
name = "Masai School"
for i in name:
	print(i)
```

**Operators**

Arithmetic

```python
a + b # addition
a - b # substraction
a * b # multiplication
a / b # division
a % b # modulus
a ** b # exponent
a // b # floor division
```

Comparison

```python
a == b # equal
a != b # not equal
a > b # greater than
a < b # less than
a >= b # greater than equal to
a <= b # less than equal to
```

Logical

```python
a < 5 and x > 10 # both are true
a < 5 or x < 10 # if one of the statement is true
not (a < 5) # reverse the result
```

**if else**

```python
x = 4
y = 5
if x > y:
    print("x is greater than y")
elif:
    print("x and y are equal")
else:
    print("y is greater than x")
```

**while**

```python
counter = 10
while counter < 1:
    print(counter)
    counter = counter - 1
```

