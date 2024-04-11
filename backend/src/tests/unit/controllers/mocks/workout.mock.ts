const allWorkouts = [
  {
    id: 1,
    weight: 50,
    repetitions: 10,
    sets: 3,
    workoutsheet_id: 1
  },
  {
    id: 2,
    weight: 50,
    repetitions: 10,
    sets: 3,
    workoutsheet_id: 1
  },
  {
    id: 3,
    weight: 50,
    repetitions: 10,
    sets: 3,
    workoutsheet_id: 1
  }
];

const oneWorkout = {
  id: 1,
  weight: 50,
  repetitions: 10,
  sets: 3,
  workoutsheet_id: 1
};

const newWorkout = {
  workout: {
    workoutsheet_id: 3,
    weight: 100,
    repetitions: 10,
    sets: 4
  },
  exerciseId: 5
};

const returnsNewWorkout = {
  workout: {
    id: 29,
    weight: 100,
    repetitions: 10,
    sets: 4,
    workoutsheet_id: 3,
    exercises: [
      {
        id: 5,
        name: "Abdominais",
        number: 5,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 29,
          workoutId: 29,
          exerciseId: 5,
          workout_id: 29
        }
      }
    ]
  }
}

export default {
  allWorkouts,
  oneWorkout,
  newWorkout,
  returnsNewWorkout
};