setInterval(fixNavbar, 50);
window.addEventListener('resize', handleResize);

function handleResize() {
  var scrollbarHider = document.getElementById('scrollbarHider');
  if (scrollbarHider !== null) {
    scrollbarHider.style.display = 'none';
    dummy = scrollbarHider.offsetHeight;
    scrollbarHider.style.display = 'block';
  }
  if (document.getElementById('navigationWrapper') !== null) {
    handleScrollState();
  }
}

function fixNavbar() {
  if (document.getElementById('leftColWrapper') === null && document.getElementById('pagelet_navigation') !== null) {
    
    setUpDOM();
    
    setUpEventListeners();
    
    initializeScrollbar($('#navigationWrapper'));
    
  }
}

function setUpDOM() {
  
  var pagelet_navigation = document.getElementById('pagelet_navigation');
  var mainContainer = document.getElementById('mainContainer');
  var leftCol = document.getElementById('leftCol');
  var contentCol = document.getElementById('contentCol');
  
  var leftColWrapper = document.createElement('div');
  var scrollbarHider = document.createElement('div');
  var navigationWrapper = document.createElement('div');
  var mainScrollShade = document.createElement('div');
  var scrollShade = document.createElement('div');
  
  leftColWrapper.id = 'leftColWrapper';
  scrollbarHider.id = 'scrollbarHider';
  navigationWrapper.id = 'navigationWrapper';
  mainScrollShade.id = 'mainScrollShade';
  mainScrollShade.className = 'scrollShade';
  scrollShade.id = 'scrollShade';
  scrollShade.className = 'scrollShade';
  
  mainContainer
    .appendChild(leftColWrapper)
    .appendChild(leftCol)
    .appendChild(scrollbarHider)
    .appendChild(mainScrollShade);
  scrollbarHider.appendChild(scrollShade);
  scrollbarHider
    .appendChild(navigationWrapper)
    .appendChild(pagelet_navigation);
  mainContainer.appendChild(contentCol);
  
}

function handleScrollState() {
  if (document.getElementById('navigationWrapper').scrollTop !== 0) {
    $('#mainScrollShade').addClass('scrolled');
  } else {
    $('#mainScrollShade').removeClass('scrolled');
  }
}

function setUpEventListeners() {
  
  $('#navigationWrapper').hover(function() {
    $('#mainScrollShade').addClass('hovered');
  }, function() {
    $('#mainScrollShade').removeClass('hovered');
  });
  
  $('#navigationWrapper').scroll(function() {
    handleScrollState();
  });
  
}

function initializeScrollbar(element) {
  
  $.when(element.slimScroll({
    height: '100%',
    distance: '8px'
  })).done(function() {
    document.getElementsByClassName('slimScrollBar')[0].style.display = 'none';
    handleOptions();
  });
  
}