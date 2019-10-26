'use strict'
/**
 * Creates an HTML element and inserts it in the DOM.
 * The element is described by a component and any accompanying attributes.
 * If the element has an `id`, it will replace an existing
 * DOM element that has the same `id`.
 * If the element does not have a matching `id`,
 * the element will be appended to the &lt;body&gt;.
 *
 * @since 0.0.0
 * @namespace
 *
 * @param {component} component any Component
 * @param {object} attributes to be applied to the component
 *
 * @return {htmlElement} The new element
 */
let ax = function ( component, attributes ) {

  let target

  if ( attributes ) {
    if ( ! ( component instanceof Array ) ) { component = [ component ] }
    component = { $nodes: component, ...attributes }
  }

  // let apply = () => {

    let element = ax.factory( component )

    if ( component.id ) {
      document.querySelector( '#' + component.id ).
        replaceWith( element )
    } else {
      document.body.appendChild( element )
    }

  // }
  //
  // document.addEventListener('DOMContentLoaded', apply )

  // apply()

}

/**
 * Extension namespace.
 * Extensions are installed here.
 *
 * @since 0.0.0
 * @namespace ax.extension
 *
 */
ax.extension = {}

// ax.extension.appkit.document.stylesheet.proxy.
// function = function( styles, options={} ) {
//
//   let a = ax.a
//   let x = ax.x
//
//   x.appkit.document.insert(
//     'head',
//     'style',
//     x.appkit.lib.style( styles, options.scope ),
//     { tag: options.styleTag }
//   )
//
//   return null
//
// }
//
//
// ax.style = function( style, options={} ) {
//
//   ax.insert(
//     'head',
//     'style',
//     style,
//     { tag: options.styleTag }
//   )
//
// }

ax.css = function ( styles, options={} ) {

  ax.insert(
    'head',
    'style',
    this.css.styles( styles ),
    { tag: options.styleTag }
  )

  return null

}

/**
 * Tag Generator namespace.
 * The Tag Generator creates arbitrary HTML elements.
 * It is instantiated as `ax.a`.
 *
 * @since 0.0.0
 * @namespace ax.tag
 *
 */
ax.tag = {}

ax.kebab = function ( string ) {

  // Convert string from camelCase to kebab-case
  return ( string[0].match(/[A-Z]/) ? '-' : '' ) + string.
    replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()

}

ax.insert = function(
  selector,
  type,
  content,
  options={}
) {
  let method = options.method || 'appendChild'
  var tag = document.createElement( type )
  Object.assign( tag, options.tag )
  var target = document.querySelector( selector )
  tag.innerHTML = content
  target[ method ]( tag )
}

/**
 * Throw an error.
 *
 * @since 0.0.0
 * @namespace ax.log.error
 *
 * @param {string} message
 *
 */
ax.throw = function( ...args ) {
  throw new Error( args )
}

// ax.script = function( script, options={} ) {
//
//   ax.insert(
//     'head',
//     'script',
//     script,
//     { tag: options.scriptTag }
//   )
//
// }

/**
 * Log a message.
 *
 * @since 0.0.0
 * @namespace ax.log
 *
 * @param {string} message
 *
 */
ax.log = ( ...args ) => {
  console.log.bind( console )( ...args )
  return null
}

/**
 * Component Factory.
 * The Component Factory turns Components into View Objects.
 *
 * @since 0.0.0
 * @namespace ax.factory
 *
 * @param {component} component
 *
 * @return {component} Being either an Element, Node or View Object.
 */
ax.factory = function( component ) {

  let is = ax.is
  let factory = ax.factory

  if ( is.null( component ) ) return null
  // if ( is.string( component ) ) return factory.text( component )
  if ( is.node( component ) ) return component
  if ( is.nodelist( component ) ) return factory.nodelist( component )
  if ( is.array( component ) ) return factory.array( component )
  if ( is.promise( component ) ) return factory.promise( component )
  if ( is.object( component ) ) return factory.object( component )
  if ( is.class( component ) )return factory.class( component )
  if ( is.tag( component ) )return factory.tag( component )
  if ( is.function( component ) ) return factory.function( component )
  if ( is.undefined( component ) ) factory.undefined()
  return factory.text( component )

}

/**
 * Type Is Checkers namespace.
 * Type Is Checkers check data types.
 *
 * @since 0.0.0
 * @namespace ax.is
 *
 */
