
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "deonsanchez6@gmail.com",
        Password : "706EFF27EBCFD328815416D07F52318008B5",
        To : 'amohammad@momentumsolar.com',
        From : document.getElementById("email").value,
        Subject : "new contact form inquery",
        Body : `Name: ${document.getElementById("first-name").value} ${document.getElementById("last-name").value}<br>
        Number: ${document.getElementById("phone-number").value}<br>
        Message: ${document.getElementById("message").value}`,
    }).then(message => alert(message)
    );
} 