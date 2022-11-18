/** @format */

import React, { useState } from "react";
import "./Hospital.css";
const Hospital = () => {
  const [state, setState] = useState({
    fullname: "",
    serial: "",
    gender: "male",
    age: "",
    email: "",
    phone: "",
    symptombs: "",
    reRegister: false,
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Xəstə qeydiyyatdan keçdi");
    console.log("Xəstənin adı: " + state.fullname);
    console.log("Vəsiqə seriyası və nömrəsi: " + state.serial);
    console.log("Cinsi: " + state.gender);
    console.log("Yaş: " + state.age);
    console.log("Email ünvanı: " + state.email);
    console.log("Telefon nömrəsi: " + state.phone);
    console.log("Simptomlar: " + state.symptombs);
    console.log("Təkrar qəbul: " + state.reRegister);
  };

  return (
    <>
      <main>
        <form className="user-form" onSubmit={handleSubmit}>
          <label htmlFor="fullname">
            Ad:
            <input
              className="full-name"
              name="fullname"
              type="text"
              onChange={handleChange}
              value={state.name}
              placeholder="Xəstənin ad və soyadı"
              required
            />
          </label>

          <label htmlFor="serial">
            Seriya nömrəsi:
            <input
              type="text"
              name="serial"
              placeholder="fin kodu"
              onChange={handleChange}
              value={state.fin}
              required
            />
          </label>

          <label htmlFor="gender">
            Cinsi:
            <br />
            <select
              className="gender"
              name="gender"
              onChange={handleChange}
              value={state.gender}
            >
              <option value="male">Kişi</option>
              <option value="female">Qadın</option>
            </select>
          </label>

          <label htmlFor="age">
            Yaşı:
            <input type="number" name="age" min="0" onChange={handleChange} />
          </label>

          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              autoComplete="email"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="phone">
            Telefon nömrəsi:
            <input type="number" name="phone" onChange={handleChange} />
          </label>

          <label htmlFor="symptombs">
            Simptomlar:
            <br />
            <textarea
              name="symptombs"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </label>

          <div className="last-check">
            <label htmlFor="reRegister">Təkrar qəbul:</label>

            <input
              name="reRegister"
              className="checkbox"
              type="checkbox"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit">
            Göndər
          </button>
        </form>
      </main>
    </>
  );
};

export default Hospital;
