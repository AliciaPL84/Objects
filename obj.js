const bandInfo = {
  name: 'Bruce Springsteen and the E Street Band',
  nationality: 'USA',
  genre: 'rock',
  members: 10,
  formed: 1972,
  split: false,
  albums: [
    {
    name: 'Greetings from Asbury Park',
    year: 1973
    },
    {
    name: 'Tunnel of love',
    year: 1987
    },
  ],
  bandBio: function(){
    return 'The band ' + this.name + ' from ' + this.nationality + ', was formed in ' + this.formed + '. Two of the best albums are: ' + this.albums[0].name + ' released in ' + this.albums[0].year + ' and ' + this.albums[1].name + ' released in ' + this.albums[1].year +'.';
  },
};
console.log(bandInfo.bandBio());
