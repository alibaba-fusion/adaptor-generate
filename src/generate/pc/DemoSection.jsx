import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findProp, getStates, filterDemoState, findOptionLabel } from '@alifd/adaptor-helper';
import DemoItem from './DemoItem';

export default class DemoSection extends Component {
  static propTypes = {
    adaptor:  PropTypes.object,
    shape: PropTypes.string,
    demos: PropTypes.array,
    levelName: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static getDerivedStateFromProps (props) {
    const { adaptor, shape } = props;
    const { props: editorProps, data: editorDataOptions } = adaptor.editor(shape);
    const { options: levels = []} = findProp('level', editorProps) || {};
    const { options: sizes = []} = findProp('size', editorProps) || {};

    return {
      levels,
      sizes,
      states: getStates(editorDataOptions, editorProps),
      editorProps,
    };
  }

  getBackground = (demos = []) => {
    const background = demos.length > 0 ? demos[0].background : '';
    return demos.filter((demo) => demo.background === background).length === demos.length ? background : '';
  }

  render () {
    const { levelName, demos, adaptor } = this.props;
    const { sizes, editorProps, states } = this.state;

    const sizeProp = findProp('size', editorProps);

    return (
      <div className="demo-section">
        {
          levelName ? (
            <div className="demo-section-header">{levelName}</div>
          ) : null
        }
        <div className="demo-body" style={{background: this.getBackground(demos)}}>
          <table>
            <tbody>
              {
                sizes.length > 0 ? (
                  <tr className="demo-head">
                    <td></td>
                    {
                      sizes.map(({ label, value }) => <td key={value}>{findOptionLabel(value, 'size', editorProps)}</td>)
                    }
                  </tr>
                ) : null
              }
              {
                states.map((state) => {
                  return (
                    <tr className="demo-group" key={state}>
                      <td className="label">
                        <span>{state}</span>
                      </td>
                      {
                        (sizes.length > 0 ? sizes : ['medium']).map(({ label, value}, index) => {
                          const demo = demos.filter(filterDemoState(state))
                            .find(({ node }) => {
                              const { props = {} } = (node || {});
                              if (sizeProp && value !== props.size) return false;
                              return true;
                            });
                          if (!demo) return null;
                          return (
                            <td className="wrap" key={index}>
                              <DemoItem {...demo} adaptor={adaptor} />
                            </td>
                          )
                        })
                      }
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
