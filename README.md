# Suspect GIFs

A memory game where you have to avoid picking the same GIF.

## Intro Page

![image](https://i.postimg.cc/kGKghB2p/Suspect-GIFs.png)

## Main Page

![image](https://i.postimg.cc/g2Y2Ncmg/Suspect-GIFs-1.png)

## Installation and Setup Instructions

To make below steps work, You will need node and npm installed globally on your machine.

```bash
# Clone this repository
$ git clone https://github.com/ZaidKhan144/memory-game.git

# Enter the Git folder
$ cd memory-game

# Install dependencies
$ npm install

# Start the project
$ npm start
```

## Tech used
- React
- giphy API
- Styled Components
- Styled Icons
- CSS
- React Hooks
- ESLint - A linter tool to standardize code
- Prettier - Code formatter
- GitHub Pages

## Reflection

This project's main goal was to get used to `React Hooks`. 

This memory game is going to present six random GIFs from giphy API. If the selected GIF would be different from the previous selected one, then the score will increase by one, and a new set of random GIF will generate. And If the selected GIF is the same, the best score will be the current score, and the current score will turn to zero. 

I started this project by creating a `create-react-app` boilerplate and then made custom React Components. 

One of the main challenges I ran into was when I was kept getting an error `Cannot read property 'images' of undefined` when trying to render random GIFs on every click. So after playing around with the code, I realized all I needed to do was access the object's data randomly in the map method instead of just looping over the data. 

At the end of the day, the technologies implemented in this project are `React`, `React Hooks`, `CSS`, and `styled-components`. I used relatively more React Components to make code much cleaner and easier to understand. I have also made this responsive to give an optimized browsing experience.

In the future, I might implement local storage functionality to store the user scores. 

You can visit live version of the App here: https://zaidkhan144.github.io/memory-game/
