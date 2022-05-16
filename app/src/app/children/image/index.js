import React from 'react'
import styles from './styles'
import {getCaptionFromEdges} from './helpers'
import {getLogoThumbnailsFromEdges} from './helpers'


const Image = (props) => {
  const {data} = props
  return (
    <img
      src={data.display_url}
      style={styles}
      alt={getCaptionFromEdges(data.edge_media_to_caption)}
    />
  )
}
const Image2 = (props) => {
  const {data} = props
  return (
    <img
      src={data.owner.profile_pic_url}
      style={styles.icon}
      alt={getLogoThumbnailsFromEdges(data.owner.id)}
    />
  )
}


export { Image, Image2 };
