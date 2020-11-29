---
title: "SQL upsert loader"
draft: false
date: Sat, 28 Nov 2020 14:09:10 +0000
draft: false
tags: [jupyter, SQL, ETL, integration]
pubtype: "Talk"
featured: true
description: "A quick demo of jupyter notebook."
image: "/img/SQL_upsert_loader_notebook.png"
fact: "My resume full version"
weight: 11
sitemap:
  priority : 0.8
  weight: 300
---

## Overview of SQL upsert loader
* [jupyter notebook link](/jupyter_notebooks/sqlite_upsert_loader_overview.html)

* [source code](https://github.com/codein/poc/blob/master/sql_loader/sql_loader.py)

I hope to present a Proof Of Concept version of a multiprocessed data loader that I use extensively in my data integration pipelines.

Couple of problems that it is attempting to address are
1. Ability to operate on any update flat file associated with a SQL table, with minor configuration.
2. Ability to perform upsert operations on datasets without a primary key column. Although a combination key has to be identified using multiple columns to dedup the records.


Use the link above to view the example in a jupyter notebook.
