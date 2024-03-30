import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App({ children }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default App;
