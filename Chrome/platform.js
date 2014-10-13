function handleOptions() {
  chrome.storage.sync.get({
    useScrollbar: true
  }, function(items) {
    if (!items.useScrollbar) {
      $('.slimScrollBar').remove();
      $('.slimScrollRail').remove();
    }
  });
}