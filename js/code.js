(function () {
    var pre = document.createElement('pre');
    pre.classList.add('code');
    var codestr = document.getElementById('code').innerHTML;
    pre.innerHTML = codestr;
    document.body.appendChild(pre);
}());