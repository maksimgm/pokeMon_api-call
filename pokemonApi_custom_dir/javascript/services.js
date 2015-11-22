app.service("pokeService", ["$http", function($http){
    var onePokemon = {};
    // var randomInteger = randomNum();
    var uri;
    return {
      rando: function(){
        return Math.floor(Math.random() * (100 - 1) + 1);
      },
      fuckThisAssignment: function(num){
        return $http.get("http://pokeapi.co/api/v1/pokemon/"+num)
          .then(function callback(res){
          // allPokemon.push(res);
          // console.log(allPokemon);
          onePokemon = res.data;
          uri = onePokemon.abilities[0].resource_uri;
          console.log(uri);
          return $http.get("http://pokeapi.co"+uri);
      }).then(function(res){
        onePokemon.abilities = res.data.name;
        uri = onePokemon.types[0].resource_uri;
        // if(i >onePokemon.abilities.length){
          return $http.get("http://pokeapi.co"+uri);
        // }
      }).then(function(res){
        onePokemon.types = res.data.name;
        uri = onePokemon.sprites[0].resource_uri;
        // onePokemon.img = "http://pokeapi.co/media/img"+0+".png";
        // console.log(onePokemon);
          return $http.get("http://pokeapi.co"+uri);
      }).then(function(res){
        onePokemon.img = "http://pokeapi.co"+res.data.image;
        return onePokemon;
      });
    },
  };
    
}]);