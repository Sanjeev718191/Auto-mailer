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
    { name: 'Devi Reddy', email: 'dreddy@dvginteractive.com', company: 'DVG' },
    { name: 'Devika Chauhan', email: 'devika@shopx.in', company: 'ShopX' },
    { name: 'Dharmendra Rawat', email: 'dharmendra.rawat@lumiq.ai', company: 'Lumiq' },
    { name: 'Dharmendra Singh', email: 'dharmendra@akshay.com', company: 'Akshay Software Technologies' },
    { name: 'Dharmik Gohel', email: 'dharmik@atlan.com', company: 'Atlan' },
    { name: 'Dhinesh Shankar', email: 'dshankar@dataintensity.com', company: 'Data Intensity' },
    { name: 'Dhirendra Kamboj', email: 'dkamboj@newtglobalcorp.com', company: 'Newt Global Consulting' },
    { name: 'Dhirendra Panda', email: 'dhirendra.panda@ivalue.co.in', company: 'iValue InfoSolutions' },
    { name: 'Dhritiparna Dhar', email: 'dhritiparnad@zendrive.com', company: 'Zendrive' },
    { name: 'Diksha Rohokale', email: 'diksha@apptware.com', company: 'Apptware' },
    { name: 'Diksha Sisodia', email: 'diksha.sisodia@eternussolutions.com', company: 'Eternus' },
    { name: 'Dileep Choyappally', email: 'dileep.choyappally@nestgroup.net', company: 'NeST Digital' },
    { name: 'Dilip Borah', email: 'borah.dilip@senrysa.com', company: 'Senrysa Technologies' },
    { name: 'Dilip Satpute', email: 'dilip.s@theimperative.in', company: 'Imperative Business Ventures' },
    { name: 'Dimpal Patel', email: 'dimpal.patel@tacttree.com', company: 'TactTree LLP' },
    { name: 'Dinanath Gokhale', email: 'dgokhale@crgroup.co.in', company: 'CRG Solutions' },
    { name: 'Dinesh Hemdev', email: 'dinesh.hemdev@logixal.com', company: 'Logixal Inc' },
    { name: 'Dinesh Rai', email: 'dinesh.rai@hirexa.com', company: 'Hirexa Solutions' },
    { name: 'Dinesh Yuvaraj', email: 'dinesh.yuvaraj@ivymobility.com', company: 'Ivy Mobility' },
    { name: 'Dipali Chavan', email: 'dipalichavan@credenceanalytics.com', company: 'Credence Analytics' },
    { name: 'Dipesh Jain', email: 'dipesh@pesto.tech', company: 'Pesto Tech' },
    { name: 'Dipika Sharma', email: 'dipikasharma@slx.co.in', company: 'Securelynkx Networks' },
    { name: 'Dipthi Rajagopal', email: 'dipthir@dckap.com', company: 'DCKAP' },
    { name: 'Dipti Goel', email: 'dipti@insider.in', company: 'Paytm Insider' },
    { name: 'Dipti Kothari', email: 'dipti.kothari@satincorp.com', company: 'SA Technologies' },
    { name: 'Disha Bali', email: 'disha.bali@remitonline.info', company: 'Fable Fintech' },
    { name: 'Dishank Raj', email: 'dishank.raj@aeriestechnology.com', company: 'Aeries Technology Group' },
    { name: 'Divya A', email: 'da@virsec.com', company: 'Virsec Systems' },
    { name: 'Divya Beneesh', email: 'divya.beneesh@zaggle.in', company: 'Zaggle Prepaid Ocean Services' },
    { name: 'Divya Bhardwaj', email: 'divya.b@greyorange.com', company: 'GreyOrange' },
    { name: 'Divya Chandrasekhara', email: 'divya.chandrasekhara@infoworks.io', company: 'Infoworks.io' },
    { name: 'Divya Dang', email: 'divya.dang@cloudanalogy.com', company: 'Cloud Analogy' },
    { name: 'Divya Devapathni', email: 'ddevapathni@gemini-us.com', company: 'Gemini Consulting & Services' },
    { name: 'Divya Gunashekar', email: 'divya@thescalers.com', company: 'The Scalers' },
    { name: 'Divya Jaggi', email: 'divyajaggi@promactinfo.com', company: 'Promact Infotech' },
    { name: 'Divya Jethi', email: 'divya.jethi@cloudanalogy.com', company: 'Cloud Analogy' },
    { name: 'Divya Keshav', email: 'divya.k@diamondpick.com', company: 'Diamondpick' },
    { name: 'Divya Nadikattu', email: 'divya@taashee.com', company: 'Taashee Linux Services' },
    { name: 'Divya Nitin', email: 'divya@diamondpick.com', company: 'Diamondpick' },
    { name: 'Divya P', email: 'divyap@cegonsoft.com', company: 'Cegonsoft' },
    { name: 'Divya Pant', email: 'divya.p@ceipal.com', company: 'CEIPAL Corp.' },
    { name: 'Divya Prasad', email: 'divya.prasad@impelsys.com', company: 'Impelsys' },
    { name: 'Divya Puthireddi', email: 'divya.puthireddi@tanla.com', company: 'Tanla Platforms' },
    { name: 'Donna Ellies', email: 'donna.ellies@br.iq', company: 'Briq' },
    { name: 'Drishti Mistry', email: 'drishti@artoonsolutions.com', company: 'Artoon Solutions' },
    { name: 'Durga Akula', email: 'durga.akula@cotelligent.com', company: 'Cotelligent' },
    { name: 'Durga Androthu', email: 'durgaprasada@proarch.com', company: 'Enhops' },
    { name: 'Edwin', email: 'edwin.vimal@sysvine.com', company: 'Sysvine Technologies' },
    { name: 'Ekta Chowdhry', email: 'ekta.chowdhry@shipsy.io', company: 'Shipsy' },
    { name: 'Ekta Kohli', email: 'ekta.kohli@simulationiq.com', company: 'Education Management Solutions' },
    { name: 'Elizabeth Johnson', email: 'elizabeth.j@appnomic.com', company: 'Appnomic' },
    { name: 'Emilio Rodrigues', email: 'emilio@etouch.net', company: 'eTouch Systems' },
    { name: 'Eram Qudsia', email: 'eram.qudsia@mygate.in', company: 'MyGate' },
    { name: 'Esha Mayekar', email: 'esha.mayekar@autoplant.in', company: 'Autoplant System India' },
    { name: 'Eswari Velayutham', email: 'eswari.v@tringapps.com', company: 'Tringapps' },
    { name: 'Ety Garg', email: 'ety@buzzclan.com', company: 'BuzzClan' },
    { name: 'Eustine Thomas', email: 'eustine.thomas@ars-traffic.com', company: 'ARS Traffic & Transport Technology' },
    { name: 'Eyunni Kumar', email: 'eyunni.kumar@bdxworld.com', company: 'BDx Data Centers' },
    { name: 'Fabiana Sobers', email: 'fabiana.sobers@cashapona.com', company: 'Cashapona Technologies' },
    { name: 'Facile', email: 'vineet.shah@facileserv.com', company: 'Facile Services' },
    { name: 'Faisal Siddiqui', email: 'faisal.siddiqui@uneecops.com', company: 'Uneecops Technologies' },
    { name: 'Faiza Khan', email: 'faiza.khan@apolisrises.com', company: 'Apolis' },
    { name: 'Fareeda Begum', email: 'fbegum@hitachi-solutions.com', company: 'Hitachi Solutions Asia Pacific' },
    { name: 'Farheen Hassan', email: 'farheen@rapidflowapps.com', company: 'Rapidflow Inc' },
    { name: 'Fazal Karim', email: 'fazal.karim@metaoption.com', company: 'MetaOption LLC' },
    { name: 'Firdaus Mehta', email: 'firdaus.mehta@heliossolutions.co', company: 'Helios Solutions' },
    { name: 'Francis Gonsalves', email: 'francis.gonsalves@moengage.com', company: 'MoEngage' },
    { name: 'Franklin Frank', email: 'franklin@thescalers.com', company: 'The Scalers' },
    { name: 'Frida Dias', email: 'frida.dias@mpsinteractive.com', company: 'MPS Interactive Systems' },
    { name: 'Friend Friend', email: 'friend.friend@niit-tech.com', company: 'NIIT Technologies' },
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
