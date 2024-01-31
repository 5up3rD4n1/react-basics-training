import "./App.css";

import { useState } from "react";
import { AnonimousComponent } from "./components/AnonimousComponent";
import { withState } from "./components/withState";
import { Component1, Component2 } from "./components/AnonimousWithWrapper";

// render props

function ComponentWithBody(props) {
  return <div>{props.body}</div>;
}

function MyComponent(props) {
  // const Component = ;
  // <props.children text="hello" other="other value" />
  // const Children = props.children;
  // <Children text="hello" other="other value" count={count} />

  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div>
      {props.text}
      <div>
        <button
          onClick={() => {
            setOpen(!open);

            if (open) {
              setCount(count + 1);
            }
          }}
        >
          {open ? "close" : "open"}
        </button>
      </div>
      {open ? props.children({ count, text: props.text }) : null}
    </div>
  );
}

function App() {
  // <MyComponent> <div> </div> <- children </MyComponent>
  // {MyComponent({
  //   text: "Hello World!",
  //   children: [
  //     <div>
  //       <h1>This is a title</h1> <span>This is some text</span>
  //     </div>,
  //   ],

  // children: (props) => jsx
  // })}

  function MyOtherComponent(props) {
    return (
      <ul>
        <ol>Hello {props.text}</ol>
        <ol>Count: {props.count}</ol>
      </ul>
    );
  }

  function MyComponentAsParam(props) {
    return (
      <div>
        <h2> This is a dummy component {props.visible ? "true" : "false"}</h2>
      </div>
    );
  }

  return (
    <div>
      <MyComponent text="Hello world" showChildren={true}>
        {MyOtherComponent}
      </MyComponent>

      <ComponentWithBody body={MyComponentAsParam({ visible: true })} />

      <Component1>
        <div>
          <h3>This is component 1</h3>
        </div>
      </Component1>

      <Component2>
        <div>
          <h3>This is component 2</h3>
        </div>
      </Component2>
    </div>
  );
}

export default App;
