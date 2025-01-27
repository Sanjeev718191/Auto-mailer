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
    { name: 'Syed Sandhani', email: 's.syed@salesforce.com', company: 'Salesforce' },
    { name: 'Syed', email: 'f.syed@salesforce.com', company: 'Salesforce' },
    { name: 'Shabana Raja', email: 'sraja@salesforce.com', company: 'Salesforce' },
    { name: 'Jaiprakash Chimanchode', email: 'jchimanchode@salesforce.com', company: 'Salesforce' },
];

// List of random people 
// Send from sanjeev19203
const recipients3 = [
    // { name: 'Anupriya Chaudhary', email: 'tempmovie08@gmail.com', company: 'PhysicsWallah' },
    { name: 'Joy Dupati', email: 'joy.dupati@sierraatlantic.com', company: 'Sierra Atlantic' },
    { name: 'Juhi Sharma', email: 'juhi.sharma@lockstep.io', company: 'Lockstep' },
    { name: 'Justin Joseph', email: 'justin@near.com', company: 'Near' },
    { name: 'Jyothendra Reddy', email: 'jyothendraar@aditiconsulting.com', company: 'Aditi Consulting' },
    { name: 'Jyothsna Devi', email: 'jyothsna.devi@kasmo.co', company: 'Kasmo' },
    { name: 'Jyoti Gouri', email: 'jyoti.g@commerceiq.ai', company: 'CommerceIQ' },
    { name: 'Jyoti Gupta', email: 'jgupta@otsi-usa.com', company: 'Object Technology Solutions India' },
    { name: 'Jyoti Kajale', email: 'jyoti.kajale@ampcus.com', company: 'Ampcus Inc' },
    { name: 'Jyoti Saini', email: 'jyoti.saini@apolisrises.com', company: 'Apolis' },
    { name: 'Jyoti Singh', email: 'jyoti.singh@zapcg.com', company: 'ZapCom Group Inc' },
    { name: 'Jyotsna Mahajan', email: 'jyotsna.mahajan@sugarboxnetworks.com', company: 'SugarBox Networks' },
    { name: 'Kajal Gupta', email: 'hr@dhaninfo.biz', company: 'DhanInfo' },
    { name: 'Kajal Tuteja', email: 'kajal.tuteja@csquare.in', company: 'C-Square Info Solutions' },
    { name: 'Kalpana Kanhere', email: 'kalpana@theimperative.in', company: 'Imperative Business Ventures' },
    { name: 'Kalyan Neelagiri', email: 'kalyan.neelagiri@soroco.com', company: 'Soroco' },
    { name: 'Kalyani Mahajan', email: 'kalyani.mahajan@paramatrix.com', company: 'Paramatrix Technologies' },
    { name: 'Kalyani Mudigonda', email: 'kalyani.mudigonda@votarytech.com', company: 'Votary Softech Solutions' },
    { name: 'Kalyani Pendharkar', email: 'kalyani.pendharkar@theblueflamelabs.com', company: 'Blue Flame Labs' },
    { name: 'Kamaldeep Singh', email: 'ksingh@skillgigs.com', company: 'skillgigs.com' },
    { name: 'Kamla Mulla', email: 'kamla.mulla@se2.com', company: 'SE2' },
    { name: 'Kanchan Jagtap', email: 'kanchan.jagtap@tatatechnologies.com', company: 'Tata Technologies, Pune' },
    { name: 'Kanchan Verma', email: 'kanchan.verma@qsstechnosoft.com', company: 'QSS Technosoft' },
    { name: 'Kanhaiya Sharma', email: 'kanhaiya@cloudthing.com', company: 'cloudThing' },
    { name: 'Kanika Gupta', email: 'kanika@eglogics.com', company: 'EGlogics Softech' },
    { name: 'Kannan Krishnan', email: 'kannan.krishnan@trinamix.com', company: 'Trinamix Inc' },
    { name: 'Kannu Taneja', email: 'kannu.taneja@areteanstech.com', company: 'Areteans' },
    { name: 'Kanta Nandy', email: 'kantan@labvantage.com', company: 'LabVantage Solutions' },
    { name: 'Kapeesh Saxena', email: 'kapeesh.saxena@genzeon.com', company: 'Genzeon' },
    { name: 'Kapil K', email: 'kapil.katira@thegatewaycorp.com', company: 'Gateway Group of Companies' },
    { name: 'Karthick Rengasamy', email: 'karthick@ideas2it.com', company: 'Ideas2IT Technologies' },
    { name: 'Karthik Chintapatla', email: 'karthik.chintapatla@visteon.com', company: 'Visteon Technical And Services Centre' },
    { name: 'Karthik Ingarsal', email: 'karthik.i@springworks.in', company: 'Springworks' },
    { name: 'Karthik R', email: 'karthikr@operative.com', company: 'Operative' },
    { name: 'Karthikeyan P', email: 'karthikeyan@hiverhq.com', company: 'Hiver' },
    { name: 'Karthikeyan Samuel', email: 'karthikeyan.samuel@xansa.com', company: 'Xansa plc' },
    { name: 'Karthikeyan Sivasubramanian', email: 'karthikeyan.sivasubramanian@saviynt.com', company: 'Saviynt' },
    { name: 'Kartik', email: 'kartik.v@vtechsolution.com', company: 'vTech Solution' },
    { name: 'Kartik Sehgal', email: 'kartik.sehgal@omnepresent.com', company: 'OmnePresent Technologies' },
    { name: 'Karuna Geddam', email: 'karuna.geddam@arcserve.com', company: 'Arcserve' },
    { name: 'Kausar Khatri', email: 'kausar.khatri@lauren.co.in', company: 'Lauren Information Technologies' },
    { name: 'Kavita Gupta', email: 'kavita.gupta@anm.com', company: 'ANM' },
    { name: 'Kavita N', email: 'kavitha.nandagopal@impelsys.com', company: 'Impelsys' },
    { name: 'Kavita Tandon', email: 'kavita.tandon@simplifyhealthcare.com', company: 'Simplify Healthcare' },
    { name: 'Kavita Y', email: 'kavita.y@valiancesolutions.com', company: 'Valiance Solutions' },
    { name: 'Kavita Yadav', email: 'kavita.yadav@valiancesolutions.com', company: 'Valiance Solutions' },
    { name: 'Kavitha', email: 'kavitha@6thenergy.com', company: 'Sixth Energy Technologies' },
    { name: 'Kavitha Martin', email: 'mkavitha@sourcetrace.com', company: 'SourceTrace' },
    { name: 'Kavitha Umasankar', email: 'kavitha.umasankar@wolterskluwer.com', company: 'Wolters Kluwer ELM Solutions' },
    { name: 'Kavya K', email: 'kavya.k@mygoconsulting.com', company: 'Mygo Consulting' },
    { name: 'Keerthi Kamasamudra', email: 'keerthi.kamasamudra@stellapps.com', company: 'Stellapps Technologies' },
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
