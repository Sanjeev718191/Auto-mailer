
const nodeMailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

const htmlTemplate = fs.readFileSync(path.join(__dirname, 'mailtemp.html'), 'utf8');

const recipients = [
    { name: 'Anupriya Chaudhary', email: 'anupriya.1@pw.live', company: 'PhysicsWallah' },
    { name: 'Vandana Negi', email: 'vandana.negi@pw.live', company: 'PhysicsWallah' },
    { name: 'Rajnandini Gupta', email: 'rajnandini.gupta@pw.live', company: 'PhysicsWallah' },
    { name: 'Pragya Sharma', email: 'pragya.sharma@pw.live', company: 'PhysicsWallah' },
    { name: 'Sneha Aggarwal', email: 'sneha.aggarwal@pw.live', company: 'PhysicsWallah' },
    { name: 'Alakh Pandey', email: 'alakh@pw.live', company: 'PhysicsWallah' },
    { name: 'Naina Thakur', email: 'naina.thakur@pw.live', company: 'PhysicsWallah' },
    { name: 'Aamir Qureshi', email: 'aamir.qureshi@pw.live', company: 'PhysicsWallah' },
    { name: 'Ishika Sharma', email: 'anubhav.sutradhar@pw.live', company: 'PhysicsWallah' },
    { name: 'Ankit Agarwal', email: 'ankit.airen89@gmail.com', company: 'PhysicsWallah' },
    { name: 'Ankit Agarwal', email: 'ankit.agarwal@pw.live', company: 'PhysicsWallah' },
    { name: 'Rakesh Chand', email: 'rakesh.chand@pw.live', company: 'PhysicsWallah' },
    { name: 'Avinash Gupta', email: 'avinash.gupta1@pw.live', company: 'PhysicsWallah' },
    { name: 'Beerud S', email: 'beerud@gupshup.io', company: 'Gupshup' },
    { name: 'Amit Malhotra', email: 'amit.malhotra@gupshup.io', company: 'Gupshup' },
    { name: 'Swati Chaturvedi', email: 'swati.chaturvedi@gupshup.io', company: 'Gupshup' },
    { name: 'Meenakshi Sharma', email: 'meenakshi.sharma@gupshup.io', company: 'Gupshup' },
    { name: 'Kimaya Shinde', email: 'kimaya.shinde@gupshup.io', company: 'Gupshup' },
    { name: 'Deepa Makhija', email: 'deepa.makhija@gupshup.io', company: 'Gupshup' },
    { name: 'Anil Mishra', email: 'anil.mishra@gupshup.io', company: 'Gupshup' },
    { name: 'Kajal', email: 'kajal.joshi@gupshup.io', company: 'Gupshup' },
    { name: 'Shreya Shaji', email: 'shreya.shaji@gupshup.io', company: 'Gupshup' },
    { name: 'Mayank Bhanderi', email: 'mayank.bhanderi@gupshup.io', company: 'Gupshup' },
    { name: 'Mohit Arora', email: 'mohit.arora@gupshup.io', company: 'Gupshup' },
    { name: 'Kashyap Tatmiya', email: 'kashyap.tatmiya@gupshup.io', company: 'Gupshup' },
    { name: 'Sakshi Gupta', email: 'sakshi.gupta@gupshup.io', company: 'Gupshup' },
    { name: 'Anish Agrawal', email: 'anish.agrawal@gupshup.io', company: 'Gupshup' },
    { name: 'Gaurav Agrawal', email: 'gaurav.agrawal@gupshup.io', company: 'Gupshup' },
    { name: 'Satyajit Mahunta', email: 'satyajit.mahunta@gupshup.io', company: 'Gupshup' },
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
