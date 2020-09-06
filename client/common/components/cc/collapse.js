cc.collapse = ( options={} ) => (a,x) => a['app-collapse']( [
  cc.button( {
    label: a(
      {
        $tag: 'app-collapse-indicator',
        $nodes: ( el ) => cc.icon( el.$iconClass(), options.label ),
        $state: options.display,
        $iconClass: (el) => () => {
          return el.$state ? 'fa fa-caret-down' : 'fa fa-caret-right'
        },
      }
    ),
    onclick: (e,el) => el.$('^').$toggle(),
    class: 'btn app-btn',
    ...options.button,
  } ),
  a['app-collapse-body'](
    options.body,
    {
      ...options.bodyTag,
      style: {
        display: options.display ? 'unset': 'none',
        ...( options.bodyTag || {} ).style,
      }
    }
  ),

], {
  $state: options.display,
  $toggle: (el) => () => { el.$state = !el.$state },
  $update: (el) => {
    el.$('app-collapse-indicator').$state = el.$state
    let body = el.$('app-collapse-body')
    if ( el.$state ) {
      x.lib.animate.fade.in( body, {
        complete: () => {
          let firstControl = el.$$('ax-appkit-form-control').$$[0]
          if ( firstControl ) {
            firstControl.$focus()
          }
          // EasyMDE needs to be refreshed when it appears.
          el.$$('ax-appkit-easymde').$refresh()
        }
      } )
    } else {
      x.lib.animate.fade.out( body )
    }
  },
  ...options.collapseTag
} )
