This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Environment variables

- **`TYPEFORM_URL`**: fallback Typeform URL for other hosts

Notes:
- For `muslimsettify.com`, `/apply` is hard-locked to `[https://form.typeform.com/to/ztBUiWgs](https://form.typeform.com/to/ztBUiWgs)` to prevent misrouting.
- For `settifyowtp*`, `/apply` redirects to `[https://form.typeform.com/to/jR36nOwS](https://form.typeform.com/to/jR36nOwS)`.
- For `settifyhaqqan*`, `/apply` redirects to `[https://form.typeform.com/to/t5UXUG8L](https://form.typeform.com/to/t5UXUG8L)`.
- If the host doesn’t match any known site and `TYPEFORM_URL` isn’t set, `/apply` will **not redirect** (to avoid sending leads to the wrong form) and will instead display a configuration error.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
