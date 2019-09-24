import React, { Component } from 'react'
import { Input, Button } from 'reactstrap';
import './Input.css'

import * as actions from '../actions/index';
import { connect } from 'react-redux';

class InputList extends Component {
    constructor(props) {
        super(props)
        this.Add = this.Add.bind(this)
        this.Change = this.Change.bind(this)
    }
    Add() {
        this.props.ADD_LIST(this.props.InputValue);
    }
    Change(event) {
        this.props.CHANGE_INPUT_VALUE(event.target.value);
    }
    render() {
        return (<div className='InputList'>
            <Input onChange={this.Change} placeholder="write on me" />
            <Button onClick={this.Add} outline color="success">Submit</Button>{' '}
        </div>)
    }
}
const mapStatetoProps = (state) => {
    return {
        InputValue: state.InputValue
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ADD_LIST: (value) => dispatch(actions.ADD_LIST({ value: value })),
        CHANGE_INPUT_VALUE: (value) => dispatch(actions.CHANGE_INPUT_VALUE({ value: value }))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(InputList);