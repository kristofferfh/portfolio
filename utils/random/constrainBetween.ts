export default function (originalMax:number, originalPos:number, newMax:number) {
  const scaler = originalMax/newMax
  const newPos = Math.round(originalPos/scaler * 100) / 100

  return newPos;
}