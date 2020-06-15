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
        body: [
          ff.field( {
            key: 'components',
            label: false,
            as: 'many',
            singular: 'report component',
            form: cc.dialogue.designer.report.component( blueprint ),
            vertical: true,
          } ),
        ],
      } ),

    ]
  } )
