class ApplicationBlueprintDialogueReportFieldComponents {

  constructor(collection) {
    this.assign(collection)
  }

  assign(collection) {
    this.components = new ApplicationBlueprintDialogueReportComponents(collection)
  }

  get formObject() {
    return this.components.formObject
  }

  output() {
    return this.components.output()
  }

}
