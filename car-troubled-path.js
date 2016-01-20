function carTroubledPaths(matrix){
  //your code
}

//your helper functions

//given helper functions
function makeRoad(n) {
  var road = []
  for (var i = 0; i < n; i++) {
    road.push([])
    for (var j = 0; j < n; j++) {
      road[i].push(false)
    }
  }
  road.toggle = function(i, j) {
    this[i][j] = !this[i][j]
  }
  road.hasBeenVisited = function(i, j) {
    return !!this[i][j]
  }
  return road;
}


/*
test case:
     [[0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0], 
      [1, 1, 0, 0, 0, 0, 0, 0], 
      [0, 1, 0, 1, 0, 0, 0, 0], 
      [0, 0, 1, 1, 0, 0, 0, 0], 
      [0, 0, 0, 0, 1, 0, 1, 0], 
      [0, 0, 0, 0, 0, 0, 1, 0], 
      [0, 1, 1, 0, 0, 0, 1, 0]]
returns true      
*/