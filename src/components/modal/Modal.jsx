import "./modal.css";

export default function Modal(setShowModal, showModal) {
  return (
    <div className="modal">
      <div className="modal_body">
        <h4 className="modal_title">Modal</h4>
        <p className="modal_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          reiciendis inventore animi est modi quisquam dolor voluptates ea
          ducimus optio. Illo molestias porro eveniet! Nam impedit eaque
          expedita assumenda dolor!
        </p>
        <div className="modal_btn-wrapper">
          <button onClick={() => setShowModal(!showModal)}>Close</button>
        </div>
      </div>
    </div>
  );
}
