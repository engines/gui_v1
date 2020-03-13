// ax.extension.report.field.extras.controls.
// selectinput = (f, options={} ) => {
// debugger
//   let a = ax.a
//   let x = ax.x
//
//   let selections = x.lib.report.selections( options.selections )
//   selections.push( { disabled: 'hr' } )
//   selections.push( { value: '__USE_INPUT__', label: options.customValueLabel || '⬇ Custom value' } )
//
//   let selectValue
//   let inputValue
//
//   if ( options.value ) {
//     let valueInselections = selections.some( option => option.value == options.value )
//     selectValue = valueInselections ? options.value : '__USE_INPUT__'
//     inputValue = valueInselections ? '' : options.value
//   } else {
//     // If no value and no placeholder then show the input
//     selectValue = options.placeholder ? '' : '__USE_INPUT__'
//   }
//
//   let controlTagOptions = {
//     $value: function() {
//       return this.$('|appkit-report-selectinput-hiddeninput input').value
//     },
//     $data: function() {
//       if ( options.datatype ) {
//         return ax.x.lib.coerce[ options.datatype ]( this.$value() )
//       } else {
//         return this.$value()
//       }
//     },
//     $focus: function () {
//       let select = this.$('select')
//       if ( select.value === '__USE_INPUT__' ) {
//         this.$('|appkit-report-selectinput-input input').focus()
//       } else {
//         select.focus()
//       }
//     },
//
//     $disable: function() {
//       let hiddeninput = this.$('|appkit-report-selectinput-hiddeninput input')
//       let select = this.$('|appkit-report-selectinput-select select')
//       hiddeninput.disabled = 'disabled'
//       select.disabled = 'disabled'
//     },
//     $enable: function() {
//       if ( !options.disabled ) {
//         let hiddeninput = this.$('|appkit-report-selectinput-hiddeninput input')
//         let select = this.$('|appkit-report-selectinput-select select')
//         hiddeninput.removeAttribute('disabled')
//         select.removeAttribute('disabled')
//       }
//     },
//     $on: { change: function () {
//       let select = this.$('select')
//       let input = this.$('|appkit-report-selectinput-input input')
//       let hiddeninput = this.$('|appkit-report-selectinput-hiddeninput input')
//       if ( select.value === '__USE_INPUT__' ) {
//         input.style.display = ''
//         hiddeninput.value = input.value
//         if ( options.required ) {
//           select.removeAttribute('required')
//           input.required = 'required'
//         }
//         if ( select == document.activeElement ) {
//           input.focus()
//         }
//       } else {
//         input.style.display = 'none'
//         hiddeninput.value = select.value
//         if ( options.required ) {
//           input.removeAttribute('required')
//           select.required = 'required'
//         }
//       }
//     } },
//
//     ...options.controlTag
//
//   }
//
//   return a['|appkit-report-control'](
//     [
//       a['|appkit-report-selectinput-hiddeninput']( f.input(
//         {
//           name: options.name,
//           value: options.value,
//           type: 'hidden',
//           ...options.hiddeninput
//         }
//       ) ),
//       a['|appkit-report-selectinput-select']( f.select(
//         {
//           value: selectValue,
//           selections: selections,
//           placeholder: options.placeholder,
//           disabled: options.disabled,
//           ...options.select
//         }
//       ) ),
//       a['|appkit-report-selectinput-input']( f.input( {
//
//         value: inputValue,
//         disabled: options.disabled,
//         ...options.input,
//         inputTag: {
//           style: selectValue == '__USE_INPUT__' ? {} : { display: 'none' },
//           ...( options.input || {} ).inputTag,
//         },
//       } ) )
//     ],
//     controlTagOptions
//   )
//
// }