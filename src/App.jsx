import FronPage from "./FronPage";
import Footer from "./Sections/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <main className="relative">
      <Nav />
      <FronPage />
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
