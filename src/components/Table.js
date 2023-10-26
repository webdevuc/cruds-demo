import React, { useState } from "react";
import "./Table.css";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useSelector } from "react-redux";

const Table = ({ rows, deleteRow, editRow }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const data = useSelector((state) => state.card);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the data based on the search query
    const filteredResults = data.filter((row) =>
      Object.values(row).some((value) => value.toLowerCase().includes(query))
    );
    setFilteredData(filteredResults);
  };

  return (
    <div className="container">
      <div className="justify-content-center align-items-center">
        <input
          id="searchQuery"
          name="searchQuery"
          className="w-100 inputs"
          type="text"
          placeholder="Search Person..."
          onChange={handleSearch}
        />
        <table className="table">
          <thead>
            <tr>
              <th>name </th>
              <th>email </th>
              <th>state</th>
              <th>city</th>
              <th>gender </th>
              <th>age</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {(searchQuery ? filteredData : data).map((row, idx) => {
              return (
                <tr key={idx} className="tabrow">
                  <td className="expand">{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.state}</td>
                  <td>{row.city}</td>
                  <td>{row.gender}</td>
                  <td>{row.age}</td>
                  <td>
                    <span className="actions">
                      <FaRegEdit size={"22px"} onClick={() => editRow(idx)} />
                      <MdOutlineDelete
                        className="delete-btn"
                        onClick={() => deleteRow(idx)}
                        size={"25px"}
                      />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
