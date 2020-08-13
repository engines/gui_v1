let app = (a,x) => a['app']( [
    app.modal(),
    a['div.container-fluid'](
      app.router,
    ),
  ], {
  $on: {
    'ax.appkit.router.load': (e, el) => {
      nav.$render()
    },
    'app.authenticated': (e, el) => {
      el.$('^app app-nav').$setUser( true )
      nav.$open()
    },
    'app.unauthenticated': (e, el) => {
      el.$('^app app-nav').$setUser( false )
      el.$('app-system-eventsource').$close()
      nav.$load( '/login' )
    },
    'app.timeout': (e, el) => {
      el.$('^app app-nav').$setUser( false )
      el.$('app-system-eventsource').$close()
      nav.$load( '/timeout' )
    },
    'app.restarting': (e, el) => {
      el.$('^app app-nav').$setUser( false )
      el.$('app-system-eventsource').$close()
      nav.$open( '/restart/progress' )
    },
    'app.shutdown': (e, el) => {
      el.$('^app app-nav').$setUser( false )
      el.$('app-system-eventsource').$close()
      nav.$open( '/shutdown/progress' )
    },
    'app.os.updating': (e, el) => {
      el.$('^app app-nav').$setUser( false )
      el.$('app-system-eventsource').$close()
      nav.$open( '/update/os/progress' )
    },
    'app.updating': (e, el) => {
      el.$('^app app-nav').$setUser( false )
      el.$('app-system-eventsource').$close()
      nav.$open( '/update/progress' )
    },
    'app.disconnected': (e, el) => {
      el.$('^app app-nav').$setUser( false )
      el.$('app-system-eventsource').$close()
      nav.$load( '/disconnected' )
    },
    'app.reconnected': (e, el) => {
      location.assign('/')
    },
    'app.connected': (e, el) => {
      el.$('app-system-eventsource').$run()
    },
    'app.system.status.update': (e, el) => {
      let update = e.detail
      el.$$( 'app-system-state' ).forEach( el => {
        el.$state = { ...el.$state, ...update.status }
      } )
    },
    'app.container.status.update': (e, el) => {
      let update = e.detail
      let selector = `app-container-state[name="${ update.name }"]`
      el.$$( selector ).forEach( el => {
        el.$state = { ...el.$state, status: update.status }
      } )
      if (!el.$(`^app app-menu ${ selector }`)) {
        el.$('^app app-menu').$render()
      }
    },

  }
} )
