import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Navbar from "./components/component/navbar"
import ProfileId from "./pages/profile/Profile";
import { useEffect } from "react";
function App() {
	const { authUser } = useAuthContext();


	// useEffect(()=>{
	// 	console.log()(process.env.REACT_APP_BASE_URL)
	// },[])
	return (
		<div className='h-screen flex flex-col items-center gap-10 bg-lightGray '>
			{authUser && <Navbar/>}
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
				<Route path='/profile/:userId' element={<ProfileId /> } />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
