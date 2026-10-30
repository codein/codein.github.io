---
title: "Analytics Commons Talk"
draft: false
date: Thu, 05 Nov 2020 14:09:10 +0000
draft: false
tags: [analytics, talk]
pubtype: "Talk"
featured: true
description: "Top 5 tools Analytics uses"
image: "/img/workspace.webp"
link: "https://github.com/codein/codein.github.io/blob/master/files/resume.md"
fact: "My resume full version"
weight: 11
sitemap:
  priority : 0.8
  weight: 300
---


I gave this talk to give an overview of few tools that our department relies heavily on. This talk was part of our IS department's commons session to give employees the chance to share their skills with examples to set and follow.


## Top 5 tools Analytics uses


### Introduction

We are hoping to give an insight into 5 tools that we rely heavily to make our life easy in Analytics department.

I have covered 5 tools in this document
* 1 - [SQL](https://en.wikipedia.org/wiki/SQL)
* 2 - [Python](https://en.wikipedia.org/wiki/Python_(programming_language))
* 3 - [git](https://en.wikipedia.org/wiki/Git)
* 4 - [jupyter](https://en.wikipedia.org/wiki/Project_Jupyter)
* 5 - [Infinity Platform](http://infinity.aha)

Each tool has it's on section covering
* Introduction
* Analytics Application
* Getting Started
* Application ideas - Where can i use it?
* Resources

If you have questions or need help using any of these, please feel free to reach our to Robin Varghese, it will be my at-most joy to assist you in your endeavor.

### 1

### SQL

### 1.a
### Introduction
SQL is a database language. SQL is used to communicate with a RDBMS database(i.e. Microsoft SQL Server, MS Access, MySQL, Oracle, Sybase, Ingres). We live in a data-driven world: We at Arnot search through data to find insights to inform strategy, marketing, operations, and a plethora of other categories. We have a several systems that use large, relational databases, which makes a basic understanding of SQL a great employable skill not only for data analyst, but for almost everyone.


### 1.b
### Analytics Application
We have written close to 100k lines of SQL code in last 5 years. We modify close to 38 files with 3073 insertions(+) and 216 deletions(-) every month. SQL is a crucial tool for analyzing data.

### 1.c
### Getting Started

SQL could be distilled down to these 5 basic commands
>>>
`SELECT` column_name(s)
`FROM` table_name
`WHERE` condition
`GROUP BY` column_name(s)
`ORDER BY` column_name(s);
>>>

I highly recommend taking one of these online course
* [Learn SQL](https://www.codecademy.com/learn/learn-sql) course has been taken by 1,289,374 people needs 7 hours to complete and has no prerequisites
* Percipio PRACTICE [LAB: Querying Data with Transact-SQL](https://share.percipio.com/cd/LsI05QSgc)
* [Welcome to SQL](https://www.khanacademy.org/computing/computer-programming/sql/sql-basics/v/welcome-to-sql) course at Khan Academy

### 1.d
### Application ideas - Where can I use it?

* Make a database for a excel file that you track some data in.
* Connect to a database you have access to via a SQL editor(i.e. [SSMS](https://en.wikipedia.org/wiki/SQL_Server_Management_Studio) or [dbeaver](https://dbeaver.com/)).
* Explore a database table to get some insights.
* Find a project to advance your SQL skills.

### 1.e
### Resources

* https://en.wikipedia.org/wiki/SQL
* https://www.codecademy.com/learn/learn-sql
* https://share.percipio.com/cd/LsI05QSgc
* https://www.khanacademy.org/computing/computer-programming/sql/sql-basics/v/welcome-to-sql
* https://en.wikipedia.org/wiki/SQL_Server_Management_Studio
* https://dbeaver.com/
* https://arnothealth.percipio.com/search?q=SQL


### 2
### Python

### 2.a
### Introduction

Python is a popular programming language. Python was designed for readability, and has some similarities to the English language.

Python uses new lines to complete a command, as opposed to other programming languages which often use semicolons or parentheses. Python relies on indentation, using whitespace, to define scope.

It is used for:

* web development (server-side),
* software development,
* mathematics,
* system scripting.

What can Python do?
* Python can be used on a server to create web applications.
* Python can be used alongside software to create workflows.
* Python can connect to database systems. It can also read and modify files.
* Python can be used to handle big data and perform complex mathematics.
* Python can be used for rapid prototyping, or for production-ready software development.


### 2.b
### Analytics Application

We use python programming language in a several ways

##### Data Integration Agent

This generic integration agent integrates data into our data warehouse from variety of data sources( ex. sql server, csv, txt, excel files etc). It also de-dupes data it is integrating.

For e.g. this is how we integrate AMS credentials file to ensure we have the latest information on Arnot Health Providers.
```python
    'job_key':{
        'extract_home': '~/Projects/flat_files_folder',
        'extract_filename_part': 'CREDENTIALING STATUS REPORT',
        'file_extensions': ['.xlsx'],
        'sheetname': 'DEMOGRAPHICS MASTER',
        'skiprows': 0,
        'table_name': '[analytics_prod_database].[AMS_schema].[credentialing_master]',
        'primary_keys': ['NPI'],
        'severity': 'minor',
        'frequency': 'weekly',
    },
```

##### Job engine

We trigger automated python jobs through our job engine. Job engine is programmed to tag each triggered job with basic diagnostic details(ex. time, host name, job_id etc).
Every job also has few diagnostic tags(ex. '#critical #weekly #job #awhitt') These tags are used by job monitor later to notify of errors or delays.
Finally all job logs along with diagnostic details are pushed to a database.

##### Job monitoring

We monitor over 80 automated jobs across our entire infrastructure for delays and failures. Thrice a day it sends out an email with a subject similar to  `Job Monitor: Critical errors: 1, Minor errors: 0, Warnings: 11, Success: 85` with details on current state of jobs.

##### Web server programming

Our Infinity Platform server is written in python

### 2.c
### Getting Started

I highly recommend going through one of these online material
* Percipio PRACTICE [LAB: Introduction to Programming Using Python](https://share.percipio.com/cd/cm5WXG5QF)
* [Google's Python Class](https://developers.google.com/edu/python/)
* [Python YouTube Tutorial](https://www.youtube.com/watch?v=_uQrJ0TkZlc)
* This is fun and free book to get started [Automate the Boring Stuff with Python - Practical Programming for Total Beginners](https://automatetheboringstuff.com/) by Al Sweigart is "written for office workers, students, administrators, and anyone who uses a computer to learn how to code small, practical programs to automate tasks on their computer."


### 2.d
### Application ideas - Where can i use it?

* [Execute a Command Prompt Command from Python](https://datatofish.com/command-prompt-python/)
* [Controlling the Keyboard and Mouse with GUI Automation](http://automatetheboringstuff.com/2e/chapter20/)
* [Sending Text Messages with SMS Email Gateways](http://automatetheboringstuff.com/2e/chapter18/)

### 2.e
### Resources

https://en.wikipedia.org/wiki/Python_(programming_language)
https://share.percipio.com/cd/cm5WXG5QF
https://arnothealth.percipio.com/search?q=python
https://wiki.python.org/moin/BeginnersGuide/NonProgrammers

### 3
### git – CVS – wiki
### 3.a
### Introduction

Git is a wonderful tool for source control. Git is the most popular version control system. If you have been programming for less than a decade, it’s highly likely that you haven’t used any other method of version control. The git workflow dictates how a software team collaborates, builds, and ships software.

We use a Community Edition of [gitlab](https://about.gitlab.com/install/?version=ce) as our Centralized Version control System(CVS) and wiki for maintaining our documents.

We also use gitlab to manage our teams' tasks and projects.

### 3.b
### Analytics Application

#### Git [blame](https://www.atlassian.com/git/tutorials/inspecting-a-repository/git-blame)


This is used to examine specific points of a file's history and get context as to who the last author was that modified the line. This is used to explore the history of specific code and answer questions about what, how, and why the code was added to a repository.

For ex below file shows a history of a 122 line document how it has evolved over last 3 years.

![image](/img/gitignore.git.blame.example.png)

https://github.com/jupyter/notebook/blame/master/.gitignore

#### Git [workflow](blob/master/git.md)

##### 1. Get latest master
```
git checkout master
git pull --rebase
```

##### 2. Checkout remote branch
Our convention is to create branches from gitlab issues

```
git checkout -t origin/<branch_name_here>
```

##### 3. Commit
```
git add 1.txt
git commit -m '....'
git push
```

### 3.c
### Getting Started

* [Introduction to Git](https://share.percipio.com/cd/wRBnoGBEU)
* [Learn Git in 20 Minutes](youtube.com/watch?v=Y9XZQO1n_7c)
* [Resources to learn Git](https://try.github.io/)

### 3.d
### Application ideas - Where can i use it?

* version controlling any document you author individually or with teammates.
* maintain documents to ensure up to date changes are incorporated
* Team management. Refer attached file `Team Management Project ex. python data visualization (#1167) · Issues · AHA-dev-team _ br1ck · GitLab.pdf`

### 3.e
### Resources

* https://en.wikipedia.org/wiki/Git
* https://share.percipio.com/cd/wRBnoGBEU
* youtube.com/watch?v=Y9XZQO1n_7c
* https://try.github.io/
* https://share.percipio.com/cd/wRBnoGBEU
* https://arnothealth.percipio.com/search?q=git


### 4
### Jupyter
### 4.a
### Introduction

Project Jupyter is three things: a collection of standards, a community, and a set of software tools. Jupyter Notebook, one part of Jupyter, is software that creates a Jupyter notebook.

A Jupyter notebook is a document that supports mixing executable code, equations, visualizations, and narrative text. Specifically, Jupyter notebooks allow the user to bring together data, code, and prose, to tell an interactive, computational story.



### 4.b
### Analytics Application

We use this primarily when we need to attach a narrative with our analysis.
Refer to attached file [jupyter_notebook_demo.html](/jupyter_notebooks/jupyter_notebook_demo.html)


### 4.c
### Getting Started
* [Jupyter Notebooks](https://share.percipio.com/cd/vMeE9E4Dn)
* [A gallery of interesting Jupyter Notebooks](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)

### 4.d
### Application ideas - Where can i use it?

This is one of the latest tools that we have uncovered so even we are learning. If you want to learn more get in touch with us we can learn this together.

### 4.e
### Resources

* https://en.wikipedia.org/wiki/Project_Jupyter
* https://jupyter.org/
* https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks
* https://arnothealth.percipio.com/search?q=jupyter
* https://share.percipio.com/cd/vMeE9E4Dn

### 5
### Infinity Platform
### 5.a
### Introduction

Our in-house analytics platform surfaces information from most of our in house systems via 48 dashboards and calculates 355 key metrics
http://infinity.aha
http://8.aha

![image](/img/homepage.ex.infinity.platform.png)

### 5.b
### Analytics Application
### 5.c
### Getting Started

* [Create an Account](http://8.aha/#/new-user/)
![image](/uploads/81f7daebbc87a3e123112deb9cd832c5/image.png)
![image](/uploads/a10d05015858ec5b628ef772388e72a0/image.png)

* Give us feedback and suggestion for improvement.

### 5.d
### Application ideas - Where can i use it?

* Learn insights about Arnot Health's Patient Satisfaction
* Learn insights and metrics about our organization, specialties and providers
* Help us to ensure our dashboards and metrics are consistent.
* Identify crucial metrics in our blind-spot.


### 5.e
### Resources

* http://8.aha


##### Thoughts

1.  Survey MS teams or survey monkey
2.  Record
3.  Percipio
4.  Chat room IS commons


