import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders header correctly', () => {
  render(<App />);
});

test("Strike button increases strikes by one when clicked", ()=> {
  
  render(<App/>);
  const strikeButton = screen.getByRole("button", {name: /strike/i});
  fireEvent.click(strikeButton);
  fireEvent.click(strikeButton);
  const strikeElement = screen.getByText("Strikes: 2");
  expect(strikeElement).toBeInTheDocument();
});

test ("ball button increases ball count by 1", () => {
  render(<App />);
  const ballButton = screen.getByRole("button", {name: /ball/i});
  fireEvent.click(ballButton);
  const ballElement = screen.getByText("Balls: 1");
  expect(ballElement).toBeInTheDocument();
});

test ("foul button increases strikes", ()=> {
  render (<App />);
  const foulButton = screen.getByRole("button", {name: /foul/i});
  fireEvent.click(foulButton);
  const strikesElement = screen.getByText("Strikes: 1");
  expect(strikesElement).toBeInTheDocument();
});

test ("foul button does NOT increase strikes if there are 2 strikes", ()=> {
  render (<App />);
  const foulButton = screen.getByRole("button", {name: /foul/i});
  fireEvent.click(foulButton);
  fireEvent.click(foulButton);
  fireEvent.click(foulButton);
  const strikesElement = screen.getByText("Strikes: 2");
  expect(strikesElement).toBeInTheDocument();
});

test("hit button clears both balls and strikes", ()=>{
  render(<App />);
  const hitButton = screen.getByRole("button", {name: /hit/i});
  const strikeButton = screen.getByRole("button", {name: /strike/i});
  const ballButton = screen.getByRole("button", {name: /ball/i})
  fireEvent.click(strikeButton);
  fireEvent.click(strikeButton);
  fireEvent.click(ballButton);
  fireEvent.click(hitButton);
  const strikesElement = screen.getByText("Strikes: 0");
  const ballsElement = screen.getByText("Balls: 0");
  expect(strikesElement).toBeInTheDocument();
  expect(ballsElement).toBeInTheDocument();
})

test("3rd strike is a strikout, resets all counts", ()=>{
  render(<App />);
  
  const strikeButton = screen.getByRole("button", {name: /strike/i});
  const ballButton = screen.getByRole("button", {name: /ball/i})
  fireEvent.click(strikeButton);
  fireEvent.click(ballButton);
  fireEvent.click(ballButton);
  fireEvent.click(strikeButton);
  fireEvent.click(strikeButton);
  
  const strikesElement = screen.getByText("Strikes: 0");
  const ballsElement = screen.getByText("Balls: 0");
  expect(strikesElement).toBeInTheDocument();
  expect(ballsElement).toBeInTheDocument();
})

test("4th ball is a walk, resets all counts", ()=>{
  render(<App />);
  
  const strikeButton = screen.getByRole("button", {name: /strike/i});
  const ballButton = screen.getByRole("button", {name: /ball/i})
  fireEvent.click(ballButton);
  fireEvent.click(ballButton);
  fireEvent.click(ballButton);
  fireEvent.click(strikeButton);
  fireEvent.click(ballButton);
  
  const strikesElement = screen.getByText("Strikes: 0");
  const ballsElement = screen.getByText("Balls: 0");
  expect(strikesElement).toBeInTheDocument();
  expect(ballsElement).toBeInTheDocument();
});
