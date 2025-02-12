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
    { name: 'Alba Ramadani', email: 'albar@spotify.com', company: 'Spotify' },
    { name: 'Chris Stringfellow', email: 'cstringfellow@spotify.com', company: 'Spotify' },
    { name: 'Petra Kaempe', email: 'petrak@spotify.com', company: 'Spotify' },
    { name: 'Bruno Rocha', email: 'rochab@spotify.com', company: 'Spotify' },
    { name: 'Taylor Crowley', email: 'tcrowley@spotify.com', company: 'Spotify' },
    { name: 'Cassie Groves', email: 'cassieg@spotify.com', company: 'Spotify' },
    { name: 'Nicole Candon', email: 'ndoucette@spotify.com', company: 'Spotify' },
    { name: 'Christina Lujan', email: 'clujan@spotify.com', company: 'Spotify' },
    { name: 'Michael Thushyan', email: 'mthushyan@spotify.com', company: 'Spotify' },
    { name: 'Cage Kaneko', email: 'cagek@spotify.com', company: 'Spotify' },
    { name: 'Norelle Briggs', email: 'norelleb@spotify.com', company: 'Spotify' },
    { name: 'Tony', email: 'tonyj@spotify.com', company: 'Spotify' },
    { name: 'Harry Brown', email: 'hbrown@spotify.com', company: 'Spotify' },
    { name: 'Jasmine Chan', email: 'jasminechan@spotify.com', company: 'Spotify' },
    { name: 'Marian Lungu', email: 'marianl@spotify.com', company: 'Spotify' },
    { name: 'Jason Gill', email: 'jasong@spotify.com', company: 'Spotify' },
    { name: 'Ilya Kozhevnikov', email: 'ilyak@spotify.com', company: 'Spotify' },
    { name: 'Kim Wijk', email: 'kimw@spotify.com', company: 'Spotify' },
    { name: 'Sangeetha', email: 'sangeethar@spotify.com', company: 'Spotify' },
    { name: 'Sebastian Stork', email: 'sstork@spotify.com', company: 'Spotify' },
    { name: 'Simon Whitelaw', email: 'simonw@spotify.com', company: 'Spotify' },
    { name: 'Hunter Dougless', email: 'hunterd@spotify.com', company: 'Spotify' },
    { name: 'Jorge Marmol', email: 'jorgem@spotify.com', company: 'Spotify' },
    { name: 'Lauren Gee', email: 'lgee@spotify.com', company: 'Spotify' },
    { name: 'Nicole Reali', email: 'nicolec@spotify.com', company: 'Spotify' },
    { name: 'Alyssa Nolasco', email: 'alyssan@spotify.com', company: 'Spotify' },
    { name: 'Cristine Bilous', email: 'cristineb@spotify.com', company: 'Spotify' },
    { name: 'Linnea Holmlund', email: 'lholmlund@spotify.com', company: 'Spotify' },
    { name: 'Ramaciotti Isabelle', email: 'isabeller@spotify.com', company: 'Spotify' },
    { name: 'Houda Boughit', email: 'houdab@spotify.com', company: 'Spotify' },
    { name: 'Bilawal H.', email: 'bil@spotify.com', company: 'Spotify' },
    { name: 'Ashish Bulchandani', email: 'ashishb@spotify.com', company: 'Spotify' },
    { name: 'Abhishek Jain', email: 'abhishekj@spotify.com', company: 'Spotify' },
];

// List of targeted people 
// Send from sanjeev718191
const recipients2 = [
    // { name: 'Anupriya Chaudhary', email: 'tempmovie08@gmail.com', company: 'PhysicsWallah' },
];

