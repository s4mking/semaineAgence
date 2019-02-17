document.addEventListener("DOMContentLoaded", () =>
{
    (function(d, w, t) {
        var s = "http://bot_6.askmonastudio.com",
            wa = "DOonfGTWefOQU8Hw8TfHm2eNyuv594ELcA76CtHs",
            $ = d.createElement(t),
            e = d.getElementsByTagName(t)[0];
        $.src = s + "/webchat?wat=" + wa;
        $.style.display = "none";
        $.allow = "geolocation";
        $.onMessage = function(e)
        {
            if (e.origin === s ) // src message
            {
                const msg = JSON.parse(e.data);
                for (var key in msg.style)
                    $.style[key] = msg.style[key];
            }
        }
    
        if (w.addEventListener)
            w.addEventListener('message', $.onMessage, false);
        else if (e.attachEvent) // alternative pour IE
            w.attachEvent('onmessage', $.onMessage);
    
        d.body.appendChild($);
    })(document, window, "iframe");
});