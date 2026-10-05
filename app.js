(() => {
  'use strict';

  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];

  const lessons = [
    {chapter:'1 · Meet Python',title:'10 Fun Facts About Python',desc:'What Python is and what people build with it.',icon:'🐍',explain:'Python is a programming language designed to be readable. People use it for websites, data, automation, AI, games, robotics and many other things. You do not need to memorize everything before building. PYN teaches ideas when you need them.',code:'print("Hello PYN!")',question:'Which line correctly prints text in Python?',answers:['say("Hello")','print("Hello")','output = Hello'],correct:1,video:'Python in 3 minutes'},
    {chapter:'1 · Meet Python',title:'Get Ready',desc:'Python files, VS Code and running your first program.',icon:'🛠️',explain:'Python code is usually saved in a file ending in .py. An editor such as VS Code helps you write the file, while Python itself runs it.',code:'# hello.py\nprint("My first program!")',question:'What file ending is normally used for a Python file?',answers:['.py','.python','.code'],correct:0,video:'Set up Python + VS Code'},
    {chapter:'2 · Core Basics',title:'Syntax',desc:'The writing rules Python expects.',icon:'⌨️',explain:'Syntax means the rules for writing code. Parentheses, quotes, colons and indentation can all matter. When syntax is wrong, Python usually tells you where it got confused.',code:'print("Syntax matters")',question:'What does syntax mean?',answers:['The color of your code','The rules for writing code','A type of variable'],correct:1,video:'Python syntax visually explained'},
    {chapter:'2 · Core Basics',title:'Input and Output',desc:'Let a program talk and listen.',icon:'💬',explain:'print() sends information out to the screen. input() pauses and lets the person using the program type something in.',code:'name = input("Your name: ")\nprint(f"Hi {name}!")',question:'Which function asks a user to type something?',answers:['input()','print()','type()'],correct:0,video:'Input and output with a tiny game'},
    {chapter:'2 · Core Basics',title:'Comments',desc:'Leave notes for humans reading code.',icon:'📝',explain:'A comment starts with #. Python ignores it, but it helps you explain what the program is doing.',code:'# Ask for the player name\nname = input("Name: ")',question:'Which symbol begins a simple Python comment?',answers:['//','#','!'],correct:1,video:'Why programmers use comments'},
    {chapter:'2 · Core Basics',title:'Variables',desc:'Store information under useful names.',icon:'📦',explain:'A variable is a name that points to a value. Think of it like a labeled box. The value can later change.',code:'score = 10\nscore = score + 5\nprint(score)',question:'What is a variable mainly used for?',answers:['Storing a value under a name','Changing Python colors','Installing packages'],correct:0,video:'Variables with game scores'},
    {chapter:'2 · Core Basics',title:'Data Types',desc:'Text, whole numbers, decimals and True/False.',icon:'🧩',explain:'Values have types. str is text, int is a whole number, float is a decimal number and bool is True or False.',code:'name = "Mina"\nage = 13\nheight = 1.6\nonline = True',question:'Which value is a Boolean?',answers:['"True"','True','1.5'],correct:1,video:'Python data types in plain English'},
    {chapter:'2 · Core Basics',title:'Numbers',desc:'Integers, floats and calculations.',icon:'🔢',explain:'Integers are whole numbers such as 4. Floats include decimals such as 4.5. Python can add, subtract, multiply and divide them.',code:'coins = 20\nbonus = 5\nprint(coins + bonus)',question:'Which value is a float?',answers:['12','"12"','12.5'],correct:2,video:'Numbers and calculations'},
    {chapter:'2 · Core Basics',title:'Strings',desc:'Work with text.',icon:'🔤',explain:'A string is text inside quotes. You can join strings, inspect characters and use helpful methods.',code:'first = "Py"\nsecond = "thon"\nprint(first + second)',question:'Which one is a string?',answers:['25','"25"','True'],correct:1,video:'Strings without the confusion'},
    {chapter:'2 · Core Basics',title:'Casting',desc:'Convert one type into another.',icon:'🔄',explain:'Casting changes a value from one type to another. int("12") turns text into a whole number. str(12) turns a number into text.',code:'age_text = "12"\nage = int(age_text)\nprint(age + 1)',question:'What does int("50") produce?',answers:['The text "50"','The number 50','An error every time'],correct:1,video:'Casting with user input'},
    {chapter:'2 · Core Basics',title:'Booleans',desc:'Use True and False.',icon:'✅',explain:'A Boolean is either True or False. Apps use Booleans for states like online/offline, completed/not completed and enabled/disabled.',code:'lesson_done = True\nprint(lesson_done)',question:'How many possible Boolean values are there?',answers:['2','10','Unlimited'],correct:0,video:'Booleans with real app examples'},
    {chapter:'2 · Core Basics',title:'Operators',desc:'Calculate and compare values.',icon:'➕',explain:'Operators include arithmetic like + and *, comparisons like == and >, and logical operators such as and, or and not.',code:'xp = 120\nprint(xp >= 100)',question:'Which operator checks whether two values are equal?',answers:['=','==','+='],correct:1,video:'Operators explained visually'},
    {chapter:'3 · Collections',title:'Lists',desc:'Keep several items in order.',icon:'📚',explain:'A list stores many values. Python starts list positions at 0. Lists can grow, shrink and change.',code:'friends = ["Mina", "Jay", "Noah"]\nfriends.append("Ava")\nprint(friends[0])',question:'What is the index of the first list item?',answers:['0','1','- always 2'],correct:0,video:'Lists and indexes'},
    {chapter:'3 · Collections',title:'Tuples',desc:'Ordered values that usually stay fixed.',icon:'🧱',explain:'A tuple is similar to a list but cannot be changed in the same way. It is useful for values that should stay fixed.',code:'spawn_point = (10, 20)\nprint(spawn_point[0])',question:'Which brackets normally create a tuple?',answers:['()','[]','{}'],correct:0,video:'Tuple vs list'},
    {chapter:'3 · Collections',title:'Sets',desc:'Store unique values.',icon:'🎯',explain:'A set keeps unique values. If the same item is added twice, the set still keeps only one copy.',code:'skills = {"Python", "HTML", "Python"}\nprint(skills)',question:'What is special about sets?',answers:['They keep duplicate items forever','They keep unique items','They only store numbers'],correct:1,video:'Sets with a simple example'},
    {chapter:'3 · Collections',title:'Dictionaries',desc:'Store key-value information.',icon:'🗂️',explain:'A dictionary connects a key to a value. A profile can use keys such as username, xp and online.',code:'user = {"name":"Mina", "xp":120}\nprint(user["name"])',question:'A dictionary stores information mainly as…',answers:['Key-value pairs','Only numbers','Only loops'],correct:0,video:'Dictionaries as profiles'},
    {chapter:'4 · Decisions',title:'If, Elif and Else',desc:'Make decisions in your program.',icon:'🔀',explain:'if checks a condition. elif checks another possibility. else handles everything left over.',code:'score = 80\nif score >= 70:\n    print("Great job")\nelse:\n    print("Keep going")',question:'Which block runs when an if condition is False and there is no matching elif?',answers:['else','while','import'],correct:0,video:'If statements with a game'},
    {chapter:'4 · Decisions',title:'Match',desc:'Choose from several clear cases.',icon:'🧭',explain:'match compares one value with different cases. It can be convenient for menus and choices.',code:'choice = "play"\nmatch choice:\n    case "play": print("Starting")\n    case _: print("Unknown")',question:'Which keyword belongs inside a match statement?',answers:['case','loop','then'],correct:0,video:'Match-case basics'},
    {chapter:'5 · Loops',title:'While Loops',desc:'Repeat while a condition stays true.',icon:'🔁',explain:'A while loop repeats while its condition is True. Something should usually change so the loop can eventually stop.',code:'count = 1\nwhile count <= 3:\n    print(count)\n    count += 1',question:'A while loop repeats while its condition is…',answers:['True','A string','Always False'],correct:0,video:'While loops without infinite loops'},
    {chapter:'5 · Loops',title:'For Loops',desc:'Repeat for each item.',icon:'♻️',explain:'A for loop is useful when you want to do something for each item in a list, string, range or other iterable.',code:'names = ["Mina", "Jay", "Noah"]\nfor name in names:\n    print(name)',question:'Which loop is especially convenient for going through a list?',answers:['for','try','import'],correct:0,video:'For loops with lists'},
    {chapter:'5 · Loops',title:'Range',desc:'Create number sequences for loops.',icon:'📏',explain:'range() produces a sequence of numbers. range(1, 5) gives 1, 2, 3 and 4. The end value is not included.',code:'for number in range(1, 5):\n    print(number)',question:'What is the last number produced by range(1, 5)?',answers:['4','5','6'],correct:0,video:'Understanding range()'},
    {chapter:'6 · Reusable Code',title:'Functions',desc:'Write code once and reuse it.',icon:'🧰',explain:'A function groups code under a name. Parameters provide information to the function and return can send a result back.',code:'def greet(name):\n    return f"Hello {name}!"\n\nprint(greet("Mina"))',question:'Which keyword creates a function?',answers:['def','function','make'],correct:0,video:'Functions step by step'},
    {chapter:'6 · Reusable Code',title:'Modules',desc:'Use code that already exists.',icon:'🧪',explain:'A module contains reusable code. import lets you bring a module into your program, such as random, math or datetime.',code:'import random\nprint(random.randint(1, 6))',question:'Which keyword loads a module?',answers:['import','open','module'],correct:0,video:'Modules and random'},
    {chapter:'6 · Reusable Code',title:'Dates',desc:'Work with dates and time.',icon:'📅',explain:'The datetime module provides tools for dates and times. Apps can use these for timestamps, streaks and activity information.',code:'from datetime import datetime\nprint(datetime.now())',question:'Which built-in module is commonly used for dates and times?',answers:['datetime','calendar_only','clockwork'],correct:0,video:'datetime for beginners'},
    {chapter:'6 · Reusable Code',title:'Math',desc:'Use extra mathematical tools.',icon:'📐',explain:'The math module contains square roots, constants and other math functions.',code:'import math\nprint(math.sqrt(81))',question:'What does math.sqrt(81) return?',answers:['9','81','162'],correct:0,video:'The math module'},
    {chapter:'7 · Real Programs',title:'JSON',desc:'Move structured data between programs.',icon:'🧾',explain:'JSON is a common text format for structured data. APIs often return JSON, and Python can turn it into dictionaries and lists.',code:'import json\ndata = \'{"name":"Mina","xp":100}\'\nuser = json.loads(data)\nprint(user["xp"])',question:'JSON is commonly used for…',answers:['Structured data','Drawing only','Changing screen brightness'],correct:0,video:'JSON with a pretend API'},
    {chapter:'7 · Real Programs',title:'Regex',desc:'Find patterns in text.',icon:'🔎',explain:'Regular expressions describe text patterns. They are powerful, so PYN introduces only the basics at first.',code:'import re\ntext = "Level 12"\nprint(re.findall(r"\\d+", text))',question:'Regex is mainly used to work with…',answers:['Text patterns','3D models','Computer batteries'],correct:0,video:'Regex without the scary bits'},
    {chapter:'7 · Real Programs',title:'PIP',desc:'Install extra Python packages.',icon:'📦',explain:'pip installs packages created by Python developers. A project can use these packages for extra abilities.',code:'pip install requests',question:'What does pip mainly do?',answers:['Installs Python packages','Runs every loop','Creates usernames'],correct:0,video:'What pip actually does'},
    {chapter:'7 · Real Programs',title:'Try and Except',desc:'Handle errors without crashing.',icon:'🛟',explain:'Code inside try may fail. except lets your program respond to that error instead of stopping suddenly.',code:'try:\n    age = int(input("Age: "))\nexcept ValueError:\n    print("Please enter a number")',question:'Which keyword handles an error after try?',answers:['except','error','catching'],correct:0,video:'Try/except with input'},
    {chapter:'7 · Real Programs',title:'String Formatting',desc:'Put values inside readable text.',icon:'✍️',explain:'f-strings let you place variables inside text using curly brackets.',code:'name = "Mina"\nxp = 90\nprint(f"{name} has {xp} XP")',question:'Which prefix creates an f-string?',answers:['f','s','@'],correct:0,video:'F-strings in one minute'},
    {chapter:'7 · Real Programs',title:'None',desc:'Represent “no value yet.”',icon:'◻️',explain:'None means no value is currently present. It is different from 0, False and an empty string.',code:'profile_picture = None\nprint(profile_picture)',question:'What does None usually represent?',answers:['No value','The number zero only','Always True'],correct:0,video:'None vs empty values'},
    {chapter:'7 · Real Programs',title:'Virtual Environments',desc:'Give each project its own package space.',icon:'🧳',explain:'A virtual environment separates one project\'s Python packages from another project. It helps keep projects organized.',code:'python -m venv .venv',question:'Why use a virtual environment?',answers:['To isolate project packages','To change your avatar','To create a loop'],correct:0,video:'Virtual environments simply explained'},
    {chapter:'8 · Debugging',title:'Errors and Debugging',desc:'Use error messages as clues.',icon:'🐞',explain:'Errors are not a sign that you cannot code. Read the error type and the line Python points to, then test one small fix at a time.',code:'name = "Mina"\nprint(name)',question:'What is a good first step after an error?',answers:['Read the error message','Delete the whole project','Guess randomly'],correct:0,video:'How to read Python errors'}
  ];

  const THEME_COLORS = ['#111111','#2f6fed','#7c3aed','#e11d48','#ea580c','#059669','#0891b2','#ca8a04'];
  const SKINS = ['#f6d7b0','#e9b985','#d99a62','#bd7b46','#945b35','#643b26'];
  const HAIRS = ['#1d1715','#43291f','#70452f','#d19b36','#cf4e76','#6a49a6','#2d815e','#2b6cb0','#c2410c'];
  const SHIRTS = ['#e34d64','#367ed5','#ff9f2e','#7a55d7','#2ea36f','#f0c33c','#f5f6f7','#232527','#06b6d4','#ec4899'];
  const PANTS = ['#2a2d30','#3d4b65','#6a4d37','#1d416d','#4f5055'];
  const HATS = {none:'None', cap:'Coder Cap', crown:'Bug Hunter Crown', beanie:'Python Beanie', headset:'Code Headset', visor:'Pixel Visor'};
  const GLASSES = {none:'None', round:'Round Glasses', hacker:'Hacker Glasses', square:'Square Frames', shades:'Dark Shades'};
  const HAIR_STYLES = {short:'Short', long:'Long', wavy:'Wavy', pony:'Ponytail', puff:'Puff', spikes:'Spikes'};
  const defaultAvatar = {skin:2,hair:0,shirt:1,pants:0,hairStyle:'short',hat:'none',glasses:'none'};

  const projects = [
    {id:'dice',title:'Dice Roller',icon:'🎲',level:'Beginner',time:'15 min',color:'linear-gradient(135deg,#60a5fa,#2563eb)',desc:'Roll a virtual six-sided die.',concepts:['Variables','Modules'],steps:['Import random.','Generate a number from 1 to 6.','Store the roll in a variable.','Print a friendly result.'],code:`import random

roll = random.randint(1, 6)
print(f"You rolled a {roll}!")`,check:{q:'Which function creates the random die number?',a:['random.randint(1, 6)','print(1, 6)','input(6)'],c:0}},
    {id:'calculator',title:'Calculator',icon:'🧮',level:'Beginner',time:'25 min',color:'linear-gradient(135deg,#fb923c,#ea580c)',desc:'Build a calculator that reads numbers and an operation.',concepts:['Input and Output','Casting','Operators','If, Elif and Else'],steps:['Ask for two numbers.','Convert input into numbers.','Ask which operation to use.','Use if/elif to calculate the answer.'],code:`first = float(input("First number: "))
operator = input("Choose +, -, * or /: ")
second = float(input("Second number: "))

if operator == "+":
    print(first + second)
elif operator == "-":
    print(first - second)
elif operator == "*":
    print(first * second)
elif operator == "/":
    print(first / second)
else:
    print("Unknown operator")`,check:{q:'Why do we use float() around input?',a:['To turn typed text into a number','To print the answer','To create a loop'],c:0}},
    {id:'quiz',title:'Quiz Game',icon:'❓',level:'Beginner',time:'35 min',color:'linear-gradient(135deg,#a78bfa,#7c3aed)',desc:'Ask questions and keep score.',concepts:['Variables','Strings','Input and Output','If, Elif and Else'],steps:['Create a score variable.','Ask the first question.','Compare the answer.','Add a point when correct.','Show the final score.'],code:`score = 0
answer = input("What language are you learning? ").lower()

if answer == "python":
    score += 1
    print("Correct!")
else:
    print("Try again next time.")

print(f"Score: {score}")`,check:{q:'What should hold the player’s points?',a:['A variable such as score','A comment','A module name'],c:0}},
    {id:'password',title:'Password Generator',icon:'🔐',level:'Beginner',time:'30 min',color:'linear-gradient(135deg,#34d399,#059669)',desc:'Generate a random password.',concepts:['Strings','For Loops','Modules'],steps:['Create allowed characters.','Choose random characters.','Repeat for the password length.','Join and print the result.'],code:`import random
import string

characters = string.ascii_letters + string.digits
password = ""

for _ in range(10):
    password += random.choice(characters)

print(password)`,check:{q:'What does the for loop do here?',a:['Repeats the random choice','Installs Python','Deletes the password'],c:0}},
    {id:'rps',title:'Rock Paper Scissors',icon:'✊',level:'Beginner',time:'35 min',color:'linear-gradient(135deg,#f87171,#dc2626)',desc:'Play against the computer.',concepts:['Input and Output','Modules','If, Elif and Else'],steps:['Ask for the player choice.','Let random choose for the computer.','Compare the choices.','Print win, lose or draw.'],code:`import random

choices = ["rock", "paper", "scissors"]
player = input("rock, paper or scissors? ").lower()
computer = random.choice(choices)

print(f"Computer chose {computer}")

if player == computer:
    print("Draw!")
elif (player == "rock" and computer == "scissors") or \\
     (player == "paper" and computer == "rock") or \\
     (player == "scissors" and computer == "paper"):
    print("You win!")
else:
    print("Computer wins!")`,check:{q:'Where does the computer’s choice come from?',a:['random.choice(choices)','input()','print()'],c:0}},
    {id:'guess',title:'Number Guessing Game',icon:'🎯',level:'Beginner',time:'30 min',color:'linear-gradient(135deg,#facc15,#ca8a04)',desc:'Guess a secret number.',concepts:['Variables','While Loops','Casting','If, Elif and Else'],steps:['Choose a secret number.','Ask for a guess.','Compare high/low/correct.','Repeat until correct.'],code:`import random

secret = random.randint(1, 20)
guess = None

while guess != secret:
    guess = int(input("Guess 1 to 20: "))
    if guess < secret:
        print("Too low")
    elif guess > secret:
        print("Too high")
    else:
        print("You got it!")`,check:{q:'Why is a while loop useful here?',a:['The player may need several guesses','It changes the font','It imports random'],c:0}},
    {id:'timer',title:'Countdown Timer',icon:'⏱️',level:'Intermediate',time:'45 min',color:'linear-gradient(135deg,#22d3ee,#0891b2)',desc:'Count down to zero.',concepts:['While Loops','Modules','Functions'],steps:['Create a timer function.','Repeat while seconds remain.','Pause one second each time.','Show a finished message.'],code:`import time

def countdown(seconds):
    while seconds > 0:
        print(seconds)
        time.sleep(1)
        seconds -= 1
    print("Time's up!")

countdown(5)`,check:{q:'What pauses the program for one second?',a:['time.sleep(1)','seconds -= 1','print(seconds)'],c:0}},
    {id:'tictactoe',title:'Tic-Tac-Toe',icon:'⭕',level:'Intermediate',time:'2 hr',color:'linear-gradient(135deg,#c084fc,#9333ea)',desc:'Build a simple two-player board game.',concepts:['Lists','Functions','If, Elif and Else','For Loops'],steps:['Represent the board with a list.','Display the board.','Write a function for turns.','Check winning combinations.'],code:`board = [" "] * 9

def show_board():
    print(board[0], "|", board[1], "|", board[2])
    print("---------")
    print(board[3], "|", board[4], "|", board[5])
    print("---------")
    print(board[6], "|", board[7], "|", board[8])

show_board()`,check:{q:'What stores the nine board spaces?',a:['A list','A Boolean','A comment'],c:0}},
    {id:'chatbot',title:'Mini Chatbot',icon:'💬',level:'Intermediate',time:'90 min',color:'linear-gradient(135deg,#818cf8,#4f46e5)',desc:'Create a rule-based chatbot.',concepts:['Input and Output','Functions','Match','Strings'],steps:['Read a message.','Normalize the text.','Match common messages.','Return a response.'],code:`def reply(message):
    message = message.lower()
    match message:
        case "hello" | "hi":
            return "Hello!"
        case "bye":
            return "See you later!"
        case _:
            return "I don't know that yet."

print(reply(input("You: ")))`,check:{q:'What does case _ handle?',a:['Anything not matched earlier','Only hello','A syntax comment'],c:0}},
    {id:'todo',title:'To-Do App',icon:'📝',level:'Intermediate',time:'2 hr',color:'linear-gradient(135deg,#4ade80,#16a34a)',desc:'Add and remove tasks.',concepts:['Lists','Functions','While Loops'],steps:['Create a task list.','Build add and remove functions.','Show a menu in a loop.','Let users quit cleanly.'],code:`tasks = []

def add_task(task):
    tasks.append(task)

while True:
    command = input("add, show or quit: ").lower()
    if command == "add":
        add_task(input("Task: "))
    elif command == "show":
        for task in tasks:
            print("-", task)
    elif command == "quit":
        break`,check:{q:'Which structure stores the tasks?',a:['A list','A float','A regex'],c:0}},
    {id:'weather',title:'Weather App',icon:'🌤️',level:'Intermediate',time:'2 hr',color:'linear-gradient(135deg,#38bdf8,#0284c7)',desc:'Learn how apps read API data.',concepts:['JSON','PIP','Try and Except'],steps:['Install requests.','Request API data.','Read JSON fields.','Handle connection errors.'],code:`# In VS Code terminal first: pip install requests
import requests

url = "https://api.example.com/weather"

try:
    response = requests.get(url, timeout=10)
    data = response.json()
    print(data)
except requests.RequestException:
    print("Could not reach the weather service")`,check:{q:'Why is try/except useful in this project?',a:['A network request can fail','It creates the API','It colors the output'],c:0}},
    {id:'dashboard',title:'Data Dashboard',icon:'📊',level:'Advanced',time:'4 hr',color:'linear-gradient(135deg,#64748b,#334155)',desc:'Turn data into useful information.',concepts:['PIP','Lists','Dictionaries','Functions'],steps:['Load data.','Clean important values.','Calculate summaries.','Display results clearly.'],code:`sales = [
    {"item": "A", "amount": 120},
    {"item": "B", "amount": 80},
    {"item": "C", "amount": 150}
]

def total_sales(rows):
    return sum(row["amount"] for row in rows)

print("Total:", total_sales(sales))`,check:{q:'What does total_sales() return?',a:['The sum of all amount values','A random number','The first dictionary only'],c:0}}
  ];

  const starterVideos = [
    {id:'pyn-v1',title:'Variables without the confusing words',teacher:'PYN Learning Team',lesson:'Variables',duration:'3:12',type:'PYN mini lesson'},
    {id:'pyn-v2',title:'Why lists start at zero',teacher:'PYN Learning Team',lesson:'Lists',duration:'1:44',type:'PYN mini lesson'},
    {id:'pyn-v3',title:'If statements using a game score',teacher:'PYN Learning Team',lesson:'If, Elif and Else',duration:'4:01',type:'PYN mini lesson'}
  ];

  // Real member data will come from the production backend. No fake users are shown in this prototype.
  const people = [];
  const feed = [];

  const rewardTrack = [
    {type:'shirt',value:2,label:'Orange coder tee',icon:'👕'},
    {type:'hair',value:4,label:'Berry hair color',icon:'🎨'},
    {type:'hat',value:'cap',label:'Coder Cap',icon:'🧢'},
    {type:'glasses',value:'square',label:'Square Frames',icon:'👓'},
    {type:'hairStyle',value:'long',label:'Long hair',icon:'💇'},
    {type:'shirt',value:3,label:'Purple coder tee',icon:'👕'},
    {type:'hat',value:'headset',label:'Code Headset',icon:'🎧'},
    {type:'hair',value:5,label:'Violet hair color',icon:'🎨'},
    {type:'glasses',value:'round',label:'Round Glasses',icon:'👓'},
    {type:'hairStyle',value:'puff',label:'Puff hairstyle',icon:'💇'},
    {type:'shirt',value:4,label:'Green coder tee',icon:'👕'},
    {type:'hat',value:'beanie',label:'Python Beanie',icon:'🧶'},
    {type:'glasses',value:'hacker',label:'Hacker Glasses',icon:'🕶️'},
    {type:'hairStyle',value:'spikes',label:'Spikes hairstyle',icon:'💇'},
    {type:'shirt',value:8,label:'Cyan coder tee',icon:'👕'},
    {type:'hat',value:'visor',label:'Pixel Visor',icon:'🧢'},
    {type:'glasses',value:'shades',label:'Dark Shades',icon:'🕶️'},
    {type:'hat',value:'crown',label:'Bug Hunter Crown',icon:'👑'}
  ];

  const defaultState = {
    username:'Coder', age:13, xp:0, streak:1, completedLessons:[], completedProjects:[],
    friends:[], sentRequests:[], incomingRequests:[], communityVideos:[], userProjects:[],
    avatar:{...defaultAvatar}, themeColor:'#2f6fed',
    unlocked:['shirt:0','shirt:1','hair:0','hair:1','hair:2','hair:3','hairStyle:short','hairStyle:wavy','hat:none','glasses:none'],
    unlockHistory:[]
  };

  const store = {
    get(){
      try {
        const parsed = JSON.parse(localStorage.getItem('pynV3State') || 'null');
        if (!parsed) return clone(defaultState);
        return {...clone(defaultState), ...parsed, avatar:{...defaultAvatar,...(parsed.avatar||{})}};
      } catch(e){ return clone(defaultState); }
    },
    save(){ try{ localStorage.setItem('pynV3State', JSON.stringify(state)); }catch(e){} },
    started(){ try{return localStorage.getItem('pynV3Started')==='1'}catch(e){return false} },
    setStarted(v){ try{ if(v)localStorage.setItem('pynV3Started','1'); else localStorage.removeItem('pynV3Started'); }catch(e){} }
  };
  function clone(o){ return JSON.parse(JSON.stringify(o)); }
  let state = store.get();
  let communityTab='feed';
  let avatarTab='skin';

  function ageBand(age){ age=Number(age); if(age<=12)return '9–12'; if(age<=15)return '13–15'; if(age<=17)return '16–17'; if(age<=20)return '18–20'; return '21+'; }
  function sameBand(a,b){ return ageBand(a)===ageBand(b); }
  function esc(str=''){return String(str).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
  function allProjects(){ return [...projects,...state.userProjects]; }
  function applyTheme(){ document.documentElement.style.setProperty('--accent',state.themeColor||'#2f6fed'); }

  function avatarHTML(cfg, stageClass='person-stage', online=null){
    cfg={...defaultAvatar,...cfg};
    const longHair=['long','pony','puff'].includes(cfg.hairStyle)?'long':'';
    const hatColor=cfg.hat==='crown'?'#f2c94c':cfg.hat==='beanie'?'#7b5dd6':cfg.hat==='headset'?'#111827':cfg.hat==='visor'?'#00b8d9':'#2f6fed';
    return `<div class="avatar-stage ${stageClass}"><div class="block-avatar" style="--skin:${SKINS[cfg.skin]||SKINS[2]};--hair:${HAIRS[cfg.hair]||HAIRS[0]};--shirt:${SHIRTS[cfg.shirt]||SHIRTS[1]};--pants:${PANTS[cfg.pants]||PANTS[0]};--hat:${hatColor}">
      <div class="av-hair ${longHair}"></div><div class="av-head"></div><div class="av-eye left"></div><div class="av-eye right"></div><div class="av-smile"></div>
      <div class="av-neck"></div><div class="av-body"></div><div class="av-arm left"></div><div class="av-arm right"></div><div class="av-leg left"></div><div class="av-leg right"></div><div class="av-shoe left"></div><div class="av-shoe right"></div>
      <div class="av-hat ${cfg.hat==='none'?'none':''}"></div><div class="av-glasses ${cfg.glasses==='none'?'none':''}"></div>${online===null?'':`<span class="presence-bubble ${online?'online':''}"></span>`}
    </div></div>`;
  }

  function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.remove('hidden');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.add('hidden'),2200);}
  function openModal(html){$('#modal-content').innerHTML=html;$('#modal').classList.remove('hidden');}
  function closeModal(){$('#modal').classList.add('hidden');}
  function isUnlocked(type,value){return state.unlocked.includes(`${type}:${value}`);}

  function renderAll(){applyTheme();renderHeader();renderHome();renderLessons();renderProjects();renderCommunity();renderProfile();}
  function renderHeader(){ $('#xp-count').textContent=state.xp; $('#streak-count').textContent=state.streak; $('#header-avatar').innerHTML=avatarHTML(state.avatar,'small-stage',true); }

  function projectCard(p,i){
    const done=state.completedProjects.includes(p.id);
    return `<article class="project-card" data-project="${i}"><div class="project-thumb" style="background:${p.color||'linear-gradient(135deg,#334155,#111827)'}"><span>${p.icon||'💻'}</span>${done?'<b class="completed-badge">✓ BUILT</b>':''}</div><div class="project-info"><div class="project-meta"><span class="difficulty">${esc(p.level||'Custom')}</span><span>•</span><span>${esc(p.time||'Your pace')}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.desc||'Your Python project')}</p><div class="project-meta"><span>${p.userMade?'MY PROJECT':esc((p.concepts||[]).slice(0,2).join(' · '))}</span></div></div></article>`;
  }

  function renderHome(){
    $('#welcome-title').textContent=`Hi ${state.username}`;
    $('#featured-projects').innerHTML=allProjects().slice(0,6).map((p,i)=>projectCard(p,i)).join('');
    const next=lessons.findIndex((_,i)=>!state.completedLessons.includes(i));
    const indices=[next<0?0:next,...lessons.map((_,i)=>i).filter(i=>i!==next&&!state.completedLessons.includes(i)).slice(0,3)];
    $('#learning-row').innerHTML=indices.slice(0,4).map(i=>{const l=lessons[i],done=state.completedLessons.includes(i);return `<article class="learning-card" data-lesson="${i}"><div class="learning-art"><span class="unit-number">${i+1}</span></div><div class="learning-body"><span>PYN Fundamentals</span><h3>${esc(l.title)}</h3><span>${done?'Completed':'Open lesson'}</span><div class="tiny-progress"><div style="width:${done?100:20}%"></div></div></div></article>`;}).join('');
    $('#people-row').innerHTML=people.length?people.map(p=>`<div class="person-chip" data-person="${p.id}">${avatarHTML(p.avatar,'person-stage',p.active)}<strong>${esc(p.name)}</strong></div>`).join(''):'<div class="real-people-empty"><b>No real members to show yet.</b><span>When PYN has connected user accounts, real learners will appear here.</span></div>';
    $('#video-row').innerHTML=currentVideos().slice(0,5).map(videoCard).join('');
    bindDynamic();
  }

  function renderProjects(filter='all'){
    const all=allProjects(); const list=filter==='all'?all:all.filter(p=>p.level===filter);
    $('#project-grid').innerHTML=list.map(p=>projectCard(p,all.indexOf(p))).join(''); bindDynamic();
  }

  function renderLessons(){
    const grouped={}; lessons.forEach((l,i)=>{(grouped[l.chapter]??=[]).push({l,i});});
    let unit=0;
    $('#chapters').innerHTML=Object.entries(grouped).map(([chapter,items])=>{unit++;const done=items.filter(x=>state.completedLessons.includes(x.i)).length;const clean=chapter.replace(/^\d+\s*·\s*/,'');return `<section class="unit-card"><div class="unit-banner"><div><span>UNIT ${unit}</span><h2>${esc(clean)}</h2></div><b>${done}/${items.length}</b></div><div class="lesson-path">${items.map(({l,i},n)=>{const complete=state.completedLessons.includes(i);return `<button class="path-node ${complete?'done':''}" data-lesson="${i}"><span>${complete?'✓':i+1}</span><div><b>${esc(l.title)}</b><small>${esc(l.desc)}</small></div><em>${complete?'Passed':'Start'}</em></button>`;}).join('')}</div></section>`;}).join('');
    $('#course-percent').textContent=Math.round(state.completedLessons.length/lessons.length*100)+'%'; bindDynamic();
  }

  function currentVideos(){return [...starterVideos,...state.communityVideos];}
  function videoCard(v){return `<article class="video-card" data-video="${esc(v.id)}"><div class="video-thumb"><span class="play-circle">▶</span><span class="video-duration">${esc(v.duration||'2:30')}</span></div><div class="video-info"><h3>${esc(v.title)}</h3><p>${esc(v.lesson||'Python')} · ${esc(v.type||'Video')}</p><div class="teacher-line"><span>●</span><b>${esc(v.teacher||'PYN')}</b></div></div></article>`;}

  function renderCommunity(){
    $('#age-band-label').textContent=ageBand(state.age); $('#request-badge').textContent=state.incomingRequests.length||'';
    $('#online-list').innerHTML='<p>No real users are connected in this local prototype yet.</p>'; renderCommunityTab();
  }
  function renderCommunityTab(){
    $$('.subtab').forEach(b=>b.classList.toggle('active',b.dataset.community===communityTab)); const box=$('#community-content');
    if(communityTab==='feed') box.innerHTML='<div class="empty-state"><b>No fake activity.</b><br>Real member activity will appear here after PYN is connected to its production database.</div>';
    else if(communityTab==='videos') box.innerHTML=currentVideos().length?currentVideos().map(v=>`<article class="community-video">${videoCard(v)}</article>`).join(''):'<div class="empty-state">No teaching videos yet.</div>';
    else box.innerHTML='<div class="empty-state">No real friend requests yet.</div>';
    bindDynamic();
  }

  function renderProfile(){
    const temp=document.createElement('div');temp.innerHTML=avatarHTML(state.avatar,'large-stage',true);const block=temp.querySelector('.block-avatar');$('#profile-avatar-stage').innerHTML=block?block.outerHTML:'';
    $('#profile-name').textContent=state.username; $('#profile-band').textContent=`${ageBand(state.age)} learning group`; $('#profile-level').textContent=Math.floor(state.xp/100)+1; $('#profile-xp').textContent=state.xp; $('#profile-lessons').textContent=state.completedLessons.length; $('#profile-projects').textContent=state.completedProjects.length; $('#display-name-input').value=state.username;
    $('#customizer').innerHTML=customizerHTML();
    $('#unlock-list').innerHTML=state.unlockHistory.length?state.unlockHistory.slice(-8).reverse().map(r=>`<div class="unlock-item"><span class="unlock-symbol">${r.icon}</span><div><b>${esc(r.label)}</b><span>PYN Accessory</span></div></div>`).join(''):'<p class="muted" style="font-size:11px">Pass tiny exams and project checks to unlock PYN Accessories.</p>';
    bindCustomizer();
  }

  function customizerHTML(){
    const tabs=[['skin','Skin'],['hair','Hair'],['outfit','Outfit'],['hats','Hats'],['glasses','Glasses'],['theme','PYN colour']];
    let panel='';
    if(avatarTab==='skin') panel=`<div class="creator-grid swatches">${SKINS.map((c,i)=>`<button class="creator-tile ${state.avatar.skin===i?'selected':''}" style="--tile:${c}" data-custom="skin" data-value="${i}"><span style="background:${c}"></span><b>Skin ${i+1}</b></button>`).join('')}</div>`;
    if(avatarTab==='hair') panel=`<h4>Hair style</h4><div class="creator-grid">${Object.entries(HAIR_STYLES).map(([v,label])=>{const locked=!isUnlocked('hairStyle',v);return `<button class="creator-tile ${state.avatar.hairStyle===v?'selected':''}" data-custom="hairStyle" data-value="${v}" ${locked?'disabled':''}><span>💇</span><b>${label}</b>${locked?'<small>🔒 Unlock</small>':''}</button>`}).join('')}</div><h4>Hair colour</h4><div class="creator-grid swatches">${HAIRS.map((c,i)=>{const locked=i>3&&!isUnlocked('hair',i);return `<button class="creator-tile ${state.avatar.hair===i?'selected':''}" data-custom="hair" data-value="${i}" ${locked?'disabled':''}><span style="background:${c}"></span><b>${locked?'Locked':'Colour '+(i+1)}</b></button>`}).join('')}</div>`;
    if(avatarTab==='outfit') panel=`<div class="creator-grid swatches">${SHIRTS.map((c,i)=>{const locked=i>1&&!isUnlocked('shirt',i);return `<button class="creator-tile ${state.avatar.shirt===i?'selected':''}" data-custom="shirt" data-value="${i}" ${locked?'disabled':''}><span style="background:${c}"></span><b>${locked?'🔒 Locked':'Outfit '+(i+1)}</b></button>`}).join('')}</div>`;
    if(avatarTab==='hats') panel=`<div class="creator-grid">${Object.entries(HATS).map(([v,label])=>{const locked=!isUnlocked('hat',v);return `<button class="creator-tile ${state.avatar.hat===v?'selected':''}" data-custom="hat" data-value="${v}" ${locked?'disabled':''}><span>${v==='crown'?'👑':v==='headset'?'🎧':v==='beanie'?'🧶':v==='visor'?'🕶️':v==='cap'?'🧢':'◯'}</span><b>${label}</b>${locked?'<small>🔒 Unlock</small>':''}</button>`}).join('')}</div>`;
    if(avatarTab==='glasses') panel=`<div class="creator-grid">${Object.entries(GLASSES).map(([v,label])=>{const locked=!isUnlocked('glasses',v);return `<button class="creator-tile ${state.avatar.glasses===v?'selected':''}" data-custom="glasses" data-value="${v}" ${locked?'disabled':''}><span>👓</span><b>${label}</b>${locked?'<small>🔒 Unlock</small>':''}</button>`}).join('')}</div>`;
    if(avatarTab==='theme') panel=`<p class="creator-help">Pick the colour you want PYN to use for buttons, progress and highlights.</p><div class="theme-grid">${THEME_COLORS.map(c=>`<button class="theme-pick ${state.themeColor===c?'selected':''}" style="background:${c}" data-theme="${c}" aria-label="Choose ${c}"></button>`).join('')}</div>`;
    return `<div class="avatar-creator"><div class="creator-tabs">${tabs.map(([id,label])=>`<button class="${avatarTab===id?'active':''}" data-avatar-tab="${id}">${label}</button>`).join('')}</div><div class="creator-panel">${panel}</div></div>`;
  }

  function bindCustomizer(){
    $$('[data-avatar-tab]').forEach(b=>b.onclick=()=>{avatarTab=b.dataset.avatarTab;renderProfile();});
    $$('[data-custom]').forEach(b=>b.onclick=()=>{if(b.disabled)return;const type=b.dataset.custom,raw=b.dataset.value;state.avatar[type]=['skin','hair','shirt','pants'].includes(type)?Number(raw):raw;store.save();renderProfile();renderHeader();});
    $$('[data-theme]').forEach(b=>b.onclick=()=>{state.themeColor=b.dataset.theme;store.save();applyTheme();renderProfile();toast('PYN colour changed');});
  }

  function openLesson(i){
    const l=lessons[i],done=state.completedLessons.includes(i);
    openModal(`<span class="kicker">PYN FUNDAMENTALS · LESSON ${i+1}</span><h1>${esc(l.title)}</h1><p>${esc(l.explain)}</p><h2>See it in Python</h2><pre class="modal-code">${esc(l.code)}</pre><div class="practice-bar"><div><b>Use VS Code to practice!</b><span>Copy the example, change it, and run it yourself.</span></div><a href="https://code.visualstudio.com/download" target="_blank" rel="noopener">Download VS Code ↗</a></div><h2>Watch it explained</h2><div class="lesson-video-box"><div class="video-thumb"><span class="play-circle">▶</span></div><div><b>${esc(l.video)}</b><p>This is the video slot for this lesson. PYN can later use approved PYN-made or creator videos.</p><button class="small-btn" data-video-lesson="${i}">▶ Mini lesson</button></div></div><h2>Tiny exam</h2>${done?'<div class="reward-callout"><span>✅</span><div><b>Lesson passed.</b><span>Your lesson is completed because you passed the tiny exam.</span></div></div>':`<div class="exam-box"><h3>${esc(l.question)}</h3><div class="answer-list">${l.answers.map((a,n)=>`<button class="answer-option" data-answer="${n}">${esc(a)}</button>`).join('')}</div><p id="exam-result" class="exam-result">Pass this question to complete the lesson.</p></div>`}`);
    if(!done) $$('[data-answer]').forEach(btn=>btn.onclick=()=>{const result=$('#exam-result');if(Number(btn.dataset.answer)===l.correct){result.textContent='✅ Correct! Lesson completed.';result.className='exam-result correct';completeLesson(i);setTimeout(()=>{closeModal();renderAll();showLessonReward(i);},400);}else{result.textContent='Not quite. Try again.';result.className='exam-result wrong';}});
  }
  function completeLesson(i){if(state.completedLessons.includes(i))return;state.completedLessons.push(i);state.xp+=25;const reward=rewardTrack[i%rewardTrack.length],key=`${reward.type}:${reward.value}`;if(!state.unlocked.includes(key)){state.unlocked.push(key);state.unlockHistory.push(reward);}store.save();}
  function showLessonReward(i){const reward=rewardTrack[i%rewardTrack.length];openModal(`<div class="reward-screen"><div class="reward-big">${reward.icon}</div><span class="kicker">TINY EXAM PASSED</span><h1>Lesson completed!</h1><p>+25 XP and a new <b>PYN Accessory</b>: <b>${esc(reward.label)}</b>.</p><button id="equip-reward" class="primary-btn">Open avatar creator</button></div>`);$('#equip-reward').onclick=()=>{closeModal();go('profile');};}

  function openProject(i){
    const p=allProjects()[i]; if(!p)return; const done=state.completedProjects.includes(p.id);
    const concepts=(p.concepts||[]).map(c=>{const li=lessons.findIndex(l=>l.title===c);const passed=li>=0&&state.completedLessons.includes(li);return `<button class="concept-pill" ${li>=0?`data-lesson="${li}"`:''}>${passed?'✓ ':''}${esc(c)}</button>`;}).join('');
    const check=p.check||{q:'Before marking a project complete, what should you do?',a:['Run and test the Python code','Only read the title','Skip the code'],c:0};
    openModal(`<span class="kicker">${esc((p.level||'CUSTOM').toUpperCase())} PROJECT · ${esc(p.time||'YOUR PACE')}</span><h1>${p.icon||'💻'} ${esc(p.title)}</h1><p>${esc(p.desc||'Your own Python project.')}</p><div class="code-unlocked"><div><b>Reference code · always unlocked</b><span>You can view this code at any level.</span></div><button id="copy-project-code" class="small-btn">Copy code</button></div><pre id="project-code" class="modal-code project-code">${esc(p.code||'# Add your Python code here')}</pre><div class="practice-bar"><div><b>Use VS Code to practice!</b><span>Paste the code into a .py file, run it, then change something.</span></div><a href="https://code.visualstudio.com/download" target="_blank" rel="noopener">Download VS Code ↗</a></div>${concepts?`<h2>Learn only what this project needs</h2><div class="project-concepts">${concepts}</div>`:''}<h2>Build plan</h2><ol class="project-steps">${(p.steps||['Plan what the project should do.','Write the Python code.','Run it in VS Code.','Fix any errors and improve it.']).map(s=>`<li>${esc(s)}</li>`).join('')}</ol><h2>Project check</h2>${done?'<div class="reward-callout"><span>✅</span><div><b>Project completed</b><span>You passed the project check.</span></div></div>':`<div class="exam-box"><h3>${esc(check.q)}</h3><div class="answer-list">${check.a.map((a,n)=>`<button class="project-answer answer-option" data-project-answer="${n}">${esc(a)}</button>`).join('')}</div><p id="project-check-result" class="exam-result">You cannot complete the project until you pass this check.</p></div>`}`);
    $$('[data-lesson]').forEach(b=>b.onclick=()=>openLesson(Number(b.dataset.lesson)));
    const copy=$('#copy-project-code'); if(copy)copy.onclick=async()=>{try{await navigator.clipboard.writeText(p.code||'');toast('Project code copied');}catch(e){toast('Select the code and copy it manually');}};
    if(!done) $$('.project-answer').forEach(b=>b.onclick=()=>{const result=$('#project-check-result');if(Number(b.dataset.projectAnswer)===check.c){result.textContent='✅ Passed. Project completed!';result.className='exam-result correct';completeProject(p);setTimeout(()=>{closeModal();renderAll();toast('Project completed! +60 XP');},500);}else{result.textContent='Not yet. Review the code and try again.';result.className='exam-result wrong';}});
  }
  function completeProject(p){if(state.completedProjects.includes(p.id))return;state.completedProjects.push(p.id);state.xp+=60;const idx=Math.max(0,allProjects().findIndex(x=>x.id===p.id));const reward=rewardTrack[(lessons.length+idx)%rewardTrack.length],key=`${reward.type}:${reward.value}`;if(!state.unlocked.includes(key))state.unlocked.push(key);state.unlockHistory.push(reward);store.save();}

  function openCreateProject(){
    openModal(`<span class="kicker">MY PROJECT</span><h1>Create a Python project</h1><p>Create your own project card and keep your code inside PYN. This local prototype saves it in this browser.</p><div class="video-form"><label>Project name</label><input id="new-project-title" placeholder="e.g. My Study Timer"><label>Description</label><input id="new-project-desc" placeholder="What will it do?"><label>Level</label><select id="new-project-level"><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select><label>Python code</label><textarea id="new-project-code" class="code-textarea" placeholder="# Start coding here\nprint(\"Hello!\")"></textarea><button id="save-project" class="primary-btn wide" style="margin-top:14px">Create project</button></div>`);
    $('#save-project').onclick=()=>{const title=$('#new-project-title').value.trim(),code=$('#new-project-code').value.trim();if(!title){$('#new-project-title').focus();return;}if(code.length<3){toast('Add some Python code first.');return;}state.userProjects.push({id:'mine-'+Date.now(),title,icon:'💻',level:$('#new-project-level').value,time:'Your pace',color:'linear-gradient(135deg,var(--accent),#111827)',desc:$('#new-project-desc').value.trim()||'My own Python project',concepts:[],steps:['Plan what it should do.','Write and run the code.','Fix errors.','Make it your own.'],code,userMade:true});store.save();closeModal();renderAll();go('projects');toast('Project created');};
  }

  function openPerson(id){const p=people.find(x=>x.id===id);if(!p)return;const bandOk=sameBand(state.age,p.age),isFriend=state.friends.includes(id),sent=state.sentRequests.includes(id);openModal(`<div class="friend-profile">${avatarHTML(p.avatar,'large-stage',p.active)}<div><span class="kicker">PYN LEARNER</span><h1>${esc(p.name)}</h1><p>${esc(p.status||'Learner')} · ${ageBand(p.age)} group</p><button id="friend-action" class="primary-btn wide" ${(!bandOk||isFriend||sent)?'disabled':''}>${isFriend?'Friends ✓':sent?'Request sent ✓':bandOk?'Send friend request':'Different age group'}</button></div></div>`);const b=$('#friend-action');if(b&&!b.disabled)b.onclick=()=>{state.sentRequests.push(id);store.save();b.textContent='Request sent ✓';b.disabled=true;toast('Friend request sent');};}
  function openVideo(vId){const v=currentVideos().find(x=>String(x.id)===String(vId));if(!v)return;openModal(`<span class="kicker">${esc(v.type||'VIDEO')}</span><h1>${esc(v.title)}</h1><div class="video-thumb video-large"><span class="play-circle">▶</span><span class="video-duration">${esc(v.duration||'2:30')}</span></div><p><b>Teacher:</b> ${esc(v.teacher||'PYN')}<br><b>Topic:</b> ${esc(v.lesson||'Python')}</p><p>This is a safe placeholder in the MVP. A production version can embed approved learning videos after moderation and rights checks.</p>`);}
  function openVideoForm(){openModal(`<span class="kicker">COMMUNITY TEACHING</span><h1>Share a mini lesson</h1><p>Real user uploads would be reviewed before becoming public.</p><div class="video-form"><label>Video title</label><input id="new-video-title" placeholder="e.g. Lists explained simply"><label>Python topic</label><select id="new-video-topic">${lessons.map(l=>`<option>${esc(l.title)}</option>`).join('')}</select><label>Video link</label><input id="new-video-link" placeholder="YouTube or approved video link"><label>What will you explain?</label><textarea id="new-video-desc" placeholder="Describe the mini lesson..."></textarea><button id="submit-video" class="primary-btn wide" style="margin-top:14px">Submit for review</button></div>`);$('#submit-video').onclick=()=>{const title=$('#new-video-title').value.trim();if(!title){$('#new-video-title').focus();return;}state.communityVideos.push({id:'user-'+Date.now(),title,teacher:state.username,lesson:$('#new-video-topic').value,duration:'Video',type:'Pending community submission',url:$('#new-video-link').value.trim()});store.save();closeModal();communityTab='videos';renderCommunity();renderHome();toast('Submitted to the prototype review queue');};}

  function bindDynamic(){
    $$('[data-project]').forEach(el=>el.onclick=()=>openProject(Number(el.dataset.project)));
    $$('[data-lesson]').forEach(el=>el.onclick=()=>openLesson(Number(el.dataset.lesson)));
    $$('[data-person]').forEach(el=>el.onclick=()=>openPerson(el.dataset.person));
    $$('[data-video]').forEach(el=>el.onclick=()=>openVideo(el.dataset.video));
  }
  function go(page){$$('.page').forEach(p=>p.classList.toggle('active-page',p.id===page));$$('[data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===page));window.scrollTo({top:0,behavior:'smooth'});if(page==='profile')renderProfile();if(page==='community')renderCommunity();}

  function setupEvents(){
    $$('[data-page]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.page)));
    $$('.filter').forEach(b=>b.addEventListener('click',()=>{$$('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProjects(b.dataset.filter);}));
    $$('.subtab').forEach(b=>b.addEventListener('click',()=>{communityTab=b.dataset.community;renderCommunityTab();}));
    $('#modal-close').onclick=closeModal; $('#modal').onclick=e=>{if(e.target.id==='modal')closeModal();};
    $('#upload-video-btn').onclick=openVideoForm; $('#create-project-btn').onclick=openCreateProject;
    $('#save-profile-btn').onclick=()=>{const n=$('#display-name-input').value.trim();if(n)state.username=n;store.save();renderAll();toast('Profile saved');};
    $('#signout-btn').onclick=()=>{store.setStarted(false);location.reload();};
    $('#start-btn').onclick=()=>{const name=$('#username-input').value.trim(),age=Number($('#age-input').value);if(!name){$('#username-input').focus();return;}if(!Number.isFinite(age)||age<9){toast('PYN prototype accounts start at age 9.');$('#age-input').focus();return;}state.username=name;state.age=age;store.save();store.setStarted(true);showApp();renderAll();};
    $('#demo-btn').onclick=()=>{state.username='PixelCoder';state.age=13;store.save();store.setStarted(true);showApp();renderAll();};
  }
  function showApp(){$('#auth-screen').classList.add('hidden');$('#app').classList.remove('hidden');}
  applyTheme(); setupEvents(); if(store.started())showApp(); renderAll();
})();
