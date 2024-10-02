import { container } from 'tsyringe';
import CustomerService from '../services/customer.service';
import CustomerController from '../controllers/customer.controller';
import AddressController from '../controllers/address.controller';
import AddressService from '../services/address.service';
import ExerciseController from '../controllers/exercise.controller';
import ExerciseService from '../services/exercise.service';
import GymUnitController from '../controllers/gymUnit.controller';
import GymUnitService from '../services/gymUnit.service';
import WorkoutController from '../controllers/workout.controller';
import WorkoutService from '../services/workout.service';
import WorkoutsheetController from '../controllers/workoutsheet.controller';
import workoutsheetService from '../services/workoutsheet.service';
import LoginController from '../controllers/login.controller';
import LoginService from '../services/login.service';

container.register<CustomerService>('CustomerService', { useClass: CustomerService });
container.register<CustomerController>('CustomerController', { useClass: CustomerController });

container.register<AddressController>('AddressController', { useClass: AddressController });
container.register<AddressService>('AddressService', { useClass: AddressService });

container.register<ExerciseController>('ExerciseController', { useClass: ExerciseController });
container.register<ExerciseService>('ExerciseService', { useClass: ExerciseService });

container.register<GymUnitController>('GymUnitController', { useClass: GymUnitController });
container.register<GymUnitService>('GymUnitService', { useClass: GymUnitService });

container.register<WorkoutController>('WorkoutController', { useClass: WorkoutController });
container.register<WorkoutService>('WorkoutService', { useClass: WorkoutService });

container.register<WorkoutsheetController>('WorkoutsheetController', { useClass: WorkoutsheetController });
container.register<workoutsheetService>('WorkoutsheetService', { useClass: workoutsheetService });

container.register<LoginController>('LoginController', { useClass: LoginController });
container.register<LoginService>('LoginService', { useClass: LoginService });

export default container;
