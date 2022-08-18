import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { async } from "@firebase/util";

function SecretPage() {
  const { id } = useParams();
  console.log(id);
  const db = getFirestore();
  const docRef = doc(db, "messages", id);
  const [dispText, setDispText] = useState("");

  useEffect(() => {
    const callData = async () => {
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDispText(() => docSnap.data().msg);
        } else {
          setDispText(() => "Document does not exist");
        }
      } catch (error) {
        alert(error);
      }
    };

    callData();
  }, []);

  return (
    <div>
      <h1 className="title is-2">The Secret Message is...</h1>
      <h2 className="title is-3">{dispText}</h2>
    </div>
  );
}

export default SecretPage;
