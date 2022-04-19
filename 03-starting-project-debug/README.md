# React: Debugging React Apps

Notes from:     
[React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)  
Instructor: Maximilian Schwarzmüller 

## Description

In this module, I learnt how to debug React apps, in other words,     
how to find and fix errors.

The starting project is an altered version of the previous module:     
[A Tasks List App (02-starting-project) ](https://github.com/ChristianVillalba/react_complete_guide/tree/main/02-starting-project)      
And I found and fixed the problems in the project.

## What I have learnt with this project
* Understanding Error Messages
* Debugging  
* Analyzing Code Flow and Warnings 
* Using React DevTools

---
---

# Notes:

## Understanding Error Messages

Sometimes when you're writing code, we get errors.       
Errors which the React development process catches and froze at you.

Example: Compiling Error

We will recevie a **Message** telling us what the problem is and maybe a suggestion to solve it.    
We also get a hint at the **file**,       
And the **line of code** this error is stemming from.    
We even see the **code snippet** below the message.       
Even our **IDE can detect some errors** (It won't detect all the React Errors, though).     

Some Errors are easy to fix,       
even without fully understanding the processes involved.      
Because the error message clearly tells where it is and how to solve it.      

Now other common mistakes that are often made are, for example       
typos or incorrect names.

**Conclusion:** when receiving an Error Message:        
Don't panic,       
Read Error Messages,         
Look at the line or the file it's coming from,          
Look at the code snippet it might be showing you,       
Look at the problematic code snippet,      
Look at the error message,      
Connect the error message to the snippet it's pointing at,      
... and you will be able to solve most errors.

## Analyzing Code Flow and Warnings 

Other kind of errors won't lead to a compilation errors         
and won't show up on the main screen nor the terminal.
So how can we now solve such errors?

Example: unwanted behaviour in the deleteion functionality:

Let's first of all go to the place where we have that deletion logic (App.js)       
In this case, the deletion logic in general it's working but it deletes the wrong item.       

Maybe the ID is wrong.      
So maybe we should go to the place where the IDs are generated and assigned (addGoalHandler).   
Here there is (was) a problem: a hard code id: "goal1"

Previously here we used math random to derive a pseudo unique ID.         
Now with the hard-coded string there is a logical error here:                 
**The Error** is that I assigned **the same ID to all goals**.        
So therefore they're **no** longer **distinguishable by ID**.       

That's a **logical mistake**         
and I was able to narrow it down by going through that complete **chain of events**.

This is other way that could help us:       
When adding a Goal Item, lets look at the console:      
We recevied some **warnings and errors** that are thrown by the library       
which don't crash the whole application necessarily.       
The warining states that we have two children with the same key.         
This is implicity related to our deletion problem,        
because if we got two children with the same ID (and same key)        
then we seem to have an error in our code (that will cause problems later on).       

In the **warning** we receive, we can even see that "goal1", the hard-coded key/id is the **problem**.

## Debugging using Breakpoints

We have the problem that we have the hard-coded ID.       
Let's say we didn't use any of the other two approaches.          
We overlooked that warning,         
and we don't know why it's behaving incorrectly.            






























