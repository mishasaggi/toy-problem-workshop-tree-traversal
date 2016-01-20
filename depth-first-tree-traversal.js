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

treeMethods.recursiveBreadthFirst = function(callback){
  //your codes
};

treeMethods.iterativeBreadthFirst = function(callback){
  //your code
};

//your helper methods
