import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { renderAdaptor } from '../../utils';

export default class DemoItem extends Component {
  static propTypes = {
    id: PropTypes.string,
    height: PropTypes.number,
    background: PropTypes.string,
    node: PropTypes.object,
    adaptor: PropTypes.object,
  }

  render() {
    const { id, height, background, node, adaptor } = this.props;

    if (!node) return null;
    const demoContent = renderAdaptor(adaptor, {
      ...node.props,
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
