export const initDemo = (compName) => {
  const componentName = firstLowerCase(compName);
  window.compName = componentName;

  const parent = window.parent;

  if (parent !== window) {
    parent.postMessage({
      from: 'demo',
      type: 'loaded',
      body: '',
      compName: componentName,
    }, '*');
  }

  window.addEventListener('message', ({origin, data}) => {
    if (origin && origin.indexOf('fusion') !== -1) {
      const { from = '', type = '' } = (data || {});
      if (from !== 'fusion') return;
      switch (type) {
        case 'stylesheet':
          const { stylesheets = []} = data;
          document.querySelectorAll('[data-theme-style]').forEach(element => element.parentNode.removeChild(element));
          stylesheets.forEach((url) => {
            const stylesheet = document.createElement('link');
            stylesheet.setAttribute('rel', 'stylesheet');
            stylesheet.setAttribute('href', url);
            stylesheet.setAttribute('data-theme-style', true);
            document.head.appendChild(stylesheet);
          });
          return;
        case 'change_background':
          const { background = '' } = data;
          document.body.style.background = background;
          return;
        default: break;
      }
    }
  });
};

export const firstLowerCase = (str) => str.replace(/\B([A-Z])/g, "-$1").toLowerCase();

export const renderAdaptor = (Adaptor, props = {}) => {
  Object.keys(props).forEach((key) => {
    if (typeof props[key] === 'object' && !!props[key].adaptor) {
      const name = props[key].adaptor;
      const p = props[key].props;
      if (typeof window !== 'undefined' && window.adaptors && window.adaptors[name]) {
        props[key] = renderAdaptor(window.adaptors[name], p);
      } else {
        props[key] = React.createElement(name, p);
      }
    }
  });

  return Adaptor.adaptor(props);
};
