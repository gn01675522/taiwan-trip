import styled, { css } from "styled-components";
import { ReactComponent as TaiwanLogoSVG } from "../../../assets/svg/taiwanLogo.svg";
import { ReactComponent as PinkFrameSVG } from "../../../assets/svg/pinkFrame.svg";
import { ReactComponent as YellowFrameSVG } from "../../../assets/svg/yellowFrame.svg";
import { ReactComponent as GreenFrameSVG } from "../../../assets/svg/greenFrame.svg";
import { ReactComponent as ShadowSVG } from "../../../assets/svg/shadow.svg";

import { screenWide } from "../../../dummy_data/DUMMY_DATA";

const { pad, pc } = screenWide;

const BaseCircleSymbolWrapper = css`
  display: none;
  @media screen and (min-width: ${pad}) {
    display: block;
    width: 34px;
    height: 34px;
  }
`;

export const TaiwanSymbol = styled(TaiwanLogoSVG)`
  width: 90px;
  height: 52px;
  @media screen and (min-width: ${pad}) {
    width: 86px;
    height: 50px;
  }
  @media screen and (min-width: ${pc}) {
    width: 99px;
    height: 57px;
  }
`; // which use this： navigation.component.jsx

export const PinkCircleSymbol = styled(PinkFrameSVG)`
  ${BaseCircleSymbolWrapper}
`; // which use this： navigation.component.jsx

export const YellowCircleSymbol = styled(YellowFrameSVG)`
  ${BaseCircleSymbolWrapper}
`; // which use this： navigation.component.jsx

export const GreenCircleSymbol = styled(GreenFrameSVG)`
  ${BaseCircleSymbolWrapper}
`; // which use this： navigation.component.jsx

export const Shadow = styled(ShadowSVG)`
  position: absolute;
  width: 100%;
`; // which use this： navigation.component.jsx
