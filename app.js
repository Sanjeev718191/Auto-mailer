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
    { name: 'Anand Rajendran', email: 'anand.r@whatarage.com', company: 'ADK Rage' },
    { name: 'Anand Sasidharan', email: 'anand@hubilo.com', company: 'Hubilo' },
    { name: 'Anand Sl', email: 'anand@auzmor.com', company: 'Auzmor' },
    { name: 'Anand Soni', email: 'anand@capsitech.com', company: 'Capsitech' },
    { name: 'Anand Thiagarajan', email: 'athiagarajan@inniveinc.com', company: 'Innive Inc' },
    { name: 'Anandhi Srinivasan', email: 'anandhi.s@dsmsoft.com', company: 'DSM SOFT' },
    { name: 'Ananthram Iyer', email: 'ananthram.iyer@customercentria.com', company: 'Customer Centria' },
    { name: 'Anchal Rastogi', email: 'anrastogi@enhanceit.com', company: 'Enhance IT' },
    { name: 'Anchan Arasinaguppe', email: 'aarasina@teksystems.com', company: 'TEKsystems Global Services in India' },
    { name: 'Angel Mathew', email: 'angel.mathew@delphix.com', company: 'Delphix' },
    { name: 'Anil Chandra', email: 'anil.chandra@thoughtspot.com', company: 'ThoughtSpot' },
    { name: 'Anil K', email: 'anil.k@corestack.io', company: 'CoreStack' },
    { name: 'Anil Moturi', email: 'anil.moturi@solugenix.com', company: 'Solugenix' },
    { name: 'Anil Pereira', email: 'anil.pereira@visiblealpha.com', company: 'Visible Alpha' },
    { name: 'Anil Ramachandran', email: 'anil.kumar@flytxt.com', company: 'Flytxt' },
    { name: 'Anil Tomar', email: 'anil.tomar@fdsindia.co.in', company: 'Fourth Dimension Solutions' },
    { name: 'Animesh Kumar', email: 'animesh.kumar@novopay.in', company: 'Novopay' },
    { name: 'Anindita Ranjan', email: 'anindita.ranjan@3ds.com', company: 'Dassault Systems' },
    { name: 'Anirban Chakravorty', email: 'anirban.chakravorty@nttdata.com', company: 'NTT DATA' },
    { name: 'Anirban Ghosh', email: 'aghosh@trimaxamericas.com', company: 'Data Glove' },
    { name: 'Anirudhan Vasudevan', email: 'anirudhan.vasudevan@replicon.com', company: 'Replicon' },
    { name: 'Anish Ahmed', email: 'anish.ahmed@vaave.com', company: 'Vaave' },
    { name: 'Anish Raj', email: 'anish.raj@sentieo.com', company: 'Sentieo' },
    { name: 'Anita Mourya', email: 'anita.mourya@capricot.com', company: 'Capricot Technologies' },
    { name: 'Anita Noronha', email: 'anoronha@shorewise.com', company: 'ShoreWise Consulting' },
    { name: 'Anita Sidhwani', email: 'asidhwani@cleo.com', company: 'Cleo' },
    { name: 'Anita Yadav', email: 'anita@appventurez.com', company: 'Appventurez' },
    { name: 'Anitha Davis', email: 'anitha.davis@incture.com', company: 'Incture' },
    { name: 'Anitha Prabhakar', email: 'anitha.prabhakar@pramati.com', company: 'Pramati Technologies' },
    { name: 'Anjali', email: 'anjali@knackforge.com', company: 'KnackForge' },
    { name: 'Anjali Ghadge', email: 'anjalig@mangoapps.com', company: 'MangoApps' },
    { name: 'Anjali Patil', email: 'anjali.patil@workindia.in', company: 'WorkIndia' },
    { name: 'Anjali Sharma', email: 'anjali.sharma@fulcrumdigital.com', company: 'Fulcrum Digital Inc' },
    { name: 'Anjan Bose', email: 'anjan.bose@hpl.co.in', company: 'HPL' },
    { name: 'Anjani Salian', email: 'anjani.salian@in.nbssap.com', company: 'Net Business Solutions' },
    { name: 'Anju Tyagi', email: 'anju.tyagi@bpoconvergence.com', company: 'BPO Convergence' },
    { name: 'Ankit Shah', email: 'ankit@compumatrice.com', company: 'CompuMatrice' },
    { name: 'Ankit Sharma', email: 'ankit.sharma@a1technology.com', company: 'A-1 Technology' },
    { name: 'Ankit Tomar', email: 'ankit.tomar@rategain.com', company: 'RateGain' },
    { name: 'Ankita', email: 'ankita@zenwork.com', company: 'Zenwork' },
    { name: 'Ankita Rajrishi', email: 'ankita.rajrishi@condecosoftware.com', company: 'Condeco' },
    { name: 'Ankita Sinha', email: 'ankita.sinha@mtxb2b.com', company: 'MTX Group' },
    { name: 'Ankur Beri', email: 'ankur.beri@niit-tech.com', company: 'NIIT Technologies' },
    { name: 'Anna Andrews', email: 'annaa@smartek21.com', company: 'SmarTek21' },
    { name: 'Anna Mathunny', email: 'anna@transactglobal.com', company: 'Transact Global' },
    { name: 'Annapurna A', email: 'annapurna.a@fime.com', company: 'FIME' },
    { name: 'Annie Manoj', email: 'annie.manoj@grasko.com', company: 'Grasko Solutions' },
    { name: 'Anoob Abraham', email: 'anoob.abraham@arcadia.com', company: 'Arcadia' },
    { name: 'Anshika Khaitan', email: 'anshika.khaitan@getvymo.com', company: 'Vymo' },
    { name: 'Anshu Anand', email: 'anshu.anand@absolutdata.com', company: 'Absolutdata Analytics' },
    { name: 'Ansuman Sahu', email: 'ansumans@mindfiresolutions.com', company: 'Mindfire Solutions' },
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
