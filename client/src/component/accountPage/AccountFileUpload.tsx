import * as React from "react";
import "../../styles/account/AccountFileUpload.css";

const AccountFileUpload: React.FC = () => {
  return (
    <section className="file_upload">
      <h2>Edit Photo</h2>
      <p>Add an updated photo of yourself or company's logo to stand out.</p>
      <form>
        <input type="file" name="file" id="file" required />
        <button type="submit" disabled>
          Upload
        </button>
      </form>
      <p className="small-text">Photo should be at least 180px by 180px and jpg format.</p>
    </section>
  );
};

export default AccountFileUpload;
