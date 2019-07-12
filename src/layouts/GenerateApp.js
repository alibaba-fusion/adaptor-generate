import React, { Component } from 'react';
import Panel from './Panel';
import StyledApp from './StyledApp';
import { STATE_MARK, getDefaultProps } from '@alifd/adaptor-helper';

export default (DemoView) => {
  return class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        demos: [],
        cools: [],
      };
    }

    handleDemoInit = (demos) => {
      this.setState({
        demos,
        cools: demos.filter(({ node }) => {
          const { props } = node;
          const { shape, size, state, data } = props;
          const defaultProps = getDefaultProps(DemoView.Adaptor, shape);
          if (defaultProps.size && defaultProps.size !== size) return false;
          if (defaultProps.state) {
            if (defaultProps.state !== state) return false;
          } else if (data && STATE_MARK[data.substring(0, 1)]) {
            return false;
          }

          return true;
        }),
      });
    }

    render() {
      const { cools } = this.state;

      return (
        <StyledApp>
          <div className="app-container">
            <DemoView onDemoInit={this.handleDemoInit} />
          </div>
          <div className="app-tools">
            <Panel cools={cools} Adaptor={DemoView.Adaptor} componentName={DemoView.componentName} />
          </div>
        </StyledApp>
      );
    }
  }
};
