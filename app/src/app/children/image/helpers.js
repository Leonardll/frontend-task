export function getCaptionFromEdges (data) {
  return data.edges[0].node.text
}

export function getLogoThumbnailsFromEdges (data) {
  return data.owner
}