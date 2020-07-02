import React, { useState, useEffect, useContext, ChangeEvent, FormEvent } from "react";
import { AuthContext } from "../../context/auth/AuthState";
import { AlertContext } from "../../context/alert/AlertState";

type HandleChange = ChangeEvent<HTMLInputElement>;
type SubmitForm = FormEvent<HTMLFormElement>;

const ChangeName: React.FC = () => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { loading, error, success, updateUser } = authContext;
  const { alert, setAlert } = alertContext;
  const [name, setName] = useState("");

  const handleChangeName = (e: HandleChange) => {
    setName(e.target.value);
  };

  const submitName = (e: SubmitForm) => {
    e.preventDefault();
    console.log("testing1");
  };

  useEffect(() => {
    if (error) {
      setAlert && setAlert("Error, please try again", "danger");
    } else if (success) {
      setAlert && setAlert("Successfully changed your name", "success");
    }
  }, [setAlert, error, success]);

  return (
    <form onSubmit={submitName}>
      <p>{alert && alert.msg}</p>
      <div className="form-group">
        <label htmlFor="name">Full name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleChangeName} required />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Change"}
      </button>
    </form>
  );
};

export default ChangeName;
