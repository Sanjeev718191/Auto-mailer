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
    { name: 'Amit Sharma', email: 'asharma@confluent.io', company: 'Confluent' },
    { name: 'Happy Arora', email: 'haarora@confluent.io', company: 'Confluent' },
    { name: 'Kai Waehner', email: 'kai.waehner@confluent.io', company: 'Confluent' },
    { name: 'Pratul Yadav', email: 'prayadav@confluent.io', company: 'Confluent' },
    { name: 'Karanpreet Singh', email: 'kasingh@confluent.io', company: 'Confluent' },
    { name: 'Nadim', email: 'nhossain@confluent.io', company: 'Confluent' },
    { name: 'Colleen McCreary', email: 'cmccreary@confluent.io', company: 'Confluent' },
    { name: 'Subashini Venkatesh', email: 'svenkatesh@confluent.io', company: 'Confluent' },
    { name: 'Rohit Kumar', email: 'rohkumar@confluent.io', company: 'Confluent' },
    { name: 'Karthik Nair', email: 'knair@confluent.io', company: 'Confluent' },
    { name: 'Vikash Chauhan', email: 'vchauhan@confluent.io', company: 'Confluent' },
    { name: 'Tanya Agarwal', email: 'tagarwal@confluent.io', company: 'Confluent' },
    { name: 'John Sheldon', email: 'jsheldon@confluent.io', company: 'Confluent' },
    { name: 'Nada Sarsour', email: 'nsarsour@confluent.io', company: 'Confluent' },
    { name: 'Chiaya Hasegawa', email: 'chasegawa@confluent.io', company: 'Confluent' },
    { name: 'Rachel Tessier', email: 'rtessier@confluent.io', company: 'Confluent' },
    { name: 'Teresa Schnorr', email: 'tschnorr@confluent.io', company: 'Confluent' },
    { name: 'Saubhagya Sharma', email: 'sasharma@confluent.io', company: 'Confluent' },
    { name: 'Dominic McNamara', email: 'dmcnamara@confluent.io', company: 'Confluent' }
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
    { name: 'Meghana V', email: 'meghana@idrive.com', company: 'IDrive Software India' },
    { name: 'Meghna Mahajan', email: 'meghnam@smartek21.com', company: 'SmarTek21' },
    { name: 'Mehak Fath', email: 'mehak@startupnation.com', company: 'StartUP' },
    { name: 'Meher Gaurav', email: 'gaurav@mphrx.com', company: 'mphrX' },
    { name: 'Michelle Joseph', email: 'michelle.joseph@gupshup.io', company: 'Gupshup' },
    { name: 'Mili Panicker', email: 'mili.panicker@webengage.com', company: 'WebEngage' },
    { name: 'Minal Vilekar', email: 'minal.vilekar@theimperative.in', company: 'Imperative Business Ventures' },
    { name: 'Minal Wadlawala', email: 'minal@protechmanize.com', company: 'ProTechmanize Solutions' },
    { name: 'Miriam Shaju', email: 'miriam.shaju@avanzegroup.com', company: 'Avanze' },
    { name: 'Mirunalini Mothilal', email: 'mirunalini@volantetech.com', company: 'Volante Technologies' },
    { name: 'Mithun Jose', email: 'mithun.jose@savantis.com', company: 'Savantis Solutions LLC' },
    { name: 'Mittal Patel', email: 'm.patel@easternenterprise.com', company: 'Eastern Enterprise' },
    { name: 'Mohamed Hussain', email: 'mhussain@trimaxamericas.com', company: 'Data Glove' },
    { name: 'Mohammad Siddique', email: 'msiddique@quessgts.com', company: 'Quess GTS' },
    { name: 'Mohammed Hussain', email: 'mohammed@uniphore.com', company: 'Uniphore' },
    { name: 'Mohammed Rizwan', email: 'mohammed.rizwan@reverieinc.com', company: 'Reverie Language Technologies' },
    { name: 'Mohammed Samiullah', email: 'samiullah.mohammed@antheliohealth.com', company: 'Anthelio Healthcare Solutions' },
    { name: 'Mohammed Yaseen', email: 'tariq.yaseen@panzertechnologies.net', company: 'Panzer Technologies' },
    { name: 'Mohan Joshi', email: 'mohan.joshi@myglamm.com', company: 'MyGlamm' },
    { name: 'Mohini Bansal', email: 'mbansal@deqode.com', company: 'Deqode' },
    { name: 'Monica Bajaj', email: 'monica.bajaj@soft-corner.com', company: 'Benchmark IT Solutions' },
    { name: 'Monica Kamal', email: 'monica@pingasolutions.com', company: 'Pinga Solution' },
    { name: 'Monika Jasrotia', email: 'monika@precisiontechcorp.com', company: 'Precision Technologies' },
    { name: 'Monika Koul', email: 'monika@embitel.com', company: 'Embitel Technologies' },
    { name: 'Monika Miglani', email: 'monika.miglani@zigram.tech', company: 'ZIGRAM' },
    { name: 'Monika Save', email: 'monika@bridgelabz.com', company: 'BridgeLabz' },
    { name: 'Monika Soutiyal', email: 'monika@techretail.in', company: 'Tech Connect Services' },
    { name: 'Monila Gupta', email: 'mgupta@helm360.com', company: 'HELM360' },
    { name: 'Moumi Chatterjee', email: 'moumi@spartanpoker.com', company: 'QUADRIFIC MEDIA' },
    { name: 'Mrudhula Guda', email: 'mrudhula.g@feuji.com', company: 'Feuji Inc' },
    { name: 'Mrudul Godavarthi', email: 'mrudul.k@fssglobal.in', company: 'Federal Soft Systems' },
    { name: 'Mruga Dave', email: 'mruga.dave@vagaro.com', company: 'Vagaro Inc' },
    { name: 'Mrugesh Maisuriya', email: 'mrugesh.maisuriya@procuretiger.com', company: 'eProcurement Technologies' },
    { name: 'Mrugesh Raval', email: 'mrugesh.raval@nascentinfo.com', company: 'Nascent Info Technologies' },
    { name: 'Mugdha Wagh', email: 'mugdha.wagh@ellicium.com', company: 'Ellicium Solutions' },
    { name: 'Muhammed Rafi', email: 'payable@awign.com', company: 'Awign' },
    { name: 'Mujeeb Khan', email: 'mujeeb@panzertechnologies.net', company: 'Panzer Technologies' },
    { name: 'Mukesh Tiwary', email: 'mukesh.t@lrsservices.in', company: 'LRS Services (P)' },
    { name: 'Mukta Dar', email: 'mukta.dar@absolutdata.com', company: 'Absolutdata Analytics' },
    { name: 'Mukta Dewan', email: 'mukta.dewan@caeliusconsulting.com', company: 'Caelius Consulting' },
    { name: 'Murali Krishnamoorthy', email: 'murali.k@excelacom.in', company: 'Excelacom Technologies' },
    { name: 'Murali Nagarajan', email: 'murali@softlogicsys.in', company: 'Softlogic Systems' },
    { name: 'Murugessan Panchatcharam', email: 'pmurugesan@corenttech.com', company: 'Corent Technology' },
    { name: 'Muthukumar K', email: 'muthukumar.k@technogeninc.com', company: 'TechnoGen' },
    { name: 'Muthyala Manasa', email: 'muthyala.manasa@absyz.com', company: 'ABSYZ Inc' },
    { name: 'Naga Siddharth', email: 'n.siddharth@urbanpiper.com', company: 'UrbanPiper' },
    { name: 'Nagamani Yerneni', email: 'nagamani.yerneni@softsol.com', company: 'SoftSol' },
    { name: 'Naganagouda J', email: 'naganagouda.sj@globaledgesoft.com', company: 'GlobalEdge' },
    { name: 'Naindeep Kaur', email: 'naindeep.kaur@bpktechmail.com', company: 'BPK Technologies' },
    { name: 'Nalini Panwar', email: 'nalini@amresearch.in', company: 'AM Research' }
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
