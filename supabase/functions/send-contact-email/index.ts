import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  type: 'contact' | 'cta' | 'hero';
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, service, message, type }: ContactEmailRequest = await req.json();

    console.log('Sending email:', { name, email, type });

    let htmlContent = '';
    let subject = '';

    if (type === 'contact') {
      subject = `Ny kontaktforespørsel fra ${name}`;
      htmlContent = `
        <h2>Ny kontaktforespørsel</h2>
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Bedrift:</strong> ${company}</p>` : ''}
        ${message ? `<p><strong>Melding:</strong></p><p>${message}</p>` : ''}
      `;
    } else if (type === 'cta') {
      subject = `Ny tilbudsforespørsel fra ${name}`;
      htmlContent = `
        <h2>Ny tilbudsforespørsel</h2>
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        ${service ? `<p><strong>Tjeneste:</strong> ${service}</p>` : ''}
      `;
    } else if (type === 'hero') {
      subject = `Ny prisforespørsel fra ${name}`;
      htmlContent = `
        <h2>Ny prisforespørsel</h2>
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        ${service ? `<p><strong>Tjeneste:</strong> ${service}</p>` : ''}
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "GnGBranding <onboarding@resend.dev>",
      to: ["kontakt@gngbranding.no"],
      subject: subject,
      html: htmlContent,
      replyTo: email,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
