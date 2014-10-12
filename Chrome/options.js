function save_options() {
  var useScrollbar = document.getElementById('scrollbar').checked;
  chrome.storage.sync.set({
    useScrollbar: useScrollbar
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    useScrollbar: true
  }, function(items) {
    document.getElementById('scrollbar').checked = items.useScrollbar;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);