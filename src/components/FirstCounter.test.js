import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FirstCounter from './FirstCounter.js';


test('loads and displays correct count', () => {
  render(<FirstCounter start={99} />);
  const countLabel = screen.queryByText("Count: 99");
  expect(countLabel).toBeVisible();
});

// test("clicking add increases the count", () => {
//     render(<FirstCounter start={5}/>);
//     const addButton = screen.getByText("Add");
//     fireEvent.click(addButton);
//     const countLabel = screen.queryByText("Count: 6");
//     expect(countLabel).toBeVisible();
// });

// // test("clicking add twice increases the count by two", () => {
// //     render(<FirstCounter start={10}/>);
// //     const addButton = screen.getByText("Add");
// //     fireEvent.click(addButton);
// //     fireEvent.click(addButton);
// //     const countLabel = screen.queryByText("Count: 12");
// //     expect(countLabel).toBeVisible();
// // });

// test("clicking subtract decreases the count", () => {
//     render(<FirstCounter start={18}/>);
//     const subtractButton = screen.getByText("Subtract");
//     fireEvent.click(subtractButton);
//     const countLabel = screen.queryByText("Count: 17");
//     expect(countLabel).toBeVisible();
// });

// // test("clicking subtract twice decreases the count by two", () => {
// //     render(<FirstCounter start={10}/>);
// //     const subtractButton = screen.getByText("Subtract");
// //     fireEvent.click(subtractButton);
// //     fireEvent.click(subtractButton);
// //     const countLabel = screen.queryByText("Count: 8");
// //     expect(countLabel).toBeVisible();
// // });

// test("clicking subtract should not decrease the value below zero", () => { 
//         render(<FirstCounter start={1}/>);
//         const subtractButton = screen.getByText("Subtract");
//         fireEvent.click(subtractButton);
//         fireEvent.click(subtractButton);
//         const countLabel = screen.queryByText("Count: 0");
//         expect(countLabel).toBeVisible();
//     });