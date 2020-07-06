import React, { useState, useContext, ChangeEvent, FormEvent } from "react";
import { AuthContext } from "../../context/auth/AuthState";

type HandleChange = ChangeEvent<HTMLInputElement>;
type SubmitForm = FormEvent<HTMLFormElement>;

const ChangeName: React.FC = () => {
  const authContext = useContext(AuthContext);
  const { updateUserName } = authContext;
  const [name, setName] = useState("");

  const handleChange = (e: HandleChange) => {
    setName(e.target.value);
  };

  const handleSubmit = (event: SubmitForm) => {
    event.preventDefault();
    if (updateUserName) {
      updateUserName({ name });
    }
    console.log("Done");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleChange} required />
      </div>
      <button type="submit">Change</button>
    </form>
  );
};

export default ChangeName;
