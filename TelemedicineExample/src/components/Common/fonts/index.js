import { I18nManager, Platform } from 'react-native'
// Poppins font for English
const Poppins = {
    regular:'Poppins-Regular',
    bold:'Poppins-Bold',
    light: 'Poppins-Light',
    medium:'Poppins-Medium',
    semiBold:'Poppins-SemiBold',
}


// DroidKulfi font for Arabic
const DroidKulfi = {
    regular : Platform.OS==='ios' ? 'DroidArabicKufi' : 'DroidKufi-Regular',
    bold : Platform.OS==='ios' ? 'DroidArabicKufi-Bold' : 'DroidKufi-Bold',
    light : Platform.OS==='ios' ? 'DroidArabicKufi' : 'DroidKufi-Regular',
    medium : Platform.OS==='ios' ? 'DroidArabicKufi' : 'DroidKufi-Regular',
    semiBold : Platform.OS==='ios' ? 'DroidArabicKufi' : 'DroidKufi-Regular',
}

// setting fontfamily for language
const AppFontFamily = I18nManager.isRTL ? DroidKulfi : Poppins

export default AppFontFamily