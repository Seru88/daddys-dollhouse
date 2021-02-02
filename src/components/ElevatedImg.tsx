import React from "react"
import Img, { FluidObject } from "gatsby-image"
import { styled } from "@material-ui/core"

const ElevatedImg = styled(Img)(({ theme }) => ({
  boxShadow: theme.shadows[8],
}))

export default ElevatedImg
