
const nodeMailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

// Read the HTML template
const htmlTemplate = fs.readFileSync(path.join(__dirname, 'mailtemp.html'), 'utf8');

const recipients = [
    { name: 'Vishal Chaudhary', email: 'vishal.chaudhary@bharatpe.com', company: 'BharatPe' },
    { name: 'Rohit Chhabra', email: 'rohit.chhabra@bharatpe.com', company: 'BharatPe' },
    { name: 'Pavan Kumar Patruni', email: 'pavan.patruni@bharatpe.com', company: 'BharatPe' },
    { name: 'Rakshit Bhat', email: 'rakshit.bhat@bharatpe.com', company: 'BharatPe' },
    { name: 'Shubham Jain', email: 'shubham@bharatpe.com', company: 'BharatPe' },
    { name: 'Priyanshu Rathi', email: 'priyanshu.rathi@bharatpe.com', company: 'BharatPe' },
    { name: 'Murthy Adapa', email: 'murthy.adapa@bharatpe.com', company: 'BharatPe' },
    { name: 'Pallavi Gupta', email: 'pallavi.gupta@bharatpe.com', company: 'BharatPe' },
    { name: 'Nitin Sachdeva', email: 'nitin.sachdeva@bharatpe.com', company: 'BharatPe' },
    { name: 'Abhineet Singh', email: 'abhineet.singh@bharatpe.com', company: 'BharatPe' },
    { name: 'Pankaj Goel', email: 'pankaj.goel@bharatpe.com', company: 'BharatPe' },
    { name: 'Ujjwal Mishra', email: 'ujjwal.mishra@curefit.com', company: 'Curefit' },
    { name: 'Amandeep Singh', email: 'amandeep.singh@curefit.com', company: 'Curefit' },
    { name: 'Priyanka Anand', email: 'priyanka.anand@curefit.com', company: 'Curefit' },
    { name: 'Prashant Jadhav', email: 'prashant@firstcry.com', company: 'FirstCry' },
    { name: 'Deepti Grace', email: 'deepti.grace@firstcry.com', company: 'FirstCry' },
    { name: 'Sanket Hattimattur', email: 'sanket@firstcry.com', company: 'FirstCry' },
    { name: 'Mayank Badola', email: 'mayank@firstcry.com', company: 'FirstCry' },
    { name: 'Supam Maheshwari', email: 'supam@firstcry.com', company: 'FirstCry' },
    { name: 'Sonal Jain', email: 'sonal.jain@firstcry.com', company: 'FirstCry' },
    { name: 'Amit Madke', email: 'amit.madke@firstcry.com', company: 'FirstCry' },
    { name: 'Pranjali Mahajan', email: 'pranjali.mahajan@firstcry.com', company: 'FirstCry' },
    { name: 'Shashank Tiwari', email: 'shashank.tiwari@firstcry.com', company: 'FirstCry' },
    { name: 'Krish Dave', email: 'krish.dave@firstcry.com', company: 'FirstCry' },
    { name: 'Rishabh Ramola', email: 'rishabh.ramola@firstcry.com', company: 'FirstCry' },
    { name: 'Swapnil Telrandhe', email: 'swapnil.telrandhe@firstcry.com', company: 'FirstCry' },
    { name: 'Hitesh K', email: 'k@firstcry.com', company: 'FirstCry' },
    { name: 'Shruti Singh', email: 'shruti.singh@firstcry.com', company: 'FirstCry' },
    { name: 'Tanvi Shelar', email: 'tanvi.shelar@firstcry.com', company: 'FirstCry' },
    { name: 'Ashwini Kulkarni', email: 'ashwini.kulkarni@firstcry.com', company: 'FirstCry' },
    { name: 'Rakesh Raut', email: 'rakesh.raut@firstcry.com', company: 'FirstCry' },
    { name: 'Yograj Solanke', email: 'yograj.solanke@firstcry.com', company: 'FirstCry' },
    { name: 'Rakesh Sonawane', email: 'rakesh.sonawane@firstcry.com', company: 'FirstCry' },
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
                subject: `Aspiring to Be a Part of ${recipient.company}: Request for Your Support`,
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
