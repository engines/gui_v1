app.system.install.library = controller => (a,x) => [

  app.close( controller ),

  app.float({
    right: app.btn( app.icon( 'fas fa-save', 'Load' ), (e,el) => controller.open( 'url' ) ),
  }),

  app.http(
    libraryURL,
    ( library, el ) => el.$nodes = a['app-library']([
      a['p.form-inline']([
        a['input.form-control'](null, {
          $init: (el) => {
            el.focus()
          },
          $on: {
            'input: filter applications': (e, el) => {
              let value = el.value
              el.$('^app-library library-applications').$$('button').forEach((button) => {
                button.$('^library-application').style.display =
                button.innerText.toLowerCase().includes(value.toLowerCase()) ?
                'unset' : 'none'
              })
            }
          }
        }),
        a['div.input-group-append'](a['.input-group-text'](app.icon('fa fa-search'))),
      ]),
      a['library-applications'](
        library.apps.map((application) => a['library-application']([
        app.btn(
          [
            a['div.application-icon'](
              application.icon_url ? [ a.img( null, {
                src: application.icon_url
              } ) ] : null
            ),
            application.label,
          ],
          () => controller.open( 'new', {
            blueprint_url: application.blueprint_url,
            label: application.label,
            icon_url: application.icon_url || '',
          } )
        ),
      ])),
      ),
    ]),
    {
      placeholder: app.hourglass('Loading library'),
      catch: (e,el) => {
        el.$nodes = [
          a['p.error']('Failed to load app library.'),
        ]
      }
    }
  ),

]
