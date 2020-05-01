export default (text) => {
  const parsed = Number.parseInt(text)
    if(Number.isNaN(parsed)) { return 0 }
    return parsed
}