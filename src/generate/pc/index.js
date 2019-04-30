import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { normalizeAdaptor, generateDemos, findProp  } from '@alifd/adaptor-helper';
import StyledContainer from './style-container';
import DemoSection from './DemoSection';

export default (Adaptor) => {
  Adaptor = normalizeAdaptor(Adaptor);
  const demos = generateDemos(Adaptor);

  return class DemoView extends Component {
    static componentName = Adaptor.name;
    static Adaptor = Adaptor;

    static propTypes = {
      demos: PropTypes.array,
      onDemoInit: PropTypes.func,
    }

    constructor(props) {
      super(props);

      const filter = {};

      Adaptor.shape.forEach(({ value }) => {
        filter[value] = {};
        const { options } = Adaptor.content(value);
        options.forEach(({ name, default: defaultValue }) => {
          filter[value][name] = defaultValue;
        });
      });

      this.state = {
        demos: props.demos && props.demos.length > 0 ? props.demos : demos,
        activeId: '',
        filter,
      };

      if (!props.demos || props.demos.length === 0) {
        props.onDemoInit && props.onDemoInit(demos);
      }
    }

    static getDerivedStateFromProps(props) {
      if (props.demos) {
        return {
          demos: props.demos,
        };
      }

      return null;
    }

    changeActiveId = (id) => {
      this.setState({
        activeId: id,
      });
    }

    changeFilter = (shape, name, value) => {
      this.setState({
        filter: {
          ...this.state.filter,
          [shape]: {
            ...this.state.filter[shape],
            [name]: value,
          },
        },
      });
    }

    createContentFilter = (shape) => {
      const { options } = Adaptor.content(shape);
      if (!options || options.length === 0) return null;
      const map = this.state.filter[shape];
      return (
        <ul className="demo-content-filter">
          {
            options.map(({ name, label, options: op }) => {
              return (
                <li key={name}>
                  <span>{label}</span>
                  {
                    op.map(item => (
                      <label key={item.value}>
                        <input type="radio" defaultChecked={map[name] === item.value} onChange={() => this.changeFilter(shape, name, item.value)} name={[shape, name].join('_')} value={item.value} />
                        {item.label}
                      </label>
                    ))
                  }
                </li>
              );
            })
          }
        </ul>
      );
    }

    generateDemos () {
      const shapes = Adaptor.shape;
      return shapes.map(({ label, value }) => {
        const { props } = Adaptor.editor(value);
        const levelProp = findProp('level', props);
        const { transform } = Adaptor.content(value);

        const renderDemos = this.state.demos.filter(
          ({ node }) => node.props.shape === value
        ).map((item) => {
          return {
            ...item,
            node: {
              ...item.node,
              props: transform ? transform(item.node.props, this.state.filter[value]) : item.node.props,
            },
          };
        });

        return (
          <div className="demo-shape" key={value}>
            <div className="demo-header">
              {label}
            </div>
            {this.createContentFilter(value)}
            {
              levelProp ?
                levelProp.options.map(
                  ({ label, value: level }) => <DemoSection key={level} levelName={label} demos={renderDemos.filter(({ node }) => node.props.level === level)} adaptor={Adaptor} shape={value} />
                ) :
                <DemoSection key="all" demos={renderDemos} adaptor={Adaptor} shape={value} />
            }
          </div>
        );
      });
    }

    render() {

      return (
        <StyledContainer>
          {this.generateDemos()}
        </StyledContainer>
      );
    }
  }
};
