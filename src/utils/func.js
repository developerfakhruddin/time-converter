//formatted date time
 export function getLocalDateTime(){
    return new Date(
        new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
      ).toISOString().slice(0, 16);
}

//local time to utc
export function getUtcFromLocal(localTime){
    return new Date(localTime.toISOString().slice(0,16))
}

//offset  to milisecond
function getOffsetToMs(offset){
    return Math.abs(offset) * 60 * 60 * 1000;
}

//utc from zone offset
export function getUtcFromZone(datetime, offset){
    const date = new Date(datetime);
    if(Math.sign(offset) === -1){
        return new Date(date.getTime() + getOffsetToMs(offset))
    }else if(Math.sign(offset) === 1){
        return new Date(date.getTime() - getOffsetToMs(offset))
    } else{
        return date
    }
}

export function getZoneTimeFromUtc(utc, offset){
    const date = new Date(utc)
    if(Math.sign(offset) === -1){
        return new Date(date.getTime() - getOffsetToMs(offset))
    } else if (Math.sign(offset) === 1){
        return new Date(date.getTime() + getOffsetToMs(offset))
    } else {
        return date
    }
}

function dateObjectToFormattedDateTime(dateObj){
    return new Date(new Date(dateObj.getTime() + (12*60*60*1000)).toISOString().slice(0,16)).toISOString().slice(0,16)
}

export const compareDate = (dateone, datetow) =>{
    let ms = dateone.getTime() - datetow.getTime();
    let dif = ms / (1000*60*60)
    if(Math.sign(dif) === 1){
    return '+' + dif
    }
    return dif;
}