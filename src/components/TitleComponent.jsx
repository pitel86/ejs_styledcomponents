import React from 'react'
import styled, {css} from 'styled-components'

const TitleStyled = styled.h1`
    color: red;
    font-weight: bold;

    ${({luis}) => 
        luis && css`
            font-size: 30px;
        `
    }

    ${({juan}) => 
        juan && css`
            font-size: 25px;
            color: blue;
        `
    }

    ${({pepe}) => 
        pepe && css`
            font-size: 20px;
            color: purple;
        `
    }
`


const TitleStyled2 = styled.h2`
    color: green;
    font-weight: bold;

    ${({luis}) => 
        luis && css`
            font-size: 25px;
        `
    }

    ${({juan}) => 
        juan && css`
            font-size: 20px;
            color: orange;
        `
    }

    ${({pepe}) => 
        pepe && css`
            font-size: 15px;
            color: rosybrown;
        `
    }
`

const TitleComponent = ({type, children, ...rest}) => {
  return (
    <>
        { type === 'h1' && <TitleStyled onClick={rest.function} {...rest}>{children}</TitleStyled>}
        {type === 'h2' && <TitleStyled2 onClick={rest.function} {...rest}>{children}</TitleStyled2>}
    </>
  )
}

export default TitleComponent