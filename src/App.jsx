import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";




function App() {
  const [show, useshow] = useState();

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
           { CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} {...item} />) }
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={show === 'components'} handleClick={() => handleClick('components')}>Component</TabButton>
            <TabButton isSelected={show === 'jsx'} handleClick={() => handleClick('jsx')}>Jsx</TabButton>
            <TabButton isSelected={show === 'props'} handleClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={show === 'state'} handleClick={() => handleClick('state')}>State</TabButton>
          </menu>
          {!show && <p>Please selecte the topic.</p>}
          {show &&
            <div id="tab-content">
              <h3>{EXAMPLES[show].title}</h3>
              <p>{EXAMPLES[show].description}</p>
              <pre>{EXAMPLES[show].code}</pre>
            </div>
          }
        </section>
      </main>

    </>
  );
}

export default App;
