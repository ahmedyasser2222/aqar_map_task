import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import LoginModal from "./components/model/LoginModal";
import RegisterModal from "./components/model/RegisterModal";
import UserProvider, { UserContext } from "./context/user";
import RefreshToken from "./components/RefreshToken";
import Footer from "./components/footer/Footer";

const cairo = Cairo({ subsets: ["latin"] });

interface generateMetadataParams {
  params: {
    locale: string;
  };
}
export async function generateMetadata(param: generateMetadataParams) {
  return {
    title: param.params.locale == "en" ? "Aqar Map" : "عقار ماب",
    icons: {
      icon: "https://aqarmap.com.eg/favicon.ico?revision-eg-211c888",
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      <body className={cairo.className}>
          <UserProvider>
            <RefreshToken>
              <NextIntlClientProvider locale={locale} messages={messages}>
                <Navbar locale={locale} />
                <RegisterModal />
                <LoginModal />
              </NextIntlClientProvider>
            </RefreshToken>
          </UserProvider>
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
