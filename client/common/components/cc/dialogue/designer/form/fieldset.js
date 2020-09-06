cc.dialogue.designer.form.fieldset = (f) => f.field( {
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
          key: 'horizontal',
          as: 'checkbox',
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
      label: 'Components',
      body: cc.dialogue.designer.form.components(ff),
    } ),

  ]

} )
