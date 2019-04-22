import styled from 'styled-components';

const StyledEditor = styled.div`
  font-size: 12px;
  .editor-header {
    background-color: #f2f3f7;
    padding: 8px 16px;
    font-size: 14px;
    color: #333;
  }
  .editor-content {
    padding: 4px 0;
  }
  .editor-sub-header {
    padding: 4px 16px;
    font-size: 12px;
    color: #333;
  }
  .form-control {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 16px;
  }

  .form-control.vertical {
    display: block;
  }

  .form-control.vertical .form-label {
    margin-bottom: 8px;
    display: block;
  }

  .form-label {
    color: #666;
  }

  .form-input {
    width: 160px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    white-space: nowrap;
  }

  .form-input input,
  .form-input select {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 12px;
    outline: none;
    padding: 0 4px;
    height: 20px;
    color: #333;
    background-color: #fff;
  }

  .form-input input[type="radio"] {
    width: auto;
    margin-left: 8px;
    margin-right: 8px;
  }
  .form-input input[type="radio"]:first-child {
    margin-left: 0;
  }


  #coolEditor {
    position: relative;
  }

  #coolEditor textarea {
    border: 1px solid #ccc;
    height: 200px;
    width: 100%;
    outline: none;
    font-family: monospace;
    margin-top: 4px;
    tab-size: 2;
  }

  #coolEditor .toolbar {
    float: left;
  }

  #coolEditor .toolbar span {
    cursor: default;
    display: inline-block;
    margin: 1px;
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 2px;
    text-align: center;
    line-height: 16px;
    font-family: monospace;
  }

  #coolEditor .toolbar span:hover {
    border: 1px solid #666;
    height: 14px;
    width: 14px;
    line-height: 14px;
  }

  #coolEditor .toolbar .active {
    background: #666;
    color: #fff;
  }

  #coolEditor .iconbox {
    float: right;
    cursor: default;
  }

  #coolEditor .iconbox .trigger {
    height: 16px;
    width: 16px;
    display: inline-block;
    background: #fff;
    line-height: 16px;
    border-radius: 8px;
  }

  #coolEditor .iconbox .box {
    display: none;
    top: 16px;
    right: 0;
    padding: 5px;
    width: 88px;
    position: absolute;
    background: #fff;
    border: 1px solid #aaa;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.1);
  }

  #coolEditor .iconbox .icon {
    margin: 4px;
    display: inline-block;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
  }

  #coolEditor .iconbox .icon:hover {
    background: #eee;
    border-radius: 5px;
  }

  #coolEditor .iconbox:hover .box {
    display: block;
  }
`;

export default StyledEditor;
