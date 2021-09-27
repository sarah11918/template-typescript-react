import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';
import "@testing-library/jest-dom/extend-expect"

let getByTestId
beforeEach(()=>{
    const component = render(<Counter />)
    getByTestId = component.getByTestId
})


test("header renders with correct test", ()=> {
   
    const headerElement = getByTestId("header");

    expect(headerElement.textContent).toBe("My Counter");
});


test("counter element initially shows 0",()=>{

    const counterElement = getByTestId("counter");

    expect(counterElement.textContent).toBe("0");
});

// test("input element initially shows 1",()=>{

//     const inputElement = getByTestId("input");

//     expect(inputElement.value).toBe("1");
// });

test("add button renders +",()=>{

    const addButton = getByTestId("add-button");

    expect(addButton.textContent).toBe("+");
});
test("subtract button renders - ",()=>{

    const subtractButton = getByTestId("subtract-button");

    expect(subtractButton.textContent).toBe("-");
});

// test("input element value can be changed and used",()=>{

//     const inputElement = getByTestId("input");
//     fireEvent.change(inputElement,{target:{value: "5"}})
//     expect(inputElement.value).toBe("5");
// });
test("input element value can be changed and used",()=>{
 
    const inputElement = getByTestId("input");
    const stepElement = getByTestId("step")

    expect(inputElement.value).toBe("1");

    fireEvent.change(inputElement,{target:{value: "5"}})
    expect(inputElement.value).toBe("5");
    expect(stepElement.textContent).toBe("5");
});

test("clicking on + button adds 1 to counter initially",()=>{

    const addButton = getByTestId("add-button");
    const counterElement = getByTestId("counter");
    expect(counterElement.textContent).toBe("0")
    fireEvent.click(addButton);

    expect(counterElement.textContent).toBe("1")
});

test("changing input value then clicking add works",()=>{
 
    const addButton = getByTestId("add-button");
    const counterElement = getByTestId("counter");
    const inputElement = getByTestId("input")
    
    fireEvent.change(inputElement,{target:{value: "5"}})
    fireEvent.click(addButton);

    expect(counterElement.textContent).toBe("5")
    fireEvent.click(addButton);

    expect(counterElement.textContent).toBe("10")
});

test("changing input value then clicking subtract works",()=>{
 
    const subtractButton = getByTestId("subtract-button");
    const counterElement = getByTestId("counter");
    const inputElement = getByTestId("input")
    
    fireEvent.change(inputElement,{target:{value: "5"}})
    fireEvent.click(subtractButton);

    expect(counterElement.textContent).toBe("-5")
});

test("add then subtract should cancel back out to 0",()=>{
   
    const addButton = getByTestId("add-button");
    const subtractButton = getByTestId("subtract-button")
    const counterElement = getByTestId("counter");
    const inputElement = getByTestId("input")
    
    fireEvent.change(inputElement,{target:{value: "5"}})
    fireEvent.click(addButton);

    expect(counterElement.textContent).toBe("5")
    fireEvent.click(subtractButton);

    expect(counterElement.textContent).toBe("0")
});

test("counter changes to green at value over 100",()=>{
  
    const counterElement = getByTestId("counter");
    const inputElement = getByTestId("input");
    const addButton = getByTestId("add-button")
    fireEvent.change(inputElement,{target:{value: "50"}})
    fireEvent.click(addButton);
    fireEvent.click(addButton);


    expect(counterElement.className).toContain("green")
});

test("counter changes to red at negative values",()=>{

    const counterElement = getByTestId("counter");
    const inputElement = getByTestId("input");
    const subtractButton = getByTestId("subtract-button")
    fireEvent.change(inputElement,{target:{value: "50"}})
    fireEvent.click(subtractButton);
    fireEvent.click(subtractButton);


    expect(counterElement.className).toContain("red")
});
