import React from "react";
import PropTypes from "prop-types";
import Menu from "../components/Menu";
import { useAppContext } from "../Context";

const Object = (props) => {
  const { handleLogout } = useAppContext();
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
            <div class="item">
              <button class="sign-up" onClick={handleLogout}>
                Đăng xuat
              </button>
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
        <div id="wp-products">
          <h2>ĐỒ VẬT THẤT LẠC</h2>

          <div class="col-md-8 mx-auto">
            <div class="input-group pb-5">
              <input
                class="form-control border border-end-0 rounded-pill ps-4 search-input"
                type="search"
                placeholder="Tìm kiếm"
              />
              <span class="input-group-append">
                <button
                  class="btn btn-outline-secondary border-bottom-0 border rounded-pill ms-n5"
                  type="button">
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </div>
          </div>

          <div class="row">
            <div class="col-3 filter">
              <div class="filter-search">
                <i class="fa-solid fa-filter"></i>
                <div class="filter-status">BỘ LỌC TÌM KIẾM</div>
              </div>

              <div class="group-header">Theo danh mục</div>
              <div class="group-body">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check1"
                    name="option1"
                    value="something"
                  />
                  <label class="form-check-label" for="check1">
                    Option 1
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check2"
                    name="option2"
                    value="something"
                  />
                  <label class="form-check-label" for="check2">
                    Option 2
                  </label>
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="check3" />
                  <label class="form-check-label" for="check3">
                    Option 3
                  </label>
                </div>

                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="check4" />
                  <label class="form-check-label" for="check4">
                    Option 4
                  </label>
                </div>
                <hr />
              </div>

              <div class="group-header">Theo sản phẩm</div>
              <div class="group-body">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check1"
                    name="option1"
                    value="something"
                  />
                  <label class="form-check-label">Option 1</label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check2"
                    name="option2"
                    value="something"
                  />
                  <label class="form-check-label">Option 2</label>
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="check3" />
                  <label class="form-check-label">Option 3</label>
                </div>

                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="check4" />
                  <label class="form-check-label">Option 4</label>
                </div>
                <hr />
              </div>

              <div class="group-header">Theo thương hiệu</div>
              <div class="group-body">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check1"
                    name="option1"
                    value="something"
                  />
                  <label class="form-check-label">Option 1</label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check2"
                    name="option2"
                    value="something"
                  />
                  <label class="form-check-label">Option 2</label>
                </div>
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="check3" />
                  <label class="form-check-label">Option 3</label>
                </div>

                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="check4" />
                  <label class="form-check-label">Option 4</label>
                </div>
                <hr />
              </div>
            </div>
            <div class="col-9">
              <ul id="list-products">
                <div class="item">
                  <img src="/product_1.png" alt="" />
                  <div class="name">Điện thoại</div>
                  <div class="desc">Iphone 14 ProMax</div>
                  <div class="price">....</div>
                </div>

                <div class="item">
                  <img src="/product_2.png" alt="" />
                  <div class="name">Thẻ sinh viên</div>
                  <div class="desc">Nguyễn Thị Hồng Vân</div>
                  <div class="price">{process.env.PUBLIC_URL}</div>
                </div>

                <div class="item">
                  <img src="/product_3.png" alt="" />
                  <div class="name">Ô che nắng mưa</div>
                  <div class="desc">Ô ngắn màu xanh</div>
                  <div class="price">...</div>
                </div>
                <div class="item">
                  <img src="/product_4.png" alt="" />
                  <div class="name">Hộp bút</div>
                  <div class="desc">Của một bạn nữ xinh xắn</div>
                  <div class="price">...</div>
                </div>

                <div class="item">
                  <img src="/product_5.png" alt="" />
                  <div class="name">Áo khoác</div>
                  <div class="desc">Của một bạn nam đẹp trai</div>
                  <div class="price">...</div>
                </div>

                <div class="item">
                  <img src="/product_6.png" alt="" />
                  <div class="name">Bình đựng nước</div>
                  <div class="desc">Hãng ABC</div>
                  <div class="price">...</div>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <ul class="pagination" id="pagination">
          <li class="page-item first disabled">
            <a href="#" class="page-link">
              First
            </a>
          </li>
          <li class="page-item prev disabled">
            <a href="#" class="page-link">
              Previous
            </a>
          </li>
          <li class="page-item active">
            <a href="#" class="page-link">
              1
            </a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link">
              2
            </a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link">
              3
            </a>
          </li>
          <li class="page-item next">
            <a href="#" class="page-link">
              Next
            </a>
          </li>
          <li class="page-item last">
            <a href="#" class="page-link">
              Last
            </a>
          </li>
        </ul>

        <div id="saleoff">
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

        <div id="comment">
          <h2>PHẢN HỒI CỦA MỌI NGƯỜI</h2>
          <div id="comment-body">
            <div class="prev-cmt">
              <a href="#">
                <img src="/prev.png" alt="" />
              </a>
            </div>
            <ul id="list-comment">
              <li class="item">
                <div class="avatar">
                  <img src="/avatar_1.png" alt="" />
                </div>

                <div class="name">Nguyễn Thị Hồng Vân</div>

                <div class="text">
                  <p>
                    Rất cảm ơn ai đó đã nhặt được và gửi trả mình chiếc ví màu
                    hồng mà mình lỡ để quên trên giảng đường S3 hôm trước. Cảm
                    ơn bạn rất nhiều.
                  </p>
                </div>
              </li>
              <li class="item">
                <div class="avatar">
                  <img src="/avatar_2.png" alt="" />
                </div>

                <div class="name">Ngọc Thanh Vân</div>

                <div class="text">
                  <p>
                    Rất cảm ơn ai đó đã nhặt được và gửi trả mình chiếc ví màu
                    hồng mà mình lỡ để quên trên giảng đường S3 hôm trước. Cảm
                    ơn bạn rất nhiều.
                  </p>
                </div>
              </li>
              <li class="item">
                <div class="avatar">
                  <img src="/avatar_3.png" alt="" />
                </div>

                <div class="name">Nguyễn Trần Vi</div>

                <div class="text">
                  <p>
                    Rất cảm ơn ai đó đã nhặt được và gửi trả mình chiếc ví màu
                    hồng mà mình lỡ để quên trên giảng đường S3 hôm trước. Cảm
                    ơn bạn rất nhiều.
                  </p>
                </div>
              </li>
            </ul>
            <div class="next-cmt">
              <a href="#">
                <img src="/next.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div id="footer">
          <div class="box">
            <div class="logo">
              <img src="/logo.png" alt="" />
            </div>
            <p>
              Hỗ trợ nhiệt tình trao trả các đồ vật thất lạc trong khu vực
              trường
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
    </div>
  );
};

Object.propTypes = {};

export default Object;