ax.is = {}

/**
 * Log an info message.
 *
 * @since 0.0.0
 * @namespace ax.log.info
 *
 * @param {string} message
 *
 */
ax.log.info = ( ...args ) => {
  console.info.bind( console )( ...args )
}

/**
 * Log an error message.
 *
 * @since 0.0.0
 * @namespace ax.log.error
 *
 * @param {string} message
 *
 */
ax.log.error = ( ...args ) => {
  console.error.bind( console )( ...args )
}

/**
 * Log a warning.
 *
 * @since 0.0.0
 * @namespace ax.log.warn
 *
 * @param {string} message
 *
 */
ax.log.warn = ( ...args ) => {
  console.warn.bind( console )( ...args )
}

/**
 * Type Is Not Something.
 * Determines whether variable is not a type.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.not = new Proxy(
  {},
  {
    get: ( target, property, receiver ) => {

      if ( ax.is.function( ax.is[ property ] ) ) {
        return ( value ) => !ax.is[ property ]( value )
      } else {
        ax.log.error( `ax.is does not support .${ property }()` )
      }

    }
  }
)

/**
 * Type Is False Checker.
 * Determines whether variable is false.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.false = function ( variable ) {
  return variable === false
}

/**
 * Type Is Undefined Checker.
 * Determines whether variable is undefined.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.undefined = function ( variable ) {
  // debugger
  // return typeof variable == 'undefined'
  return variable === void 0
}

/**
 * Type Is Object Checker.
 * Determines whether variable is an object.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.object = function ( variable ) {
  return typeof variable === 'object'
}

/**
 * Type Is Promise Checker.
 * Determines whether variable is a Promise.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.promise = function ( variable ) {
  return variable instanceof Promise
}

/**
 * Type Is Null Checker.
 * Determines whether variable is null.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.null = function ( variable ) {
  return variable === null
}

/**
 * Type Is Tag Checker.
 * Determines whether variable is a Tag Generator Proxy function.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.tag = function ( variable ) {
  return '' + ax.a.tagProxyFunction === '' + variable
}

/**
 * Type Is Number Checker.
 * Determines whether variable is number.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.number = function ( variable ) {
  return typeof variable === 'number'
}

/**
 * Type Is NodeList Checker.
 * Determines whether variable is an HTML node list.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.nodelist = function ( variable ) {
  return variable instanceof NodeList
}

/**
 * Type Is Boolean Checker.
 * Determines whether variable is boolean.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.boolean = function ( variable ) {
  return typeof variable === boolean
}

/**
 * Type Is Array Checker.
 * Determines whether variable is an array.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.array = function ( variable ) {
  return variable instanceof Array
}

/**
 * Type Is Function Checker.
 * Determines whether variable is a function.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.function = function ( variable ) {
  return typeof variable === 'function'
}

/**
 * Type Is Class Checker.
 * Determines whether variable is a class.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.class = function ( variable ) {
  return this.function( variable ) && ( '' + variable ).slice(0,5) === 'class'
}

/**
 * Type Is Node Checker.
 * Determines whether variable is an HTML node.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.node = function ( variable ) {
  return variable instanceof Node
}

/**
 * Type Is String Checker.
 * Determines whether variable is a string.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.string = function ( variable ) {
  return typeof variable === 'string'
}

/**
 * Type Is True Checker.
 * Determines whether variable is true.
 *
 * @since 0.0.0
 *
 * @param variable
 *
 * @return {boolean}
 *
 */
ax.is.true = function ( variable ) {
  return variable === true
}

ax.x = ax.extension

ax.factory.undefined = function () {

  ax.throw( 'Component is undefined.' )

}

ax.factory.text = function ( component ) {

  return document.createTextNode( ' ' + component + ' ' )

}

ax.factory.object = function ( object ) {

  return this.element( {
    $tag: 'pre',
    $text: JSON.stringify( object, null, 2  )
  } )

}

ax.factory.promise = function ( component ) {

  // let output = function( args ) {
  //   if ( args.length === 1 ) {
  //     args = args[0]
  //   }
  //   return ax.factory( args )
  //   // if ( ax.is.string( args ) ) {
  //   //   return args
  //   // } else {
  //   //   return JSON.stringify( args, null, 2  )
  //   // }
  // }

  return this.element( {
    $init: (el) => {
      component.then(
        function( ...args ) { el.$nodes = ax.factory( args ) }
      ).catch(
        function( ...args ) { el.$nodes = ax.factory( args ) }
      )
    }
  } )

}

