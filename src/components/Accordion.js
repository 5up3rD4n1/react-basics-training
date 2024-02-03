import "primeicons/primeicons.css";
import { AccordionItem } from "./AccordionItem";
import { users } from "../data";
import { useReducer } from "react";

/*
state: [{isOpen: false}, {isOpen: false}, {isOpen: false}, ...]
action: {type: "toogle", payload: 1}
*/

function reducer(state = [], action) {
  if (action.type === "toggle") {
    // const dataAtIndex = state[1];
    // const dataAtIndex = {isOpen: false};
    const dataAtIndex = state[action.payload];

    // returns a new object/instance of the state (inmutable)
    return state.map((item, index) => {
      if (index === action.payload) {
        return { isOpen: !dataAtIndex.isOpen };
      }

      return { ...item };
    });
  }

  if (action.type === "expandAll") {
    return state.map(() => ({ isOpen: true }));
  }

  if (action.type === "collapseAll") {
    return state.map(() => ({ isOpen: false }));
  }

  return state;
}

function toggleIndex(index) {
  return { type: "toggle", payload: index };
}

function expandAll() {
  return { type: "expandAll" };
}

function collapseAll() {
  return { type: "collapseAll" };
}

/**
 * Component responsabilities
 *
 * 1. Controlls items
 *    - Handles general high level shared item actions
 *    - Iterates and renders each of the items
 *
 */
export default function Accordion() {
  const intialState = new Array(users.length).fill({ isOpen: false });
  const [state, dispatch] = useReducer(reducer, intialState);

  const handleOnClickExpand = () => {
    dispatch(expandAll());
  };

  const handleOnClickCollapse = () => {
    dispatch(collapseAll());
  };

  function handleOnHeaderClick(index) {
    dispatch(toggleIndex(index));
  }

  return (
    <div>
      <div>
        <button
          className="accordion_button"
          onClick={() => handleOnClickExpand()}
        >
          Expand All
        </button>{" "}
        <button
          className="accordion_button"
          onClick={() => handleOnClickCollapse()}
        >
          Collapse All
        </button>
      </div>
      <div className="wrapper">
        <div className="accordion">
          {users.map((user, index) => (
            <AccordionItem
              key={index}
              index={index}
              title={user.user}
              description={user.description}
              isOpen={state[index].isOpen}
              onHeaderClick={handleOnHeaderClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
