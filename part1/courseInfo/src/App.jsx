import React from "react";

const Header = (props) => {
  return (
    <>
      <h1>{props.nameCourse}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  );
};

const Content = (props) => {
  const p = props.content;
  return p.map((p) => (
    <Part part={p.name.toString()} exercise={p.exercises.toString()} />
  ));
};

const Total = (props) => {
  let total = 0;
  const p = props.sum;
  p.map((p) => (total += p.exercises));
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  // Variables at the top
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header nameCourse={course.name} />
      <Content content={course.parts} />
      <Total sum={course.parts} />
    </>
  );
};

export default App;
