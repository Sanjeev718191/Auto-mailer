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
    { name: 'Chandini Mokthar', email: 'chandini@moolya.com', company: 'Moolya' },
    { name: 'Chandni Chopra', email: 'chandnic@lambdatest.com', company: 'LambdaTest' },
    { name: 'Chandni Yadav', email: 'chandniyadav@ucreate.co.in', company: 'Founder and Lightning' },
    { name: 'Chandra Prakash', email: 'chandra.prakash@innoverdigital.com', company: 'Innover Digital' },
    { name: 'Chandra Ratra', email: 'chandra.ratra@navigaglobal.com', company: 'Naviga India' },
    { name: 'Chandrakanth K', email: 'chandra@srivensys.com', company: 'Sriven Systems' },
    { name: 'Chandrasekhar Gv', email: 'cgv@eclinicalsol.com', company: 'eClinical Solutions' },
    { name: 'Chandrashekar R', email: 'chandrashekarr@softura.com', company: 'Softura' },
    { name: 'Chandresh Kumar', email: 'chandresh.kumar@jagrannewmedia.com', company: 'Jagran New Media' },
    { name: 'Charan Singh', email: 'charan@srinipharma.com', company: 'SRINI PHARMACEUTICALS' },
    { name: 'Charles Timothy', email: 'charles.t@palni.com', company: 'Palni Inc' },
    { name: 'Charmaine Pinto', email: 'charmaine@streamoid.com', company: 'Streamoid' },
    { name: 'Cheryl Anjelo', email: 'cheryl.anjelo@colortokens.com', company: 'ColorTokens' },
    { name: 'Chetan Verma', email: 'cverma@fcsltd.com', company: 'FCS Software Solutions' },
    { name: 'Chetna Gogia', email: 'chetna@gokwik.co', company: 'GoKwik' },
    { name: 'Chhavi Bhatnagar', email: 'chhavi.bhatnagar@acnovate.com', company: 'Acnovate Corporation' },
    { name: 'Chinmoy Roy', email: 'chinmoy.roy@catalyst-us.com', company: 'Catalyst Business Solutions' },
    { name: 'Chintan Bhatt', email: 'b.chintan@introlligent.com', company: 'Introlligent' },
    { name: 'Chirag Patel', email: 'chirag.patel1@rangtech.com', company: 'Rang Technologies Inc' },
    { name: 'Chirag Shah', email: 'chirag.shah@iflair.com', company: 'iFlair Web Technologies' },
    { name: 'Chiranjeevi Pannem', email: 'chiranjeevip@byteridge.com', company: 'Byteridge' },
    { name: 'Chitra Markale', email: 'chitram@zconsolutions.com', company: 'zCon Solutions' },
    { name: 'Chitra Ravi', email: 'chitra.ravi@ample.co.in', company: 'Ample Technologies' },
    { name: 'Cireesha Mailavarapu', email: 'cireesha.m@etisbew.com', company: 'ETG Digital' },
    { name: 'Crp Saurabh', email: 'saurabh@caastle.com', company: 'CaaStle' },
    { name: 'Cynthia Rodrigues', email: 'cynthia@netcore.co.in', company: 'Netcore Cloud' },
    { name: 'Damayanti Ghosh', email: 'damayanti.ghosh@getvymo.com', company: 'Vymo' },
    { name: 'Daniel Shaw', email: 'daniel.shaw@kpipartners.com', company: 'KPI Partners' },
    { name: 'Dathree Javvadi', email: 'dathree.javvadi@vncservices.in', company: 'VNC Digital Services' },
    { name: 'Debashish Bhattacharya', email: 'debashishb@interrait.com', company: 'Interra Information Technologies' },
    { name: 'Debdutta Bhowmick', email: 'debdutta.bhowmick@atidiv.com', company: 'Atidiv' },
    { name: 'Debojit Das', email: 'debojit.das@betterplace.co.in', company: 'BetterPlace' },
    { name: 'Deborah Passanha', email: 'dpassanha@everydayhealth.com', company: 'Everyday Health Group' },
    { name: 'Deep Ambike', email: 'deep@thinkbridge.in', company: 'thinkbridge' },
    { name: 'Deep Patel', email: 'deep.patel@ics-global.in', company: 'INTECH' },
    { name: 'Deepa Baburaj', email: 'bdeepa@zeomega.com', company: 'ZeOmega' },
    { name: 'Deepa Dand', email: 'deepa@prdxn.com', company: 'Axioned' },
    { name: 'Deepa Makhija', email: 'deepa.makhija@gupshup.io', company: 'Gupshup' },
    { name: 'Deepa Mukherjee', email: 'deepa.mukherjee@esri.in', company: 'Esri India' },
    { name: 'Deepa Palaniswamy', email: 'deepa.palaniswamy@ducenit.com', company: 'Ducen' },
    { name: 'Deepa Sripathi', email: 'deepa.sripathi@konicaminolta.com', company: 'Konica Minolta Business Solutions India' },
    { name: 'Deepak Babu', email: 'deepak.babu@appviewx.com', company: 'AppViewX' },
    { name: 'Deepak Chavan', email: 'deepak.chavan@visiblealpha.com', company: 'Visible Alpha' },
    { name: 'Deepak Deshpande', email: 'deepak.deshpande@netmagicsolutions.com', company: 'NTT DATA' },
    { name: 'Deepak Gelda', email: 'deepak@uchicago.edu', company: 'IT Services' },
    { name: 'Deepak Khanna', email: 'dkhanna@ishir.com', company: 'ISHIR' },
    { name: 'Deepak Melwani', email: 'deepak.melwani@galaxyweblinks.co.in', company: 'Galaxy Weblinks Inc' },
    { name: 'Deepak Pawar', email: 'deepak.pawar@accutech.co.in', company: 'Accutech Power Solutions' },
    { name: 'Deepak Ramakrishnan', email: 'deepak.ramakrishnan@csquare.in', company: 'C-Square Info Solutions' },
    { name: 'Deepak Singh', email: 'deepak@dixitindia.com', company: 'Dixit Infotech Services' },
    { name: 'Deepali', email: 'deepali@proximity.tech', company: 'Proximity Works' },
    { name: 'Deepali Verdi', email: 'deepali.verdi@genzeon.com', company: 'Genzeon' },
    { name: 'Deepashree V', email: 'deepashree.v@skience.com', company: 'Skience' },
    { name: 'Deepika Pandita', email: 'deepika@appinessworld.com', company: 'Appiness Interactive' },
    { name: 'Deepika Singh', email: 'deepika@webkul.com', company: 'Webkul' },
    { name: 'Deepthi Kesireddy', email: 'deepthi.kesireddy@smartims.com', company: 'Smart IMS' },
    { name: 'Deepthi Vorem', email: 'deepthi.v@etggs.com', company: 'ETG Digital' },
    { name: 'Deepti Ashar', email: 'deepti@mindcraft.in', company: 'MindCraft Software' },
    { name: 'Deepti Bathija', email: 'deepti.bathija@orcapodservices.com', company: 'Orcapod' },
    { name: 'Deepti Lewis', email: 'dlewis@conviva.com', company: 'Conviva' },
    { name: 'Deepti Mendiratta', email: 'deepti.m@trell.in', company: 'Trell' },
    { name: 'Deepti N', email: 'deepti.n@accelq.com', company: 'ACCELQ' },
    { name: 'Deepti Sahni', email: 'deepti.sahni@mobiloitte.com', company: 'Mobiloitte' },
    { name: 'Deepti Tewari', email: 'dgtewari@quark.com', company: 'Quark Software' },
    { name: 'Deepti Waghmare', email: 'deeptiw@pre-scient.com', company: 'Prescient Technologies' },
    { name: 'Deo Kumar', email: 'deo.kumar@akalinfosys.com', company: 'Akal Information Systems' },
    { name: 'Devang Hindocha', email: 'devang@strategicerp.com', company: 'StrategicERP Business Automation Solutions' },
    { name: 'Devansh Narang', email: 'devansh.narang@loco.gg', company: 'Loco' },
    { name: 'Devanshi Shah', email: 'devanshi@brainerhub.com', company: 'BrainerHub Solutions' },
    { name: 'Devershi Desai', email: 'devershi.desai@ssminfotech.com', company: 'SSM InfoTech Solutions' }

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
