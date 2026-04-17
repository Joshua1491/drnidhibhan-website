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
      <main style={{ paddingTop: "5rem" }}>{children}</main>
      <Footer />
    </>
  );
}
