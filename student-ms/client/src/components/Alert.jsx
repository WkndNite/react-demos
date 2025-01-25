import React from 'react';

export default function Alert(props) {
  return (
    <div
      className={['alert', 'alert-dismissible', 'alert-' + props.type].join(
        ' ',
      )}
    >
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
      <strong>操作成功！</strong> {props.msg}
    </div>
  );
}
