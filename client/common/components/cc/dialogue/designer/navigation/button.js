cc.dialogue.designer.navigation.button = blueprint => f => f.field( {
  key: 'button',
  as: 'one',
  vertical: true,
  label: false,
  form: cc.dialogue.designer.button(blueprint),
  dependent: {
    key: 'type',
    value: 'button',
  }
} ),
