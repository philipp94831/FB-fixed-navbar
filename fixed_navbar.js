setInterval(foo, 50);
function foo() {
    var pagelet_navigation = document.getElementById('pagelet_navigation');
    if (document.getElementById('leftColWrapper') === null && pagelet_navigation !== null) {
        var mainContainer = document.getElementById('mainContainer');
        var leftCol = document.getElementById('leftCol');
        var contentCol = document.getElementById('contentCol');
        var leftColWrapper = document.createElement('div');
        var scrollbarHider = document.createElement('div');
        var navigationWrapper = document.createElement('div');
        leftColWrapper.id = 'leftColWrapper';
        scrollbarHider.id = 'scrollbarHider';
        navigationWrapper.id = 'navigationWrapper';
        mainContainer
            .appendChild(leftColWrapper)
            .appendChild(leftCol)
            .appendChild(scrollbarHider)
            .appendChild(navigationWrapper)
            .appendChild(pagelet_navigation);
        mainContainer.appendChild(contentCol);
    }
}