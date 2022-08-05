import React from "react";
import firebase, { auth, db } from "../../firebase/config";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { useHistory } from "react-router";
import logo from "../../asset/images/logo.png";

const provider = new firebase.auth.GoogleAuthProvider();

const Login = () => {
   const handleLoginGoogle = async () => {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
      const currentUser = auth.additionalUserInfo;
      if (additionalUserInfo?.isNewUser) {
         db.collection('users').add({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            uid: user.uid,
            providerId: additionalUserInfo.providerId,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
         });
      }
      console.log({ user }, additionalUserInfo?.isNewUser);
   };

   const history = useHistory();

   auth.onAuthStateChanged((user) => {
      if (user) {
         history.push("/");
      }
   });

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
         <div className="flex space-y-4 items-center flex-col border border-0 border-yellow-600 py-8 px-20 rounded-lg">
            <img className="w-2/3" src={logo} alt="logo" />
            <p className="text-yellow-500">
               This is not Porn Hub 
            </p>
            <button
            onClick={handleLoginGoogle}
            className="flex items-center transition duration-500 ease-in-out bg-yellow-600 px-10 py-3 rounded-lg transform  hover:scale-110"
         >
            <FcGoogle size={25} />
            <span className="pl-2">Login with Google</span>
         </button>
         </div>
         
      </div>
   );
};

export default Login;
