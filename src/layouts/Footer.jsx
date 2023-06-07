import { Link } from "react-router-dom";
import config from "../config";
export default function Footer() {
  return (
    <div className="main-footer">
      <span>&copy; 2023. Da Nang. All Rights Reserved.</span>
      <span>
        Created by:{" "}
        <Link to={config.FACEBOOK_URL} target="_blank">
          lam.nguyen247
        </Link>
      </span>
    </div>
  );
}
