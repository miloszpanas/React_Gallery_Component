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

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired, // is required nie jest obowiązkowe
    },

    render: function() {
        return React.createElement('li', {}, 
            React.createElement(MovieTitle, {data: this.props.movie.title}),
            React.createElement(MovieDescription, {description: this.props.movie.desc, image: this.props.movie.imgURL}),
        );
    }
});


var MoviesList = React.createClass({
    propTypes: {
        moviesElements: React.PropTypes.array.isRequired,
    },

    render: function() {
        var moviesElements = this.props.moviesElements.map(function(movie) {
            return React.createElement(Movie, {key: movie.id, movie:movie});
        });
        return React.createElement('ul',{}, moviesElements);
    }
});


var MovieTitle = React.createClass({
    propTypes: {
        data: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
            React.createElement('h2', {}, this.props.data)
        )
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        description: React.PropTypes.string.isRequired,
        image: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement('div', {}, 
                React.createElement('p', {}, this.props.description),
                React.createElement('img', {src: this.props.image, width:200})
            )
        )
    }
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement(MoviesList, {moviesElements: movies},)
    );

ReactDOM.render(element, document.getElementById('app'));