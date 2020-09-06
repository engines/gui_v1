cc.dialogue.designer.navigation = blueprint => f => f.fieldset( {
  vertical: true,
  label: false,
  body: [
    f.field( {
      key: 'navigation',
      as: 'one',
      label: false,
      vertical: true,
      form: ff => [

        cc.collapse( {
          label: 'Components',
          body: cc.dialogue.designer.navigation.components(blueprint)(ff),
        } ),

      ],
    } ),
  ],
  dependent: {
    key: 'type',
    pattern: '^navigation$',
  },
} ),
