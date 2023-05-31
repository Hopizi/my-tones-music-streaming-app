// import React, { Children } from 'react'
// import { createContext, useEffect, useState, useContext } from 'react'
// import { AuthContext } from '../context/AuthenticationContext'
// import { db } from '../config/firebase'
// import { doc, getDoc } from 'firebase/firestore';


// export const UserDetailsContext = createContext(null);

// export const UserDetailsContextProvider = ({children}) => {

//     const {currentUser} = useContext(AuthContext)
//     const [userNavData ,setUserNavData] = useState()

//     useEffect(() => {
//         const fetchData = async () => {
//             const userId = currentUser.uid;

//             let userData = []
            
//             const docRef = doc(db, "users", userId);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 userData = docSnap.data()
//                 setUserNavData(userData)
//             } else {
//             console.log("No such document!");
//             }
//         }
//         fetchData();
//     }, [])

//     useEffect(() => {
//         console.log(userNavData);
//     }, [userNavData]);

//     const userDetailsContextValue = {
//         userNavData
//     }

//     return (
//         <UserDetailsContext.Provider value={userDetailsContextValue}>
//             {Children}
//         </UserDetailsContext.Provider>
//     )

// }