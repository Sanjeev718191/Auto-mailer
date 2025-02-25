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
    // { name: 'Kathleen Hogan', email: 'khogan@microsoft.com', company: 'Microsoft' },
    // { name: 'Amit Singh', email: 'asingh@microsoft.com', company: 'Microsoft' },
    // { name: 'David Goddard', email: 'dgoddard@microsoft.com', company: 'Microsoft' },
    // { name: 'Adam Zhao', email: 'adamzhao@microsoft.com', company: 'Microsoft' },
    // { name: 'Surita Saha', email: 'sahas@microsoft.com', company: 'Microsoft' },
    // { name: 'Silva Rani', email: 'silvarani@microsoft.com', company: 'Microsoft' },
    // { name: 'Monica Murali', email: 'v-momurali@microsoft.com', company: 'Microsoft' },
    // { name: 'Shivani Ganjoo', email: 'sganjoo@microsoft.com', company: 'Microsoft' },
    // { name: 'Zach Brown', email: 'zachbrown@microsoft.com', company: 'Microsoft' },
    // { name: 'Ward Wilson', email: 'wawils@microsoft.com', company: 'Microsoft' },
    // { name: 'Cheruku Sabarish', email: 'sabarishc@microsoft.com', company: 'Microsoft' },
    // { name: 'Snehankur Adak', email: 'snehankur.adak@microsoft.com', company: 'Microsoft' },
    // { name: 'Adi Rothschild', email: 'arothschild@microsoft.com', company: 'Microsoft' },
    // { name: 'Owais Noman', email: 'nomanowais@microsoft.com', company: 'Microsoft' },
    // { name: 'Kristan Sandford', email: 'ksandford@microsoft.com', company: 'Microsoft' },
    // { name: 'Srilata Nair', email: 'snair@microsoft.com', company: 'Microsoft' },
    // { name: 'Sonia Hernandez', email: 'hernandezs@microsoft.com', company: 'Microsoft' },
    // { name: 'Jack McCormick', email: 'jmccormick@microsoft.com', company: 'Microsoft' },
    // { name: 'Anusha Mittal', email: 'anushamittal@microsoft.com', company: 'Microsoft' },
    // { name: 'Praveen Singh', email: 'singh.praveen@microsoft.com', company: 'Microsoft' },
    // { name: 'Sanjeev Sharma', email: 'sanjeev.sharma@microsoft.com', company: 'Microsoft' },
    // { name: 'Nirav Gohel', email: 'niravgohel@microsoft.com', company: 'Microsoft' },
    // { name: 'Deepika Ramamoorthi', email: 'deepika.ramamoorthi@microsoft.com', company: 'Microsoft' },
    // { name: 'Madhan', email: 'madhanm@microsoft.com', company: 'Microsoft' },
    // { name: 'Shavinder', email: 'smultani@microsoft.com', company: 'Microsoft' },
    // { name: 'Anton Yarkov', email: 'antonyarkov@microsoft.com', company: 'Microsoft' },
    { name: 'Abhijit Agarwal', email: 'abhijitag@google.com', company: 'Google' },
    { name: 'Ankit Mathur', email: 'ankitm@google.com', company: 'Google' },
    { name: 'Dinos Christou', email: 'dchristou@google.com', company: 'Google' },
    { name: 'Vaibhav Bhardwaj', email: 'vbhardwaj@google.com', company: 'Google' },
    { name: 'Vasudev Sharma', email: 'vasudevsharma@google.com', company: 'Google' },
    { name: 'Siddharth Kumar', email: 'skumar@google.com', company: 'Google' },
    { name: 'Dennis Anikin', email: 'danikin@google.com', company: 'Google' },
    { name: 'Priyanka Priyadarshini', email: 'pripriyadarshi@google.com', company: 'Google' },
    { name: 'Natasha Tishchenko', email: 'tishchenko@google.com', company: 'Google' },
    { name: 'Kayla Warren', email: 'kwarren@google.com', company: 'Google' },
    { name: 'Rohan Saha', email: 'rohansaha@google.com', company: 'Google' },
    { name: 'Zofisha Sultan', email: 'zofisha@google.com', company: 'Google' },
    { name: 'Taylor Hawkins', email: 'taylorhawkins@google.com', company: 'Google' },
    { name: 'Shankar Selvaraj', email: 'shankarselva@google.com', company: 'Google' },
    { name: 'Neha Upadhyay', email: 'upadhyan@google.com', company: 'Google' },
    { name: 'Mellissa R.', email: 'mellissar@google.com', company: 'Google' },
    { name: 'Paul Martin', email: 'martinp@google.com', company: 'Google' },
    { name: 'Kate Walsh', email: 'katew@google.com', company: 'Google' },
    { name: 'Rocky Jason', email: 'rjason@google.com', company: 'Google' },
    { name: 'Heather Jackson', email: 'jacksonheather@google.com', company: 'Google' },
    { name: 'Harsh Kapoor', email: 'harshkapoor@google.com', company: 'Google' },
    { name: 'Alisha May', email: 'amay@google.com', company: 'Google' },
    { name: 'Daniel Borges', email: 'dtborges@google.com', company: 'Google' },
    { name: 'Rupesh A', email: 'rupesha@google.com', company: 'Google' },
    { name: 'Naveena', email: 'naveena@google.com', company: 'Google' }
];

// List of targeted people 
// Send from sanjeev718191
const recipients2 = [
    // { name: 'Anupriya Chaudhary', email: 'tempmovie08@gmail.com', company: 'PhysicsWallah' },
];

// List of random people 
// Send from sanjeev19203
const recipients3 = [
    
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
