import React from "react";
import "./Modal.css";
import { useState } from "react";

const Modal = ({ onSubmit, closeModal, defaultValue }) => {
  const [name, setName] = useState(defaultValue.name || "");
  const [errorName, setErrorName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value) {
      setErrorName("");
    } else {
      setErrorName("Name is required");
    }
  };

  const [email, setEmail] = useState(defaultValue.email || "");
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setEmailError("");
    } else {
      setEmailError("Email is required");
    }
  };

  const [state, setState] = useState(defaultValue.state || "");
  const [stateError, setStateError] = useState(false);

  const handleStateChange = (e) => {
    setState(e.target.value);
    if (e.target.value) {
      setStateError("");
    } else {
      setStateError("State is required");
    }
  };

  const [city, setCity] = useState(defaultValue.city || "");
  const [cityError, setCityError] = useState(false);

  const handleCityChange = (e) => {
    setCity(e.target.value);
    if (e.target.value) {
      setCityError("");
    } else {
      setCityError("City is required");
    }
  };

  const [gender, setGender] = useState(defaultValue.gender || "");
  const [genderError, setGenderError] = useState(false);

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    if (e.target.value) {
      setGenderError("");
    } else {
      setGenderError("Gender is required");
    }
  };

  const [age, setAge] = useState(defaultValue.age || "");
  const [ageError, setAgeError] = useState(false);

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    if (e.target.value) {
      setAgeError("");
    } else {
      setAgeError("Age is required");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorName("plsss enter your name....");
      return;
    } else if (!email) {
      setEmailError("plsss enter your Email....");
      return;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError("plsss enter valid Email....");
      return;
    } else if (!state) {
      setStateError("plsss select your state....");
      return;
    } else if (!city) {
      setCityError("plsss select your city....");
      return;
    } else if (!gender) {
      setGenderError("plsss select your gender....");
      return;
    } else if (!age || age > 100 || age < 1) {
      setAgeError("plsss enter your valid age....");
      return;
    }

    onSubmit(name, email, state, city, gender, age);
    closeModal();
    console.log(name, email, state, city, gender, age);
  };

  return (
    <>
      <div className="mooodal" style={{ width: "100%" }}>
        <div
          className="modal"
          onClick={(e) => {
            if (e.target.className === "modal") {
              closeModal();
            }
          }}
        >
          <div className="content">
            <form>
              <div className="form-group">
                <label htmlFor="name">
                  <h6 className="Ititle">Name</h6>
                </label>
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
                {errorName && <div className="error">{errorName}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <h6 className="Ititle">Email</h6>
                </label>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {emailError && <div className="error">{emailError}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="address">
                  <h6 className="Ititle">Address:-</h6>
                </label>
                <div className="address">
                  <div className="state">
                    <label htmlFor="State" className="Ititle">
                      <h6>State:</h6>
                    </label>
                    <select
                      value={state}
                      onChange={(e) => handleStateChange(e)}
                      name="state"
                      style={{ display: "block" }}
                    >
                      <option>Select</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Goa">Goa</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Keral">Keral</option>
                      <option value="Tamilnadu">Tamilnadu</option>
                      <option value="Kashmir">Kashmir</option>
                    </select>
                  </div>
                  {stateError && <div className="error">{stateError}</div>}
                  <div className="city">
                    <label htmlFor="City" className="Ititle">
                      <h6>City:</h6>
                    </label>
                    <select
                      value={city}
                      onChange={(e) => handleCityChange(e)}
                      name="city"
                    >
                      <option>Select</option>
                      <option value="Kolhapur">Kolhapur</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Pune">Pune</option>
                      <option value="Ahamadabad">Ahamadabad</option>
                      <option value="Panaji">Panaji</option>
                      <option value="Hariyana">Hariyana</option>
                      <option value="Shrinagar">Shrinagar</option>
                      <option value="Sangli">Sangli</option>
                      <option value="Banglore">Banglore</option>
                    </select>
                  </div>
                  {cityError && <div className="error">{cityError}</div>}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="gender">
                  <h6 className="Ititle">Gender</h6>
                </label>
                <select
                  value={gender}
                  onChange={(e) => handleGenderChange(e)}
                  name="gender"
                >
                  <option>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {genderError && <div className="error">{genderError}</div>}
              <div className="form-group">
                <label htmlFor="age">
                  <h6 className="Ititle">Age</h6>
                </label>
                <input
                  name="age"
                  type="number"
                  required
                  max="100"
                  value={age}
                  onChange={handleAgeChange}
                />
                {ageError && <div className="error">{ageError}</div>}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={(e) => closeModal()}
                >
                  cancel
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={handleSubmit}
                >
                  Save Info
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
