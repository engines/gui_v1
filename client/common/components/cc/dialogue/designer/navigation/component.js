cc.dialogue.designer.navigation.component = blueprint => f => [

  f.field( {
    key: 'type',
    as: 'select',
    vertical: true,
    label: false,
    selections: {
      button: 'Button',
      menu: 'Menu',
      row: 'Row'
    },
  } ),

  cc.dialogue.designer.navigation.button( blueprint )(f),
  cc.dialogue.designer.navigation.menu( blueprint )(f),
  cc.dialogue.designer.navigation.row( blueprint )(f),

]
