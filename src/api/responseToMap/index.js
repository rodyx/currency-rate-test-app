export const resToMap = obj => {
  const resMap = new Map();
  
  for (const [pair, rate] of Object.entries(obj)) {
    resMap.set(pair, rate);
  }
    
  return resMap
}