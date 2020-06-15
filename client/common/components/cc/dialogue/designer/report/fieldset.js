cc.dialogue.designer.report.fieldset = blueprint => f => f.field( {
  key: 'fieldset',
  as: 'one',
  label: false,
  vertical: true,
  dependent: {
    key: 'type',
    pattern: '^fieldset$',
  },
  form: ff => [

    cc.collapse( {
      label: 'Options',
      body: [

        ff.field( {
          key: 'label',
        } ),

        ff.field( {
          key: 'legend',
        } ),

        ff.field( {
          key: 'layout',
          as: 'checkbox',
          checked: 'vertical',
          checkbox: { label: 'Vertical' },
        } ),

        ff.field( {
          key: 'dependent',
          as: 'one',
          form: (fff) => fff.row( { columns: [
            fff.field( {
              key: 'target',
            } ),
            fff.field( {
              key: 'pattern',
            } ),
          ] } ),
        } ),

      ],
    } ),

    cc.collapse( {
      label: 'Body',
      body: [

        ff.field( {
          key: 'body',
          as: 'many',
          label: false,
          singular: 'fieldset component',
          form: cc.dialogue.designer.report.component( blueprint ),
          vertical: true,
        } ),

      ],
    } ),

  ]
} )
