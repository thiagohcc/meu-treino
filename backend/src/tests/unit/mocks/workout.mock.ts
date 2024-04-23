const allWorkouts = [
  {
    id: 1,
    weight: 50,
    repetitions: 10,
    sets: 3,
    workoutsheet_id: 1,
    exercises: [
      {
        id: 1,
        name: "Flexão de Braço",
        number: 1,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 1,
          workoutId: 1,
          exerciseId: 1,
          workout_id: 1
        }
      }
    ]
  },
  {
    id: 2,
    weight: 50,
    repetitions: 10,
    sets: 3,
    workoutsheet_id: 1,
    exercises: [
      {
        id: 2,
        name: "Agachamento",
        number: 2,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 2,
          workoutId: 2,
          exerciseId: 2,
          workout_id: 2
        }
      }
    ]
  },
  {
    id: 3,
    weight: 50,
    repetitions: 10,
    sets: 3,
    workoutsheet_id: 1,
    exercises: [
      {
        id: 3,
        name: "Prancha Abdominal",
        number: 3,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 3,
          workoutId: 3,
          exerciseId: 3,
          workout_id: 3
        }
      }
    ]
  },
  {
    id: 4,
    weight: 50,
    repetitions: 10,
    sets: 3,
    workoutsheet_id: 1,
    exercises: [
      {
        id: 4,
        name: "Levantamento Terra",
        number: 4,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 4,
          workoutId: 4,
          exerciseId: 4,
          workout_id: 4
        }
      }
    ]
  },
  {
    id: 5,
    weight: 30,
    repetitions: 15,
    sets: 3,
    workoutsheet_id: 2,
    exercises: [
      {
        id: 5,
        name: "Abdominais",
        number: 5,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 5,
          workoutId: 5,
          exerciseId: 5,
          workout_id: 5
        }
      }
    ]
  },
  {
    id: 6,
    weight: 30,
    repetitions: 15,
    sets: 3,
    workoutsheet_id: 2,
    exercises: [
      {
        id: 6,
        name: "Corrida Estacionária",
        number: 6,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 6,
          workoutId: 6,
          exerciseId: 6,
          workout_id: 6
        }
      }
    ]
  },
  {
    id: 7,
    weight: 30,
    repetitions: 15,
    sets: 3,
    workoutsheet_id: 2,
    exercises: [
      {
        id: 7,
        name: "Agachamento com Salto",
        number: 7,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 7,
          workoutId: 7,
          exerciseId: 7,
          workout_id: 7
        }
      }
    ]
  },
  {
    id: 8,
    weight: 30,
    repetitions: 15,
    sets: 3,
    workoutsheet_id: 2,
    exercises: [
      {
        id: 8,
        name: "Flexão de Braço Inclinada",
        number: 8,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 8,
          workoutId: 8,
          exerciseId: 8,
          workout_id: 8
        }
      }
    ]
  },
  {
    id: 9,
    weight: 70,
    repetitions: 8,
    sets: 3,
    workoutsheet_id: 3,
    exercises: [
      {
        id: 9,
        name: "Rosca Bíceps",
        number: 9,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 9,
          workoutId: 9,
          exerciseId: 9,
          workout_id: 9
        }
      }
    ]
  },
  {
    id: 10,
    weight: 70,
    repetitions: 8,
    sets: 3,
    workoutsheet_id: 3,
    exercises: [
      {
        id: 10,
        name: "Prancha Lateral",
        number: 10,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 10,
          workoutId: 10,
          exerciseId: 10,
          workout_id: 10
        }
      }
    ]
  },
  {
    id: 11,
    weight: 70,
    repetitions: 8,
    sets: 3,
    workoutsheet_id: 3,
    exercises: [
      {
        id: 11,
        name: "Flexão de Braço Diamond",
        number: 11,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 11,
          workoutId: 11,
          exerciseId: 11,
          workout_id: 11
        }
      }
    ]
  },
  {
    id: 12,
    weight: 70,
    repetitions: 8,
    sets: 3,
    workoutsheet_id: 3,
    exercises: [
      {
        id: 12,
        name: "Agachamento com Barra",
        number: 12,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 12,
          workoutId: 12,
          exerciseId: 12,
          workout_id: 12
        }
      }
    ]
  },
  {
    id: 13,
    weight: 40,
    repetitions: 12,
    sets: 3,
    workoutsheet_id: 4,
    exercises: [
      {
        id: 13,
        name: "Prancha com Elevação de Perna",
        number: 13,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 13,
          workoutId: 13,
          exerciseId: 13,
          workout_id: 13
        }
      }
    ]
  },
  {
    id: 14,
    weight: 40,
    repetitions: 12,
    sets: 3,
    workoutsheet_id: 4,
    exercises: [
      {
        id: 14,
        name: "Flexão de Braço com Pernas Elevadas",
        number: 14,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 14,
          workoutId: 14,
          exerciseId: 14,
          workout_id: 14
        }
      }
    ]
  },
  {
    id: 15,
    weight: 40,
    repetitions: 12,
    sets: 3,
    workoutsheet_id: 4,
    exercises: [
      {
        id: 15,
        name: "Agachamento Sumô",
        number: 15,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 15,
          workoutId: 15,
          exerciseId: 15,
          workout_id: 15
        }
      }
    ]
  },
  {
    id: 16,
    weight: 40,
    repetitions: 12,
    sets: 3,
    workoutsheet_id: 4,
    exercises: [
      {
        id: 16,
        name: "Prancha com Rotação",
        number: 16,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 16,
          workoutId: 16,
          exerciseId: 16,
          workout_id: 16
        }
      }
    ]
  },
  {
    id: 17,
    weight: 60,
    repetitions: 10,
    sets: 3,
    workoutsheet_id: 5,
    exercises: [
      {
        id: 17,
        name: "Supino Reto",
        number: 17,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 17,
          workoutId: 17,
          exerciseId: 17,
          workout_id: 17
        }
      }
    ]
  },
  {
    id: 18,
    weight: 60,
    repetitions: 10,
    sets: 3,
    workoutsheet_id: 5,
    exercises: [
      {
        id: 18,
        name: "Afundo",
        number: 18,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 18,
          workoutId: 18,
          exerciseId: 18,
          workout_id: 18
        }
      }
    ]
  },
  {
    id: 19,
    weight: 60,
    repetitions: 10,
    sets: 3,
    workoutsheet_id: 5,
    exercises: [
      {
        id: 19,
        name: "Prancha com Apoio nas Mãos",
        number: 19,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 19,
          workoutId: 19,
          exerciseId: 19,
          workout_id: 19
        }
      }
    ]
  },
  {
    id: 20,
    weight: 60,
    repetitions: 10,
    sets: 3,
    workoutsheet_id: 5,
    exercises: [
      {
        id: 20,
        name: "Tríceps Banco",
        number: 20,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 20,
          workoutId: 20,
          exerciseId: 20,
          workout_id: 20
        }
      }
    ]
  },
  {
    id: 21,
    weight: 80,
    repetitions: 6,
    sets: 3,
    workoutsheet_id: 6,
    exercises: [
      {
        id: 21,
        name: "Flexão de Braço com Rotação",
        number: 21,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 21,
          workoutId: 21,
          exerciseId: 21,
          workout_id: 21
        }
      }
    ]
  },
  {
    id: 22,
    weight: 80,
    repetitions: 6,
    sets: 3,
    workoutsheet_id: 6,
    exercises: [
      {
        id: 22,
        name: "Ponte Glúteos",
        number: 22,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 22,
          workoutId: 22,
          exerciseId: 22,
          workout_id: 22
        }
      }
    ]
  },
  {
    id: 23,
    weight: 80,
    repetitions: 6,
    sets: 3,
    workoutsheet_id: 6,
    exercises: [
      {
        id: 23,
        name: "Cadeira Extensora",
        number: 23,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 23,
          workoutId: 23,
          exerciseId: 23,
          workout_id: 23
        }
      }
    ]
  },
  {
    id: 24,
    weight: 80,
    repetitions: 6,
    sets: 3,
    workoutsheet_id: 6,
    exercises: [
      {
        id: 24,
        name: "Flexão de Braço com Peso",
        number: 24,
        photoUrl: "url_da_foto",
        videoUrl: "url_do_video",
        workout_exercises: {
          id: 24,
          workoutId: 24,
          exerciseId: 24,
          workout_id: 24
        }
      }
    ]
  }
];

