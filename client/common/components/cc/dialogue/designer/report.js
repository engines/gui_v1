cc.dialogue.designer.report = blueprint => f => f.field( {
    key: 'report',
    as: 'one',
    label: false,
    vertical: true,
    dependent: {
      key: 'type',
      pattern: '^report$',
    },
    form: (ff) => [

      cc.collapse( {
        label: 'Components',
        body: cc.dialogue.designer.report.components( blueprint )(ff),
      } ),

    ]
  } )
