app.system.show.os = controller => (a,x) => [
  a['div.clearfix']( [
    a['div.float-right'](
      app.btn(
        [
          app.icon( 'fas fa-redo' ),
          a({$text: ' Update', class: 'button-hover-text'}),
        ],
        () => controller.open( 'update/os' ),
        {
          title: 'Update Engines System',
          class: 'btn app-btn button-with-hover-text',
        }
      ),
    ),
    a['div.float-left'](
      a.div( null, {
        $init: (el) => el.$text = system.$state.os.pretty_name,
        class: 'mt-2' }
      ),
    ),
  ] ),
]
