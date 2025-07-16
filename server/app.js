const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json({limit: "25mb"}));
app.use(express.urlencoded({limit: "25mb"}));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

function sendEmail({email, subject, message}) {
    return new Promise((resolve, reject) =>{
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "somayukirihafred@gmail.com",
                pass: "ehovqdghjxrvmyxd"
            },
        });
        const mail_configs = {
            from: "somayukirihafred@gmail.com",
            to: email,
            subject: subject,
            html: `
            <p>${message}</p>
             <p>Infinity Studios Email Code</p>
            `,
        };

        transporter.sendMail(mail_configs, function (error, info) {
            if(error) {
                console.log(error);
                return reject({message: `An error occurred`})
            }

            return resolve({message: "Email sent succesfully"});
        });
    });
}

app.get("/", (req, res) =>{
    sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () =>{
    console.log(`nodemailer is listening at https://email-nodemailer-2.onrender.com`);
});