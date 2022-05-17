import * as React from "react"
import Svg, { Path, Rect, Circle } from "react-native-svg"

const SvgCamera = (props) => (
  <Svg
    width={75}
    height={75}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M75 37.5C75 58.21 58.21 75 37.5 75S0 58.21 0 37.5 16.79 0 37.5 0 75 16.79 75 37.5Z"
      fill="#9C1F1F"
    />
    <Path
      fill="#FAF7F7"
      stroke="#000"
      strokeWidth={1.5}
      d="M16.875 18h8.25v5.25h-8.25z"
    />
    <Rect
      x={35.875}
      y={15.625}
      width={16.375}
      height={10}
      rx={5}
      fill="#fff"
      stroke="#000"
      strokeWidth={2}
    />
    <Path
      d="M17.5 20.5h40a9 9 0 0 1 9 9V47a9 9 0 0 1-9 9h-40a9 9 0 0 1-9-9V29.5a9 9 0 0 1 9-9Z"
      fill="#fff"
      stroke="#000"
      strokeWidth={2}
    />
    <Path stroke="#000" d="M7.5 37h60" />
    <Circle
      cx={37.5}
      cy={38.25}
      r={12.5}
      fill="#fff"
      stroke="#000"
      strokeWidth={5}
    />
    <Circle cx={61.125} cy={25.875} r={1.875} fill="#000" />
  </Svg>
)

export default SvgCamera