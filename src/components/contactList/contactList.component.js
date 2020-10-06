import styled from 'styled-components';

const List = styled.ul`
margin-top: 20px;
`;

List.Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 5px inset rgba(28, 110, 164, 0.57);
  border-radius: 10px;
  padding: 15px;
  margin-top: 10px;
  & p {
    font-size: 20px;
  }
  & button {
    background-color: #555555;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: #444444;
    }
  }
`;

export default List;