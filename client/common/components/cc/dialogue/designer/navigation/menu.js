cc.dialogue.designer.navigation.menu = blueprint => f => f.field( {
  key: 'menu',
  as: 'one',
  vertical: true,
  label: false,
  form: ff => [

    ff.field( {
      key: 'label',
      as: 'one',
      form: (fff) => [
        fff.field( {
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
        fff.field( {
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

    ff.field( {
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

    cc.dialogue.designer.navigation.components(blueprint)(ff)


  ],
  dependent: {
    key: 'type',
    value: 'menu',
  }
} ),
