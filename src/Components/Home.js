import React, { Component } from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bulma/css/bulma.min.css";

export default function Home() {
  const [newMsg, setNewMsg] = useState("");
  let [dispID, setdispID] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "messages");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const createUser = async () => {
    const docRef = await addDoc(usersCollectionRef, {
      msg: newMsg,
      display: true,
    });
    setdispID(() => docRef.id);
  };

  const currentURL = window.location.href;

  return (
    <div>
      <div className="textbox--flex">
        <textarea
          className="textarea text--area"
          placeholder="Type your secret here..."
          onChange={(event) => {
            setNewMsg(event.target.value);
          }}
        ></textarea>
      </div>

      <button onClick={createUser} className="button is-link">
        Create Message
      </button>

      {dispID ? (
        <h3>
          The Link is:{" "}
          <a
            href={`${currentURL}id/${dispID}`}
          >{`${currentURL}id/${dispID}`}</a>
        </h3>
      ) : (
        ""
      )}
    </div>
  );
}
