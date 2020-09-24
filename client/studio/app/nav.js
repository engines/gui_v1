app.nav = controller => (a,x) => a['app-nav']( [

  app.button( {
    label: [
      app.logo( 20 ),
      'Engines Studio',
    ],
    onclick: () => controller.open( '/' ),
    title: 'Home',
    class: 'btn app-btn',
  } ),

  a['app-nav-buttons']( [

    app.button( {
      label: 'Applications',
      onclick: () => controller.open( '/applications' ),
      class: 'btn app-btn app-nav-btn app-nav-btn-applications',
    } ),

    app.button( {
      label: 'Services',
      onclick: () => controller.open( '/namespaces' ),
      class: 'btn app-btn app-nav-btn app-nav-btn-namespaces',
    } ),

    a['app-nav-timeout-check']( null, {
      $check: (el) => () => {
        el.$nodes = app.http(
          '/-/session',
          () => nav.$setUser( true ),
          {
            catch: ( error, el ) => alert( 'Server not responding.' ),
          }
        )
      }
    } ),

    a['div.float-right']( [

      a.span(
        [
          a.button(
            app.icon('fa fa-copy'),
            {
              class: "btn app-btn app-nav-btn dropdown-toggle",
              type: "button",
              id: "dropdownMenuButton",
              data: {toggle: "dropdown"},
            }
          ),
          a.div(
            app.selections.resolve_strings.map(
              (string) => app.button({
                label: [
                  string,
                  a.textarea(
                    string,
                    {style: {height: '0px', width: '0px', border: 'none'}}
                  ),
                ],
                onclick: (e, el) => {
                  el.$('^ textarea').select();
                  document.execCommand("copy");
                },
                class: "dropdown-item",
              })
            ),
            {class: "dropdown-menu dropdown-menu-right"}
          ),
        ],
        {class: "dropdown"}
      ),
      app.button( {
        label: app.icon( 'fa fa-key' ),
        title: 'Public key',
        onclick: () => controller.open( '/key' ),
        class: 'btn app-btn app-nav-btn app-nav-btn-key',
      } ),
      app.button( {
        label: app.icon( 'fa fa-cog' ),
        title: 'Settings',
        onclick: () => controller.open( '/settings' ),
        class: 'btn app-btn app-nav-btn app-nav-btn-settings',
      } ),
      app.button( {
        label: app.icon( 'fa fa-sign-out-alt' ),
        title: 'Log out',
        onclick: () => controller.load( '/logout' ),
        class: 'btn app-btn',
      } ),
    ] ),
  ], {
    style: { display: 'none' },
  } ),
], {
  id: 'nav',
  $setUser: (el) => ( user ) => {
    let buttons = el.$('app-nav-buttons')
    if (user) {
      if (buttons.style.display == 'none') {
        x.lib.animate.fade.in( buttons, { display: 'unset' } )
      }
    } else {
      x.lib.animate.fade.out( buttons )
    }
  },
  $path: (el) => () => window.location.pathname,
  $update: (el) => {
    let path = el.$path()
    let active = ( path.match( /\w+/ ) || [''] )[0]
    nav.$$( `.app-nav-btn` ).classList.remove('active')
    nav.$$( `.app-nav-btn-${ active }` ).classList.add('active')
  },
  $timeoutCheck: (el) => () => {
    el.$('app-nav-timeout-check').$check()
  },
  $open: (el) => ( path ) => {
    controller.open( path )
  },
  $load: (el) => ( path ) => {
    controller.load( path )
  },

} )
