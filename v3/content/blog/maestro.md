---
title: "Maestro Job Engine Architecture"
draft: false
date: Thru, 17 Dec 2020 14:09:10 +0000
draft: false
tags: [python, job engine, monitoring]
pubtype: "Talk"
featured: true
description: "Maestro Job Engine Architecture"
image: "/img/USPS API POC.png"
fact: ""
weight: 11
sitemap:
  priority : 0.8
  weight: 300
---

# Maestro Job Engine Architecture


```py
+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                                                                                                                                               |
|                                                                                                                                                               |
|       Maestro Job Engine Architecture                                                                                                                         |
|                                                                                                                                                               |
|                                                                                                                                                               |
|                                                                                                                                                               |
|                  +---------------------------+                                                                                                                |
|                  |                           |                                                                                                                |
|                  |    execute             1  |                                                                                                                |
|                  |                           |                                                                                                                |
|                  +---------------------------+                                                                                                                |
|                                                                                                                                                               |
|                  +---------------------------+                         +------+----------+--------+--------------------------------------+-------------+      |
|                  |                           |  push logs to Database  | date | job_name | status | tags                                 | debug_data  |      |
|                  |    logging             2  | +---------------------> +-------------------------------------------------------------------------------+      |
|                  |                           |                         |      |          |        |                                      |             |      |
|                  +---------------------------+                         |      |          |        |  #frequency #type #priority #author  |             |      |
|                                                                        |      |          |        |  examples                            |             |      |
|                  +---------------------------+                         |      |          |        |  #daily #etl #critical #robin        |             |      |
|                  |                           |     analyze logs        |      |          |        |  #weekly #test #minor #bart          |             |      |
|                  |    monitoring          3  | <---------------------+ |      |          |        |  #hourly #API #monitoring #dev #paul |             |      |
|                  |                           |                         |      |          |        |                                      |             |      |
|                  +----------+----------------+                         +------+----------+--------+--------------------------------------+-------------+      |
|                             |                                                                                                                                 |
|                             |                                                                                                                                 |
|                             |                                                                                                                                 |
|                             | notification                                                                                                                    |
|                             |                                                                                                                                 |
|                             v                                                                                                                                 |
|                  +----------+----------------+                                                                                                                |
|                  |                           |                                                                                                                |
|                  |      Errors               |                                                                                                                |
|                  |        critical: 0        |                                                                                                                |
|                  |        minor: 1           |                                                                                                                |
|                  |        warning: 12        |                                                                                                                |
|                  |        test: 1            |                                                                                                                |
|                  |        dev: 5             |                                                                                                                |
|                  |        success: 150       |                                                                                                                |
|                  |                           |                                                                                                                |
|                  +---------------------------+                                                                                                                |
|                                                                                                                                                               |
|                                                                                                                                                               |
|                                                                                                                                                               |
+---------------------------------------------------------------------------------------------------------------------------------------------------------------+

```