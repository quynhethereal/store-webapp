import styled,{css} from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyle = css `
padding: 10px 15px;
cursor: pointer;
`

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 20px 60px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 60px;
  font-weight: bold;
`;

export const OptionLink = styled(Link)`${OptionContainerStyle}`;

export const OptionDiv = styled.div`${OptionContainerStyle}`;
