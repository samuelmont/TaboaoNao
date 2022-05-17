import * as React from "react"
import Svg, { Circle } from "react-native-svg"

const SvgCircle = (props) => (
  <Svg
    width={80}
    height={80}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={40} cy={40} r={40} fill="#C4C4C4" />
  </Svg>
)

export default SvgCircle;