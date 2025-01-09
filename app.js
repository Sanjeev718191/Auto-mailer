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

// Recipient lists
const recipients1 = [
    { name: 'Vinayak Naik', email: 'vinayak.naik@infra.market', company: 'Infra.Market' },
    { name: 'Hariom Verma', email: 'hariom.verma@infra.market', company: 'Infra.Market' },
    { name: 'Nitin Kumar', email: 'nitin.kumar@infra.market', company: 'Infra.Market' },
    { name: 'Aniket Dabholkar', email: 'aniket.dabholkar@infra.market', company: 'Infra.Market' },
    { name: 'Rishabh Bhargava', email: 'rishabh.bhargava@infra.market', company: 'Infra.Market' },
    { name: 'Mohd Vakiv', email: 'vakiv.mohd@infra.market', company: 'Infra.Market' },
    { name: 'Mobin Khan', email: 'mobin.khan@infra.market', company: 'Infra.Market' },
    { name: 'Raghav Goyal', email: 'raghav.goyal@infra.market', company: 'Infra.Market' },
    { name: 'Rohit Shaky', email: 'rohit.shakya@infra.market', company: 'Infra.Market' },
    { name: 'Meghana Sridhar', email: 'meghana.s@infra.market', company: 'Infra.Market' },
    { name: 'Madap Santosh', email: 'santosh.madap@infra.market', company: 'Infra.Market' },
    { name: 'Kunal Kumar', email: 'kunal.kumar@infra.market', company: 'Infra.Market' },
    { name: 'Mohit Jain', email: 'mohit.jain@infra.market', company: 'Infra.Market' },
    { name: 'Sandeep Inamati', email: 'sandeep.inamati@infra.market', company: 'Infra.Market' },
    { name: 'Yash Agarwal', email: 'yash.agarwal@infra.market', company: 'Infra.Market' },
    { name: 'Darshpreet Kaur', email: 'darshpreet.kaur@infra.market', company: 'Infra.Market' },
    { name: 'Sahil Sangurdekar', email: 'sangurdekarsahil@gmail.com', company: 'Infra.Market' },
    { name: 'Jasvir Kaur', email: 'jasvir.kaur@infra.market', company: 'Infra.Market' },
    { name: 'Vishakha Joshi', email: 'vishakha.joshi@infra.market', company: 'Infra.Market' },
    { name: 'Ramesh Katreddi', email: 'ramesh@jumbotail.com', company: 'Jumbotail' },
    { name: 'Jeevan Singh', email: 'jeevan.singh@jumbotail.com', company: 'Jumbotail' },
    { name: 'Ashish Parthasarathy', email: 'ashish.parthasarathy@jumbotail.com', company: 'Jumbotail' },
    { name: 'Gourav Goel', email: 'gourav.goel@jumbotail.com', company: 'Jumbotail' },
    { name: 'Suraj Kumar', email: 'suraj.kumar@jumbotail.com', company: 'Jumbotail' },
    { name: 'Shefali Bhardwaj', email: 'shefali.bhardwaj@jumbotail.com', company: 'Jumbotail' },
    { name: 'Bhoomika Suresh', email: 'bhoomika.suresh@jumbotail.com', company: 'Jumbotail' },
    { name: 'Shilpa Sampgavakar', email: 'shilpa.sampgavakar@jumbotail.com', company: 'Jumbotail' },
];
const recipients2 = [
    // { name: 'Anupriya Chaudhary', email: 'tempmovie08@gmail.com', company: 'PhysicsWallah' },
];
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
