import React,{ Component } from 'react'
import { InputGroup,InputGroupAddon,InputGroupText,Input,Button } from 'reactstrap';
import './List.css'

import * as actions from '../actions/index';
import { connect } from 'react-redux';

class List extends Component{
  constructor(props){
    super(props)
    this.delete = this.delete.bind(this)
    this.edit = this.edit.bind(this)
    this.editInput = this.editInput.bind(this)
  }
delete(event){
  this.props.DELETE_LIST(Number(event.target.value))
  console.log(event.target.value)
}
edit(event){
  var InputValue  = this.props.InputValue
  this.props.EDIT_LIST(Number(event.target.value),InputValue)
  console.log(event.target.value)
}
editInput(event){
  this.props.CHANGE_INPUT_VALUE(event.target.value)
}
    render(){
        const {List} = this.props;
    return( <div className='List'>
    {
        List.map((item,index) =>
        
    <InputGroup className='List-show'>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Input addon type="checkbox" aria-label="Checkbox for following text input" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
        defaultValue = {item.name}
        onChange = {this.editInput} />
        <Button onClick={this.edit} value = {index} outline color="info">Edit</Button>
        <Button onClick={this.delete} value = {index} outline color="danger">Delete</Button>
      </InputGroup>
      
      )}
</div>);
}
}
const mapStatetoProps = (state) => {
    return {
        List : state.List,
        InputValue : state.InputValue
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    DELETE_LIST: (valueIndex) => dispatch(actions.DELETE_LIST({ valueIndex: valueIndex })),
    EDIT_LIST: (index,valueName) => dispatch(actions.EDIT_LIST({ index : index,valueName: valueName })),
    CHANGE_INPUT_VALUE: (value) => dispatch(actions.CHANGE_INPUT_VALUE({ value: value }))
  }
}

export default connect(mapStatetoProps,mapDispatchToProps) (List);