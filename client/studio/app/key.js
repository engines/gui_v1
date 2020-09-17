app.key = controller => (a,x) => [

  a.h3('Public key'),

  a['div.clearfix']( a['div.btn-group.float-right']( [
    app.close( controller, {title: 'Return to home'}),
  ] ) ),

  app.http(
    '/-/key',
    (key, el) => el.$nodes = a['ssh-key']([
      a.textarea(key, {
        style: {fontFamily: 'monospace'},
        readonly: true,
        class: 'form-control',
      }),
      app.float({
        left: a.a(app.icon('fa fa-download', 'Download'), {
          href: '/-/download/key', target: '_blank',
          class: 'btn app-btn',
        }),
        right: app.button({
          label: app.icon('fas fa-copy', 'Copy'),
          onclick: (e, el) => {
            el.$('^ssh-key textarea').select();
            document.execCommand("copy");
          }
        }),
      }),
    ]),
    {
      placeholder: a.div(app.hourglass('Loading public key'))
    },
  ),

]
