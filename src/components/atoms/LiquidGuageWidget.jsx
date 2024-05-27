import { color } from 'd3-color'
import { interpolateRgb } from 'd3-interpolate'
import { Component } from 'react'
import LiquidFillGauge from 'react-liquid-gauge'

export default class LiquidGaugeWidget extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }

    this.startColor = props.color // cornflowerblue
    this.endColor = props.color // crimson
  }

  render() {
    const radius = 100
    const interpolate = interpolateRgb(this.startColor, this.endColor)
    const fillColor = interpolate(this.state.value / 100)
    const gradientStops = [
      {
        key: '0%',
        stopColor: color(fillColor).darker(0.5).toString(),
        stopOpacity: 1,
        offset: '0%'
      },
      {
        key: '50%',
        stopColor: fillColor,
        stopOpacity: 0.75,
        offset: '50%'
      },
      {
        key: '100%',
        stopColor: color(fillColor).brighter(0.5).toString(),
        stopOpacity: 0.5,
        offset: '100%'
      }
    ]

    return (
      <div>
        <LiquidFillGauge
          style={{ margin: '0 auto' }}
          width={radius * 2}
          height={radius * 2}
          value={this.state.value / 20}
          seevalue={this.state.value}
          percent="kcal"
          textSize={1}
          textOffsetX={0}
          textOffsetY={0}
          textRenderer={props => {
            const value = Math.round(props.value)
            const seevalue = Math.round(props.seevalue)
            const radius = Math.min(props.height / 2, props.width / 2)
            const textPixels = (props.textSize * radius) / 4
            const valueStyle = {
              fontSize: textPixels
            }
            const percentStyle = {
              fontSize: textPixels * 0.6
            }

            return (
              <tspan>
                <tspan
                  dy="-0.5em"
                  className="value"
                  style={valueStyle}>
                  {seevalue}
                </tspan>
                <tspan style={percentStyle}>{props.percent}</tspan>
                <tspan
                  x="0"
                  dy="1.2em">
                  _______
                </tspan>
                <tspan
                  style={valueStyle}
                  x="0"
                  dy="1.2em">
                  2000
                </tspan>
              </tspan>
            )
          }}
          riseAnimation
          waveAnimation
          waveFrequency={1}
          waveAmplitude={5}
          innerRadius={0.98}
          gradient
          gradientStops={gradientStops}
          circleStyle={{
            fill: color('#fe902f')
          }}
          waveStyle={{
            fill: fillColor
          }}
          textStyle={{
            fill: color('#444').toString(),
            fontFamily: 'pretendard'
          }}
          waveTextStyle={{
            fill: color('#fff').toString(),
            fontFamily: 'pretendard'
          }}
        />
        <div
          style={{
            margin: '20px auto',
            width: 120
          }}></div>
      </div>
    )
  }
}
