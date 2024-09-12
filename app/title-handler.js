var originalTitle = document.title;
window.onblur = function() {
    document.title = "Where are you going?";
};
window.onfocus = function() {
    document.title = originalTitle;
};