ax.factory.tag = function ( component ) {

  // A tag is an uncalled tag builder method.
  // e.g: a.br or a.hr

  return this.element( component() )

}

ax.factory.nodelist = function ( component ) {

  return this.element( { $nodes: Array.from( component ) } )

}

ax.factory.element = function ( properties ) {

  properties = { $tag: 'span', ...properties }
  let element = document.createElement( properties.$tag )
  element.$properties = properties

  return this.element.properties.init(
    this.element.properties( element ).$render()
  )

}

ax.factory.array = function ( component ) {

  return this.element( { $tag: 'div', $nodes: component } )

}

ax.factory.function = function ( component ) {

  const a = ax.a
  const x = ax.x

  return this( component( a,x ) )

}

ax.factory.class = function ( component ) {

  const a = ax.a
  const x = ax.x

  return this.element( new component( a,x ) )

}

/**
 * Tag Generator proxy namespace.
 *
 * @since 0.0.0
 * @namespace ax.tag.proxy
 *
 */
ax.tag.proxy = {}

ax.tag.collection = {}

ax.css.styles = function ( styles ) {

  if ( ax.is.string( styles ) ) {
    return styles
  } else {
    return this.styles.rules( styles )
  }

}

ax.factory.element.properties = function ( element ) {

  return  this.properties.render(
          this.properties.events(
          this.properties.accessors(
          this.properties.tools(
          this.properties.define( element ) ) ) ) )

}

// ax.factory.element.process = function ( element ) {
//
//   ax.factory.pipeline.forEach( function( pipelineFunction ) {
//     element.$properties = pipelineFunction( element.$properties )
//   } )
//
//   return  this.process.properties( element )
//
// }

ax.factory.element.
append = function ( element, component ) {

  let children = ax.factory( component )
  if ( ax.is.array( children ) ) {
    children.forEach( function ( child ) {
      element.appendChild( child )
    } )
  } else {
    element.appendChild( children )
  }

}

ax.tag.collection.proxy = () => new Proxy(
  ax.tag.collection.function,
  ax.tag.collection.shim
)

/**
 * Tag Generator proxy shim.
 * Creates arbitrary View Objects.
 * Intercepts get methods and returns a function that,
 * when called, returns a View Object with
 * the $tag property set to the method name for the get.
 *
 * @since 0.0.0
 * @namespace ax.tag.proxy
 *
 */
 ax.tag.proxy.shim = {
  get: ( target, property ) => {

//     if ( property === '$' ) {
// debugger
//       return ax.tag.collection.proxy()
//
//     } else

    if ( property === '$$' ) {

      return ax.tag.collection.proxy()

    } else {

      return function ( component=null, attributes={} ) {
        component = ax.tag.proxy.shim.component( component )
        attributes = ax.tag.proxy.shim.attributes( property, attributes )
        return ax.factory.element( { ...component, ...attributes } )
      }

    }
  }
}

/**
 * Tag Generator proxy function.
 * Accepts an HTML fragment and returns a Node or NodeList.
 *
 * @since 0.0.0
 * @namespace ax.tag.proxy
 *
 */
ax.tag.proxy.function = function( component ) {

  if ( ax.is.string( component) ) {
    let jig = document.createElement('div')
    jig.innerHTML = component
    return jig.childNodes
  } if ( ax.is.object( component) ) {
    return ax.factory.element( component )
  } else {
    ax.log.error( 'Component must be String or Object.' )
  }

}

ax.css.styles.rules = function( styleSpec, selectors=[] ) {

  if ( selectors[0] && selectors[0][0] == '@' ) {
    return ax.css.styles.rules.at( styleSpec, selectors )
  } else if ( ax.is.array( styleSpec ) ) {
    // debugger
    return "?"
  } else if ( ax.is.object( styleSpec ) ) {
    let result = ax.css.styles.rules.rule( styleSpec, selectors )
    Object.keys( styleSpec).forEach( function( selector ) {
      var selected = styleSpec[selector]
      selector.split(',').forEach( function( selectorPart ) {
        selectorPart = selectorPart.trim()
        // debugger
        result += ax.css.styles.rules( selected, selectors.concat( selectorPart ) )
      } )
    } )
    // ax.log( result )
    return result
  } else {
    return ''
  }


}

