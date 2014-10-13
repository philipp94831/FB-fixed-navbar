var useScrollbar;

function handleOptions() {
  if (!useScrollbar) {
    $('.slimScrollBar').remove();
    $('.slimScrollRail').remove();
  }
}

self.port.on("useScrollbar", function(value) {
    useScrollbar = value;
});