var schoolMap = new Datamap({
    element: document.getElementById('school-map'),
    scope: 'world',
    geographyConfig: {
        popupOnHover: false,
        highlightOnHover: false
    },
    fills: {
        'USA': '#0fa0fa',
        'IND': '#FF4000',
        'EDU': '#DF01D7',
        defaultFill: '#ABDDA4'
    },
    data: {
        'RUS': {fillKey: 'RUS'},
        'PRK': {fillKey: 'PRK'},
        'PRC': {fillKey: 'PRC'},
        'IND': {fillKey: 'IND'},
        'GBR': {fillKey: 'GBR'},
        'FRA': {fillKey: 'FRA'},
        'PAK': {fillKey: 'PAK'},
        'USA': {fillKey: 'USA'}
    }
});

     var schools = [{
        name: 'Master of Science, Computer Science',
        university: 'Binghamton University',
        radius: 15,
        country: 'USA',
        fillKey: 'EDU',
        date: '(Aug 08 - May 11)',
        latitude: 42.10,
        longitude: -75.91
      },{
        name: 'Bachelor of Engineering, Information Technology',
        university: 'Mumbai University',
        radius: 15,
        country: 'India',
        fillKey: 'EDU',
        date: '(Aug 03 - May 07)',
        latitude: 18.97,
        longitude: 72.825
      }
    ];
//draw bubbles for schools
schoolMap.bubbles(schools, {
    popupTemplate: function (geo, data) {
            return ['<div class="hoverinfo">' +  data.name,
            '<br/>University: ' +  data.university + '',
            '<br/>Country: ' +  data.country + '',
            '<br/>Date: ' +  data.date + '',
            '</div>'].join('');
    }
});