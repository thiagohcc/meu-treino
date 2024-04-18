const allExercises = [
  {
    id: 1,
    name: "Flexão de Braço",
    number: 1,
    photoUrl: "url_da_foto",
    videoUrl: "url_do_video"
  },
  {
    id: 2,
    name: "Agachamento",
    number: 2,
    photoUrl: "url_da_foto",
    videoUrl: "url_do_video"
  },
  {
    id: 3,
    name: "Prancha Abdominal",
    number: 3,
    photoUrl: "url_da_foto",
    videoUrl: "url_do_video"
  }
];

const oneExercise = {
  id: 1,
  name: "Flexão de Braço",
  number: 1,
  photoUrl: "url_da_foto",
  videoUrl: "url_do_video"
};

const newExercise = {
  name: "Flexão de Braço",
  number: 1,
  photoUrl: "url_da_foto",
  videoUrl: "url_do_video"
};

const exerciseOutdated = {
  id: 33,
  name: "Leg Press",
  number: 333,
  photoUrl: "url_da_foto",
  videoUrl: "url_do_video"

};

const exerciseToUpdate = {
  name: "Leg Press Articulado",
  number: 33,
  photoUrl: "url_da_foto",
  videoUrl: "url_do_video"
};

const exerciseUpdated = {
  id: 33,
  name: "Leg Press Articulado",
  number: 33,
  photoUrl: "url_da_foto",
  videoUrl: "url_do_video"
};

const dataToUpdateExercise = {
  updates: {
    photoUrl: "url_da_foto",
    videoUrl: "url_do_video"
  }
};

export default {
  allExercises,
  oneExercise,
  newExercise,
  exerciseToUpdate,
  exerciseUpdated,
  dataToUpdateExercise,
  exerciseOutdated
};