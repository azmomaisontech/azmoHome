import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

type HandleChange = ChangeEvent<HTMLInputElement>;

interface ChangeEmailProps {
  handleEmailSubmit: (e: FormEvent<HTMLFormElement>, email: string) => void;
  loading: boolean;
  success: boolean;
  error: string | null;
  setAlert: (msg: string) => void;
}

const ChangeEmail: React.FC<ChangeEmailProps> = ({ handleEmailSubmit, loading, success, error, setAlert }) => {
  const [email, setEmail] = useState("");

  const handleChangeEmail = (e: HandleChange) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (error !== null) {
      setAlert(error);
    } else if (success) {
      setEmail("");
      setAlert("User info changed successfully");
    }
  }, [success, error]);

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
