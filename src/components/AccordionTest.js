import { useState } from "react";

export default function AccordionTest(props) {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");

  // const Component = ;
  // <props.children text="hello" other="other value" />
  // const Children = props.children;
  // <Children text="hello" other="other value" count={count} />

  const opened = () => {
    props.tittle && <i className="pi pi-plus" />;
  };
  const closed = () => {
    props.tittle && <i className="pi pi-minus" />;
  };

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setOpen(!open);

            if (open) {
              setDescription(props.description);
            }
          }}
        >
          {open ? closed() : opened()}
        </button>
      </div>
      {open ? props.children({ description, tittle: props.tittle }) : null}
    </div>
  );
}
