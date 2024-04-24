import React, { Component } from 'react';
import "./Form.css";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
            userName: "",
            creditCard: "",
            date: "",
            cvv: "",
            zipCode: "",
            submit: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.cardHandeler = this.cardHandeler.bind(this);
        this.cvvHandler = this.cvvHandler.bind(this);
        this.zipCodeHandler = this.zipCodeHandler.bind(this);
        this.dateHandeler = this.dateHandeler.bind(this)
    }
    nameHandler(event) {
        this.setState({
            userName: event.target.value
        })
    }
    cardHandeler(e) {
        this.setState({
            creditCard: e.target.value
        })
    }
    cvvHandler(e) {
        if (!isNaN(e.target.value)) {
            this.setState({
                cvv: e.target.value
            })
        } else {
            alert("please inter number")
        }
    }
    zipCodeHandler(e) {
        this.setState({
            zipCode: e.target.value
        })
    }
    dateHandeler(e) {
        this.setState({
            date: e.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submit: true });
        if (this.state.zipCode && this.state.userName && this.state.creditCard && this.state.cvv !== "") {
            this.setState({
                isValid: true
            })
        }
    }

    render() {
        return (
            <>
                <div id="div-1" className="white_back">
                    <form onSubmit={this.handleSubmit} className="white_back">
                        {/* <img id="avatar" className="white_back" src="..\.\public\assets\Happy Bunch Avatar.png" alt="user profile" /> */}
                        <div id='svgHolder'>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="104.000000pt" height="65.000000pt" viewBox="0 0 104.000000 65.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,65.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path d="M420 545 c-19 -9 -43 -24 -53 -33 -28 -25 -57 -87 -57 -121 0 -25 -4 -30 -27 -33 -24 -3 -28 -7 -28 -35 0 -25 -4 -33 -17 -33 -40 0 -40 -76 0 -129 29 -39 91 -71 140 -71 l42 0 0 79 c0 73 -2 80 -26 95 -18 13 -24 24 -22 44 2 22 11 30 43 40 50 16 71 36 86 79 l11 34 76 -3 77 -3 3 -118 c3 -113 2 -118 -22 -142 -14 -14 -34 -25 -46 -25 -17 0 -20 -6 -20 -40 0 -40 0 -40 38 -40 57 0 123 38 149 85 26 46 30 103 8 111 -8 4 -15 19 -15 35 0 15 -6 32 -14 36 -7 4 -16 31 -19 60 -7 62 -18 82 -65 114 -30 20 -49 24 -121 27 -61 1 -96 -2 -121 -13z" />
                                <path d="M505 389 c-11 -16 -2 -17 25 -2 24 12 24 13 3 13 -12 0 -25 -5 -28 -11z" />
                                <path d="M620 385 c14 -7 27 -11 30 -9 6 7 -22 24 -40 23 -9 0 -5 -6 10 -14z" />
                                <path d="M516 361 c-4 -5 -2 -12 3 -15 5 -4 12 -2 15 3 4 5 2 12 -3 15 -5 4 -12 2 -15 -3z" />
                                <path d="M615 359 c-10 -15 3 -25 16 -12 7 7 7 13 1 17 -6 3 -14 1 -17 -5z" />
                                <path d="M590 326 c6 -28 4 -36 -9 -39 -10 -3 -7 -5 8 -6 21 -1 23 2 17 30 -3 17 -6 35 -6 40 0 5 -4 9 -9 9 -5 0 -5 -15 -1 -34z" />
                                <path d="M410 305 c7 -9 15 -13 17 -11 7 7 -7 26 -19 26 -6 0 -6 -6 2 -15z" />
                                <path d="M530 273 c0 -13 29 -38 35 -31 3 3 -4 13 -15 23 -11 10 -20 13 -20 8z" />
                            </g>
                        </svg>
                        <h3 id="payment_text" className="white_back">Payment info</h3>
                        </div>
                        

                        <p className="white_back">Fullname</p>
                        <input onKeyUp={this.nameHandler} type="text" maxLength="50" autoFocus placeholder="Alex Smith" size="55" className="white_back inp" />
                        {this.state.submit && this.state.userName.length <= 0 && (
                            <span>this fild shoud be complate</span>
                        )}

                        <div>
                            <p className="white_back">Credit Card Number</p>
                            <input onKeyUp={this.cardHandeler} type="number" placeholder="1234 1234 1234 1234" className="white_back inp" />
                            {this.state.submit && this.state.creditCard.length <= 0 && (
                                <span>this fild shoud be complate</span>
                            )}
                        </div>
                     <div id='litelInput'> <div id="div2" className="white_back">
                            <p className="white_back">Exp Date</p>
                            <input onChange={this.dateHandeler} type="date" placeholder="MM/YY" className="white_back inpk" />
                            {this.state.submit && this.state.date.length <= 0 && (
                                <span>this fild shoud be complate</span>
                            )}
                        </div>

                        <div id="div3" className="white_back">
                            <p className="white_back">CVV</p>
                            <input onKeyUp={this.cvvHandler} type="password" placeholder="***" className="white_back inpk" />
                            {this.state.submit && this.state.cvv <= 0 && (
                                <span>this fild shoud be complate</span>
                            )}
                        </div>
                        </div>  
                        <p className="white_back">Zip Code</p>
                        <input onKeyUp={this.zipCodeHandler} type="number" placeholder="90210" className="white_back inp" />
                        {this.state.submit && this.state.zipCode.length <= 0 && (
                            <span>this fild shoud be complate</span>
                        )}
                        <button type="submit" id="buttom">Confirm Payment</button>
                        {this.state.isValid && (
                            <p className="white_back submittag complateValues">You verify that info is correct</p>
                        )}
                    </form>
                </div>
            </>
        );
    }
}

