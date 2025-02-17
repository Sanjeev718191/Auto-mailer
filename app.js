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
    { name: 'Sahil Prajapati', email: 'sahil.prajapati@cars24.com', company: 'Cars24' },
    { name: 'Banika Rana', email: 'banika.rana@cars24.com', company: 'Cars24' },
    { name: 'Swapnil Mishra', email: 'swapnil.mishra@cars24.com', company: 'Cars24' },
    { name: 'Prabhat Pankaj', email: 'prabhat.pankaj@cars24.com', company: 'Cars24' },
    { name: 'Siddhant Srivastava', email: 'siddhant.srivastava1@cars24.com', company: 'Cars24' },
    { name: 'Shobhna Rathore', email: 'shobhna.rathore@cars24.com', company: 'Cars24' },
    { name: 'Sonam Lama', email: 'sonam.lama@cars24.com', company: 'Cars24' },
    { name: 'Shivansh Tyagi', email: 'shivansh.tyagi1@cars24.com', company: 'Cars24' },
    { name: 'Gurveen Kaur', email: 'gurveen.kaur@cars24.com', company: 'Cars24' },
    { name: 'Satakshi Jaiswal', email: 'satakshi.jaiswal@cars24.com', company: 'Cars24' },
    { name: 'Navneet Das', email: 'navneet.das@cars24.com', company: 'Cars24' },
    { name: 'Khushbu Gera', email: 'khushbu.gera@cars24.com', company: 'Cars24' },
    { name: 'Aayushii Singh', email: 'aayushii.singh@cars24.com', company: 'Cars24' },
    { name: 'Nancy Sahgel', email: 'nancy.sahgel@cars24.com', company: 'Cars24' },
    { name: 'Asmita Raj', email: 'asmita.raj@cars24.com', company: 'Cars24' },
    { name: 'Akshit Sharma', email: 'akshit.sharma@cars24.com', company: 'Cars24' },
    { name: 'Sohan Kumawat', email: 'sohan.kumawat@cars24.com', company: 'Cars24' },
    { name: 'Mukund Jindal', email: 'mukund.jindal@cars24.com', company: 'Cars24' },
    { name: 'Ankit Bhalla', email: 'ankit.bhalla@cars24.com', company: 'Cars24' },
    { name: 'Atul Agrawal', email: 'atul.agrawal@cars24.com', company: 'Cars24' },
    { name: 'Sonali Godara', email: 'sonali.godara1@cars24.com', company: 'Cars24' },
    { name: 'Anupam Chauhan', email: 'anupam.chauhan@cars24.com', company: 'Cars24' },
    { name: 'Vijay Kharwar', email: 'vijay.kharwar@cars24.com', company: 'Cars24' },
    { name: 'Abhishek Jaiswal', email: 'jaiswal.abhishek@unacademy.com', company: 'Unacademy' },
    { name: 'Bhawna Anand', email: 'anand.bhawna@unacademy.com', company: 'Unacademy' },
    { name: 'Dhiman Bandyopadhyay', email: 'dhiman.bandyopadhyay@unacademy.com', company: 'Unacademy' },
    { name: 'Tanu Singh', email: 'singh.tanu@unacademy.com', company: 'Unacademy' },
    { name: 'Diya Bhat', email: 'bhat.diya@unacademy.com', company: 'Unacademy' },
    { name: 'David Solomon', email: 'david.solomon@unacademy.com', company: 'Unacademy' },
    { name: 'Anurag Tripathi', email: 'ext-tripathi.anurag@unacademy.com', company: 'Unacademy' },
    { name: 'Hrushikesh R', email: 'hr@unacademy.com', company: 'Unacademy' },
    { name: 'Rashi Kumari', email: 'ext-kumari.rashi@unacademy.com', company: 'Unacademy' },
    { name: 'Yakshima Sharma', email: 'sharma.yakshima@unacademy.com', company: 'Unacademy' },
    { name: 'Divya Chauhan', email: 'divya.chauhan@unacademy.com', company: 'Unacademy' },
    { name: 'Saurabh Singh', email: 'con-singh.saurabh@unacademy.com', company: 'Unacademy' },
    { name: 'Sahil Kamra', email: 'sahil.kamra@unacademy.com', company: 'Unacademy' },
    { name: 'Suraj Kashyap', email: 'kashyap.suraj@unacademy.com', company: 'Unacademy' },
    { name: 'Akshay Wanjari', email: 'akshay.wanjari@unacademy.com', company: 'Unacademy' },
    { name: 'Nikhil Chauhan', email: 'chauhan.nikhil@unacademy.com', company: 'Unacademy' }
];

// List of targeted people 
// Send from sanjeev718191
const recipients2 = [
    // { name: 'Anupriya Chaudhary', email: 'tempmovie08@gmail.com', company: 'PhysicsWallah' },
];

