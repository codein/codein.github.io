var data = carrerData()
  , lanes = data.lanes
  , items = data.items
  , now = new Date()
  , yearAgo = new Date(2011, 9, 5);

var margin = {top: 20, right: 50, bottom: 15, left: 90}
  , width = window.innerWidth - margin.left - margin.right - 100
  , height = 700 - margin.top - margin.bottom
  , miniHeight = lanes.length * 24 + 50
  , mainHeight = height - miniHeight - 50;

var x = d3.time.scale()
    .domain([d3.time.sunday(d3.min(items, function(d) { return d.start; })),
             d3.max(items, function(d) { return d.end; })])
    .range([0, width]);
var x1 = d3.time.scale().range([0, width]);

var ext = d3.extent(lanes, function(d) { return d.id; });
var y1 = d3.scale.linear().domain([ext[0], ext[1] + 1]).range([0, mainHeight]);
var y2 = d3.scale.linear().domain([ext[0], ext[1] + 1]).range([0, miniHeight]);

var chart = d3.select('#carrer-timeline')
    .append('svg:svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .attr('class', 'chart');

chart.append('defs').append('clipPath')
    .attr('id', 'clip')
    .append('rect')
        .attr('width', width)
        .attr('height', mainHeight);

var main = chart.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .attr('width', width)
    .attr('height', mainHeight)
    .attr('class', 'main');

var mini = chart.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + (mainHeight + 60) + ')')
    .attr('width', width)
    .attr('height', miniHeight)
    .attr('class', 'mini');

// draw the lanes for the main chart
main.append('g').selectAll('.laneLines')
    .data(lanes)
    .enter().append('line')
    .attr('x1', 0)
    .attr('y1', function(d) { return d3.round(y1(d.id)) + 0.5; })
    .attr('x2', width)
    .attr('y2', function(d) { return d3.round(y1(d.id)) + 0.5; })
    .attr('stroke', function(d) { return d.label === '' ? 'white' : 'lightgray' });

main.append('g').selectAll('.laneText')
    .data(lanes)
    .enter().append('text')
    .text(function(d) { return d.label; })
    .attr('x', -10)
    .attr('y', function(d) { return y1(d.id + .5); })
    .attr('dy', '0.5ex')
    .attr('text-anchor', 'end')
    .attr('class', 'laneText');

// draw the lanes for the mini chart
mini.append('g').selectAll('.laneLines')
    .data(lanes)
    .enter().append('line')
    .attr('x1', 0)
    .attr('y1', function(d) { return d3.round(y2(d.id)) + 0.5; })
    .attr('x2', width)
    .attr('y2', function(d) { return d3.round(y2(d.id)) + 0.5; })
    .attr('stroke', function(d) { return d.label === '' ? 'white' : 'lightgray' });

mini.append('g').selectAll('.laneText')
    .data(lanes)
    .enter().append('text')
    .text(function(d) { return d.label; })
    .attr('x', -10)
    .attr('y', function(d) { return y2(d.id + .5); })
    .attr('dy', '0.5ex')
    .attr('text-anchor', 'end')
    .attr('class', 'laneText');

// draw the x axis
var xDateAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom')
    .ticks(d3.time.months, (x.domain()[1] - x.domain()[0]) > 15552e6 ? 4 : 1)
    .tickFormat(d3.time.format('%b'))
    .tickSize(6, 0, 0);

var x1DateAxis = d3.svg.axis()
    .scale(x1)
    .orient('bottom')
    .ticks(d3.time.days, 1)
    .tickFormat(d3.time.format('%a %d'))
    .tickSize(6, 0, 0);

var xMonthAxis = d3.svg.axis()
    .scale(x)
    .orient('top')
    .ticks(d3.time.years, 1)
    .tickFormat(d3.time.format('%b %Y'))
    .tickSize(15, 0, 0);

var x1MonthAxis = d3.svg.axis()
    .scale(x1)
    .orient('top')
    .ticks(d3.time.months, 1)
    .tickFormat(d3.time.format('%b - Week %W'))
    .tickSize(15, 0, 0);

