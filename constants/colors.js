import clamp from 'ramda/src/clamp'

export function setAlpha(color, alpha) {
    const alphaValue = (() => {
      const hex = Math.floor(clamp(0, 100, alpha) * (255 / 100)).toString(16)
      if (hex.length === 1) {
        return `0${hex}`
      }
      return hex
    })()
    return color.substring(0, 7) + alphaValue // Format: #rrggbbaa
  }

const colors = {
    white: '#ffffff',
    white98: setAlpha('#ffffff', 98),
    darkGrey: '#8F8F8F',
    black: '#000000',
    black15: setAlpha('#000000', 45),
    black65: setAlpha('#000000', 65),
    darkGrey30: setAlpha('#8F8F8F', 90),
    offWhite: '#F9F9F9',
    blue80: setAlpha('#1E90FF', 80),
    blue45: setAlpha('#1E90FF', 45),
    purple45: setAlpha('#800080', 45),
    purple80: setAlpha('#800080', 80),
    lightRed45: setAlpha('#FF6347', 45),
    lightRed80: setAlpha('#FF6347', 80),
    lightGreen20: setAlpha('#00FF00', 20),
    lightGreen50: setAlpha('#00FF00', 50),
    white56: setAlpha('#ffffff', 76),
    grey: '#bcbcbc',
    green: '#A0DB8E',
    navy: '#cde2ff',
    navy80: setAlpha('#cde2ff', 80),
    navy45: setAlpha('#cde2ff', 45),
    navyBlue: '#385a7c',
    navyBlue80: setAlpha('#385a7c', 80),
    navyBlue45: setAlpha('#385a7c', 45),
    navyBlue60: setAlpha('#385a7c', 60),
    blurYellow: '#ffc900',
    blurYellow80: setAlpha('#ffc900', 80),
    blurYellow45: setAlpha('#ffc900', 46),
    pastelPink: '#ffd3b6',
    pastelPink80: setAlpha('#ffd3b6', 80),
    pastelPink45: setAlpha('#ffd3b6', 75),
    pastelRed: '#ffaaa5',
    grey_d8: '#d8d8d8',
    grey_b2: '#A6A6A6',
    skin: '#fdf5e6'
    

}

export default colors;
