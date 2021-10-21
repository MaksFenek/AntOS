import {Avatar, Skeleton, Image} from 'antd'
import React from 'react'

import icon from './images/avatar.webp'

export const AccountAppIcon: React.FC = () => {
  return (
    <Avatar
      size={128}
      icon={
        <Image
          preview={false}
          src={icon}
          width={128}
          height={128}
          loading="lazy"
          placeholder={<Skeleton.Avatar size={128} active />}
        />
      }
    />
  )
}
