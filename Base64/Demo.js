function preBack() {
    history.pushState(null, null, location.href);
    // history.go(-(history.length-1));
    window.onload = function () {return null};
}

preBack();