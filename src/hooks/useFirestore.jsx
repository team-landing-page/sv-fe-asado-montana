import { useContext } from "react";
import FirestoreContext from "../context/firestoreContext";

export const useFirestore = () => {
    return useContext(FirestoreContext);
}

export default useFirestore;