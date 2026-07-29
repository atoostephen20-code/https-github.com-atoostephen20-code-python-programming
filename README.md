## Environment & deployment

This project is prepared for deployment on Vercel (recommended). To enable email sending from the contact form, provide a SendGrid API key and site contact email as environment variables.

Required environment variables (example in .env.example):
- SENDGRID_API_KEY (optional) — if set, contact form will send emails through SendGrid
- SITE_CONTACT_EMAIL — the recipient "from/to" used for contact messages

Vercel deployment steps (recommended):
1. Go to https://vercel.com/new and import this GitHub repository.
2. In Project Settings → Environment Variables, add SENDGRID_API_KEY and SITE_CONTACT_EMAIL.
3. Deploy. Vercel will build and host the Next.js app automatically.

Notes:
- If you prefer using Mailgun or another provider, I can update the API handler to support it.
- For scheduled jobs or advanced forms, consider deploying serverless functions or using a CRM like HubSpot.

Blog & CMS
- This starter includes a basic MDX blog stored under /content/blog.
- To add a post, create a new .mdx file with frontmatter (title, date, excerpt) in /content/blog.
- For a full CMS (Sanity/Contentful), I can integrate that next.
