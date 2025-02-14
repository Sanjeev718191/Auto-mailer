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
    { name: 'Jack Totty', email: 'jack.totty@upstart.com', company: 'Upstart' },
    { name: 'Vanchinathan Chandrasekaran', email: 'vanchinathan.chandrasekaran@upstart.com', company: 'Upstart' },
    { name: 'Caitlin Fegley', email: 'caitlin.fegley@upstart.com', company: 'Upstart' },
    { name: 'Kelly Zimmerman', email: 'kelly.zimmerman@upstart.com', company: 'Upstart' },
    { name: 'Allie Sponseller', email: 'allie.sponseller@upstart.com', company: 'Upstart' },
    { name: 'Satyam', email: 'satyam.nikhra@upstart.com', company: 'Upstart' },
    { name: 'David Katz', email: 'david.katz@upstart.com', company: 'Upstart' },
    { name: 'Arnab Sarkar', email: 'arnab.sarkar@upstart.com', company: 'Upstart' },
    { name: 'Team', email: 'up.start@upstart.com', company: 'Upstart' },
    { name: 'Phoenix', email: 'phoenix.pagaduan@upstart.com', company: 'Upstart' },
    { name: 'Melissa', email: 'melissa.rizek@upstart.com', company: 'Upstart' },
    { name: 'Hanxu Fan', email: 'hanxu.fan@upstart.com', company: 'Upstart' },
    { name: 'Wendy Goolsby', email: 'wendy.goolsby@upstart.com', company: 'Upstart' },
    { name: 'Jemini Jhaveri', email: 'jemini.jhaveri@upstart.com', company: 'Upstart' },
    { name: 'Andy', email: 'andy.puccio@upstart.com', company: 'Upstart' },
    { name: 'Andrea', email: 'andrea.hazel@upstart.com', company: 'Upstart' },
    { name: 'Ryan', email: 'ryan.davis@upstart.com', company: 'Upstart' },
    { name: 'Alex', email: 'alex.wagner@upstart.com', company: 'Upstart' },
    { name: 'Qadira Muhammad', email: 'qadira.muhammad@upstart.com', company: 'Upstart' },
    { name: 'Rachel', email: 'rachel.stewart@upstart.com', company: 'Upstart' },
    { name: 'Molly', email: 'molly.casey@upstart.com', company: 'Upstart' },
    { name: 'Nicholas', email: 'nicholas.desai@upstart.com', company: 'Upstart' },
    { name: 'Prateek', email: 'prateek.bansal@upstart.com', company: 'Upstart' },
    { name: 'Wenli Wu', email: 'wenli.wu@upstart.com', company: 'Upstart' },
    { name: 'Kevin Lin', email: 'kevin.lin@upstart.com', company: 'Upstart' },
    { name: 'Ryan', email: 'ryan.hipps@upstart.com', company: 'Upstart' },
    { name: 'Chao Yan', email: 'chao.yan@upstart.com', company: 'Upstart' },
    { name: 'Gerardo Flores', email: 'gerardo.flores@upstart.com', company: 'Upstart' },
    { name: 'Chris', email: 'chris.french@upstart.com', company: 'Upstart' },
    { name: 'Raney Cain', email: 'raney.cain@upstart.com', company: 'Upstart' },
    { name: 'Arvin', email: 'arvin.bhathal@upstart.com', company: 'Upstart' },
    { name: 'Priyal', email: 'priyal.mehta@upstart.com', company: 'Upstart' },
    { name: 'Polina', email: 'polina.stepanova@upstart.com', company: 'Upstart' },
    { name: 'Melissa', email: 'melissa.hargis@upstart.com', company: 'Upstart' }
];

// List of targeted people 
// Send from sanjeev718191
const recipients2 = [
    // { name: 'Anupriya Chaudhary', email: 'tempmovie08@gmail.com', company: 'PhysicsWallah' },
];

