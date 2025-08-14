import LoginForm from "@/components/Module/Auth/Login/LoginForm";
import Head from "next/head";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login - InvoicePro BD</title>
        <meta
          name="description"
          content="Login to your InvoicePro BD account to manage your invoices and billing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section aria-label="Login Form Section">
          <LoginForm />
        </section>
      </main>
    </>
  );
};

export default LoginPage;
