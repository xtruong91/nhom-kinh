import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header id="header" className="header has-sticky sticky-jump">
        <div className="header-wrapper">
          <div id="top-bar" className="header-top nav-dark flex-has-center">
            <div className="flex-row container">
              <div className="flex-col hide-for-medium flex-left">
                <ul className="nav nav-left medium-nav-center nav-small nav-divided" />
              </div>
              <div className="flex-col hide-for-medium flex-center">
                <ul className="nav nav-center nav-small nav-divided">
                  <li className="html custom html_topbar_left">
                    <span style={{fontSize: '14pt'}}>
                      <strong>
                        <span style={{color: '#ed1c24'}}>
                          <a style={{color: '#ed1c24'}} href="tel:0911122829">09.11.12.28.29</a>
                        </span>
                      </strong>
                      <span style={{fontSize: '80%'}}>
                        | 
                        <span style={{color: '#0000ff'}}>
                          <a style={{color: '#0000ff'}} href="https://xaydungviethung.vn/phuong-thuc-thanh-toan" target="_blank" rel="noopener noreferrer">Thanh toán</a>
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex-col hide-for-medium flex-right">
                <ul className="nav top-bar-nav nav-right nav-small nav-divided">
                  <li className="header-divider" />
                  <li className="cart-item has-icon has-dropdown">
                    <a href="https://xaydungviethung.vn/gio-hang" title="Giỏ hàng" className="header-cart-link is-small">
                      <span className="header-cart-title">
                        <span className="cart-price">
                          <span className="woocommerce-Price-amount amount">
                            0 &nbsp;<span className="woocommerce-Price-currencySymbol">₫</span>
                          </span>
                        </span>
                      </span>
                      <i className="icon-shopping-basket" data-icon-label={0} />
                    </a>
                    <ul className="nav-dropdown nav-dropdown-simple">
                      <li className="html widget_shopping_cart">
                        <div className="widget_shopping_cart_content">
                          <p className="woocommerce-mini-cart__empty-message">Chưa có sản phẩm trong giỏ hàng.</p>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="flex-col show-for-medium flex-grow">
                <ul className="nav nav-center nav-small mobile-nav nav-divided">
                  <li className="html custom html_topbar_left">
                    <span style={{fontSize: '14pt'}}>
                      <strong>
                        <span style={{color: '#ed1c24'}}>
                          <a style={{color: '#ed1c24'}} href="tel:0911122829">09.11.12.28.29</a>
                        </span>
                      </strong>
                      <span style={{fontSize: '80%'}}>
                        | 
                        <span style={{color: '#0000ff'}}>
                          <a style={{color: '#0000ff'}} href="https://xaydungviethung.vn/phuong-thuc-thanh-toan" target="_blank" rel="noopener noreferrer">Thanh toán</a>
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="masthead" className="header-main hide-for-sticky">
            <div className="header-inner flex-row container logo-left medium-logo-center" role="navigation">
              <div id="logo" className="flex-col logo">
                <a href="https://xaydungviethung.vn/" title="Xây Dựng Việt Hưng - Sản Xuất, Lắp Đặt: Nhôm Kính, Cửa Cuốn, Inox, Mái Tôn, Kính Cường Lực, Thạch Cao …" rel="home">
                  <img width={230} height={91} src="https://xaydungviethung.vn/wp-content/uploads/2015/03/logo-viethung.jpg" className="header_logo header-logo" alt="Xây Dựng Việt Hưng" />
                  <img width={230} height={91} src="https://xaydungviethung.vn/wp-content/uploads/2015/03/logo-viethung.jpg" className="header-logo-dark" alt="Xây Dựng Việt Hưng" />
                </a>
              </div>
              <div className="flex-col show-for-medium flex-left">
                <ul className="mobile-nav nav nav-left ">
                  <li className="nav-icon has-icon">
                    <a href="#" data-open="#main-menu" data-pos="left" data-bg="main-menu-overlay" data-color className="is-small" aria-label="Menu" aria-controls="main-menu" aria-expanded="false">
                      <i className="icon-menu" />
                      <span className="menu-title uppercase hide-for-small">Menu</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-col hide-for-medium flex-left flex-grow">
                <ul className="header-nav header-nav-main nav nav-left nav-spacing-large nav-uppercase">
                  <li className="header-search-form search-form html relative has-icon">
                    <div className="header-search-form-wrapper">
                      <div className="searchform-wrapper ux-search-box relative is-normal">
                        <form role="search" method="get" className="searchform" action="https://xaydungviethung.vn/">
                          <div className="flex-row relative">
                            <div className="flex-col flex-grow">
                              <label className="screen-reader-text" htmlFor="woocommerce-product-search-field-0">Tìm kiếm:</label>
                              <input type="search" id="woocommerce-product-search-field-0" className="search-field mb-0" placeholder="Tìm kiếm…" defaultValue name="s" />
                              <input type="hidden" name="post_type" defaultValue="product" />
                            </div>
                            <div className="flex-col">
                              <button type="submit" value="Tìm kiếm" className="ux-search-submit submit-button secondary button icon mb-0">
                                <i className="icon-search" />
                              </button>
                            </div>
                          </div>
                          <div className="live-search-results text-left z-top" />
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex-col hide-for-medium flex-right">
                <ul className="header-nav header-nav-main nav nav-right nav-spacing-large nav-uppercase" />
              </div>
              <div className="flex-col show-for-medium flex-right">
                <ul className="mobile-nav nav nav-right ">
                  <li className="cart-item has-icon">
                    <a href="https://xaydungviethung.vn/gio-hang" className="header-cart-link off-canvas-toggle nav-top-link is-small" data-open="#cart-popup" data-class="off-canvas-cart" title="Giỏ hàng" data-pos="right">
                      <i className="icon-shopping-basket" data-icon-label={0} />
                    </a>
                    <div id="cart-popup" className="mfp-hide widget_shopping_cart">
                      <div className="cart-popup-inner inner-padding">
                        <div className="cart-popup-title text-center">
                          <h4 className="uppercase">Giỏ hàng</h4>
                          <div className="is-divider" />
                        </div>
                        <div className="widget_shopping_cart_content">
                          <p className="woocommerce-mini-cart__empty-message">Chưa có sản phẩm trong giỏ hàng.</p>
                        </div>
                        <div className="cart-sidebar-content relative" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="wide-nav" className="header-bottom wide-nav hide-for-sticky nav-dark flex-has-center hide-for-medium">
            <div className="flex-row container">
              
              <div className="flex-col hide-for-medium flex-center">
                <ul className="nav header-nav header-bottom-nav nav-center nav-spacing-large nav-uppercase">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home active">
                    <a href="#" aria-current="page" className="nav-top-link">Trang chủ</a>
                  </li>

                  <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children has-dropdown">
                    <a href="#" className="dropdown-menu">
                      Cửa Cách Âm<i className="fa fa-angle-down" />
                    </a>
                    
                    <ul className="sub-menu nav-dropdown nav-dropdown-simple">
                      <li className="dropdown-item">
                        <a href="#">Cửa Kính Cách Âm</a>
                      </li>
                      <li className="menu-item menu-item-type-taxonomy menu-item-object-product_tag menu-item-6270">
                        <a href="#">Báo Giá Cửa Cách Âm</a>
                      </li>
                    </ul>
                  </li>

                  <li id="menu-item-6699" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6699 has-dropdown">
                    <a href="#" className="nav-top-link">
                      Nhôm Kính<i className="fa fa-angle-down" />
                    </a>
                    <ul className="sub-menu nav-dropdown nav-dropdown-simple">
                      <li id="menu-item-6474" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6474 nav-dropdown-col">
                        <a href="https://xaydungviethung.vn/cua-nhom-kinh-viet-phap">Cửa Nhôm Việt Pháp</a>
                        <ul className="sub-menu nav-column nav-dropdown-simple">
                          <li id="menu-item-6570" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6570">
                            <a href="https://xaydungviethung.vn/san-pham/cua-nhom-viet-phap-he-4500">Cửa Nhôm Việt Pháp Hệ 4500</a>
                          </li>
                          <li id="menu-item-6565" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6565">
                            <a href="https://xaydungviethung.vn/cua-nhom-viet-phap-440">Cửa Nhôm Việt Pháp 440</a>
                          </li>
                          <li id="menu-item-6566" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6566">
                            <a href="https://xaydungviethung.vn/cua-truot-viet-phap-he-2600">Cửa Trượt Việt Pháp Hệ 2600</a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-6475" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6475 nav-dropdown-col">
                        <a href="https://xaydungviethung.vn/cua-nhom-kinh-xingfa">Cửa Nhôm Xingfa</a>
                        <ul className="sub-menu nav-column nav-dropdown-simple">
                          <li id="menu-item-1492" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1492">
                            <a href="https://xaydungviethung.vn/cua-nhom-kinh-xingfa">Cửa Nhôm XingFa</a>
                          </li>
                        </ul>
                      </li>
                      <li id="menu-item-6648" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6648 nav-dropdown-col">
                        <a href="https://xaydungviethung.vn/uncategorized">Vách Ngăn Nhôm Kính</a>
                        <ul className="sub-menu nav-column nav-dropdown-simple">
                          <li id="menu-item-6649" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6649">
                            <a href="https://xaydungviethung.vn/san-pham/vach-ngan-nhom-kinh-van-phong-nhom-viet-phap-2600">Vách ngăn nhôm kính văn phòng nhôm Việt Pháp hệ 2600</a>
                          </li>
                          <li id="menu-item-6650" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6650">
                            <a href="https://xaydungviethung.vn/san-pham/1774">Vách ngăn kính cường lực</a>
                          </li>
                          <li id="menu-item-6661" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6661">
                            <a href="https://xaydungviethung.vn/san-pham/vach-ngan-nhom-kinh-gia-re-nam-hai">Vách ngăn nhôm kính giá rẻ Nam Hải</a>
                          </li>
                          <li id="menu-item-6651" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6651">
                            <a href="https://xaydungviethung.vn/san-pham/vach-ngan-phong-ngu-bang-nhom">Vách ngăn phòng ngủ bằng nhôm</a>
                          </li>
                          <li id="menu-item-6652" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6652">
                            <a href="https://xaydungviethung.vn/san-pham/vach-ngan-nhom-kinh-gia-re-dong-kinh-5ly">Vách ngăn nhôm kính giá rẻ Đông Á –Kính 5ly</a>
                          </li>
                          <li id="menu-item-6653" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6653">
                            <a href="https://xaydungviethung.vn/san-pham/vach-kinh-khung-nhom-viet-phap">Vách kính khung nhôm Việt Pháp</a>
                          </li>
                          <li id="menu-item-6654" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6654">
                            <a href="https://xaydungviethung.vn/san-pham/vach-kinh-khung-nhom-cao-cap">Vách kính khung nhôm cao cấp</a>
                          </li>
                          <li id="menu-item-6655" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6655">
                            <a href="https://xaydungviethung.vn/san-pham/vach-kinh-khung-nhom-mau-trang">Vách kính khung nhôm màu trắng</a>
                          </li>
                          <li id="menu-item-6656" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6656">
                            <a href="https://xaydungviethung.vn/san-pham/vach-ngan-phong-ngu-bang-nhom-kinh">Vách ngăn phòng ngủ bằng nhôm kính XINGFA</a>
                          </li>
                          <li id="menu-item-6657" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6657">
                            <a href="https://xaydungviethung.vn/san-pham/vach-ngan-nhom-kinh-gia-re">Vách ngăn nhôm kính giá rẻ</a>
                          </li>
                          <li id="menu-item-6658" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-6658">
                            <a href="https://xaydungviethung.vn/vach-ngan-nhom-kinh-viet-phap-cho-van-phong-lam-viec">Vách ngăn nhôm kính Việt Pháp cho văn phòng làm việc</a>
                          </li>
                          <li id="menu-item-6659" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-6659">
                            <a href="https://xaydungviethung.vn/vach-ngan-nhom-kinh-phong-khach-hien-dai-dep-mat">Vách ngăn nhôm kính phòng khách hiện đại đẹp mắt</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li id="menu-item-6619" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6619 has-dropdown">
                    <a href="https://xaydungviethung.vn/cua-cuon" className="nav-top-link">
                      Cửa cuốn<i className="icon-angle-down" />
                    </a>
                    <ul className="sub-menu nav-dropdown nav-dropdown-simple">
                      <li id="menu-item-6624" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6624">
                        <a href="https://xaydungviethung.vn/san-pham/phu-kien-cua-cuon-thuong-su-dung">Phụ kiện cửa cuốn thường sử dụng</a>
                      </li>
                      <li id="menu-item-6620" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6620">
                        <a href="https://xaydungviethung.vn/san-pham/cua-cuon-austdoor-tam-lien">Cửa cuốn austdoor tấm liền</a>
                      </li>
                      <li id="menu-item-6621" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6621">
                        <a href="https://xaydungviethung.vn/san-pham/cua-cuon-austdoor-s50i">Cửa cuốn austdoor S50i</a>
                      </li>
                      <li id="menu-item-6622" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6622">
                        <a href="https://xaydungviethung.vn/san-pham/cua-cuon-austdoor-khe-thoang">Cửa cuốn Austdoor khe thoáng</a>
                      </li>
                      <li id="menu-item-6623" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6623">
                        <a href="https://xaydungviethung.vn/san-pham/cua-cuon-austdoor-sieu-thoang-c70-dep-nhat">Cửa cuốn Austdoor siêu thoáng C70 đẹp nhất</a>
                      </li>
                      <li id="menu-item-6625" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6625">
                        <a href="https://xaydungviethung.vn/san-pham/cua-cuon-dai-loan-mo-va-keo-tay">Cửa cuốn Đài Loan mô tơ và kéo tay</a>
                      </li>
                      <li id="menu-item-6626" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6626">
                        <a href="https://xaydungviethung.vn/san-pham/cua-cuon-dai-loan-day-1-2mm">Cửa cuốn Đài Loan dày 1.2mm</a>
                      </li>
                      <li id="menu-item-6627" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6627">
                        <a href="https://xaydungviethung.vn/san-pham/cua-cuon-dai-loan-gia-re">Cửa cuốn Đài Loan giá rẻ</a>
                      </li>
                      <li id="menu-item-6628" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6628">
                        <a href="https://xaydungviethung.vn/san-pham/cua-cuon-moi-austdoor">Cửa cuốn thế hệ mới Austdoor</a>
                      </li>
                      <li id="menu-item-6629" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6629">
                        <a href="https://xaydungviethung.vn/san-pham/cua-cuon-duc-duoc-san-xuat-va-lap-dat-nhu-nao">Cửa cuốn Đức được sản xuất và lắp đặt như thế nào</a>
                      </li>
                      <li id="menu-item-6630" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6630">
                        <a href="https://xaydungviethung.vn/san-pham/cua-cuon-khe-thoang-masterdoor-wetber">Cửa cuốn khe thoáng Masterdoor Wetber</a>
                      </li>
                      <li id="menu-item-6631" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6631">
                        <a href="https://xaydungviethung.vn/san-pham/cua-cuon-cong-nghe-duc-dedo">Cửa cuốn công nghệ Đức Dedo</a>
                      </li>
                      <li id="menu-item-6632" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6632">
                        <a href="https://xaydungviethung.vn/san-pham/mot-loai-cua-cuon-su-dung-cong-nghe-duc">Một số loại cửa cuốn sử dụng công nghệ Đức</a>
                      </li>
                      <li id="menu-item-6633" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6633">
                        <a href="https://xaydungviethung.vn/san-pham/cua-cuon-eurodoor-cong-nghe-duc">Cửa cuốn Eurodoor công nghệ Đức</a>
                      </li>
                    </ul>
                  </li>
                  <li id="menu-item-1542" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-1542 has-dropdown">
                    <a href="https://xaydungviethung.vn/kinh-cuong-luc" className="nav-top-link">
                      Kính Cường Lực<i className="icon-angle-down" />
                    </a>
                    <ul className="sub-menu nav-dropdown nav-dropdown-simple">
                      <li id="menu-item-804" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-804">
                        <a href="https://xaydungviethung.vn/cua-kinh-cuong-luc">Cửa Kính Cường Lực</a>
                      </li>
                      <li id="menu-item-3764" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3764">
                        <a href="https://xaydungviethung.vn/lan-can-kinh-cuong-luc">Lan Can Kính</a>
                      </li>
                      <li id="menu-item-800" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-800">
                        <a href="https://xaydungviethung.vn/vach-kinh-cuong-luc">Vách Kính</a>
                      </li>
                      <li id="menu-item-806" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-806">
                        <a href="https://xaydungviethung.vn/cau-thang-kinh-cuong-luc">Cầu Thang Kính</a>
                      </li>
                      <li id="menu-item-6286" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6286">
                        <a href="https://xaydungviethung.vn/san-pham/mau-cua-kinh-cuong-luc-dep">Mẫu Cửa Kính Đẹp</a>
                      </li>
                    </ul>
                  </li>
                  <li id="menu-item-6637" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-6637 has-dropdown">
                    <a href="https://xaydungviethung.vn/cua-nhua-loi-thep" className="nav-top-link">
                      Cửa Nhựa<i className="icon-angle-down" />
                    </a>
                    <ul className="sub-menu nav-dropdown nav-dropdown-simple">
                      <li id="menu-item-6638" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6638">
                        <a href="https://xaydungviethung.vn/san-pham/cua-nhua-loi-thep-cua-di-hai-canh-mo-quay">Cửa nhựa lõi thép –Cửa đi hai cánh mở quay</a>
                      </li>
                      <li id="menu-item-6639" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6639">
                        <a href="https://xaydungviethung.vn/san-pham/cua-nhua-loi-thep-cua-mo-quay-ra-ngoai">Cửa nhựa lõi thép –Cửa sổ mở quay ra ngoài</a>
                      </li>
                      <li id="menu-item-6640" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6640">
                        <a href="https://xaydungviethung.vn/san-pham/cua-nhua-loi-thep-cua-mo-quay-giau-khung">Cửa nhựa lõi thép –Cửa mở quay giấu khung</a>
                      </li>
                      <li id="menu-item-6641" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6641">
                        <a href="https://xaydungviethung.vn/san-pham/cua-nhua-loi-thep-gia-cuong">Cửa nhựa lõi thép gia cường</a>
                      </li>
                      <li id="menu-item-6642" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6642">
                        <a href="https://xaydungviethung.vn/san-pham/cua-quay-vao-trong">Cửa sổ nhựa lõi thép mở quay vào trong</a>
                      </li>
                      <li id="menu-item-6643" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6643">
                        <a href="https://xaydungviethung.vn/san-pham/cua-nhua-loi-thep-cua-di-mo-truot">Cửa nhựa lõi thép –cửa đi mở trượt</a>
                      </li>
                      <li id="menu-item-6644" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6644">
                        <a href="https://xaydungviethung.vn/san-pham/nhung-uu-diem-cua-nhua-loi-thep-upvc">Những ưu điểm cửa nhựa lõi thép upvc</a>
                      </li>
                      <li id="menu-item-6645" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6645">
                        <a href="https://xaydungviethung.vn/san-pham/cua-nhua-loi-thep-upvc-co-ben-cao">Cửa nhựa lõi thép uPVC có độ bền cao</a>
                      </li>
                    </ul>
                  </li>
                  <li id="menu-item-6713" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-6713">
                    <a href="https://xaydungviethung.vn/tin-tuc" className="nav-top-link">Tin Tức –Khuyến Mại</a>
                  </li>
                  <li id="menu-item-6704" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6704 has-dropdown">
                    <a href="https://xaydungviethung.vn/bao-gia" className="nav-top-link">
                      Báo Giá<i className="icon-angle-down" />
                    </a>
                    <ul className="sub-menu nav-dropdown nav-dropdown-simple">
                      <li id="menu-item-6302" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-6302">
                        <a href="https://xaydungviethung.vn/bao-gia-cua-nhom-kinh-cao-cap-xingfa">Báo Giá Cửa XingFa</a>
                      </li>
                      <li id="menu-item-6773" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6773">
                        <a href="https://xaydungviethung.vn/san-pham/bao-gia-cua-nhom-kinh-viet-phap">Báo giá cửa nhôm kính Việt Pháp</a>
                      </li>
                      <li id="menu-item-6744" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6744">
                        <a href="https://xaydungviethung.vn/san-pham/bao-gia-vach-ngan-nhom-kinh">Báo Giá Vách Ngăn</a>
                      </li>
                      <li id="menu-item-6730" className="menu-item menu-item-type-post_type menu-item-object-post menu-item-6730">
                        <a href="https://xaydungviethung.vn/bang-bao-gia-cua-nhom-kinh-gia-re">Bảng báo giá cửa nhôm kính giá rẻ</a>
                      </li>
                      <li id="menu-item-6737" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6737">
                        <a href="https://xaydungviethung.vn/san-pham/bao-gia-cua-kinh">Báo Giá Cửa Kính</a>
                      </li>
                      <li id="menu-item-6738" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-6738">
                        <a href="https://xaydungviethung.vn/san-pham/bao-gia-cabin-phong-tam-kinh">Báo giá cabin phòng tắm kính</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-bg-container fill">
            <div className="header-bg-image fill" />
            <div className="header-bg-color fill" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;