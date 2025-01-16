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
    { name: 'Rahul Garg', email: 'rahul@moglix.com', company: 'Moglix' },
    { name: 'Shilpee Pandey', email: 'shilpee.pandey@moglix.com', company: 'Moglix' },
    { name: 'Joyeeta Mukherjee', email: 'joyeeta.mukherjee@moglix.com', company: 'Moglix' },
    { name: 'Mohit Arora', email: 'mohit.arora@moglix.com', company: 'Moglix' },
    { name: 'Shailesh Mayee', email: 'shailesh.mayee@moglix.com', company: 'Moglix' },
    { name: 'Abhishek Rajawat', email: 'abhishek.rajawat@moglix.com', company: 'Moglix' },
    { name: 'Pallavi Bhalla', email: 'pallavi.bhalla@moglix.com', company: 'Moglix' },
    { name: 'Satinder Singh', email: 'satinder.singh@moglix.com', company: 'Moglix' },
    { name: 'Shefali Srivastava', email: 'shefali.srivastava@moglix.com', company: 'Moglix' },
    { name: 'Sayyed Asif', email: 'sayyed.asif@moglix.com', company: 'Moglix' },
    { name: 'Shaleen Khurana', email: 'shaleen.khurana@moglix.com', company: 'Moglix' },
    { name: 'Shivani Sanwal', email: 'shivani.sanwal@moglix.com', company: 'Moglix' },
    { name: 'Ankita Mor', email: 'ankita.mor@moglix.com', company: 'Moglix' },
    { name: 'Lakshay Sharma', email: 'lakshay.sharma@moglix.com', company: 'Moglix' },
    { name: 'Shashikant', email: 'shashikant.baghel@gmail.com', company: 'Moglix' },
    { name: 'Shashikant', email: 'shashikant.baghel@moglix.com', company: 'Moglix' },
    { name: 'Janhavi Singh', email: 'janhavi.singh@moglix.com', company: 'Moglix' },
    { name: 'Satinder Singh', email: 'satindersinghthiara@gmail.com', company: 'Moglix' },
    { name: 'Tayyaba Maryam', email: 'tayyaba00maryam@gmail.com', company: 'Moglix' },
    { name: 'Tayyaba Maryam', email: 'tayyaba.maryam@moglix.com', company: 'Moglix' },
    { name: 'Anurag Sharma', email: 'anurag.sharma@moglix.com', company: 'Moglix' },
    { name: 'Shashi Kumar Verma', email: 'shashi.verma@moglix.com', company: 'Moglix' },
    { name: 'Siddharth Srivastava', email: 'siddharth.srivastava@moglix.com', company: 'Moglix' },
    { name: 'Shashank K Singh', email: 'singhshashank565@gmail.com', company: 'Moglix' },
    { name: 'Shashank K Singh', email: 'shashank.singh@moglix.com', company: 'Moglix' },
    { name: 'Anil Paul', email: 'anilpaul@ninjacart.com', company: 'Ninjacart' },
    { name: 'Sharath Loganathan', email: 'sharath@ninjacart.in', company: 'Ninjacart' },
    { name: 'Abhinandini', email: 'abhinandinih@ninjacart.com', company: 'Ninjacart' },
    { name: 'Vijayaseshan', email: 'vijayaseshan.v@ninjacart.com', company: 'Ninjacart' },
    { name: 'Tara Mn', email: 'tara.n@ninjacart.com', company: 'Ninjacart' },
    { name: 'Shruti Raj', email: 'shrutiraj@ninjacart.com', company: 'Ninjacart' },
    { name: 'Aravindraj Selvam', email: 'aravindrajs@ninjacart.com', company: 'Ninjacart' },
    { name: 'Naveen Sowriraj', email: 'naveensowriraj@ninjacart.com', company: 'Ninjacart' },
    { name: 'Swathi Prakash', email: 'swathip@ninjacart.com', company: 'Ninjacart' },
    { name: 'Varun Yagain', email: 'varunyagain@ninjacart.com', company: 'Ninjacart' },
    { name: 'Rahul Saha', email: 'rahulsaha@ninjacart.com', company: 'Ninjacart' },
    { name: 'Ganesh', email: 'ganeshm@ninjacart.com', company: 'Ninjacart' },
    { name: 'Kenneth Sadhu', email: 'kenneth.sadhu@ninjacart.com', company: 'Ninjacart' },
    { name: 'Prashanth Burgula', email: 'prashanthburgula@ninjacart.com', company: 'Ninjacart' },
    { name: 'Aastha Dhingra', email: 'aastha@ninjacart.com', company: 'Ninjacart' },
    { name: 'Chintan Shah', email: 'chintanshah@ninjacart.com', company: 'Ninjacart' },
    { name: 'Srusti', email: 'srustis@ninjacart.com', company: 'Ninjacart' },
    { name: 'Akshay Srivastava', email: 'akshaysrivastava@ninjacart.com', company: 'Ninjacart' },
    { name: 'Ankit Mishra', email: 'shrutiraj@ninjacart.com', company: 'Ninjacart' },
    { name: 'Aarti Jha', email: 'aartijha@ninjacart.com', company: 'Ninjacart' },
    { name: 'Aruj Sharma', email: 'arujsharma@ninjacart.com', company: 'Ninjacart' },
    { name: 'Praveen Kumar Katta', email: 'kattakumar@ninjacart.com', company: 'Ninjacart' },
    { name: 'Archana Prasad', email: 'archanaprasad@ninjacart.com', company: 'Ninjacart' },
];
const recipients2 = [
    // { name: 'Anupriya Chaudhary', email: 'tempmovie08@gmail.com', company: 'PhysicsWallah' },
];
const recipients3 = [
    // { name: 'Anupriya Chaudhary', email: 'tempmovie08@gmail.com', company: 'PhysicsWallah' },
    { name: 'Prashant', email: 'prashant.karn1@aexp.com', company: 'American Express' },
    { name: 'Shiva Krishna', email: 'shivakrishnakaitham@gmail.com', company: 'IQVIA' },
    { name: 'Aisha', email: 'aisha.s@iconresources.com', company: 'Icon Resources & Technologies' },
    { name: 'Rohit', email: 'rohit.halder@in.experis.com', company: 'Experis' },
    { name: 'Chandrikha', email: 'chandrikha@sparkouttech.com', company: 'Sparkout Tech Solutions Inc.' },
    { name: 'Gayatri Gupta', email: 'gayatri@antino.io', company: 'Antino Labs' },
    { name: 'Akanksha Puri', email: 'akanksha.puri@sourcefuse.com', company: 'SourceFuse Technologies' },
    { name: 'Akanksha Sogani', email: 'akanksha.sogani@perennialsys.com', company: 'Perennial Systems' },
    { name: 'Akhil Jogiparthi', email: 'akhil@ibhubs.co', company: 'iB Hubs' },
    { name: 'Akhila Chandan', email: 'akhila@estuate.com', company: 'Estuate' },
    { name: 'Akram Mohammad', email: 'akram.mohammad@colruytgroup.com', company: 'Colruyt India' },
    { name: 'Akriti', email: 'akriti@elsner.in', company: 'Elsner Technologies' },
    { name: 'Akshata Bhandare', email: 'akshata.bhandare@windmill.ch', company: 'Windmill' },
    { name: 'Albino Mascarenhas', email: 'albino@pixis.ai', company: 'Pyxis One' },
    { name: 'Allwyn Richard', email: 'allwyn.r@qbrainx.com', company: 'QBrainX Inc' },
    { name: 'Alok Baghel', email: 'alok.singh@recro.io', company: 'Recro' },
    { name: 'Alok Kumar', email: 'alok.kumar@vfislk.com', company: 'VFI SLK' },
    { name: 'Alwyn Barretto', email: 'alwyn.barretto@infrasofttech.com', company: 'Infrasoft Technologies' },
    { name: 'Aman Khan', email: 'aman.khan@areteanstech.com', company: 'Areteans' },
    { name: 'Amandeep Kaur', email: 'amandeep.k@antiersolutions.com', company: 'Antier Solutions' },
    { name: 'Amar Sinha', email: 'amar.sinha@nitorinfotech.com', company: 'Nitor Infotech' },
    { name: 'Ambrish Kanungo', email: 'ambrish.kanungo@beyondkey.com', company: 'Beyond Key' },
    { name: 'Amiit Avaasthi', email: 'amiit.avaasthi@altudo.co', company: 'Altudo' },
    { name: 'Amit', email: 'amit.malhotra@wundermanthompson.com', company: 'Wunderman Thompson MSC' },
    { name: 'Amit Kataria', email: 'amit@hanu.com', company: 'Hanu Software' },
    { name: 'Amit Prayagi', email: 'amit.prayagi@claimgenius.com', company: 'Claim Genius' },
    { name: 'Amit Ranjan', email: 'amit.ranjan@scikey.ai', company: 'SCIKEY' },
    { name: 'Amit Sahoo', email: 'amit.sahoo@areteanstech.com', company: 'Areteans' },
    { name: 'Amita Shital', email: 'ashital@svam.com', company: 'SVAM International' },
    { name: 'Amitesh Verma', email: 'amitesh.verma@cheersin.com', company: 'Cheers Interactive' },
    { name: 'Amitha K', email: 'amitha.k@secure-24.com', company: 'Secure-24' },
    { name: 'Amlan Nag', email: 'amlan.nag@mjunction.in', company: 'mjunction services' },
    { name: 'Amresh Mehra', email: 'amreshm@zendrive.com', company: 'Zendrive' },
    { name: 'Amrita', email: 'akishore@dimagi.com', company: 'Dimagi' },
    { name: 'Amrita Cheema', email: 'amrita.cheema@loconav.com', company: 'LocoNav' },
    { name: 'Amrita Singh', email: 'amrita.singh@cogentinfo.com', company: 'COGENT Infotech' },
    { name: 'Amrita Singh', email: 'amrita.singh@itbd.net', company: 'IT BY DESIGN' },
    { name: 'Amrita Tripathi', email: 'amrita@sdnaglobal.com', company: 'Stanley David and Associates' },
    { name: 'Amritesh Shukla', email: 'amritesh.shukla@mygate.com', company: 'MyGate' },
    { name: 'Amruta Urkude', email: 'amruta@greatplaceitservices.com', company: 'Great Place IT Services' },
    { name: 'Amulya', email: 'amulya.ms@utthunga.com', company: 'Utthunga' },
    { name: 'Anand Christopher', email: 'anand.christopher@grassrootsbpo.com', company: 'Grassroots' },
    { name: 'Anand E', email: 'anand.e@increff.com', company: 'Increff' },
    { name: 'Anand K', email: 'ak@8kmiles.com', company: 'SecureKloud Technologies' },
    { name: 'Anand Khot', email: 'anandk@pharmarack.com', company: 'Pharmarack' },
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
