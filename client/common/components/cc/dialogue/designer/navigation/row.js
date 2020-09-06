cc.dialogue.designer.navigation.row = blueprint => f => f.field( {
  key: 'row',
  as: 'one',
  label: false,
  vertical: true,
  dependent: {
    key: 'type',
    pattern: '^row$',
  },
  form: (ff) => [

    cc.collapse( {
      label: 'Columns',
      body: ff.field( {
        key: 'columns',
        as: 'many',
        singular: 'column',
        vertical: true,
        label: false,
        itemsTag: {
          $on: {
            'ax.appkit.form.nest.items.change: rerender headings': (e,el) => {
              el.$$('|dialogue-navigation-row-column-heading').$render()
            },
          }
        },
        form: fff => [
          ax.a['h6|dialogue-navigation-row-column-heading'](null, {
            $text: (el) => `Column ${fff.index + 1}`,
          }),
          cc.dialogue.designer.navigation.components(blueprint)(fff),
        ]
      } ),
    })

  ],
} )
