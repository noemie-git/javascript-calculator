import React, { Component } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      input: "",
      decimal: false,
      operator: "" };


    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.validateEquals = this.validateEquals.bind(this);
  }

  handleClick(event) {
    // switch case to add correct id
    switch (event.currentTarget.id) {
      case "seven":
        this.setState({
          id: this.state.input + 7,
          input: this.state.input + 7,
          operator: "" });

        break;
      case "eight":
        this.setState({
          id: this.state.input + 8,
          input: this.state.input + 8,
          operator: "" });

        break;
      case "nine":
        this.setState({
          id: this.state.input + 9,
          input: this.state.input + 9,
          operator: "" });

        break;
      case "six":
        this.setState({
          id: this.state.input + 6,
          input: this.state.input + 6,
          operator: "" });

        break;
      case "five":
        this.setState({
          id: this.state.input + 5,
          input: this.state.input + 5,
          operator: "" });

        break;
      case "four":
        this.setState({
          id: this.state.input + 4,
          input: this.state.input + 4,
          operator: "" });

        break;
      case "three":
        this.setState({
          id: this.state.input + 3,
          input: this.state.input + 3,
          operator: "" });

        break;
      case "two":
        this.setState({
          id: this.state.input + 2,
          input: this.state.input + 2,
          operator: "" });

        break;
      case "one":
        this.setState({
          id: this.state.input + 1,
          input: this.state.input + 1,
          operator: "" });

        break;
      case "zero":
        if (this.state.input === "") {
          this.setState({
            id: 0,
            input: 0,
            operator: "" });

        } else {
          this.setState({
            id: this.state.input + 0,
            input: this.state.input + 0,
            operator: "" });

        };
        break;

      // ADD

      case "add":
        if (this.state.operator === "") {
          this.setState(state => ({
            id: "+",
            input: state.input + "+",
            operator: "+",
            decimal: false }));


        } else {

          this.setState(state => ({
            id: "+",
            input: state.input.replace(/([\/\*\+\-])+/, "+"),
            decimal: false,
            operator: "+" }));

        }
        break;

      // DIVIDE

      case "divide":
        if (this.state.operator === "") {
          this.setState(state => ({
            id: "/",
            input: state.input + "/",
            operator: "/",
            decimal: false }));


        } else {

          this.setState(state => ({
            id: "/",
            input: state.input.replace(/([\/\*\+\-])+/, "/"),
            decimal: false,
            operator: "/" }));

        }
        break;

      // SUBSTRACT

      case "subtract":
        if (this.state.operator === "") {
          this.setState(state => ({
            id: "-",
            input: state.input + "-",
            operator: "-",
            decimal: false }));


        } else {

          this.setState(state => ({
            id: "-",
            input:
            state.operator === "/-" ||
            state.operator === "*-" ||
            state.operator === "+-" ? state.input.slice(0, -1) + "-" : state.input + "-",
            decimal: false,
            operator: "-" }));

        }
        break;

      // MULTIPLY

      case "multiply":
        if (this.state.operator === "") {
          this.setState(state => ({
            id: "*",
            input: state.input + "*",
            operator: "*",
            decimal: false }));

        } else {
          this.setState(state => ({
            id: "*",
            input: state.input.replace(/([\/\*\+\-])+/, "*"),
            decimal: false,
            operator: "*" }));

        }
        break;

      case "decimal":
        if (this.state.decimal === false) {
          this.setState({
            id: this.state.id,
            input: this.state.input + ".",
            decimal: true,
            operator: "" });

        }
        break;

      case "equals":

        // add if statement to check regex is all input from calc

        if (this.validateEquals(this.state.input)) {
          this.setState({
            id: eval(this.state.input),
            input: eval(this.state.input),
            decimal: false,
            operator: "" });

        };
        break;
      default:
        this.setState({
          id: "",
          input: "0",
          operator: "" });}


  }

  handleClear(e) {
    this.setState({
      id: "0",
      input: "",
      decimal: false,
      operator: "" });

  }

  validateEquals(formula) {
    let str = formula;
    let regexp = /([-+]?[0-9]*\.?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)/gi;
    regexp.test(str);
    return str;
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "js-calculator" }, /*#__PURE__*/
      React.createElement("div", { id: "pad-elements" }, /*#__PURE__*/
      React.createElement("div", { id: "formula" }, this.state.input), /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.id), /*#__PURE__*/
      React.createElement("div", { id: "clear", onClick: this.handleClear }, "AC"), /*#__PURE__*/
      React.createElement("div", { id: "equals", onClick: this.handleClick }, "="), /*#__PURE__*/
      React.createElement("div", { id: "decimal", onClick: this.handleClick }, "."), /*#__PURE__*/
      React.createElement("div", { id: "multiply", onClick: this.handleClick }, "x"), /*#__PURE__*/
      React.createElement("div", { id: "zero", onClick: this.handleClick }, "0"), /*#__PURE__*/
      React.createElement("div", { id: "divide", onClick: this.handleClick }, "/"), /*#__PURE__*/
      React.createElement("div", { id: "subtract", onClick: this.handleClick }, "-"), /*#__PURE__*/
      React.createElement("div", { id: "add", onClick: this.handleClick }, "+"), /*#__PURE__*/
      React.createElement("div", { id: "seven", onClick: this.handleClick }, "7"), /*#__PURE__*/
      React.createElement("div", { id: "four", onClick: this.handleClick }, "4"), /*#__PURE__*/
      React.createElement("div", { id: "one", onClick: this.handleClick }, "1"), /*#__PURE__*/
      React.createElement("div", { id: "eight", onClick: this.handleClick }, "8"), /*#__PURE__*/
      React.createElement("div", { id: "five", onClick: this.handleClick }, "5"), /*#__PURE__*/
      React.createElement("div", { id: "two", onClick: this.handleClick }, "2"), /*#__PURE__*/
      React.createElement("div", { id: "nine", onClick: this.handleClick }, "9"), /*#__PURE__*/
      React.createElement("div", { id: "six", onClick: this.handleClick }, "6"), /*#__PURE__*/
      React.createElement("div", { id: "three", onClick: this.handleClick }, "3"))));



  }}
;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("calculator"));