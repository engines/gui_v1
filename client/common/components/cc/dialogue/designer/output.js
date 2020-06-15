cc.dialogue.designer.output = f => f.fieldset( {
  vertical: true,
  label: false,
  body: [
    f.field( {
      key: 'output',
      as: 'one',
      label: false,
      vertical: true,
      form: ff => [
        cc.collapse( {
          label: 'Options',
          body: [
            ff.field( {
              key: 'dig',
              hint: `dot-separated keys, such as 'user.name'`
            } ),
          ]
        } ),
      ],
    } ),
  ],
  dependent: {
    key: 'type',
    pattern: '^output$',
  },
} )
