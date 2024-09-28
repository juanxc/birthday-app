import React, { useState } from "react";
import "./App.css";
import "@fontsource-variable/onest";
import List from "./List";
import data from "./Data";

function App() {
  const [people] = useState(data);
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
      <div className="principal" transition-style="in:custom:circle-swoop">
        <div className="titulo">
          <h2>Los Cumpleaños de mi Familia</h2>
        </div>
        <main>
          <section className="container-cumple">
            <List people={people} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
