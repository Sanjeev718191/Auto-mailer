const nodeMailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

const htmlTemplate = fs.readFileSync(path.join(__dirname, 'mailtemp.html'), 'utf8');



async function main() {
    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'sanjeev19203@gmail.com',
            pass: 'zjvjehdewjulozvc'
        }
    });

    const info = await transporter.sendMail({
        from: {
            name: 'Sanjeev Kumar',
            address: 'sanjeev19203@gmail.com'
        },
        to: 'tempmovie08@gmail.com, sanjeev718191@gmail.com',
        subject: 'Testing, node mailer',
        html: htmlTemplate,
        attachments: {
            filename: 'Sanjeev.pdf',
            path: path.join(__dirname, 'Sanjeev_n.pdf'),
            contentType: 'application/pdf'
        }
    })

    console.log("Message sent: " + info.messageId);
}

main()
.catch(e => console.log(e));

