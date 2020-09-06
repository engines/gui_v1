cc.dialogue.designer.report.row = blueprint => f => f.field( {
  key: 'row',
  as: 'one',
  label: false,
  vertical: true,
  dependent: {
    key: 'type',
    pattern: '^row$',
  },
  form: ff => [

    cc.collapse( {
      label: 'Columns',
      body: ff.field({
        key: 'columns',
        as: 'many',
        singular: 'column',
        vertical: true,
        form: cc.dialogue.designer.report.components( blueprint )
      }),
    } ),

  ]
} )
