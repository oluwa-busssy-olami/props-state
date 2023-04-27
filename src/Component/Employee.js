import React from "react";

// const Employee = (props) => {
//   return (
//     <div>
//       <h1> Employee Details </h1>; <h2> First Name: {props.firstName} </h2>{" "}
//       <h2> Last Name: {props.lastName} </h2>{" "}
//       <h2> Email id: {props.emailId} </h2>{" "}
//     </div>
//   );
// };
// const Employee = ({ firstName, lastName, emailID }) => {
//   return (
//     <>
//       <h1> Employee Details </h1> <h2> FirstName: {firstName} </h2>{" "}
//       <h2> LasttName: {lastName} </h2> <h2> Email ID: {emailID} </h2>{" "}
//     </>
//   );
// };

const Employee = (props) => {
  const { firstName, lastName, emailID } = props;
  return (
    <>
      <h1> Employee Details </h1> <h2> FirstName: {firstName} </h2>{" "}
      <h2> LasttName: {lastName} </h2> <h2> Email ID: {emailID} </h2>{" "}
    </>
  );
};
export default Employee;
