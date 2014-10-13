var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var prefs = require("sdk/simple-prefs").prefs;

pageMod.PageMod({
  include: "*.facebook.com",
  contentScriptFile: [data.url("jquery-1.11.1.min.js"), data.url("jquery.slimscroll.min.js"), data.url("platform.js"), data.url("fixed_navbar.js")],
  contentStyleFile: data.url("fixed_navbar.css"),
  contentScriptWhen: "end",
  onAttach: function(worker) {
    worker.port.emit("useScrollbar", prefs.useScrollbar);
  }
});