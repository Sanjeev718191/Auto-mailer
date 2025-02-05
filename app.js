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
    { name: 'Kyle', email: 'wang@salesforce.com', company: 'Salesforce' },
    { name: 'Carol Cheng', email: 'chengc2@erau.edu', company: 'Salesforce' },
    { name: 'Aditya Chandran', email: 'achandran@salesforce.com', company: 'Salesforce' },
    { name: 'Monika', email: 'msuutari@salesforce.com', company: 'Salesforce' },
    { name: 'Rich', email: 'rborucke@salesforce.com', company: 'Salesforce' },
    { name: 'Fabio Oliveira', email: 'foliveira@salesforce.com', company: 'Salesforce' },
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
    { name: 'Mamtha Akula', email: 'mamtha.akula@netradyne.com', company: 'Netradyne' },
    { name: 'Manashi Chakraborty', email: 'mchakraborty@phdata.io', company: 'phData' },
    { name: 'Manasi Kelkar', email: 'manasi.kelkar@cropin.com', company: 'CropIn Technology' },
    { name: 'Manav Jain', email: 'manav.jain@loconav.com', company: 'LocoNav' },
    { name: 'Manda Kishore', email: 'manda.kishore@evolutyz.com', company: 'Evolutyz Corp' },
    { name: 'Mandeep Singh', email: 'mandeep.singh@tulip.co', company: 'Tulip Interfaces' },
    { name: 'Mandeep Virdi', email: 'mandeep.virdi@esri.in', company: 'Esri India' },
    { name: 'Mani Narayanan', email: 'manin@karyatech.com', company: 'KARYA Technologies' },
    { name: 'Manian Chennai', email: 'manian@callezee.com', company: 'Info Network Management Company' },
    { name: 'Manik Mahajan', email: 'manikmahajan@qainfotech.com', company: 'QA InfoTech' },
    { name: 'Manik Mondal', email: 'manik.mondal@qbadvisory.com', company: 'QBA Worldwide' },
    { name: 'Manikandan Balasubramanian', email: 'manikandan.b@itech-india.com', company: 'iTech India' },
    { name: 'Manish', email: 'mtripathi@phdata.io', company: 'phData' },
    { name: 'Manish Sitania', email: 'msitania@egain.com', company: 'eGain Corporation' },
    { name: 'Manisha', email: 'manisha@dreamsoft4u.com', company: 'DreamSoft4u' },
    { name: 'Manisha Dash', email: 'manisha.dash@celigo.com', company: 'Celigo' },
    { name: 'Manisha Dixit', email: 'mdixit@netrixllc.com', company: 'Netrix' },
    { name: 'Manjeet Walia', email: 'manjeet.walia@harbingergroup.com', company: 'Harbinger Group' },
    { name: 'Manjiri Patel-Shinde', email: 'manjiri.shinde@cloudmoyo.com', company: 'CloudMoyo' },
    { name: 'Manju Jacob', email: 'manju.jacob@sarvatra.in', company: 'Sarvatra Technologies' },
    { name: 'Manjunath P', email: 'manju@nichi.com', company: 'Nichi-In Software Solutions' },
    { name: 'Manoj K', email: 'manoj@ampl.app', company: 'Ampl' },
    { name: 'Manoj Madhavan', email: 'manoj@techversantinfotech.com', company: 'Techversant' },
    { name: 'Manoj Parikatil', email: 'manoj.parikatil@goodera.com', company: 'Goodera' },
    { name: 'Manoj Prasad', email: 'mxp@amitysoftware.com', company: 'Amity Software Systems' },
    { name: 'Manoj Sahoo', email: 'asta_onboarding@astacrs.com', company: 'Asta Crs Inc' },
    { name: 'Manoj Sehgal', email: 'manoj.sehgal@rvu.in', company: 'RVU India' },
    { name: 'Manuel Fernandes', email: 'manuel.fernandes@antheliohealth.com', company: 'Anthelio Healthcare Solutions' },
    { name: "Manu's Jobs", email: 'jobs@skyonn.com', company: 'SkyOnn Technologies' },
    { name: 'Maria Fernandes', email: 'maria.fernandes@draup.com', company: 'Draup' },
    { name: 'Mary Basu', email: 'mary.basu@fivesdigital.com', company: 'FiveS Digital' },
    { name: 'Mary Naidu', email: 'mary@software.com', company: 'Software' },
    { name: 'Maximus J', email: 'maximus.j@infoplusltd.co.uk', company: 'Infoplus Technologies UK' },
    { name: 'Maya John', email: 'maya.john@verse.in', company: 'VerSe Innovation' },
    { name: 'Maya Nagpal', email: 'maya.nagpal@verolt.com', company: 'Verolt' },
    { name: 'Mayank Agarwal', email: 'mayank.agarwal@gaana.com', company: 'Gaana' },
    { name: 'Mayank Ahuja', email: 'mayank.ahuja@nickelfox.com', company: 'Nickelfox Technologies' },
    { name: 'Mayank Sharma', email: 'mayank@tripoto.com', company: 'Tripoto' },
    { name: 'Mayukh Mitra', email: 'mmitra@adaequare.com', company: 'Adaequare' },
    { name: 'Mayur Pabari', email: 'mayur.pabari@smartsensesolutions.com', company: 'smartSense Consulting Solutions' },
    { name: 'Mayur Sisodiya', email: 'mayur.sisodiya@collabera.com', company: 'Collabera India' },
    { name: 'Medha Sharma', email: 'medha.sharma@kiwitech.com', company: 'KiwiTech' },
    { name: 'Medhika Sood', email: 'medhika@uniphore.com', company: 'Uniphore' },
    { name: 'Meena R', email: 'meena@airmeet.com', company: 'Airmeet' },
    { name: 'Meenakshi Banerjee', email: 'meenakshi.banerjee@crmnext.in', company: 'CRMNEXT' },
    { name: 'Meenakshi Jha', email: 'meenakshi.jha@talentica.com', company: 'Talentica Software' },
    { name: 'Meenakshi Kogje', email: 'meenakshi.kogje@newvisionsoftware.in', company: 'NewVision Software' },
    { name: 'Megh Makwana', email: 'megh@inheritx.com', company: 'InheritX Solutions' },
    { name: 'Megh Risaldar', email: 'megh.risaldar@sms-magic.com', company: 'SMS-Magic' },
    { name: 'Meghana Sarwate', email: 'megh@godrej.com', company: 'Godrej Infotech' },
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
