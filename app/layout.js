import { Bebas_Neue, Almarai } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const almarai = Almarai({
  weight: ["300", "400", "700", "800"],
  variable: "--font-body",
  subsets: ["arabic"], // Almarai is often used for Arabic but available in Latin
  display: "swap",
});

export const metadata = {
  title: "Kore Sports Centre Colombo – Premier Fitness & Training Hub",
  description:
    "Join Kore Sports Centre in Colombo for expert training, fitness programs, and community events. Train, Eat, Live – Empower Grit!",
  keywords:
    "Kore sports centre, fitness training Colombo, gym membership Sri Lanka, sports training Colombo, HYROX training, group fitness Colombo",
  openGraph: {
    title: "Kore Sports Centre – Join Our Training Community",
    description:
      "Train, Eat, Live. Kore Sports Centre offers gym access, coaching, and events in Colombo.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${almarai.variable}`}>
      <body>{children}</body>
    </html>
  );
}
