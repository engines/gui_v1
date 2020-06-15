cc.dialogue.designer.markdown = f => f.fieldset( {
  vertical: true,
  label: false,
  body: [
    f.field( {
      key: 'markdown',
      as: 'one',
      label: false,
      vertical: true,
      form: ff => [
        // cc.collapse( {
        //   label: 'Options',
        //   body: [
        //     ff.field( {
        //       key: 'get',
        //       vertical: true,
        //     } ),
        //   ]
        // } ),
        cc.collapse( {
          label: 'Template',
          body: [
            ff.field( {
              key: 'template',
              as: 'markdown',
              label: false,
              vertical: true,
            } ),
          ]
        } ),
      ],
    } ),
  ],
  dependent: {
    key: 'type',
    pattern: '^markdown$',
  },
} ),
