app.system.ssh.generate = controller => (a,x) => [

  a.p('Generate a new key.', {class: 'mt-2'}),

  a.a(
    app.icon('fa fa-check', 'OK'),
    {
      class: 'btn app-btn',
      href: '/-/download/ssh/generate',
      target: '_blank',
      $on: {'click: close': (e, el) => controller.open('..')},
    }
  ),

]
