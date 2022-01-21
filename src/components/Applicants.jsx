import React from "react";
import Table from "./table";
import { payload } from "./Payload";

import { DashboardWrapper } from "./styled";
const Applicants = () => {
  return (
    <DashboardWrapper>
      <Table payload={payload} />
    </DashboardWrapper>
  );
};

export default Applicants;
