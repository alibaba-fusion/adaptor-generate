import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import { renderAdaptor } from '../../utils';

export default class DemoItem extends Component {
  static propTypes = {
    id: PropTypes.string,
    height: PropTypes.number,
    background: PropTypes.string,
    node: PropTypes.object,
    adaptor: PropTypes.object,
  }

  static contextType = Context;

  render() {
    const { id, height, background, node, adaptor } = this.props;
    const { activeId, changeActiveId } = this.context;

    if (!node) return null;
    const demoContent = renderAdaptor(adaptor, {
      ...node.props,
    });

    return (
      <div
        className={`demo-item ${id === activeId ? 'active' : ''}`}
        data-demo={JSON.stringify({
          id,
          height,
          background,
          node,
        })}
        onClick={() => changeActiveId && changeActiveId(id)}
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
