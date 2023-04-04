export type TodoModalType = {
  show: boolean;
  onClose(): void;
};

function TodoModal(props: TodoModalType) {
  const onClose = () => {
    props.onClose();
  };

  const classArray = ["modal", "fade", "show"];
  return (
    <>
      {props.show == true ? (
        <div className="modal-backdrop fade show"></div>
      ) : (
        <></>
      )}

      <div
        className={props.show == true ? classArray.join(" ") : "modal fade"}
        style={{ display: props.show == true ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Add New Todo</h1>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Todo
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoModal;
