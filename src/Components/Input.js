import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.input`
  border-radius: ${props => props.theme.borderRadius};
  height: 35px;
  font-size: 12px;
  padding: 0px 15px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 20px;
  color:white;
}
`;

const Input = ({ 
    placeholder,
    required = true,
    value,
    onChange,
    type="text",
    className 
}) => (
     <Container
       className={className} 
       placeholder={placeholder} 
       required={required} 
       value={value} 
       onChange={onChange} 
       type={type} 
       />
    );

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string
};

export default Input;