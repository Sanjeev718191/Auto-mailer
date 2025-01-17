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
    { name: 'Aayushi Dhingra', email: 'aayushi.dhingra@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Bhuvan Gupta', email: 'bhuvan.gupta@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Nitin Jain', email: 'nitin@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Asish Mohapatra', email: 'asish@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Prachi Nahata', email: 'prachi.nahata@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Rahul Dubey', email: 'rahul.dubey@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Muskan Pasrija', email: 'muskan.pasrija@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Ashish Kumar', email: 'ashish.kumar@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Harshita Lohani', email: 'harshita.lohani@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Piyush Upadhyay', email: 'piyush@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Divyansh Kamal', email: 'divyansh.kamal@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Revati Agnihotri', email: 'revati.agnihotri@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Sarita Singha', email: 'sarita.singha@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Amod Tripathi', email: 'amod.tripathi@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Parul Arora', email: 'parul.arora@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Rajeev Singh', email: 'rajeev.singh@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Sumit Kumar', email: 'sumit.kumar@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Gunjan Bairolia', email: 'gunjan.bairolia@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Anurag Sharma', email: 'anurag.sarma@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Dattatreya Panta', email: 'dattatreya.panta@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Shivank Jha', email: 'shivank.jha@ofbusiness.in', company: 'OfBusiness' },
    { name: 'Harsimarbir Singh', email: 'harsimarbir.singh@pristyncare.com', company: 'Pristyn Care' },
    { name: 'Anjan Das', email: 'anjan.das@pristyncare.com', company: 'Pristyn Care' },
    { name: 'Vaibhav Kapoor', email: 'vaibhav.kapoor@pristyncare.com', company: 'Pristyn Care' },
    { name: 'Srinivas', email: 'srinivas.reddy@pristyncare.com', company: 'Pristyn Care' },
    { name: 'Dimple Jaiswal', email: 'dimple.jaiswal@pristyncare.com', company: 'Pristyn Care' },
];

// List of targeted people 
// Send from sanjeev718191
const recipients2 = [
    // { name: 'Anupriya Chaudhary', email: 'tempmovie08@gmail.com', company: 'PhysicsWallah' },
    { name: 'Mansi Jain', email: 'mansi.jain@juspay.in', company: 'Juspay' },
    { name: 'Pramod Mulani', email: 'pramod.mulani@juspay.in', company: 'Juspay' },
    { name: 'Ankur Chaudhary', email: 'ankur.chaudhary@juspay.in', company: 'Juspay' },
    { name: 'Arnab Banerjee', email: 'arnab.banerjee@juspay.in', company: 'Juspay' },
    { name: 'Vaibhav Goel', email: 'vaibhav.goel@juspay.in', company: 'Juspay' },
    { name: 'Harshith Tunuguntla', email: 'harshith.t@juspay.in', company: 'Juspay' },
    { name: 'Ritesh Pal', email: 'ritesh.pal@juspay.in', company: 'Juspay' },
    { name: 'Anshika Singh', email: 'anshika.singh@juspay.in', company: 'Juspay' },
    { name: 'Abhijeet Shankhdhar', email: 'abhijeet.shankhdhar@juspay.in', company: 'Juspay' },
    { name: 'Dillip Behera', email: 'dillip.behera@juspay.in', company: 'Juspay' },
    { name: 'Bramhansh Marwah', email: 'bramhansh.marwah@juspay.in', company: 'Juspay' },
    { name: 'Spoorthi Ramesh', email: 'spoorthi.ramesh@juspay.in', company: 'Juspay' },
];

