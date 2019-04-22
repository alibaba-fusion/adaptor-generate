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
