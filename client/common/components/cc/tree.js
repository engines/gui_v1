cc.tree = data => (a,x) => a['div.tree'](
  cc.tree.branch( data )
)

cc.tree.branch = data => (a,x) => a['div.tree-branch']( [

  cc.button( {
    label: a['button-icon-toggler'](
      null,
      {
        $nodes: (el) => app.icon(
          `fa fa-caret-${ el.$state ? 'down' : 'right' }`,
          data.name
        ),
        $state: false,
        $toggle: (el) => () => {
          el.$state = !el.$state
        },
      }
    ),
    onclick: (e,el) => {
      x.lib.animate.fade.toggle( el.nextSibling )
      el.$('button-icon-toggler').$toggle()
    }
  } ),

  a['div.tree-data.pl-2']( [
    a['div.tree-content']( x.out( data.content ) ),
    a['div.tree-branches']( data.children.map( child => cc.tree.branch( child ))),
  ], {
    style: { display: 'none' },
  } ),

] )
