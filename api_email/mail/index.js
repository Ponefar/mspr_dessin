var nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = (res,name, email) => {
    var transporter = nodemailer.createTransport({
        host: process.env.CONFIG_SERVER,
        port: process.env.PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL ,
            pass: process.env.MDP 
        }
    });
    // transporter.verify(function (error, success) {
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log("Server is ready to take our messages");
    //     }
    // })
    var mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Newsletter - Dessin Cerealis',
    html: '<html><div style="margin:0px;padding:0px;background-color: white;border:2px solid black;color: white;"><div style="margin: 30px auto; text-align: center;"><h1 style="color: black; letter-spacing: 0.06rem;">Dessin Cerealis</h1><img src="https://adrien-meynard.fr/dessin/img/logo.png" alt="Dessin Cerealis"></div<div style="background-color: white;"><div style="padding:20px;text-align: center; color: black; font-size: 35px;">Inscription à notre Newsletter effectuée !</div><br /><br /><div style="padding:20px;text-align: center; color: black; font-size: 35px;">'+name+', nous te remercions pour l\'interêt que tu portes à notre marque.</div><br /></div><div style="background-color: black;padding:30px;text-align: center; color: white; font-size: 22px;">© 2022 Copyright</div></div></html>',
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        res.send('Erreur')
    } else {
        res.send('Envoyé')
    }
    });  
}