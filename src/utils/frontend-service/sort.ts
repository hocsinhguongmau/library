export const sortAsc = <T, K extends keyof T>(data: T[], sortBy: K) => {
  return data.sort((a: T, b: T) => {
    if (a[sortBy] < b[sortBy]) {
      return -1
    }
    if (a[sortBy] > b[sortBy]) {
      return 1
    }
    return 0
  })
}

export const sortDesc = <T, K extends keyof T>(data: T[], sortBy: K) => {
  return data.sort((a: T, b: T) => {
    if (a[sortBy] < b[sortBy]) {
      return 1
    }
    if (a[sortBy] > b[sortBy]) {
      return -1
    }
    return 0
  })
}
