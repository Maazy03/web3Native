import styled from 'styled-components/native';



export const StyledView = styled.View`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
export const AssetCard = styled.View`
height: 94px;
width: 312px;
border-radius: 16px;
background: #1E1E1E;
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
align-content:center;
position:relative;

`
export const LeftSubView = styled.View`
height: 50px;
width: 50px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
position:absolute;
left:16px;
`
export const RightSubView = styled.View`
height: 50px;
width: 50px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
position:absolute;
right:16px;
`

export const SubViewChild = styled.View`
height:18px;


`
export const SubViewChildPic = styled.View`
height:18px;
width:70px;
display:flex;
 flex-direction:row;
justify-content:flex-start;
 alignItems:center;
 
`
export const AssetsText = styled.Text`
font-family: Jost;
font-style: normal;
font-weight: 500;
font-size: 18px;
color: #FAFAFA;
text-align:center;
line-height:18px;
`;


export const ButtonFilled = styled.ImageBackground`
display:flex;
justify-content:center;
flex-direction:row;
height: 52px;
width: 312px;
border-radius: 24px;
`