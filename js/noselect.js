window.onload = function () {
    //阻止默认事件
    document.onselectstart = function () {
        return false;
    }
}