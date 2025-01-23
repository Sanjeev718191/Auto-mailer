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
    { name: 'Lavanya', email: 'lavanya@urbancompany.com', company: 'Urban Company' },
    { name: 'Shruti Kher', email: 'shrutikher@urbancompany.com', company: 'Urban Company' },
    { name: 'Anjali Hirde', email: 'anjalihirde.int@urbancompany.com', company: 'Urban Company' },
    { name: 'Vanshika Madaan', email: 'vanshikamadaan.ext@urbancompany.com', company: 'Urban Company' },
    { name: 'Preeti Battagani', email: 'preetibattagani.ext@urbancompany.com', company: 'Urban Company' },
    { name: 'Ambesh Talwar', email: 'ambeshtalwar@urbancompany.com', company: 'Urban Company' },
    { name: 'Suvam Dash', email: 'suvamdash@urbancompany.com', company: 'Urban Company' },
    { name: 'Raghav Chandra', email: 'raghavchandra@urbancompany.com', company: 'Urban Company' },
    { name: 'Mohit Chaudhary', email: 'mohitchaudhary@urbancompany.com', company: 'Urban Company' },
    { name: 'Aditya Chaudhary', email: 'adityachaudhary@urbancompany.com', company: 'Urban Company' },
    { name: 'Anshuman Jain', email: 'anshumanjain@urbancompany.com', company: 'Urban Company' },
    { name: 'Abhishek Sharma', email: 'sharmaabhishek@urbancompany.com', company: 'Urban Company' },
    { name: 'Mukul Goyal', email: 'mukulgoyal@urbancompany.com', company: 'Urban Company' },
    { name: 'Harsh Garg', email: 'harshgarg@urbancompany.com', company: 'Urban Company' },
    { name: 'Sim', email: 'simriti.goel@vedantu.com', company: 'Vedantu' },
    { name: 'Prasanna Gundubogula', email: 'gundubogula.prasanna@vedantu.com', company: 'Vedantu' },
    { name: 'Sasank Jammi', email: 'sasank.jammi@vedantu.com', company: 'Vedantu' },
    { name: 'Kalyani Singh', email: 'kalyani.singh@vedantu.com', company: 'Vedantu' },
    { name: 'Amir Salman', email: 'amir.salman@vedantu.com', company: 'Vedantu' },
    { name: 'Neha Singh', email: 'neha.singh1@vedantu.com', company: 'Vedantu' },
    { name: 'Kumari Shweta', email: 'vcare@vedantu.com', company: 'Vedantu' },
    { name: 'Sadaf Shakil', email: 'sadaf.shakil@vedantu.com', company: 'Vedantu' },
    { name: 'Rehana Ali', email: 'rehana.ali@vedantu.com', company: 'Vedantu' },
    { name: 'Killada Aditya', email: 'killada.aditya@vedantu.com', company: 'Vedantu' },
    { name: 'Bhargavi Yatham', email: 'bhargavi.yatham@vedantu.com', company: 'Vedantu' },
    { name: 'Ujjwal Kumar', email: 'ujjwal.kumar@verse.in', company: 'dailyhunt' },
    { name: 'Abhishek Yadav', email: 'abhishek.yadav@dailyhunt.in', company: 'dailyhunt' },
    { name: 'Samarpit Khare', email: 'samarpit.khare@dailyhunt.in', company: 'dailyhunt' },
    { name: 'Rekha Mour', email: 'rekha.mour@dailyhunt.in', company: 'dailyhunt' },
    { name: 'Shrikar Kulkarni', email: 'shrikar.kulkarni@verse.in', company: 'dailyhunt' },
    { name: 'Aman Gautam', email: 'aman.gautam@verse.in', company: 'dailyhunt' },
    { name: 'Sireesha', email: 'sireesha.kg@verse.in', company: 'dailyhunt' },
    { name: 'Safia Jamal', email: 'safia.jamal@dailyhunt.in', company: 'dailyhunt' },
    { name: 'Sravan Turibilli', email: 'sravan.turibilli@byjusfutureschool.com', company: 'WhiteHat Jr' },
    { name: 'Maya', email: 'am@whitehatjr.com', company: 'WhiteHat Jr' },
    { name: 'Krishnendu Nandy', email: 'krishnendu.nandy@whitehatjr.com', company: 'WhiteHat Jr' },
    { name: 'Nafisa Shaikh', email: 'nafisa.shaikh@whitehatjr.com', company: 'WhiteHat Jr' },
    { name: 'Mushafiq Mir', email: 'mushafiq.mir@whitehatjr.com', company: 'WhiteHat Jr' },
    { name: 'Shanker Perumalla', email: 'shanker.perumalla@whitehatjr.com', company: 'WhiteHat Jr' },
    { name: 'Shubham Jain', email: 'shubham.jain@whitehatjr.com', company: 'WhiteHat Jr' },
    { name: 'Rajkumar Jangid', email: 'rajkumar.jangid@whitehatjr.com', company: 'WhiteHat Jr' },
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
    { name: 'Ganapathy D', email: 'ganapathy.d@mresult.com', company: 'MResult' },
    { name: 'Ganesh Somisetti', email: 'gsomisetti@email.xtglobal.com', company: 'XTGlobal' },
    { name: 'Gargi Rajan', email: 'gargi.rajan@unicommerce.com', company: 'Unicommerce eSolutions' },
    { name: 'Garima Pandey', email: 'garima.pandey@epsoftinc.com', company: 'EPSoft' },
    { name: 'Garima Pandey', email: 'garima.pandey@rategain.com', company: 'RateGain' },
    { name: 'Garima Rathi', email: 'garima.rathi@condecosoftware.com', company: 'Condeco' },
    { name: 'Garima Sangwan', email: 'garima.sangwan@accops.com', company: 'Accops Systems' },
    { name: 'Garima Sharma', email: 'gsharma@nasscom.in', company: 'NASSCOM' },
    { name: 'Gaurang Joshi', email: 'gyjoshi@workforcelogiq.com', company: 'Workforce Logiq' },
    { name: 'Gaurav Gaur', email: 'gauravgaur@ironsystems.com', company: 'Iron Systems' },
    { name: 'Gaurav Saxena', email: 'gaurav.s@amigainformatics.com', company: 'Amiga Informatics' },
    { name: 'Gaurav Upadhyay', email: 'gaurav.upadhyay@v2solutions.com', company: 'V2Solutions' },
    { name: 'Gautam Kar', email: 'gautam@firstconnectsolutions.com', company: 'FirstConnect Solutions' },
    { name: 'Gautam Nautiyal', email: 'gautamn@tblocks.com', company: 'TechBlocks' },
    { name: 'Gautam Pathak', email: 'gautam.pathak@opshub.com', company: 'OpsHub' },
    { name: 'Gautam Prasad', email: 'gautam.prasad@ondemandagility.com', company: 'OnDemand Agility Solutions' },
    { name: 'Gautam Tungare', email: 'gautam.tungare@6degreesit.com', company: '6DegreesIT' },
    { name: 'Gautham Premkumar', email: 'gautham.p@accubits.com', company: 'Accubits Technologies' },
    { name: 'Gayathri Arunkumar', email: 'gayathri.arunkumar@tvsnext.io', company: 'TVS Next' },
    { name: 'Gayathri Nagaraj', email: 'gayathri.nagaraj@responsivemts.com', company: 'Responsive Media Tech Services' },
    { name: 'Gayatri Moghe', email: 'gayatri@aumnitechworks.com', company: 'Aumni Techworks' },
    { name: 'Gayatri Nikkula', email: 'gayatri.nikkula@inry.com', company: 'INRY' },
    { name: 'Gayatri P', email: 'gayatrip@gathi.com', company: 'Gathi Analytics' },
    { name: 'Gayatri Patil', email: 'g.patil@kokonetworks.com', company: 'KOKO Networks' },
    { name: 'Gayatri Shanker', email: 'gayatri@dyooti.com', company: 'Dyooti' },
    { name: 'Gazal Singhania', email: 'gazal@imarkinfotech.com', company: 'iMark Infotech' },
    { name: 'Geetanjali Toopran', email: 'geetanjali.toopran@solix.com', company: 'Solix Technologies' },
    { name: 'Giri Babu', email: 'giri.babu@neovatic.com', company: 'Neovatic Technologies' },
    { name: 'Giridhar D', email: 'giridhar.d@e5.ai', company: 'Element5' },
    { name: 'Giridhar Vemuganti', email: 'gvemuganti@tataunistore.com', company: 'Tata CLiQ' },
    { name: 'Girish', email: 'girish.subramanian@symphonyretailai.com', company: 'Symphony RetailAI' },
    { name: 'Girish Kumar', email: 'girish.k@infomazeapps.com', company: 'INFOMAZE' },
    { name: 'Gita Madhuri', email: 'gita.madhuri@covalenseglobal.com', company: 'Covalense Global' },
    { name: 'Gitanjali Venkatesh', email: 'gitanjali.venkatesh@excelenciaconsulting.com', company: 'Excelencia' },
    { name: 'Gitanjali Verma', email: 'gitanjali.verma@w3villa.com', company: 'W3villa Technologies' },
    { name: 'Gopalakrishna Gubbi', email: 'gopalakrishna.gubbi@jsw.in', company: 'JSoft Solutions' },
    { name: 'Goutham B', email: 'gouthamb@systelinc.com', company: 'Systel' },
    { name: 'Govind Bhandari', email: 'govind.bhandari@daloopa.com', company: 'Daloopa' },
    { name: 'Govind Raj', email: 'govind@eoxvantage.com', company: 'EOX Vantage' },
    { name: 'Govinda Shastry', email: 'govinda.shastry@igiusa.com', company: 'Infotech Global' },
    { name: 'Gracy Dsouza', email: 'gracy@perfios.com', company: 'Perfios Software Solutions' },
    { name: 'Gripson Martes', email: 'gripson.martes@detecttechnologies.com', company: 'Detect Technologies' },
    { name: 'Gugapriya O', email: 'gugapriya@ideassion.com', company: 'Ideassion Technology Solutions' },
    { name: 'Gulshan S', email: 'gulshan@near.com', company: 'Near' },
    { name: 'Gunjan Mishra', email: 'gunjan@rnftechnologies.com', company: 'RNF Technologies' },
    { name: 'Gurpreet Jaggi', email: 'gurpreet.jaggi@betsol.com', company: 'BETSOL' },
    { name: 'Gurpreet Singh', email: 'gurpreet.singh@wingify.com', company: 'Wingify' },
    { name: 'Gurucharan Singh', email: 'guru@one.com', company: 'one.com' },
    { name: 'Gyan Dash', email: 'gyan@centroxy.com', company: 'Centroxy' },
    { name: 'Hanish Tiwari', email: 'hanish.tiwari@ant.works', company: 'AntWorks' },
    { name: 'Hank Mishra', email: 'hank.mishra@anchanto.com', company: 'Anchanto' },
    { name: 'Happy Vachhani', email: 'happy@capermint.com', company: 'Capermint Technologies' },
    { name: 'Hari Krishnan', email: 'hari.krishnan@avasotech.com', company: 'AVASO Technology Solutions' },
    { name: 'Hari Paramatmuni', email: 'harikishore.p@excelra.com', company: 'Excelra' },
    { name: 'Hari Prashanth', email: 'hari.p@westagilelabs.com', company: 'West Agile Labs' },
    { name: 'Harikrishna Bachala', email: 'harikrishna.bachala@mitsind.com', company: 'Monarch Info Tech Services' },
    { name: 'Hariprasad Adthale', email: 'hariprasadadthale@askbrake.com', company: 'ASK Automotive' },
    { name: 'Haris Ali', email: 'haris.a@truglobal.com', company: 'TRUGlobal' },
    { name: 'Harishankar Krishnamurthi', email: 'hari@zumen.com', company: 'Zumen Inc' },
    { name: 'Harishankher Selvaraj', email: 'harishankher@codingmart.com', company: 'Codingmart Technologies' },
    { name: 'Harista Jakhar', email: 'harista.jakhar@impelsys.com', company: 'Impelsys' },
    { name: 'Harith Chambravalli', email: 'harith.chambravalli@observe.ai', company: 'Observe.AI' },
    { name: 'Haritha Etakula', email: 'haritha.etakula@jnettechnologies.com', company: 'JNET Technologies' },
    { name: 'Harpreet Bali', email: 'harpreet.bali@nvish.com', company: 'NVISH Solutions' },
    { name: 'Harsh Khanna', email: 'harshk@elementsgs.com', company: 'Atlas' },
    { name: 'Harshada Moharil', email: 'harshada.moharil@freshgravity.com', company: 'Fresh Gravity' },
    { name: 'Harshida Bhamare', email: 'harshida@cctech.co.in', company: 'Centre for Computational Technologies' },
    { name: 'Harshiika Upadhyay', email: 'husahu@ciphercloud.com', company: 'NTT DATA' },
    { name: 'Harshita Rathore', email: 'harshita.rathore@moonfroglabs.com', company: 'Moonfrog Labs' },
    { name: 'Haseeb Imran', email: 'imran.h@apar.com', company: 'Apar Peopleworld Software' }
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
