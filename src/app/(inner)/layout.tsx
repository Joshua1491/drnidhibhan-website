import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function InnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">{children}</main>
      <Footer />
    </>
  );
}
