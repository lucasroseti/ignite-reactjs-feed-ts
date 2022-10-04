import { ImgHTMLAttributes } from 'react'

import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export function Avatar({ hasBorder = false, ...props }: AvatarProps) {
  const avatar = hasBorder ? styles.avatarWithBorder : styles.avatar

  return <img className={avatar} {...props} />
}