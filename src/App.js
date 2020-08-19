import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

export default class App extends Component {
	state = {
		movies: [
			{
				title: "극한직업",
				poster: "https://upload.wikimedia.org/wikipedia/ko/c/cf/%EA%B7%B9%ED%95%9C%EC%A7%81%EC%97%85_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
			},
			{
				title: "라라랜드",
				poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/1/12/La_la_land.jpg/220px-La_la_land.jpg"
			},
			{
				title: "신세계",
				poster: "https://upload.wikimedia.org/wikipedia/ko/6/6b/%EC%98%81%ED%99%94_%EC%8B%A0%EC%84%B8%EA%B3%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
			},
			{
				title: "매드맥스",
				poster:
					"https://upload.wikimedia.org/wikipedia/ko/thumb/1/13/%EB%A7%A4%EB%93%9C%EB%A7%A5%EC%8A%A4_%EB%B6%84%EB%85%B8%EC%9D%98_%EB%8F%84%EB%A1%9C.jpg/220px-%EB%A7%A4%EB%93%9C%EB%A7%A5%EC%8A%A4_%EB%B6%84%EB%85%B8%EC%9D%98_%EB%8F%84%EB%A1%9C.jpg"
			}
		]
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				movies: [
					...this.state.movies,
					{
						title: "올드보이",
						poster: "https://upload.wikimedia.org/wikipedia/ko/4/48/Old_Boy.jpg"
					}
				]
			});
		}, 2000);
	}

	render() {
		return (
			<div className="App">
				{this.state.greeting}
				{this.state.movies.map((movie, index) => {
					return <Movie key={index} title={movie.title} poster={movie.poster} />;
				})}
			</div>
		);
	}
}
