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
    { name: 'Ashok Putsala', email: 'ashok.putsala@senecaglobal.com', company: 'SenecaGlobal' },
    { name: 'Ashok Seshadri', email: 'ashok.seshadri@objectfrontier.com', company: 'ObjectFrontier Software' },
    { name: 'Ashok Tripathy', email: 'ashok.tripathy@bpoconvergence.com', company: 'BPO Convergence' },
    { name: 'Ashraf Kazi', email: 'ashraf.kazi@simplifyhealthcare.com', company: 'Simplify Healthcare' },
    { name: 'Ashraf Mulla', email: 'ashraf.mulla@qseap.com', company: 'qSEAp Infotech' },
    { name: 'Ashton Lawrie', email: 'ashton.lawrie@iitms.co.in', company: 'MasterSoft ERP Solutions' },
    { name: 'Ashutosh Sinha', email: 'ashutosh@tuya.com', company: 'Tuyasmart India' },
    { name: 'Ashwani Bhargava', email: 'ashwanib@decisionminds.com', company: 'Decision Minds' },
    { name: 'Ashwani Kumar', email: 'ashwani@successive.tech', company: 'Successive Technologies' },
    { name: 'Ashwin Singh', email: 'ashwin@suki.ai', company: 'Suki' },
    { name: 'Ashwini Ashok', email: 'ashwini.ashok@eton-solutions.com', company: 'Eton Solutions LP' },
    { name: 'Ashwini J', email: 'ashwini.janardhanan@kaleyra.com', company: 'Kaleyra' },
    { name: 'Aswanth Goka', email: 'agoka@workfusion.com', company: 'WorkFusion' },
    { name: 'Aswin Prashannth', email: 'aswin@psrtek.com', company: 'PSRTEK' },
    { name: 'Atin Karmokar', email: 'atin.karmokar@pentagon.co.in', company: 'Pentagon System and Services' },
    { name: 'Atul Kanknala', email: 'atul.kanknala@craveinfotech.com', company: 'Crave InfoTech' },
    { name: 'Atul Pal', email: 'atul.pal@innefu.com', company: 'Innefu Labs' },
    { name: 'Avinash Poojari', email: 'avinash@sedintechnologies.com', company: 'Sedin Technologies' },
    { name: 'Ayush Daryani', email: 'ayush.daryani@niftel.com', company: 'Niftel Communications' },
    { name: 'Ayush Sinha', email: 'ayush.sinha@sugarboxnetworks.com', company: 'SugarBox Networks' },
    { name: 'Babitha Nambiar', email: 'babitha.nambiar@opusconsulting.com', company: 'Opus Consulting Solutions' },
    { name: 'Babu Thoppil', email: 'babu_thoppil@mahindrasatyam.com', company: 'Mahindra Satyam BPO' },
    { name: 'Balaji Er', email: 'balaji@isourceindia.com', company: 'iSource ITES' },
    { name: 'Balaji Thiyagarajan', email: 'balaji.thiyagarajan@thirdware.com', company: 'Thirdware Solution INC' },
    { name: 'Balakrishna Shetty', email: 'balakrishna.shetty@genisys-group.com', company: 'Genisys Group' },
    { name: 'Balaraju Guddinti', email: 'balaraju.g@nslhub.com', company: 'Brane Enterprises' },
    { name: 'Balesh S', email: 'balesh@adarshsolutions.com', company: 'Adarsh Solutions' },
    { name: 'Balneet Birah', email: 'balneet.birah@netsolutions.com', company: 'Net Solutions' },
    { name: 'Bandana Kaul', email: 'bandana@airditsoftware.com', company: 'Airdit Software Services' },
    { name: 'Bandla Shyamprasad', email: 'bandla.shyamprasad@terralogic.com', company: 'Terralogic' },
    { name: 'Banmeet Kour', email: 'banmeet.kour@itbd.net', company: 'IT BY DESIGN' },
    { name: 'Barkha Agrawal', email: 'bagrawal@cpg-inc.com', company: 'Computer Power Group' },
    { name: 'Barkha Dave', email: 'barkha@trellissoft.ai', company: 'Trellissoft' },
    { name: 'Barkha Sharma', email: 'barkha@wobot.ai', company: 'Wobot.ai' },
    { name: 'Basava', email: 'basava@kamivision.com', company: 'Kami Vision' },
    { name: 'Batool Ali', email: 'batool.ali@electriphi.ai', company: 'Ford Pro Charging' },
    { name: 'Bedisha Karmakar', email: 'bedisha@reward360.co', company: 'Reward360 Global Services' },
    { name: 'Benoy Koshy', email: 'benoy.koshy@sisainfosec.com', company: 'SISA' },
    { name: 'Bensely Zachariah', email: 'bensely.zachariah@fulcrumdigital.com', company: 'Fulcrum Digital Inc' },
    { name: 'Bensley Zachariah', email: 'bensley.zachariah@fulcrumdigital.com', company: 'Fulcrum Digital Inc' },
    { name: 'Benson Mendez', email: 'benson.mendez@microobjects.net', company: 'MicroObjects' },
    { name: 'Bhakti Dharod', email: 'bhakti.dharod@idfy.com', company: 'IDfy' },
    { name: 'Bharat Bhartia', email: 'bharat.bhartia@workindia.in', company: 'WorkIndia' },
    { name: 'Bharat Rao', email: 'bharat@ka-nex.com', company: 'CK Solutions' },
    { name: 'Bharathi Ravipati', email: 'bravipati@appstekcorp.com', company: 'AppsTek' },
    { name: 'Bhargavi Challa', email: 'bhargavic@aissel.com', company: 'Aissel Technologies' },
    { name: 'Bharti Negi', email: 'bharti.negi@edifecs.com', company: 'Edifecs' },
    { name: 'Bhavana Jain', email: 'bhavana@netcore.co.in', company: 'Netcore Cloud' },
    { name: 'Bhavik Kaklotar', email: 'bkaklotar@diabsolut.com', company: 'Diabsolut Inc' },
    { name: 'Bhavik Shah', email: 'bhavik@games2win.com', company: 'Games2win India' },
    { name: 'Bhavika Sheth', email: 'bhavika.sheth@itcgindia.com', company: 'ITCG Solutions' },
    { name: 'Bhavin Sanghavi', email: 'bhavin@mydukaan.io', company: 'Dukaan' },
    { name: 'Bhavya Shetty', email: 'bhavya@supplywisdom.com', company: 'Supply Wisdom' },
    { name: 'Bhawna Suri', email: 'bhawna@weexcel.in', company: 'HR' },
    { name: 'Bhupesh Wasmatkar', email: 'bhupesh.wasmatkar@verse.in', company: 'VerSe Innovation' },
    { name: 'Biju Varghese', email: 'biju.v@inapp.com', company: 'InApp' },
    { name: 'Bikram Dash', email: 'bikram.dash@tatwa.info', company: 'TATWA Technologies' },
    { name: 'Bindu Krishnan', email: 'bindu.krishnan@ospyn.com', company: 'Ospyn Technologies' },
    { name: 'Binoy Varghese', email: 'binoy.varghese@rgigroup.com', company: 'RGI Group' },
    { name: 'Biplob Das', email: 'biplob.das@izmoltd.com', company: 'izmo' },
    { name: 'Birendra Rout', email: 'birendra.rout@weavertec.com', company: 'Weaverbird Engineering & Technology' },
    { name: 'Bishnu Rai', email: 'bishnu.rai@iglobalservices.net', company: 'iGlobal KPO Services' },
    { name: 'Bosky Wadhwa', email: 'bosky.w@totalitglobal.com', company: 'Total IT Global' },
    { name: 'Brij Kishore', email: 'brij@claritusconsulting.com', company: 'Claritus Management Consulting' },
    { name: 'Britto Ambrose', email: 'britto@xoxoday.com', company: 'Xoxoday' },
    { name: 'Bushra Mehdi', email: 'bushra.mehdi@axeno.co', company: 'Axeno' },
    { name: 'Byju Valappil', email: 'byju@rdalabs.com', company: 'RDAlabs' },
    { name: 'Capt Kansal', email: 'capt.kansal@writerinformation.com', company: 'Writer Information' },
    { name: 'Celina Joseph', email: 'celina.joseph@extentia.com', company: 'Extentia Information Technology' },
    { name: 'Chainsingh Rathore', email: 'chainsingh.rathore@thegatewaycorp.com', company: 'Gateway Group of Companies' },
    { name: 'Chaitali Bhattacharya', email: 'cbhattacharya@inventive-it.com', company: 'Inventive IT' },
    { name: 'Chaitali Ray', email: 'cray@netwoven.com', company: 'Netwoven' },
    { name: 'Chaitanya Arikati', email: 'chaitanya.arikati@abjayon.com', company: 'Abjayon' },
    { name: 'Chaitanya Kanthi', email: 'chaitanya.kanthi@smartims.com', company: 'Smart IMS' },
    { name: 'Chaitanya Peeta', email: 'chaitanya.peeta@polygon.technology', company: 'Polygon' },
    { name: 'Chamola Hal', email: 'chamola.hal@hal-dz.com', company: 'HAL' },
    { name: 'Chanchal Chandiok', email: 'chanchal.chandiok@northgateps.com', company: 'NEC Software Solutions' },
    { name: 'Chandan Gambhir', email: 'chandan@noida.interrasystems.com', company: 'Interra Systems' },
    { name: 'Chandan Thakur', email: 'chandan.kashyap@mysenseinc.com', company: 'Mysense Technologies' },
    { name: 'Chandini Davies', email: 'chandinid@saglobal.com', company: 'sa.global' },

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
