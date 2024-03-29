document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Form fields validation
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();
    const phone = e.target.phone.value.trim();
    const language = e.target.language.value; // This won't be empty due to dropdown default

    if (!name) {
        showModal('Name is required.');
        return;
    }

    if (!email) {
        showModal('Email is required.');
        return;
    }

    if (!phone) {
        showModal('Phone number is required.');
        return;
    }

    if (!message) {
        showModal('Message is required.');
        return;
    }

    // reCAPTCHA validation
    const recaptchaValue = grecaptcha.getResponse();
    if (!recaptchaValue) {
        showModal("Please verify you're not a robot.");
        return;
    }

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
            showModal("Thank you for your message. We'll get back to you shortly.");
            document.getElementById('contactForm').reset(); // Reset form only on successful submission
        } else {
            showModal(result);  // Display the error message from the server
        }

    } catch (error) {
        showModal('There was an error with the submission. Please try again later.');
    }
});

// Function to display modal with custom message
function showModal(message) {
    document.querySelector('#modalMessage').textContent = message;
    document.querySelector('.modal').classList.add('is-active');
}

// To close the modal
document.querySelector('.modal-close').addEventListener('click', function () {
    document.querySelector('.modal').classList.remove('is-active');
});

// Modal on contact page - address icon box - handing with Vanilla JavaScript

document.getElementById("showAddressModal").addEventListener("click", function() {
    document.getElementById("addressModal").classList.add("is-active");
  });
  
  document.getElementById("closeAddressModal").addEventListener("click", function() {
    document.getElementById("addressModal").classList.remove("is-active");
  });
  
  document.getElementById("addressModalBackground").addEventListener("click", function() {
    document.getElementById("addressModal").classList.remove("is-active");
  });