import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// ─── Nodemailer Transporter ──────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,   // your Gmail address
    pass: process.env.MAIL_PASS,   // Gmail App Password (not your account password)
  },
});

// ─── Professional HTML Email Template ───────────────────────────────────────
function buildEmailHTML({ name, email, phone, service, message }) {
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-IN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
  const formattedTime = now.toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit', hour12: true,
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Project Inquiry — Aerithm Nexus</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0f;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">

  <!-- Outer Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0a0a0f;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0" border="0" style="max-width:620px;width:100%;">

          <!-- ── HEADER ── -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%);border-radius:16px 16px 0 0;padding:40px 48px 36px;text-align:center;border:1px solid rgba(99,102,241,0.25);border-bottom:none;">
              <p style="margin:0 0 4px 0;font-size:11px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:#6366f1;">AERITHM NEXUS</p>
              <h1 style="margin:8px 0 0 0;font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;line-height:1.2;">
                New Project Inquiry
              </h1>
              <p style="margin:10px 0 0 0;font-size:14px;color:#94a3b8;">Received on ${formattedDate} at ${formattedTime}</p>
              <!-- Gradient Divider -->
              <div style="margin:28px auto 0;height:2px;width:80px;background:linear-gradient(90deg,#6366f1,#a855f7,#ec4899);border-radius:2px;"></div>
            </td>
          </tr>

          <!-- ── BODY ── -->
          <tr>
            <td style="background-color:#0d0d18;padding:40px 48px;border:1px solid rgba(99,102,241,0.15);border-top:none;border-bottom:none;">

              <!-- Greeting -->
              <p style="margin:0 0 28px 0;font-size:15px;color:#cbd5e1;line-height:1.7;">
                A new contact form submission has been received. Please find the full inquiry details below and follow up with the prospective client at your earliest convenience.
              </p>

              <!-- ── CLIENT DETAILS CARD ── -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:linear-gradient(135deg,rgba(99,102,241,0.08),rgba(168,85,247,0.06));border:1px solid rgba(99,102,241,0.2);border-radius:12px;margin-bottom:28px;">
                <tr>
                  <td style="padding:28px 32px;">
                    <p style="margin:0 0 20px 0;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#6366f1;">Client Information</p>

                    <!-- Name -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
                      <tr>
                        <td width="140" valign="top" style="padding:0 0 0 0;">
                          <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#64748b;">Full Name</p>
                        </td>
                        <td valign="top">
                          <p style="margin:0;font-size:15px;font-weight:600;color:#f1f5f9;">${name}</p>
                        </td>
                      </tr>
                    </table>
                    <div style="height:1px;background:rgba(255,255,255,0.05);margin-bottom:16px;"></div>

                    <!-- Email -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
                      <tr>
                        <td width="140" valign="top">
                          <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#64748b;">Email Address</p>
                        </td>
                        <td valign="top">
                          <a href="mailto:${email}" style="font-size:15px;font-weight:600;color:#6366f1;text-decoration:none;">${email}</a>
                        </td>
                      </tr>
                    </table>
                    <div style="height:1px;background:rgba(255,255,255,0.05);margin-bottom:16px;"></div>

                    <!-- Phone -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
                      <tr>
                        <td width="140" valign="top">
                          <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#64748b;">Phone Number</p>
                        </td>
                        <td valign="top">
                          <a href="tel:${phone}" style="font-size:15px;font-weight:600;color:#f1f5f9;text-decoration:none;">${phone}</a>
                        </td>
                      </tr>
                    </table>
                    <div style="height:1px;background:rgba(255,255,255,0.05);margin-bottom:16px;"></div>

                    <!-- Service -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="140" valign="top">
                          <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#64748b;">Service Required</p>
                        </td>
                        <td valign="top">
                          <span style="display:inline-block;padding:4px 14px;background:linear-gradient(135deg,rgba(99,102,241,0.2),rgba(168,85,247,0.2));border:1px solid rgba(99,102,241,0.3);border-radius:20px;font-size:13px;font-weight:600;color:#a5b4fc;">${service}</span>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              <!-- ── MESSAGE CARD ── -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;margin-bottom:32px;">
                <tr>
                  <td style="padding:28px 32px;">
                    <p style="margin:0 0 14px 0;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#64748b;">Project Message</p>
                    <p style="margin:0;font-size:15px;color:#cbd5e1;line-height:1.8;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>

              <!-- ── ACTION BUTTONS ── -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:8px;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding-right:12px;">
                          <a href="mailto:${email}" style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#6366f1,#a855f7);border-radius:8px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:0.3px;">Reply to Client</a>
                        </td>
                        <td>
                          <a href="tel:${phone}" style="display:inline-block;padding:14px 32px;background:transparent;border:1px solid rgba(99,102,241,0.4);border-radius:8px;font-size:14px;font-weight:700;color:#a5b4fc;text-decoration:none;letter-spacing:0.3px;">Call Client</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── FOOTER ── -->
          <tr>
            <td style="background-color:#080810;border:1px solid rgba(99,102,241,0.15);border-top:1px solid rgba(99,102,241,0.1);border-radius:0 0 16px 16px;padding:28px 48px;text-align:center;">
              <p style="margin:0 0 6px 0;font-size:13px;font-weight:700;color:#6366f1;letter-spacing:2px;text-transform:uppercase;">Aerithm Nexus</p>
              <p style="margin:0 0 4px 0;font-size:12px;color:#475569;">aerithmnexus@gmail.com</p>
              <p style="margin:0 0 16px 0;font-size:12px;color:#475569;">+91 98015 68951</p>
              <p style="margin:0;font-size:11px;color:#334155;">This is an automated notification from your website's contact form.</p>
              <p style="margin:4px 0 0 0;font-size:11px;color:#334155;">Please do not reply directly to this email.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}

