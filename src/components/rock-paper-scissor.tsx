"use client";
//importing react  hooks
import React, { useState } from "react";
//image component
import Image from "next/image";

const RockPaperScissor = () => {
  //states to store value
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);

  //array of options
  const choices = ["Rock", "Paper", "Scissor"];

  // generates random option for computer
  const handleImageClick = (choice: string) => {
      setPlayerChoice(choice);
      // setComputerChoice(null);
      const computer = getRandomChoice();
      setComputerChoice(computer);
      if(playerChoice && computer){
      determineWinner(playerChoice, computer);
      // setResult(null);
  }};
    
    const getRandomChoice = () => {
      return choices[Math.floor(Math.random() * choices.length)];
    };
  const determineWinner = (player: string, computer: string) => {
    if (player === computer) {
      setResult("It's a tie!");
    } else if (
      (player === "Rock" && computer === "Scissor") ||
      (player === "Scissor" && computer === "Rock") ||
      (player === "Scissor" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    ) {
      setResult("You Win!");
      setPlayerScore(playerScore + 1);
    } else {
      setResult("Computer Wins!");
      setComputerScore(computerScore + 1);
    }
  };
  //RESETING THE GAME
  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setPlayerScore(0);
    setComputerScore(0);
  };
  //JSX code
  return (
    <div className="bg-orange-600">
      <div className="flex flex-col items-center justify-center h-screen w-[40vw] bg-purple-400 mx-auto pb-[50px]">
        <h1 className="text-2xl font-bold mb-6 md:text-lg">
          Rock Paper Scissor
        </h1>
        {/* Taking choices and matching with the random one genrated by random library */}
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 mb-6">
          {choices.map((choice) => (
            <button key={choice} onClick={() => handleImageClick(choice)}>
              <Image
                src={`/images/${choice}.png`}
                alt="choice"
                width={100}
                height={100}
                className="rounded-[50%] hover:scale-105 transition-transform sm-w-24 md:w-32 w-20 "
              ></Image>
            </button>
          ))}
        </div>
        {/* showing result */}
        {result && (
          <div className="mt-6 text-center">
            <p className="text-lg md:text-xl">
              <span>Your Choice:</span> {playerChoice}
            </p>
            <p className="text-lg md:text-xl">
              <span>Computers Choice:</span> {computerChoice}
            </p>
            <p className="font-bold text-xl md:text-2xl mt-4">{result}</p>
          </div>
        )}
        {/* showing score */}
        <div className="mt-4 text-center ">
          <p className="font-bold text-lg ">
            <span>Player Score: </span> {playerScore}
          </p>
          <p className="font-bold text-lg">
            <span>Computers Score: </span> {computerScore}
          </p>
        </div>
        {/* Reset Buuton */}
        <button
          onClick={resetGame}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors "
        >
          {" "}
          Reset
        </button>
      </div>
    </div>
  );
};

export default RockPaperScissor;