const oneWorkout = {
  id: 1,
  weight: 50,
  repetitions: 10,
  sets: 3,
  workoutsheet_id: 1,
  exercises: [
    {
      id: 7,
      name: "Agachamento com Salto",
      number: 7,
      photoUrl: "url_da_foto",
      videoUrl: "url_do_video",
      workout_exercises: {
        id: 7,
        workoutId: 7,
        exerciseId: 7,
        workout_id: 7
      }
    }
  ]
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

const exercise = {
  id: 5,
  name: "Abdominais",
  number: 5,
  photoUrl: "url_da_foto",
  videoUrl: "url_do_video"
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
};

const updateWorkout = {
  updateData: {
    weight: 60,
    repetitions: 12,
    sets: 4
  },
  workoutUpdated: {
    id: 1,
    weight: 60,
    repetitions: 12,
    sets: 4,
    workoutsheet_id: 1
  }
};

const workoutPartialUpdateData = {
  updates: {
    weight: 70
  }
};

const workoutPartialUpdate =  {
  id: 1,
  weight: 70,
  repetitions: 10,
  sets: 3,
  workoutsheet_id: 1
};

export default {
  allWorkouts,
  oneWorkout,
  newWorkout,
  returnsNewWorkout,
  updateWorkout,
  workoutPartialUpdateData,
  workoutPartialUpdate,
  exercise
};
