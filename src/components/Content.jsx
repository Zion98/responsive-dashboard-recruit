import React from "react";
import Card from "./Card";
import { payload } from "./Payload";
import { DashboardWrapper } from "./styled";
import Table from "./table";

const Content = () => {
  return (
    <DashboardWrapper>
      <h2 className="overview-title"> Overview</h2>

      <div className="card-box">
        <Card
          title={"Total Applicants"}
          number={"1230"}
          bgColor={"#FFFFFF"}
          numberColor={"#2D2F48"}
          border={"0.5px solid #E5E5E5"}
        />

        <Card
          title={"Successful "}
          number={"390"}
          bgColor={"#F7FAEC"}
          numberColor={"#34A853"}
          border={"0.5px solid #34A853"}
        />

        <Card
          title={"Pending"}
          number={"1230"}
          bgColor={"#F2F2F2"}
          numberColor={"#2D2F48"}
          border={"0.5px solid #E5E5E5"}
        />

        <Card
          title={"Declined"}
          number={"30"}
          bgColor={"#FFF3F3"}
          numberColor={"#D34444"}
          border={"0.5px solid #D34444"}
        />
      </div>

      <Table payload={payload}/>
    </DashboardWrapper>
  );
};



export default Content;
