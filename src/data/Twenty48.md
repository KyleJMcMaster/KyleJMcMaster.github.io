## Twenty48

A clone of the popular game [2048](https://play2048.co/), built to be played by AI agents. This project is my exploration into traditional artificial intelligence techniques, and an excercise in applying design patterns. You can check out the source on [Github](https://github.com/KyleJMcMaster/twenty48) or install from [PyPi](https://pypi.org/project/twenty48/) and play around with it yourself.

<br>

#### Contents

- [Background](#background)
- [Evaluating AI Agents](#evaluating-ai-agents)
- [Building Twenty48](#building-twenty48)
- [References](#References)

### Background

2048 is a game created in 2014 by [Gabriele Cirulli](https://github.com/gabrielecirulli/2048) that exploded in popularity quickly after its release. 

<center><figure>
    <img src="/images/projects/Twenty48.png" alt="Screen shot of 2048" class="center" width="200">
    <figcaption>Screenshot of 2048</figcaption>
</figure></center>

At the start of each game, two tiles are placed randomly on the board. On each turn, the player chooses one direction to shift all the tiles toward. If two tiles with the same value are swiped onto each other, they sum together and become one tile. After each turn, a new tile is placed on the board. This new tile has a 90% chance to be a value of 2 and a 10% chance to be a 4. As the name suggests, the goal of this game is to combine tiles together until the player has created the 2048 tile.

<br>

2048 has certain properties which make it a wonderful tool to compare different artificial intelligence techniques. When a player is selecting their next move, they must only consider the current state of the board. It does not matter how they reached this state, only that they are now in it. This 'memorylessness' allows us to analyze how the board currently is and ignore everything in the past. This reduces the amount of computation our AI agents will have to do, and makes it potentially feasible to try things like predetermining which move should be made in a given state. Another nice property is that after each turn, there is a random 'response' in the form of the newly placed tile. This is what makes developing AI agents interesting. If there was no randomness, the game would be deterministic and it would be possible to come up with a series of perfect moves that would always lead to a win. 

<br>

Markov Decision Process

<br>

What makes it challenging: Huge state space, low probability of any one move happening, easy for randomness to get decent scores, random starting state.

<br>

### Evaluating AI Agents

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  

<br>

### Building Twenty48

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  

<br>

### References

- https://github.com/gabrielecirulli/2048