main.append('g')
    .attr('transform', 'translate(0,' + mainHeight + ')')
    .attr('class', 'main axis date')
    .call(x1DateAxis);

main.append('g')
    .attr('transform', 'translate(0,0.5)')
    .attr('class', 'main axis month')
    .call(x1MonthAxis)
    .selectAll('text')
        .attr('dx', 5)
        .attr('dy', 12);

mini.append('g')
    .attr('transform', 'translate(0,' + miniHeight + ')')
    .attr('class', 'axis date')
    .call(xDateAxis);

mini.append('g')
    .attr('transform', 'translate(0,0.5)')
    .attr('class', 'axis month')
    .call(xMonthAxis)
    .selectAll('text')
        .attr('dx', 5)
        .attr('dy', 12);

// draw a line representing today's date
main.append('line')
    .attr('y1', 0)
    .attr('y2', mainHeight)
    .attr('class', 'main todayLine')
    .attr('clip-path', 'url(#clip)');

mini.append('line')
    .attr('x1', x(now) + 0.5)
    .attr('y1', 0)
    .attr('x2', x(now) + 0.5)
    .attr('y2', miniHeight)
    .attr('class', 'todayLine');

// draw the items
var itemRects = main.append('g')
    .attr('clip-path', 'url(#clip)');

mini.append('g').selectAll('miniItems')
    .data(getPaths(items))
    .enter().append('path')
    .attr('class', function(d) { return 'miniItem ' + d.class; })
    .attr('d', function(d) { return d.path; });

// invisible hit area to move around the selection window
mini.append('rect')
    .attr('pointer-events', 'painted')
    .attr('width', width)
    .attr('height', miniHeight)
    .attr('visibility', 'hidden')
    .on('mouseup', moveBrush);

        //mini item rects

//mini labels
mini.append("g").selectAll(".miniLabels")
    .data(items)
    .enter().append("text")
    .text(function(d) {return d.label;})
    .attr("x", function(d) {return x(d.start) + 17;})
    .attr("y", function(d) {return y2(d.lane + .5) + 1;})
    .attr("dy", ".5ex");

//mini icon
mini.append("g").selectAll(".miniLabels")
    .data(items)
    .enter().append("image")
    .attr("xlink:href", function(d) {return 'img/' + d.icon;})
    .attr("x", function(d) {return x(d.start) - 1;})
    .attr("y", function(d) {return y2(d.lane + .5) - 8;})
    .attr("width","17px")
    .attr("height","17px");

// draw the selection area
var brush = d3.svg.brush()
    .x(x)
    .extent([d3.time.monday(yearAgo),d3.time.saturday.ceil(now)])
    .on("brush", display);

mini.append('g')
    .attr('class', 'x brush')
    .call(brush)
    .selectAll('rect')
        .attr('y', 1)
        .attr('height', miniHeight - 1);

mini.selectAll('rect.background').remove();
display();

