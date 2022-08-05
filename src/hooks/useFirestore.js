import React, { useState, useEffect } from "react";
import { db } from "../firebase/config";

const useFirestore = (collection, condition) => {
  const [document, setDocument] = useState([]);
  useEffect(() => {
    let collectionRef = db.collection(collection).orderBy("createdAt");
    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDocument(documents);
    });
    return unsubscribe;
  }, [collection, condition]);
  return document;
};

export default useFirestore;
