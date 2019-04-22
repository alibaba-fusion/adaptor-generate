/* eslint-disable */
import React from 'react';

function init(root) {
  if (!root) return;

  const editor = root.querySelector('textarea');
  const iconbox = root.querySelector('.iconbox');
  const toolbar = root.querySelector('.toolbar');
  let line;

  function updateCurrentLine() {
    let text = editor.value;
    const pos = editor.selectionStart;
    let head = 0;
    let tail = 0;
    let isDivider = false;
    let indent = 0;
    let prefix = '';
    let re;

    head = text.lastIndexOf('\n', pos - 1) + 1;
    tail = text.indexOf('\n', pos);

    if (tail === -1) {
      tail = text.length;
    }

    text = text.substring(head, tail);
    re = /^(\t*)-{3,}$/.exec(text);

    if (re) {
      isDivider = true;
      indent = (re[1] || '').length;
    } else {
      re = /^(\t*)([#\-~*]?)/.exec(text);
      indent = (re[1] || '').length;
      prefix = re[2] || '';
    }

    head += indent;

    line = {
      head,
      indent,
      get prefix() {
        return prefix;
      },
      set prefix(value) {
        if (value === prefix) {
          setRangeText('', head, head + 1);
          prefix = '';
        } else if (prefix === '') {
          setRangeText(value, head, head);
          prefix = value;
        } else {
          setRangeText(value, head, head + 1);
          prefix = value;
        }

        updateToolbar();
      },
      isDivider
    };

    updateToolbar();
  }

  function updateToolbar() {
    let html = '';

    if (!line.isDivider) {
      ['~', '*', '-', '#'].forEach((prefix) => {
        html += `<span class="${prefix === line.prefix ? 'active' : ''}">${prefix}</span>`;
      });
    }

    toolbar.innerHTML = html;
  }

  function initIconbox() {
    iconbox.innerHTML = [
      '<div class="trigger"></div>',
      '<div class="box">',
      '<span class="icon">atm</span>',
      '<span class="icon">atm</span>',
      '<span class="icon">atm</span>',
      '<span class="icon">atm</span>',
      '</div>'
    ].join('');
  }

  function insertIcon(type) {
    let inset = `[${type}]`;
    let len = inset.length;
    setRangeText(inset, editor.selectionStart, editor.selectionStart);
    editor.selectionStart += len;
    //editor.selectionEnd += len;
  }

  function setRangeText() {
    editor.setRangeText.apply(editor, arguments);
    editor.dispatchEvent(new Event('input', { bubbles: true }));
  }

  editor.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
      case 9:
        e.preventDefault();
        setRangeText('\t', editor.selectionStart, editor.selectionStart);
        editor.selectionStart += 1;
        //editor.selectionEnd += 1;
        break;
      case 13:
        e.preventDefault();
        setRangeText('\n' + '\t'.repeat(line.indent), editor.selectionStart, editor.selectionStart);
        editor.selectionStart += 1 + line.indent;
        //editor.selectionEnd += 1 + indent;
        break;
      default:
    }
  });

  editor.addEventListener('keyup', updateCurrentLine);
  editor.addEventListener('click', updateCurrentLine);

  toolbar.addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
      line.prefix = e.target.innerText;
    }
    editor.focus();
  });

  iconbox.addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
      insertIcon(e.target.innerText);
    }
    editor.focus();
  });

  initIconbox();
  updateCurrentLine();
}

class CoolEditor extends React.Component {
  render() {
    let name = this.props.name;
    let onChange = this.props.onChange;
    let value = this.props.value;

    return (
      <div id="coolEditor">
        <div className="toolbar" />
        <div className="iconbox" />
        <textarea name={name} onChange={onChange} value={value} />
      </div>
    );
  }

  componentDidMount() {
    init(document.querySelector('#coolEditor'));
  }
}

export default CoolEditor;
