interface IWorkoutsheet {
  id?: number;
  customerId: number;
  title: string;
  description: string;
  isActive: boolean;
};

export default IWorkoutsheet;