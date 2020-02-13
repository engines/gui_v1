ax.css( {
  
  '|appkit-form-control .error': {
    color: 'red',
    marginTop: '0.5rem',
  },
  '|appkit-form-nest-item': {
    // display: 'block',
    padding: '0.5rem',
  },
  '|appkit-form-nest': {
    // display: 'block',
    '.table-sm': {
      td: { padding: '0.125rem', },
      th: { padding: '0.125rem', fontWeight: 'normal' },
    },
  },

  '|appkit-form-nest-item:hover': {
    boxShadow: 'inset 0px 0px 2px #007bff',
  },
  '|appkit-form-nest-item[draggable]': {
    boxShadow: 'inset 0px 0px 2px #ffc107',
    cursor: 'grab',
  },
  '|appkit-form-nest-item[draggable]:active': {
    cursor: 'grabbing',
  },

  'option[disabled]': {
    color: 'lightgrey',
  },
  '|appkit-form-multiselect-selected': {
    border: '1px solid #ced4da',
    borderTop: 'none',
    padding: '0.375rem 0.74rem',
  },


} )
