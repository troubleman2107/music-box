import firebase, { db } from "./config";

export const addDocument = (collection, data) => {
  const query = db.collection(collection);

  query.add({
    ...data,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

export const updateDocument = (collection, id, data) => {
  const query = db.collection(collection);
  query.doc(id).update(data);
};

export const deleteDocument = (collection, id) => {
  const query = db.collection(collection);
  query.doc(id).delete();
};
