export const r = (num: number, p: number) =>
  Math.round(num * Math.pow(10, p - 1)) / Math.pow(10, p - 1)

export const dCount = (arr: number[], d: number[]) => {
  return d.filter((v) => arr.includes(v)).length
}
