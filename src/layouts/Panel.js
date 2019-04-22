import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CoolEditor from './CoolEditor';

export default class ConfigPanel extends Component {
  static propTypes = {
    Adaptor: PropTypes.object,
    cools: PropTypes.array,
  }

  render() {
    const { Adaptor, cools } = this.props;

    return (
      <div className="config-panel">
        <div className="config-panel-header">
          <div className="config-tabs">
            <div  className="config-tab active">
              Cool
            </div>
          </div>
        </div>
        <div className="config-panel-content" onDragEnter={this.handleDragEnter}>
          { Adaptor && cools && cools.length > 0 && <CoolEditor Adaptor={Adaptor} cools={cools} /> }
        </div>
      </div>
    );
  }
}
