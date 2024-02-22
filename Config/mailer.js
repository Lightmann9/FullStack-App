const nodemailer = require("nodemailer");

const sendMail = async(FullName, Email)=>{
  const contactTemplate = `<div>

    <div>
<h2 style="color: #ee23f3;">
Welcome to OGC Mining App
</h2>
    </div>
    <ul>
    <li>Name: ${FullName}</li>
    <li>Email: ${Email}</li>
    </ul>
    <div>
    <p>Welcome to our community! We are thrilled to have you on board.</p>
    <p> With your new account, you can explore all the features our website has to offer.</p>
    <p> If you have any questions or need assistance, feel free to contact us</p>

    </div>
    <p style="color: #ee23f3;"><i>OGC Mining App</i></p>
  </div>`

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_EMAIL,
    password: process.env.GOOGLE_PASSWORD,
  },
})

  const mailOptions ={
    from: "obarombifamily@yahoo.com",
    to: Email,
    subject: "Welcome to OGC Miners Community",
    html: contactTemplate,
    text: "OGC Miners Community"
  };
  try {
    transporter.sendMail(mailOptions)
    res.status(200).send({message: "Email sent successfully"})
  } catch (error) {
    res.status(500).send({message: "Internal Server Error"})
  }
}