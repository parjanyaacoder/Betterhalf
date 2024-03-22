import clamp from 'ramda/src/clamp'

export function setAlpha(color, alpha) {
    const alphaValue = (() => {
      const hex = Math.floor(clamp(0, 100, alpha) * (255 / 100)).toString(16)
      if (hex.length === 1) {
        return `0${hex}`
      }
      return hex
    })()
    console.log('color', color.substring(0, 7) + alphaValue)
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
    

}

export default colors;
