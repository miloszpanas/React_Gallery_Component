
var movies = [
  {   
      id: 1,
      title: 'Equilibrium',
      desc: 'An excellent movie about a world devoid of emotions',
      imgURL: 'https://ia.media-imdb.com/images/M/MV5BMTkzMzA1OTI3N15BMl5BanBnXkFtZTYwMzUyMDg5._V1_UX182_CR0,0,182,268_AL_.jpg'
  },
  {   
      id: 2,
      title: 'The Void',
      desc: 'A great horror movie with an awesome 80\' vibe to it',
      imgURL: 'http://www.asset1.net/tv/pictures/160/237/movie/the-void-2016/The-Void-KA-1.jpg'
  },
  {
      id: 3,
      title: 'Forrest Gump',
      desc: 'One of the best movies ever filmed',
      imgURL: 'https://images-na.ssl-images-amazon.com/images/I/61sDuFUszfL._SY445_.jpg'
  },
  {
      id: 4,
      title: 'Lord of the Rings',
      desc: 'Movie adaption of Tolkien\'s book series',
      imgURL: 'http://ecsmedia.pl/c/wladca-pierscieni-dwie-wieze-wydanie-dwuplytowe-w-iext39346721.jpg'
  }
];

var MovieTitle = React.createClass({
  propTypes: {
      movieName: React.PropTypes.string.isRequired
  },

  render: function() {
      return React.createElement('h2', {}, this.props.movieName);
  }
});

var MovieDescription = React.createClass({
  propTypes: {
      description: React.PropTypes.string.isRequired
  },

  render: function() {
      return React.createElement('p', {}, this.props.description);
  }
});

var MoviePoster = React.createClass({
  propTypes: {
      poster: React.PropTypes.string.isRequired
  },

  render: function() {
      return React.createElement('img', {src: this.props.poster, width:200})
  }
});

var Movie = React.createClass({
  propTypes: {
      movieData: React.PropTypes.object.isRequired,
  },

  render: function() {
      return React.createElement('li', {},
          React.createElement(MovieTitle, {movieName: this.props.movieData.title}),
          React.createElement(MovieDescription, {description: this.props.movieData.desc}),
          React.createElement(MoviePoster, {poster: this.props.movieData.imgURL})
      )
  },
});

var MovieList = React.createClass({
  propTypes: {
      moviesElements: React.PropTypes.array.isRequired,
  },

  render: function() {
      var mapMoviesElements = this.props.moviesElements.map(function(movie) {
      return React.createElement(Movie, {key: movie.id, movieData:movie});
      });
      return React.createElement('ul', {}, mapMoviesElements);
  }
});

var element = 
  React.createElement('div', {}, 
      React.createElement('h2', {}, 'Movies List'),
      React.createElement(MovieList, {moviesElements: movies},)
);
ReactDOM.render(element, document.getElementById('app'));
