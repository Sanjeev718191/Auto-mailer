
const nodeMailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

// Read the HTML template
const htmlTemplate = fs.readFileSync(path.join(__dirname, 'mailtemp.html'), 'utf8');

// List of recipients
const recipients = [
    { name: 'Sanjeev Kumar', email: 'tempmovie08@gmail.com', company: 'ABC Corp' },
    // { name: 'Jane Smith', email: 'sanjeev718191@gmail.com', company: 'XYZ Ltd' },
    // { name: 'Alice Johnson', email: 'sanjeev718191@gmail.com', company: 'Tech Solutions' }
];

async function sendEmails() {
    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'sanjeev19203@gmail.com',
            pass: 'zjvjehdewjulozvc' // Replace with your actual app password
        }
    });

    for (const recipient of recipients) {
        // Customize the email content for each recipient
        const personalizedHtml = htmlTemplate
            .replace('{{name}}', recipient.name)
            .replace('{{company}}', recipient.company);

        try {
            const info = await transporter.sendMail({
                from: {
                    name: 'Sanjeev Kumar',
                    address: 'sanjeev19203@gmail.com'
                },
                to: recipient.email,
                subject: `Hello ${recipient.name}, Excited to Connect!`,
                html: personalizedHtml,
                attachments: [{
                    filename: 'Sanjeev.pdf',
                    path: path.join(__dirname, 'Sanjeev_n.pdf'),
                    contentType: 'application/pdf'
                }]
            });

            console.log(`Message sent to ${recipient.name} (${recipient.email}): ${info.messageId}`);
        } catch (error) {
            console.error(`Failed to send email to ${recipient.name} (${recipient.email}):`, error);
        }
    }
}

sendEmails()
    .catch(e => console.error(e));
