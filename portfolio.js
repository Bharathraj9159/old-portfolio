const scriptURL='https://script.google.com/macros/s/AKfycbxsxyqMqpCvr-D7fwQ7QEi8NmDabTXNH9_GadG1zK8C4vT_ewa4NWcP6-QkoAdI-8YT/exec'

const form = document.forms['contact-form']

form.addEventlistener('submit', e => {
e.preventDefault()
fetch(scriptURL,{ method: 'POST', body:new FormatData(form)})
.then(response => alert("THank you! your form is submitted successfully."))
.then(()=>{window.location.reload();})
.catch(error => console.error('Error!',error.message))
})