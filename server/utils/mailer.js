const nodemailer = require('nodemailer');

// Lazily create the transporter so the server still runs locally
// without SMTP env vars configured.
let cachedTransporter = null;

function getTransporter() {
  if (cachedTransporter) return cachedTransporter;

  const { SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) return null;

  cachedTransporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE || 'gmail',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
  return cachedTransporter;
}

async function sendEnquiryEmail({ name, email, course, message }) {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn('SMTP not configured — skipping enquiry email. Set SMTP_USER and SMTP_PASS.');
    return { skipped: true };
  }

  const to = process.env.ENQUIRY_TO || 'finappacademy@gmail.com';
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;

  const subject = `New FinApp Enquiry — ${name} (${course})`;
  const text =
    `You have a new enquiry from the FinApp website.\n\n` +
    `Name:    ${name}\n` +
    `Email:   ${email}\n` +
    `Course:  ${course}\n\n` +
    `Message:\n${message}\n`;

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#1f2937;">
      <h2 style="color:#0077ff;margin:0 0 16px;">New FinApp Enquiry</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;font-weight:bold;width:120px;">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:6px 0;font-weight:bold;">Email</td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding:6px 0;font-weight:bold;">Course</td><td>${escapeHtml(course)}</td></tr>
      </table>
      <h3 style="margin:20px 0 8px;font-size:15px;">Message</h3>
      <p style="white-space:pre-wrap;background:#f8fafc;padding:12px;border-radius:8px;font-size:14px;">${escapeHtml(message)}</p>
    </div>
  `;

  return transporter.sendMail({
    from,
    to,
    replyTo: email,
    subject,
    text,
    html,
  });
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

module.exports = { sendEnquiryEmail };
