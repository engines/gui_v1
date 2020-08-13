app.system.ssh.show = controller => (a,x) => [

  a.h6('Public key'),
  app.http(
    '/-/-/system/keys/user/engines',
    (key, el) => el.$nodes = a['ssh-key']([
      a.textarea(key, {
        style: {fontFamily: 'monospace'},
        readonly: true,
        class: 'form-control bg-white',
      }),
      app.float({
        left: a.a(app.icon('fa fa-download', 'Download'), {
          href: '/-/download/ssh/public', target: '_blank',
          class: 'btn app-btn',
        }),
        right: app.btn(
          app.icon('fas fa-copy', 'Copy'),
          (e, el) => {
            el.$('^ssh-key textarea').select();
            document.execCommand("copy");
          }
        ),
      }),
      a.hr,
      app.float({
        left: app.btn(
          app.icon('fa fa-upload', 'Upload'),
          () => controller.open('upload')
        ),
        right: app.btn(
          app.icon('fa fa-user-secret', 'Generate'),
          () => controller.open('generate')
        ),
      }),
    ]),
    {
      placeholder: a.div(app.hourglass('Loading public key'))
    },
  ),

]
