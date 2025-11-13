import React from "react";

const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ parts }) =>
  parts.map((part) => (
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  ));

const Sum = ({ parts }) => {
  const total = parts.reduce((suma, part) => suma + part.exercises, 0);
  return <b>total of {total} exercises</b>;
};

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Course = ({ courses }) => {
  console.log(courses);
  return (
    <>
      {courses.map((course) => (
        <>
          {" "}
          <Header course={course.name} /> <Content parts={course.parts} />{" "}
          <Sum parts={course.parts} />{" "}
        </>
      ))}
    </>
  );
};

export default Course;

// <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Sum parts={course.parts} />
