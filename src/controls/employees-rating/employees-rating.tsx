import React from 'react';
import {
  IRemoteComponentCardApi,
  IRemoteComponentContext
} from '@directum/sungero-remote-component-types';

import '../../../i18n';
import EmployeesRatingView from './employees-rating-view';
import { EmployeeStatusEnum, IEmployeeRating } from './types';

const DEFAULT_CULTURE = 'en';

interface IProps {
  initialContext: IRemoteComponentContext;
  api: IRemoteComponentCardApi;
}

function getEntity(): IEmployeeRating {
  return {
    Id: 1,
    DisplayValue: 'Производственный отдел',
    EmployeeRatingDetails: [
      {
        Id: 42,
        DisplayValue: 'Начальники проекта',
        Employees: [
          {
            Id: 232,
            Name: 'Первый работник',
            Status: EmployeeStatusEnum.RatingRequired,
          },
          {
            Id: 23213,
            Name: 'Второй работник',
            Status: EmployeeStatusEnum.Signed,
          }
        ]
      },
      {
        Id: 43,
        DisplayValue: 'Руководители разработки',
        Employees: [
          {
            Id: 233,
            Name: 'Первый работник',
            Status: EmployeeStatusEnum.RatingRequired,
          },
          {
            Id: 2312313,
            Name: 'Второй работник',
            Status: EmployeeStatusEnum.Signed,
          }
        ]
      },
    ]
  }
}

const EmployeesRating: React.FC<IProps> =  () => {
  const entity = getEntity();

  return <EmployeesRatingView
    entity={entity}
  />
}

export default EmployeesRating;
