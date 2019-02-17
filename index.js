var isOnApp = false;

document.addEventListener("DOMContentLoaded", () =>
{
    if (window.innerWidth <= 725)
    {
        document.querySelector(".menuIcon").src = "./images/menuBlanc.png";
    }

    var canvas = document.querySelector("canvas");
    var discover = document.querySelector("button");

    var masque = document.querySelector("#masque");

    discover.addEventListener("click", () =>
    {
        isOnApp = true;

        var wavesScript = document.querySelector('#wavesScript');
        wavesScript.parentElement.removeChild(wavesScript);

        masque.style.transition = "0s";

        if (window.innerWidth <= 725)
        {
            masque.style.transform = "rotate(0deg)";
        }

        masque.style.transition = "2s";
        masque.style.top = "-630px";
        masque.style.right = "-500px";
        masque.style.width = "4000px";
        masque.style.height = "1500px";

        document.querySelector("button").style.display = "none";

        setTimeout(() =>
        {
            masque.style.transition = "1s";
            masque.style.backgroundColor = "white";
            document.querySelector(".center").style.display = "none";
            document.querySelector(".deco1").style.display = "none";
            document.querySelector(".deco1_2").style.display = "none";
            canvas.style.display = "none";
        }, 1500);

        setTimeout(() =>
        {
            document.querySelector("#masque").style.display = "none";
            document.querySelector(".menu").style.zIndex = "4";
            document.querySelector(".appPresentation").style.display = "flex";
            document.querySelector(".scroll").style.display = "flex";
            document.querySelector(".deco2").style.display = "block";
            document.querySelector(".iphone").style.display = "block";

            console.log(window.innerWidth);

            if (window.innerWidth <= 725)
            {
                document.querySelector(".menuIcon").src = "./images/menu.png";
            }
        }, 2500);
    });
});