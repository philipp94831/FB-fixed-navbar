var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.facebook.com",
  contentScriptFile: data.url("fixed_navbar.js"),
  contentStyleFile: data.url("fixed_navbar.css"),
  contentScriptWhen: "end"
});