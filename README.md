This project is a frontend application developed with Next.JS. It can signup, login and manage your account.

## ⚙️Configuration

Configure the environment variables by creating `.env` file in the root of the project and adding your configurations to it:

```sh
NEXT_PUBLIC_API_URL="http://localhost:3000"
PORT=8080
```
- **NEXT_PUBLIC_API_URL**: Set the url of the server NestJS.
- **PORT**: Set the port.

## 🚀Getting Started

First, run the development server:

```bash
# docker up
$ yarn run docker:up
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## 📄Pages
- [🏠Home](http://localhost:8080) - **must be logged**
- [👤User Profile](http://localhost:8080/users) - **must be logged**
- [👤User Edit](http://localhost:8080/users/edit) - **must be logged**
- [📝Sign up](http://localhost:8080/auth/register) - redirect to Home if token valid
- [🔑Log in](http://localhost:8080/auth/login) - redirect to Home if token valid

## 🔬Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## 🪂Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
