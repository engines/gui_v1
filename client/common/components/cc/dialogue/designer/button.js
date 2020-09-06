cc.dialogue.designer.button = blueprint => f => [

  f.field( {
    key: 'label',
    as: 'one',
    form: (ff) => [
      ff.field( {
        key: 'display',
        vertical: true,
        label: false,
        as: 'select',
        placeholder: 'Default',
        selections: {
          none: 'None',
          custom: 'Custom',
        }
      } ),
      ff.field( {
        key: 'custom',
        vertical: true,
        label: false,
        dependent: {
          key: 'display',
          value: 'custom'
        }
      } ),
    ],
  } ),

  f.row( {
    columns: [

      f.field( {
        key: 'icon',
        as: 'select',
        placeholder: 'Default',
        selections: {
          'none': 'None',
          'check': 'Check',
          'times': 'Times',
          'plus': 'Plus',
          'minus': 'Minus',
          'caret-right': 'Caret',
          'arrow-right': 'Right arrow',
          'arrow-left': 'Left arrow',
          'arrow-up': 'Right up',
          'arrow-down': 'Right down',
          'edit': 'Edit',
          'trash': 'Trash',
          'search': 'Search',
        },
      } ),

      f.field( {
        key: 'style',
        as: 'select',
        placeholder: 'Default',
        selections: {
          none: 'None',
          primary: 'Primary',
          secondary: 'Secondary',
          warning: 'Warning',
          danger: 'Danger',
        },
      } ),
    ]
  } ),

  f.field( {
    key: 'dialogue',
    as: 'combobox',
    placeholder: 'None',
    selections: blueprint.dialogues.map( dialogue => dialogue.object.name ),
  } ),


  f.field( {
    key: 'parameters',
    singular: 'parameter',
    collection: true,
    addable: true,
    removeable: true,
    moveable: true,
  } ),

]
