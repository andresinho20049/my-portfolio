"use server";

import * as nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/smtp-pool";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const createTransport = () => {
  const transporterOpt: SMTPTransport.Options = {
    service: "gmail",
    auth: {
      user: process.env.NO_REPLY_EMAIL_APP,
      pass: process.env.NO_REPLY_PASS_APP,
    },
  };
  const transporter = nodemailer.createTransport(transporterOpt);
  return transporter;
};

export interface ISendMailProps {
  name: string;
  email: string;
  subject: string;
  msg: string;
}

export const sendMailContact = async (props: ISendMailProps) => {
  const htmlMsg = getHtmlMessage(props);
  const markdownMsg = getMarkdownMessage(props);

  const MailOpt: MailOptions = {
    to: [
      {
        name: props.name,
        address: props.email,
      },
    ],
    bcc: [
      {
        name: "Andre Carlos",
        address: "andre.andresinho2009@hotmail.com",
      },
    ],
    subject: props.subject,
    html: htmlMsg,
    alternatives: [
      {
        contentType: "text/x-web-markdown",
        content: markdownMsg,
      },
    ],
  };

  const transporter = createTransport();
  return await transporter.sendMail(MailOpt);
};

const getHtmlMessage = ({ name, email, subject, msg }: ISendMailProps) => {
  return `<!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact</title>


      <style>
          .flex-container-xpto {
              font-family: monospace;
              max-width: 1024px;
          }

          .flex-container-xpto h1 {
              text-align: center;
              font-weight: bold;
          }

          .flex-container-xpto h3 {
              text-align: center;
              font-weight: 800;
          }

          .logo-content {
              text-align: center;
          }

          .block-mail {
              border: 2px solid #222;
              padding: 5px 20px;
              width: auto;
          }

          .block-mail h3 {
              text-align: center;
          }

          .signature-xpto {
              margin-top: 2rem;
              font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
          }

          .signature-xpto h1, .signature-xpto h3, .signature-xpto p {
              margin: 0px;
          }

          .signature-xpto-link {
              border-top: 1px solid #222;
              padding: .5rem;
              margin-top: .5rem;
          }


      </style>

  </head>

  <body>

      <section class="flex-container-xpto">

          <div class="logo-content">
              <img src="https://raw.githubusercontent.com/andresinho20049/andresinho20049/master/public/Logo_extended.png" alt="Logo Andresinho20049" height="350">
          </div>
          <h1>Portfolio - E-Mail</h1>
          <h3>This is an automatic email, please do not reply</h3>

          <p>We received a message from your Portfolio's contact page. Here is the message and the sender's contact
              information.</p>

          <div class="block-mail">
              <h3>Contact info</h3>
              <p><strong>Name: </strong>${name}</p>
              <p><strong>E-mail: </strong>${email}</p>
              <p><strong>Subject: </strong>${subject}</p>
              <p><strong>Msg: </strong>${msg}</p>
          </div>

          <p>Thank you for contacting us. We will get back to you as soon as possible.</p>

      </section>

      <div class="signature-xpto">
          <h1>André Carlos</h1>
          <h3>Developer</h3>
          <div class="signature-xpto-link">
              <a href="https://www.andresinho20049.com.br/">Visit - Portfolio</a>
          </div>
      </div>

  </body>

  </html>`;
};

const getMarkdownMessage = ({ name, email, subject, msg }: ISendMailProps) => {
  return `
    ![Logo](https://raw.githubusercontent.com/andresinho20049/andresinho20049/master/public/Logo_extended.png)

    # Portfolio - E-mail
    ### This is an automatic email, please do not reply

    We received a message from your Portfolio's contact page. Here is the message and the sender's contact information.

    ## Contact info:
    **Name:** ${name} \
    **E-mail:** ${email} \
    **Subject:** ${subject} \
    **Msg:** ${msg}
    
    ---

    Thank you for contacting us. We will get back to you as soon as possible.

    > # André Carlos
    > ### Developer
    > [My-portifolio](https://www.andresinho20049.com.br/)`;
};
