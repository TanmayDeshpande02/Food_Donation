import React, { useState, useEffect } from "react";
import { getDocs, query, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Donations = () => {
  const [data, setData] = useState([]);
  const donorPhoneNumber = localStorage.getItem("hasdonated"); // Retrieve the donor's phone number from local storage

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataSnapshot = await getDocs(query(collection(db, "RawFood")));
        const fetchedData = dataSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const currentDate = new Date();

        // Filter the fetched data to show only the items donated by the donor
        const donorData = fetchedData.filter((item) => item.Phone === donorPhoneNumber);

        // Further filter to only include items with expiry date greater than current date
        const validData = donorData.filter((item) => {
          const expiryDate = new Date(item.Expiry);
          return expiryDate > currentDate;
        });

        setData(validData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [donorPhoneNumber]);

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

  const handleDelete = async (id) => {
    const docRef = doc(db, "RawFood", id);

    try {
      await deleteDoc(docRef);
      // Remove the deleted item from the data state
      setData((prevData) => prevData.filter((item) => item.id !== id));
      console.log("Document successfully deleted!");
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Donations Made by You</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Serving</th>
            <th style={thStyle}>Expiry(YYYY-MM-DD)</th>
            <th style={thStyle}>Contact Number</th>
            <th style={thStyle}>Delete</th>
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
              <td style={thStyle}>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
              {/* Add more table cells if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Donations;
