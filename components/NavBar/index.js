import React from 'react';

import {Container , ImageNav, Touch } from './styles';

import {COLORS, FONTS, SIZES, icons} from '../../constants'


const NavBar = () => {
     return(
          <Container style={{paddingHorizontal: SIZES.padding, backgroundColor: COLORS.white}}>
               <Touch onPress={ () => console.log('back')}>
                    <ImageNav source={icons.back_arrow} style={{
                         tintColor: COLORS.primary
                    }}/>
               </Touch>
               <Touch>
                    <ImageNav source={icons.more} style={{
                         tintColor: COLORS.primary
                    }}/>
               </Touch>
          </Container>
     )
}

export default NavBar;