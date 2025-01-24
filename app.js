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
    { name: 'Srushti', email: 'srushti.p@zoomcar.com', company: 'Zoomcar' },
    { name: 'Anirudha Jadi', email: 'anirudha.jadi@zoomcar.com', company: 'Zoomcar' },
    { name: 'Roopal Kumar', email: 'roopal.kumar@zoomcar.com', company: 'Zoomcar' },
    { name: 'Abhilash Kasliwal', email: 'abhilash.kasliwal@zoomcar.com', company: 'Zoomcar' },
    { name: 'Upendra Dixit', email: 'upendra.dixit@zoomcar.com', company: 'Zoomcar' },
    { name: 'Faraz Alam', email: 'faraz.alam@zoomcar.com', company: 'Zoomcar' },
    { name: 'Bhumika', email: 'bhumika.tp@zoomcar.com', company: 'Zoomcar' },
    { name: 'Chaitanya Asati', email: 'chaitanya.asati@zoomcar.com', company: 'Zoomcar' },
    { name: 'Vikas Kesarwani', email: 'vikas.kesarwani@zoomcar.com', company: 'Zoomcar' },
    { name: 'Alka Namdeo', email: 'alka.namdeo@zoomcar.com', company: 'Zoomcar' },
    { name: 'Ashish Roy', email: 'ashish.roy@zoomcar.com', company: 'Zoomcar' },
    { name: 'Dhiren Thirani', email: 'dhiren.thirani@zoomcar.com', company: 'Zoomcar' },
    { name: 'Shishir Dwivedi', email: 'shishir.dwivedi@zoomcar.com', company: 'Zoomcar' },
    { name: 'Aezaz Ahmed', email: 'aezaz.ahmed@zoomcar.com', company: 'Zoomcar' },
    { name: 'Ayush Kumar', email: 'ayush.kumar@zoomcar.com', company: 'Zoomcar' },
    { name: 'Aman Kedia', email: 'aman.kedia@zoomcar.com', company: 'Zoomcar' },
    { name: 'Deepinder Goyal', email: 'deepinder@zomato.com', company: 'Zomato' },
    { name: 'Mahak Agarwal', email: 'mahak.agarwal@zomato.com', company: 'Zomato' },
    { name: 'Nikitha Francis', email: 'nikitha.francis@zomato.com', company: 'Zomato' },
    { name: 'Mrinal Srivastava', email: 'mrinal.srivastava@zomato.com', company: 'Zomato' },
    { name: 'Mehak Hasija', email: 'mehak.hasija@zomato.com', company: 'Zomato' },
    { name: 'Daminee Sawhney', email: 'daminee.sawhney@zomato.com', company: 'Zomato' },
    { name: 'Pranita Negi', email: 'pranita.negi@zomato.com', company: 'Zomato' },
    { name: 'Asheesh Sharma', email: 'asheesh.sharma@zomato.com', company: 'Zomato' },
    { name: 'Savinay Goel', email: 'savinay.goel@zomato.com', company: 'Zomato' },
    { name: 'Himanshu Shukla', email: 'himanshu.shukla@zomato.com', company: 'Zomato' },
    { name: 'Piyush Maheswari', email: 'piyush.maheswari@zomato.com', company: 'Zomato' },
    { name: 'Apoorv Arora', email: 'apoorv.arora@zomato.com', company: 'Zomato' },
    { name: 'Shivani Singh', email: 'shivani.singh@zomato.com', company: 'Zomato' },
    { name: 'Abhishek Kashyap', email: 'abhishek.kashyap@zomato.com', company: 'Zomato' },
    { name: 'Komal Aggarwal', email: 'komal.aggarwal@zomato.com', company: 'Zomato' },
    { name: 'Joy Joice', email: 'joy.joice@zomato.com', company: 'Zomato' },
    { name: 'Paraj Tamang', email: 'paraj.tamang@zomato.com', company: 'Zomato' },
    { name: 'Anisha Das', email: 'anisha.das@zomato.com', company: 'Zomato' },
    { name: 'Archishman Pyne', email: 'archishman.pyne@zomato.com', company: 'Zomato' },
    { name: 'Doly Mukherjee', email: 'doly.mukherjee@zomato.com', company: 'Zomato' },
    { name: 'Abheek Roy', email: 'abheek.roy@zomato.com', company: 'Zomato' },
    { name: 'Himanshu Gupta', email: 'himanshu.gupta@zomato.com', company: 'Zomato' },
    { name: 'Dhruv Kothari', email: 'dhruv.kothari@zomato.com', company: 'Zomato' },
    { name: 'Deependra Singh', email: 'deependra.singh@zomato.com', company: 'Zomato' },
    { name: 'Rajesh Pratap', email: 'rajesh.pratap@zomato.com', company: 'Zomato' },
    { name: 'Harpal Sohi', email: 'harpal.sohi@zolve.com', company: 'Zolve' },
    { name: 'Shelly Gupta', email: 'shelly.gupta@zolve.com', company: 'Zolve' },
    { name: 'Babu Yadav', email: 'babu@zolve.com', company: 'Zolve' },
    { name: 'Divya Nandini', email: 'divya.nandini@zolve.com', company: 'Zolve' },
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
    { name: 'Heena Bawa', email: 'heena@clevertap.com', company: 'CleverTap' },
    { name: 'Hemant Batra', email: 'hemant.batra@supraits.com', company: 'SupraES.' },
    { name: 'Hemant Pawar', email: 'hemant.pawar@ndsglobal.com', company: 'NextGen Digital Solutions' },
    { name: 'Hemendra Bist', email: 'hemendra.bist@u2opiamobile.com', company: 'U2opia Mobile' },
    { name: 'Hemlata Goel', email: 'hemlata.goel@shl.com', company: 'Aspiring Minds' },
    { name: 'Hemraj Desai', email: 'hemraj@cloudthat.in', company: 'CloudThat' },
    { name: 'Hetal', email: 'hsoni@infosenseglobal.com', company: 'Infosenseglobal Inc' },
    { name: 'Hima Kulshrestha', email: 'hima@systango.com', company: 'Systango' },
    { name: 'Himagauri Kashalikar', email: 'himagauri@metamorphtech.com', company: 'MetaMorphoSys Technologies' },
    { name: 'Himanshu Bhatnagar', email: 'himanshub@appcino.com', company: 'Appcino Technologies' },
    { name: 'Himanshu Mishra', email: 'hmishra@valethi.com', company: 'Valethi Technologies' },
    { name: 'Himanshu Raina', email: 'himanshu@ditserv.com', company: 'DEV IT SERV' },
    { name: 'Hina Khan', email: 'hina.khan@acuteinformatics.in', company: 'Acute Informatics' },
    { name: 'Hitendra Singh', email: 'hsingh@hitachi-solutions.com', company: 'Hitachi Solutions India' },
    { name: 'Hitesh Nair', email: 'hitesh.nair@aqmtechnologies.com', company: 'AQM Technologies' },
    { name: 'Honeydeep Sabharwal', email: 'honeydeep@pando.ai', company: 'PandoCorp' },
    { name: 'Hrd Ltd', email: 'hrd@mawaimail.com', company: 'Mawai Infotech' },
    { name: 'Hrishikesh Nc', email: 'hrishikesh@sterlingsoftware.co.in', company: 'Sterling Software' },
    { name: 'Huma Sayed', email: 'huma@dctinc.com', company: 'Digital Convergence Technologies' },
    { name: 'Humera Iffath', email: 'humera.iffath@truecaller.com', company: 'Truecaller' },
    { name: 'Huzefa Retiwala', email: 'huzefa.retiwala@metro-services.in', company: 'METRO SERVICES' },
    { name: 'Ilham Mulla', email: 'ilham.mulla@blazeclan.com', company: 'Blazeclan Technologies' },
    { name: 'Img Infotech', email: 'img@imgglobalinfotech.com', company: 'IMG Global Infotech' },
    { name: 'Imran Nazir', email: 'imrannd@skoruz.com', company: 'Skoruz Technologies' },
    { name: 'Inderjeet Gujral', email: 'inderjeet.gujral@apolisrises.com', company: 'Apolis' },
    { name: 'Indrakumar Thirunavukkarasu', email: 'tindrakumar@ntrustinfotech.com', company: 'NTrust Infotech' },
    { name: 'Inventum Recruiter', email: 'inventum.recruiter@inventum.net', company: 'Inventum' },
    { name: 'Irudia Anthony', email: 'irudia.anthony@h1insights.com', company: 'Shore Group Associates' },
    { name: 'Ishani Sharma', email: 'ishani.sharma@idctechnologies.com', company: 'KBC Technologies Group' },
    { name: 'Isle Fernandes', email: 'isle@opendestinations.com', company: 'Open Destinations' },
    { name: 'Jabeen Pathan', email: 'jabeen@hulkapps.com', company: 'HulkApps' },
    { name: 'Jacob Joy', email: 'jacob.j@wrenchsolutions.com', company: 'WRENCH Solutions' },
    { name: 'Jagadabhi Krishna', email: 'jagadabhi.krishna@leoforce.com', company: 'Leoforce' },
    { name: 'Jagadish V', email: 'jagadish.v@realworld-one.com', company: 'realworld one' },
    { name: 'Jaipal Addagatla', email: 'jaipal.addagatla@mutualmobile.com', company: 'Mutual Mobile' },
    { name: 'Jairaj Jagtap', email: 'jairaj.jagtap@satincorp.com', company: 'SA Technologies' },
    { name: 'Jaisy Augustine', email: 'jaisy@freshersworld.com', company: 'Freshersworld.com' },
    { name: 'Janaki Naik', email: 'janaki.naik@tatadigital.com', company: 'Tata Digital' },
    { name: 'Janani Prakaash', email: 'janani.prakaash@quantela.com', company: 'Quantela' },
    { name: 'Janet Paul', email: 'jpaul@securonix.com', company: 'Securonix' },
    { name: 'Jasinta Francis', email: 'jasinta@experience.com', company: 'Experience.com' },
    { name: 'Jaslieen Kaur', email: 'jaslieen.baghh@blancco.com', company: 'Blancco Technology Group' },
    { name: 'Jasmine Framjee', email: 'jasmine.f@ptechnosoft.com', company: 'Perpetuuiti Technosoft PTE' },
    { name: 'Jasmine Vaswani', email: 'jasmine.vaswani@worldfashionexchange.com', company: 'WFX - World Fashion Exchange' },
    { name: 'Jaspreet Mehta', email: 'jaspreetsingh@dataglove-us.com', company: 'Trimax Americas' },
    { name: 'Jaya Laxmi', email: 'jaya.laxmi@vincit.fi', company: 'Vincit' },
    { name: 'Jaya Pandey', email: 'jaya.pandey@brainvire.com', company: 'Brainvire Infotech' },
    { name: 'Jayakrishnan M', email: 'jay@customerxps.com', company: 'CustomerXPs' },
    { name: 'Jayakumar N', email: 'njayakumar@a-bits.com', company: 'Apps Business IT Solutions' },
    { name: 'Jayaprakash Yangal', email: 'jayaprakash@mirafra.com', company: 'Mirafra Technologies' },
    { name: 'Jayashree Jayanth', email: 'jayashree.jayanth@ushur.com', company: 'Ushur' },
    { name: 'Jayashri Benjamin', email: 'jayashri@amrutsoftware.com', company: 'Amrut Software' },
    { name: 'Jayati Pardhy', email: 'jayati.p@keka.com', company: 'Keka HR' },
    { name: 'Jayendra Solanki', email: 'jasolanki@workforcelogiq.com', company: 'Workforce Logiq' },
    { name: 'Jegannathan Balasubramanian', email: 'jegannathan@isolve.global', company: 'iSolve Technologies' },
    { name: 'Jeswin Thomas', email: 'jeswin.thomas@questionpro.com', company: 'QuestionPro' },
    { name: 'Jimeet Jain', email: 'jimeet@metamorphtech.com', company: 'MetaMorphoSys Technologies' },
    { name: 'Jinu Jose', email: 'jinu@m2comsys.com', company: 'M Squared Software and Services' },
    { name: 'Jitendra Das', email: 'jitendra.das@workinsync.io', company: 'WorkInSync' },
    { name: 'Jitendra Wankhede', email: 'jitendra.wankhede@anuntatech.com', company: 'Anunta Tech' },
    { name: 'Jitesh Asna', email: 'jitesh@softnice.com', company: 'SoftNice' },
    { name: 'Jithesh Vijayan', email: 'jithesh.v@zucisystems.com', company: 'Zuci Systems' },
    { name: 'Job Pixentia', email: 'jpixentia@pixentia.com', company: 'Pixentia' },
    { name: 'Joe M', email: 'joem@itamerica.com', company: 'IT America Inc' },
    { name: 'Joel Lobo', email: 'joel.lobo@rtcamp.com', company: 'rtCamp' },
    { name: 'Johnson Kasukurthi', email: 'johnsonk@netrovert.net', company: 'Netrovert Software' },
    { name: 'Joseph Francis', email: 'joseph@vdartinc.com', company: 'Dimiour' },
    { name: 'Joshua Henry', email: 'joshua.henry@cloudsek.com', company: 'CloudSEK' },
    { name: 'Joshua T', email: 'joshua.t@sailotech.com', company: 'Sailotech' },
    { name: 'Jothi Prakash', email: 'jothi.prakash@bwdesigngroup.com', company: 'Barry-Wehmiller International' },
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
