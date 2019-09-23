import React,{ Component } from 'react'
import { InputGroup,InputGroupAddon,InputGroupText,Input,Button } from 'reactstrap';
import './List.css'

import { connect } from 'react-redux';

class List extends Component{
    render(){
        const {List} = this.props;
        console.log(List)
    return( <div className='List'>
    {
        List.map((item) =>
        
    <InputGroup className='List-show'>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Input addon type="checkbox" aria-label="Checkbox for following text input" />
          </InputGroupText>
        </InputGroupAddon>
        <Input readOnly
        value = {item.name}
        />
        <Button outline color="danger">Delete</Button>
      </InputGroup>
      
      )}
</div>);
}
}
const mapStatetoProps = (state) => {
    return {
        List : state.List
    }
}

export default connect(mapStatetoProps) (List);