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
    { name: 'Ankita Das', email: 'das.ankita@flipkart.com', company: 'Flipkart' },
    { name: 'Achappa Bheemaiah', email: 'achappa.bheemaiah@flipkart.com', company: 'Flipkart' },
    { name: 'Jeyandran Venugopal', email: 'jeyan.v@flipkart.com', company: 'Flipkart' },
    { name: 'Upasana Singh', email: 'upasana.singh@flipkart.com', company: 'Flipkart' },
    { name: 'Divya Porwal', email: 'divya.porwal@flipkart.com', company: 'Flipkart' },
    { name: 'Sumit Chandra', email: 'sumit.chandra@flipkart.com', company: 'Flipkart' },
    { name: 'Manisha Singh', email: 'manisha.jadaun@flipkart.com', company: 'Flipkart' },
    { name: 'Varadharaju Janardhanan', email: 'varadharaju.j@flipkart.com', company: 'Flipkart' },
    { name: 'Avinash Hans', email: 'avinash@flipkart.com', company: 'Flipkart' },
    { name: 'Ashish Koul', email: 'ashish.koul@flipkart.com', company: 'Flipkart' },
    { name: 'MD FARID Siliguri', email: 'farid.siliguri@flipkart.com', company: 'Flipkart' },
    { name: 'Ajay Singh', email: 'ajay.myntra@flipkart.com', company: 'Flipkart' },
    { name: 'Ajit Kumar Pattanaik', email: 'ajit.pattanaik@flipkart.com', company: 'Flipkart' },
    { name: 'Muskan Jain', email: 'muskan.jain1@flipkart.com', company: 'Flipkart' },
    { name: 'Mitakshi Gupta', email: 'mitakshi.g@flipkart.com', company: 'Flipkart' },
    { name: 'Vivek Goyal', email: 'goyal.vivek@flipkart.com', company: 'Flipkart' },
    { name: 'Kartik Jain', email: 'kartik.jain@flipkart.com', company: 'Flipkart' },
    { name: 'Anurag Baidyanath', email: 'anurag.baidyanath@flipkart.com', company: 'Flipkart' },
    { name: 'Naveen Chaudhary', email: 'naveen.c@flipkart.com', company: 'Flipkart' },
    { name: 'Prabhat Ranjan', email: 'prabhat.ranjan@flipkart.com', company: 'Flipkart' },
    { name: 'Ravi', email: 'chandra.ravi@flipkart.com', company: 'Flipkart' },
    { name: 'Karthikeyan Annamalai', email: 'a.karthikeyan@flipkart.com', company: 'Flipkart' },
    { name: 'Vivek Bolajwar', email: 'vbolajwar@salesforce.com', company: 'Salesforce' },
    { name: 'Daniel Diaz', email: 'ddiaz@salesforce.com', company: 'Salesforce' },
    { name: 'Mayank', email: 'mdwivedi@salesforce.com', company: 'Salesforce' },
    { name: 'Arpit Trivedi', email: 'arpit.trivedi@salesforce.com', company: 'Salesforce' },
    { name: 'Thirumalesh Reddy', email: 'treddy@salesforce.com', company: 'Salesforce' },
    { name: 'Yuu Okiyama', email: 'yokiyama@salesforce.com', company: 'Salesforce' },
    { name: 'Preethi Sharma', email: 'p.sharma@salesforce.com', company: 'Salesforce' },
    { name: 'John McFill', email: 'mjohn@salesforce.com', company: 'Salesforce' },
    { name: 'Siddhi Singh', email: 'singh.s@salesforce.com', company: 'Salesforce' },
    { name: 'Brian', email: 'brian.davis@salesforce.com', company: 'Salesforce' },
    { name: 'Ann Ellis', email: 'ann.ellis@salesforce.com', company: 'Salesforce' },
    { name: 'Rashika Ram', email: 'rram@salesforce.com', company: 'Salesforce' },
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
    { name: 'Latha Shankar', email: 'lshankar@liventus.com', company: 'Liventus' },
    { name: 'Lavita Nathani', email: 'lavita.n@endurance.com', company: 'Newfold Digital' },
    { name: 'Laxman Reddy', email: 'laxman.reddy@lorhanit.com', company: 'Lorhan IT' },
    { name: 'Leela Madhuri', email: 'leela.madhuri@cashapona.com', company: 'Cashapona Technologies' },
    { name: 'Leena Arora', email: 'leena@getcerta.com', company: 'Certa' },
    { name: 'Leena Xavier', email: 'leena.xavier@solitontech.com', company: 'Soliton Technologies' },
    { name: 'Linju Varughese', email: 'lvarughese@suyati.com', company: 'Suyati Technologies' },
    { name: 'Lipika Mohanty', email: 'lipika.mohanty@crmnext.com', company: 'CRMNEXT' },
    { name: 'Lisa Crage', email: 'lisacrage@insolutionsglobal.com', company: 'In-Solutions Global' },
    { name: 'Liton Saha', email: 'litons@innov.in', company: 'Innovsource' },
    { name: 'Lituja Mishra', email: 'lituja.mishra@apmosys.in', company: 'ApMoSys Technologies' },
    { name: 'Livin Varghese', email: 'livin.varghese@teqfocus.com', company: 'Teqfocus' },
    { name: 'Logesh Chandramoorthy', email: 'logesh@clumio.com', company: 'Clumio' },
    { name: 'Lokesh Gurgela', email: 'lokesh@nexgeniots.com', company: 'Nexgen IOT Solutions' },
    { name: 'Luisa Mohanty', email: 'luisa.mohanty@rategain.com', company: 'RateGain' },
    { name: 'Lydia Dsouza', email: 'lydia.dsouza@progility.com.au', company: 'Progility Technologies' },
    { name: 'Lydia D\'Souza', email: 'lydia.dsouza@progilitytech.com', company: 'Progility Technologies' },
    { name: 'Lyndon Saldanha', email: 'lyndon.saldanha@manthan.com', company: 'Manthan' },
    { name: 'Maanoj Mishra', email: 'maanoj@betterplace.co.in', company: 'BetterPlace' },
    { name: 'Maclean Raphael', email: 'maclean.raphael@wepindia.com', company: 'WeP Peripherals' },
    { name: 'Madhan Kumar', email: 'madhan.kumar@aditiconsulting.com', company: 'Aditi Consulting' },
    { name: 'Madhav Mallela', email: 'madhava.mallela@microexcel.com', company: 'Microexcel Inc' },
    { name: 'Madhavee Singh', email: 'madhavee.singh@blucognition.com', company: 'bluCognition' },
    { name: 'Madhavi G', email: 'madhavig@operative.com', company: 'Operative' },
    { name: 'Madhu Kapu', email: 'madhu.kapu@allyis.com', company: 'Allyis' },
    { name: 'Madhu Nakkala', email: 'madhu.n@qualizeal.com', company: 'QualiZeal' },
    { name: 'Madhura Lanjekar', email: 'madhura.lanjekar@clariontechnologies.co.in', company: 'Clarion Technologies' },
    { name: 'Madhuri Mhamankar', email: 'mmhamankar@yotta.com', company: 'Yotta Infrastructure Solutions' },
    { name: 'Madhuri Nandgaonkar', email: 'madhuri@gupshup.io', company: 'Gupshup' },
    { name: 'Madhuri Palaji', email: 'mpalaji@randomtrees.com', company: 'RandomTrees' },
    { name: 'Madhuri Rajath', email: 'madhuri.rajath@goodera.com', company: 'Goodera' },
    { name: 'Madhushree Kumra', email: 'madhuk@lentra.ai', company: 'Lentra' },
    { name: 'Madhusudhanan', email: 'madhusudhanan@imarque.co.in', company: 'iMarque Solutions' },
    { name: 'Madhvi Arora', email: 'madhvi.arora@yodlee.com', company: 'Envestnet' },
    { name: 'Mahalakshmi', email: 'mahalakshmi@unilogcorp.com', company: 'Unilog' },
    { name: 'Mahasweta Paul', email: 'mahasweta.paul@atyati.com', company: 'atyati Technologies' },
    { name: 'Mahendra Singh', email: 'mahendra.singh@excelra.com', company: 'Excelra' },
    { name: 'Mahendra Thiyagarajan', email: 'mahendra@vysystems.com', company: 'VySystems' },
    { name: 'Mahendran Subramaniam', email: 'mahendran.s@kovaion.com', company: 'Kovaion Consulting' },
    { name: 'Mahesh Bandaru', email: 'mahesh.bandaru@neewee.ai', company: 'Neewee' },
    { name: 'Mahesh Hyam', email: 'mahesh.h@zelitesolutions.com', company: 'Zelite Solutions' },
    { name: 'Mainka Sharma', email: 'mainka.s@geeklurn.com', company: 'GeekLurn' },
    { name: 'Malathi Premkumar', email: 'malathip@boston-technology.com', company: 'Boston Technology Corporation' },
    { name: 'Malini Venugopal', email: 'malini.venugopal@people10.com', company: 'People10 Technologies' },
    { name: 'Mallika Poojari', email: 'mallika.poojari@featsystems.com', company: 'Feat Systems' },
    { name: 'Mamatha Nagesh', email: 'mamatha.n@modefin.com', company: 'Modefin' },
    { name: 'Mamta', email: 'mamta@cognustechnology.com', company: 'Cognus Technology' },
    { name: 'Mamta Nath', email: 'mamta.nath@e-pspl.com', company: 'PC Solutions' },
    { name: 'Mamta Yadav', email: 'mamta.yadav@amantyatech.com', company: 'Amantya Technologies' },
    { name: 'Mamtha', email: 'mamtha@sigmoidanalytics.com', company: 'Sigmoid' },
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
