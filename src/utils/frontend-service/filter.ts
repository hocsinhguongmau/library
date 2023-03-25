export const filterBySubstring = <T extends Record<string, string>>(
  data: T[],
  attribute: keyof T,
  keyword: string
): T[] => {
  return data.filter(function (item) {
    return item[attribute].toLowerCase().includes(keyword.toLowerCase())
  })
}
