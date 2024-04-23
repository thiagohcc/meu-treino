interface IWorkout {
  id?: number;
  weight: number;
  repetitions: number;
  sets: number;
  workoutsheet_id?: number;
};

export default IWorkout;