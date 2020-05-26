import * as React from "react";
import { Link } from "react-router-dom";
import "../../styles/agentInfo/ProfileInfo.css";

const ProfileInfo: React.FC = () => {
  return (
    <section className="profile_info">
      <h3>Professional Information </h3>
      <p>Agent name : Remax Legacy Group</p>
      <p>Agent address : 7267 Cottage Hill Rd Mobile, AL 3669 </p>
      <p>Cell phone : (251) 273-5145</p>
      <p>
        Websites : <Link to="www.testing.com">Website</Link> <Link to="www.facebook.com">Facebook</Link>{" "}
        <Link to="www.twitter.com">Twitter</Link>{" "}
      </p>
      <p>Member since : 08/18/2009</p>
      <p>Real Estate Licenses : 000090510 - 1 (AL)</p>
    </section>
  );
};

export default ProfileInfo;
