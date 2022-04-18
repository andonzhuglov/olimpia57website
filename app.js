//send email from form
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "azhuglov@gmail.com",
        Password : "Donec895885201",
        To : 'sunwalker14@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Нова заявка в Олимпия 57 за " + document.getElementById("name").value,
        Body : "Име: " + document.getElementById("name").value
                + "<br> Имейл: " + document.getElementById("email").value
                + "<br> Телефон: " + document.getElementById("phone").value
                + "<br> Съобщение/Заявка: <br><br>" + document.getElementById("message").value
     }).then(
    message => alert("Благодарим ви! Заявката бе приета успешно и ще се свържим с вас скоро")
    );
}

