ax.extension.appkit.report.factory.many.
add = ( r ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x

  return x.appkit.button( component || "➕ Add", function () {
    this.$('^appkit-report-field-many appkit-report-field-many-items').$add( options )
  } )

}
