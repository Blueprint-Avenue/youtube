import React, {useEffect} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {useDispatch, useSelector} from "react-redux";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Spinner from "../components/Spinner";
import {clearVideos} from "../store";
import {getHomePageMovies} from "../store/reducers/getHomePageMovies";

const Home = () => {
	const dispatch = useDispatch();
	const videos = useSelector((state) => state.youtubeApp.videos);

	useEffect(() => {
		return () => {
			dispatch(clearVideos());
		};
	}, [dispatch]);
	useEffect(() => {
		dispatch(getHomePageMovies());
	}, [dispatch]);

	return (
		<div className="max-h-screen overflow-hidden">
			<div style={{height: "5.5vh"}}>
				<Navbar />
			</div>
			<div className="flex" style={{height: "94.5vh"}}>
				<Sidebar />
				{videos.length ? (
					<InfiniteScroll
						dataLength={videos.length}
						next={() => dispatch(getHomePageMovies(true))}
						hasMore={videos.length < 500}
						loader={<Spinner />}
						height={650}
					>
						<div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
							{videos.map((item) => {
								return <Card data={item} key={item.videoId} />;
							})}
						</div>
					</InfiniteScroll>
				) : (
					<Spinner />
				)}
			</div>
		</div>
	);
};

export default Home;
