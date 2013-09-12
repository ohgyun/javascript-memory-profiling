(function () {
    // 코드 출력
    var pre = document.createElement('pre');
    pre.classList.add('code');
    var codestr = document.getElementById('code').innerHTML;
    pre.innerHTML = codestr;
    document.body.appendChild(pre);

    // 버튼명에 함수 출력
    var buttons = document.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
        var onclick = buttons[i].getAttribute('onclick');
        if (onclick) {
            buttons[i].innerHTML += ('<br><span class="func">' + onclick + '</span>');
        }
    }
}());