let app = (a,x) => a['app'](
  a['div.container']( [
    app.router,
    app.modal(),
  ] ),
  {
    $on: {
      'app.unauthenticated': (e, el) => {
        nav.$load( '/login' )
      },
      'app.timeout': (e, el) => {
        nav.$load( '/timeout' )
      },
      'ax.appkit.router.load': (e, el) => {
        nav.$render()
        let noCheck = [ '/timeout', '/login', '/logout' ]
        if ( !noCheck.includes( e.detail.path ) ) nav.$timeoutCheck()
      },
    }
  }
)
