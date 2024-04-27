module.exports = {
  vendorName: 'Directum',
  componentName: 'ReactExample',
  componentVersion: '1.0',
  // Описание контролов, которые есть в компоненте. Реализация контролов находится в папке ./src/controls.
  controls: [
    {
      name: 'Gantt',
      // Загрузчики контрола. Загрузчик - это функция, принимающая информацию о контексте и точку доступа к API.
      // Задача загрузчика - смонтировать корневой UI-компонент контрола в указанный DOM-элемент.
      // Один и тот же контрол может отображаться в разных контекстах (карточка и обложка модуля). Если контрол должен отображаться и в карточке и в обложке, 
      // то для него следует создать разные загрузчики для этих контекстов (*-cover-loader и *-card-loader).
      loaders: [
        {
          // Имя загручика должно соответствовать имени загрузчика в файле component.loaders.ts.
          name: 'gantt-cover-loader',
          // Контекст для которого предназначен загрузчик.
          scope: 'Cover'
        }
      ],
      displayNames: [
        { locale: 'en', name: 'Gantt diagram' },
        { locale: 'ru', name: 'Диаграмма Ганта' },
      ]
    },
    {
      name: 'PerformedWorkDetailsGrid',
      loaders: [
        {
          name: 'performed-work-details-grid-card-loader',
          scope: 'Card'
        }
      ],
      displayNames: [
        { locale: 'en', name: 'Performed work details' },
        { locale: 'ru', name: 'Список выполненных работ' },
      ]
    },
    {
      name: 'ActionsPanel',
      loaders: [
        {
          name: 'actions-panel-cover-loader',
          scope: 'Cover'
        }
      ],
      displayNames: [
        { locale: 'en', name: 'Actions panel' },
        { locale: 'ru', name: 'Панель действий' },
      ]
    },
    {
      name: 'StringControl',
      loaders: [
        {
          name: 'string-control-card-loader',
          scope: 'Card'
        }
      ],
      displayNames: [
        { locale: 'en', name: 'String property editor' },
        { locale: 'ru', name: 'Редактор строкового свойства' },
      ]
    },
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
