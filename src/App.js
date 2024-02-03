import "./App.css";

// import { AnonimousComponent } from "./components/AnonimousComponent";
// import { withState } from "./components/withState";
import Accordion from "./components/Accordion";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />

      <Accordion />
      {/* <AccordionTest
        tittle="Frodo"
        showChildren={true}
        description="I'm Frodo"
      ></AccordionTest> */}
    </div>
  );
}

export default App;

// npm run start
