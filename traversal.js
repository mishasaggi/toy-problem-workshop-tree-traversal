// Tree Traversal Algorithms: sequential computation (such as in JS)

  /*
    The nature of the Tree data structure is non linear, so some nodes have to be 
    stored away for processing later.

    Storage datastructures: Stacks and Queues
    Note: When using recursion, a call stack is used as storage
  */

  // Depth First Algorithms and Implementations
    // Go as deep as possible before going across a layer 
    // i.e. first child -> grandchild befre second child ...
    // clockwise or anti clockwise is arbitrary.


      /* 
        Inorder Algorithm
      
        Until all nodes are traversed −
        1 − Recursively traverse left subtree.
        2 − Visit root node.
        3 − Recursively traverse right subtree.

        Example tree: D → B → E → A → F → C → G
        */

      /* 
        Pre-Order Algorithm
        
        Until all nodes are traversed −
        1 − Visit root node.
        2 - Recursively traverse left subtree.
        3 − Recursively traverse right subtree.

        Example Tree: A → B → D → E → C → F → G
      */


      /* 
        Post-Order Algorithm

        1 - Recursively traverse left subtree.
        2 - Recursively traverse right subtree.
        3 - Visit root node.

        Example Tree: D → E → B → F → G → C → A
      */


  // Breadth First
    /* 
        Go across a level before going to the next level
        i.e. first child -> second child before first's grandchildren ...
        left to right or right to left

        Selecting a data structure for implementation
        Q:To explore the tree breadth-first, do we want the children to be removed from 
          the data structure first or the parent to be removed first?

        Algorithm
        Put root node in the queue
        While queue is not empty
          dequeue the next node
          visit the node
          enqueue all children nodes
        
        
        Example Tree: A → B → C → D → E → F → G

    */


  /*
    The trace of a traversal is called a sequentialisation of the tree. 
    The traversal trace is a list of each visited root node.
  */


