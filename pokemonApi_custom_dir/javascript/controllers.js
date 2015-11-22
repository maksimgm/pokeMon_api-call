app.controller("PokemonController", ["$scope", "pokeService", function($scope, pokeService){
// Create an app that uses the pokemon api. 
// The app should first make a request to the pokedex to get all possible pokemon. 
// Then randomly select 5 pokemon to display.
 // The app should display the pokemon's name, types, name of moves (limit it to 6), and a sprite for the pokemon.
  // Use a custom directive to display the pokemon.

The app should use a custom directive for each pokemon (eg pokemon-item).


  $scope.allPokemon = [];
  for(var i=0; i<5;i++){
  //   // allPokemon.push(
    pokeService.fuckThisAssignment(pokeService.rando()).then(function(res){
      $scope.allPokemon.push(res);
    });
    // debugger;
    // pokeService.randomNum();
  }
}]);