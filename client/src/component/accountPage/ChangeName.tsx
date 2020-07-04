import React, { ChangeEvent, FormEvent } from "react";

type HandleChange = ChangeEvent<HTMLInputElement>;
type SubmitForm = FormEvent<HTMLFormElement>;

const ChangeName: React.FC = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Full name</label>
        <input type="text" id="name" name="name" value="name" required />
      </div>
      <button type="submit">Change</button>
    </form>
  );
};

export default ChangeName;
