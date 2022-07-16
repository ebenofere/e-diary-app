import { useState } from "react";

import "./App.css";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "g1", text: "Do all exercises!" },
    { id: "g2", text: "Finish the course!" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];

      updatedGoals.unshift({ id: Math.random().toString(), text: enteredText });

      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);

      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
