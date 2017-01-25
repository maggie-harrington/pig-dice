# Pig Dice

#### _A 2-player dice game, 1/25/2017_

#### By Maggie Harrington

## Description

_A simple 2 player dice game built using HTML, CSS, Bootstrap and jQuery. Each turn, a player repeatedly rolls one six-sided die until they either roll a 1 or decide to hold. If a 1 is rolled, the player receives 0 points for the turn and play switches to the other player. If another number is rolled, that amount is added to their point total for the turn. The player can then decide to either 1) continue rolling, risking the amount previously rolled on that turn, or 2) hold, which banks the amount rolled on their current turn into their game score and ends their turn. The first player to score at least 100 points wins the game._

## Specifications

| Behavior | Input Example | Output Example |
|----------|---------------|----------------|
| Player clicks "roll" | roll | Random number between 1 and 6 is generated |
| Player rolls a 1 | 1 | Player's turn ends without scoring |
| Player rolls another number besides 1 | 4 | 4 is added to that player's turn total and turn continues |
| Player clicks "hold" | hold | Player's turn total is added to their score and turn ends |
| Player's score is >= 100 | score = 101 | Player wins game |

## Setup/Installation Requirements

* _Visit this page at GitHub pages: http://maggie-harrington.github.io/pig-dice ._
* _Or download at my GitHub repository: https://github.com/maggie-harrington/pig-dice ._
* _If you choose to clone through GitHub, first open Git Bash, type "cd Desktop" and hit enter. Copy the link above, then type "git clone " and paste the link and hit enter. You will now have a copy of this project on your desktop._

## Known Bugs

_No known bugs at this time._

## Support and contact details

_If you run into any issues or have questions, ideas or concerns, please feel free to contact me at maggie.harrington@gmail.com_

## Technologies Used

_Written using Git Bash, Atom, Bootstrap and jQuery._

### MIT License

_Copyright (c) 2017 Maggie Harrington

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE._
