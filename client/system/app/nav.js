app.nav = controller => (a,x) => a['app-nav']( [

  app.button( {
    label: [
      app.logo( 20 ),
      'Engines System',
    ],
    onclick: () => location.assign( '/' ),
    title: 'Home',
    class: 'btn app-btn',
  } ),

  a['.nav-host']( a.small( location.hostname ) ),

  a['app-nav-buttons.float-right']( [
    app.btn(
      app.icon( 'fas fa-cog' ),
      () => controller.open( '/settings' ),
      {
        class: 'btn app-btn app-nav-btn app-nav-btn-settings',
        title: 'Settings',
      }
    ),

    app.button( {
      label: app.icon( 'fa fa-sign-out-alt' ),
      title: 'Log out',
      onclick: () => controller.load( '/logout' ),
      class: 'btn app-btn',
    } ),
  ], {
    style: { display: 'none' },
  } ),

  app.http(
    '/-/session',
    (result, el) => el.$('^app-nav').$setUser( true ),
  ),

], {
  id: 'nav',
  $init: (el) => {
    el.$render()
  },
  $setUser: (el) => ( user ) => {
    let buttons = el.$('app-nav-buttons')
    user ?
      x.lib.animate.fade.in( buttons ) :
      x.lib.animate.fade.out( buttons )
  },
  $path: (el) => () => window.location.pathname,
  $update: (el) => {
    // debugger
    let path = el.$path()
    let active = ( path.match( /\w+/ ) || [''] )[0]
    el.$$( `.app-nav-btn` ).classList.remove('active')
    el.$$( `.app-nav-btn-${ active }` ).classList.add('active')
  },
  $open: (el) => ( path ) => {
    controller.open( path )
  },
  $load: (el) => ( path ) => {
    controller.load( path )
  },
} )
