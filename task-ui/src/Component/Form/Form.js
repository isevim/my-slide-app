import React, { useState } from "react";
import "./Form.scss";

export default function Form({ onSubmit }) {
  const [inputs, setInputs] = useState({
    name:"",
    duration:1,
    url:"",
    type:"video/mp4"});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
 
  return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(inputs);
        }}
        className="form"
      >
        <div className="form__item">
          <label>Content Name:</label>
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__item">
          <label>URL:</label>
          <input
            type="url"
            name="url"
            placeholder="https://example.com"
            pattern="https://.*"
            value={inputs.url || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__item">
          <label>Duration:</label>
          <input
            type="number"
            name="duration"
            value={inputs.duration || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__item">
          <label>Type:</label>
          <select
            name="type"
            onChange={handleChange}
            required
            defaultValue="video/mp4"
          >
            <option value="image/jpg">Image</option>
            <option value="video/mp4">Video</option>
          </select>
        </div>
        <div className="form__item">
          <input type="submit" />
        </div>
      </form>
  );
}
