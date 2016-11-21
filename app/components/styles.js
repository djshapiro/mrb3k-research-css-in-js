const styles = {
  main: {
    position: 'relative',
    zIndex: 2,
    borderTop: '1px solid #e6e6e6',
  },
  toggleAll: {
    position: 'absolute',
    top: -55,
    left: -12,
    width: 60,
    height: 34,
    textAlign: 'center',
    border: 'none', /* Mobile Safari */
  },
  toggleAllBefore: {
    content: '❯',
    fontSize: 22,
    color: '#e6e6e6',
    padding: '10px 27px 10px 27px',
  },
  todoapp: {
    background: '#fff',
    margin: '130px 0 40px 0',
    position: 'relative',
    boxShadow: `
      0 2px 4px 0 rgba(0, 0, 0, 0.2),
      0 25px 50px 0 rgba(0, 0, 0, 0.1)
    `,
  },
  h1: {
    position: 'absolute',
    top: -155,
    width: '100%',
    fontSize: 100,
    fontWeight: 100,
    textAlign: 'center',
    color: 'rgba(175, 47, 47, 0.15)',
    '-webkit-text-rendering': 'optimizeLegibility',
    '-moz-text-rendering': 'optimizeLegibility',
    textRendering: 'optimizeLegibility',
  },
  edit: {
    position: 'relative',
    margin: 0,
    width: '100%',
    fontSize: 24,
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    lineHeight: '1.4em',
    color: 'inherit',
    padding: 6,
    border: '1px solid #999',
    boxShadow: 'inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2)',
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  get newTodo() {
    return Object.assign({}, this.edit, {
      padding: '16px 16px 16px 60px',
      border: 'none',
      background: 'rgba(0, 0, 0, 0.003)',
      boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)',
    });
  },
  todoList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  todoListItem: {
    position: 'relative',
    fontSize: 24,
    borderBottom: '1px solid #ededed',
  },
  get todoListItemEditing() {
    return Object.assign({}, this.todoListItem, {
      borderBottom: 'none',
      padding: 0,
    });
  },
  todoListItemToggle: {
    textAlign: 'center',
    width: 40,
    /* auto, since non-WebKit browsers doesn't support input styling */
    height: 'auto',
    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 'auto 0',
    border: 'none', /* Mobile Safari */
    '-webkit-appearance': 'none',
    appearance: 'none',
  },
  toggleAfter: {
    content: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\')',
  },
  todoListLabel: {
    wordBreak: 'break-all',
    padding: '15px 60px 15px 15px',
    marginLeft: 45,
    display: 'block',
    lineHeight: '1.2em',
    transition: 'color 0.4s',
  },
  btnDestroy: {
    display: 'none',
    position: 'absolute',
    top: 0,
    right: 10,
    bottom: 0,
    width: 40,
    height: 40,
    margin: 'auto 0',
    fontSize: 30,
    color: '#cc9a9a',
    marginBottom: 11,
    transition: 'color 0.2s ease-out',
    ':hover': {
      color: '#af5b5e',
    },
  },
};

export default styles;
