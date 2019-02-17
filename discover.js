document.addEventListener("DOMContentLoaded", () =>
{
    var appPresentation = document.querySelector(".appPresentation");

    appPresentation.addEventListener("scroll", (e) =>
    {
        var scrollPosition = e.target.scrollTop
        var iphone = document.querySelector(".iphone")

        if (scrollPosition >= 0 && scrollPosition < 300)
        {
            iphone.src = "./images/gamification.png"
        }
        else if (scrollPosition >= 300 && scrollPosition < 600)
        {
            iphone.src = "./images/accueil.png";
        }
        else if (scrollPosition >= 900)
        {
            iphone.src = "./images/selfart.png"
        }
    });
    /*var counter = 0;
    document.querySelector(".appPresentation").addEventListener("scroll", scrollEvent);
    document.querySelector(".scrollImage").addEventListener("click", scrollEvent);

    var texts = document.querySelectorAll(".presText");

    function scrollEvent(event)
    {
        if ((counter + 4) <= (texts.length - 1))
        {
            if (counter % 2 == 0)
            {
                texts[counter].style.top = "-255px";
                texts[counter+1].style.top = "-255px";
                texts[counter+2].style.top = "250px";
                texts[counter+3].style.top = "70px";
            }
            else
            {
                texts[counter+1].style.top = "-255px";
                texts[counter+2].style.top = "-255px";
                texts[counter+3].style.top = "70px";
                texts[counter+4].style.top = "250px";
            }

            counter++;
            event.preventDefault();
        }
    }*/


});

// parcours => dessin => selfie