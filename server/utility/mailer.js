'use strict';

const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 587,
    secure: false, // secure:true for port 465, secure:false for port 587
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

exports.sendMail = function ({
    toEmail,
}) {
    return new Promise(function (resolve, reject) {
        if (!toEmail) return reject("No receipients found")
        let mailOptions = {
            from: 'support@famcom.io', //'"Sender Name" <sender@gmail.com>"', // sender address
            to: toEmail, // receiver address,
            subject: "result.subject", //'Hello ✔', // Subject line
            text: "result.text", //'Hello world ?', // plain text body
            html: "result.html", //'<b>Hello world ?</b>' // html body                
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
                return console.error(error)
            }
            resolve(info);
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
    })
}