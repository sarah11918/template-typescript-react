import React from 'react';
import {render, screen} from '@testing-library/react';
import Display from './Display'

test("The display renders balls and strikes props",()=> {
    render(<Display strikes="2" balls="1" />);
    const strikesElement = screen.getByText('Strikes: 2');
    const ballsElement = screen.getByText('Balls: 1');
    expect(ballsElement).toBeInTheDocument();
    expect (strikesElement).toBeInTheDocument();
});

test("The display does not care about how balls and strikes work in baseball",()=> {
    render(<Display strikes="-4" balls="100" />);
    const strikesElement = screen.getByText(/Strikes: -4/);
    const ballsElement = screen.getByText(/Balls: 100/);
    expect(ballsElement).toBeInTheDocument();
    expect (strikesElement).toBeInTheDocument();
});