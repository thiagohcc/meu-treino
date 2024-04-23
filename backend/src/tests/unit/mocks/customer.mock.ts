const allCustomers = [
  {
    first_name: 'João',
    last_name: 'Silva',
    email: 'joao@example.com',
    gender: 'masculino',
    phone: '1122334455',
    cpf: '12345678901',
    isActive: true,
    address_id: 1
  },
  {
    first_name: 'Maria',
    last_name: 'Santos',
    email: 'maria@example.com',
    gender: 'feminino',
    phone: '9988776655',
    cpf: '98765432101',
    isActive: true,
    address_id: 2
  }
];

const userById = {
  id: 1,
  first_name: "João",
  last_name: "Silva",
  email: "joao@example.com",
  gender: "masculino",
  phone: "1122334455",
  cpf: "12345678901",
  isActive: true,
  address_id: 1,
  workoutsheets: [
    {
      id: 1,
      customer_id: 1,
      title: "Beginner Workout",
      description: "Basic workout routine for beginners",
      isActive: true,
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
      ]
    },
    {
      id: 2,
      customer_id: 1,
      title: "Intermediate Workout",
      description: "Workout routine for intermediate level",
      isActive: true,
      workouts: [
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
        }
      ]
    },
    {
      id: 3,
      customer_id: 1,
      title: "Advanced Workout",
      description: "Workout routine for advanced level",
      isActive: true,
      workouts: [
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
        }
      ]
    }
  ],
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
};

const userByCpf = {
  id: 1,
  first_name: "João",
  last_name: "Silva",
  email: "joao@example.com",
  gender: "masculino",
  phone: "1122334455",
  cpf: "12345678901",
  isActive: true,
  address_id: 1,
  workoutsheets: [
    {
      id: 1,
      customer_id: 1,
      title: "Beginner Workout",
      description: "Basic workout routine for beginners",
      isActive: true,
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
      ]
    },
    {
      id: 2,
      customer_id: 1,
      title: "Intermediate Workout",
      description: "Workout routine for intermediate level",
      isActive: true,
      workouts: [
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
        }
      ]
    },
    {
      id: 3,
      customer_id: 1,
      title: "Advanced Workout",
      description: "Workout routine for advanced level",
      isActive: true,
      workouts: [
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
        }
      ]
    }
  ],
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
};

const userByEmail = {
  id: 1,
  first_name: "João",
  last_name: "Silva",
  email: "joao@example.com",
  gender: "masculino",
  phone: "1122334455",
  cpf: "12345678901",
  isActive: true,
  address_id: 1,
  workoutsheets: [
    {
      id: 1,
      customer_id: 1,
      title: "Beginner Workout",
      description: "Basic workout routine for beginners",
      isActive: true,
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
      ]
    },
    {
      id: 2,
      customer_id: 1,
      title: "Intermediate Workout",
      description: "Workout routine for intermediate level",
      isActive: true,
      workouts: [
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
        }
      ]
    },
    {
      id: 3,
      customer_id: 1,
      title: "Advanced Workout",
      description: "Workout routine for advanced level",
      isActive: true,
      workouts: [
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
        }
      ]
    }
  ],
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
};

const newUserSimple = {
  customer: {
    first_name: 'João',
    last_name: 'Silva',
    email: 'joao@example.com',
    gender: 'masculino',
    phone: '1122334455',
    cpf: '12345678901',
    isActive: true,
  }
};

const newUserSimpleCreated = {
  id: 1,
  first_name: 'João',
  last_name: 'Silva',
  email: 'joao@example.com',
  gender: 'masculino',
  phone: '1122334455',
  cpf: '12345678901',
  isActive: true
};

const newUserWithAddress = {
  customer: {
    first_name: 'João',
    last_name: 'Silva',
    email: 'joao@example.com',
    gender: 'masculino',
    phone: '1122334455',
    cpf: '12345678901',
    isActive: true,
  },
  address: {
    street: 'Rua das Flores',
    number: 123,
    complement: 'Apto 101',
    neighborhood: 'Centro',
    city: 'Cidade A',
    state: 'Estado A',
    country: 'País A',
    zip_code: '12345-678'
  }
};

const newUserWithAddressCreated = {
  id: 1,
  first_name: 'João',
  last_name: 'Silva',
  email: 'joao@example.com',
  gender: 'masculino',
  phone: '1122334455',
  cpf: '12345678901',
  isActive: true,
  address_id: 1,
  address: {
    id: 1,
    street: 'Rua das Flores',
    number: 123,
    complement: 'Apto 101',
    neighborhood: 'Centro',
    city: 'Cidade A',
    state: 'Estado A',
    country: 'País A',
    zip_code: '12345-678',
  },
};

const customerToUpdate = {
  first_name: 'João',
  last_name: 'da Silva',
  email: 'joao@example.com',
  gender: 'masculino',
  phone: '1122334455',
  cpf: '12345678901',
  isActive: true
};

const customerUpdated = {
  id: 1,
  first_name: 'João',
  last_name: 'da Silva',
  email: 'joao@example.com',
  gender: 'masculino',
  phone: '1122334455',
  cpf: '12345678901',
  isActive: true
};

const dataToUpdateCustomer = {
  isActive: false,
};

const CustomerUpdatedByData = {
  id: 1,
  first_name: 'João',
  last_name: 'da Silva',
  email: 'joao@example.com',
  gender: 'masculino',
  phone: '1122334455',
  cpf: '12345678901',
  isActive: false
}



export default {
  allCustomers,
  userById,
  userByCpf,
  userByEmail,
  newUserSimple,
  newUserSimpleCreated,
  newUserWithAddress,
  newUserWithAddressCreated,
  customerToUpdate,
  customerUpdated,
  dataToUpdateCustomer,
  CustomerUpdatedByData
};
