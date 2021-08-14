import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  const [text, setText] = useState(" ");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
  }

  return (
    <>
      <h1>To Do</h1>
      <form onChange={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

//! A function mapStateToProps will give "state" (from "store") to here, "Home".
function mapStateToProps(state, ownProps) {
  //! Whatever I return, It will go to my component "Home" as a PROPS
  // !Thanks to function, "connect"
  return { addedProps: "Yeah I am new!" };
} //! So, "mapStateToProps" means "from the redux state, put a little bit into the home component as a props."

//!
export default connect(mapStateToProps)(Home);
