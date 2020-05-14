function nombor(num) {
  if (num === null || num === undefined) {
    return 'unknown'
  }

  return num.toLocaleString()
}

export default { nombor }
