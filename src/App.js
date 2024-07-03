import "./App.css";
import { React, useState } from "react";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");
  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setContact("");
    setEmail("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(contact);
  };
  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form>
          <label>First Name*</label>
          <input
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <label>Last Name*</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          <label>Enter Email*</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Enter Contact*</label>
          <input
            type="tel"
            placeholder="Enter Phone Number"
            value={contact}
            required
            onChange={(e) => setContact(e.target.value)}
          ></input>
          <label>Gender*</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
          <label>Your best Subject</label>
          <input
            type="checkbox"
            name="lang"
            id="english"
            checked={subjects.english === true}
            onChange={(e) => handleSubjectChange("english")}
          />
          English
          <input
            type="checkbox"
            name="lang"
            id="maths"
            checked={subjects.maths === true}
            onChange={(e) => handleSubjectChange("maths")}
          />
          Maths
          <input
            type="checkbox"
            name="lang"
            id="physics"
            checked={subjects.physics === true}
            onChange={(e) => handleSubjectChange("physics")}
          />
          Physics
          <label>Upload Resume*</label>
          <input
            type="file"
            placeholder="Enter upload file"
            onChange={(e) => setResume(e.target.files[0])}
            required
          ></input>
          <label>Enter URL*</label>
          <input
            type="url"
            name="url"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter url"
            required
          ></input>
          <label>Select your choice</label>
          <select
            name="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled>
              Select your Ans
            </option>
            <optgroup label="Beginers">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="t">MangoDB</option>
            </optgroup>
          </select>
          <label>About</label>
          <textarea
            name="about"
            cols="30"
            rows="10"
            placeholder="About your self"
            onChange={(e) => setAbout(e.target.value)}
            required
          ></textarea>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
