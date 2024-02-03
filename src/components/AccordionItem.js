export function AccordionItem({
  description,
  index,
  title,
  isOpen,
  onHeaderClick,
}) {
  return (
    <div className="item">
      <div>
        <button className="expand-button" onClick={() => onHeaderClick(index)}>
          <div>
            {title}{" "}
            {!isOpen ? (
              <span className="pi pi-plus"></span>
            ) : (
              <span className="pi pi-minus"></span>
            )}
          </div>
        </button>
      </div>

      <div className="description">{isOpen ? description : null}</div>
    </div>
  );
}
