import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { renderAdaptor, isProduction } from '../../utils';

const warningMsg = (msg) => {
  if (isProduction()) {
    console.error(msg);
  } else {
    throw new Error(msg);
  }
}
export default class DemoItem extends Component {
  static propTypes = {
    id: PropTypes.string,
    height: PropTypes.number,
    background: PropTypes.string,
    node: PropTypes.object,
    adaptor: PropTypes.object,
  }

  componentDidMount() {
    const { adaptor } = this.props;
    const dom = findDOMNode(this);
    if (dom && dom.firstElementChild) {
      const element = dom.firstElementChild;
      if (!element.hasAttribute('data-fusioncool')) {
        warningMsg(`[ERROR]: ${adaptor.name} 需要支持透传属性 [data-XXX]，否则 Fusion Cool 无法正常渲染`);
      } else if (element.style.direction !== 'ltr') {
        warningMsg(`[ERROR]: ${adaptor.name} 需要支持透传属性 [style]，否则 Fusion Cool 无法正常渲染`);
        element.style.direction = '';
      }
    } else {
      warningMsg(`[ERROR]: ${adaptor.name} DOM 节点不能使用 Portal挂载到其他地方奥`);
    }
  }

  render() {
    const { id, height, background, node, adaptor } = this.props;

    if (!node) return null;
    const demoContent = renderAdaptor(adaptor, {
      ...node.props,
      style: {
        direction: 'ltr'
      },
      'data-fusioncool': 'test fusion cool render',
    });

    return (
      <div
        className="demo-item"
        data-demo={JSON.stringify({
          id,
          height,
          background,
          node,
        })}
        style={{
          height: height || 'auto',
          background: background || '',
        }}
      >
        {demoContent}
      </div>
    );
  }
}
