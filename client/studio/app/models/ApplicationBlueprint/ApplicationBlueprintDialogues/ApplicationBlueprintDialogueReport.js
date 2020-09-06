class ApplicationBlueprintDialogueReport {

  constructor(object) {
    this.type = 'report'
    this.assign( object )
  }

  assign( object ) {
    this.components = new ApplicationBlueprintDialogueReportComponents(object.components || [])
  }

  get formObject() {
    return {
      components: this.components.formObject
    }
  }

  output() {
    return {
      components: this.components.output(),
    }
  }

}
