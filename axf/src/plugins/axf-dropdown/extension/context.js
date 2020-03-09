ax.extension.context = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let component = options.content || null

  let popupTagOptions = {
    ...options.popupTag,
    style: {
      // display: 'none',
      position: 'fixed',
      zIndex: 1,
      ...( options.popupTag || {} ).style
    }
  }

  let contextTagOptions = {
    $on: {
      // 'axf.appkit.context.popup.close': (e,el) => {
      // },
      'click': (e,el) => {
        if ( options.menu ) {
          let menu = el.$('|appkit-menu')
          menu && menu.$closeSubmenus()
        }
        el.$('axf-context-popup').style.display = 'none'
      },
    },
    $menu: function() {

      let parent = this.$('^ ^axf-context')
      let menu = options.menu || []
// debugger
      if ( parent ) {
        menu.push( ...parent.$menu() )
      }

      return menu

    },
    ...options.contextTag,
    style: {
      cursor: 'context-menu',
      ...( options.contextTag || {} ).style,
    }
  }

  let nudgePopup = function( target ) {

    let rect = target.getBoundingClientRect();
    let ww = window.innerWidth
    let wh = window.innerHeight
    let bGap = wh - rect.top - rect.height
    let rGap = ww - rect.left - rect.width
    // debugger
    if ( bGap < 0 ) target.style.top = `${ rect.y + bGap }px`
    if ( rGap < 0 ) target.style.left = `${ rect.x + rGap }px`

  }

  let contentTagOptions = {
    $init: (el) => {

      let popupContents
      let context = el.$('^axf-context')

      if ( options.menu ) {
        if ( ax.is.function( x.menu ) ) {
          // debugger
          popupContents = x.menu( { menu: context.$menu() } )
        } else {
          popupContents = options.menu
        }
      } else {
        popupContents = options.popup || null
      }

      let popup = context.$('axf-context-popup')

      let clickHandler = function(e) {
        if ( !popup.contains( e.target ) ) {
          if ( options.menu ) {
            let menu = popup.$('|appkit-menu')
            menu && menu.$closeSubmenus()
          }
          popup.style.display = 'none'
          removeClickHandler()
          el.$send( 'axf.appkit.context.popup.close' )
        }
      }

      let removeClickHandler = function() {
        document.removeEventListener( 'mousedown', clickHandler )
      }

      let addClickHandler = function() {
        document.addEventListener( 'mousedown', clickHandler )
      }

      el.$on( {
        'contextmenu': (e) => {
          e.preventDefault()
          e.stopPropagation()
          popup.$nodes = popupContents
          popup.style.left = `${ e.pageX + 1 }px`
          popup.style.top = `${ e.pageY + 1 }px`
          popup.style.display = 'inline-block'
          nudgePopup( popup )
          addClickHandler()
          el.$send( 'axf.appkit.context.popup.show' )
        }
      } )

    },
    ...options.contentTag
  }

  return (a,x) => a['axf-context']( [
    a['axf-context-content']( component, contentTagOptions ),
    a['axf-context-popup']( null, popupTagOptions )
  ], contextTagOptions )


}

// ax.extension.popup( )
