cc.dialogue.designer.report.field = blueprint => f =>
f.field( {
  key: 'field',
  as: 'one',
  label: false,
  vertical: true,
  dependent: {
    key: 'type',
    pattern: '^field$',
  },
  form: ff => [

    ff.field( {
      key: 'key',
    } ),

    cc.collapse( {
      label: 'Options',
      body: [

        ff.field( {
          key: 'control',
          as: 'select',
          placeholder: 'Default',
          selections: [
            { value: 'string', label: 'String' },
            { value: 'text', label: 'Text' },
            { value: 'preformatted', label: 'Preformatted text' },
            { value: 'select', label: 'Selection' },
            { disabled: 'hr' },
            { value: 'boolean', label: 'Boolean' },
            { value: 'checkbox', label: 'Checkbox' },
            { value: 'checkboxes', label: 'Checkboxes' },
            { value: 'radios', label: 'Radio buttons' },
            { disabled: 'hr' },
            { value: 'password', label: 'Password' },
            { disabled: 'hr' },
            { value: 'number', label: 'Number' },
            { value: 'datetime', label: 'Datetime' },
            { value: 'url', label: 'URL' },
            { value: 'email', label: 'Email' },
            { value: 'tel', label: 'Telephone' },
            { value: 'color', label: 'Color' },
            { disabled: 'hr' },
            { value: 'country', label: 'Country' },
            { value: 'language', label: 'Language' },
            { value: 'timezone', label: 'Timezone' },
            { disabled: 'hr' },
            { value: 'markdown', label: 'Markdown' },
            { value: 'code', label: 'Code' },
            { disabled: 'hr' },
            { value: 'json', label: 'JSON' },
            { value: 'output', label: 'Output' },
            { disabled: 'hr' },
            { value: 'one', label: 'One' },
            { value: 'many', label: 'Many' },
            { value: 'table', label: 'Table' },
          ],
        } ),

        ff.fieldset( {
          vertical: true,
          label: false,
          body: [

            ff.field( {
              key: 'label',
              as: 'one',
              form: (fff) => [
                fff.field( {
                  key: 'display',
                  vertical: true,
                  label: false,
                  as: 'select',
                  selections: {
                    '': 'Default',
                    custom: 'Custom',
                    none: 'None',
                  }
                } ),
                fff.field( {
                  key: 'custom',
                  vertical: true,
                  label: false,
                  dependent: {
                    key: 'display',
                    value: 'custom'
                  }
                } ),
              ],
            } ),

            ff.field( {
              key: 'layout',
              as: 'checkbox',
              checked: 'vertical',
              control: { label: 'Vertical' },
            } ),

            ff.field( {
              key: 'help',
              as: 'markdown',
            } ),

            ff.field( {
              key: 'hint',
            } ),

          ],
        } ),

        ff.field( {
          key: 'parse',
          as: 'checkbox',
          dependent: {
            key: 'control',
            pattern: '^(output|json)$',
          }
        } ),

        ff.field( {
          key: 'datetime',
          as: 'one',
          form: (fff) => [
            fff.field( {
              key: 'only',
              as: 'radios',
              selections: {
                '': 'Both',
                'time': 'Time',
                'date': 'Date',
              }
            } ),
          ],
          dependent: {
            key: 'control',
            pattern: '^datetime$',
          }
        } ),

        ff.field( {
          key: 'placeholder',
          dependent: {
            key: 'control',
            pattern: '^(?!boolean|checkbox|checkboxes|radios|one|many|table)$',
          }
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

        ff.field( {
          key: 'select',
          as: 'one',
          form: (fff) => [
            fff.field( {
              key: 'type',
              as: 'select',
              selections: { '':'', static: 'Static', dynamic: 'Dynamic' },
            } ),
            fff.field( {
              key: 'static',
              label: false,
              vertical: true,
              as: 'table',
              singular: 'selection',
              form: (ffff) => [
                ffff.field( { key: 'value' } ),
                ffff.field( { key: 'label' } ),
              ],
              dependent: {
                key: 'type',
                value: 'static',
              }
            } ),
            fff.field( {
              key: 'key',
              dependent: {
                key: 'type',
                pattern: '^dynamic$',
              }
            } ),
          ],
          dependent: {
            key: 'control',
            pattern: '^select$',
          }
        } ),

        ff.field( {
          key: 'boolean',
          as: 'one',
          form: (fff) => [
            fff.row( { columns: [
              fff.field( {
                key: 'true',
                vertical: true,
              } ),
              fff.field( {
                key: 'false',
                vertical: true,
              } ),
            ] } ),
          ],
          dependent: {
            key: 'control',
            value: 'boolean',
          },
        } ),

        ff.field( {
          key: 'code',
          as: 'one',
          form: (fff) => [
            fff.field( {
              key: 'mode',
              as: 'select',
              selections: {
                '': '',
                shell: 'Shell',
                javascript: 'JavaScript',
                ruby: 'Ruby',
                python: 'Python',
                xml: 'XML',
                yaml: 'YAML',
              },
            } ),
          ],
          dependent: {
            key: 'control',
            value: 'code',
          },
        } ),

      ]
    } ),

    ff.fieldset( {
      vertical: true,
      label: false,
      body: cc.collapse( {
        label: 'Components',
        body: [
          ff.field( {
            key: 'components',
            label: false,
            vertical: true,
            as: 'many',
            singular: 'report component',
            form: cc.dialogue.designer.report.component( blueprint ),
          } ),
        ]
      } ),
      dependent: {
        key: 'control',
        pattern: '^(one|many|table)$',
      }
    } ),

  ]
} )
