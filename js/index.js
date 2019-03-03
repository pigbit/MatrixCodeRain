var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var s = window.screen;
var w = s.width;
var h = s.height;
canvas.width = w;
canvas.height = h;
var fontSize = 14;
var cols = Math.ceil(w / fontSize);
var drops = [];
var str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890`~!@#$%^&*()_+-=[]{}\\|;':\",./<>?·！￥……（）——【】｛｝；：’”，《。》、？";
for (var i = 0; i < cols; i++) {
    drops.push(0);
}

function drawText() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#00FF00";
    ctx.font = "600 " + fontSize + "px Consolas";
    for (var i = 0; i < cols; i++) {
        var x = fontSize * i;
        var y = drops[i] * fontSize;
        ctx.fillText(str[Math.floor(Math.random() * str.length)], x, y);
        if (y > h && Math.random() > 0.99) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawText, 27);