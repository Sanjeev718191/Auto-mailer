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
    // { name: 'Rahul Garg', email: 'rahul@moglix.com', company: 'Moglix' },
    { name: 'Priyanka Yadav', email: 'priyanka.yadav@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Kaniksha Udernani', email: 'kaniksha.udernani@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Manoj Sharma', email: 'manoj.sharma@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Mayank Girdhar', email: 'mayank.girdhar@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Prachi Chauhan', email: 'prachi.chauhan@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Tanvi Aggarwal', email: 'tanvi.aggarwal@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Rutvik Bhosle', email: 'rutvik.bhosle@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Mansi Kaundal', email: 'mansi.kaundal@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Avi Ratnani', email: 'avi.ratnani@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Ruddhi Shah', email: 'ruddhi.shah@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Akhil Merugu', email: 'akhil.merugu@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Pratik Priyadarshee', email: 'pratik.priyadarshee@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Piyush Kumar', email: 'piyush.kumar@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Abhijeet Singh', email: 'abhijeet.singh@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Himani Manak', email: 'himani.manak@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Srishti Kumari', email: 'srishti.kumari@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Nitesh Mittal', email: 'nitesh.mittal@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Shagun Sachdeva', email: 'shagun.sachdeva@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Mukta Sharma', email: 'mukta.sharma@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Aashika Aggarwal', email: 'aashika.aggarwal@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Diwakar Sankla', email: 'diwakar.sankla@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Raja Dubey', email: 'raja.dubey@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Aishvarya Verma', email: 'aishvarya.verma@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Nanak Rajput', email: 'nanak.rajput@pristyncare.com', company: 'Pristyn Care' },
    { name: 'Annu Raghav', email: 'annu@pristyncare.com', company: 'Pristyn Care' },
    { name: 'Ravinder Yadav', email: 'ravinder.yadav@pristyncare.com', company: 'Pristyn Care' },
    { name: 'Priyanshu Singh', email: 'priyanshu.singh@pristyncare.com', company: 'Pristyn Care' },
    { name: 'Ayushi Uniyal', email: 'ayushi.uniyal@pristyncare.com', company: 'Pristyn Care' },
    { name: 'Jaiprakash Yadav', email: 'jp@pristyncare.com', company: 'Pristyn Care' },
    { name: 'Sonakshi Sehgal', email: 'sonakshi.sehgal@pristyncare.com', company: 'Pristyn Care' },
    { name: 'Uzma Batool', email: 'uzma.batool@pristyncare.com', company: 'Pristyn Care' },
    { name: 'Anjali Singh', email: 'anjali.singh@pristyncare.com', company: 'Pristyn Care' },
    { name: 'Etisha Shukla', email: 'etisha.shukla@pristyncare.com', company: 'Pristyn Care' },
    { name: 'Abhinav Tirkey', email: 'abhinav.tirkey@pristyncare.com', company: 'Pristyn Care' },
    { name: 'Sandhya Dhand', email: 'sandhya.dhand@kfintech.com', company: 'KFin Technologies' },
];

// List of targeted people 
// Send from sanjeev718191
const recipients2 = [
    // { name: 'Anupriya Chaudhary', email: 'tempmovie08@gmail.com', company: 'PhysicsWallah' },
    { name: 'Deeksha Gupta', email: 'deeksha.gupta@juspay.in', company: 'Juspay' },
    { name: 'Siddhi Tanwar', email: 'siddhi.tanwar@juspay.in', company: 'Juspay' },
    { name: 'Aditi Gupta', email: 'aditi.gupta@juspay.in', company: 'Juspay' },
    { name: 'Parul Shriwatri', email: 'parul.shriwatri@juspay.in', company: 'Juspay' },
    { name: 'Elizabeth Danna', email: 'elizabeth.danna@juspay.in', company: 'Juspay' },
    { name: 'Lalitha Sushrutha', email: 'lalitha.sushrutha@juspay.in', company: 'Juspay' },
    { name: 'Varsha Mopkar', email: 'varsha.valsan.ext@juspay.in', company: 'Juspay' },
    { name: 'Shubhranshu Singh', email: 'shubhranshu.singh@juspay.in', company: 'Juspay' },
    { name: 'Ankur Abraham', email: 'ankur.abraham@juspay.in', company: 'Juspay' },
    { name: 'Jagan Elavarasan', email: 'jagan.elavarasan@juspay.in', company: 'Juspay' },
    { name: 'Banala Prasad', email: 'banala.siva@juspay.in', company: 'Juspay' },
    { name: 'Aditya Sridhar', email: 'aditya.sridhar@juspay.in', company: 'Juspay' },
    { name: 'Prashant Khandelwal', email: 'prashant.khandelwal@juspay.in', company: 'Juspay' },
    { name: 'Rahul Dasgupta', email: 'rahul.dasgupta@juspay.in', company: 'Juspay' },
    { name: 'Shivani Singh', email: 'shivani.singh@juspay.in', company: 'Juspay' },
    { name: 'Vikas Patel', email: 'vikas.spatel@juspay.in', company: 'Juspay' },
    { name: 'Vipul Gupta', email: 'vipul.gupta@juspay.in', company: 'Juspay' },
    { name: 'Rishabh Jain', email: 'rishabh.jain.001@juspay.in', company: 'Juspay' },
    { name: 'Tejash Gupta', email: 'tejash.gupta@juspay.in', company: 'Juspay' },
    { name: 'Shubhranshu Sanjeev', email: 'shubhranshu.sanjeev@juspay.in', company: 'Juspay' },
    { name: 'Pradeep Kumar', email: 'pradeep.kumar@juspay.in', company: 'Juspay' },
    { name: 'Kadambala Dharanidhar', email: 'kadambala.dharanidhar@juspay.in', company: 'Juspay' },
    { name: 'Bhavneet Singh', email: 'bhavneet.singh@juspay.in', company: 'Juspay' },
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
