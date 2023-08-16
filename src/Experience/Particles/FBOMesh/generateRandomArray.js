export const generateRandomnArray = (size) => {
  const length = size * size * 3
  const data = new Float32Array(length)

  for (let i = 0; i < length; i++) {
    const stride = i * 3

    data[stride] = Math.random() * 3 - 1
    data[stride + 1] = Math.random() * 3 - 1
    data[stride + 2] = Math.random() * 3 - 1
  }

  return data
}
