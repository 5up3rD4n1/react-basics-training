import "./App.css";

import { useState } from "react";
// import { AnonimousComponent } from "./components/AnonimousComponent";
// import { withState } from "./components/withState";
// import Accordion from "./components/Accordion";
import Header from "./components/Header";
import { users } from "./data";

function Accordion(props) {
  const [isAllExpanded, setIsAllExpanded] = useState(false);

  return (
    <div>
      {/* items is an array passed as a prop param, holds the list of the data 
        we iterate through the items and pass them as prop parameter for the children/render function
      */}
      {props.items.map((item, index) =>
        // children is function that returns jsx and received props as a parameter
        // because this is iterated with a map a key prop is required/mandatory
        props.children({ key: index, item, isAllExpanded })
      )}
    </div>
  );
}

function AccordionItem(props) {
  return (
    <div>
      <div>{`${props.isAllExpanded}`}</div>
      {props.item.user}
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />

      {/* Accordion receives the items as regullar props and the render function as children props attribute,
          this component calls the render children function for each item in the list

          interface Props {
            items: object[];
            children: (props: object) => JSX;
          }

          props => {items=users, children=AccordionItem}

        */}
      <Accordion items={users} itemRender={AccordionItem}>
        {/* {AccordionItem} */}
        {/* {(props) => <AccordionItem {...props} />} */}
        {({ item, isAllExpanded }) => (
          <AccordionItem item={item} isAllExpanded={isAllExpanded} />
        )}
      </Accordion>

      {/* <Accordion /> */}
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
