import React from "react";
import { createContext, useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthenticationContext";
import {
  doc,
  onSnapshot,
  arrayRemove,
  arrayUnion,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

export  const FavouriteSongsContext = createContext(null)

export const FavouriteSongsContextProvider = ({children}) => {

    const { currentUser } = useContext(AuthContext);

    const [favouritesSongs, setFavourtitesSongs] = useState([]);

    useEffect(() => {

      if (currentUser) {
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
      } else {
        console.log('Please Login')
      }
    }, []);

    async function addFavourite(songId) {
      const userId = currentUser.uid;
      if (userId) {
        try {
          const docRef = doc(db, "usersPreferences", userId);

          let docSnapShot = await getDoc(docRef);
          let inLikedata;

          if (docSnapShot.exists()) {
            const docData = docSnapShot.data();
            const likedSongs = docData.favoriteSongs;
            inLikedata = likedSongs;
          } else {
            await setDoc(docRef, {
              favoriteSongs: [songId],
              userId: userId,
            });
            docSnapShot = await getDoc(docRef);
            const docData = docSnapShot.data();
            const likedSongs = docData.favoriteSongs;
            inLikedata = likedSongs;
          }

          const favoriteRef = doc(db, "usersPreferences", userId);
          const isLiked = inLikedata.includes(songId);

          if (inLikedata) {
            if (isLiked) {
              await updateDoc(favoriteRef, {
                favoriteSongs: arrayRemove(songId),
              });
            } else {
              await updateDoc(favoriteRef, {
                favoriteSongs: arrayUnion(songId),
              });
            }
          } else {
            await setDoc(favoriteRef, {
              favoriteSongs: [songId],
              userId: userId,
            });
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("User Is Not Logged In");
      }
    }


    const favSongs = {
        favouritesSongs,
        addFavourite
    }

    return (
        <FavouriteSongsContext.Provider value={favSongs}>
            {children}
        </FavouriteSongsContext.Provider>
    )
}