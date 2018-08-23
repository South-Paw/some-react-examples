import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin-bottom: 8px;
`;

const Label = styled.label`
  margin-right: 8px;
  width: 120px;
  display: inline-block;
`;

const Item = ({ id, label, type, handler }) => (
  <Div>
    <Label htmlFor={id}>{label}</Label>
    <input id={id} type={type} onChange={handler} />
  </Div>
);

export default Item;
