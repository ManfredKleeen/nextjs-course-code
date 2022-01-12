import styled from '@emotion/styled';

interface ButtonProps {
  backgroundColor?: string;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || 'red' } !important
`