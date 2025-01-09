
const nodeMailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

const htmlTemplate = fs.readFileSync(path.join(__dirname, 'mailtemp.html'), 'utf8');

const recipients = [
    { name: 'Anupriya Chaudhary', email: 'tempmovie08@gmail.com', company: 'PhysicsWallah' },
];

async function sendEmails() {
    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            // user: 'sanjeev19203@gmail.com',
            // pass: 'zjvjehdewjulozvc',
            user: 'sanjeevkumar718191@gmail.com',
            pass: 'yqfidqwuzgjuktyv' 
        }
    });

    for (const recipient of recipients) {
        // Customize the email content for each recipient
        const personalizedHtml = htmlTemplate
            .replace('{{name}}', recipient.name)
            .replaceAll('{{company}}', recipient.company);

        try {
            const info = await transporter.sendMail({
                from: {
                    name: 'Sanjeev Kumar',
                    address: 'sanjeevkumar718191@gmail.com'
                },
                to: recipient.email,
                // subject: `Hello ${recipient.name}, Excited to Connect!`,
                subject: `Request for referral at ${recipient.company}: Sanjeev Kumar`,
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
