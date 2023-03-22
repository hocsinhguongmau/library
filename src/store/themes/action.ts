export const SET_THEME = 'SET_THEME'

export const setTheme = (newTheme: string) => ({
  type: SET_THEME,
  payload: newTheme
})

export type ThemeAction = ReturnType<typeof setTheme>
