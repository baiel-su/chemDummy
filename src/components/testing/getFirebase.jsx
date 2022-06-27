import React, { useState, useEffect, Fragment } from "react";
import firebase from "../../firebase/firebase";
import { v4 as uuidv4 } from "uuid";

function GetFirebase() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [text, setText] = useState("");

  const ref = firebase.firestore().collection("testing");

  //ONE TIME GET FUNCTION
  //   function getSchools2() {
  //     setLoading(true);
  //     ref.get().then((item) => {
  //       const items = item.docs.map((doc) => doc.data());
  //       setSchools(items);
  //       setLoading(false);
  //     });
  //   }
  //   useEffect(() => {
  //     getSchools2();
  //     // eslint-disable-next-line
  //   }, []);

  // ADD FUNCTION
  function addNews(newNews) {
    ref
      //.doc() use if for some reason you want that firestore generates the id
      .doc(newNews.id)
      .set(newNews)
      .then(() => {
        setSchools((prev) => [newNews, ...prev]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  //DELETE FUNCTION
  //   function deleteSchool(school) {
  //     ref
  //       .doc(school.id)
  //       .delete()
  //       .then(() => {
  //         setSchools((prev) =>
  //           prev.filter((element) => element.id !== school.id)
  //         );
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }

  // EDIT FUNCTION
  //   function editSchool(updatedSchool) {
  //     setLoading();
  //     ref
  //       .doc(updatedSchool.id)
  //       .update(updatedSchool)
  //       .then(() => {
  //         setSchools((prev) =>
  //           prev.map((element) => {
  //             if (element.id !== updatedSchool.id) {
  //               return element;
  //             }
  //             return updatedSchool;
  //           })
  //         );
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }

  //   return (
      <Fragment>
        <h1>Schools (GET)</h1>
        <div className="inputBox">
          <h3>Add New</h3>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={() => addNews({ title, date, image, text, id: uuidv4() })}>
            Submit
          </button>
        </div>
  //       {/* <hr />
  //       {loading ? <h1>Loading...</h1> : null}
  //       {schools.map((school) => (
  //         <div className="school" key={school.id}>
  //           <h2>{school.title}</h2>
  //           <p>{school.desc}</p>
  //           <div>
  //             <button onClick={() => deleteSchool(school)}>X</button>
  //             <button
  //               onClick={() =>
  //                 editSchool({ title: school.title, desc, id: school.id })
  //               }
  //             >
  //               Edit
  //             </button>
  //           </div>
  //         </div> */}
  //       {/* ))} */}
      </Fragment>
  //   );
}

export default GetFirebase;

//DOCS: https://firebase.google.com/docs/firestore/