// List of random people 
// Send from sanjeev19203
const recipients3 = [
    { name: 'Nitin Padharia', email: 'nitin.padharia@indianic.com', company: 'IndiaNIC Infotech' },
    { name: 'Nitin Pandey', email: 'nitin@itlize.com', company: 'Itlize Global' },
    { name: 'Nitin Sharma', email: 'nitin.sharma@altudo.co', company: 'Altudo' },
    { name: 'Nitin Suri', email: 'nitin.suri@webomaze.com', company: 'Webomaze Technologies' },
    { name: 'Nitin Verma', email: 'nitin.verma@xicom.biz', company: 'Xicom Technologies' },
    { name: 'Nitish Kumar', email: 'nitish.k@sphinxworldbiz.com', company: 'Sphinx Worldbiz' },
    { name: 'Nitisha Baalay', email: 'nitisha.baalay@innovapptive.com', company: 'Innovapptive Inc' },
    { name: 'Nitya K', email: 'nk@ezesoft.com', company: 'Eze Software' },
    { name: 'Nivedita Kaushal', email: 'nivedita.kaushal@idmworks.com', company: 'IDMWORKS' },
    { name: 'Nivrutha Sampath', email: 'nivrutha.s@appviewx.com', company: 'AppViewX' },
    { name: 'Niyati Parmar', email: 'niyati@teksun.us', company: 'Teksun Inc' },
    { name: 'Nupur Jain', email: 'nupur@ixigo.com', company: 'ixigo' },
    { name: 'Nupur Phatak', email: 'nphatak@potomactpl.com', company: 'Potomac Technologies' },
    { name: 'Nusrat Supediwala', email: 'nusrat.supediwala@panamaxil.com', company: 'Panamax Infotech' },
    { name: 'O2f Info', email: 'info@o2finfo.com', company: 'O2F INFO SOLUTIONS' },
    { name: 'Oindrila Das', email: 'oindrila.das@rteservices.com', company: 'RT Outsourcing Services' },
    { name: 'Omesh Makhija', email: 'omeshmakhija@appitsimple.com', company: 'Appitsimple Infotek' },
    { name: 'Omkar Patwardhan', email: 'omkarp@coreflexsolutions.com', company: 'CoreFlex Solutions' },
    { name: 'Padmaja Arya', email: 'padmajasingh.arya@cogencis.com', company: 'Cogencis Information Services' },
    { name: 'Padmanav Kundu', email: 'padmanavk@nsdl.co.in', company: 'Protean eGov Technologies' },
    { name: 'Padmashree Alva', email: 'padmashree.alva@mresult.com', company: 'MResult' },
    { name: 'Pallavi Mishra', email: 'pmishra@bhavnacorp.com', company: 'Bhavna Corp.' },
    { name: 'Pallavi Sharma', email: 'pallavi.sharma@digimantra.com', company: 'DigiMantra Labs' },
    { name: 'Pallavi Singh', email: 'pallavi.singh@paycraftsol.com', company: 'Paycraft Solutions' },
    { name: 'Pallavi Singh', email: 'pallavi@techmatrixconsulting.com', company: 'TechMatrix Consulting' },
    { name: 'Panchali Das', email: 'panchalid@zenoti.com', company: 'Zenoti' },
    { name: 'Pandey', email: 'pandey@fsltechnologies.com', company: 'FSL Software Technologies' },
    { name: 'Pankaj Chopra', email: 'pankaj.chopra@corecard.com', company: 'CoreCard India' },
    { name: 'Pankaj Singh', email: 'psingh@everquote.com', company: 'EverQuote' },
    { name: 'Paramananda Chabungbam', email: 'paramananda.c@itelligencegroup.com', company: 'NTT DATA' },
    { name: 'Parameswar Reddy', email: 'parameswar.p@recykal.com', company: 'Team Recykal' },
    { name: 'Pardeep Pahal', email: 'pardeepp@damcogroup.com', company: 'Damco Solutions' },
    { name: 'Parinita Kaur', email: 'parinita.kaur@intellolabs.com', company: 'Intello Labs' },
    { name: 'Parma Dutta', email: 'pdutta@diabsolut.com', company: 'Diabsolut Inc' },
    { name: 'Parneet Waraich', email: 'parneet.waraich@myrealdata.in', company: 'Real Time Data Services' },
    { name: 'Paromita Areng', email: 'paromita.areng@zaggle.in', company: 'Zaggle Prepaid Ocean Services' },
    { name: 'Parool Duggal', email: 'parool.duggal@bijnis.com', company: 'bijnis' },
    { name: 'Parthasarathy Paravasthu', email: 'pparavasthu@vitechinc.com', company: 'Vitech Systems Asia' },
    { name: 'Parthiban Santhanakrishnan', email: 'parthiban.santhanakrishnan@volantetech.com', company: 'Volante Technologies' },
    { name: 'Parul Gala', email: 'parul.gala@smarteinc.com', company: 'SMARTe' },
    { name: 'Parvathy Therembil', email: 'parvathy.therembil@sourcebits.com', company: 'Sourcebits Digital' },
    { name: 'Pasha Amjad', email: 'amjad.pasha@fiorano.com', company: 'Fiorano Software' },
    { name: 'Patel Kavita', email: 'patel.kavita@jeksonvision.com', company: 'Jekson Vision' },
    { name: 'Pathanjali Bhat', email: 'pathanjali.bhat@relevancelab.com', company: 'Relevance Lab' },
    { name: 'Patricia Natalia', email: 'patricia.natalia@learnquest.com', company: 'LearnQuest' },
    { name: 'Paul', email: 'paul.jacob@pramati.com', company: 'Pramati Technologies' },
    { name: 'Paul Daniel', email: 'paul.daniel@tanla.com', company: 'Tanla Platforms' },
    { name: 'Paul Thomas', email: 'paul@salesken.ai', company: 'Salesken' },
    { name: 'Pavan Bodapati', email: 'pavan.b@fluentgrid.com', company: 'Fluentgrid' },
    { name: 'Pavan K', email: 'pk@eightfold.ai', company: 'Eightfold' },
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
