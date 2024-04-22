interface IWorkoutsheet {
  id?: number;
  customer_id: number;
  title: string;
  description: string;
  is_active: boolean;
};

export default IWorkoutsheet;