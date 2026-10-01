export interface NewsletterProvider {
  name: string;
  subscribe(email: string): Promise<void>;
}

// Default: no external provider configured. Subscribers are still recorded
// in the database (see /api/newsletter/route.ts); this adapter just skips
// the external sync step until a real provider is wired in.
class NoopProvider implements NewsletterProvider {
  name = "none";
  async subscribe(_email: string): Promise<void> {
    return;
  }
}

// Fill these in and set NEWSLETTER_PROVIDER to enable one. Each should throw
// on failure so the API route can surface a real error to the client instead
// of silently dropping the signup.
//
// class MailchimpProvider implements NewsletterProvider {
//   name = "mailchimp";
//   async subscribe(email: string) {
//     const res = await fetch(
//       `https://<dc>.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ email_address: email, status: "pending" })
//       }
//     );
//     if (!res.ok) throw new Error(`Mailchimp subscribe failed: ${res.status}`);
//   }
// }
//
// class BeehiivProvider implements NewsletterProvider { ... }
// class ConvertKitProvider implements NewsletterProvider { ... }
// class ResendProvider implements NewsletterProvider { ... }

export function getNewsletterProvider(): NewsletterProvider {
  switch (process.env.NEWSLETTER_PROVIDER) {
    // case "mailchimp": return new MailchimpProvider();
    // case "beehiiv": return new BeehiivProvider();
    // case "convertkit": return new ConvertKitProvider();
    // case "resend": return new ResendProvider();
    default:
      return new NoopProvider();
  }
}
