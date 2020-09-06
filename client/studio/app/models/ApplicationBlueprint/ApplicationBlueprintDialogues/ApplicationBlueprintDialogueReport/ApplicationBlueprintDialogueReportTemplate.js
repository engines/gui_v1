class ApplicationBlueprintDialogueReportTemplate {

  constructor(object) {
    this.type = 'template'
    this.assign(object || {})
  }

  assign(object) {
    this.object = object
    if (object.template) this.object.template = object.template
  }

  get formObject() {
    return this.object
  }

  output() {
    return this.object
  }

}
