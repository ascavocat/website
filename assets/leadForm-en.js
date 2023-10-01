document.getElementById('leadForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Resetting the placeholders to default
    e.target.name.placeholder = 'Name';
    e.target.email.placeholder = 'Email';
    e.target.phone.placeholder = 'Phone';
    e.target.message.placeholder = 'Message';

    // Form fields validation
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();
    const phone = e.target.phone.value.trim();
    const language = e.target.language.value;

    let hasError = false; // To check if any validation error occurs

    if (!name) {
        e.target.name.placeholder = 'Name is required!';
        e.target.name.style.borderColor = 'red';
        hasError = true;
    } else {
        e.target.name.style.borderColor = '';
    }

    if (!email) {
        e.target.email.placeholder = 'Email is required!';
        e.target.email.style.borderColor = 'red';
        hasError = true;
    } else {
        e.target.email.style.borderColor = '';
    }

    if (!phone) {
        e.target.phone.placeholder = 'Phone number is required!';
        e.target.phone.style.borderColor = 'red';
        hasError = true;
    } else {
        e.target.phone.style.borderColor = '';
    }

    if (!message) {
        e.target.message.placeholder = 'Message is required!';
        e.target.message.style.borderColor = 'red';
        hasError = true;
    } else {
        e.target.message.style.borderColor = '';
    }

    // reCAPTCHA validation
    const recaptchaValue = grecaptcha.getResponse();
if (!recaptchaValue) {
    document.getElementById('recaptchaError').innerText = "Please verify you're not a robot.";
    return;
} else {
    // Clear any previous error
    document.getElementById('recaptchaError').innerText = "";
}

    if (hasError) return; // If there's any error, don't continue with the form submission

    // Construct the form data as an HTML table for the message
    const formattedMessage = `
    <table style="width:100%; border-collapse: collapse; border: 1px solid #e0e0e0; font-family: Arial, sans-serif;">
        <thead>
            <tr style="background-color: #007BFF; color: #fff;">
                <th colspan="2" style="padding: 10px; border: 1px solid #e0e0e0; text-align: center;">CLIENT'S INFORMATION</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border: 1px solid #e0e0e0;"><strong>Name</strong></td>
                <td style="padding: 10px; border: 1px solid #e0e0e0;">${name}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #e0e0e0;"><strong>Email</strong></td>
                <td style="padding: 10px; border: 1px solid #e0e0e0;">${email}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #e0e0e0;"><strong>Phone</strong></td>
                <td style="padding: 10px; border: 1px solid #e0e0e0;">${phone}</td>
            </tr>
            <tr style="background-color: #f2f2f2;">
                <td style="padding: 10px; border: 1px solid #e0e0e0;"><strong>Message</strong></td>
                <td style="padding: 10px; border: 1px solid #e0e0e0;">${message}</td>
            </tr>
        </tbody>
    </table>
    `;

    const formData = {
        Name: name,
        Email: email,
        Message: formattedMessage,
        Phone: phone,
        Language: language,
        RecaptchaResponse: recaptchaValue  // include the ReCAPTCHA token
    };

    try {
        const response = await fetch('https://emailsendfunctionasc.azurewebsites.net/api/EmailSendFunction?code=k9cdJ6VS-J_X5BIv876OhZu93Mp3JgZ6u9EuDNH4WE_HAzFuPJ7ouw==', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.text();

        if (response.ok) {
            alert("Thank you for your message. We'll get back to you shortly.");
            document.getElementById('leadForm').reset(); // Reset form only on successful submission
        } else {
            alert(result);  // Display the error message from the server
        }

    } catch (error) {
        alert('There was an error with the submission. Please try again later.');
    }
});