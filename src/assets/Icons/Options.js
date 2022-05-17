import * as React from "react"
import Svg, { Rect } from "react-native-svg"

const SvgOptions = (props) => (
  <Svg
    width={43}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect y={30} width={43} height={10} rx={5} fill="#fff" />
    <Rect y={15} width={43} height={10} rx={5} fill="#fff" />
    <Rect width={43} height={10} rx={5} fill="#fff" />
  </Svg>
)

export default SvgOptions;