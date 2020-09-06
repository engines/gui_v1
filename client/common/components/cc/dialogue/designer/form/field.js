cc.dialogue.designer.form.field = f => f.field( {
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
            { value: 'select', label: 'Select' },
            { value: 'text', label: 'Text' },
            { disabled: 'hr' },
            { value: 'checkbox', label: 'Checkbox' },
            { value: 'checkboxes', label: 'Checkboxes' },
            { value: 'radios', label: 'Radio buttons' },
            { disabled: 'hr' },
            { value: 'hidden', label: 'Hidden' },
            { value: 'password', label: 'Password' },
            { disabled: 'hr' },
            { value: 'combobox', label: 'Combo box' },
            { value: 'multiselect', label: 'Multi select' },
            { disabled: 'hr' },
            { value: 'number', label: 'Number' },
            { value: 'url', label: 'URL' },
            { value: 'email', label: 'Email' },
            { value: 'color', label: 'Color' },
            { value: 'date', label: 'Date' },
            { value: 'tel', label: 'Telephone' },
            { value: 'time', label: 'Time' },
            { disabled: 'hr' },
            { value: 'markdown', label: 'Markdown' },
            { value: 'code', label: 'Code' },
            { disabled: 'hr' },
            { value: 'country', label: 'Country' },
            { value: 'language', label: 'Language' },
            { value: 'timezone', label: 'Timezone' },
            { disabled: 'hr' },
            { value: 'json', label: 'JSON' },
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
                  key: 'type',
                  vertical: true,
                  label: false,
                  as: 'select',
                  placeholder: 'Default',
                  selections: {
                    custom: 'Custom',
                    none: 'None',
                  }
                } ),
                fff.field( {
                  key: 'custom',
                  vertical: true,
                  label: false,
                  dependent: {
                    key: 'type',
                    value: 'custom'
                  }
                } ),
              ],
            } ),

            ff.field( {
              key: 'horizontal',
              as: 'checkbox',
            } ),

            ff.field( {
              key: 'help',
              as: 'markdown',
            } ),

            ff.field( {
              key: 'hint',
            } ),

          ],
          dependent: {
            key: 'control',
            pattern: '^(?!hidden).+$',
          },
        } ),

        ff.field( {
          key: 'placeholder',
          dependent: {
            key: 'control',
            pattern: '^(?!(hidden|checkbox|checkboxes|radios|one|many|table|json)$).+',
          }
        } ),

        ff.field( {
          key: 'dependent',
          as: 'many',
          singular: 'dependency',
          form: (fff) => fff.row( { columns: [
            fff.field( {
              key: 'target',
            } ),
            fff.field( {
              key: 'pattern',
            } ),
          ] } ),
          dependent: {
            key: 'control',
            pattern: '^.+$',
          }
        } ),

        ff.field( {
          key: 'validation',
          as: 'one',
          form: (fff) => [
            fff.field( {
              key: 'required',
              as: 'checkbox',
            } ),
            fff.fieldset( {
              vertical: true,
              label: false,
              body: fff.row( { columns: [
                fff.field( {
                  key: 'min',
                  as: 'input',
                  type: 'number',
                } ),
                fff.field( {
                  key: 'max',
                  as: 'input',
                  type: 'number',
                } ),
                fff.field( {
                  key: 'step',
                  as: 'input',
                  type: 'number',
                } ),
              ] } ),
              dependent: {
                key: '[..]control',
                pattern: '^number$',
              },
            } ),
            fff.fieldset( {
              vertical: true,
              label: false,
              body: fff.row( { columns: [
                fff.field( {
                  key: 'minlength',
                  label: 'Min length',
                  as: 'input',
                  type: 'number',
                } ),
                fff.field( {
                  key: 'maxlength',
                  label: 'Max length',
                  as: 'input',
                  type: 'number',
                } ),
              ] } ),
              dependent: {
                key: '[..]control',
                pattern: '^(string|password|combobox)$',
              },
            } ),
            fff.field( {
              key: 'pattern',
              dependent: {
                key: '[..]control',
                pattern: '^(string|password|combobox)$',
              },
            } ),
            fff.field( {
              key: 'message',
            } ),
          ],
          dependent: {
            key: 'control',
            pattern: '^(string|select|text|checkbox|checkboxes|radios|password|combobox|color|date|email|number|tel|time|url|code|markdown|country|language|timezone)$',
          },

        } ),

        ff.field( {
          key: 'value',
          label: 'Default value',
          dependent: {
            key: 'control',
            pattern: '^(?!(one|many|table)$).+$',
          }
        } ),

        ff.field( {
          key: 'selections',
          as: 'one',
          form: (fff) => [
            fff.field( {
              key: 'type',
              vertical: true,
              label: false,
              as: 'select',
              placeholder: 'None',
              selections: { static: 'Static', dynamic: 'Dynamic' },
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
              key: 'dig',
              hint: `dot-separated keys, such as 'account.profiles'`,
              dependent: {
                key: 'type',
                pattern: '^dynamic$',
              }
            } ),
          ],
          dependent: {
            key: 'control',
            pattern: '^(select|radios|checkboxes|multiselect|combobox)$',
          }
        } ),

        ff.field( {
          key: 'datalist',
          as: 'one',
          dependent: {
            key: 'control',
            pattern: '^(string|number|url|email|color|date|tel|time)$',
          },
          form: fff => [
            fff.field( {
              key: 'type',
              vertical: true,
              label: false,
              as: 'select',
              placeholder: 'None',
              selections: { static: 'Static', dynamic: 'Dynamic' },
            } ),
            fff.field( {
              key: 'static',
              label: false,
              vertical: true,
              collection: true,
              addable: true,
              removeable: true,
              moveable: true,
              singular: 'selection',
              dependent: {
                key: 'type',
                pattern: '^static$',
              }
            } ),
            fff.field( {
              key: 'dig',
              hint: `dot-separated keys, such as 'account.profiles'`,
              dependent: {
                key: 'type',
                pattern: '^dynamic$',
              }
            } ),
          ]
        } ),

        ff.field( {
          key: 'collection',
          as: 'checkbox',
          control: { label: 'Show multiple controls' },
          dependent: {
            key: 'control',
            pattern: '^(?!(checkbox|checkboxes|radios|multiselect|one|many|table)$).+$',
          }
        } ),

        ff.fieldset( {
          label: 'Items',
          body: [
            ff.field( {
              key: 'singular',
              hint: "singular inflection for an item, such as 'pet' when key is 'pets'",
            } ),
            ff.field( {
              key: 'confined',
              as: 'checkbox',
              label: false,
              vertical: true,
              control: { label: 'Confined' },
              hint: "items can't be added or removed",
            } ),
            ff.field( {
              key: 'stationary',
              as: 'checkbox',
              label: false,
              vertical: true,
              control: { label: 'Stationary' },
              hint: "items can't be sorted",
            } ),
          ],
          dependent: [
            {
              key: 'control',
              pattern: '^(many|table)$',
            },
            {
              key: 'collection',
            },
          ],
        } ),

        ff.field( {
          key: 'checkbox',
          as: 'one',
          form: (fff) => [
            fff.row( { columns: [
              fff.field( {
                key: 'label',
                vertical: true,
              } ),
              fff.field( {
                key: 'checked',
                vertical: true,
              } ),
            ] } ),
          ],
          dependent: {
            key: 'control',
            value: 'checkbox',
          },
        } ),

        ff.fieldset( {
          vertical: true,
          label: false,
          body: [

            ff.field( {
              key: 'confirm',
              as: 'checkbox',
              control: {
                label: 'Show secondary input',
              },
            } ),

            ff.field( {
              key: 'confirmation',
              as: 'one',
              label: false,
              form: (fff) => [
                fff.field( {
                  key: 'placeholder',
                } ),
              ],
              dependent: {
                key: 'confirm',
                value: 'on',
              },
            } ),

          ],
          dependent: {
            key: 'control',
            value: 'password',
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
        body: cc.dialogue.designer.form.components(ff),
      } ),
      dependent: {
        key: 'control',
        pattern: '^(one|many|table)$',
      }
    } ),

  ]
} )
