import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {clearVideos} from "../store";
import {getHomePageMovies} from "../store/reducers/getHomePageMovies";

const Home = () => {
	const dispatch = useDispatch();
	const videos = useSelector((state) => state.youtubeApp.videos);

	useEffect(() => {
		return () => {
			dispatch(clearVideos());
		};
	}, []);
	useEffect(() => {
		dispatch(getHomePageMovies());
	}, []);

	return (
		<div className="max-h-screen overflow-hidden">
			<div style={{height: "5.5vh"}}>
				<Navbar />
			</div>
			<div className="flex" style={{height: "94.5vh"}}>
				<Sidebar />
			</div>
		</div>
	);
};

export default Home;
