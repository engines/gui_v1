cc.dialogue.designer.report.template = f => f.field( {
  key: 'template',
  as: 'markdown',
  label: false,
  vertical: true,
  dependent: {
    key: 'type',
    pattern: '^template$',
  },
} )
