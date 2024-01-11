## Twenty48

A clone of the popular game [2048](https://play2048.co/), built to be played by AI agents. This project is my exploration into traditional artificial intelligence techniques, and an excercise in applying design patterns. You can check out the source on [Github](https://github.com/KyleJMcMaster/twenty48) or install from [PyPi](https://pypi.org/project/twenty48/) and play around with it yourself.

<br>

#### Contents

- [Background](#background)
- [Evaluating AI Agents](#evaluating-ai-agents)
- [Building Twenty48](#building-twenty48)
- [References](#References)

### Background

2048 [[1](#1)] is a game created in 2014 by [Gabriele Cirulli](https://github.com/gabrielecirulli/2048) that exploded in popularity quickly after its release. 

<center><figure>
    <img src="/images/projects/Twenty48.png" alt="Screen shot of 2048" class="center" width="200">
    <figcaption>Screenshot of 2048</figcaption>
</figure></center>

At the start of each game, two tiles are placed randomly on the board. On each turn, the player chooses one direction to shift all the tiles toward. If two tiles with the same value are swiped onto each other, they sum together and become one tile. After each turn, a new tile is placed on the board. This new tile has a 90% chance to be a value of 2 and a 10% chance to be a 4. As the name suggests, the goal of this game is to combine tiles together until the player has created the 2048 tile.

<br>

2048 has certain properties which make it a wonderful tool to compare different artificial intelligence techniques. When a player is selecting their next move, they must only consider the current state of the board. It does not matter how they reached this state, only that they are now in it. This 'memorylessness' allows us to analyze how the board currently is and ignore everything in the past. This reduces the amount of computation our AI agents will have to do, and makes it potentially feasible to try things like predetermining which move should be made in a given state. Another nice property is that after each turn, there is a random 'response' in the form of the newly placed tile. This is what makes developing AI agents interesting. If there was no randomness, the game would be deterministic and it would be possible to come up with a series of perfect moves that would always lead to a win. Lastly, the game waits until the player selects a move, regardless of how long it takes. Since each turn is discrete, there is no requirement to select a move in real time.

<br>

These properties fit the criteria for a mathematical structure known as a [Markov Decision Process](https://en.wikipedia.org/wiki/Markov_decision_process) (MDP). MDPs have been researched since the 1950s [[2](#2)], and therefore have an extensive set of solution techniques. To make use of these techniques, we must first formally model our 2048 game as an MDP. To do so, we must determine four things [[3](#3)]:

- A set of actions, **A**
- A set of states, **S**
- A description of each action's effect in each state, **T**  
- A real valued reward function, **R(s,a)**

Determining our action space is very straightforward. On each turn, the player can either move up, down, left, or right. 

<center>
<math>
  <mrow>
    <mi>A</mi>
    <mo>=</mo>
    <mo form="prefix" stretchy="false">{</mo>
    <mtext>up</mtext>
    <mo separator="true">,</mo>
    <mtext>down</mtext>
    <mo separator="true">,</mo>
    <mtext>left</mtext>
    <mo separator="true">,</mo>
    <mtext>right</mtext>
    <mo form="postfix" stretchy="false">}</mo>
  </mrow>
</math>
</center>

<br>

Writing out our state space is slightly more challenging. For each of the 16 squares on the board, we either have no tile, or a tile with a value ranging from 
2<sup>1</sup> to the maximum possible tile value 2<sup>17</sup>. Further, some combinations of tiles are impossible. For example, there can only be one 2<sup>17</sup> tile. Luckily for us, we do not need to list all the states. Instead, we can come up with a set of criteria for what constitues a valid state, a procedure for transitioning from a general valid state to the next, and a way to determine the rewards after performing that transition. To simplify, our validity criteria will also include unreachable states. This will not affect our ability to come up with optimal solutions for the MDP.

<center>
<math>
  <mrow>
    <mo form="prefix" stretchy="false">(</mo>
    <mi>∀</mi>
    <mtext>tile</mtext>
    <mo>∈</mo>
    <mtext>board</mtext>
    <mi>|</mi>
    <mtext>tile.value</mtext>
    <mo>=</mo>
    <mn>0</mn>
    <mo>∨</mo>
    <mo form="prefix" stretchy="false">(</mo>
    <msub>
      <mi>log</mi>
      <mn>2</mn>
    </msub>
    <mo>⁡</mo>
    <mo form="prefix" stretchy="false">(</mo>
    <mtext>tile.value</mtext>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>∈</mo>
    <mi>𝕫</mi>
    <mo>∧</mo>
    <mtext>tile.value</mtext>
    <mo>≤</mo>
    <msup>
      <mn>2</mn>
      <mn>17</mn>
    </msup>
    <mo form="postfix" stretchy="false">)</mo>
    <mo form="postfix" stretchy="false">)</mo>
  </mrow>
</math>
</center>

<br>

What makes it challenging: Huge state space, low probability of any one move happening, easy for randomness to get decent scores, random starting state, no immediate rewards,

<br>

### Evaluating AI Agents

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  

<br>

### Building Twenty48

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  

<br>

### References

- <a name="1"></a>https://github.com/gabrielecirulli/2048
- <a name="2"></a>https://apps.dtic.mil/sti/tr/pdf/AD0606367.pdf
- <a name="3"></a>https://www.cs.rice.edu/~vardi/dag01/givan1.pdf