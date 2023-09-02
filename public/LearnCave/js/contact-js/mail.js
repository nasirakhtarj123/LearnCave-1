function sendeMail(){

	var email=document.getElementById("email").value;
	var from_name=document.getElementById("name").value;
	var message=document.getElementById("message").value;

	var templateParams = {
        email: email,
        from_name: from_name,
		message: message
      };
      const serviceId = "service_o69max9";
      const templateId = "template_0rjpuef";
      emailjs.send(serviceId, templateId, templateParams)
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
     window.alert("Sent successfully!");
     
  })
}