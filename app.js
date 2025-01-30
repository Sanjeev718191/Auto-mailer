const nodeMailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

// Load HTML templates
const htmlTemplate1 = fs.readFileSync(path.join(__dirname, 'mailtemp.html'), 'utf8');
const htmlTemplate2 = fs.readFileSync(path.join(__dirname, 'mailtemp2.html'), 'utf8');
const htmlTemplate3 = fs.readFileSync(path.join(__dirname, 'mailtemp3.html'), 'utf8');

// Attachments
const attachments1 = [{ filename: 'Sanjeev.pdf', path: path.join(__dirname, 'Sanjeev_n.pdf'), contentType: 'application/pdf' }];
const attachments2 = [{ filename: 'Sanjeev.pdf', path: path.join(__dirname, 'Sanjeev_new_2.pdf'), contentType: 'application/pdf' }];
const attachments3 = [{ filename: 'Sanjeev.pdf', path: path.join(__dirname, 'Sanjeev_new_3.pdf'), contentType: 'application/pdf' }];

// List of targeted people of top statups 
// Send from sanjeevkumar718191
const recipients1 = [
    // { name: 'Rahul Garg', email: 'tempmovie08@gmail.com', company: 'Moglix' },
    { name: 'Harshit Kunder', email: 'harshit.k@zetwerk.com', company: 'Zetwerk' },
    { name: 'Anjali Pant', email: 'anjali.p@zetwerk.com', company: 'Zetwerk' },
    { name: 'Nikhil Kewadkar', email: 'nikhil.k@zetwerk.com', company: 'Zetwerk' },
    { name: 'Arun N', email: 'arunkumar.n@zetwerk.com', company: 'Zetwerk' },
    { name: 'Abhishek Dixit', email: 'abhishek.dixit@zetwerk.com', company: 'Zetwerk' },
    { name: 'Kathyayini', email: 'kathyayini.b@zetwerk.com', company: 'Zetwerk' },
    { name: 'Sidharth Pillai', email: 'sidharth.p@zetwerk.com', company: 'Zetwerk' },
    { name: 'Amit Kumar', email: 'amit.kumar2@zetwerk.com', company: 'Zetwerk' },
    { name: 'Shalini Gusain', email: 'shalini.g@zetwerk.com', company: 'Zetwerk' },
    { name: 'Ginu Nair', email: 'ginu.n@zetwerk.com', company: 'Zetwerk' },
    { name: 'Prasanta Biswas', email: 'prasanta.b@zetwerk.com', company: 'Zetwerk' },
    { name: 'Surendra Rajput', email: 'surendra.r@zetwerk.in', company: 'Zetwerk' },
    { name: 'Santosh Yadav', email: 'santosh.yadav@zetwerk.com', company: 'Zetwerk' },
    { name: 'Rajiv Jha', email: 'rajiv.jha@zetwerk.com', company: 'Zetwerk' },
    { name: 'Anurag Misra', email: 'anurag.misra@zetwerk.com', company: 'Zetwerk' }
];

// List of targeted people 
// Send from sanjeev718191
const recipients2 = [
    // { name: 'Anupriya Chaudhary', email: 'tempmovie08@gmail.com', company: 'PhysicsWallah' },
];

// List of random people 
// Send from sanjeev19203
const recipients3 = [
    // { name: 'Anupriya Chaudhary', email: 'tempmovie08@gmail.com', company: 'PhysicsWallah' },
];

// Sender email credentials
const senderDetails = [
    { user: 'sanjeevkumar718191@gmail.com', pass: 'yqfidqwuzgjuktyv', recipients: recipients1, template: htmlTemplate1, attachments: attachments1 },
    { user: 'sanjeev718191@gmail.com', pass: 'cqzpcdvuixpbkooe', recipients: recipients2, template: htmlTemplate2, attachments: attachments2 },
    { user: 'sanjeev19203@gmail.com', pass: 'zjvjehdewjulozvc', recipients: recipients3, template: htmlTemplate3, attachments: attachments3 },
];

async function sendEmails() {
    for (const sender of senderDetails) {
        const transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: sender.user,
                pass: sender.pass,
            },
        });

        for (const recipient of sender.recipients) {
            // Customize the email content for each recipient
            const personalizedHtml = sender.template
                .replace('{{name}}', recipient.name)
                .replaceAll('{{company}}', recipient.company);

            try {
                const info = await transporter.sendMail({
                    from: {
                        name: 'Sanjeev Kumar',
                        address: sender.user,
                    },
                    to: recipient.email,
                    subject: `Request for referral at ${recipient.company}: Sanjeev Kumar`,
                    html: personalizedHtml,
                    attachments: sender.attachments,
                });

                console.log(`Message sent to ${recipient.name} (${recipient.email}) from ${sender.user}: ${info.messageId}`);
            } catch (error) {
                console.error(`Failed to send email to ${recipient.name} (${recipient.email}) from ${sender.user}:`, error);
            }
        }
    }
}

sendEmails()
    .catch((e) => console.error(e));