// List of random people 
// Send from sanjeev19203
const recipients3 = [
    { name: 'Neville Postwalla', email: 'neville.postwalla@harbingergroup.com', company: 'Harbinger Group' },
    { name: 'Nevy George', email: 'nevyg@norwintechnologies.com', company: 'Norwin Technologies' },
    { name: 'Nibedita Dutta', email: 'nibedita.dutta@natureglobal.com', company: 'Nature Technologies' },
    { name: 'Nidhi', email: 'nidhi.vishnoi@2isolutions.com', company: '2iSolutions' },
    { name: 'Nidhi', email: 'nidhi@empirix.com', company: 'Hammer' },
    { name: 'Nidhi Khulbe', email: 'nidhi@indusnet.co.in', company: 'Indus Net Technologies' },
    { name: 'Nidhi Ruparel', email: 'nidhi@cystemslogic.com', company: 'Cystems Logic Inc' },
    { name: 'Nidhi Singh', email: 'nidhi.singh@iapcorp.com', company: 'IAP Company' },
    { name: 'Nidhi Srivastava', email: 'nidhi.srivastava@trangile.com', company: 'Trangile Services' },
    { name: 'Nidhuraj Prasannarajan', email: 'nidhuraj@everest.engineering', company: 'EverestEngineering' },
    { name: 'Nigel Crisanto', email: 'nigel@recruitnxt.com', company: 'RecruitNXT' },
    { name: 'Niharika Patel', email: 'niharika.patel@jetsynthesys.com', company: 'JetSynthesys' },
    { name: 'Nikhil Bhat', email: 'nikhil.bhat@lipi.in', company: 'Lipi Data Systems' },
    { name: 'Nikhil Jangir', email: 'nikhil.jangir@saviance.com', company: 'Saviance Technologies' },
    { name: 'Nikhil Kadu', email: 'nikhil.kadu@verinite.com', company: 'Verinite' },
    { name: 'Nikhil Kulkarni', email: 'nikhil.kulkarni@ncircletech.com', company: 'nCircle Tech' },
    { name: 'Nikhil Mooley', email: 'nikhil.m@purplle.com', company: 'Purplle.com' },
    { name: 'Nikita Trivedi', email: 'nikita@goleadingit.com', company: 'Leading IT' },
    { name: 'Nilangini Gupta', email: 'nilangini.gupta@panamaxil.com', company: 'Panamax' },
    { name: 'Nilesh Indulkar', email: 'nilesh.indulkar@trantorinc.com', company: 'Trantor' },
    { name: 'Nimesh Mathur', email: 'nimesh@haptik.ai', company: 'Haptik' },
    { name: 'Nimesh Shah', email: 'nimesh@jeavio.com', company: 'Jeavio' },
    { name: 'Nimmy Chowalloor', email: 'nimmy.c@v2solutions.com', company: 'V2Solutions' },
    { name: 'Nipsy Jhamb', email: 'nipsy.jhamb@altudo.co', company: 'Altudo' },
    { name: 'Nirmal Nimodiya', email: 'nirmaln@scorgconsult.com', company: 'SCORG International Consulting' },
    { name: 'Nirmala Nayak', email: 'nirmala@technobind.com', company: 'TechnoBind Solutions' },
    { name: 'Nirmiti Choudhari', email: 'nirmiti.hr@eventbeep.com', company: 'EventBeep' },
    { name: 'Nirupa Leeladhar', email: 'nirupa.l@smaartt.com', company: 'Smaartt Digital Consulting' },
    { name: 'Nirupama Sridhar', email: 'sridhar.n@qwikcilver.com', company: 'Qwikcilver Solutions' },
    { name: 'Nirzari Sen', email: 'nirzari.sen@benisontech.com', company: 'Benison Technologies' },
    { name: 'Nisha Motwani', email: 'nisha.motwani@pratititech.com', company: 'Pratiti Technologies' },
    { name: 'Nisha Nair', email: 'nisha.nair@sagarsoft.in', company: 'Sagarsoft' },
    { name: 'Nisha Nayar', email: 'nisha.n@technovert.com', company: 'Technovert' },
    { name: 'Nisha Roy', email: 'nisharoy@aabasoft.com', company: 'Aabasoft' },
    { name: 'Nisha Saini', email: 'nisha.saini@aurigait.com', company: 'Auriga IT Consulting' },
    { name: 'Nisha Singh', email: 'nisha.s@seanergydigital.com', company: 'Seanergy Digital' },
    { name: 'Nishant Gawand', email: 'nishant@smartkargo.com', company: 'SmartKargo' },
    { name: 'Nishant Shukla', email: 'nishant.shukla@hoonartek.com', company: 'Hoonartek' },
    { name: 'Nishita Algubelli', email: 'nishita@fissionlabs.com', company: 'Fission Labs' },
    { name: 'Nishith Parikh', email: 'nishith.parikh@krishtechnolabs.com', company: 'Krish TechnoLabs' },
    { name: 'Nishtha Sareen', email: 'nishtha.sareen@dionglobal.com', company: 'Dion Global Solutions' },
    { name: 'Nishu Mittal', email: 'nishu.nits@ongraph.com', company: 'OnGraph Technologies' },
    { name: 'Nita Aryasomayajula', email: 'naryasomayajula@rrootshell.com', company: 'Rrootshell Technologiiss' },
    { name: 'Nitasha Dusi', email: 'nitasha.dusi@atidiv.com', company: 'Atidiv' },
    { name: 'Nitesh Karir', email: 'nitesh.karir@moksatechnologies.com', company: 'mokSa Technologies' },
    { name: 'Nithyanandham Ravi', email: 'nithyanandham@facilio.com', company: 'Facilio' },
    { name: 'Nitika Bhandari', email: 'nitika.bhandari@mavenwave.com', company: 'Maven Wave' },
    { name: 'Nitin Gawli', email: 'nitin.g@intellectbizware.com', company: 'Intellect Bizware Services' },
    { name: 'Nitin Marwah', email: 'nitin.m@totalitglobal.com', company: 'Total IT Global' },
    { name: 'Nitin Nahata', email: 'nitin.nahata@gameskraft.com', company: 'Gameskraft' },
    { name: 'Anupriya Chaudhary', email: 'tempmovie08@gmail.com', company: 'PhysicsWallah' },
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
