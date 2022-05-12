import React, { Fragment } from "react";
import Balance from "./Balance/Balance";
import History from "./History/History";
import NewTransaction from "./NewTransaction/NewTransaction";

function Layout() {
  return (
    <Fragment>
      <Balance />
      <History />
      <NewTransaction />
    </Fragment>
  );
}

export default Layout;
