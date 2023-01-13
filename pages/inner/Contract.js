import React, { Component } from "react";
import axios from "axios";

export default class Contract extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  };

  handelInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  Contract = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://admin.nftconstructer.com/api/contract",
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      this.setState({
        name: "",
        email: "",
        phone: "",
        message: "",
        subject: "",
      });
      alert(res.data.message);
    }
  };

  render() {
    return (
      <section>
        <div className="contact-area cpb-6">
          <div className="container">
            <div className="section-title cpb-7">
              <h2 className="sec-title">CONNECT WITH US</h2>
              <p className="sec-des">
              Our team wants to learn more about your project. Take some time to schedule a call and connect with us today. At Nftconstructer, we always respect your wishes and privacy and never share information with anyone or project details with people not employed by the company. Your security is our top priority.
              </p>
            </div>

            <div className="row">
              <div className="request-form">
                <form onSubmit={this.Contract}>
                  <div className="form-group-2">
                    <div className="input-group">
                      <label htmlFor="name">Your Name</label>
                      <div className="input-box">
                        <input
                          type="text"
                          onChange={this.handelInput}
                          value={this.state.name}
                          name="name"
                          required
                          className="form-control"
                          placeholder="Enter Your Name"
                        />
                      </div>
                    </div>
                    <div className="input-group">
                      <label htmlFor="phone-number">
                        Phone Number with (country code):
                      </label>
                      <div className="input-box">
                        <input
                          type="text"
                          onChange={this.handelInput}
                          value={this.state.phone}
                          name="phone"
                          required
                          placeholder="+1234567890"
                          className="form-control with-select"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group-2">
                    <div className="input-group">
                      <label htmlFor="name">Your E-mail :</label>
                      <div className="input-box">
                        <input
                          type="email"
                          onChange={this.handelInput}
                          value={this.state.email}
                          name="email"
                          required
                          className="form-control"
                          placeholder="YourEmail@domain.com"
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <label htmlFor="subject">Subject :</label>
                      <div className="input-box">
                        <input
                          type="text"
                          onChange={this.handelInput}
                          value={this.state.subject}
                          required
                          name="subject"
                          placeholder="Subject"
                          className="form-control with-select"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <label htmlFor="name">Consult :</label>
                      <div className="input-box">
                        <textarea
                          onChange={this.handelInput}
                          value={this.state.message}
                          required
                          name="message"
                          className="form-control"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button className="custom-btn" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
