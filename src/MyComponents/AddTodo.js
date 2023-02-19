import React, { useState } from "react";

export const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be empty");
    }
    addTodo(title, desc);
  };
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="form-group mb-2">
          <label htmlFor="title">Todo Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="Enter Todo title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="desc">Todo Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter Todo description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-sm btn-success my-2">
          Add Todo
        </button>
      </form>
    </div>
  );
};
