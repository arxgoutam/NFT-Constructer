import React, { Component } from "react";
import axios from "axios";

class DemoForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    whatsapp: "",
  };

  handelInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getDemo = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://admin.nftconstructer.com/api/demo",
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      this.setState({
        name: "",
        email: "",
        phone: "",
        message: "",
        whatsapp: "",
      });
      alert(res.data.message);
    }
  };

  render() {
    return (
      <div>
        {/* ===================demo request section ================== */}
        <section className="demo-request cpt-6" id="get-quoted">
          <div className="container">
            <div className="section-title">
              <p className="sm-title">Interested</p>
              <h2 className="sec-title">Get In Touch Now</h2>
              <p className="sec-des">
              Our system processes assets on the blockchain with unique and identifiable codes and metadata.
              </p>
            </div>

            <div className="row cpt-7">
              <div
                className="request-form"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <form onSubmit={this.getDemo}>
                  <div className="form-group-2">
                    <div className="input-group">
                      <label htmlFor="name">Your Name</label>
                      <div className="input-box">
                        <input
                          type="text"
                          onChange={this.handelInput}
                          value={this.state.name}
                          name="name"
                          className="form-control"
                          placeholder="Enter Your Name"
                        />
                      </div>
                    </div>
                    <div className="input-group">
                      <label htmlFor="phone">Phone Number:</label>
                      <div className="input-box">
                        <input
                          type="text"
                          name="phone"
                          onChange={this.handelInput}
                          value={this.state.phone}
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
                          name="email"
                          onChange={this.handelInput}
                          value={this.state.email}
                          className="form-control"
                          placeholder="YourEmail@domain.com"
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <label htmlFor="whatsapp">Whatsapp :</label>
                      <div className="input-box">
                        <input
                          type="text"
                          onChange={this.handelInput}
                          value={this.state.whatsapp}
                          name="whatsapp"
                          placeholder="Social Acciount"
                          className="form-control with-select"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <label htmlFor="message">Consult :</label>
                      <div className="input-box">
                        <textarea
                          name="message"
                          onChange={this.handelInput}
                          value={this.state.message}
                          className="form-control"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button className="custom-btn" type="submit">
                      Get Quoted
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* ===================demo request section end ================== */}
      </div>
    );
  }
}
export default DemoForm;
