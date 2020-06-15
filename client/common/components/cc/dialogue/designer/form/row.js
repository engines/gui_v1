cc.dialogue.designer.form.row = (f) => f.field( {
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
      body: [

        ff.field( {
          key: 'columns',
          as: 'many',
          singular: 'column',
          form: cc.dialogue.designer.form.component,
          label: false,
          vertical: true,
        } ),
      ],
    } ),
    
  ]
} )
