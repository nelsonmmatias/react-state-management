import { useState } from "react";
import { Button } from "../button/button";
import "./form.css";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [keyInfo, setKeyInfo] = useState({ key: "", value: "" });

  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnKeyUp = (e: any) => {
    setKeyInfo({
      key: e.key,
      value: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    alert(
      `introduced a new person named ${formData.name} aged ${formData.age}`
    );

    setFormData({
      name: "",
      email: "",
      age: "",
    });
  };

  return (
    <div>
      <h2>Introduce Person Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onKeyUp={handleOnKeyUp}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>

      <div>
        <h3>On Change:</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Age: {formData.age}</p>
      </div>

      <div>
        <h3>On Key Pressed</h3>
        <p>Last key pressed: {keyInfo.key}</p>
        <p>Current input value: {keyInfo.value}</p>
      </div>

      <div>
        <h3>On Hover:</h3>
        <div style={{ padding: 10 }}>
          <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{
              width: "200px",
              height: "100px",
              backgroundColor: hovered ? "lightblue" : "lightgray",
            }}
          >
            Hover over me!
          </div>
          {hovered && <p>The box is being hovered!</p>}
        </div>
      </div>

      <div>
        <h3>On Submit:</h3>
      </div>
    </div>
  );
};
