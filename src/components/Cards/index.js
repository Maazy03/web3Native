import React from 'react'
import { StyledView, ButtonFilled, AssetCard, LeftSubView, RightSubView, SubViewChild, AssetsText, SubViewChildPic } from './styled-component'
import blockPic from '../../assets/images/blockPic.png'
import { View } from 'react-native'


export const Card = () => {
    return (

        <StyledView>
            <AssetCard>
                <LeftSubView style={{width:150}}>
                    <SubViewChild style={{width:"100%"}}>
                        <AssetsText style={{ textAlign: "left" }}>
                            BitCoin
                            </AssetsText>

                    </SubViewChild>
                    <SubViewChildPic style={{width:"100%"}}>
                        <ButtonFilled source={blockPic} style={{ width: 24, height: 24 }} />

                        <View style={{ marginLeft: 5 }}>
                            <AssetsText style={{ textAlign: "left", fontSize: 12 }}>
                                BTC
                                </AssetsText>
                        </View>
                    </SubViewChildPic>
                </LeftSubView>


                <RightSubView style={{ marginLeft:40,width:150 }}>
                    <SubViewChild style={{width:"100%"}}>
                        <AssetsText style={{textAlign:"right"}}>
                            10023.0096 BTC
                            </AssetsText>

                    </SubViewChild>
                    <SubViewChild style={{width:"100%"}}>
                        <AssetsText style={{ textAlign: "right", fontSize: 12 }}>
                            $ 107.7
                                </AssetsText>

                    </SubViewChild>
                </RightSubView>

            </AssetCard>
        </StyledView>

    )
}

