import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
          Truyền thông nói gì về chúng tôi
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/OASGscJQXp0"
              title="BookingCare: Hệ thống đặt khám trực tuyến"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              React.JS là một thư viện, framework giúp xây dựng một website hiện
              đại, có tính mở rộng và hiệu năng cực lớn. Các sản phẩm tiêu biểu
              sử dụng React có thể kể đến như Facebook và Instagram. Được
              Facebook chống lưng, cũng như đầu tư mạnh mẽ, cộng với một cộng
              đồng đông đảo sử dụng, React chính là thư viện Frontend phổ biến
              nhất hiện nay, bỏ xa Vue và Angular.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
