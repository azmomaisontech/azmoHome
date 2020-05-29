import * as React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "../../styles/account/AccountProfile.css";

const AccountProfile: React.FC = () => {
  const { url } = useRouteMatch();
  return (
    <section className="account-profile">
      <div className="overview">
        <h2>Overview</h2>
        <div className="flex-container">
          <div className="profile-img">
            <div className="picture">
              <img
                src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
                alt="Profile"
              />
              <Link to={`${url}/file_upload`}>
                Edit photo <i className="fas fa-pen"></i>
              </Link>
            </div>
            <div className="line-divide"></div>
            <h3>Azmo Maison</h3>
          </div>
          <div className="personal-info">
            <div className="info">
              <p>
                <strong> Personal Information</strong>
              </p>
              <p>Name : Azmo Maison</p>
              <p>Member since : 05/11/2020</p>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-written">
        <h2>Reviews Written</h2>
        <table>
          <thead>
            <tr>
              <th>Agency</th>
              <th>Rating(5)</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/">
                  <strong> Azmo Maison</strong>
                </Link>
              </td>
              <td>3</td>
              <td>
                <Link to="/">
                  <i className="fas fa-pen"></i>
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/">
                  <strong> Azmo Maison</strong>
                </Link>
              </td>
              <td>3</td>
              <td>
                <Link to="/">
                  <i className="fas fa-pen"></i>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AccountProfile;