ax.factory.element.properties.accessors = function ( element ) {

  return  this.accessors.nodes(
          this.accessors.html(
          this.accessors.text(
          this.accessors.on(
          this.accessors.off(
          this.accessors.send(
          this.accessors.state( element ) ) ) ) ) ) )

}

ax.factory.element.properties.render = function ( element ) {

  let render = this.render

  element.$render = function () {

    if ( element.$properties.hasOwnProperty( '$text' ) ) {
      return render.text( element )
    } else if ( element.$properties.hasOwnProperty( '$html' ) ) {
      return render.html( element )
    } else if ( element.$properties.hasOwnProperty( '$nodes' ) ) {
      return render.nodes( element )
    } else {
      return element
    }

  }

  return element

}

ax.factory.element.properties.traverse = function( element, selector ) {

  if ( !element ) {
    return null
  } else if ( /^\s*\^/.test( selector ) ) {
    selector = selector.replace( /^\s*\^\s*/, '' )
    if ( selector ) {
      return element.closest( selector )
    } else {
      return element.parentElement
    }
  } else if ( /^\s*$/.test( selector ) ) {
    return element
  } else {
    return element.querySelector( selector )
  }

}

ax.factory.element.properties.init = function ( element ) {

  if ( ax.is.function( element.$properties.$init ) ) {
    element.appendChild( ax.factory.element( {
      $tag: 'script',
      type: 'text/javascript',
      $html:  '(function(){' +
                'let script=document.currentScript;' +
                'let element=script.parentElement;' +
                'script.remove();' +
                'element.$init( element, element.$state );' +
              '})()'
    } ) )
  }

  return element

}

ax.factory.element.properties.tools = function ( element ) {

  element.$ = this.traverse.$
  element.$$ = this.query.$$

  return element

}

ax.factory.element.properties.events = function ( element ) {

  if ( element.$properties.hasOwnProperty( '$on' ) ) {
    for ( let on in element.$properties.$on ) {
      element.addEventListener(
        on.split(':')[0],
        function(e) {
          element.$properties.$on[ on ] &&
          element.$properties.$on[ on ].
            call( this, e, element, element.$state )
        }
      )
    }
  }

  return element

}

ax.factory.element.properties.query = function( collection, pending=[] ) {

  return new Proxy(
    function () {},
    this.query.proxy.shim( collection, pending )
  )

}

ax.factory.element.properties.define = function ( element ) {

  for ( let property in element.$properties ) {
    if ( element.$properties.hasOwnProperty( property ) ) {
      if ( /[a-zA-Z]/.test( property[0] ) ) {

        let value = element.$properties[ property ]

        if ( ax.is.not.undefined( value ) ) {

          if ( property == 'data' ) {
            this.define.data( element, value )
          } else if ( property == 'style' ) {
            this.define.style( element, value )
          } else {
            this.define.attribute( element, property, value )
          }

        }

      } else {

        if (
          property != '$text' &&
          property != '$nodes' &&
          property != '$html' &&
          property != '$state' &&
          property != '$send' &&
          property != '$on' &&
          property != '$off'
        ) {
          element[ property ] = element.$properties[ property ]
        }

      }
    }
  }

  return element

}

ax.tag.collection.shim = {
 get: ( target, property ) => {

   return function( ...components ) {
     return components.map( function( component ) {
       return ax.a[ property ]( component )
     } )
   }

 }
}

ax.tag.collection.function = () => {}

ax.tag.proxy.shim.component = function ( component ) {

  let is = ax.is

  if ( is.node( component ) ) return { $nodes: [ component ] }
  if ( is.nodelist( component ) ) return { $nodes: [ Array.from( component ) ] }
  if ( is.array( component ) ) return { $nodes: component }
  if ( is.object( component ) ) return component
  if ( is.function( component ) ) return { $nodes: [ component ] }
  if ( is.undefined( component ) ) ax.factory.undefined()
  return { $text: component }

}

