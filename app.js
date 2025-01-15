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
    { name: 'Remya Pillai', email: 'remya.pillai@whatfix.com', company: 'Khatabook' },
    { name: 'Remya Pillai', email: 'remyapillai1701@gmail.com', company: 'Khatabook' },
    { name: 'Ravish Naresh', email: 'ravish@khatabook.com', company: 'Khatabook' },
    { name: 'Shivani Bareja', email: 'shivani.bareja@khatabook.com', company: 'Khatabook' },
    { name: 'Veena Marabaraddi', email: 'veena.marabaraddi@khatabook.com', company: 'Khatabook' },
    { name: 'Neha Gupta', email: 'neha.gupta@khatabook.com', company: 'Khatabook' },
    { name: 'Gulshan Sharma', email: 'gulshan@khatabook.com', company: 'Khatabook' },
    { name: 'Tejashwari Todker', email: 'tejashwari.todker@khatabook.com', company: 'Khatabook' },
    { name: 'Akash Nawani', email: 'akash.nawani@khatabook.com', company: 'Khatabook' },
    { name: 'Hardik Jain', email: 'hardik.jain@khatabook.com', company: 'Khatabook' },
    { name: 'Ashish Jha', email: 'ashish.jha@khatabook.com', company: 'Khatabook' },
    { name: 'Sandeep Kumar', email: 'sandeep.kumar@khatabook.com', company: 'Khatabook' },
    { name: 'Neha Kumar', email: 'neha.kumar@khatabook.com', company: 'Khatabook' },
    { name: 'Aru Shukla', email: 'aru.shukla@khatabook.com', company: 'Khatabook' },
    { name: 'Manasa Gandla', email: 'manasa.gandla@livspace.com', company: 'Livspace' },
    { name: 'Sakshi Raval', email: 'sakshi.raval@livspace.com', company: 'Livspace' },
    { name: 'Trupti Shah', email: 'trupti.shah@livspace.com', company: 'Livspace' },
    { name: 'Ashvitha Ramesh', email: 'ashvitha.ramesh@livspace.com', company: 'Livspace' },
    { name: 'Jishnu K', email: 'jishnu.k@livspace.com', company: 'Livspace' },
    { name: 'Sulabh Kulshreshtha', email: 'sulabh.k@livspace.com', company: 'Livspace' },
    { name: 'Nishi Gupta', email: 'nishi.gupta@livspace.com', company: 'Livspace' },
    { name: 'Parnika Tripathi', email: 'parnika.tripathi@livspace.com', company: 'Livspace' },
    { name: 'Akshay Paramkusham', email: 'paramkusham.akshay@livspace.com', company: 'Livspace' },
    { name: 'Suryanshu Dinkar', email: 'suryanshu.dinkar@livspace.com', company: 'Livspace' },
    { name: 'Soumya Rai', email: 'soumya.rai@livspace.com', company: 'Livspace' },
    { name: 'Yashopriya Agrawal', email: 'yashopriya.agrawal@livspace.com', company: 'Livspace' },
    { name: 'Astha Deep', email: 'astha.deep@livspace.com', company: 'Livspace' },
    { name: 'Shivani', email: 'shivani.tewari@livspace.com', company: 'Livspace' },
    { name: 'Ullas Nanda', email: 'ullas.nanda@livspace.com', company: 'Livspace' },
    { name: 'Shivika Bhavsar', email: 'shivika.bhavsar@livspace.com', company: 'Livspace' },
    { name: 'Guru Vinayak Kancharla', email: 'guru.kancharla@livspace.com', company: 'Livspace' },
    { name: 'Ahad Khan', email: 'ahad.khan@livspace.com', company: 'Livspace' },
    { name: 'Priyanshu Kumar', email: 'priyanshu.kumar@livspace.com', company: 'Livspace' },
    { name: 'Shivanshu', email: 'shivanshu.garg@livspace.com', company: 'Livspace' },
    { name: 'Vinamra Arya', email: 'vinamra.arya@livspace.com', company: 'Livspace' },
    { name: 'Sohan Singh', email: 'sohan.singh@livspage.com', company: 'Livspace' },
    { name: 'Ritvik Bhatia', email: 'ritvikbhatia99@gmail.com', company: 'PhysicsWallah' },
    { name: 'Nikhil Kori', email: 'itsnikhil98@gmail.com', company: 'PhysicsWallah' },
    { name: 'AYUSH AGRAWAL', email: 'ayush.agrawal@pw.live', company: 'PhysicsWallah' },
    { name: 'Nirnay Jain', email: 'nirnay.jain@pw.live', company: 'PhysicsWallah' },
    { name: 'Deeksha Rajawat', email: 'deeksha.rajawat@pw.live', company: 'PhysicsWallah' },
    { name: 'Yogesh Shukla', email: 'yogesh.shukla@pw.live', company: 'PhysicsWallah' }
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
