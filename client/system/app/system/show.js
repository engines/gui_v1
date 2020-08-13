app.system.show = controller => (a,x) => [
  app.system.show.heading( controller ),
  a['div.row']([
    a['div.col-3.pt-1.overflow-auto'](app.system.show.menu( controller )),
    a['div.col-9'](
      controller.nest({
        routes: {
          '/?': [
            app.system.show.engines( controller ),
            app.system.show.os( controller ),
            app.system.show.metrics( controller ),
          ],
          '/install*': app.system.install,
          '/domains*': app.system.domains,
          '/certificates*': app.system.certificates,
          '/ssh*': app.system.ssh,
          '/hostname': app.system.hostname,
          '/label': app.system.label,
          '/locale': app.system.locale,
          '/timezone': app.system.timezone,
          '/site': app.system.site,
          '/admin': app.system.admin,
          '/users*': app.system.users,
          '/email*': app.system.email,
          '/registry': app.system.registry,
          '/reserved': app.system.reserved,
          '/orphans*': app.system.orphans,
          '/exceptions': app.system.exceptions,
          '/last_install': app.system.last_install,
          '/checkup': app.system.checkup,
        }
      })
    ),
  ]),
]
