import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";

export default class Movie extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		poster: PropTypes.string.isRequired
	};

	render() {
		return (
			<div>
				<MoviePoster poster={this.props.poster} />
				<h1>{this.props.title}</h1>
			</div>
		);
	}
}

class MoviePoster extends Component {
	render() {
		return <img alt="Movie Poster" src={this.props.poster} width="220px" height="315px" />;
	}
}
