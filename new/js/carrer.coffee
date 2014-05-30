###
coffee --watch --compile carrer.coffee
###
(->
  "use strict"

  CarrerData = ->
    items = [
        class: "past"
        desc: "This is a description."
        end: new Date(2014, 5, 25)
        id: 0
        lane: 0
        start: new Date(2013, 5, 25)
      ,
        class: "past"
        desc: "This is a description."
        end: new Date(2014, 5, 25)
        id: 1
        lane: 1
        start: new Date(2013, 5, 25)
      ,
        class: "past"
        desc: "This is a description."
        end: new Date(2014, 5, 25)
        id: 2
        lane: 2
        start: new Date(2013, 5, 25)
      ,
        class: "past"
        desc: "This is a description."
        end: new Date(2014, 5, 25)
        id: 3
        lane: 3
        start: new Date(2013, 5, 25)
      ,
        class: "past"
        desc: "This is a description."
        end: new Date(2014, 1, 25)
        id: 4
        lane: 4
        start: new Date(2013, 5, 25)
      ,
    ]
    lanes = [
        id: 0
        label: 'lane 0'
      ,
        id: 1
        label: 'lane 1'
      ,
        id: 2
        label: 'lane 2'
      ,
        id: 3
        label: 'lane 3'
      ,
        id: 4
        label: 'lane 4'
      ,
    ]

    items: items
    lanes: lanes

  root = (if typeof exports isnt "undefined" and exports isnt null then exports else window)
  root.carrerData = CarrerData

).call(this)