// ─── Build auto-reply HTML for the client ────────────────────────────────────
function buildAutoReplyHTML({ name, service }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You — Aerithm Nexus</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0f;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0a0a0f;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0" border="0" style="max-width:620px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%);border-radius:16px 16px 0 0;padding:48px 48px 40px;text-align:center;border:1px solid rgba(99,102,241,0.25);border-bottom:none;">
              <p style="margin:0 0 4px 0;font-size:11px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:#6366f1;">AERITHM NEXUS</p>
              <h1 style="margin:12px 0 0 0;font-size:30px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;line-height:1.2;">
                Thank You, ${name}!
              </h1>
              <p style="margin:12px 0 0 0;font-size:15px;color:#94a3b8;line-height:1.6;">We have received your inquiry and our team will reach out shortly.</p>
              <div style="margin:28px auto 0;height:2px;width:80px;background:linear-gradient(90deg,#6366f1,#a855f7,#ec4899);border-radius:2px;"></div>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background-color:#0d0d18;padding:40px 48px;border:1px solid rgba(99,102,241,0.15);border-top:none;border-bottom:none;">

              <p style="margin:0 0 24px 0;font-size:15px;color:#cbd5e1;line-height:1.8;">
                Dear <strong style="color:#f1f5f9;">${name}</strong>,
              </p>
              <p style="margin:0 0 24px 0;font-size:15px;color:#cbd5e1;line-height:1.8;">
                Thank you for reaching out to <strong style="color:#a5b4fc;">Aerithm Nexus</strong>. We have successfully received your inquiry regarding <strong style="color:#a5b4fc;">${service}</strong> and a member of our team will review your requirements and contact you within <strong style="color:#f1f5f9;">30 minutes</strong>.
              </p>

              <!-- What happens next -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:linear-gradient(135deg,rgba(99,102,241,0.08),rgba(168,85,247,0.06));border:1px solid rgba(99,102,241,0.2);border-radius:12px;margin-bottom:32px;">
                <tr>
                  <td style="padding:28px 32px;">
                    <p style="margin:0 0 20px 0;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#6366f1;">What Happens Next</p>

                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
                          <p style="margin:0;font-size:14px;color:#cbd5e1;line-height:1.6;"><strong style="color:#f1f5f9;">Step 1 — Review (within 30 minutes):</strong> Our team reviews your inquiry in detail.</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
                          <p style="margin:0;font-size:14px;color:#cbd5e1;line-height:1.6;"><strong style="color:#f1f5f9;">Step 2 — Proposal (within 24 hours):</strong> We send you a tailored project proposal and cost estimate.</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;">
                          <p style="margin:0;font-size:14px;color:#cbd5e1;line-height:1.6;"><strong style="color:#f1f5f9;">Step 3 — Kickoff (within 48 hours):</strong> Upon your approval, development begins immediately.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 8px 0;font-size:15px;color:#cbd5e1;line-height:1.8;">
                In the meantime, if you have any urgent questions, feel free to reach us directly:
              </p>
              <p style="margin:0 0 32px 0;font-size:15px;color:#94a3b8;line-height:1.8;">
                Email: <a href="mailto:aerithmnexus@gmail.com" style="color:#6366f1;text-decoration:none;">aerithmnexus@gmail.com</a><br/>
                WhatsApp: <a href="https://wa.me/919801568951" style="color:#6366f1;text-decoration:none;">+91 98015 68951</a>
              </p>

              <p style="margin:0;font-size:15px;color:#cbd5e1;line-height:1.8;">
                Warm regards,<br/>
                <strong style="color:#f1f5f9;">The Aerithm Nexus Team</strong>
              </p>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#080810;border:1px solid rgba(99,102,241,0.15);border-top:1px solid rgba(99,102,241,0.1);border-radius:0 0 16px 16px;padding:28px 48px;text-align:center;">
              <p style="margin:0 0 6px 0;font-size:13px;font-weight:700;color:#6366f1;letter-spacing:2px;text-transform:uppercase;">Aerithm Nexus</p>
              <p style="margin:0 0 4px 0;font-size:12px;color:#475569;">aerithmnexus@gmail.com</p>
              <p style="margin:0 0 16px 0;font-size:12px;color:#475569;">+91 98015 68951</p>
              <p style="margin:0;font-size:11px;color:#334155;">You received this email because you submitted our contact form.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}

// ─── API Route ───────────────────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  // Basic validation
  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    // 1. Notify you (the business owner)
    await transporter.sendMail({
      from: `"Aerithm Nexus Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || process.env.MAIL_USER, // where YOU receive inquiries
      replyTo: email,
      subject: `New Inquiry: ${service} — from ${name}`,
      html: buildEmailHTML({ name, email, phone, service, message }),
    });

    // 2. Send auto-reply to the client
    await transporter.sendMail({
      from: `"Aerithm Nexus" <${process.env.MAIL_USER}>`,
      to: email,
      subject: `We received your inquiry — Aerithm Nexus`,
      html: buildAutoReplyHTML({ name, service }),
    });

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
});

// ─── Start Server ────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Aerithm Nexus mail server running on http://localhost:${PORT}`);
});
