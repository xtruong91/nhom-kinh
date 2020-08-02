import React, { Component } from 'react';

class SplitBar extends Component {

  render() {
    const title = this.props.title;
    return (
      <div className="container section-title-container">
        <h3 className="section-title section-title-normal">
          <b />
            <span className="section-title-main" style={{fontSize: '120%', color: 'rgb(255, 0, 0)'}}>{title}</span>
          <b />
          <a href="https://xaydungviethung.vn/cua-nhom-kinh-cach-am-chong-on" target>Xem thêm
            <i className="icon-angle-right" />
          </a>
        </h3>
      </div>

    );
  }
}

export default SplitBar;