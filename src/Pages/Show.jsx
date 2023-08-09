import React, { useState, useEffect } from "react";
import { getDocs, query, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Show = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataSnapshot = await getDocs(query(collection(db, "RawFood")));
        const fetchedData = dataSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const currentDate = new Date();

        const validData = fetchedData.filter((item) => {
          const expiryDate = new Date(item.Expiry);
          if (expiryDate > currentDate) {
            return true;
          } else {
            // Delete the data from Firebase and return false to filter out
            const docRef = doc(db, "RawFood", item.id);
            deleteDoc(docRef)
              .catch((error) => {
                console.error("Error deleting document:", error);
              });
            return false;
          }
        });

        setData(validData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const containerStyle = {
    textAlign: "center",
    padding: "20px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    border: "1px solid #ccc",
    marginTop: "20px",
  };

  const thStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    backgroundColor: "#f5f5f5",
  };

  const tdStyle = {
    border: "1px solid #ccc",
    padding: "10px",
  };

  const evenRowStyle = {
    backgroundColor: "#f0f0f0",
  };

  return (
    <div style={containerStyle}>
      <h1>Available Food</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Serving</th>
            <th style={thStyle}>Expiry(YYYY-MM-DD)</th>
            <th style={thStyle}>Contact Number</th>
            <th style={thStyle}>Request</th>
            {/* Add more table headers if needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} style={index % 2 === 0 ? evenRowStyle : {}}>
              <td style={tdStyle}>{item.Name}</td>
              <td style={tdStyle}>{item.Serving}</td>
              <td style={tdStyle}>{item.Expiry}</td>
              <td style={tdStyle}>{item.Phone}</td>
              <td style={thStyle} >
                <button>Request</button>
              </td>
              {/* Add more table cells if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Show;