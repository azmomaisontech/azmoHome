import * as React from "react";
import { Link } from "react-router-dom";
import "../../styles/agentInfo/ActiveListing.css";

const ActiveListing: React.FC = () => {
  return (
    <section className="active_listing">
      <h2 className="m-headings">Our Active Listing</h2>
      <table>
        <thead>
          <tr>
            <th>PROPERTY ADDRESS</th>
            <th>BED/BATH</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/">6850 Ching Lynch Rd Mobile, AL 36618 </Link>
            </td>
            <td>3/2</td>
            <td> $100,000</td>
          </tr>
          <tr>
            <td>
              <Link to="/">6850 Ching Lynch Rd Mobile, AL 36618 </Link>
            </td>
            <td>3/2</td>
            <td> $100,000</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ActiveListing;
