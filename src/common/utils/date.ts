export const timeToSeconds = (time: string) => {
   const [hour = '0', minute = '0', second = '0'] = time.split(':')
   const hourInSeconds = Number(hour) * 3600
   const minutesInSeconds = Number(minute) * 60
   
   return hourInSeconds + minutesInSeconds + Number(second)
}