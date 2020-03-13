ax.extension.form.shim = function() {

  return {

    input: (f) => ( options ) => this.factory.input( options ),
    select: (f) => ( options ) => this.factory.select( options ),
    textarea: (f) => ( options ) => this.factory.textarea( options ),
    check: (f) => ( options ) => this.factory.check( options ),
    checks: (f) => ( options ) => this.factory.checks( options ),
    radios: (f) => ( options ) => this.factory.radios( options ),
    button: (f) => ( options ) => this.factory.button( options ),

    form: (f) => ( options ) => this.factory.form( f, options ),
    submit: (f) => ( options ) => this.factory.submit( f, options ),
    cancel: (f) => ( options ) => this.factory.cancel( f, options ),

  }

}