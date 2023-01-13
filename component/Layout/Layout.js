import Header from "./Header";
import Footer from "./Footer";

function AppLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export default AppLayout;
