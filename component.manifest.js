module.exports = {
  vendorName: 'Directum',
  componentName: 'ReactExample',
  componentVersion: '1.0',
  // Описание контролов, которые есть в компоненте. Реализация контролов находится в папке ./src/controls.
  controls: [
    {
      name: 'EmployeeControl',
      loaders: [
        {
          name: 'employees-rating-loader',
          scope: 'Cover'
        }
      ],
      displayNames: [
        { locale: 'en', name: 'Employee dashboard' },
        { locale: 'ru', name: 'Дашборд сотрудников' },
      ]
    }
  ]
};
