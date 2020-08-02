import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="footer-wrapper">
        <div className="footer-widgets footer footer-2 dark">
          <div className="row dark large-columns-4 mb-0">
            <div id="text-17" className="col pb-0 widget widget_text">
              <span className="widget-title">XƯỞNG SẢN XUẤT</span>
              <div className="is-divider small" />
              <div className="textwidget">
                <p>Cơ sở 1 : Số 90, Trần Điền, Định Công, Hoàng Mai, Hà Nội</p>
                <p>
                  Cơ sở 2 : 191 Trịnh Đình Cửu –Hoàng Mai –Hà Nội<br />
                  Tel: &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<a href="tel:02439913839">024.3991.3839</a>
                  <br />
                  Hotline: <a href="tel:0586613333">058.661.3333</a>
                  <br />
                  <em>Email: xaydungviethung.vn@gmail.com</em>
                </p>
              </div>
            </div>
            <div id="text-2" className="col pb-0 widget widget_text">
              <span className="widget-title">TƯ VẤN –KỸ THUẬT</span>
              <div className="is-divider small" />
              <div className="textwidget">
                <p>
                  Tư Vấn Sản Phẩm: <a href="tel:02439913839">024.3991.3839</a>
                  <br />
                  Kỹ Thuật, Bảo hành: <a href="tel:0965800280">096.5800.280</a>
                </p>
                <p>Tư Vấn Đặt Hàng : 09.11.12.28.29</p>
                <p>
                  <img className="wp-image-6240 alignnone" src="https://xaydungviethung.vn/wp-content/uploads/2019/12/da-thong-bao-bo-cong-thuong-xaydungviethung.vn_-800x303.png" alt="" width={191} height={73} />
                </p>
                <p>&nbsp;</p>
              </div>
            </div>
            <div id="text-22" className="col pb-0 widget widget_text">
              <span className="widget-title">CHÍNH SÁCH –KHUYẾN MẠI</span>
              <div className="is-divider small" />
              <div className="textwidget">
                <p>
                  <a href="https://xaydungviethung.vn/phuong-thuc-thanh-toan">&gt;Thanh toán</a>
                  <br />
                  &gt;<a href="https://xaydungviethung.vn/chinh-sach-bao-hanh-cua-nhom-kinh">Chính sách bảo hành</a>
                  <br />
                  &gt;<a href="https://xaydungviethung.vn/khuyen-mai-uu-dai-lon-giam-gia-cua-nhom-kinh-thang-7-nam-2020">Khuyến mại</a>
                  <br />
                  &gt;Chính sách đổi trả hàng<br />
                  &gt;<a href="https://xaydungviethung.vn/tuyen-cong-tac-vien-cua-nhom-kinh">Hợp tác bán hàng</a>
                </p>
                <p>&nbsp;</p>
              </div>
            </div>
            <div id="text-24" className="col pb-0 widget widget_text">
              <span className="widget-title">FANPAGE VIỆT HƯNG</span>
              <div className="is-divider small" />
              <div className="textwidget">
                <p>
                  <iframe loading="lazy" style={{border: 'none', overflow: 'hidden'}} src="about:blank" frameBorder={0} scrolling="no" data-rocket-lazyload="fitvidscompatible" data-lazy-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNh%25C3%25B4m-K%25C3%25ADnh-Vi%25E1%25BB%2587t-H%25C6%25B0ng-102132051415250%2F%3Fmodal%3Dadmin_todo_tour&tabs=timeline&width=350&height=250&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" />
                  <noscript>
                    &lt;iframe style="border: none; overflow: hidden;" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNh%25C3%25B4m-K%25C3%25ADnh-Vi%25E1%25BB%2587t-H%25C6%25B0ng-102132051415250%2F%3Fmodal%3Dadmin_todo_tour&amp;amp;tabs=timeline&amp;amp;width=350&amp;amp;height=250&amp;amp;small_header=false&amp;amp;adapt_container_width=true&amp;amp;hide_cover=false&amp;amp;show_facepile=true&amp;amp;appId" frameborder="0" scrolling="no"&gt;&lt;/iframe&gt;
                  </noscript>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute-footer dark medium-text-center small-text-center">
          <div className="container clearfix">
            <div className="footer-secondary pull-right"/>

            <div className="footer-primary pull-left">
              <div className="copyright-footer">
                Copyright 2009 - 2020 ©<strong>Xây Dựng Việt Hưng</strong>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;