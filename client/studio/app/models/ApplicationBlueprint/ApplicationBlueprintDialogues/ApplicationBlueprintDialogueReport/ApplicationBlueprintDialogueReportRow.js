class ApplicationBlueprintDialogueReportRow {

  constructor(object) {
    this.type = 'row'
    this.assign(object || {})
  }

  assign(object) {
    this.columns = new ApplicationBlueprintDialogueReportRowColumns(object.columns || [])
  }

  get formObject() {
    return {
      columns: this.columns.formObject,
    }
  }

  output() {
    return {
      columns: this.columns.output(),
    }
  }

}
