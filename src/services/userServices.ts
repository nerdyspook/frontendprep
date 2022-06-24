import { db } from "../firebase";
import { doc, updateDoc, collection, getDocs } from "firebase/firestore";

const addScoreToUser = async (uid: string | undefined, score: number) => {
  const dbUser = collection(db, "users");
  const data = await getDocs(dbUser);
  let userDocId = "";

  data.docs.forEach((doc) => {
    if (doc.data().uid.toString() === uid) {
      userDocId = doc.id;
    }
  });

  const currentUserRef = doc(db, "users", userDocId);
  await updateDoc(currentUserRef, { totalScore: score });
};
