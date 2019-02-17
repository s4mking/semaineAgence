document.addEventListener("DOMContentLoaded", () =>
{
    var menu = document.querySelector(".menuIcon");
    var oldIcon;

    function deroule()
    {
        if (window.innerWidth <= 1120 && isOnApp == true)
        {
            oldIcon = "./images/menu.png";
        }
        else if (window.innerWidth <= 1120 && isOnApp == false)
        {
            oldIcon = "./images/menuBlanc.png";
        }
        console.log("deroule");
        document.querySelector(".menuDeroulant").style.display = "flex";
        menu.src = "./images/croix.png";

        menu.addEventListener("click", enroule);
    }

    function enroule()
    {
        console.log("enroule");
        document.querySelector(".menuDeroulant").style.display = "none";
        menu.src = oldIcon;
        menu.removeEventListener("click", enroule);
        menu.addEventListener("click", deroule);
    }

    menu.addEventListener("click", deroule);
});