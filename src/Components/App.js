import React, { Component } from "react";
import { Header, Footer } from "./Layouts";

import Exercises from "./Exercises";
import { muscles, exercises } from "../store";

export default class extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(exercise => exercise.id === id)
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, exercise } = this.state;
    return (
      <>
        <Header />

        <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelected}
        />

        <Footer
          muscles={muscles}
          onSelect={this.handleCategorySelected}
          category={category}
        />
      </>
    );
  }
}
