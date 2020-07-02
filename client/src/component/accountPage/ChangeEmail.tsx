import React, { useState, useContext, ChangeEvent, FormEvent } from "react";

type HandleChange = ChangeEvent<HTMLInputElement>;
type SubmitForm = FormEvent<HTMLFormElement>;

const ChangeEmail: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleChangeEmail = (e: HandleChange) => {
    setEmail(e.target.value);
  };

  const submitEmail = (e: SubmitForm) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <form onSubmit={submitEmail}>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" name="email" value={email} onChange={handleChangeEmail} required />
      </div>
      <button type="submit">Change</button>
    </form>
  );
};

export default ChangeEmail;
