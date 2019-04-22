import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CoolEditor from '../components/CoolEditor';
import { Types, getDefaultProps } from '@alifd/adaptor-helper';
import StyledEditor from './StyledEditor';

const StyledDemo = styled.div`
  height: ${p => (p.height ? `${p.height + 32}px` : 'auto')};
  padding: 16px;
  background: ${p => p.background};
  line-height: 1.5;
  font-size: 16px;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
  }
`;

export default class DemoEditor extends Component {
  static propTypes = {
    Adaptor: PropTypes.object,
    demo: PropTypes.object,
  };

  constructor(props) {
    super(props);
    const { demo } = props;
    if (!demo.node) {
      demo.node = {
        adaptor: props.Adaptor.name,
        props: getDefaultProps(props.Adaptor, props.Adaptor.shape[0].value),
      };
    }
    this.state = {
      demo,
    };
  }

  getEditor = () => {
    const { demo } = this.state;
    const { Adaptor } = this.props;
    if (!Adaptor) return null;

    const shape = (demo && demo.node && demo.node.props && demo.node.props && demo.node.props.shape) || Adaptor.shape[0].value;

    return Adaptor.editor(shape);
  }

  handlePropsChange = (name, value) => {
    const { demo } = this.state;
    const { Adaptor } = this.props;

    if (name === 'shape') {
      demo.node.props = getDefaultProps(Adaptor, value);
    }

    this.setState({
      demo: {
        ...demo,
        node: {
          ...demo.node,
          props: {
            ...demo.node.props,
            [name]: value,
          },
        },
      },
    });
  }

  handleDemoChange = (name, value) => {
    const { demo } = this.state;

    this.setState({
      demo: {
        ...demo,
        [name]: value,
      },
    });
  }

  createEditorItems() {
    const { demo } = this.state;
    const { Adaptor } = this.props;
    const editor = this.getEditor();

    if (!editor) return null;

    const propTypes = editor.props;
    const result = [];

    if (Adaptor.shape.length > 1) {
      result.push((
        <div key="shape" className="form-control">
          <span className="form-label">Shape </span>
          <div className="form-input">
            <select value={demo.node.props.shape} onChange={(e) => this.handlePropsChange('shape', e.target.value)}>
              {
                Adaptor.shape.map(({ label: display, value: v }) => <option key={v} value={v}>{display}</option>)
              }
            </select>
          </div>
        </div>
      ));
    }

    propTypes.forEach(({ name, label, type, options }) => {
      const value = demo.node.props[name];
      let inputNode;
      switch (type) {
        case Types.string:
          inputNode = (
            <div className="form-input">
              <input value={value} onChange={(e) => this.handlePropsChange(name, e.target.value)} type="text" />
            </div>
          );
          break;
        case Types.number:
          inputNode = (
            <div className="form-input">
              <input value={value} onChange={(e) => this.handlePropsChange(name, e.target.value)} type="number" />
            </div>
          );
          break;
        case Types.enum:
          inputNode = (
            <div className="form-input">
              <select value={value} onChange={(e) => this.handlePropsChange(name, e.target.value)}>
                {
                  options.map(({ label: display, value: v }) => <option key={v} value={v}>{display}</option>)
                }
              </select>
            </div>
          );
          break;
        case Types.bool:
          inputNode = (
            <div className="form-input">
              <input type="radio" onChange={(e) => this.handlePropsChange(name, e.target.checked)} name={name} checked={value} id={`${name}_yes`} value="yes" />
              <label htmlFor={`${name}_yes`}>Yes</label>
              <input type="radio" onChange={(e) => this.handlePropsChange(name, !e.target.checked)} name={name} checked={!value} id={`${name}_no`} value="no" />
              <label htmlFor={`${name}_no`}>No</label>
            </div>
          );
          break;
        default: break;
      }

      result.push((
        <div key={name} className="form-control">
          <span className="form-label">{label} </span>
          {inputNode}
        </div>
      ));
    });


    return result;
  }

  createPreviewDemo() {
    const { demo } = this.state;
    const { Adaptor } = this.props;
    return (
      <StyledDemo height={demo.height} background={demo.background}>
        {Adaptor.adaptor(demo.node.props)}
      </StyledDemo>
    );
  }

  render() {
    const { demo } = this.state;
    const editor = this.getEditor();
    return (
      <div>
        <StyledEditor>
          <div className="editor-header">Demo</div>
          <div className="editor-content">
            <div className="form-control">
              <span className="form-label">Height: </span>
              <div className="form-input">
                <input value={demo.height || 'auto'} onChange={(e) => this.handleDemoChange('height', Number(e.target.value) || 0)} />
              </div>
            </div>
            <div className="form-control">
              <span className="form-label">Background: </span>
              <div className="form-input">
                <input value={demo.background || 'transparent'} onChange={(e) => this.handleDemoChange('background', e.target.value)} />
              </div>
            </div>
          </div>
          <div className="editor-header">Options</div>
          <div className="editor-content">
            {this.createEditorItems()}
          </div>
          {
            editor && editor.data && (
              [
                <div key="header" className="editor-header">Content</div>,
                <div key="content" className="editor-content">
                  <div className="form-control vertical">
                    <CoolEditor value={demo && demo.node && demo.node.props.data} onChange={(e) => this.handlePropsChange('data', e.target.value)} />
                  </div>
                </div>,
              ]
            )
          }
          <div className="editor-header">Preview</div>
          {
            this.createPreviewDemo()
          }
        </StyledEditor>
      </div>
    );
  }
}
