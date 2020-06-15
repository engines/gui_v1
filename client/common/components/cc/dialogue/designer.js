cc.dialogue.designer = blueprint => f => (a,x) => [

  f.field( {
    key: 'components',
    label: false,
    as: 'many',
    singular: 'dialogue component',
    form: cc.dialogue.designer.component( blueprint ),
    vertical: true,
  } ),

]
