"use strict";
eesy.define(['jquery-private', 'utils', 'helpitem-loader', 'json!settings-supportcenter'], function ($, utils, helpItemLoader, settings) {
    var hid = undefined;
    // Support Center
    utils.onClickOrSelectKey('.__explain-downvoting .form__submit_Sup', function (e, element) {
        var tempReason = $(".layout__main .__explain-downvoting .quick-survey__textarea").val();
        sendVoteSupport(tempReason, element, false);
    });
    utils.onClickOrSelectKey('.__explain-upvoting .form__submit_Sup', function (e, element) {
        var tempReason = $(".layout__main .__explain-upvoting .quick-survey__textarea").val();
        sendVoteSupport(tempReason, element, true);
    });
    function sendVoteSupport(reason, element, isUp) {
        $(".layout__main .__explain-downvoting").addClass("hideQuestion");
        $(".layout__main .__explain-upvoting").addClass("hideQuestion");
        $(".layout__main .thanks").removeClass("hideThanks");
        var voteOptionsById = {};
        $(element).closest(".layout__main").find('#votingUpCheckBoxes input:checkbox:checked').each(function () {
            voteOptionsById[$(this).data("id")] = $(this).data("text");
        });
        $(element).closest(".layout__main").find('#votingDownCheckBoxes input:checkbox:checked').each(function () {
            voteOptionsById[$(this).data("id")] = $(this).data("text");
        });
        var appearAnonymous = $(element).closest(".layout__main").find(".eesy_anonymous_switch input").is(":checked");
        var data = { sessionKey: var_key, isUp: isUp, timeStamp: utils.createStamp(), reason: reason, appearAnonymous: appearAnonymous, votes: JSON.stringify(voteOptionsById) };
        $.post(var_dashboard_url + "/rest/helpitems/" + hid + "/votes?sessionkey=" + var_key, data, function () {
            if (isUp) {
                updateHelpItemVote(hid, true);
            }
            else {
                updateHelpItemVote(hid, false);
            }
        });
    }
    utils.onClickOrSelectKey('.quick-survey__answer_Sup', function (e, button) {
        var answer = $(button).data('answer');
        hid = $(button).data('helpitemId');
        var direction = answer ? "up" : "down";
        $(button).addClass("isSelected").siblings('.quick-survey__answer_Sup').removeClass("isSelected");
        $(".layout__main " + (answer ? ".__explain-upvoting" : ".__explain-downvoting")).removeClass("hideQuestion");
        $(".layout__main " + (!answer ? ".__explain-upvoting" : ".__explain-downvoting")).addClass("hideQuestion");
        $(".layout__main .thanks").addClass("hideThanks");
        $(".layout__main .__explain-upvoting .quick-survey__textarea").val("");
        $(".layout__main .__explain-downvoting .quick-survey__textarea").val("");
        $("#downVoteTextAreaLabel").hide();
        $("#upVoteTextAreaLabel").hide();
        $("#appearAnonymousUp").hide();
        $("#appearAnonymousDown").hide();
        if (settings.SUPPORTCENTER.VOTING.ANONYMOUSENABLED) {
            $("#appearAnonymousUp").show();
            $("#appearAnonymousDown").show();
        }
        else {
            $("#appearAnonymousUp").hide();
            $("#appearAnonymousDown").hide();
        }
        if (settings.SUPPORTCENTER.VOTINGOPTIONS.ENABLED) {
            $.getJSON(var_dashboard_url + "/rest/helpitems/options/voting?type=" + direction + "&sessionkey=" + var_key, function (votingoptions) {
                $(button).closest(".layout__main").find('#votingUpCheckBoxes').empty();
                $(button).closest(".layout__main").find('#votingDownCheckBoxes').empty();
                votingoptions.forEach(function (votingOption) {
                    var checkboxElement = '<input type="checkbox" data-id="' + votingOption.id + '" data-text="' + votingOption.caption + '">' + votingOption.caption + '<br>';
                    var appendToElement = direction === "up" ? '#votingUpCheckBoxes' : '#votingDownCheckBoxes';
                    $(button).closest(".layout__main").find(appendToElement).append(checkboxElement);
                });
                if (votingoptions.length === 0) {
                    $(button).closest(".layout__main").find('#votingDownCheckBoxesHeader').addClass("hideQuestion");
                    $(button).closest(".layout__main").find('#votingUpCheckBoxesHeader').addClass("hideQuestion");
                }
                else {
                    $("#downVoteTextAreaLabel").show();
                    $("#upVoteTextAreaLabel").show();
                }
            });
        }
    });
    // Messages
    utils.onClickOrSelectKey('.__explain-downvoting .form__submit', function (e, element) {
        var tempReason = $(element).parent().find(".quick-survey__textarea").val();
        sendVoteHint(tempReason, element, false);
    });
    utils.onClickOrSelectKey('.__explain-upvoting .form__submit', function (e, element) {
        var tempReason = $(element).parent().find(".quick-survey__textarea").val();
        sendVoteHint(tempReason, element, true);
    });
    function sendVoteHint(reason, element, isUp) {
        var voteOptionsById = {};
        $(element).closest(".quick-survey-section").children(".thanks").removeClass("hideThanks");
        $(element).closest(".quick-survey:not(.hideQuestion)").addClass("hideQuestion");
        // v2 messages container reset height
        resetContainerHeight(hid);
        $(element).closest(".quick-survey-section").find('#votingUpCheckBoxes input:checked').each(function () {
            voteOptionsById[$(this).data("id")] = $(this).data("text");
        });
        $(element).closest(".quick-survey-section").find('#votingDownCheckBoxes input:checked').each(function () {
            voteOptionsById[$(this).data("id")] = $(this).data("text");
        });
        var appearAnonymous = $(element).closest(".quick-survey-section").find(".eesy_anonymous_switch input").is(":checked");
        var data = { sessionKey: var_key, isUp: isUp, timeStamp: utils.createStamp(), reason: reason, appearAnonymous: appearAnonymous, votes: JSON.stringify(voteOptionsById) };
        $.post(var_dashboard_url + "/rest/helpitems/" + hid + "/votes?sessionkey=" + var_key, data, function () {
            if (isUp) {
                updateHelpItemVote(hid, true);
            }
            else {
                updateHelpItemVote(hid, false);
            }
        });
    }
    // click on one of the voting up/down buttons
    utils.onClickOrSelectKey('.quick-survey__answer', function (e, button) {
        var answer = $(button).data('answer');
        hid = $(button).data('helpitemId');
        var direction = answer ? "up" : "down";
        // v2 messages container reset height
        resetContainerHeight(hid);
        $(button).addClass("isSelected").siblings('.quick-survey__answer').removeClass("isSelected");
        $(button).closest(".quick-survey-section")
            .children(answer ? ".__explain-upvoting" : ".__explain-downvoting").removeClass("hideQuestion");
        $(button).closest(".quick-survey-section")
            .children(!answer ? ".__explain-upvoting" : ".__explain-downvoting").addClass("hideQuestion");
        $(button).closest(".quick-survey-section").children(".thanks").addClass("hideThanks");
        $(button).closest(".quick-survey-section").find('.__explain-upvoting').find(".quick-survey__textarea").val("");
        $(button).closest(".quick-survey-section").find('.__explain-downvoting').find(".quick-survey__textarea").val("");
        $(button).closest(".quick-survey-section").find("#downVoteTextAreaLabel").hide();
        $(button).closest(".quick-survey-section").find("#upVoteTextAreaLabel").hide();
        $(button).closest(".quick-survey-section").find("#appearAnonymousUp").hide();
        $(button).closest(".quick-survey-section").find("#appearAnonymousDown").hide();
        if (settings.SUPPORTCENTER.VOTING.ANONYMOUSENABLED) {
            $(button).closest(".quick-survey-section").find("#appearAnonymousUp").show();
            $(button).closest(".quick-survey-section").find("#appearAnonymousDown").show();
        }
        else {
            $(button).closest(".quick-survey-section").find("#appearAnonymousUp").hide();
            $(button).closest(".quick-survey-section").find("#appearAnonymousDown").hide();
        }
        if (settings.SUPPORTCENTER.VOTINGOPTIONS.ENABLED) {
            $.getJSON(var_dashboard_url + "/rest/helpitems/options/voting?type=" + direction + "&sessionkey=" + var_key, function (votingoptions) {
                $(button).closest(".quick-survey-section").find('#votingUpCheckBoxes').empty();
                $(button).closest(".quick-survey-section").find('#votingDownCheckBoxes').empty();
                votingoptions.forEach(function (votingOption) {
                    var checkboxElement = "" +
                        "<label class=\"eesy_hide_switch_voting\">\n" +
                        "   <input type=\"checkbox\" data-id=\"" + votingOption.id + "\" data-text=\"" + votingOption.caption + "\" >\n" +
                        "   <span class=\"eesy_voting_checkboxes\"></span>\n" +
                        "</label>\n" +
                        "<span class=\"eesy_hide_text_voting\">" + votingOption.caption + "</span>";
                    var appendToElement = direction === "up" ? '#votingUpCheckBoxes' : '#votingDownCheckBoxes';
                    $(button).closest(".quick-survey-section").find(appendToElement).append(checkboxElement);
                });
                // v2 messages container need more height when showing voting options
                var helpItemContainer = $('.eesy_container_v2[data-helpitemid=' + hid + ']');
                if (helpItemContainer.length) {
                    var containerHeight = helpItemContainer.height();
                    var votingHeight = $(helpItemContainer).find('.quick-survey-section').height();
                    helpItemContainer.css("min-height", containerHeight + votingHeight + "px");
                }
                if (votingoptions.length === 0) {
                    $(button).closest(".quick-survey-section").find('#votingDownCheckBoxesHeader').addClass("hideQuestion");
                    $(button).closest(".quick-survey-section").find('#votingUpCheckBoxesHeader').addClass("hideQuestion");
                }
                else {
                    $("#downVoteTextAreaLabel").show();
                    $("#upVoteTextAreaLabel").show();
                }
            });
        }
    });
    return {};
    function updateHelpItemVote(hid, answer) {
        helpItemLoader.loadHelpItem(hid, function (hi) {
            hi.voting.votedUp = answer;
            hi.voting.votedDown = !answer;
        });
    }
    function resetContainerHeight(hid) {
        var helpItemContainer = $('.eesy_container_v2[data-helpitemid=' + hid + ']'); // v2 messages
        if (helpItemContainer.length) {
            helpItemContainer.css("min-height", "0");
        }
    }
});
//# sourceMappingURL=quick-survey.js.map