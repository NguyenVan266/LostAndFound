import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <div id="menu" style={{ marginLeft: 0 }}>
      <div class="item">
        {/* <a href="">Trang chủ</a> */}
        <Link to="/home">Trang chủ</Link>
      </div>
      <div class="item">
        {/* <a href="">Đồ vật</a> */}
        <Link to="/object">Đồ vật</Link>
      </div>
      <div class="item">
        {/* <a href="">Thông tin</a> */}
        <Link to="/about">Thông tin</Link>
      </div>
      <div class="item">
        {/* <a href="">Phản hồi</a> */}
        <Link to="/contact">Phản hồi</Link>
      </div>
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
