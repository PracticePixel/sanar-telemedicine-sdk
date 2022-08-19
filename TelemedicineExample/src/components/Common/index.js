/**
 * Common Stylea
 */
 import { vw } from '../../utility/viewport-units' 
import AppFontFamily from './fonts'
import helper from './helper'
import metrics from './metrics'

const theme = {

  fontFamily: {
    regular: AppFontFamily.regular,
    medium: AppFontFamily.medium,
    bold: AppFontFamily.bold,
    semiBold: AppFontFamily.semiBold,
    light: AppFontFamily.light
  },

  colors: {
    placeValue: "#797979",
   // primary: '#2652F3',
     primary:"#2552F2",
    blueBorderText:"#C9DFF2",
    inputText: "#D8D8D8",
    primaryText: '#02204B',
    secondary: '#0080FF',
    secondaryText: '#0080FF',
    white: '#FFFFFF',
    red: "#D81C1C",
    text_common: '#000',
    green: '#42AF68',
    borderGray: '#DDE0E6',
    blackColor: "#000000",
    boarderBlue: '#2652F3',
    selectedSlot: '#E0E7FF',
    grey: '#F3F3F3',
    darkGrey: '#939598',
    greyTwo: '#9A9A9A',
    noteBackground: '#FFF3CF',
    noteBorder: '#FBB774',
    labelTxtGrey: "#909AAF",
    pinkColor: "#FF40A5",
    border: "#D8D8D8",
    searchBarColor: '#F2F5F8',
    rowHeadOne: '#707276',
    bgone: "#F3F3F5",
    bgtwo: '#FFF4D9',
    blueone: '#4D6FA5',
    blue: "#0082FF",
    labelTxt: "#86909D",
    disabledSlot: "#979797",
    titleColor: "#7B7B7B",
    borderColor: '#F1F3F8',
    appointmentColor: "#828282",
    appointmentTextColor: "#7F7F7F",
    green: "#00B840",
    backgroundLightYellow: "#FFF8E4",
    lightGrey: "#8A8888",
    shareColor: "#5E7CE930",
    checkBox1: "#DDEEFB",
    checkBoxActive: "#8098BF",
    yellow: "#F4CD0F",
    skyBlue: "#E5F3FF",
    chatBubbleGrey: "#F4F4F4",
    darkBoldGray: "#666666",
    backgroundCht: "#EFF0F5",
    error: "red",
    labelTxtLightGrey: "#9B9B9B",
    labelTxtGreen: "#60BC4A",
    borderGreen: "#94c781",
    backgroundGreen: "#EBFFF2",
    noteTxtBackground: "#ECF2FF",
    underlineTxtGrey: "#ABB3C5",
    labelTxtBlue: "#01327F",
    lightPurple: "#ECF0FF",
    blueColor: "#EDF0FB",
    headerIcon: "#848484",
    backgroundLightPurple: "#EEF2FF",
    borderLineColor: "#DCDDE0",
    baseGrey: "#777777",
    txtGrey: "#2D3C4A",
    txtBaseGrey: "#7C7C7C",
    videoBackground:"#DDE0E6",
    transparent: 'rgba(0,0,0,0)',
    lightGreyBlue: "#E7F4FF",
    yellowColor:"#FFFCDA",
    completedColor: "#E8FFE7",
    cancelColor: "#FFE7E7",
    callBackground: "#2B2B33",
    mysanar: "#012768",
    darkLabel: "#8E8D8E",
    lightShodowColor: "#d4d4d4",
    lightgreylableColor: "#707276",
    borderGrayLight: "#D1DDE6",
    txtBlue: "#2652F3",
    black: "#000000",
    mysanarPatientsublabelcolor: "#343645",
    insurance_border:'#7ED23A',
    insurance_fill:'#F3FEEE',
    medicalbg:"#C2EAEC",
    greyText:"#9C9FA4",
    purple:"#EFF2FF",
    bannerColor:"#e0fbf4",
    aliceBlue:'#f3faff',
    royalBlue:"#355ef4",
    greenStrip:'#5fbb9e',
    veryDarkGray: '#3B3B3B'
  },
  background: {
    primary: '#2552F2',
    secondary: '#0080FF',
    lightblue: "#C1E1FF",
    blue: "#0080FF",
    lightPurple: "#EFF8FF"

  },
  fonts: {
    font16: 5 * vw,
    font15: 4.5 * vw,
    font13: 4.3 * vw,
    font12: 4 * vw,
    font11: 3.5 * vw,
    font10: 3 * vw,
    font8: 2.4 * vw,
    font9: 2.5 * vw,
    font9_7: 2.7 * vw,
    font14: 4 * vw,
    font17: 7 * vw,
    font17_5: 7.5 * vw,
    font18: 8 * vw,
    font20: 10 * vw,
    font1: 6 * vw,
    font10_5: 3.3 * vw,
    font10_6: 3.4 * vw,
    font11_5: 3.7 * vw
  }
};

export { theme, helper, metrics };