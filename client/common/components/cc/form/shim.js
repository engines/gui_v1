cc.form.shim = {
  form: ( f, target ) => ( options={} ) => {

    return target( {
      ...options,
      asyncformTag: {
        ...options.asyncformTag,
        $on: {
          'ax.appkit.form.async.complete': (e, el) => {
            el.$$('button[type="submit"]').$$.forEach( button => {
              button.$revert && button.$revert()
            } )
          },
          ...( options.asyncformTag || {} ).$on
        },
      },
    } )

  },

  help: ( f, target ) => ( options={} ) => {
    let help = options.help ? (a,x) => cc.md( options.help ) : null
    return target( {
      ...options,
      help: help,
    } )
  },

  template: ( f, target ) => ( options={} ) => options.template ?
    (a,x) => cc.md( options.template(f) ) : null,

  button: ( f, target ) => ( options={} ) => target( {
    ...options,
    buttonTag: {
      ...options.buttonTag,
      $on: {
        'click: change button label': (e, el) => {
          let to = options.to
          el.$from = el.innerHTML
          if ( to ) el.$nodes = [ to ]
        },
        ...( options.buttonTag || {} ).$on
      },
      $revert: (el) => () => {
        if (el.$from ) el.$html = el.$from
      },
    }
  } ),

  submit: ( f, target ) => ( options={} ) => target( {
    ...options,
    button: {
      to: cc.hourglass( 'Submitting…' ),
      ...options.button,
    },
    buttonTag: {
      ...options.buttonTag,
      $on: {
        'click: turn off all sorting': (e, el) => {
          el.$('^form').$$('ax-appkit-form-nest-sort-off button').click()
        },
        'click: revert label when invalid': (e, el) => {
          let valid = el.$('^form').checkValidity()
          if ( !valid ) el.$revert()
        },
        ...( options.buttonTag || {} ).$on,
      },
    }
  } ),

  field: ( f, target ) => ( options={} ) => {

    if(
      ax.is.undefined(options.vertical) &&
      ax.is.undefined(options.horizontal)
    ) {
      console.warn('No orientation!', options)
    // } else if (options.hasOwnProperty('vertical')) {
    //   console.warn('Vertical key deprecated!', options)
    }

    options.horizontal = options.vertical ? false : true
    return target(options)
  },
  fieldset: ( f, target ) => ( options={} ) => {

    if(
      ax.is.undefined(options.vertical) &&
      ax.is.undefined(options.horizontal)
    ) {
      console.warn('No orientation!', options)
    // } else if (options.hasOwnProperty('vertical')) {
    //   console.warn('Vertical key deprecated!', options)
    }

    options.horizontal = options.vertical ? false : true
    return target(options)
  },



  control: ( f, target ) => ( options={} ) => {
    if ( options.collection ) {
      return target( {
        ...options,
        sortOnButton: {
          ...options.sortOnButton,
          buttonTag: {
            class: 'btn app-btn',
            ...( options.sortOnButton || {} ).buttonTag,
          },
        },
        addButton: {
          ...options.addButton,
          buttonTag: {
            class: 'btn app-btn',
            ...( options.addButton || {} ).buttonTag,
          },
        },
        upButton: {
          ...options.upButton,
          buttonTag: {
            class: 'btn app-btn',
            ...( options.upButton || {} ).buttonTag,
          },
        },
        downButton: {
          ...options.downButton,
          buttonTag: {
            class: 'btn app-btn',
            ...( options.downButton || {} ).buttonTag,
          },
        },
        removeButton: {
          ...options.removeButton,
          buttonTag: {
            class: 'btn app-btn',
            ...( options.removeButton || {} ).buttonTag,
          },
        },
      } )
    } else {
      return target( options )
    }

  },

  controls: {

    combobox: ( f, target ) => ( options={} ) => f.controls.selectinput( options ),
    json: ( f, target ) => ( options={} ) => (a,x) => x.jsoneditor.form.control( f, { theme: 'bootstrap3', ...options } ),
    codemirror: ( f, target ) => ( options={} ) => (a,x) => {
        if ( ax.is.string(options.mode) ) {
          options.mode = {
            value: options.mode.value || localStorage.editorDefaultMode,
            selections: options.mode.selections,
          }
        }
        return target( f, {
          keymap: window.localStorage.editorKeymap,
          ...options,
        } );
    },
    markdown: ( f, target ) => ( options={} ) => (a,x) => x.easymde.form.control( f, options ),

    table: ( f, target ) => ( options={} ) => target( {
      addable: true,
      removeable: true,
      moveable: true,
      ...options,
      sortOnButton: {
        ...options.sortOnButton,
        buttonTag: {
          class: 'btn app-btn',
          ...( options.sortOnButton || {} ).buttonTag,
        },
      },
      addButton: {
        ...options.addButton,
        buttonTag: {
          class: 'btn app-btn',
          ...( options.addButton || {} ).buttonTag,
        },
      },
      upButton: {
        ...options.upButton,
        buttonTag: {
          class: 'btn app-btn',
          ...( options.upButton || {} ).buttonTag,
        },
      },
      downButton: {
        ...options.downButton,
        buttonTag: {
          class: 'btn app-btn',
          ...( options.downButton || {} ).buttonTag,
        },
      },
      removeButton: {
        ...options.removeButton,
        buttonTag: {
          class: 'btn app-btn',
          ...( options.removeButton || {} ).buttonTag,
        },
      },

    } ),

    many: ( f, target ) => ( options={} ) => {

      if(
        ax.is.undefined(options.vertical) &&
        ax.is.undefined(options.horizontal)
      ) {
        console.warn('No orientation!', options)
      // } else if (options.hasOwnProperty('vertical')) {
      //   console.warn('Vertical key deprecated!', options)
      }

      return target( {
        horizontal: options.vertical ? false : true,
        addable: true,
        removeable: true,
        moveable: true,
        ...options,
        sortOnButton: {
          ...options.sortOnButton,
          buttonTag: {
            class: 'btn app-btn',
            ...( options.sortOnButton || {} ).buttonTag,
          },
        },
        addButton: {
          ...options.addButton,
          buttonTag: {
            class: 'btn app-btn',
            ...( options.addButton || {} ).buttonTag,
          },
        },
        upButton: {
          ...options.upButton,
          buttonTag: {
            class: 'btn app-btn',
            ...( options.upButton || {} ).buttonTag,
          },
        },
        downButton: {
          ...options.downButton,
          buttonTag: {
            class: 'btn app-btn',
            ...( options.downButton || {} ).buttonTag,
          },
        },
        removeButton: {
          ...options.removeButton,
          buttonTag: {
            class: 'btn app-btn',
            ...( options.removeButton || {} ).buttonTag,
          },
        },

      } )
    },

  },

  buttons: (f) => ( options={} ) => (a,x) => a['app-form-buttons']( [
    ( options.cancel == false ) ? null:  f.button( {
      label: app.icon( 'fa fa-times', 'Cancel' ),
      to: cc.hourglass( 'Cancelling…' ),
      onclick: () => history.back(),
      ...options.cancel
    } ),
    ' ',
    ( options.submit == false ) ? null:  f.submit( {
      label: app.icon( 'fa fa-check', 'Submit' ),
      ...options.submit
    } ),
  ], {
    ...options.buttonsTag,
    style: {
      display: 'block',
      ...( options.buttonsTag || {} ).style,
    },
  } ),

  row: ( f, target ) => ( options={} ) => (a,x) => a['div.row'](
    ( options.columns || [] ).map( (column) => a['div.col-sm'](column) ),
    options.rowTag
  ),

}
