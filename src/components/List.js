import React,{ Component } from 'react'
import { InputGroup,InputGroupAddon,Input,Button } from 'reactstrap';
import './List.css'

import className from 'classnames'

import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { FaTrash , FaEdit , FaCheckSquare } from 'react-icons/fa';
class List extends Component{
  constructor(props){
    super(props)
    this.delete = this.delete.bind(this)
    this.edit = this.edit.bind(this)
    this.checkdone = this.checkdone.bind(this)
  }
delete(event){
  this.props.DELETE_LIST(Number(event.target.value))
}
edit(event){
  if(this.props.InputValue.length > 10)
  {
  this.props.EDIT_LIST(Number(event.target.value),this.props.InputValue)
  }
  else
  alert('Enter at least 10 characters to change')
}
checkdone(event){
  this.props.CHECK_DONE(Number(event.target.value))
}
    render(){
        const {List} = this.props;
    return( <div className='List'>
    {
        List.map((item,index) =>
        
    <InputGroup className='List-show'>
      <InputGroupAddon addonType="prepend">
        <Button className = 'btn' onClick={this.checkdone} value={index} outline color="primary"> Done <FaCheckSquare className='icon'/></Button>{' '}
      </InputGroupAddon>

      <Input className={className({'Show-Item': item.done === true})}
        readOnly
        value = {item.name}
         /> 
        <Button className = 'btn' onClick={this.edit} value = {index} outline color="info"> Edit <FaEdit className='icon'/></Button>{' '}
        <Button className = 'btn' onClick={this.delete} value = {index} outline color="danger"> Delete <FaTrash className='icon'/></Button>{' '}
    </InputGroup>
      
      )}
</div>);
}
}
const mapStatetoProps = (state) => {
    return {
        List : state.List,
        InputValue : state.InputValue,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    DELETE_LIST: (valueIndex) => dispatch(actions.deleteList({ valueIndex: valueIndex })),
    EDIT_LIST: (index,valueName) => dispatch(actions.editList({ index : index,valueName: valueName })),
    CHANGE_INPUT_VALUE: (value) => dispatch(actions.changeInputValue({ value: value })),
    CHECK_DONE: (checkDone) => dispatch(actions.checkDone({ checkDone: checkDone })),
  }
}

export default connect(mapStatetoProps,mapDispatchToProps) (List);