import {Component} from 'react';
import * as emailjs from 'emailjs-com';
import {Button, Form, Label, Input, FormGroup, FormFeedback} from 'reactstrap';
import {isEmail} from 'validator';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';

export default class RegistrationForm extends Component {
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
      address: '',
      city: '',
      statepick: '',
      zip: '',
      product: '',
      date_month: '',
      date_day: '',
      date_year: '',
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
        'obrien_product_registrat',
        e.target,
        'user_vOc0ylPHeC2nCdyLQJAiW',
      );

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
          <div className="flex-md gap10">
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
          </div>

          <FormGroup className="padding formFlex">
            <Label className="text-muted" for="address">
              Address
            </Label>
            <Input
              type="text"
              id="address"
              placeholder="Address"
              name="address"
              value={data.address}
              invalid={errors.address ? true : false}
              onChange={this.handleChange}
            />
            <FormFeedback>{errors.address}</FormFeedback>
          </FormGroup>

          <div className="flex-md gap10">
            <FormGroup className="formFlex padding">
              <Label className="text-muted" for="city">
                City
              </Label>
              <Input
                id="city"
                placeholder="City"
                name="city"
                value={data.city}
                invalid={errors.city ? true : false}
                onChange={this.handleChange}
              />
              <FormFeedback>{errors.city}</FormFeedback>
            </FormGroup>
            <FormGroup className="padding formFlex">
              <Label className="text-muted" for="statepick">
                State
              </Label>
              <Input
                type="select"
                name="statepick"
                value={data.statepick}
                invalid={errors.statepick ? true : false}
                onChange={this.handleChange}
              >
                <option>Select a State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </Input>
              <FormFeedback>{errors.statepick}</FormFeedback>
            </FormGroup>
            <FormGroup className="formFlex padding">
              <Label className="text-muted" for="city">
                Zip Code
              </Label>
              <Input
                id="zip"
                placeholder="Zip"
                name="zip"
                value={data.zip}
                invalid={errors.zip ? true : false}
                onChange={this.handleChange}
              />
              <FormFeedback>{errors.zip}</FormFeedback>
            </FormGroup>
          </div>

          <FormGroup className="padding formFlex">
            <Label className="text-muted" for="product">
              Product Purchased
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

          <FormGroup className="padding stopMarg">
            <Label className="text-muted">Date Purchased</Label>
          </FormGroup>
          <div className="flex-md gap10">
            <FormGroup className="formFlex padding">
              <Label className="text-muted" for="date_month">
                Month
              </Label>
              <Input
                id="date_month"
                placeholder="Month"
                name="date_month"
                value={data.date_month}
                invalid={errors.date_month ? true : false}
                onChange={this.handleChange}
              />
              <FormFeedback>{errors.date_month}</FormFeedback>
            </FormGroup>
            <FormGroup className="formFlex padding">
              <Label className="text-muted" for="date_day">
                Day
              </Label>
              <Input
                id="date_day"
                placeholder="Day"
                name="date_day"
                value={data.date_day}
                invalid={errors.date_day ? true : false}
                onChange={this.handleChange}
              />
              <FormFeedback>{errors.date_day}</FormFeedback>
            </FormGroup>
            <FormGroup className="formFlex padding">
              <Label className="text-muted" for="date_year">
                Year
              </Label>
              <Input
                id="date_year"
                placeholder="Year"
                name="date_year"
                value={data.date_year}
                invalid={errors.date_year ? true : false}
                onChange={this.handleChange}
              />
              <FormFeedback>{errors.date_year}</FormFeedback>
            </FormGroup>
          </div>

          <FormGroup className="padding">
            <Label className="text-muted" for="message">
              Message and Additional Notes
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
