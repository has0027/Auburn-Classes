////////////////////////////////////////////////////
// DESIGN TOOLS CONFIG                            //
////////////////////////////////////////////////////
// Copyright (C) 2017  Utah State University
var DT_variables = {
        iframeID: '',
        // Path to the hosted USU Design Tools
        path: 'https://designtools.ciditools.com/',
        templateCourse: '1151228',
        // OPTIONAL: Button will be hidden from view until launched using shortcut keys
        hideButton: true,
    	 // OPTIONAL: Limit by course format
	     limitByFormat: false, // Change to true to limit by format
	     // adjust the formats as needed. Format must be set for the course and in this array for tools to load
	     formatArray: [
            'online',
            'on-campus',
            'blended'
        ],
        // OPTIONAL: Limit tools loading by users role
        limitByRole: false, // set to true to limit to roles in the roleArray
        // adjust roles as needed
        roleArray: [
            'student',
            'teacher',
            'admin'
        ],
        // OPTIONAL: Limit tools to an array of Canvas user IDs
        limitByUser: false, // Change to true to limit by user
        // add users to array (Canvas user ID not SIS user ID)
        userArray: [
            '1234',
            '987654'
        ]
};

// Run the necessary code when a page loads
$(document).ready(function () {
    'use strict';
    // This runs code that looks at each page and determines what controls to create
    $.getScript(DT_variables.path + 'js/master_controls.js', function () {
        console.log('master_controls.js loaded');
    });
});
////////////////////////////////////////////////////
// END DESIGN TOOLS CONFIG                        //
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// BEGIN EESYSOFT CONFIG                          //
////////////////////////////////////////////////////
window.eesyLaunchConfig = {
    host: 'auburn.eesysoft.com',
    key: 'dtzr5Sgs',
    supportTab: false
};

(function() {
    var e = document.createElement('script');
    e.src = '//' + window.eesyLaunchConfig.host + "/resources/js/canvas/launch.js?stmp=" + new Date().getTime();
    e.src = '//' + window.eesyLaunchConfig.host + "/resources/js/canvas/launch.js";
    e.async = true;
    e.type = 'text/javascript';

    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);
} ());
////////////////////////////////////////////////////
// END EESYSOFT CONFIG                        //
////////////////////////////////////////////////////