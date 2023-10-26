import "./App.css";
import Table from "./components/Table";
import Modal from "./components/Modal";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { addData, deleteData, updateData } from "./redux/actions/CrudActions";

const handleAddData = (data) => {
  addData(data); // Dispatches the ADD_TODO action
};

const handleDeleteTodo = (data) => {
  deleteData(data); // Dispatches the DELETE_TODO action
};

const handleUpdateTodo = (updatedData) => {
  updateData(updatedData); // Dispatches the UPDATE_TODO action
};

function App() {
  const disptach = useDispatch();
  const data = useSelector((state) => state.card);
  // console.log("DATA------------", data);

  const [modalopen, setModalopen] = useState(false);

  const [rows, setRows] = useState(data);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalopen(true);
  };

  const handleDeleteRow = (targetIndex) => {
    console.log("DELETE ", targetIndex);
    disptach(deleteData(targetIndex));
    // setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleSubmit = (name, email, state, city, gender, age) => {
    const obj = {
      name,
      email,
      state,
      city,
      gender,
      age,
    };
    rowToEdit === null
      ? setRows(disptach(addData(obj)))
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
            return obj;
          })
        );
  };
  console.log("ROWS----->", rows);
  return (
    <>
      <div className="container">
        <div className="App">
          <button className="btn" onClick={() => setModalopen(true)}>
            Add Info
          </button>
          <Table
            rows={rows}
            deleteRow={handleDeleteRow}
            editRow={handleEditRow}
          />

          {modalopen && (
            <Modal
              onSubmit={handleSubmit}
              closeModal={() => {
                setModalopen(false);
                setRowToEdit(null);
              }}
              defaultValue={rowToEdit !== null && rows[rowToEdit]}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
