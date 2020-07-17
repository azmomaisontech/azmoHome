import React, { useState, ChangeEvent, FormEvent } from "react";

type HandleChange = ChangeEvent<HTMLInputElement>;

interface ChangeEmailProps {
  handleEmailSubmit: (e: FormEvent<HTMLFormElement>, email: string) => void;
  loading: boolean | undefined;
}

const ChangeEmail: React.FC<ChangeEmailProps> = ({ handleEmailSubmit, loading }) => {
  const [email, setEmail] = useState("");

  const handleChangeEmail = (e: HandleChange) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={e => handleEmailSubmit(e, email)}>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" name="email" value={email} onChange={handleChangeEmail} required />
      </div>
      <button disabled={loading} type="submit">
        Change
      </button>
    </form>
  );
};

export default ChangeEmail;
