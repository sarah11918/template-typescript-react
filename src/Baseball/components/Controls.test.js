import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Controls from './Controls'

test("Controls component renders the four buttons", ()=> {
    render(<Controls />);
    const strikeButton = screen.getByRole("button", {name:/strike/i});
    const ballButton = screen.getByRole("button", {name:/ball/i});
    const foulButton = screen.getByRole("button", {name:/foul/i});
    const hitButton = screen.getByRole("button", {name:/hit/i});
    expect(strikeButton).toBeInTheDocument();
    expect(ballButton).toBeInTheDocument();
    expect(foulButton).toBeInTheDocument();
    expect(hitButton).toBeInTheDocument();
});

// test("Strike button receives and executes a prop function", ()=>{
//     render(<Controls executeStrike={ ()=>console.log('strike') } />);
//     const strikeButton = screen.getByRole("button", {name:/strike/i});
//     fireEvent.click(strikeButton);
// })

// test("Strike button receives and executes a prop function", ()=>{
//     let clicked = false
//     render(<Controls executeStrike={ ()=>clicked = true } />);
//     const strikeButton = screen.getByRole("button", {name:/strike/i});
//     fireEvent.click(strikeButton);
//     expect(clicked).toBe(true);
// })

test("Strike button receives and executes a prop function", ()=>{
    let click = jest.fn();
    render(<Controls executeStrike={click} />);
    const strikeButton = screen.getByRole("button", {name:/strike/i});
    fireEvent.click(strikeButton);
    expect(click).toBeCalled();
});

test("Ball button receives and executes a prop function", ()=>{
    let click = jest.fn();
    render(<Controls executeBall={click} />);
    const ballButton = screen.getByRole("button", {name:/ball/i});
    fireEvent.click(ballButton);
    expect(click).toBeCalled();
});

test("Foul button receives and executes a prop function", ()=>{
    let click = jest.fn();
    render(<Controls executeFoul={click} />);
    const foulButton = screen.getByRole("button", {name:/foul/i});
    fireEvent.click(foulButton);
    expect(click).toBeCalled();
});

test("Hit button receives and executes a prop function", ()=>{
    let click = jest.fn();
    render(<Controls executeHit={click} />);
    const hitButton = screen.getByRole("button", {name:/hit/i});
    fireEvent.click(hitButton);
    expect(click).toBeCalled();
});