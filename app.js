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
];

// List of targeted people 
// Send from sanjeev718191
const recipients2 = [
    // { name: 'Anupriya Chaudhary', email: 'tempmovie08@gmail.com', company: 'PhysicsWallah' },
    { name: 'Chatla Supritha', email: 'chatla.supritha@amazon.com', company: 'AWS' },
    { name: 'Sonia Vuillermoz', email: 'soniav@amazon.fr', company: 'AWS' },
    { name: 'Lenosha Moore', email: 'lenosha.moore@gm.com', company: 'AWS' },
    { name: 'Felicitee Stevenson', email: 'felicitees@amazon.com', company: 'AWS' },
    { name: 'Charlotte M.', email: 'charlottem@amazon.com', company: 'AWS' },
    { name: 'Javier Valencia Giraldo', email: 'girjavie@amazon.com', company: 'AWS' },
    { name: 'Shaily', email: 'shailyp@amazon.com', company: 'AWS' },
    { name: 'Brandon English', email: 'benglish@amazon.com', company: 'AWS' },
    { name: 'Sade Thompson', email: 'tsade@amazon.com', company: 'AWS' },
    { name: 'Kristi Khanna', email: 'khannak@amazon.com', company: 'AWS' },
    { name: 'Vikas Chakole', email: 'vikas.c@amazon.com', company: 'AWS' },
    { name: 'Raj Gupta', email: 'guptar@amazon.com', company: 'AWS' },
    { name: 'Shivam Upadhyay', email: 'upadhyays@amazon.com', company: 'AWS' },
    { name: 'Prathyusha Nimmakayala', email: 'prathyushan@amazon.com', company: 'AWS' },
    { name: 'Sam Dinesh', email: 'dinesh.s@amazon.com', company: 'AWS' },
    { name: 'Lukasz Markowski', email: 'lukaszm@amazon.com', company: 'AWS' },
    { name: 'Yawar Saqlaini', email: 'ysaqlaini@amazon.com', company: 'AWS' },
    { name: 'Dipika Ramachandran', email: 'radipika@amazon.com', company: 'AWS' },
    { name: 'Sam Bridge', email: 'samubrid@amazon.com', company: 'AWS' },
    { name: 'Palani Vairavan', email: 'palani@amazon.com', company: 'AWS' },
    { name: 'Josh Opos', email: 'josho@amazon.com', company: 'AWS' },
    { name: 'Jared Tryon', email: 'jartryon@amazon.com', company: 'AWS' },
    { name: 'Raveendra', email: 'rtorvi@amazon.com', company: 'AWS' },
    { name: 'Huan', email: 'huanji@amazon.com', company: 'AWS' },
    { name: 'Anchal Nema', email: 'annema@amazon.com', company: 'AWS' },
    { name: 'Pranay Deep', email: 'pranayd@amazon.com', company: 'AWS' },
    { name: 'Alexander Boyce', email: 'abboyce@amazon.com', company: 'AWS' },
    { name: 'Tommy Kromer', email: 'tommyk@amazon.com', company: 'AWS' },
    { name: 'Om', email: 'kom@amazon.com', company: 'AWS' },
    { name: 'Dharam Bhushan', email: 'dharb@amazon.com', company: 'AWS' },
    { name: 'Prashaanth', email: 'ravip@amazon.com', company: 'AWS' }
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
