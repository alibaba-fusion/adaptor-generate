import styled from 'styled-components';

export default styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: space-between;

  .app-container {
    flex: 1;
    overflow: scroll;
    padding: 16px;
  }

  .app-tools {
    height: 100%;
    width: 300px;
    background-color: #f7f8fa;
    box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.16);
  }

  .config-panel {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    position: relative;
  }
  .config-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #dedede;
    flex-shrink: 0;
  }

  .config-tabs {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .config-tab {
    width: 68px;
    height: 100%;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    position: relative;
    cursor: pointer;
  }

  .config-tab::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 2px;
    background-color: #5584FF;
    transition: transform .3s;
    transform: scale(0);
    transform-origin: center center;
  }

  .config-tab.active {
    color: #5584FF;

  }

  .config-tab.active::after {
    transform: scale(0.8);
  }

  .config-components {
    font-size: 14px;
    padding: 0 24px 0 16px;
    position: relative;
    cursor: pointer;
    color: #333;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .config-components:hover{
    color: #5584FF;
  }

  .config-components::after {
    content: '';
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 7px solid currentColor;
    position: absolute;
    right: 8px;
    top: 50%;
    margin-top: -3px;
  }

  .config-components:hover::after{
    border-top: none;
    border-bottom: 7px solid currentColor;
  }

  .config-components-menu {
    position: absolute;
    top: 40px;
    right: 4px;
    background: #fff;
    padding-top: 6px;
    padding-bottom: 6px;
    box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.16);
    display: none;
    z-index: 22;
    height: 300px;
    overflow: auto;
  }
  .config-components:hover .config-components-menu {
    display: block;
  }

  .config-components-menu .menu-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 32px;
    border: none;
    background: none;
    outline: none;
    box-shadow: none;
    width: 100%;
    appearance: none;
    cursor: pointer;
    padding: 0 16px;
  }

  .config-components-menu .menu-item:hover {
    background-color: #eee;
    color: #5584FF;
  }

  .config-panel-content {
    padding: 4px 0;
    flex: 1;
    overflow: auto;
  }

`;
