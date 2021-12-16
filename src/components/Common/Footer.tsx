import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.div`
    display: grid;
    place-items: center;
    margin-top: auto;
    padding: 50px 0;
    font-size: 15px;
    text-align: center;
    line-height: 1.5;
`

const Footer: FunctionComponent = function (){
    return (
        <FooterWrapper>
            Thnk u 4 visiting my blog, have a goood day
            <br /> © 2021 Developer Sookyoung, Powered By Gatsby.
        </FooterWrapper>
    )
}

export default Footer