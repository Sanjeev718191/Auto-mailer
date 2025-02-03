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
    { name: 'Rudraksh Dubey', email: 'rdubey@rippling.com', company: 'Rippling' },
    { name: 'Akhil Girijan', email: 'agirijan@rippling.com', company: 'Rippling' },
    { name: 'Mahesh Suthar', email: 'msuthar@rippling.com', company: 'Rippling' },
    { name: 'Hema Negi', email: 'hnegi@rippling.com', company: 'Rippling' },
    { name: 'Keerthi Cottur', email: 'kcottur@rippling.com', company: 'Rippling' },
    { name: 'Sumitra Laishram', email: 'slaishram@rippling.com', company: 'Rippling' },
    { name: 'Ayushi J', email: 'ayjaiswal@rippling.com', company: 'Rippling' },
    { name: 'Puneeth Sakleshpura', email: 'psakleshpura@rippling.com', company: 'Rippling' },
    { name: 'Mir Raza', email: 'mraza@rippling.com', company: 'Rippling' },
    { name: 'Ashwin Emmanuel', email: 'aemmanuel@rippling.com', company: 'Rippling' },
    { name: 'Jennifer', email: 'jhasche@rippling.com', company: 'Rippling' },
    { name: 'Eric Ganz', email: 'eganz@rippling.com', company: 'Rippling' },
    { name: 'Thomas Evangelista', email: 'tom@rippling.com', company: 'Rippling' },
    { name: 'Prateek Agarwal', email: 'pagarwal@rippling.com', company: 'Rippling' },
    { name: 'Nagendra Varma', email: 'nagendra@rippling.com', company: 'Rippling' },
    { name: 'Saket Pathak', email: 'spathak@rippling.com', company: 'Rippling' },
    { name: 'Divya Rao', email: 'drao@rippling.com', company: 'Rippling' },
    { name: 'Naman Agarwal', email: 'namanagarwal@rippling.com', company: 'Rippling' },
    { name: 'Hitendra Katiyar', email: 'hitendra@rippling.com', company: 'Rippling' },
    { name: 'Aakarshan Chawla', email: 'achawla@rippling.com', company: 'Rippling' },
    { name: 'Arun Prakash', email: 'arprakash@rippling.com', company: 'Rippling' },
    { name: 'Savannah Fussell', email: 'savannah.fussell@paycomonline.com', company: 'Paycom' },
    { name: 'Kelsey Patterson', email: 'kelsey.patterson@paycomonline.com', company: 'Paycom' },
    { name: 'Navaneeth Buddi', email: 'navaneeth.buddi@paycom.com', company: 'Paycom' },
    { name: 'Joseph Cistulli', email: 'joseph.cistulli@paycom.com', company: 'Paycom' },
    { name: 'Margaret Bagnell', email: 'margaret.bagnell@paycom.com', company: 'Paycom' },
    { name: 'Adrienne Roepke', email: 'adrienne.roepke@paycom.com', company: 'Paycom' },
    { name: 'Caroline Largey', email: 'caroline.largey@paycom.com', company: 'Paycom' },
    { name: 'Jennifer Kraszewski', email: 'jennifer.kraszewski@paycom.com', company: 'Paycom' },
    { name: 'Kevin Rasmussen', email: 'kevin.rasmussen@paycom.com', company: 'Paycom' },
    { name: 'Leslie Rios', email: 'leslie.rios@paycomonline.com', company: 'Paycom' },
    { name: 'Todd Godley', email: 'todd.godley@paycom.com', company: 'Paycom' },
    { name: 'Bryce Little', email: 'bryce.little@paycom.com', company: 'Paycom' },
    { name: 'Jennifer Mathew', email: 'jennifer.mathew@paycomonline.com', company: 'Paycom' },
    { name: 'Sandra Lovik', email: 'sandra.lovik@paycomonline.com', company: 'Paycom' },
    { name: 'Chase Rettig', email: 'chase.rettig@paycomonline.com', company: 'Paycom' },
    { name: 'Danielle Barnes', email: 'danielle.barnes@paycom.com', company: 'Paycom' },
    { name: 'Brittany', email: 'brittany.dunn@paycomonline.com', company: 'Paycom' },
    { name: 'Brittany', email: 'brittany.sandoval@paycom.com', company: 'Paycom' },
    { name: 'Aaron', email: 'aaron.lieberman@paycomonline.com', company: 'Paycom' },
    { name: 'Swati Agarwal', email: 'swati.agarwal@paycom.com', company: 'Paycom' },
    { name: 'Deepak Lokande', email: 'deepak.lokande@paycom.com', company: 'Paycom' },
    { name: 'Ganesh Pichika', email: 'ganesh.pichika@paycom.com', company: 'Paycom' },
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
