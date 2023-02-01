import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { useAppContext } from "../Context";

const Home = (props) => {
    const { handleLogout } = useAppContext();
  return (
    <div id="wrapper">
      <div id="header">
        <a href="" class="logo">
          <img src="/logo.png" alt="" />
        </a>
        <Menu />
        <div id="actions">
          <div class="item">
            <img src="/user.png" alt="" />
          </div>
          <div class="item">
            <img src="/calendar.png" alt="" />
          </div>
          <div class="item">
            <button class="sign-in">Đăng nhập</button>
          </div>
          <div class="item">
            <button class="sign-up">Đăng ký</button>
          </div>
          <div class="item">
              <button class="sign-up" onClick={handleLogout}>Đăng xuat</button>
            </div>
        </div>
      </div>
      <div id="banner">
        <div class="box-left">
          <h2>
            <span>TÌM ĐỒ</span>
            <br />
            <span>MẤT HUST</span>
          </h2>
          <p>
            Hỗ trợ mọi người trao trả và nhận lại các đồ vật bị mất trong khu
            vực trường HUST
          </p>
          <button>Truy cập ngay</button>
        </div>
        <div class="box-right">
          <img src="/img_2.png" alt="" />
        </div>
        <div class="to-bottom"></div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
