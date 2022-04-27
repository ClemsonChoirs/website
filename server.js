const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "mboyt@g.clemson.edu",
    pass: "p0ppy071299!!"
  },
});
  
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const voicepart = req.body.voicepart;
  const grade = req.body.grade;
  const highschool = req.body.highschool;
  const foundUs = req.body.foundUs;
  const other = req.body.other;
  const currentmember = req.body.currentmember;
  const comments = req.body.comments;
  const mail = {
    from: name,
    to: "mboyt@g.clemson.edu",
    subject: "Interest Form Submission",
    html: `<p>${name} filled out the interest form!</p>
            <p>Email: ${email}</p>
            <p>Voice Part: ${voicepart}</p>
            <p>Grade: ${grade}</p>
            <p>High School: ${highschool}</p>
            <p>How they heard about us: ${foundUs} ${currentmember} ${other}</p>
            <p>Comments (optional): ${comments}`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});