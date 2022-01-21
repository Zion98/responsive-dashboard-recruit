import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import Modal from "./Modal";

const Table = ({ payload }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleModal1 = () => {
    setModal(false);
  };


  return (
    <TableWrapper>
      <div className="table-title ">
        <h2 className="main-title1">Applicants</h2>

        <button className="view-all">View All</button>
      </div>
      <div className="table-container">
        <table className="table-auto min-w-max w-full">
          <thead>
            <tr className="divide-y divide-light-blue-400 text-sm leading-normal border-b-2 border-transparent-200">
              <th className="text-left px-8 py-2 pt-4">
                <div className="flex items-center">
                  <div className="mr-2 pd-gray-box"></div>
                  <span>First Name</span>
                </div>
              </th>
              <th className="text-left px-8 py-2 pt-4">Last Name</th>
              <th className="text-left px-8 py-2 pt-4">Course of Study</th>
              <th className="text-left px-8 py-2 pt-4">Date of Birth</th>
              <th className="text-left px-8 py-2 pt-4">Email Address</th>
              {/* <th className="text-left px-8 py-2 pt-4">View More</th> */}
            </tr>
          </thead>

          <tbody>
            {payload &&
              payload.map((data, index) => {
                // console.log(new Date(...data.dateOfBirth).toString());
                return (
                  <tr
                    className="divide-y divide-light-blue-400 text-sm leading-normal border-b-2 border-transparent-200"
                    key={index}
                    onClick={handleModal}
                  >
                    <td className="px-8 py-4">
                      <div className="flex items-center">
                        <div className="mr-2 pd-gray-box"></div>
                        <span>{data.firstName}</span>
                      </div>
                    </td>
                    <td className="px-8 py-4">{data.lastName}</td>
                    <td className="px-8 py-4">{data.courseOfStudy}</td>
                    <td className="px-8 py-4">
                      {new Date(...data.dateOfBirth).toDateString()}
                    </td>
                    <td className="px-8 py-4">{data.email}</td>
                    <td className="px-8 py-4">
                      <span
                        className="cursor-pointer text-green-500 underline"
                        //   onClick={handleModal(data)}
                      >
                        View More
                      </span>
                    </td>
                    <td>
                      {/* {loadViewMoreModal ? (
                      <CreateModal
                        cancel={setLoadViewMoreModal}
                        data={loadViewMoreModal}
                      />
                    ) : null} */}
                    </td>
                    <CSSTransition
                      in={modal}
                      className="alert"
                      classNames="alert"
                      unmountOnExit
                      timeout={200}
                    >
                      <Modal handleModal={handleModal1} />
                    </CSSTransition>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  padding: 2rem;
  box-shadow: 0px 4px 24px rgba(85, 87, 107, 0.08);
  border: 0.5px solid #e5e5e5;
  border-radius: 4px;
  /* height: 100vh; */

  .table-title {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }
  .main-title1 {
    font-size: 1.6rem;
    font-weight: 700;
  }
  .view-all {
    display: block;
    border: none;
    background: transparent;
  }

  table {
    width: 100%;
    padding: 1rem !important;
    border-collapse: separate;
    border-spacing: 0 15px;

    /* margin: auto;
  overflow-x: auto;
  display: block;
  max-width: 100%; */
  }

  th {
    padding: 1rem !important;
  }

  tr {
    background: #f6f7f9;
    border: 1px solid rgba(33, 51, 79, 0.4);
    cursor: pointer;
  }

  td {
    padding: 1rem !important;
  }

  @media only screen and (max-width: 999px) {
    .table-container {
      width: 450px !important;
      overflow-x: scroll;
    }
    table {
      display: block;
      max-width: -moz-fit-content;
      max-width: fit-content;
      margin: 0 auto;
      overflow-x: auto;
     white-space: nowrap;
    }

  
  }
`;

export default Table;
