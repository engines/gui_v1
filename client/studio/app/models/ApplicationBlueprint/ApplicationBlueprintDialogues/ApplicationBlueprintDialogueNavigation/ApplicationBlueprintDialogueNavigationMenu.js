class ApplicationBlueprintDialogueNavigationMenu {

  constructor(object) {
    this.type = 'menu'
    this.assign(object || {})
  }

  assign(object) {
    this.object = {}
    if (object.icon) this.object.icon = object.icon
    if (object.label) this.object.label = object.label
    if (object.style) this.object.style = object.style
    this.components = new ApplicationBlueprintDialogueNavigationComponents(object.components || [])
  }

  get formObject() {
    return {
      ...this.object,
      components: this.components.formObject
    }
  }

  output() {
    return {
      ...this.object,
      components: this.components.output()
    }
  }

}
