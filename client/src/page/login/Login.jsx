import React from "react";
import PropTypes from "prop-types";
import { useAppContext } from "../../Context";
import { useState } from "react";

const Login = (props) => {
  const { handleLogin } = useAppContext();
  const [data, setData] = useState({});
  const handleSubmit = async () => {
    await handleLogin(data);
  };
  return (
    <div>
      <div id="wrapper">
        <div id="header">
          <a href="" class="logo">
            <img src="/logo.png" alt="" />
          </a>
          <div id="menu">
            <div class="item">
              <a href="Home.html">Trang chủ</a>
            </div>
            <div class="item">
              <a href="Object.html">Đồ vật</a>
            </div>
            <div class="item">
              <a href="About.html">Thông tin</a>
            </div>
            <div class="item">
              <a href="Contact.html">Phản hồi</a>
            </div>
          </div>
          <div id="actions"></div>
        </div>
        <div class="container">
          <div class="forms-container">
            <div class="signin-signup">
              <form action="" class="sign-in-form">
                <h2 class="title">Đăng nhập</h2>
                <div class="input-field">
                  <i class="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Tên đăng nhập"
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                  />
                </div>
                <div class="input-field">
                  <i class="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={(e) => {
                      setData({ ...data, password: e.target.value });
                    }}
                  />
                </div>
                <p onClick={handleSubmit} class="btn solid">
                  Dang nhap
                </p>
              </form>

              <form action="" class="sign-up-form">
                <h2 class="title">Đăng nhập</h2>
                <div class="input-field">
                  <i class="fas fa-user"></i>
                  <input type="text" placeholder="Tên đăng nhập" name="email" />
                </div>
                <div class="input-field">
                  <i class="fas fa-envelope"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div class="input-field">
                  <i class="fas fa-lock"></i>
                  <input type="password" placeholder="Mật khẩu" />
                </div>
                <input type="submit" value="Đăng ký" class="btn solid" />
              </form>
            </div>
          </div>
        </div>
        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>Chưa có tài khoản?</h3>

              <button class="btn transparent" id="sign-up-btn">
                Đăng ký
              </button>
            </div>
            <img src="/img/log.svg" class="image" alt="" />
          </div>

          <div class="panel right-panel">
            <div class="content">
              <h3>Đã có tài khoản?</h3>
              <button class="btn transparent" id="sign-in-btn">
                Đăng nhập
              </button>
            </div>
            <img src="/img/register.svg" class="image" alt="" />
          </div>
        </div>
      </div>
      <div id="footer">
        <div class="box">
          <div class="logo">
            <img src="/logo.png" alt="" />
          </div>
          <p>
            Hỗ trợ nhiệt tình trao trả các đồ vật thất lạc trong khu vực trường
          </p>
        </div>
        <div class="box">
          <h3>NỘI DUNG</h3>
          <ul class="quick-menu">
            <div class="item">
              <a href="Home.html">Trang chủ</a>
            </div>
            <div class="item">
              <a href="Object.html">Sản phẩm</a>
            </div>
            <div class="item">
              <a href="About.html">Thông tin</a>
            </div>
            <div class="item">
              <a href="Contact.html">Phản hồi</a>
            </div>
          </ul>
        </div>
        <div class="box">
          <h3>LIÊN HỆ</h3>
          <form action="">
            <input type="text" placeholder="Địa chỉ email" />
            <button>Nhận tin</button>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
