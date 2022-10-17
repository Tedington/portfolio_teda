import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Header({}: Props) {
  return (
    <header>
      <div>
        <SocialIcon
        url="https://twitter.com/Temitope_Dansa"
        fgColor="grey"
        bgColor="transparent"
        />

        <SocialIcon url="https://twitter.com/Temitope_Dansa"
        fgColor="grey"
        bgColor="transparent"/>

        <SocialIcon url="https://twitter.com/Temitope_Dansa"
        fgColor="grey"
        bgColor="transparent"/>

      </div>

      <div>
      <SocialIcon
      className="cursor-pointer"
      network="email"
      fgColor="grey"
      bgColor="transparent"
      />

      </div>
    </header>
  )
}

export default Header