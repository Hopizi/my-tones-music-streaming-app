import React, {useState, useEffect, useContext} from 'react'
import "./styles/HomePage.css"
import { Sidebar, Navbar, Top100Weekly, NowPlaying,} from '../components' 
import { Discover, Explore, MyMusic, Albums, Artists, Favourites, Shared, Download, Settings } from '../pages'
import { AuthContext } from '../context/AuthenticationContext'
import { db } from '../config/firebase'
import { doc, getDoc } from 'firebase/firestore';
import { Router ,Route, Routes } from 'react-router-dom'

function HomePage() {

    const [selectedLink, setSelectedLink] = useState("Discover")

    const {currentUser} = useContext(AuthContext)
    const [userNavData ,setUserNavData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const userId = currentUser.uid;

            let userData = []
            
            const docRef = doc(db, "users", userId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                userData = docSnap.data()
                setUserNavData(userData)
            } else {
            console.log("No such document!");
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        console.log(userNavData);
    }, [userNavData]);



  return (
        <div className='home-page-main-container'>
            <div className="sidebar-container">
                <Sidebar setSelectedLink={setSelectedLink}/>
            </div>
            <div className='col-2-main'>
                <div className="user-navbar">
                    <Navbar navUserData={userNavData}/>
                </div>
                <div className="music-space-main">
                    <div className='main-page-display'>
                        <Routes>
                            <Route path="/explore" element={<Explore />} />
                        </Routes>
                    </div>
                    <div className='main-page-col-2'>
                        <div className="top-100-main">
                            <Top100Weekly />
                        </div>
                        <div className="now-playing-main-container">
                            <NowPlaying />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HomePage