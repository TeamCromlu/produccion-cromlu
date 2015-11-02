var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var parsero = require('body-parser');
var emailTemplates = require('email-templates');
var jade = require('jade');
var Hogan = require('hogan.js');
var fs = require('fs');

// get file
var template = fs.readFileSync('./views/mail_1.hjs','utf-8');
// compile template
var compiledTemplate = Hogan.compile(template);

router.post('/send', handleSayHello); // handle the route at yourdomain.com/sayHello


function handleSayHello(req, res) {
	// var fn = jade.compile('')

    var transporter = nodemailer.createTransport(smtpTransport({
	    service : 'Gmail',//mail.cromlu.com
	    auth: {
	        user: 'cromlu.web@gmail.com',
	        pass: 'cromlu1221'
		    }
		})
	);


	var mailOptions = {
	    from: 'Cromlu  <web@cromlu.com>', // sender address
	    to: req.body.email + ', ' +'cromlu.web@gmail.com', // list of receivers
	    subject: 'Cromlu: Tu Propio portafolio efectivo en la web', // Subject line
	    html: compiledTemplate.render({
	    	name : req.body.nombre,
	    	telefono: req.body.telefono,
	    	mensaje: req.body.mensaje
	    })   
	    // render templte
	};

	
	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	        res.render('error_Mensaje');
	        // res.send("mensaje no envio: " , error )
	    }
	    console.log('Message sent: ' + info);
	    // res.send('mensaje enviado :D');
	    res.render('send_ok-comprar', { name: req.body.nombre, email : req.body.email})
	});
}

module.exports = router;
