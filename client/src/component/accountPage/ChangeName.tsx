import React, { useState, ChangeEvent, FormEvent } from "react";

type HandleChange = ChangeEvent<HTMLInputElement>;
type SubmitForm = FormEvent<HTMLFormElement>;

interface HandleSubmit {
  handleSubmit: (event: SubmitForm, data: string) => void;
}

const ChangeName: React.FC<HandleSubmit> = ({ handleSubmit }) => {
  const [name, setName] = useState("");

  const handleChange = (e: HandleChange) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={e => handleSubmit(e, name)}>
      <div className="form-group">
        <label htmlFor="name">Full name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleChange} required />
      </div>
      <button type="submit">Change</button>
    </form>
  );
};

export default ChangeName;
