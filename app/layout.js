import "./globals.css";
import SessionProviderComponent from "./SessionProviderComponent";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head /> */}
      <head>
        <title>AnonyMessage</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Send anonymous messages" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-bg-gradient py-14  h-[100vh]">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
        <SessionProviderComponent>{children}</SessionProviderComponent>
      </body>
    </html>
  );
}
