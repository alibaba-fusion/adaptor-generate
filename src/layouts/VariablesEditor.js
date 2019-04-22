/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledEditor from './StyledEditor';


export default class VariablesEditor extends Component {
  static propTypes = {
    variables: PropTypes.object,
    core: PropTypes.object,
    onChange: PropTypes.func,
  }

  static getDerivedStateFromProps(props) {
    const { variables } = props;
    if (!variables) return null;

    const sizes = Object.keys(variables)
      .filter(
        key => variables[key].attrs &&
          variables[key].attrs.namespace &&
          variables[key].attrs.namespace.split('/')[0] === 'size'
      ).map(key => {
        return {
          key,
          namespace: variables[key].attrs.namespace.split('/')[1],
          description: variables[key].attrs.description,
          from: variables[key].from,
          value: variables[key].value,
        };
      });
    const statements = Object.keys(variables)
      .filter(
        key => variables[key].attrs &&
          variables[key].attrs.namespace &&
          variables[key].attrs.namespace.split('/')[0] === 'statement'
      ).map(key => {
        return {
          key,
          namespace: variables[key].attrs.namespace.split('/')[1],
          description: variables[key].attrs.description,
          from: variables[key].from,
          value: variables[key].value,
        };
      });

    return {
      sizes,
      statements,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      sizes: [],
      statements: [],
    };
  }

  handleChangeValue(item, value) {
    this.props.onChange && this.props.onChange(item.key, value);
  }

  getCoreOptions(value) {
    const { core } = this.props;
    if (!core || !core[value]) return [];
    const { enum: enumType, label } = core[value];
    return Object.keys(core)
      .filter((key) => {
        const item = core[key];
        if (value.indexOf('icon') === 0) return key.indexOf('icon') === 0 && key.indexOf('icon-content') === -1;
        if (enumType !== 'size') return item.enum === enumType;
        return item.enum === enumType && (
          (label.indexOf('font-size') !== -1 && item.label.indexOf('font-size') !== -1) ||
          (label.indexOf('font-weight') !== -1 && item.label.indexOf('font-weight') !== -1) ||
          (label.indexOf('shadow') !== -1 && item.label.indexOf('shadow') !== -1) ||
          (label.indexOf('s-') === 0 && item.label.indexOf('s-') === 0)
        );
      })
      .map(key => (core[key]));
  }

  createInput(item) {
    if (item.from === 'core') {
      const options = this.getCoreOptions(item.value);
      return (
        <select onChange={(e) => this.handleChangeValue(item, e.target.value)} defaultValue={item.value}>
          {
            options.map(({ label, value }) => {
              return <option value={value} key={value}>{label}</option>;
            })
          }
        </select>
      );
    }

    return (
      <input defaultValue={item.value} onBlur={(e) => this.handleChangeValue(item, e.target.value)} />
    );
  }


  createSizes() {
    const { sizes } = this.state;
    if (!sizes || sizes.length < 0) return null;
    const namespaceMap = {};
    sizes.forEach((item) => {
      if (!namespaceMap[item.namespace]) namespaceMap[item.namespace] = [];
      namespaceMap[item.namespace].push(item);
    });

    return (
      <div>
        <div className="editor-header">
          Size
        </div>
        <div className="editor-content">
          {
            Object.keys(namespaceMap).map(namespace => {
              const list = namespaceMap[namespace];
              return (
                <div key={namespace}>
                  <div className="editor-sub-header">{namespace}</div>
                  {
                    list.map((item) => (
                      <div key={item.key} className="form-control">
                        <span className="form-label">{item.description}</span>
                        <div className="form-input">
                          {this.createInput(item)}
                        </div>
                      </div>
                    ))
                  }
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

  createStatment() {
    const { statements } = this.state;
    if (!statements || statements.length < 0) return null;
    const namespaceMap = {};
    statements.forEach((item) => {
      if (!namespaceMap[item.namespace]) namespaceMap[item.namespace] = [];
      namespaceMap[item.namespace].push(item);
    });

    return (
      <div>
        <div className="editor-header">
          Statement
        </div>
        <div className="editor-content">
          {
            Object.keys(namespaceMap).map(namespace => {
              const list = namespaceMap[namespace];
              return (
                <div key={namespace}>
                  <div className="editor-sub-header">{namespace}</div>
                  {
                    list.map((item) => (
                      <div key={item.key} className="form-control">
                        <span className="form-label">{item.description}</span>
                        <div className="form-input">
                          {this.createInput(item)}
                        </div>
                      </div>
                    ))
                  }
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

  render() {
    return (
      <StyledEditor style={this.props.style}>
        {this.createSizes()}
        {this.createStatment()}
      </StyledEditor>
    );
  }
}
