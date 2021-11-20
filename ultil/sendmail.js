const nodemailer = require('nodemailer')

const sendMail = async (options) => {
    //Create reusable transport object using the default SMPT
    const transport = nodemailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        auth: {
            user: process.env.SMPT_EMAIL,
            pass: process.env.SMPT_PASSWORD
        }
    });

    //Send Email with defined transport object
    const message = {
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    const info = await transport.sendMail(message)

    console.log('Message sent: %s',  info.messageId)
}

module.exports = sendMail;