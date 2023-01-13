import React, { Component } from "react";
import { useState, useEffect } from "react";
import ReactWhatsapp from "react-whatsapp";

import axios from "axios";
function DemoForm() {
  const [message, setMessage] = useState("");

  return (
    <div className='input-box widht-40 '>
      <div className='input-area'>
        <form>
          <input
            type='text'
            name='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='form-control'
            placeholder='Message'
          />
          <div className='icon'>
            <i className='icofont-envelope'></i>
          </div>
          <div className='btn'>
            <ReactWhatsapp number='+13025977087' message={message}>
              <button type='submit' className='singup-btn'>
                Get In Touch
              </button>
            </ReactWhatsapp>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DemoForm;

// class DemoForm extends Component {
//   state = {
//     email: "",
//   };

//   handelInput = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   Subscriber = async (e) => {
//     e.preventDefault();
//     const res = await axios.post(
//       "https://admin.nftconstructer.com/api/subscriber",
//       this.state
//     );
//     if (res.data.status === 200) {
//       console.log(res.data.message);
//       this.setState({
//         email: "",
//       });
//       alert(res.data.message);
//     }
//   };

//   render() {
//     return (
//       <div className="input-box widht-40 ">
//         <div className="input-area">
//           <form onSubmit={this.Subscriber}>
//             <input
//               type="text"
//               onChange={this.handelInput}
//               value={this.state.email}
//               required
//               name="email"
//               className="form-control"
//               placeholder="Type your email here"
//             />
//             <div className="icon">
//               <i className="icofont-envelope"></i>
//             </div>
//             <div className="btn">
//               <button type="submit" className="singup-btn">
//                 Subscribe
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//     );
//   }
// }
// export default DemoForm;
