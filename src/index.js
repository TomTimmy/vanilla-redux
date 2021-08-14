import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//! 중요: A reducer is a function that modifies your data.
const reducer = () => {
  //! 중요: 리턴값은 곧 (저장될) 데이터가 된다.
  return "whatever reducer returns, that will be my data.";
};

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

//! A "subscribe" allows us to listen for changes in our stores.
countStore.subscribe();

const onchange = () => {
  console.log(countStore.getState());
};

countStore.subscribe(onchange);

console.log(countStore.getState()); // 시작 count 값 = 0

countStore.dispatch({ type: "ADD" }); // count 값 = 1
countStore.dispatch({ type: "ADD" }); // count 값 = 2
countStore.dispatch({ type: "ADD" }); // count 값 = 3
countStore.dispatch({ type: "ADD" }); // count 값 = 4
countStore.dispatch({ type: "ADD" }); // count 값 = 5
countStore.dispatch({ type: "MINUS" }); // count 값 = 4

console.log(countStore.getState()); // 최종 count 값 = 4
