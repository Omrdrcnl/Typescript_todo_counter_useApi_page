import { useState } from "react";

export type TodoList = {
  id: number;
  title: string;
  isDone: boolean;
};

export type TodoModalType = {
  show: boolean;
  onClose(): void;
  onSave(save: TodoList): void;
};

function TodoModal(props: TodoModalType) {
  const onClose = () => {
    props.onClose();
  };

  const [newTodoTitle, setNewTodoTitle] = useState("");

  const changeTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setNewTodoTitle(event.target.value);
  };

  const addNewTodo = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newId = new Date().getTime();
    const newTodoItem: TodoList = {
      id: newId,
      title: newTodoTitle,
      isDone: false,
    };
    props.onSave(newTodoItem);
    // setTodoList([...todoList, newTodoItem]);
    setNewTodoTitle("");
    onClose();
  };

  const classArray = ["modal", "fade", "show"];

  return (
    <>
      {props.show == true ? (
        <div className="modal-backdrop fade show"></div>
      ) : (
        <></>
      )}
      <form>
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
                    onChange={changeTodo}
                    className="form-control"
                    value={newTodoTitle}
                  />
                </div>
                <div className="form-check">
                  <label className="form-check-label">is Done</label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
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
                <button
                  type="submit"
                  onClick={addNewTodo}
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default TodoModal;
