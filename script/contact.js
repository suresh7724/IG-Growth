
var submit=document.getElementById('submit');
submit.addEventListener('click',function()
{
    sendEmail();
})
    function sendEmail() {
    //   console.log("in function");

      let name = document.getElementById("name").value;
      // console.log(name);
      let email = document.getElementById("email").value;
      // console.log(email);
      let message = document.getElementById("message").value;
      // console.log(message);

      Email.send({
        Host: "imap.gmail.com",
        Username: "testersuresh2@gmail.com",
        Password: "tester@2",
        To: "testersuresh2@gmail.com",
        From: "testersuresh2@gmail.com",
        Subject: `${name} sent you massage`,
        Body: `  Name: ${name}
      <br>
      Email: ${email}
      <br>
      Message: ${message}`,
      }).then(
      //  console.log('message sent')
      $('.alert').removeClass('d-none')
       
  );
    }

    
