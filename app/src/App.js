
import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Board from "./components/Board";
import MemoryCard from "./components/MemoryCard";
import friends from "./friends.json";
import JumboTron from './components/JumboTron';

class App extends Component {
    render() {
        return (
          <div>
            <JumboTron backgroundImage="http://hdblackwallpaper.com/wallpaper/2015/07/hot-pink-backgrounds-for-desktop-16-free-hd-wallpaper.jpg">
          <h1>RuPaul's Drag Race Clicky Game</h1>
          <h2>Click a queen to earn points but don't click the same queen twice!</h2>
            </JumboTron>
          </div>
        );
}
}

export default App;
