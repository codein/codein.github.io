###
coffee --watch --compile carrer.coffee
###
(->
  "use strict"

  CarrerData = ->
    items = [
        label: 'Software Engineer - Cloud Computing R&D'
        desc: 'Software Engineer - Cloud Computing R&D - NaviSite Inc. - A Time Warner Cable Company - Syracuse, NY'
        icon: 'twc.ico'
        image: 'twc.jpeg'
        end: new Date()
        id: 0
        lane: 8
        start: new Date(2011, 8, 29)
      ,

        label: 'MongoDB'
        icon: 'mongodb.ico'
        image: 'mongodb.png'
        desc: ''
        end: new Date()
        id: 1
        lane: 7
        start: new Date(2012, 1, 1)
      ,

        label: 'python'
        icon: 'python.ico'
        image: 'python.png'
        desc: ''
        status: 'fastforward.svg'
        end: new Date()
        id: 2
        lane: 5
        start: new Date(2011, 7, 15)
      ,

        label: 'MySQL'
        icon: 'mysql.ico'
        image: 'mysql.png'
        desc: ''
        end: new Date()
        id: 4
        lane: 6
        start: new Date(2011, 8, 29)
      ,

        label: 'CoffeeScript'
        icon: 'coffee.ico'
        image: 'coffee.png'
        desc: ''
        status: 'fastforward.svg'
        end: new Date()
        id: 5
        lane: 5
        start: new Date(2012, 7, 15)
      ,

        label: 'Bootstrap'
        icon: 'bootstrap.ico'
        image: 'bootstrap.jpeg'
        desc: ''
        end: new Date()
        id: 6
        lane: 0
        start: new Date(2012, 7, 15)
      ,

        label: 'AngularJS'
        icon: 'angular.ico'
        image: 'angular.jpeg'
        desc: ''
        status: 'play.svg'
        end: new Date(2014, 1, 1)
        id: 7
        lane: 3
        start: new Date(2013, 5, 1)
      ,

        label: 'RabbitMQ'
        icon: 'rabbitmq.ico'
        image: 'rabbitmq.png'
        desc: ''
        status: 'fastforward.svg'
        end: new Date(2013, 4, 30)
        id: 8
        lane: 4
        start: new Date(2012, 1, 1)
      ,

        label: 'Tornado'
        icon: 'tornado.ico'
        image: 'tornado.jpeg'
        desc: ''
        status: 'fastforward.svg'
        end: new Date()
        id: 10
        lane: 1
        start: new Date(2011, 8, 28)
      ,

        label: 'Selenium'
        icon: 'selenium.ico'
        image: 'selenium.png'
        desc: ''
        end: new Date()
        id: 11
        lane: 4
        start: new Date(2013, 5, 1)
      ,

        label: 'nodejs'
        icon: 'nodejs.ico'
        image: 'nodejs.svg'
        desc: ''
        end: new Date()
        id: 12
        lane: 2
        start: new Date(2013, 5, 1)
      ,

        label: 'django'
        icon: 'django.ico'
        image: 'django.gif'
        desc: ''
        end: new Date(2014, 1, 1)
        id: 14
        lane: 1
        start: new Date(2013, 5, 1)
      ,

        label: 'DevTools'
        icon: 'devtools.ico'
        image: 'devtools.jpg'
        desc: ''
        status: 'fastforward.svg'
        end: new Date(2013, 5, 1)
        id: 15
        lane: 2
        start: new Date(2012, 7, 15)
      ,

        label: 'git'
        icon: 'git.ico'
        image: 'git.jpeg'
        desc: ''
        status: 'fastforward.svg'
        end: new Date(2013, 5, 1)
        id: 16
        lane: 3
        start: new Date(2011, 8, 29)
      ,

        label: 'Ansible'
        icon: 'ansible.ico'
        image: 'ansible.jpeg'
        desc: ''
        end: new Date()
        id: 17
        lane: 3
        start: new Date(2014, 1, 1)
      ,



        label: 'Information Analyst'
        desc: 'Information Analyst'
        icon: 'uhs.jpeg'
        image: 'uhs.jpeg'
        end: new Date(2011, 8, 26)
        id: 20
        lane: 8
        start: new Date(2010, 7, 28)
      ,

        label: 'tableau'
        icon: 'tableau.ico'
        image: 'tableau.jpeg'
        desc: ''
        status: 'play.svg'
        end: new Date(2011, 8, 26)
        id: 21
        lane: 2
        start: new Date(2011, 1, 1)
      ,

        label: 'SQL Server Analytics Services'
        icon: 'ssas.ico'
        image: 'ssas.jpeg'
        desc: ''
        status: 'pause.svg'
        end: new Date(2011, 8, 26)
        id: 22
        lane: 3
        start: new Date(2010, 7, 28)
      ,

        label: 'SQL Server'
        icon: 'ssas.ico'
        image: 'sqlserver.jpeg'
        status: 'pause.svg'
        desc: ''
        end: new Date(2011, 8, 26)
        id: 23
        lane: 6
        start: new Date(2010, 7, 28)
      ,

        label: 'OLAP cube'
        icon: 'bids.jpeg'
        image: 'olap.png'
        status: 'pause.svg'
        desc: ''

        end: new Date(2011, 8, 26)
        id: 24
        lane: 0
        start: new Date(2010, 7, 28)
      ,


        label: 'Intern Software Devloper'
        desc: 'Intern Software Devloper'
        icon: 'uhs.jpeg'
        image: 'uhs.jpeg'
        end: new Date(2010, 7, 28)
        id: 30
        lane: 8
        start: new Date(2009, 5, 1)
      ,

        label: 'MongoDB'
        icon: 'mongodb.ico'
        image: 'mongodb.png'
        desc: ''
        end: new Date(2011, 6, 1)
        id: 31
        lane: 7
        start: new Date(2011, 2, 1)
      ,

        label: 'Java'
        icon: 'java.ico'
        image: 'java.jpeg'
        desc: ''
        status: 'pause.svg'
        end: new Date(2011, 6, 1)
        id: 32
        lane: 5
        start: new Date(2008, 7, 11)
      ,

        label: 'APACHE'
        icon: 'apache.ico'
        image: 'apache.png'
        desc: ''
        status: 'pause.svg'
        end: new Date(2011, 8, 26)
        id: 36
        lane: 1
        start: new Date(2010, 5, 1)
      ,

        label: 'android'
        icon: 'android.ico'
        image: 'android.jpeg'
        desc: ''
        status: 'pause.svg'
        end: new Date(2010, 7, 1)
        id: 33
        lane: 0
        start: new Date(2009, 5, 1)
      ,
        label: 'MySQL'
        icon: 'mysql.ico'
        image: 'mysql.png'
        desc: ''
        end: new Date(2011, 6, 1)
        id: 34
        lane: 7
        start: new Date(2009, 5, 1)
      ,
        label: 'weka'
        icon: 'weka.jpeg'
        image: 'weka.png'
        desc: ''
        status: 'pause.svg'
        end: new Date(2011, 8, 26)
        id: 35
        lane: 2
        start: new Date(2009, 5, 1)
    ]

    lanes = [
        id: 0
        label: 'UX'
        class: 'ux'
      ,
        id: 1
        label: 'Server-side'
        class: 'server-side'
      ,
        id: 2
        label: 'Library & tool'
        class: 'tool'
      ,
        id: 3
        label: 'Library & tool'
        class: 'tool'
      ,
        id: 4
        label: 'Tool'
        class: 'tool'
      ,
        id: 5
        label: 'Language'
        class: 'language'
      ,
        id: 6
        label: 'Database'
        class: 'database'
      ,
        id: 7
        label: 'Database'
        class: 'database'
      ,
        id: 8
        label: 'Position'
        class: 'position'
      ,

    ]

    items: items
    lanes: lanes

  root = (if typeof exports isnt "undefined" and exports isnt null then exports else window)
  root.carrerData = CarrerData

).call(this)