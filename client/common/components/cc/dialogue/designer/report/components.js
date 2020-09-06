cc.dialogue.designer.report.components = blueprint => f => [

  f.field( {
    key: 'components',
    as: 'many',
    label: false,
    singular: 'form component',
    form: cc.dialogue.designer.report.component( blueprint ),
    vertical: true,
  } ),

]
