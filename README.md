# betterdice
###### by Cooper Whitley

## Overview
Inspired by a tweet by game designer Josh Sawyer praising curved probability of dice rolls for traditional rpg based video games, this is a dice tool utilizing standard DnD dice sets to bring weighted probability to your actual tabletop setup.

#### Inspiration
<a href="https://twitter.com/jesawyer/status/1689703533787103236?s=20" target="_blank"><img src="./assets/pictures/jsawyermeme.jpeg" alt="Drake meme showing negative reaction to graph of equally distributed probabilities of the outcomes of a D20 die, positive reaction to a gaussian distribution of outcomes. Image links to original twitter post"></a>

#### Technologies Used
- HTML
- CSS
- JavaScript

## User Stories
#### Minimum Viable Product
As a user...
- I want to select from a standard set of DnD dice
    - D20
    - D12
    - 2D10
    - D8
    - D6
    - D4
- I want to be able to 'roll' the dice with the result being determined by a weighted statistical normal distribution (bell curve) of possible outcomes
- I want the result to be displayed graphically
#### Stretch Functionality
- I want the result to be shown and saved in a user viewable log that stores the 10 most recent rolls and can be cleared by the user
- I want the graphic to be represented by dice
- I want the die/dice to be animated
- I want to choose a color theme
- I want to be able to input stat bonuses to be applied to a given roll
- I want to have multiple profiles within the single page for each party member and the DM
- I want to be able to select how many of each die to roll with output showing 
- I want to be able to choose weighting distributions (normal, skewed, equal)
## Wireframes
#### Basic Layout

<img src="./assets/pictures/bd-home-mockup.jpg" alt="image showing initial screen mockup for app, displaying the name, betterdice, as well as pictographs for the six standard dice used for ttrpgs, a D4, a D6, a D8, a D10, a D12, and a D20. Below this is written 'cooper whitley' and 'view source'">
<img src="./assets/pictures/bd-main-mockup.jpg" alt="image showing mockup of main screen of app, displaying the different types of dice in a column on the left hand side of the page, the name at the very top, a field in the middle displaying an image of the selected die, the results of the last roll, fields to enter number of dice, buffs, display options, dice weighting, and then a roll button. the right hand side of the screen has a panel showing history of rolls.">

#### Functionality