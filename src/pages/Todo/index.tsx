import { useState } from "react";
import TodoModal from "./components/todo-modal";

export type TodoList = {
  id: number;
  title: string;
  isDone: boolean;
};
function Todo() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<TodoList[]>([]);

  return (
    <>
      <TodoModal
        show={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        onSave={(save: TodoList) => {
          todoList.push(save);
          console.log(save);
          setTodoList([...todoList]);
        }}
      />

      <div className="row">
        <div className="col-12">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add New Todo
          </button>

          <table className="table table-striped table-hover">
            <thead>
              <th>Id number</th>
              <th>Content</th>
              <th>is Done </th>
              <th>Delete </th>
            </thead>
            <tbody>
              {todoList.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={item.isDone}
                      onChange={(e) => {
                        console.log(e.target.checked);
                        todoList[index].isDone = e.target.checked;
                        //component render olabilmesi için yeni bir değer göndermek gerekiyor
                        //aksi halde render olmayacak ve yenilenmeyecektir.
                        setTodoList([...todoList]);
                      }}
                      aria-label="Checkbox for following text input"
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={(e) => {
                        todoList.splice(index, 1);
                        setTodoList([...todoList]);
                      }}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Todo;
