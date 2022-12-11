// import { useReducer, useState } from "react";
// import "./App.css";
// import Box from "./components/Box";
// import styled from "styled-components";

// const base = {
//   count: 0,
//   students: [],
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "add-students":
//       return {
//         count: state.count + 1,
//         students: [
//           ...state.students,
//           {
//             id: Date.now(),
//             name: action.payroad,
//             isHere: false,
//           },
//         ],
//       };
//     case "remove-students":
//       return {
//         count: state.count - 1,
//         students: state.students.filter(
//           (student) => student.id !== action.payroad
//         ),
//       };
//     case "mark-students":
//       return {
//         ...state,
//         students: state.students.map((student) =>
//           student.id === action.payroad.id
//             ? { ...student, isHere: !student.isHere }
//             : student
//         ),
//       };
//     default:
//       return state;
//   }
// };

// const StBox = styled.div`
//   width: 200px;
//   height: 200px;
//   background-color: green;
// `;

// function App() {
//   const [name, setName] = useState("");
//   const [studentInfo, dispatch] = useReducer(reducer, base);
//   return (
//     <div>
//       <StBox>dd</StBox>
//       <h1>출석부</h1>
//       <div>총 학생 수 : {studentInfo.count}</div>
//       <div>
//         <input
//           value={name}
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//           type="text"
//         />
//         <button
//           onClick={() => {
//             dispatch({ type: "add-students", payroad: name });
//           }}
//         >
//           추가
//         </button>
//       </div>
//       {studentInfo.students.map((student) => {
//         return (
//           <Box
//             dispatch={dispatch}
//             name={student.name}
//             key={student.id}
//             id={student.id}
//             isHere={student.isHere}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default App;