ax.tag.proxy.shim.attributes = function ( property, attributes ) {

  // if the property starts with a word, use the word as tag
  // if the property has a '#' word, use as id
  // if the property has '.' words, use as class
  // e.g. div#myTagId.btn.btn-primary

  let tag = ( property.match(/^([\w|-]+)/) || [] )[1]
  let id = ( property.match(/#([\w|-]+)/) || [] )[1]
  let klass = ( property.match(/\.([\.|\w|-]+)/) || [] )[1]

  if ( tag ) attributes.$tag = tag
  if ( id ) attributes.id = id
  if ( klass ) attributes.class = klass.replace( /\./g, ' ')

  return attributes

}

ax.a = new Proxy( ax.tag.proxy.function, ax.tag.proxy.shim )

ax.css.styles.rules.rule = function( object, selectors ) {

  var result = ''
  Object.keys( object ).forEach( function(property) {
    if ( !ax.is.object( object[property] ) ) {
      result += ('\t' + ax.kebab( property ) + ': ' + object[property] + ';\n')
    }
  } )

  if ( result === '' ) {
    return result
  } else {
    return selectors.join(' ').replace(/\s*&\s*/g, '') +
          ' {\n' + result + '}\n'
  }

}

ax.css.styles.rules.at = function( styleSpec, selectors ) {

  let atRule = selectors.shift()
  let rules = this.rules( styleSpec, selectors )
  rules = '\t' + rules.split('\n').join('\n\t')
  return `${ atRule } {\n${ rules }\n}\n\n`

}

/**
 * Writes an object's text content to its element
 *
 * @since 1.0.0
 *
 * @param {element} element An element with stale content.
 *
 * @return {element} The element with up-to-date content.
 */

ax.factory.element.properties.render.text = function ( element ) {

  // Get content from the element.
  let text = element.$text

  // Resolve content function, if there is one.
  if ( ax.is.function( text ) ) {
    text = text.bind( element )
    // if ( element.$properties.hasOwnProperty( '$state' ) ) {
    //   text = text( element, element.$state )
    // }
  }

  // Clear exisitng content
  while (element.childNodes.length ) {
    element.removeChild(element.lastChild);
  }

  // Add new content
  element.appendChild( document.createTextNode( text ) )

  return element

}

ax.factory.element.properties.render.html = function ( element ) {

  let html = element.$html

  if ( ax.is.function( html ) ) {
    html = html.bind( element )
    // html = html.call( element, element, element.$state )
  }

  element.innerHTML = html

  return element

}

/**
* Writes an object's nodes content to its element
*
* @since 1.0.0
*
* @param {element} element An element with stale content.
*
* @return {element} The element with up-to-date content.
*/

ax.factory.element.properties.render.
nodes = function ( element ) {

  // Get content from the element.
  let nodes = element.$nodes

  if ( ax.is.function( nodes ) ) {
    // if ( ax.is.tag( nodes ) ) { } else { }
    nodes = nodes.bind( element )
    if ( element.$properties.hasOwnProperty( '$state' ) ) {
      nodes = nodes( element, element.$state )
    }
  }

  // Clear existing content
  while ( element.firstChild ) {
    element.firstChild.remove()
  }

  // Add content
  if ( ax.is.array( nodes ) ) {
    nodes.forEach( function( node ) {
      node = ax.factory( node )
      if ( node != null ) element.appendChild( node )
    } )
  } else {
    let node = ax.factory( nodes )
    if ( node != null ) element.appendChild( node )
  }

  return element

}

ax.factory.element.properties.query.$$ = function( selector ) {

    return ax.factory.element.properties.query(
      Array.from( this.querySelectorAll( selector ) )
    )

}

ax.factory.element.properties.query.proxy = {}

ax.factory.element.properties.traverse.$ = function( ...selectors ) {
  let result = this
  selectors.forEach( function( selector ) {
    if ( ax.is.array( selector ) ) {
      result = result.$( ...selector )
    } else if ( /^\^\S*$/.test( selector ) ) {
      result = ax.factory.element.properties.traverse( result, selector )
    } else if ( /,\s*/.test( selector ) ) {
      let selectors = selector.split( /,\s*/ )
      let selected
      for ( let i in selectors ) {
        selected = ax.factory.element.properties.traverse( result, selectors[i] )
        if ( selected ) break
      }
      result = selected
    } else if ( /\^/.test( selector ) ) {
      selector = selector.split(/(\^\S*)/g)
      result = result.$( ...selector )
    } else {
      result = ax.factory.element.properties.traverse( result, selector )
    }
  } )
  return result
}

ax.factory.element.properties.accessors.text = function ( element ) {

  let accessors = this

  Object.defineProperty( element, '$text', {
    get : function () {
      // return accessors.text.query( element )
      return element.$properties.$text
    },
    set : function( text ) {
      accessors.text.set( element, text )
    }
  } )

  return element

}

ax.factory.element.properties.accessors.html = function ( element ) {

  let accessors = this

  Object.defineProperty( element, '$html', {
    get : function () {
      return element.$properties.$html
    },
    set : function( html ) {
      accessors.html.set( element, html )
    }
  } )

  return element

}

ax.factory.element.properties.accessors.state = function ( element ) {

  let accessors = this
// debugger
//   element.$$state = undefined
  // element.watch( '$$state', () => { debugger } )

  Object.defineProperty( element, '$state', {
    get : function () {
      // return accessors.state.query( element )
      return element.$properties.$state
    },
    set : function( state ) {
      accessors.state.set( element, state )
    }
  } )

  return element

}

ax.factory.element.properties.accessors.send = function ( element ) {

  element.$send = function( type, options={} ) {
    return element.dispatchEvent(
      new CustomEvent( type, {
        detail: options.detail || {},
        bubbles: options.bubbles == false ? false : true,
        cancelable: options.cancelable == false ? false : true
      } )
    )
  }

  return element

}

ax.factory.element.properties.accessors.on = function ( element ) {

  let accessors = this

  Object.defineProperty( element, '$on', {
    get : function () {
      // return accessors.on.query( element )
      return element.$properties.$on
    },
    set : function( on ) {
      element.addEventListener(
        on.split(':')[0],
        function(e) {
          element.$properties.$on[ on ] &&
          element.$properties.$on[ on ].
            call( this, e, element, element.$state )
        }
      )
    }
  } )

  return element

}

ax.factory.element.properties.accessors.nodes = function ( element ) {

  let accessors = this

  Object.defineProperty( element, '$nodes', {
    get : function () {
      // return accessors.nodes.query( element )
      return element.$properties.$nodes
    },
    set : function( nodes ) {
      accessors.nodes.set( element, nodes )
    }
  } )

  return element

}

ax.factory.element.properties.accessors.off = function ( element ) {

  element.$off = function ( event ) {
    element.removeEventListener(
      event.split(':')[0],
      element.$properties.$on[ event ]
    )
  }

  return element

}

// ax.factory.element.properties.events.$on = function ( element ) {
//
//   if ( element.$properties.hasOwnProperty( '$on' ) ) {
//     for ( let event in element.$properties.$on ) {
//       element.addEventListener(
//         event.split(':')[0],
//         function(e) {
//           element.$properties.$on[ event ] &&
//           element.$properties.$on[ event ].
//             call( this, e, element, element.$state )
//         }
//       )
//     }
//   }
//
//   return element
//
// }

ax.factory.element.properties.define.
style = function ( element, style ) {

  if ( ax.is.object( style ) ) {
    let result = ''
    Object.keys( style ).forEach( function( key ) {
      let kebab = ax.kebab( key )
      result += ( kebab + ': ' + style[key] + '; ')
    }.bind( this ) )
    this.attribute( element, 'style', result )
  } else {
    this.attribute( element, 'style', style )
  }

}

ax.factory.element.properties.define.
attribute = function ( element, property, value ) {

  let attribute = document.createAttribute( property )
  attribute.value = value
  element.setAttributeNode( attribute )

}

ax.factory.element.properties.define.data = function ( element, data ) {

  if ( ax.is.object( data ) ) {
    this.data.attribute( element, [ 'data' ], data )
  } else {
    this.attribute( element, 'data', value )
  }

}

ax.factory.element.properties.query.proxy.shim = function( collection, pending ) {

  return {
    get: ax.factory.element.properties.query.proxy.shim.get( collection, pending ),
    set: ax.factory.element.properties.query.proxy.shim.set( collection, pending ),
    apply: ax.factory.element.properties.query.proxy.shim.apply( collection, pending ),
  }

}

ax.factory.element.properties.accessors.state.
set = function ( element, state ) {

  if ( element.$properties.$state === state ) return

  element.$properties.$state = state

  if ( element.$properties.$update ) {
    element.$properties.$update.
      call( element, element, state ) &&
    element.$render()
  } else {
    element.$render()
  }

  return element

}

// ax.factory.element.properties.accessors.state.
// query = function ( element ) {
//
//
//
// //   let state = this
// //
// //   return function() {
// // debugger
// //     if ( arguments.length === 1 ) {
// //       return state.set( element, arguments[0] )
// //     } else if ( arguments.length ) {
// //       return state.set( element, arguments )
// //     } else {
// //       return element.$properties.$state
// //     }
// //   }
// }

ax.factory.element.properties.accessors.text.
set = function ( element, text ) {

  delete element.$properties.$html
  delete element.$properties.$nodes
  element.$properties.$text = text
  element.$render()
  
  return element

}

// ax.factory.element.properties.accessors.text.
// query = function ( element ) {
//
//   let text = this
//
//   return function() {
//
//     if ( arguments.length === 1 ) {
//       return text.set( element, arguments[0] )
//     } else if ( arguments.length ) {
//       return text.set( element, arguments.join() )
//     } else {
//       return element.$properties.$text
//     }
//   }
// }

ax.factory.element.properties.accessors.on.
set = function ( element, on ) {

  for ( let event in on ) {
    element.$off( event )
    element.$properties.$on[ event ] = on[ event ]
    element.addEventListener(
      event.split(':')[0],
      element.$properties.$on[ event ]
    )
  }
  
  return element

}

// ax.factory.element.properties.accessors.on.
// query = function ( element ) {
//
//   let on = this
//
//   return function() {
//
//     if ( arguments.length === 1 ) {
//       return on.set( element, arguments[0] )
//     } else if ( arguments.length ) {
//       return on.set( element, arguments.join() )
//     } else {
//       return element.$properties.$on
//     }
//   }
// }

ax.factory.element.properties.accessors.nodes.
set = function ( element, nodes ) {

  delete element.$properties.$text
  delete element.$properties.$html
  element.$properties.$nodes = nodes
  element.$render()

  return element

}

// ax.factory.element.properties.accessors.nodes.
// query = function ( element ) {
//
//   let nodes = this
//
//   return function() {
//
//     if ( arguments.length === 1 ) {
//       return nodes.set( element, arguments[0] )
//     } else if ( arguments.length ) {
//       return nodes.set( element, arguments )
//     } else {
//       return element.$properties.$nodes
//     }
//   }
// }

ax.factory.element.properties.accessors.html.
set = function ( element, html ) {

  delete element.$properties.$text
  delete element.$properties.$nodes
  element.$properties.$html = html
  element.$render()

  return element

}

// ax.factory.element.properties.accessors.html.
// query = function ( element ) {
//
//   let html = this
//
//   return function() {
//
//     if ( arguments.length === 1 ) {
//       return html.set( element, arguments[0] )
//     } else if ( arguments.length ) {
//       return html.set( element, arguments.join() )
//     } else {
//       return element.$properties.$html
//     }
//
//   }
//
// }

ax.factory.element.properties.define.data.
attribute = function ( element, keys, value ) {

  let context = ax.factory.element.properties.define

  if ( ax.is.string( value ) ) {
    let kebab = keys.join('-')
    context.attribute( element, kebab, value )
  } else {
    Object.keys( value ).forEach( function( key ) {
      let kebab = context.kebab( key )
      this.attribute( element, keys.concat( key ), value[ key ] )
    }.bind( this ) )
  }

}

ax.factory.element.properties.query.proxy.shim.get = function( collection, pending ) {

  return function( target, property, receiver ) {

    if ( /^\d+$/.test( property ) ) return collection[ property ]
    if ( /^\$\$$/.test( property ) ) return collection
    if ( /^toArray$/.test( property ) ) return () => collection
    if ( /^toString$/.test( property ) ) return () => collection.toString

    collection.forEach( function( node, i ) {
      let result = node[ property ]
      if ( ax.is.undefined( result ) ) {
        // debugger
        ax.log.error( `Ax query for ${ property } is undefined for:`, node )
      } else if ( ax.is.function( result ) ) {
        pending[i] = result
      } else {
        collection[i] = result
      }
    } )

    return ax.factory.element.properties.query( collection, pending )

  }

}

ax.factory.element.properties.query.proxy.shim.set =
function( collection, pending ) {

  return function( target, property, value, receiver ) {

    collection.forEach( function( node ) {
      node[ property ] = value
    } )

    return true

  }

}

ax.factory.element.properties.query.proxy.shim.apply = function( collection, pending ) {

  return function( target, receiver, args ) {
    // if ( pending.length ) {
      collection.forEach( function( node, i ) {
        collection[i] = pending[i].call( node, ...args )
      } )
      return ax.factory.element.properties.query( collection )
    // }
    // else {
    // }
    // return collection

  }

}
