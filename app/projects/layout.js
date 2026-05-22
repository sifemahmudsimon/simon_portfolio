import Footer from "../components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
