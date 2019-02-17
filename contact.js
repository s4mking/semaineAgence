document.addEventListener("DOMContentLoaded", () =>
{
    var form = document.querySelector("form");

    form.addEventListener("submit", (e) =>
    {
        e.preventDefault();

        var nom = document.querySelector(".nom");
        var prenom = document.querySelector(".prenom");
        var email = document.querySelector(".email");
        var message = document.querySelector(".message");

        var body = "Message de " + nom.value + " " + prenom.value + " " + email.value + " : " + message.value;

        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "antho.demorais@gmail.com",
            Password : "73d69b95-497c-4c67-b5c8-06728c6b7975",
            To : 'anthonyd-m@live.com',
            From : "antho.demorais@gmail.com",
            Subject : "Message depuis le formulaire de contact",
            Body : body
        }).then(
          message => alert(message)
        );
    })
});