const nodeMailer = require('nodemailer');

const html = `
    <h1>Hello World</h1>
    <p> Isn't Nodemailer usefull?</p>
`;

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
        from: 'sanjeev19203@gmail.com',
        to: 'tempmovie08@gmail.com',
        subject: 'Testing, node mailer',
        html: html,
    })

    console.log("Message sent: " + info.messageId);
}

main()
.catch(e => console.log(e));