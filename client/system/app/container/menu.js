app.container.menu = ( controller, type ) => (a,x) => {

  let menuButton = app.menuButton( controller )
  let prefix = `/${type}s/${controller.params.name}/`

  return [

    menuButton( 'Memory', `${prefix}memory`, 'fas fa-memory' ),
    menuButton( 'Actions', `${prefix}actions`, 'fas fa-crosshairs' ),

    type === 'service' ? [
      menuButton( 'Configuration', `${prefix}configurations`, 'fas fa-cogs' ),
      menuButton( 'Export', `${prefix}export`, 'fas fa-download' ),
      menuButton( 'Import', `${prefix}import`, 'fas fa-upload' ),
    ] : [
      menuButton( 'Network', `${prefix}network`, 'fas fa-sitemap' ),
      menuButton( 'Icon', `${prefix}icon`, 'fas fa-icons' ),
    ],

    menuButton( 'About', `${prefix}about`, 'fas fa-info' ),

    a.hr,

    menuButton( 'Environment', `${prefix}environment`, 'fas fa-question-circle' ),
    menuButton( 'Bindings', `${prefix}bindings`, 'fas fa-dice-d20' ),
    menuButton( 'Logs', `${prefix}logs`, 'fas fa-file-alt' ),
    menuButton( 'Processes', `${prefix}processes`, 'fas fa-list' ),
    menuButton( 'Container', `${prefix}container`, 'fas fa-cube' ),

    type === 'service' ? [
      menuButton( 'Definition', `${prefix}definition`, 'fas fa-map' ),
    ] : [
      menuButton( 'Installation', `${prefix}installation`, 'fas fa-clipboard-check' ),
      menuButton( 'Blueprint', `${prefix}blueprint`, 'fas fa-map' ),
    ],

  ]

}