function display () {

    var rects, labels
      , minExtent = d3.time.day(brush.extent()[0])
      , maxExtent = d3.time.day(brush.extent()[1])
      , visItems = items.filter(function (d) { return d.start < maxExtent && d.end > minExtent});

    mini.select('.brush').call(brush.extent([minExtent, maxExtent]));

    x1.domain([minExtent, maxExtent]);

    if ((maxExtent - minExtent) > 42418800000) {
        x1DateAxis
            .ticks(d3.time.months, (x.domain()[1] - x.domain()[0]) > 15552e6 ? 4 : 1)
            .tickFormat(d3.time.format('%b - %Y'))
        x1MonthAxis.ticks(d3.time.years, 1).tickFormat(d3.time.format('%Y'))
    }
    else if ((maxExtent - minExtent) > 1468800000) {
        x1DateAxis.ticks(d3.time.months, 1).tickFormat(d3.time.format('%b - %Y'))
        x1MonthAxis.ticks(d3.time.months, 1).tickFormat(d3.time.format('%b - %Y'))
    }
    else if ((maxExtent - minExtent) > 172800000) {
        x1DateAxis.ticks(d3.time.days, 1).tickFormat(d3.time.format('%a %d'))
        x1MonthAxis.ticks(d3.time.mondays, 1).tickFormat(d3.time.format('%b - Week %W'))
    }
    else {
        x1DateAxis.ticks(d3.time.hours, 4).tickFormat(d3.time.format('%I %p'))
        x1MonthAxis.ticks(d3.time.days, 1).tickFormat(d3.time.format('%b %e'))
    }


    //x1Offset.range([0, x1(d3.time.day.ceil(now) - x1(d3.time.day.floor(now)))]);

    // shift the today line
    main.select('.main.todayLine')
        .attr('x1', x1(now) - 0.5)
        .attr('x2', x1(now) + 0.5);

    // update the axis
    main.select('.main.axis.date').call(x1DateAxis);
    main.select('.main.axis.month').call(x1MonthAxis)
        .selectAll('text')
            .attr('dx', 5)
            .attr('dy', 12);

    // upate the item rects
    rects = itemRects.selectAll('rect')
        .data(visItems, function (d) { return d.id; })
        .attr('x', function(d) { return x1(d.start); })
        .attr('width', function(d) { return x1(d.end) - x1(d.start); });

    rects.enter().append('rect')
        .attr('x', function(d) { return x1(d.start); })
        .attr('y', function(d) { return y1(d.lane) + .1 * y1(1) + 0.5; })
        .attr('width', function(d) { return x1(d.end) - x1(d.start); })
        .attr('height', function(d) { return .8 * y1(1); })
        .attr('class', function(d) { return 'mainItem ' + getClass(lanes, d.lane); });

    rects.exit().remove();

    // update the item labels
    labels = itemRects.selectAll('text')
        .data(visItems, function (d) { return d.id; })
        .attr('x', function(d) { return x1(Math.max(d.start, minExtent)) + 152; });

    images = itemRects.selectAll('image')
        .data(visItems, function (d) { return d.id; })
        .attr('x', function(d) { return x1(Math.max(d.start, minExtent)) + 2; });

    labels.enter().append('text')
        .text(function (d) { return d.desc; })
        .attr('x', function(d) { return x1(Math.max(d.start, minExtent)) + 152; })
        .attr('y', function(d) { return y1(d.lane) + .4 * y1(1) + 0.5; })
        .attr('text-anchor', 'start')
        .attr('class', 'itemLabel');

    images.enter().append("image")
        .attr("xlink:href", function(d) {return 'img/' + d.image;})
        .attr('x', function(d) { return x1(Math.max(d.start, minExtent)) + 2; })
        .attr('y', function(d) { return y1(d.lane) + .4 * y1(1) - 10 })
        .attr("width","150px")
        .attr("height","27px")

    labels.exit().remove();
    images.exit().remove();
}

function moveBrush () {
    var origin = d3.mouse(this)
      , point = x.invert(origin[0])
      , halfExtent = (brush.extent()[1].getTime() - brush.extent()[0].getTime()) / 2
      , start = new Date(point.getTime() - halfExtent)
      , end = new Date(point.getTime() + halfExtent);

    brush.extent([start,end]);
    display();
}

// generates a single path for each item class in the mini display
// ugly - but draws mini 2x faster than append lines or line generator
// is there a better way to do a bunch of lines as a single path with d3?
function getPaths(items) {
    var paths = {}, d, offset = .5 * y2(1) + 0.5, result = [];
    for (var i = 0; i < items.length; i++) {
        d = items[i];
        className = getClass(lanes, d.lane);
        if (!paths[className]) paths[className] = '';
        paths[className] += ['M',x(d.start),(y2(d.lane) + offset),'H',x(d.end)].join(' ');
    }

    for (var className in paths) {
        result.push({class: className, path: paths[className]});
    }

    return result;
}

function getClass(lanes, id) {
  return lanes[id]["class"];
};