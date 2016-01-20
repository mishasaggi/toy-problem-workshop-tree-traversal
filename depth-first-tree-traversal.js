var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.recursiveDepthFirst = function(callback){
  //your codes
};

treeMethods.iterativeDepthFirst = function(callback){
  //your code
};

//your helper methods
