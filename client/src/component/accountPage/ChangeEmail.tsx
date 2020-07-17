import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import * as Toast from "../../utils/alert/toast";

type HandleChange = ChangeEvent<HTMLInputElement>;

interface ChangeEmailProps {
  handleEmailSubmit: (e: FormEvent<HTMLFormElement>, email: string) => void;
  loading: boolean | undefined;
  success: boolean | undefined;
  error: string | null | undefined;
}

const ChangeEmail: React.FC<ChangeEmailProps> = ({ handleEmailSubmit, loading, success, error }) => {
  const [email, setEmail] = useState("");

  const handleChangeEmail = (e: HandleChange) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (error) {
      Toast.error(error);
    }

    if (success) {
      Toast.success("User registered successfully", 2000);
    }

    if (error !== null) {
    } else if (success) {
      setEmail("");
    }

    //eslint-disable-next-line
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
