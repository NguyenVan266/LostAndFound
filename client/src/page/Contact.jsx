import React from "react";
import PropTypes from "prop-types";
import Menu from "../components/Menu";


const Contact = (props) => {
  return (
    <div>
      <div id="wrapper">
        <div id="header">
          <a href="" class="logo">
            <img src="/logo.png" alt="" />
          </a>
          <Menu />
          <div id="actions">
            <div class="item">
              <button class="sign-in">Đăng nhập</button>
            </div>

            <div class="item">
              <button class="sign-up">Đăng ký</button>
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

      <div id="bn">
        <div class="box-left">
          <h1></h1>
          <h1>
            <span>WEBSITE</span>
          </h1>
          <h2>
            <span>TÌM ĐỒ MẤT HUST</span>
          </h2>
        </div>
        <div class="box-right"></div>
      </div>
      <br />
      <br />
      <article class="col-sm-9 maincontent">
        <header class="page-header">
          <h1 class="page-title">Liên hệ</h1>
        </header>

        <p>
          Nếu bạn có lời nhắn nhủ đến chúng mình hay những con người đáng yêu đã
          trao trả đồ vật bị mất cho bạ. Hãy liên hệ với chúng mình nhé!
        </p>
        <br />
        <form>
          <div class="row">
            <div class="col-sm-12">
              <input class="form-control" type="text" placeholder="Họ tên" />
              <br />
            </div>
            <div class="col-sm-12">
              <input class="form-control" type="text" placeholder="Email" />
              <br />
            </div>
            <div class="col-sm-12">
              <input
                class="form-control"
                type="text"
                placeholder="Số điện thoại"
              />
              <br />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <textarea
                placeholder="Để lại lời nhắn tại đây..."
                class="form-control"
                rows="9"></textarea>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-sm-6">
              <input
                class="btn btn-action pull-left"
                type="submit"
                value="Send message"
              />
            </div>
            <div class="col-sm-6 text-right"></div>
          </div>
        </form>
      </article>

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

Contact.propTypes = {};

export default Contact;
