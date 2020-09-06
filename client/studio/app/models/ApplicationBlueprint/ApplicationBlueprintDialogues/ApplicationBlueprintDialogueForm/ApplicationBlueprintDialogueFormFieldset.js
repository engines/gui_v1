class ApplicationBlueprintDialogueFormFieldset {

  constructor(object) {
    this.type = 'fieldset'
    this.assign(object || {})
  }

  assign(object) {
    this.object = {}
    if (object.label) this.object.label = object.label
    if (object.legend) this.object.legend = object.legend
    if (object.horizontal) this.object.horizontal = !!object.horizontal
    this.dependent = new ApplicationBlueprintDialogueFormFieldDependent(object.dependent || [])
    this.components = new ApplicationBlueprintDialogueFormFieldComponents(object.components || [])
  }

  get formObject() {
    return {
      ...this.object,
      dependent: this.dependent.formObject,
      components: this.components.formObject,
    }
  }

  output() {
    return {
      ...this.object,
      dependent: this.dependent.output(),
      components: this.components.output(),
    }
  }

}
