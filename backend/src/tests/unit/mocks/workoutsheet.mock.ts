const allWorkoutsheets = [
  {
    id: 1,
    customer_id: 1,
    title: "Beginner Workout",
    description: "Basic workout routine for beginners",
    is_active: true
  },
  {
    id: 2,
    customer_id: 1,
    title: "Intermediate Workout",
    description: "Workout routine for intermediate level",
    is_active: true
  },
  {
    id: 3,
    customer_id: 1,
    title: "Advanced Workout",
    description: "Workout routine for advanced level",
    is_active: true
  },
  {
    id: 4,
    customer_id: 2,
    title: "Beginner Workout",
    description: "Basic workout routine for beginners",
    is_active: true
  },
  {
    id: 5,
    customer_id: 2,
    title: "Intermediate Workout",
    description: "Workout routine for intermediate level",
    is_active: true
  },
  {
    id: 6,
    customer_id: 2,
    title: "Advanced Workout",
    description: "Workout routine for advanced level",
    is_active: true
  }
];

const workoutSheetById = {
  id: 1,
  customer_id: 1,
  title: "Beginner Workout",
  description: "Basic workout routine for beginners",
  is_active: true,
  workouts: [
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
    }
  ],
  customer: {
    id: 1,
    first_name: "João",
    last_name: "Silva",
    email: "joao@example.com",
    gender: "masculino",
    phone: "1122334455",
    cpf: "12345678901",
    isActive: true,
    address_id: 1,
    address: {
      id: 1,
      street: "Rua das Flores",
      number: 123,
      complement: "Apto 101",
      neighborhood: "Centro",
      city: "Cidade A",
      state: "Estado A",
      country: "País A",
      zip_code: "12345-678"
    }
  }
};

const workoutsheetsByCustomerId = [
  {
    id: 4,
    customer_id: 2,
    title: "Beginner Workout",
    description: "Basic workout routine for beginners",
    is_active: true,
    workouts: [
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
            videoUrl: "url_do_video"
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
            videoUrl: "url_do_video"
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
            videoUrl: "url_do_video"
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
            videoUrl: "url_do_video"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    customer_id: 2,
    title: "Intermediate Workout",
    description: "Workout routine for intermediate level",
    is_active: true,
    workouts: [
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
            videoUrl: "url_do_video"
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
            videoUrl: "url_do_video"
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
            videoUrl: "url_do_video"
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
            videoUrl: "url_do_video"
          }
        ]
      }
    ]
  },
  {
    id: 6,
    customer_id: 2,
    title: "Advanced Workout",
    description: "Workout routine for advanced level",
    is_active: true,
    workouts: [
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
            videoUrl: "url_do_video"
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
            videoUrl: "url_do_video"
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
            videoUrl: "url_do_video"
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
            videoUrl: "url_do_video"
          }
        ]
      }
    ]
  }
];

const newWorkoutsheet = [
  {
    customer_id: 3,
    title: "Nome",
    description: "Descrição",
    is_active: false
  },
  {
    id: 5,
    customer_id: 3,
    title: "Nome",
    description: "Descrição",
    is_active: false
  }
];

const updateWorkoutsheet = [
  {
    customer_id: 3,
    title: "OOOO",
    description: "Descrição Atualizada",
    is_active: true,
  },
  {
    id: 5,
    customer_id: 3,
    title: "OOOO",
    description: "Descrição Atualizada",
    is_active: true,
    workouts: [
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
            videoUrl: "url_do_video"
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
            videoUrl: "url_do_video"
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
            videoUrl: "url_do_video"
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
            videoUrl: "url_do_video"
          }
        ]
      }
    ]
  }
];

const updatePartialWorkoutsheet = [
  {
    updates: {
      description: "Ficha de Treino Atualizada",
    }
  },
  {
    id: 5,
    customer_id: 3,
    title: "OOOO",
    description: "Ficha de Treino Atualizada",
    is_active: true,
    workouts: [
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
            videoUrl: "url_do_video"
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
            videoUrl: "url_do_video"
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
            videoUrl: "url_do_video"
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
            videoUrl: "url_do_video"
          }
        ]
      }
    ]
  }
];


export default {
  allWorkoutsheets,
  workoutSheetById,
  workoutsheetsByCustomerId,
  newWorkoutsheet,
  updateWorkoutsheet,
  updatePartialWorkoutsheet
};