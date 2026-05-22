import axios from "axios";
import React, { useState } from "react";

function AddUser() {
  const [name, setName] = useState<string>("");
  const [gmail, setGmail] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !gmail || !age) {
      alert("Fill all fields");
      return;
    }
    try {
      await axios.post("http://localhost:5000/api/v1/customer", {
        name,
        gmail,
        age: Number(age),
      });
      alert("User Saved Successfully!");
      setName("");
      setGmail("");
      setAge("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        background: "#f9f9f9",
        borderRadius: "8px",
        margin: "10px 0",
      }}
    >
      <h3> Add User Component</h3>
      <form onSubmit={handleSave}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <br />
        <input
          type="email"
          placeholder="Gmail"
          value={gmail}
          onChange={(e) => setGmail(e.target.value)}
          style={inputStyle}
        />
        <br />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={inputStyle}
        />
        <br />
        <button
          type="submit"
          style={{
            background: "green",
            color: "white",
            padding: "8px",
            cursor: "pointer",
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}

const inputStyle = { padding: "8px", margin: "5px 0", width: "200px" };

export default AddUser;
