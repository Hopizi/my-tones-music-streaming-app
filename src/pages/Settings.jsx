import React, { useContext, useEffect, useState } from "react";
import "./styles/Settings.css";
import { Button, ToastNotifications } from "../components";
import { ProfilePic, ProfilePicHolder } from "../assets/navbar-icons";
import { Camera } from "../assets/main-display-icons";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Sidebar, Navbar, Top100Weekly, NowPlaying } from "../components";
import { AuthContext } from "../context/AuthenticationContext";
import { ThemeContext } from "../context/DarkMode";
import { motion, AnimatePresence } from "framer-motion";

function Settings() {
  const { userData } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);

  const { theme } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeContext);

  const [image, setImage] = useState("");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    language: "",
    profile_pic: ""
  });
  const [percetage, setPercentage] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + image.name;

      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPercentage(progress);
          switch (snapshot.state) {
            case "paused":
              break;
            case "running":
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, profile_pic: downloadURL }));
          });
        }
      );
    };

    image && uploadFile();
  }, [image]);

  useEffect(() => {
    setData({
      firstName: userData && userData.firstName ? userData.firstName : "",
      lastName: userData && userData.lastName ? userData.lastName : "",
      language: userData && userData.language ? userData.language : "",
      userName: userData && userData.userName ? userData.userName : "",
    });
  }, [userData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  async function updateUserDetails() {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userId = userData.uid;
    const userRef = doc(db, "users", userId);

    try {
      await updateDoc(userRef, data);
      showNotification();
    } catch (error) {
      console.log(error);
    }
  }

  function showNotification() {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  return (
    <div className="home-page-main-container" id={theme}>
      <div className="sidebar-container">
        <Sidebar currentLink="Settings" />
      </div>
      <div className="col-2-main">
        <div className="user-navbar">
          <Navbar />
        </div>
        <div className="music-space-main">
          <div className="main-page-display">
            <AnimatePresence>
              {showToast && (
                <ToastNotifications message="Details Updated Successfully" />
              )}
            </AnimatePresence>
            <div className="settings-main-container">
              <div className="settings-header-section">
                <h1>Settings</h1>
              </div>
              <div className="inner-settings">
                <div className="personal-settings" id={theme}>
                  <div className="user-profile-pic-settings">
                    <div className="user-profile-pic-settings-container">
                      <img
                        src={
                          image
                            ? URL.createObjectURL(image)
                            : userData?.profile_pic
                        }
                      />
                      <div className="camera-icon-container">
                        <label htmlFor="fileUpload" className="camera-icon">
                          <Camera />
                        </label>
                        <input
                          type="file"
                          id="fileUpload"
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                    <div className="user-profile-pic-info-settings">
                      <p>{userData?.userName}</p>
                      <p>MyTones Premium</p>
                    </div>
                  </div>
                  <div className="user-personal-info-settings">
                    <div>
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        value={data.firstName}
                      />
                    </div>
                    <div>
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        value={data.lastName}
                      />
                    </div>
                    <div>
                      <label>Username</label>
                      <input
                        type="text"
                        name="userName"
                        onChange={handleChange}
                        value={userData && userData.userName}
                      />
                    </div>
                    <div>
                      <label>Email Adresss</label>
                      <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={userData && userData.email}
                      />
                    </div>
                  </div>
                </div>
                <div className="utitlty-settings">
                  <div className="language-section">
                    <p>Language</p>
                    <div className="inner-language-section">
                      <p>Set Prefrreed Language</p>
                      <select
                        name="language"
                        onChange={handleChange}
                        value={data.language}
                      >
                        <option>English</option>
                        <option>French</option>
                        <option>Russian</option>
                        <option>German</option>
                        <option>Chinnese</option>
                        <option>Japanese</option>
                      </select>
                    </div>
                  </div>
                  <div className="drak-mode-settings">
                    <p>Light Mode</p>
                    <div class="check-box">
                      <input
                        type="checkbox"
                        className="toggle-switch"
                        onChange={toggleTheme}
                        checked={theme === "dark"}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="chnage-password-settings">
                  <p>Change Password</p>
                  <div className="change-password-input">
                    <div>
                      <label>Previous Password</label>
                      <input type="password" />
                    </div>
                    <div>
                      <label>New Password</label>
                      <input type="password" />
                    </div>
                    <div>
                      <label>Confirm New Password</label>
                      <input type="password" />
                    </div>
                  </div>
                  <div className="change-password-btn">
                    <Button text="Change Password" style="margin-left" />
                  </div>
                </div> */}
              </div>
              <div className="submit-setting-btn">
                <Button
                  disabled={percetage !== null && percetage < 100}
                  text="Save Changes"
                  onClick={updateUserDetails}
                />
              </div>
            </div>
          </div>
          <div className="main-page-col-2">
            <div className="top-100-main">
              <Top100Weekly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
