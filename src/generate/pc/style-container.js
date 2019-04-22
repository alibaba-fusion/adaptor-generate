import styled from 'styled-components';

export default styled.div`
  border: 1px solid #e6e7eb;
  .demo-shape {
    margin-bottom: 20px;
  }

  .demo-header {
    padding: 10px 15px;
    background-color: #e6e7eb;
    font-size: 18px;
    /* border-top-left-radius: 3px;
    border-top-right-radius: 3px; */
    color: #333;
  }

  .demo-content-filter {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    padding: 10px 20px;
    margin: 0;
    list-style: none;
    font-size: 12px;
    color: #666;
    li {
      display: flex;
      margin: 6px 0;
      height: 20px;
      line-height: 20px;
      justify-content: flex-start;
      align-items: center;
    }
    span {
      display: inline-block;
      padding-right: 12px;
      width: 124px;
      font-weight: 700;
      text-align: right;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    label {
      margin-right: 24px;
    }

    input {
      margin-right: 4px;
    }
  }

  .demo-section {
    border-bottom: 1px solid #e6e7eb;
    &:last-child {
      border-bottom: none;
    }
  }
  .demo-section-header {
    padding: 0 15px;
    font-size: 16px;
    height: 50px;
    line-height: 50px;
  }

  .demo-body {
    padding-bottom: 10px;
    > table {
      border-collapse: collapse;
      table-layout: fixed;
    }
  }

  .demo-head {
    > td {
      padding: 0 10px;
      text-align: left;
      vertical-align: top;
      font-size: 12px;
      height: 30px;
      line-height: 30px;
      color: #999;
    }
  }

  .demo-group {
    .label {
      width: 80px;
      padding-right: 10px;
      padding-top: 20px;
      text-align: right;
      font-size: 13px;
      color: #999;
      vertical-align: top;
      > span {
        display: block;
        padding-bottom: 5px;
        border-bottom: 1px solid #dcdee3;
      }
    }
    .wrap {
      padding: 10px 5px;
      text-align: left;
      vertical-align: top;
    }
  }

  .demo-item {
    padding: 10px;
    border: 1px dashed transparent;
    border-radius: 3px;
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    &:hover,
    &.active {
      border-color: rgb(85, 132, 255);
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 2;
    }
    &::after {
      content: " ";
      display: block;
      clear: left;
    }
    > * {
      float: left;
    }
  }
`;
