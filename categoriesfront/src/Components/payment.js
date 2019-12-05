import React, { Component } from "react";

const razorpay = new window.Razorpay({
  key: "rzp_test_igd3N3CAkAeRcV",
  key_secret: "rXLwbN77HeeIVma6EQDScJ3P"
});

let globalData = {
  contact: "9960525050",
  email: "mayurmahale9@gmail.com",
  method: "netbanking",
  amount: 40000,
  order_id: "order_9A33XWu170gUtm",
  bank: "HDFC"
  //   "card[name]": "shubham",
  //   "card[number]": "5104015555555558",
  //   "card[cvv]": "566",
  //   "card[expiry_month]": "10",
  //   "card[expiry_year]": "20"
};
class payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holder: "",
      number: "",
      exp: "",
      cvv: ""
    };
  }
  settingState = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {});
  };

  render() {
    return (
      <div>
        <form
          onSubmit={() => {
            razorpay.createPayment(globalData);

            razorpay.on("payment.success", function(res) {
              alert(res.razorpay_payment_id);
              alert(res.razorpay_order_id);
              alert(res.razorpay_signature);
              console.log(res.razorpay_payment_id);
            });
            razorpay.on("payment.error", function(res) {
              alert(res.error.description);
            });
          }}
        >
          <input type="text" name="holder" onChange={this.settingState} />
          <input type="text" name="number" onChange={this.settingState} />
          <input type="text" name="exp" onChange={this.settingState} />
          <input type="text" name="cvv" onChange={this.settingState} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default payment;