// List of random people 
// Send from sanjeev19203
const recipients3 = [
    // { name: 'Anupriya Chaudhary', email: 'tempmovie08@gmail.com', company: 'PhysicsWallah' },
    { name: 'Anto Faria', email: 'anto.faria@urbanladder.com', company: 'Urban Ladder' },
    { name: 'Anuj Agarwal', email: 'anuj@deskera.com', company: 'Deskera' },
    { name: 'Anuja Sivaram', email: 'anuja@codenation.co.in', company: 'Trilogy Innovations' },
    { name: 'Anupam Jauhari', email: 'anupam.j@gsl.in', company: 'Ginesys' },
    { name: 'Anupam Srivastava', email: 'anupam.srivastava@reltio.com', company: 'Reltio' },
    { name: 'Anupama Dasgupta', email: 'anupamadg@erevmax.com', company: 'eRevMax' },
    { name: 'Anupriya Gandhi', email: 'anupriya.gandhi@juliacomputing.com', company: 'Julia Computing' },
    { name: 'Anurag Rana', email: 'anurag.rana@sirionlabs.com', company: 'SirionLabs' },
    { name: 'Anurag Shrivastava', email: 'anurags@talisma.com', company: 'Talisma' },
    { name: 'Anurag Verma', email: 'anurag@uniphore.com', company: 'Uniphore' },
    { name: 'Anusha Jayachandran', email: 'anusha@srswebsolutions.com', company: 'SRS Web Solutions' },
    { name: 'Anusha Kishore', email: 'anusha.kishore@loco.gg', company: 'Loco' },
    { name: 'Aparna Gunjikar', email: 'aparna.gunjikar@softnautics.com', company: 'Softnautics' },
    { name: 'Aparna Srikanth', email: 'aparna.srikanth@appsian.com', company: 'Pathlock' },
    { name: 'Aradhana Gupta', email: 'aradhana@safexpay.com', company: 'SafexPay' },
    { name: 'Arathi', email: 'arathi.gs@vyomlabs.com', company: 'Vyom Labs' },
    { name: 'Arathi Prabhu', email: 'arathi.prabhu@altruistahealth.com', company: 'Altruista Health' },
    { name: 'Arathi Rajeswari', email: 'arathi@suntecgroup.com', company: 'SunTec Business Solutions' },
    { name: 'Aravind Chandrasekar', email: 'aravind.chandrasekar@tigerspike.com', company: 'Concentrix Tigerspike' },
    { name: 'Aravind Warrier', email: 'aravind.warrier@rapidvaluesolutions.com', company: 'RapidValue' },
    { name: 'Archana Anand', email: 'archana@aufait.in', company: 'Aufait Technologies' },
    { name: 'Archana Kp', email: 'archana.kp@kilowott.com', company: 'Kilowott' },
    { name: 'Archana Kunde', email: 'archana@quinbay.com', company: 'Quinbay' },
    { name: 'Archana Manne', email: 'archana.manne@locuz.com', company: 'Locuz' },
    { name: 'Archana Sarda', email: 'archana.sarda@microlise.com', company: 'Microlise' },
    { name: 'Archana Shinde', email: 'archana.shinde@cognologix.com', company: 'Cognologix Technologies' },
    { name: 'Arif Memon', email: 'arif.memon@abzooba.com', company: 'Abzooba' },
    { name: 'Arindam Kar', email: 'arindam.kar@yodlee.com', company: 'Envestnet' },
    { name: 'Arjita Chawla', email: 'arjita.chawla@quytech.com', company: 'Quytech' },
    { name: 'Arjun Chatterjee', email: 'arjun.chatterjee@sunlife.com', company: 'Sun Life' },
    { name: 'Arpana Jaiswal', email: 'arpanaj@umbrellainfocare.com', company: 'Umbrella Infocare' },
    { name: 'Arpita Sarkar', email: 'arpita.sarkar@webskitters.com', company: 'WEBSKITTERS TECHNOLOGY SOLUTIONS' },
    { name: 'Artoon Solutions', email: 'qa@artoonsolutions.com', company: 'Artoon Solutions' },
    { name: 'Aru Uppal', email: 'aru.uppal@datdyn.com', company: 'Data Dynamics' },
    { name: 'Arun Kumar', email: 'arun.kumar@bobtechsolutions.com', company: 'BOB Tech Solutions' },
    { name: 'Arun Kumar', email: 'arun.kumar@shipsy.io', company: 'Shipsy' },
    { name: 'Arun Kumar', email: 'arun.kumar@wavicledata.com', company: 'Wavicle Data Solutions' },
    { name: 'Arun Murugappa', email: 'arun@theatem.com', company: 'ATEM Software Solutions' },
    { name: 'Arun Ravi', email: 'arun.ravi@ipsoft.com', company: 'Amelia' },
    { name: 'Arun Singh', email: 'arun.singh@puresoftware.com', company: 'PureSoftware' },
    { name: 'Arun Vigneswaran', email: 'arun@xto10x.com', company: 'xto10x' },
    { name: 'Arunima Bhushan', email: 'arunima.bhushan@orcapodservices.com', company: 'Orcapod' },
    { name: 'Arushi Goel', email: 'arushi.goel@betterplace.co.in', company: 'BetterPlace' },
    { name: 'Arushi Sawhney', email: 'arushi.sawhney@e2eresearch.com', company: 'Altezzasys Systems' },
    { name: 'Arvind Sadasivan', email: 'arvind.sadasivan@ekaplus.com', company: 'Eka Software Solutions' },
    { name: 'Asenath Sharon', email: 'sharon@srinsofttech.com', company: 'SrinSoft Technologies' },
    { name: 'Asha Rao', email: 'asha.j@unilogcorp.com', company: 'Unilog' },
    { name: 'Ashish Karnik', email: 'ashish.karnik@pavilion.io', company: 'Pavilion' },
    { name: 'Ashish Naidu', email: 'ashish.naidu@mindgate.in', company: 'Mindgate Solutions' },
    { name: 'Ashok Manjunath', email: 'ashok@spenmo.com', company: 'Spenmo' },
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
