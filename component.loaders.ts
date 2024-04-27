import { IRemoteControlLoader } from '@directum/sungero-remote-component-types';
import * as EmployeesRatingLoader from './src/loaders/employees-rating-loader';

// Загрузчики контролов компонента.
const loaders: Record<string, IRemoteControlLoader> = {
  'employees-rating-loader': EmployeesRatingLoader
};

export default loaders;
