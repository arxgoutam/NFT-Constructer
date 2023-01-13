import React, { Component } from "react";
import axios from "axios";

class DemoForm extends Component {
  state = {
    name: "",
    email: "",
    error_list: [],
  };

  handelInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  Subscriber = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://admin.nftconstructer.com/api/subscriber",
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      this.setState({
        name: "",
        email: "",
      });
      alert(res.data.message);
    } else {
      console.log(res.data.message);
      alert(res.data.message);
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.Subscriber}>
          <div
            className="newsletters"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="newsletter-content">
              <div className="flex-col">
                <p className="urbanist-dark-42">Newsletters</p>
                <p className="raleway-white-18">
                  Get notified about our upcoming updates regularly.
                </p>
              </div>

              <div className="subscribe-inputs">
                <input
                  type="text"
                  onChange={this.handelInput}
                  value={this.state.name}
                  name="name"
                  placeholder="Your Name"
                  className="subscriber-name"
                />

                <div className="input-withbtn">
                  <input
                    type="email"
                    required
                    name="email"
                    onChange={this.handelInput}
                    value={this.state.email}
                    placeholder="Enter Email Address"
                  />
                  <button type="submit" className="subscirbe-btn">
                    <img src="assets/imgs/send.svg" alt="Send" /> Subscribe
                  </button>
                </div>
              </div>
            </div>

            <img
              src="assets/imgs/banner-img.png"
              alt="nft constructer"
              className="banner-img"
            />
          </div>
          {/* ===================Newsletter section end ================== */}
        </form>
      </>
    );
  }
}
export default DemoForm;