// List of random people 
// Send from sanjeev19203
const recipients3 = [
    { name: 'Namita Sinha', email: 'namita.sinha@sunlife.com', company: 'Sun Life' },
    { name: 'Namrata Kamrushi', email: 'namrata.k@inspiredgeit.com', company: 'Inspiredge IT Solutions' },
    { name: 'Nancy Andrews', email: 'nancy.andrews@ideas2it.com', company: 'Ideas2IT Technologies' },
    { name: 'Nancy Varghese', email: 'nancy.varghese@inflowtechnologies.com', company: 'Inflow Technologies' },
    { name: 'Nandakishore Padmanabhan', email: 'nandakishore.padmanabhan@crmnext.com', company: 'CRMNEXT' },
    { name: 'Nandini Aggarwal', email: 'nandini.aggarwal@enhancesys.com', company: 'Enhancesys Innovations' },
    { name: 'Nandini Tandon', email: 'nandini.tandon@indusface.com', company: 'Indusface' },
    { name: 'Nandita Singh', email: 'nandita.singh@selp.in', company: 'SELP' },
    { name: 'Nandni Bhatnagar', email: 'nbhatnagar@e-emphasys.com', company: 'e-Emphasys Technologies' },
    { name: 'Narasimhan', email: 'narasimhan@opsera.io', company: 'Opsera' },
    { name: 'Narayana Bvs', email: 'narayana@smartedgesolutions.co.uk', company: 'Smartedge Solutions' },
    { name: 'Narayana Pawar', email: 'narayana.pawar@privafy.com', company: 'Privafy' },
    { name: 'Narender Thatipalli', email: 'narender@lsarecruit.co.uk', company: 'LSA Recruit' },
    { name: 'Narendra S', email: 'narendra.s@netenrich.com', company: 'Netenrich' },
    { name: 'Naresh Kumar', email: 'naresh@ncsus.net', company: 'National Computer Systems' },
    { name: 'Naresh Nuthulapati', email: 'naresh.nuthulapati@atmecs.com', company: 'ATMECS Inc' },
    { name: 'Natarajan Perumal', email: 'natarajan@uniquehire.in', company: 'UniqueHire Consulting LLP' },
    { name: 'Naveen Kumar', email: 'naveen@primusglobal.com', company: 'PRIMUS Global Technologies' },
    { name: 'Naveen Pillai', email: 'naveen@crayondata.com', company: 'Crayon Data' },
    { name: 'Naveen Shankar', email: 'naveen.shankar@estuate.com', company: 'Estuate' },
    { name: 'Naveen Sounderrajan', email: 'naveen.s@bourntec.com', company: 'Bourntec Solutions Inc' },
    { name: 'Naveen Wadhawan', email: 'naveen@dynpro.com', company: 'DynPro' },
    { name: 'Navleen Bhatia', email: 'navleen.bhatia@tcs.com', company: 'Tata Digital' },
    { name: 'Navneet Murthy', email: 'navneet@inventechinfo.com', company: 'Inventech Info Solutions' },
    { name: 'Nawaaz Hafeez', email: 'nawaaz.hafeez@ivlglobal.com', company: 'InfoVision Labs' },
    { name: 'Nayaki Naidu', email: 'nayaki@numerictech.com', company: 'Numeric Technologies' },
    { name: 'Nayana Martin', email: 'nayanam@aditiconsulting.com', company: 'Aditi Consulting' },
    { name: 'Nayazuddin Meer', email: 'nayazuddin.meer@slkgroup.com', company: 'VFI SLK' },
    { name: 'Neelakanteshwar Rao', email: 'neel.rao@serole.com', company: 'Serole Technologies' },
    { name: 'Neelam Sharma', email: 'neelam.sharma@provartesting.com', company: 'Provar Testing' },
    { name: 'Neelima Vaka', email: 'neelima.vaka@minfytech.com', company: 'Minfy' },
    { name: 'Neena Nagle', email: 'nagle@valethi.com', company: 'Valethi Technologies' },
    { name: 'Neena Rajdev', email: 'neena@fintinc.com', company: 'Fint Solutions' },
    { name: 'Neeraj Sharma', email: 'neerajsharma@cavistatech.com', company: 'Cavista' },
    { name: 'Neeraj Sharma', email: 'neeraj@fourkites.com', company: 'FourKites' },
    { name: 'Neetu Choudhary', email: 'neetu.choudhary@idsnext.com', company: 'IDS NEXT Business Solutions' },
    { name: 'Neha Bhandari', email: 'neha.bhandari@vmock.com', company: 'VMock' },
    { name: 'Neha Bhise', email: 'nbhise@tracelink.com', company: 'TraceLink' },
    { name: 'Neha Bhushan', email: 'neha@thinkbridge.com', company: 'thinkbridge' },
    { name: 'Neha Chaudhary', email: 'neha.c@greyorange.com', company: 'GreyOrange' },
    { name: 'Neha Chaughule', email: 'neha@aistechnolabs.com', company: 'AIS Technolabs' },
    { name: 'Neha Choudhary', email: 'nchoudhary@tractionondemand.com', company: 'Trineo' },
    { name: 'Neha Kohli', email: 'neha.kohli@benq.com', company: 'BenQ India' },
    { name: 'Neha Mishra', email: 'neha@i2k2.com', company: 'i2k2 Networks' },
    { name: 'Neha Sahi', email: 'neha@trell.in', company: 'Trell' },
    { name: 'Neha Sharma', email: 'nehasharma@freeskout.com', company: 'freeskout' },
    { name: 'Neha Sharma', email: 'neha.sharma@infodartmail.com', company: 'Infodart Technologies' },
    { name: 'Neha Sharna', email: 'neha.sharma@cavisson.com', company: 'Cavisson Systems' },
    { name: 'Neha Thakker', email: 'neha@multiqos.com', company: 'MultiQoS Technologies' },
    { name: 'Neha Velankar', email: 'neha@dynalogindia.com', company: 'Dynalog India' },
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
