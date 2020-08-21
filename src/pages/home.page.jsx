import React from "react";
import withAuth from "../hoc/withAuth";
import { withRouter } from 'react-router-dom'

function HomePage(props) {
  console.log("home props --- ", props);
  return (
    <div>
      <h1>This Is The Home Page</h1>
    </div>
  );
}

export default withAuth(withRouter(HomePage));
// export default withRouter(HomePage);
