(function() {

    window.eesy_course_id = ENV.COURSE_ID;
    
    if(ENV.COURSE_ID === undefined && document.location.pathname.match("^/courses/([0-9]+)/")) { 
    	window.eesy_course_id = document.location.pathname.match("^/courses/([0-9]+)/")[1];
    }

    if (ENV.current_user_id === undefined || ENV.current_user_id === null) {
        window.sessionStorage.eesysoft_session_key = undefined;
        window.sessionStorage.eesysoft_active_user_id = undefined;
    } else if ((window.sessionStorage.eesysoft_session_key
                && window.sessionStorage.eesysoft_active_user_id === ENV.current_user_id)
            || $('.is-masquerading-or-student-view').length) {

        launchEesySoft();
    } else {
        $.get('//' + window.eesyLaunchConfig.host + '/rest/public/canvasLaunchSettings', function(launchSettings) {
            withUserInfo(launchSettings, function(roles, profile) {

                var userPrefix = launchSettings.hostAsUserPrefix ? window.location.hostname + '_' : '';

                var params = {
                    username: userPrefix + profile.id  + '/auto/bb',
                    mail: profile.primary_email,
                    fullname: profile.name,
                    rolesExtended: JSON.stringify(roles),
                    key: window.eesyLaunchConfig.key
                };

                $.post('//' + window.eesyLaunchConfig.host + "/UserLogin.jsp?", params, function(loginKey) {
                    var eesy_k = loginKey.trim();
                    if (eesy_k != "") {
                        window.sessionStorage.eesysoft_session_key = eesy_k;
                        window.sessionStorage.eesysoft_active_user_id = ENV.current_user_id;
                        launchEesySoft();
                    }
                });
            });
        });
    }

    function launchEesySoft() {
        var __eesyEng = document.createElement('script');

        __eesyEng.src = '//' + window.eesyLaunchConfig.host + "/loader.jsp"
            + "?stmp=" + new Date().getTime()
            + "&showquicklink=" + window.eesyLaunchConfig.supportTab
            + "&k=" + window.sessionStorage.eesysoft_session_key;

        __eesyEng.async = true;
        __eesyEng.type = 'text/javascript';

        var __element = document.getElementsByTagName('script')[0];
        __element.parentNode.insertBefore(__eesyEng, __element);
    }


    function withUserInfo(launchSettings, callback) {
        $.get('/api/v1/users/self/courses', function(courses) {
            var accounts = {};
            courses.forEach(function (course) {
                accounts[course.account_id] = {};
            });

            var requests = [];
            Object.keys(accounts).forEach(function (id) {
                requests.push($.get('/api/v1/accounts/' + id, function(account) {
                    accounts[id] = {
                        name: account.name,
                        parent_account_id: account.parent_account_id
                    };
                }));
            });

            $.when.apply($, requests).always(function() {
                var roles = {};

                if (launchSettings.hostAsRolePrefix) {
                    roles[window.location.hostname] = {
                        id: window.location.hostname,
                        type: 'system'
                    };
                }

                courses.forEach(function (course) {
                    var rolePrefix = launchSettings.hostAsRolePrefix ? window.location.hostname + '_' : '';
                    var courseAccountId = 'CourseAccountId_' + course.account_id;
                    var fullAccountId = rolePrefix + courseAccountId;

                    if (accounts[course.account_id].name) {
                        roles[fullAccountId] = {
                            id: fullAccountId,
                            caption: accounts[course.account_id].name,
                            parent_id: rolePrefix + 'CourseAccountId_' + accounts[course.account_id].parent_account_id,
                            type: 'account'
                        };
                    } else {
                        roles[fullAccountId] = {
                            id: fullAccountId,
                            type: 'account'
                        };

                        if (launchSettings.hostAsRolePrefix) {
                            roles[fullAccountId].parent_id = window.location.hostname;
                        }
                    }

                    if(course.enrollments !== undefined) {
                        course.enrollments.forEach(function (enrollment) {
                            roles[enrollment.type] = {
                                id: enrollment.type,
                                type: 'role'
                            };

                            roles[fullAccountId + '_' + enrollment.type] = {
                                id: fullAccountId + '_' + enrollment.type,
                                caption: enrollment.type,
                                parent_id: fullAccountId,
                                type: 'course_role'
                            };
                        });
                    }
                });

                ENV.current_user_roles.forEach(function (role) {
                    roles[role] = {
                        id: role,
                        type: 'role'
                    };

                    if (launchSettings.hostAsRolePrefix) {
                        roles[window.location.hostname + '_' + role] = {
                            id: window.location.hostname + '_' + role,
                            parent_id: window.location.hostname,
                            type: 'host_role'
                        };
                    }
                });


                $.get('/api/v1/users/self/profile', function(profile) {
                    callback(Object.keys(roles).map(function(key) { return roles[key]; } ), profile);
                });

            });
        });
    }
    
} ());
