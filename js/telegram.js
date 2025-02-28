
    function sendTelegramMessage() {

        const customerEmail = prompt("Please enter your email for enquiry:");

        if (customerEmail) {
            const botToken = "7903084768:AAEj5nH2RKEEx7Oth6p-513t9T2je-OVis4";
            const chatId = "1079954718";
            const message = `A customer needs an enquiry.\nEmail: ${customerEmail}`;

            const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        alert("You will be contacted shortly via mail!");
                    } else {
                        alert("Failed to send message.");
                    }
                })
                .catch((error) => {
                    alert("Error sending message: " + error);
                });
        }
    }
