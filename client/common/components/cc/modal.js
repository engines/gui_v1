cc.modal = ( options={} ) => (a,x) => a['app-modal'](
  a['div.modal'](
    a['div.modal-dialog'](
      a['div.modal-content'],
    ), {
    tabindex: -1,
    }
  ),
  {
    id: options.id || 'modal',
    $open: (el) => ( options={} ) => {

      el.$('.modal-dialog').className = `modal-dialog modal-${ options.size || 'md' }`

      el.$('.modal-content').$nodes = [
        a['div.modal-header']( [
          a['.modal-title']( options.title ),
          a['button.close']( a['!']( '&times;' ), { data: { dismiss: 'modal' } } )
        ] ),
        a['div.modal-body']( options.body ),
        options.footer ? a['div.modal-footer']( options.footer ) : null,
     ]

      $( el.$('.modal') ).modal( { backdrop: 'static' } )

    },
    $close: (el) => () => {
      el.$('button.close').click();
    }
  }
)
