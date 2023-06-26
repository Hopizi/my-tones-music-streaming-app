import React from "react";
import { createContext, useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthenticationContext";
import {doc, onSnapshot} from "firebase/firestore"
import { db } from "../config/firebase";

export  const FavouriteSongsContext = createContext(null)

export const FavouriteSongsContextProvider = ({children}) => {

    const { currentUser } = useContext(AuthContext);

    const [favouritesSongs, setFavourtitesSongs] = useState([]);

    useEffect(() => {
      const userId = currentUser.uid;

      const docRef = doc(db, "usersPreferences", userId);
      const unSubscribe = onSnapshot(docRef, (docSnapShot) => {
        if (docSnapShot.exists()) {
          const docData = docSnapShot.data();
          const favSongs = docData.favoriteSongs;
          setFavourtitesSongs(favSongs);
        } else {
          console.log("Not Found");
        }
      });

      return () => {
        unSubscribe();
      };
    }, []);

    const favSongs = {
        favouritesSongs
    }

    return (
        <FavouriteSongsContext.Provider value={favSongs}>
            {children}
        </FavouriteSongsContext.Provider>
    )
}