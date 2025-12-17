import { CORE_CONCEPTS } from "./data.js";
import Head from "./components/Head.jsx";
import Header from "./components/Header.jsx";



function App() {

  return (
    <>
      <Head />
      <header>
        <h1>Vite + React</h1>
      </header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <Header {...CORE_CONCEPTS[0]}      
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
              /> 
          
            <Header {...CORE_CONCEPTS[1]} />
            <Header {...CORE_CONCEPTS[2]} />
            <Header {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>

    </>
  );
}

export default App;
