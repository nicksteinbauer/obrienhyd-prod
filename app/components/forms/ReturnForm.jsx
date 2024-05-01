import {Component} from 'react';
import * as emailjs from 'emailjs-com';
import {Button, Form, Label, Input, FormGroup, FormFeedback} from 'reactstrap';
import {isEmail} from 'validator';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';

export default class ReturnForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    isVerified: false,
    data: {
      name: '',
      email: '',
      phone: '',
      product: '',
      order: '',
      returndetails: '',
      size: '',
      message: '',
    },
    errors: {},
  });

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: '',
      },
    });
  };

  validate = () => {
    const {data} = this.state;
    let errors = {};

    //@ts-ignore
    if (data.name === '') errors.name = 'Name required';
    if (!isEmail(data.email)) errors.email = 'Email must be valid';
    if (data.email === '') errors.email = 'Email required';
    if (data.phone === '') errors.phone = 'Phone required';
    if (data.product === '') errors.product = 'Product required';
    if (data.message === '') errors.message = 'Message required';
    return errors;
  };

  //@ts-ignore
  handleSubmit = (e) => {
    e.preventDefault();
    const {data} = this.state;
    const errors = this.validate();

    if (Object.keys(errors).length === 0 && this.state.isVerified) {
      emailjs.sendForm(
        'obrien_365',
        'obrien_return_form',
        e.target,
        'user_vOc0ylPHeC2nCdyLQJAiW',
      );
      //Resetting the form
      this.setState(this.getInitialState());
      this.setState({
        isVerified: true,
      });

      Swal.fire({
        title: "Email Successfully Sent to the O'Brien Team",
        icon: 'success',
      });
    } else {
      this.setState({errors});
    }
  };

  handleRecaptchaChange = (response) => {
    if (response) {
      this.setState({
        isVerified: true,
      });
    }
  };

  handleAsyncScriptOnLoad = () => {
    console.log('reCAPTCHA script loaded successfully');
    // You can perform additional actions here if needed
  };
  render() {
    const {data, errors} = this.state;
    return (
      <div id="contact-form" className="forty-nine">
        <Form onSubmit={this.handleSubmit}>
          <div className="flex-md gap10">
            <FormGroup className="formFlex padding">
              <Label className="text-muted" for="name">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                value={data.name}
                invalid={errors.name ? true : false}
                onChange={this.handleChange}
              />
              <FormFeedback>{errors.name}</FormFeedback>
            </FormGroup>
            <FormGroup className="formFlex padding">
              <Label className="text-muted" for="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="Email"
                name="email"
                value={data.email}
                invalid={errors.email ? true : false}
                onChange={this.handleChange}
              />
              <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>
          </div>

          <div className="flex-md gap10">
            <FormGroup className="padding formFlex">
              <Label className="text-muted" for="phone">
                Phone #
              </Label>
              <Input
                type="tel"
                id="phone"
                placeholder="Phone"
                name="phone"
                value={data.phone}
                invalid={errors.phone ? true : false}
                onChange={this.handleChange}
              />
              <FormFeedback>{errors.phone}</FormFeedback>
            </FormGroup>

            <FormGroup className="padding formFlex">
              <Label className="text-muted" for="product">
                Product
              </Label>
              <Input
                type="text"
                id="product"
                placeholder="Product"
                name="product"
                value={data.product}
                invalid={errors.product ? true : false}
                onChange={this.handleChange}
              />
              <FormFeedback>{errors.product}</FormFeedback>
            </FormGroup>
          </div>
          <div className="flex-md gap10">
            <FormGroup className="padding formFlex">
              <Label className="text-muted" for="order">
                Order Number / Confirmation #
              </Label>
              <Input
                type="text"
                id="order"
                placeholder="Order / Confirmation #"
                name="order"
                value={data.order}
                invalid={errors.order ? true : false}
                onChange={this.handleChange}
              />
              <FormFeedback>{errors.order}</FormFeedback>
            </FormGroup>

            <FormGroup className="padding formFlex">
              <Label className="text-muted" for="returndetails">
                Return Details
              </Label>
              <Input
                type="select"
                name="returndetails"
                value={data.returndetails}
                invalid={errors.returndetails ? true : false}
                onChange={this.handleChange}
              >
                <option>Select</option>
                <option value="refund">Return for Refund</option>
                <option value="exchange">Return for Exchange</option>
              </Input>
              <FormFeedback>{errors.returndetails}</FormFeedback>
            </FormGroup>

            <FormGroup className="padding formFlex">
              <Label className="text-muted" for="size">
                If Return, Which Size
              </Label>
              <Input
                type="text"
                id="size"
                placeholder="Which Size?"
                name="size"
                value={data.size}
                invalid={errors.size ? true : false}
                onChange={this.handleChange}
              />
              <FormFeedback>{errors.size}</FormFeedback>
            </FormGroup>
          </div>

          <FormGroup className="padding">
            <Label className="text-muted" for="message">
              Brief description of warranty issue
            </Label>
            <Input
              type="textarea"
              id="message"
              placeholder="Message"
              name="message"
              value={data.message}
              invalid={errors.message ? true : false}
              onChange={this.handleChange}
            />
            <FormFeedback>{errors.message}</FormFeedback>
          </FormGroup>

          <FormGroup className="padding">
            <ReCAPTCHA // Changed component name
              sitekey="6LcClc0ZAAAAAKoN2AsxwRRd4GMtD_yUG5AwXEhl"
              onChange={this.handleRecaptchaChange}
              asyncScriptOnLoad={this.handleAsyncScriptOnLoad} // Add asyncScriptOnLoad prop
            />
            <FormFeedback
              className={
                this.state.isVerified === false
                  ? 'feedback-active'
                  : 'feedback-inactive'
              }
            >
              Comfirm that you are human.
            </FormFeedback>
          </FormGroup>
          <FormGroup className="padding">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
