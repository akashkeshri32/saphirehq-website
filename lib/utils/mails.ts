import nodemailer from "nodemailer";

import { CreateEnquiry } from "../drizzle/schema";

export async function sendWelcomeEmail(
  email: string,
  password: string,
): Promise<{ error: Error | null }> {
  const loginUrl = `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/login`;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
    <body bgcolor="#f1f5f9" style="margin:0;padding:0;background-color:#f1f5f9;font-family:system-ui,-apple-system,sans-serif">
      <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f1f5f9" style="background-color:#f1f5f9;padding:40px 16px">
        <tr><td align="center">
          <table width="480" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="background-color:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;max-width:480px;width:100%">

            <!-- Header -->
            <tr>
              <td bgcolor="#7c3aed" style="background-color:#7c3aed;padding:32px 32px 24px;text-align:center">
                <div style="width:48px;height:48px;background:#ffffff33;border-radius:12px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:12px">
                  <span style="color:#fff;font-size:22px;font-weight:700">C</span>
                </div>
                <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700">CoderNext</h1>
                <p style="margin:6px 0 0;color:#ddd6fe;font-size:14px">Your IT career starts here</p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td bgcolor="#ffffff" style="padding:32px;background-color:#ffffff">
                <h2 style="margin:0 0 8px;color:#1e293b;font-size:18px;font-weight:600">Welcome aboard!</h2>
                <p style="margin:0 0 24px;color:#475569;font-size:14px;line-height:1.6">
                  Your payment was successful and your CoderNext account has been created.
                  Here are your login credentials — keep them safe.
                </p>

                <!-- Credentials box -->
                <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f8fafc" style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:24px">
                  <tr>
                    <td bgcolor="#f8fafc" style="padding:20px;background-color:#f8fafc">
                      <p style="margin:0 0 4px;color:#94a3b8;font-size:11px;text-transform:uppercase;letter-spacing:0.08em">Email</p>
                      <p style="margin:0 0 16px;color:#1e293b;font-size:15px;font-weight:600">${email}</p>
                      <p style="margin:0 0 4px;color:#94a3b8;font-size:11px;text-transform:uppercase;letter-spacing:0.08em">Password</p>
                      <p style="margin:0;color:#1e293b;font-size:15px;font-weight:600;font-family:monospace;letter-spacing:0.05em">${password}</p>
                    </td>
                  </tr>
                </table>

                <!-- CTA -->
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center">
                      <a href="${loginUrl}" style="display:inline-block;background-color:#7c3aed;color:#ffffff;padding:13px 32px;border-radius:10px;text-decoration:none;font-weight:600;font-size:15px">
                        Log in to CoderNext
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="margin:24px 0 0;color:#94a3b8;font-size:13px;line-height:1.6;text-align:center">
                  We recommend changing your password after your first login.<br>
                  If you didn't make this purchase, please contact us immediately.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td bgcolor="#f8fafc" style="padding:16px 32px;border-top:1px solid #e2e8f0;text-align:center;background-color:#f8fafc">
                <p style="margin:0;color:#94a3b8;font-size:12px">© ${new Date().getFullYear()} CoderNext. All rights reserved.</p>
              </td>
            </tr>

          </table>
        </td></tr>
      </table>
    </body>
    </html>`;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? "CoderNext <noreply@codernext.com>",
      to: email,
      subject: "Your CoderNext account is ready 🎉",
      html,
    });
    return { error: null };
  } catch (err) {
    return { error: err instanceof Error ? err : new Error(String(err)) };
  }
}

export const sendEnquiryMail = async (
  enquiry: CreateEnquiry,
): Promise<{ error: Error | null }> => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  const row = (label: string, value: string) => `
    <tr>
      <td bgcolor="#f8fafc" style="padding:12px 16px;background-color:#f8fafc;border-bottom:1px solid #e2e8f0;width:38%">
        <p style="margin:0;color:#94a3b8;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;font-weight:600">${label}</p>
      </td>
      <td bgcolor="#ffffff" style="padding:12px 16px;background-color:#ffffff;border-bottom:1px solid #e2e8f0">
        <p style="margin:0;color:#1e293b;font-size:14px;font-weight:500">${value}</p>
      </td>
    </tr>`;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
    <body bgcolor="#f1f5f9" style="margin:0;padding:0;background-color:#f1f5f9;font-family:system-ui,-apple-system,sans-serif">
      <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f1f5f9" style="background-color:#f1f5f9;padding:40px 16px">
        <tr><td align="center">
          <table width="520" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="background-color:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;max-width:520px;width:100%">

            <!-- Header -->
            <tr>
              <td bgcolor="#7c3aed" style="background-color:#7c3aed;padding:28px 32px;text-align:center">
                <h1 style="margin:0 0 6px;color:#ffffff;font-size:20px;font-weight:700">CoderNext</h1>
                <p style="margin:0;color:#ddd6fe;font-size:13px">Internship Enquiry Notification</p>
              </td>
            </tr>

            <!-- Alert banner -->
            <tr>
              <td bgcolor="#f5f3ff" style="background-color:#f5f3ff;padding:14px 32px;border-bottom:1px solid #e2e8f0">
                <p style="margin:0;color:#6d28d9;font-size:14px;font-weight:600">
                  You have a new internship application from <span style="color:#4c1d95">${enquiry.name}</span>
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td bgcolor="#ffffff" style="padding:28px 32px 20px;background-color:#ffffff">
                <p style="margin:0 0 20px;color:#475569;font-size:14px;line-height:1.6">
                  A prospective intern has submitted an enquiry through the CoderNext website. Here are their details:
                </p>

                <!-- Details table -->
                <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;border-collapse:separate;border-spacing:0">
                  ${row("Full Name", enquiry.name)}
                  ${row("Email Address", enquiry.email)}
                  ${row("Phone Number", enquiry.phone)}
                  ${row("Domain of Interest", enquiry.domainOfInterest)}
                  ${row("Applicant Type", enquiry.applicantType || "")}
                  ${row("Duration", enquiry?.duration || "")}
                  ${row("Submitted At", submittedAt)}
                </table>

                <!-- CTA -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px">
                  <tr>
                    <td align="center">
                      <a href="mailto:${enquiry.email}?subject=Re: Your CoderNext Internship Enquiry&body=Hi ${enquiry.name}," style="display:inline-block;background-color:#7c3aed;color:#ffffff;padding:12px 28px;border-radius:10px;text-decoration:none;font-weight:600;font-size:14px">
                        Reply to ${enquiry.name}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td bgcolor="#f8fafc" style="padding:16px 32px;border-top:1px solid #e2e8f0;text-align:center;background-color:#f8fafc">
                <p style="margin:0;color:#94a3b8;font-size:12px">
                  This is an automated notification from CoderNext. Do not reply to this email directly.
                </p>
              </td>
            </tr>

          </table>
        </td></tr>
      </table>
    </body>
    </html>`;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? "CoderNext <noreply@codernext.com>",
      to: process.env.ENQUIRY_RECIPIENT_EMAIL ?? process.env.SMTP_USER,
      subject: `New Internship Enquiry — ${enquiry.name} (${enquiry.domainOfInterest})`,
      html,
    });
    return { error: null };
  } catch (err) {
    return { error: err instanceof Error ? err : new Error(String(err)) };
  }
};
