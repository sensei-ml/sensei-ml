var originalTitle = document.title;
window.onblur = function() {
    document.title = "Ey! get back.";
};
window.onfocus = function() {
    document.title = originalTitle;
};
