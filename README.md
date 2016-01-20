# How to use this repo
    Fork the repo 
    commit and push to your repo/branch

# Study resources
  traversal.js contains traversal algorithms.

  applications.js contains examples and applications of DF and BF algorithms

# Code Challenges
    Read the problem statements here and find a js script for the challenge
    The challenge script may include additional information and helper functions
    Testing (using JS, no testing suite required)
    Think about how you would test your code quickly and visually
    Try to automate your testing with multiple test cases

### problem 1.1: Implement recursive DFS (one or more types) for a given tree

### problem 1.2: Implement an iterative DFS (one or more types) for a given tree

### problem 2.1: Implement a recursive BFS for a given tree

### problem 2.2: Implement an iterative BFS for a given tree

### problem 3: Car Troubled Path

    You have the misfortune of being stuck in a runaway car on an obstacle course. All of the car's features are non-responsive, save for the steering system, which is damaged. It can drive straight, or it can turn right. Can the car be guided to safety?

    Mechanics
    Your car begins in the upper-left corner of an 8x8 map, and is trying to get to safety in the lower-right corner. The car has an orientation (initially to the right), measured in 90-degree increments. The car can perform one of two actions:

    Drive one square forward, or
    Turn 90 degrees clockwise, then drive one square forward
    Note that the car is unable to turn sharply enough to perform a 180-degree turn on a single square.

    Some of the squares are obstacles. If the car enters an obstacle square, it crashes. Everything outside the 8x8 course is assumed to be obstacles, so driving off the course is equivalent to crashing.

    The lower-right square is the safe square, which allows the car to escape the obstacle course. The starting square and safe square are assumed not to be obstacles.

    Task
    Input: An 8x8 array(matrix), representing the obstacle course. 
    Output: A Boolean. If it's possible for the car to make it to the safe square without crashing (i.e., if the map is solvable), the output is True, otherwise, it's False.

    Example
     [[0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0], 
      [1, 1, 0, 0, 0, 0, 0, 0], 
      [0, 1, 0, 1, 0, 0, 0, 0], 
      [0, 0, 1, 1, 0, 0, 0, 0], 
      [0, 0, 0, 0, 1, 0, 1, 0], 
      [0, 0, 0, 0, 0, 0, 1, 0], 
      [0, 1, 1, 0, 0, 0, 1, 0]]
     returns true 
     a possible solution is: SSSSRSRRRSRSSRRRSSRSSS

### problem 4: Four color theorem generator

    The four color theorem states that no more than four colors are required to color the regions of a map.

    Input: A list of state borders. Format the input structure per your code design.
    Task: Assign each state ID a color so that no two adjacent states have the same color. 
    Output: A CSS stylesheet assigning the color to the state's 2 letter ID code. 
    Resources:
    https://en.wikipedia.org/wiki/Four_color_theorem
    https://upload.wikimedia.org/wikipedia/commons/3/32/Blank_US_Map.svg

    Rules

    Shortest code wins
    any state border list can be used
    only 4 colors can be used.
    the state list can be hardcoded

    Tip: Use the CSS fill: property to change the color, For example #AL{fill:green}

    A list of state borders has been provided in the challenge script


##### References
      wikipedia.org
      geeksforgeeks.org
      cs.bu.edu
      codegolf.stackexchange.com
      interactivepython.org
      pearlmonks.com


<!-- Links -->
[four color theorem]: https://en.wikipedia.org/wiki/Four_color_theorem
[states map svg]: https://upload.wikimedia.org/wikipedia/commons/3/32/Blank_US_Map.svg
