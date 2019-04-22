import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DemoEditor from './DemoEditor';
import { uuid } from '@alifd/adaptor-helper';

const StyledCoolEditor = styled.div`
  padding-bottom: 50px;
  height: 100%;
  overflow: auto;
  position: relative;
  ${p => p.dragEnter && styled.css`
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 40px;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.7);
      z-index: 30;
    }
  `}
`;

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
  &:hover {
    background-color: rgba(85,132,255, 0.2);
    .close-icon-action {
      display: flex;
    }
  }
  .close-icon-action {
    width: 20px;
    height: 20px;
    background: rgba(0, 0, 0, 0.7);
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 11;
    color: #fff;
    font-size: 12px;
    line-height: 20px;
  }
`;

const StyledButton = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 10;
  width: 300px;
  height: 50px;
  color: rgb(85, 132, 255);
  background-color: #fff;
  border: none;
  border-top: 1px solid #eee;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class CoolEditor extends Component {
  static propTypes = {
    Adaptor: PropTypes.object,
    cools: PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.state = {
      active: false,
      cools: props.cools,
      view: 'list',
      demo: {},
      draging: false,
    };
  }


  showActive = () => {
    this.setState({
      active: true,
    });
  }

  hideActive = () => {
    this.setState({
      active: false,
    });
  }

  handleRemoveDemo = (id, e) => {
    e.stopPropagation();
    this.setState({
      cools: this.state.cools.filter((item) => item.id !== id),
    });
  }

  handleAddDemo = () => {
    this.setState({
      demo: {},
      view: 'editor',
    });
  }

  handleEditDemo = (demo) => {
    this.setState({
      demo,
      view: 'editor',
    });
  }

  handleSaveDemo = () => {
    if (!this.editor) return;
    const { demo } = this.editor.state;
    if (!demo) return;
    if (!demo.id) {
      this.setState({
        cools: [...this.state.cools, { ...demo, id: uuid() }],
        view: 'list',
      });
    } else {
      this.setState({
        cools: [...this.state.cools].map((item) => {
          if (item.id === demo.id) return demo;
          return item;
        }),
        view: 'list',
      });
    }
  }

  createCoolDemos() {
    const { Adaptor } = this.props;
    const { cools = [] } = this.state;

    return cools.map(({ id, node, height, background }, index) => {
      return (
        <StyledDemo onClick={() => this.handleEditDemo(cools[index])} height={height} background={background} key={id}>
          {Adaptor.adaptor(node.props)}
          <div className="close-icon-action" onClick={(e) => this.handleRemoveDemo(id, e)}>
            x
          </div>
        </StyledDemo>
      );
    });
  }

  saveEditorRef = (ref) => {
    this.editor = ref;
  }

  render() {
    const { view, demo, draging } = this.state;
    const { Adaptor } = this.props;

    return (
      <StyledCoolEditor dragEnter={draging} onDrop={this.handleOnDrop} onDragEnter={this.handleDragEnter} onDragOver={this.handleDragOver} onDragLeave={this.handleDragLeave}>
        {view === 'editor' ? <DemoEditor Adaptor={Adaptor} demo={demo} ref={this.saveEditorRef} /> : this.createCoolDemos()}
        {
          view === 'editor' ?
            <StyledButton onClick={this.handleSaveDemo}>Save</StyledButton> :
            <StyledButton onClick={this.handleAddDemo}>Add</StyledButton>
        }
      </StyledCoolEditor>
    );
  }
}
