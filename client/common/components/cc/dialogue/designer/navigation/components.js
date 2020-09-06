cc.dialogue.designer.navigation.components = blueprint => f => f.field( {
  key: 'components',
  singular: 'navigation component',
  label: false,
  vertical: true,
  as: 'many',
  form: cc.dialogue.designer.navigation.component(blueprint),
} )
