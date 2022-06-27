// import React, { useState, useEffect, Fragment } from "react";
// import firebase from "../../firebase/firebase";
// import { v4 as uuidv4 } from "uuid";

// function GetFirebase() {
//     const [schools, setSchools] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [title, setTitle] = useState("");
//     const [desc, setDesc] = useState("");

//     const ref = firebase.firestore().collection("schools");

//     //ONE TIME GET FUNCTION
//     function getSchools2() {
//         setLoading(true);
//         ref.get().then((item) => {
//         const items = item.docs.map((doc) => doc.data());
//         setSchools(items);
//         setLoading(false);
//         });
//     }
//     useEffect(() => {
//         getSchools2();
//         // eslint-disable-next-line
//     }, []);

//     // ADD FUNCTION
//     function addSchool(newSchool) {
//         ref
//         //.doc() use if for some reason you want that firestore generates the id
//         .doc(newSchool.id)
//       .set(newSchool)
//       .then(() => {
//         setSchools((prev) => [newSchool, ...prev]);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }