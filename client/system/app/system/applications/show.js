app.system.applications.show = (controller) =>  {

  const name = controller.params.name

  return (a,x) => a['app-system-application']( [

    app.http(
      `/~/~/containers/engine/${ name }/status`,
      ( response, el ) => {
        response.json().then( status => {
          el.$nodes = [
            // a['div.container']( [
              a['app-container-state']( {
                $state: status,
                // $mergeState: function( statusUpdate ) {
                //   this.$state = { ...this.$state, ...statusUpdate }
                // },
                $nodes: function() { return [
                  a.h3( [
                    app.containerStateIcons( this.$state ),
                    name,
                    app.containerErrorIcons( this.$state ),
                  ] ),
                  x.list( this.$state ),
                ] },
                name: `application_${ name }`
              } ),

              a['app-system-container-instructions']( [
                app.btn( app.icon( 'fas fa-stop-circle', 'Stop' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/~/~/containers/engine/${ name }/stop`) ),
                app.btn( app.icon( 'fas fa-play-circle', 'Start' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/~/~/containers/engine/${ name }/start`) ),
                app.btn( app.icon( 'far fa-play-circle', 'Restart' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/~/~/containers/engine/${ name }/restart`) ),
                app.btn( app.icon( 'fas fa-pause-circle', 'Pause' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/~/~/containers/engine/${ name }/pause`) ),
                app.btn( app.icon( 'far fa-pause-circle', 'Unpause' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/~/~/containers/engine/${ name }/unpause`) ),
                app.btn( app.icon( 'far fa-stop-circle', 'Halt' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/~/~/containers/engine/${ name }/halt`) ),
                app.btn( app.icon( 'fas fa-times-circle', 'Destroy' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/~/~/containers/engine/${ name }/destroy`, null, { method: 'delete' } ) ),
                app.btn( app.icon( 'far fa-check-circle', 'Create' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/~/~/containers/engine/${ name }/create`) ),
                app.btn( app.icon( 'fas fa-check-circle', 'Recreate' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/~/~/containers/engine/${ name }/recreate`) ),
                app.btn( app.icon( 'fas fa-plus-circle', 'Reinstall' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/~/~/containers/engine/${ name }/reinstall`) ),
                // app.btn( app.icon( 'fas fa-play', 'Clear' ), (e,el) => el.$('^ app-system-container-instructions-result').$nodes = app.http(`/~/~/containers/engine/${ name }/clear`) ),
                app.btn( app.icon( 'fas fa-minus-circle', 'Uninstall' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').
                  $nodes = app.http(
                    `/~/~/containers/engine/${ name }/delete/all`,
                    () => {
                      controller.open( '/system' )
                      controller.open()
                    },
                    { method: 'delete' }
                  )
                ),

                a.br,
              ] ),
              a['app-system-container-instructions-result'](),
            // ] ),
            // a.hr,
            // a['div.container']( [
              a.h6( 'Websites' ),
              app.http(
                `/~/~/containers/engine/${ name }/websites`,
                ( response, el ) => {
                  response.json().then( websites => {

                    el.$nodes = websites.length ? websites.map(
                      ( website ) => [
                        a.a( website, { href: website, target: website, class: 'btn btn-link' } ),
                        a.br
                      ]
                    ) : a.p( a.i( 'None' ) )

                  } )
                }
              ),

              app.http(
                `/~/~/containers/engine/${ name }/logs`,
                ( response, el  ) => response.json().then( logs => {
                  el.$nodes = [
                    a.h3('App logs'),
                    a.h4('Out'),
                    app.xterm( { text: logs.stdout } ),
                    a.h4('Error'),
                    app.xterm( { text: logs.stderr } ),
                  ]
                } )
              ),



            // ] ),
            // a.hr,
            // a['div.container']( [
              a.h6( 'Uptime' ),
              app.http(
                `/~/~/containers/engine/${ name }/uptime`,
                ( response, el ) => response.json().then( result => el.$nodes = x.list( result ) )
              ),
              a.h6( 'Memory' ),
              app.http(
                `/~/~/containers/engine/${ name }/metrics/memory`,
                ( response, el ) => response.json().then( result => el.$nodes = x.list( result ) )
              ),
              a.h6( 'Network' ),
              app.http(
                `/~/~/containers/engine/${ name }/metrics/network`,
                ( response, el ) => response.json().then( result => el.$nodes = x.list( result ) )
              ),
            // ] ),
            // a.hr,
            // a['div.container']( [
              a.h6( 'Services' ),
              app.http(
                `/~/~/containers/engine/${ name }/services/persistent/`,
                ( response, el ) => response.json().then( result => el.$nodes = x.list( result ) )
              ),
              a.br,
              app.http(
                `/~/~/containers/engine/${ name }/services/non_persistent/`,
                ( response, el ) => response.json().then( result => el.$nodes = x.list( result ) )
              ),
            // ] ),
            // a.hr,
            // a['div.container']( [
              app.btn( 'GETs', (e,el) => el.nextSibling.$nodes = [
                [ a.h5( `/~/~/containers/engine/${ name }` ), app.http( `/~/~/containers/engine/${ name }` ), a.br ],
                [ a.h5( `/~/~/containers/engine/${ name }/blueprint` ), app.http( `/~/~/containers/engine/${ name }/blueprint` ), a.br ],
                [ a.h5( `/~/~/containers/engine/${ name }/build_report` ), app.http( `/~/~/containers/engine/${ name }/build_report` ), a.br ],
                [ a.h5( `/~/~/containers/engine/${ name }/logs` ), app.http( `/~/~/containers/engine/${ name }/logs` ), a.br ],
                [ a.h5( `/~/~/containers/engine/${ name }/ps` ), app.http( `/~/~/containers/engine/${ name }/ps` ), a.br ],
                [ a.h5( `/~/~/containers/engine/${ name }/state` ), app.http( `/~/~/containers/engine/${ name }/state` ), a.br ],
                [ a.h5( `/~/~/containers/engine/${ name }/icon_url` ), app.http( `/~/~/containers/engine/${ name }/icon_url` ), a.br ],
              ] ),
              a['app-test-btn-result'](),
            // ] ),
            // a.hr,

          ]
        } )

      },
      {
        // placeholder: "Loading",
      }
    ),

  ] )

}
