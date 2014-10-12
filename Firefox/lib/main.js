var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.facebook.com",
  contentScriptFile: [data.url("jquery-1.11.1.min.js"), data.url("jquery.slimscroll.min.js"), data.url("fixed_navbar.js")],
  contentStyleFile: data.url("fixed_navbar.css"),
  contentScriptWhen: "end"
});