import styled from 'styled-components';

const Form = styled.form`
display: flex;
flex-direction: column;
width: 300px;
`;

Form.Button = styled.button`
  margin-top: 10px;
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: 0.8em 1em calc(0.8em + 3px);
  border-radius: 3px;
  background: rgb(64, 199, 129);
  box-shadow: 0 -3px rgb(53, 167, 110) inset;
  transition: 0.2s;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: rgb(33, 147, 90);
    box-shadow: 0 3px rgb(33, 147, 90) inset;
  }
`;

Form.Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 20px;
  & input {
    margin: 10px 0;
    border: 1px solid #cccccc; 
    border-radius: 3px; 
    background: #ffffff;
    outline: none; 
    color: #cccccc; 
    padding: 5px;
    font-size: 18px;
  }
`;
export default Form;