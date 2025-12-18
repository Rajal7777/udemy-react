import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";




function App() {
  const [show, useshow] = useState('components')

  function handleClick(btnno) {
    useshow(btnno);
    console.log('logged from button', btnno);
  }
  console.log('logged from app');

  return (
    <>
      <Header />
     
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}      
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
              /> 
          
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton handleClick={()=>handleClick('components') }>Component</TabButton>
            <TabButton handleClick={()=>handleClick('jsx') }>Jsx</TabButton>
            <TabButton handleClick={()=>handleClick('props') }>Props</TabButton>
            <TabButton handleClick={()=>handleClick('state') }>State</TabButton>
          </menu>
        <div id="tab-content">
          <h3>{EXAMPLES[show].title}</h3>
          <p>{EXAMPLES[show].description}</p>
          <pre>{EXAMPLES[show].code}</pre>
        </div>
        </section>
      </main>

    </>
  );
}

export default App;
