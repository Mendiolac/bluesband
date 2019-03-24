// setBgColor sets the background color on the message-input on the contact form. 
function setBgColor() {
    $("#message-input").css("background-color", "#faffbd");
    $("#message-input").css("color", "#000000");
  };
  
  // ======================================< main process >============================================ // 
  $(function () {
  
    console.log("innerWidth: " + window.innerWidth);
    console.log("innerHeight: " + window.innerHeight);

  
    // the following code sends contact info to Mailgun api.
    $("#contact-btn").on("click", function (event) {
      event.preventDefault();
      // save message from the contact form
      const messageObj = {
       name: $("#name-input").val().trim(),
        company: $("#company-input").val().trim(),
        email: $("#email-input").val().trim(),
        phone: $("#phone-input").val().trim(),
        subject: $("#subject-input").val().trim(),
        message: $("#message-input").val().trim()
      };
      // clear form fields
      $("#contact-form")[0].reset();
      $("#message-input").css("background-color", "#fff5e6");
      // send the message 
      $.post("/send", messageObj)
        .then(res => {
          if(res.status == "200") {
            // if message is sucessful, send a confirmation to the form
            contactMsgTime = 5;
            bldContactMsgCfm(); 
          }
        });
    });
  
   
  });