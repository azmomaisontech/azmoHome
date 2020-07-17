import React, { useState, ChangeEvent, FormEvent } from "react";

type HandleChange = ChangeEvent<HTMLInputElement>;

interface ChangeNameProps {
  handleNameSubmit: (e: FormEvent<HTMLFormElement>, name: string) => void;
  loading: boolean | undefined;
}

const ChangeName: React.FC<ChangeNameProps> = ({ handleNameSubmit, loading }) => {
  const [name, setName] = useState("");

  const handleChange = (e: HandleChange) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={e => handleNameSubmit(e, name)}>
      <div className="form-group">
        <label htmlFor="name">Full name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleChange} required />
      </div>
      <button disabled={loading} type="submit">
        Change
      </button>
    </form>
  );
};

export default ChangeName;
