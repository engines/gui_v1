app.system.show.heading = controller => (a,x) => a['div.clearfix']( [

  a['div.float-right'](
    x.popup( app.btn( app.icon( 'fas fa-power-off' ) ), {
      menu: [
        app.btn(
          'Restart',
          () => controller.open( '/restart' ),
          { class: 'btn app-btn d-block w-100 text-left overflow-hidden' }
        ),
        app.btn(
          'Reboot',
          () => controller.open( '/reboot' ),
          { class: 'btn app-btn d-block w-100 text-left overflow-hidden' }
        ),
        app.btn(
          'Shutdown',
          () => controller.open( '/shutdown' ),
          { class: 'btn app-btn d-block w-100 text-left overflow-hidden' }
        ),
      ]
    } ),
  ),

  a['app-system-state']( null, {
    $update: (el) => {
      el.$nodes = [
        a.h3( el.$state.hostname ),
        app.system.show.errors( controller, el.$state ),
      ]
    },
    $state: {},
    $init: (el) => el.$state = system.$state,
  } ),

] )
