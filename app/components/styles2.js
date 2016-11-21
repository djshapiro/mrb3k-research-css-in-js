const styles = {
  hidden: {
    display: 'none',
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
  todoappH1: {
    position: 'absolute',
    top: -155,
    width: '100%',
    fontSize: 100,
    fontWeight: '100',
    textAlign: 'center',
    color: 'rgba(175, 47, 47, 0.15)',
    textRendering: 'optimizeLegibility',
  },
  newTodoBase: {
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
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  get edit() {
    return this.newTodoBase;
  },
  get newTodo() {
    return Object.assign({}, this.newTodoBase, {
      padding: '16px 16px 16px 60px',
      border: 'none',
      background: 'rgba(0, 0, 0, 0.003)',
      boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)',
    });
  },
  main: {
    position: 'relative',
    zIndex: 2,
    borderTop: '1px solid #e6e6e6',
  },
  toggleAll: {
    position: 'absolute',
    top: -66,
    left: -1,
    width: 49,
    height: 60,
    textAlign: 'center',
    border: 'none',
    '@media screen and (-webkit-min-device-pixel-ratio:0)': {
      background: 'none',
      WebkitAppearance: 'none',
      appearance: 'none',
    },
  },
  toggleAllLabel: {
    display: 'none',
  },
  toggleAllBefore: {
    position: 'absolute',
    top: -50,
    left: -12,
    width: 60,
    height: 34,
    textAlign: 'center',
    border: 'none',
    fontSize: 22,
    color: '#e6e6e6',
    transform: 'rotate(90deg)',
  },
  toggleAllCheckedBefore: {
    color: '#737373',
  },
  todoList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  todoListLi: {
    position: 'relative',
    fontSize: 24,
    borderBottom: '1px solid #ededed',
    ':hover': {}, // tell radium to track this state, used below
  },
  todoListLiLastChild: {
    borderBottom: 'none',
  },
  todoListLiEditing: {
    borderBottom: 'none',
    padding: 0,
  },
  todoListLiEditingEdit: {
    display: 'block',
    width: 506,
    padding: '12px 16px',
    margin: '0 0 0 43px',
  },
  todoListLiEditingView: {
    display: 'none',
  },
  todoListLiToggle: {
    textAlign: 'center',
    width: 40,
    /* auto, since non-WebKit browsers doesn't support input styling */
    height: 'auto',
    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 'auto 0',
    border: 'none', /* Mobile Safari */
    appearance: 'none',
    WebkitAppearance: 'none',
    '@media screen and (-webkit-min-device-pixel-ratio:0)': {
      background: 'none',
      height: 40,
    },
  },
  get todoListLiToggleAfter() {
    return Object.assign(
      {},
      this.todoListLiToggle,
      {
        content: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\')',
      }
    );
  },
  get todoListLiToggleAfterChecked() {
    return Object.assign(
      {},
      this.todoListLiToggle,
      {
        content: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\')',
      }
    );
  },
  todoListLiLabel: {
    wordBreak: 'break-all',
    padding: '15px 60px 15px 15px',
    marginLeft: 45,
    display: 'block',
    lineHeight: '1.2em',
    transition: 'color 0.4s',
  },
  todoListLiCompletedLabel: {
    color: '#d9d9d9',
    textDecoration: 'line-through',
  },
  todoListLiDestroy: {
    display: 'none',
    position: 'absolute',
    top: 0,
    right: 10,
    bottom: 0,
    width: 40,
    height: 40,
    marginTop: 'auto',
    marginRight: 0,
    marginBottom: 11,
    marginLeft: 0,
    fontSize: 30,
    color: '#cc9a9a',
    transition: 'color 0.2s ease-out',
    ':hover': {
      color: '#af5b5e',
    },
  },
  todoListLiDestroyHover: {
    display: 'block',
  },
  todoListLiEdit: {
    display: 'none',
  },
  todoListLiEditingLastChild: {
    marginBottom: -1,
  },
  footer: {
    color: '#777',
    padding: '10px 15px',
    height: 20,
    textAlign: 'center',
    borderTop: '1px solid #e6e6e6',
    boxShadow: `
      0 1px 1px rgba(0, 0, 0, 0.2),
      0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2),
      0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2)
    `,
  },
  footerBefore: {
    content: '',
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    height: 50,
    overflow: 'hidden',
  },
  todoCount: {
    float: 'left',
    textAlign: 'left',
  },
  todoCountStrong: {
    fontWeight: 300,
  },
  filters: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    position: 'absolute',
    right: 0,
    left: 0,
  },
  filtersLi: {
    display: 'inline',
  },
  filtersLiA: {
    color: 'inherit',
    margin: 3,
    padding: '3px 7px',
    textDecoration: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: 3,
    ':hover': {
      borderColor: 'rgba(175, 47, 47, 0.1)',
    },
  },
  filtersLiASelected: {
    borderColor: 'rgba(175, 47, 47, 0.2)',
  },
  clearCompleted: {
    float: 'right',
    position: 'relative',
    lineHeight: '20px',
    textDecoration: 'none',
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  info: {
    margin: '65px auto 0',
    color: '#bfbfbf',
    fontSize: 10,
    textShadow: '0 1px 0 rgba(255, 255, 255, 0.5)',
    textAlign: 'center',
  },
  infoP: {
    lineHeight: 1,
  },
  infoA: {
    color: 'inherit',
    textDecoration: 'none',
    fontWeight: 400,
    ':hover': {
      textDecoration: 'underline',
    },
  },

};

export default styles;
