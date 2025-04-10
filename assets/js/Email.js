document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("emailForm"); //Form ID
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); //Prevent submission as soon as you hit the "Send Message" Button

        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        let subject = "New message from " + name;
        let body = encodeURIComponent(message); //Put the message on the webpage to the email

		window.location.href = "mailto:cruizink9@gmail.com?subject=" //Open the users default email
        + encodeURIComponent(subject) + "&body=" + body; //Pass over the subject and the body
    })
})
