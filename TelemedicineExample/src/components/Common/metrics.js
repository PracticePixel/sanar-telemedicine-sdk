/**
 * This file contains metric values that are global to the application.
 */

// Examples of metrics you can define:
export const tiny = 5
export const small = tiny * 2 // 10
export const normal = tiny * 3 // 15
export const medium = normal * 2 // 30
export const normalBorderRadiusPx = 6
export const mediumBorderRadiusPx = 8

export default {
  topMargin:{
    marginTop:normal,
  },
  bottomMargin: {
    marginBottom: normal,
  },
  mediumBottomMargin: {
    marginBottom: medium,
  },

  tinyVerticalMargin: {
    marginVertical: tiny,
  },
  smallVerticalMargin: {
    marginVertical: small,
  },
  verticalMargin: {
    marginVertical: normal,
  },
  mediumVerticalMargin: {
    marginVertical: medium,
  },

  tinyHorizontalMargin: {
    marginHorizontal: tiny,
  },
  smallHorizontalMargin: {
    marginHorizontal: small,
  },
  horizontalMargin: {
    marginHorizontal: normal,
  },
  mediumHorizontalMargin: {
    marginHorizontal: medium,
  },

  tinyHorizontalPadding: {
    paddingHorizontal: tiny,
  },
  smallHorizontalPadding: {
    paddingHorizontal: small,
  },
  horizontalPadding: {
    paddingHorizontal: normal,
  },
  mediumHorizontalPadding: {
    paddingHorizontal: medium,
  },

  tinyVerticalPadding: {
    paddingVertical: tiny,
  },
  smallVerticalPadding: {
    paddingVertical: small,
  },
  normalVerticalPadding: {
    paddingVertical: normal,
  },
  mediumVerticalPadding: {
    paddingVertical: medium,
  },
  normalBorderRadius: {
    borderRadius: normalBorderRadiusPx
  },
  mediumBorderRadius: {
    borderRadius: mediumBorderRadiusPx
  }
}
