const getUsers = require('../models/membersData');
const getShows = require('../models/moviesData');

const Member = require('../models/schemas/memberModel');
const Movie = require('../models/schemas/movieModel');

const addMembers = async () => {
	let members = await getUsers();
	members = members.data;

	members.map(({ name, email, address }) => {
		const member = new Member({ name, email, city: address.city });

		member.save(err => {
			if (err) res.send(err);
		});
	});
};

const addMovies = async () => {
	let movies = await getShows();
	movies = movies.data;

	movies.map(({ name, genres, image, premiered }) => {
		const movie = new Movie({ name, genres, image: image.medium, premiered });

		movie.save(err => {
			if (err) res.send(err);
		});
	});
};

exports.add = async (req, res) => {
	await addMembers();
	await addMovies();
	res.send(`<h1>subscriptions db has been populated</h1>`)
};
