




//sessionkey
var var_key = "24e2ad54-d12b-11ea-ab56-129323868656";
var var_dashboard_url = "https://auburn.eesysoft.com";
var var_loadfile = "https://auburn.eesysoft.com/loadFile";
var var_style_path = "https://auburn.eesysoft.com/resources/";
var var_stamp = "20200729033630";
var var_eesy_build = "15267";
var var_eesy_dbUpdateCount = "552";
var var_eesy_userUpdated = undefined;
var var_eesy_style_checksum = "d41d8cd98f00b204e9800998ecf8427e";
var var_show_tab_initial = false;
var var_show_tab = var_show_tab_initial;
var var_open_dashboard_in_new_window = false;
var var_tab_version = 2;
var var_proactive_version = 3;
var var_proactive_lms = "canvas";
var var_proactive_dark = true;
var var_open_as_chat = false;
var var_moveable_tab = true;
var var_language = -1;
var var_uefMode = false;
var var_uefModeOriginal = !var_uefMode && (window.name === "classic-learn-iframe");
var var_uefModeOriginalUseUefSupportCenter = false;
var var_loadExpertTool = true;
var templates;
var waitforload = false;
var supportTabMinimized = undefined;
var scrollbarRightAdjust = '19px';
var supportTabMoveLimit = '50';
var eesy_minimizedTabWidth = '8px';
var eesy_maximizedTabWidth = '';
var attemptUnobscure = false;
var doNotLoadEngineForUserAgentPattern = 'not_in_use_05231;';
var var_eesy_hiddenHelpItems = undefined;
var var_eesy_sac = undefined;
var var_eesy_helpitemsSeen = undefined;

function eesy_load_js(jsUrl) {
  var fileref = document.createElement("script");
  fileref.setAttribute("type", "text/javascript");
  fileref.setAttribute("src", jsUrl);
  document.getElementsByTagName("head")[0].appendChild(fileref);
}

eesy_load_js(var_dashboard_url + "/loader.js?u=" + var_eesy_build);
