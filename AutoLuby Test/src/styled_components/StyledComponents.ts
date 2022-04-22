//LIBRARIES
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
//IMAGES
import { ReactComponent as logoSVG } from '../assets/images/logo.svg'
//TYPES
import { StyledStatusType } from '../services/types/types'

export const StyledLogoSVG = styled(logoSVG)`
  width: 2.375rem;
  height: auto;
`

export const StyledSheetStatus = styled.span<StyledStatusType>`
  border-radius: 3px;

  ${(props) => {
    if (props.status == 'Vendido') {
      return css`
        background-color: #f54a4833;
        color: #f54a48;
        padding: 3px 18px;
      `
    } else if (props.status == 'Reservado') {
      return css`
        background-color: #fac12f33;
        color: #fac12f;
        padding: 3px 9px;
      `
    } else {
      return css`
        background-color: #34c38f33;
        color: #34c38f;
        padding: 3px 10px;
      `
    }
  }}
`
export const StyledLink = styled(Link)`
  position: relative;
  width: 100%;
`

export const StyledLinkHeader = styled(Link)`
  position: relative;
  width: 100%;

  display: inline-flex;
  align-items: center;
  gap: 23px;
`
