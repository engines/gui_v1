cc.dialogue.designer.navigation = blueprint => f => f.fieldset( {
  vertical: true,
  label: false,
  body: [
    f.field( {
      key: 'navigation',
      as: 'one',
      label: false,
      vertical: true,
      form: ff => [

        cc.collapse( {
          label: 'Components',
          body: [
            ff.field( {
              key: 'components',
              singular: 'navigation component',
              label: false,
              vertical: true,
              as: 'many',
              form: fff => [
                fff.field( {
                  key: 'type',
                  as: 'select',
                  vertical: true,
                  label: false,
                  selections: {
                    button: 'Button',
                    menu: 'Menu',
                  },
                } ),
                fff.field( {
                  key: 'button',
                  as: 'one',
                  vertical: true,
                  label: false,
                  form: ffff => [
                    cc.dialogue.designer.navigation.button( blueprint )( ffff ),
                    ffff.field( {
                      key: 'parameters',
                      singular: 'parameter',
                      collection: true,
                      
                    } )
                  ]
                } ),
              ],
            } ),
          ],
        } ),

      ],
    } ),
  ],
  dependent: {
    key: 'type',
    pattern: '^navigation$',
  },
} ),
