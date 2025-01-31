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
    { name: 'Daniel Heer', email: 'daniel.heer@zeotap.com', company: 'Zeotap' },
    { name: 'Sanjay Kukreti', email: 'sanjay.kukreti@zeotap.com', company: 'Zeotap' },
    { name: 'Shailesh Yogendra', email: 'shailesh.yogendra@zeotap.com', company: 'Zeotap' },
    { name: 'Malgorzata Siemczyk', email: 'gosia.siemczyk@zeotap.com', company: 'Zeotap' },
    { name: 'Aishwarya Rajvedi', email: 'aishwarya.rajvedi@zeotap.com', company: 'Zeotap' },
    { name: 'Sathish', email: 'sathish.ks@zeotap.com', company: 'Zeotap' },
    { name: 'Joydeep Roy', email: 'joydeep.roy@zeotap.com', company: 'Zeotap' },
    { name: 'Aniket Awati', email: 'aniket.awati@zeotap.com', company: 'Zeotap' },
    { name: 'Lisa', email: 'lisa.briganti@zeotap.com', company: 'Zeotap' },
    { name: 'Benita Tamutyte', email: 'benita.tamutyte@zeotap.com', company: 'Zeotap' },
    { name: 'Yash Saini', email: 'yash.saini@zeotap.com', company: 'Zeotap' },
    { name: 'Ojasv Singh', email: 'ojasv.singh@zeotap.com', company: 'Zeotap' },
    { name: 'Hemant Kumar', email: 'hemant.kumar@zeotap.com', company: 'Zeotap' },
    { name: 'Waris Chutani', email: 'waris.chutani@zeotap.com', company: 'Zeotap' },
    { name: 'Deepak Kumar', email: 'deepak.kumar@zeotap.com', company: 'Zeotap' },
    { name: 'Surya Yechuri', email: 'surya.lehar@zeotap.com', company: 'Zeotap' },
    { name: 'Tanisha Jain', email: 'tanisha.jain@zeotap.com', company: 'Zeotap' },
    { name: 'Shivani Tomar', email: 'shivani.tomar@zeotap.com', company: 'Zeotap' },
    { name: 'Sathishkumar Kuppuswami', email: 'sathishkumar.kuppuswami@zeotap.com', company: 'Zeotap' },
    { name: 'Sandeep Jain', email: 'sandeep@geeksforgeeks.org', company: 'GeeksForGeeks' },
    { name: 'Shikhar Goel', email: 'shikhar@geeksforgeeks.org', company: 'GeeksForGeeks' },
    { name: 'Uday Rana', email: 'uday.rana@geeksforgeeks.org', company: 'GeeksForGeeks' },
    { name: 'Jatin Chandel', email: 'jatin.chandel.int@geeksforgeeks.org', company: 'GeeksForGeeks' },
    { name: 'Shubham Singh', email: 'shubham.singh1@geeksforgeeks.org', company: 'GeeksForGeeks' },
    { name: 'Tulsi Jha', email: 'tulsi.jha@geeksforgeeks.org', company: 'GeeksForGeeks' },
    { name: 'Chandan Gupta', email: 'chandan.gupta@geeksforgeeks.org', company: 'GeeksForGeeks' },
    { name: 'Rahul Mittal', email: 'rahul.mittal@geeksforgeeks.org', company: 'GeeksForGeeks' },
    { name: 'Bhavna Sharma', email: 'bhavna@geeksforgeeks.org', company: 'GeeksForGeeks' },
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
    { name: 'Keerthi Vinodh', email: 'keerthi.v@rlabsglobal.com', company: 'RLabs Enterprise Services' },
    { name: 'Ketan Shetty', email: 'ketan.shetty@writerinformation.com', company: 'Writer Information' },
    { name: 'Kevin Marbaniang', email: 'kevin@xeno.in', company: 'Xeno' },
    { name: 'Kevin Parker', email: 'kparker@integrass.com', company: 'Integrass' },
    { name: 'Khandoba K', email: 'khandoba.k@techtreeit.com', company: 'TechTree IT Systems' },
    { name: 'Khushboo Jain', email: 'khushboo@techspian.com', company: 'Techspian' },
    { name: 'Khushboo Rathore', email: 'khushboo@techaheadcorp.com', company: 'TechAhead' },
    { name: 'Khushi Mishra', email: 'khushi@5ire.org', company: '5ireChain' },
    { name: 'Khyati Sagar', email: 'khyatisagar@appitsimple.com', company: 'Appitsimple Infotek' },
    { name: 'Kinjal Shah', email: 'kinjal@biztechconsultancy.com', company: 'BiztechCS' },
    { name: 'Kiran Bala', email: 'kiran.bala@blueconchtech.com', company: 'UST BlueConch Technologies' },
    { name: 'Kiran Kumar', email: 'kkumar@adea.com', company: 'Adea Solutions' },
    { name: 'Kiran Lal', email: 'kiran.lal@tomiaglobal.com', company: 'TOMIA' },
    { name: 'Kiran Punjabi', email: 'kiran@manektech.com', company: 'ManekTech' },
    { name: 'Kiran Singh', email: 'kirans@mindfiresolutions.com', company: 'Mindfire Solutions' },
    { name: 'Kiran Somanath', email: 'kiran.s@zerone-consulting.com', company: 'Zerone Consulting' },
    { name: 'Kirti Manucha', email: 'kirti.manucha@healthfore.com', company: 'HealthFore Technologies' },
    { name: 'Kirti Manucha', email: 'kirti.manucha@religare.com', company: 'Religare Technova' },
    { name: 'Kishor Pinninti', email: 'kishor.p@feuji.com', company: 'Feuji Inc' },
    { name: 'Komal Hazra', email: 'komal@balajidatasolutions.net', company: 'BDS Services' },
    { name: 'Komala Tummala', email: 'komala.t@acropetal.com', company: 'Acropetal Technologies' },
    { name: 'Korak Saha', email: 'korak.saha@mjunction.in', company: 'mjunction services' },
    { name: 'Koundinya Adiraju', email: 'koundinya.adiraju@testingxperts.com', company: 'TestingXperts' },
    { name: 'Koustav Chatterjee', email: 'koustav@nasscom.in', company: 'NASSCOM' },
    { name: 'Kranthi Kumar', email: 'kkumar@polarismanagement.com', company: 'Polaris' },
    { name: 'Krishan Kumar', email: 'krishan_kumar@taaltech.com', company: 'TAAL Tech' },
    { name: 'Krishna Kumar', email: 'krishna_kumar@actis.co.in', company: 'Actis Technologies' },
    { name: 'Krishnachand Nair', email: 'knair@ixiacom.com', company: 'Keysight Network Visibility Test & Security' },
    { name: 'Krishnan Ramachandran', email: 'kramachandran@hitachi-solutions.com', company: 'Hitachi Solutions Asia Pacific' },
    { name: 'Krishnan Vr', email: 'krishnanvr@savvy-it.com', company: 'Savvysoft Technologies' },
    { name: 'Krishnanand Joshi', email: 'krishnanand.joshi@teknorix.com', company: 'Teknorix' },
    { name: 'Kriti A', email: 'kriti@consummatetechnologies.com', company: 'Consummate Technologies' },
    { name: 'Kritika Khanduri', email: 'kritika.khanduri@loginradius.com', company: 'LoginRadius' },
    { name: 'Kshama Patel', email: 'kshama.patel@intech-systems.com', company: 'Intech Systems' },
    { name: 'Kuldeep Chobey', email: 'kuldeep.chobey@satincorp.com', company: 'SA Technologies' },
    { name: 'Kuldeep Gupta', email: 'kuldeepg@porteck.com', company: 'Porteck Corporation' },
    { name: 'Kulvir Kaur', email: 'kulvir.kaur@cloudeq.com', company: 'cloudEQ' },
    { name: 'Kumar Anchan', email: 'kumara@aditiconsulting.com', company: 'Aditi Consulting' },
    { name: 'Kumuda Panda', email: 'kumuda.panda@evonsys.com', company: 'EvonSys' },
    { name: 'Kunal', email: 'kunal@elsner.com', company: 'Elsner Technologies' },
    { name: 'Kunal Acharyaa', email: 'kunal.acharya@impelsys.com', company: 'Impelsys' },
    { name: 'Kunal Wadhwani', email: 'kunal.wadhwani@pocketfm.com', company: 'Pocket FM' },
    { name: 'Kushagra', email: 'kushagra.pande@jungleegames.com', company: 'Junglee Games' },
    { name: 'Lakshmi Eyyunni', email: 'lakshmi.eyyunni@narvar.com', company: 'Narvar' },
    { name: 'Lakshmi Radhakrishnan', email: 'lakshmipriya.radhakrishnan@bwdesigngroup.com', company: 'Barry-Wehmiller International' },
    { name: 'Lakshmi Vishwanatth', email: 'lakshmi@triconinfotech.com', company: 'Tricon Infotech' },
    { name: 'Lakshmipriya Babu', email: 'lakshmi.p@qis.co.in', company: 'Quest Innovative Solutions' },
    { name: 'Lata Chemudupati', email: 'lata.c@netconnectglobal.com', company: 'NetConnectGlobal' },
    { name: 'Lata Kohli', email: 'lata.kohli@cogentinfo.com', company: 'COGENT Infotech' },
    { name: 'Latchoumanan Tirounavoucarassou', email: 'ltirounavoucarassou@yodlee.com', company: 'Envestnet' },
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
