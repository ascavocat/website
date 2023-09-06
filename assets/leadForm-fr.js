document.getElementById('leadForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Réinitialiser les placeholders à leurs valeurs par défaut
    e.target.name.placeholder = 'Nom';
    e.target.email.placeholder = 'Email';
    e.target.phone.placeholder = 'Téléphone';
    e.target.message.placeholder = 'Message';

    // Validation des champs du formulaire
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();
    const phone = e.target.phone.value.trim();
    const language = e.target.language.value;

    let hasError = false; // Pour vérifier si une erreur de validation se produit

    if (!name) {
        e.target.name.placeholder = 'Le nom est requis !';
        e.target.name.style.borderColor = 'red';
        hasError = true;
    } else {
        e.target.name.style.borderColor = '';
    }

    if (!email) {
        e.target.email.placeholder = 'L\'email est requis !';
        e.target.email.style.borderColor = 'red';
        hasError = true;
    } else {
        e.target.email.style.borderColor = '';
    }

    if (!phone) {
        e.target.phone.placeholder = 'Le numéro de téléphone est requis !';
        e.target.phone.style.borderColor = 'red';
        hasError = true;
    } else {
        e.target.phone.style.borderColor = '';
    }

    if (!message) {
        e.target.message.placeholder = 'Le message est requis !';
        e.target.message.style.borderColor = 'red';
        hasError = true;
    } else {
        e.target.message.style.borderColor = '';
    }

    // Validation reCAPTCHA
    const recaptchaValue = grecaptcha.getResponse();
    if (!recaptchaValue) {
        document.getElementById('recaptchaError').innerText = "Veuillez vérifier que vous n'êtes pas un robot.";
        return;
    } else {
        // Effacer toute erreur précédente
        document.getElementById('recaptchaError').innerText = "";
    }

    if (hasError) return; // S'il y a une erreur, ne pas continuer la soumission du formulaire

    // Construire les données du formulaire sous forme de table HTML pour le message
    const formattedMessage = `
    <table style="width:100%; border-collapse: collapse; border: 1px solid #e0e0e0; font-family: Arial, sans-serif;">
        <thead>
            <tr style="background-color: #007BFF; color: #fff;">
                <th colspan="2" style="padding: 10px; border: 1px solid #e0e0e0; text-align: center;">INFORMATIONS DU CLIENT</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border: 1px solid #e0e0e0;"><strong>Nom</strong></td>
                <td style="padding: 10px; border: 1px solid #e0e0e0;">${name}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #e0e0e0;"><strong>Email</strong></td>
                <td style="padding: 10px; border: 1px solid #e0e0e0;">${email}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #e0e0e0;"><strong>Téléphone</strong></td>
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
        Language: language
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
            alert("Merci pour votre message. Nous vous répondrons sous peu.");
            document.getElementById('leadForm').reset(); // Réinitialiser le formulaire uniquement en cas de soumission réussie
        } else {
            alert(result);  // Afficher le message d'erreur du serveur
        }

    } catch (error) {
        alert('Il y a eu une erreur lors de la soumission. Veuillez réessayer plus tard.');
    }
});
