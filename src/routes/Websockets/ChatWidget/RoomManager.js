const rooms={}

export function getUnitRoom(unitId){
    if(!rooms[unitId]){
        rooms[unitId]={}
    }
        return rooms[unitId]
}
export function checkUser(unitId,userId){
    const is=rooms[unitId][userId]?true:false
    return is
}
export function addUserToUnitRoom(unitId,userId,uname){
    if(!rooms[unitId]){
        rooms[unitId]={}
    }
    if(!checkUser(userId)) rooms[unitId][userId]={
        id:userId,
        uname:uname,
        state:false,
        connectTime:0,
        disconnectTime:0
    }

    rooms[unitId][userId]={
        id:userId,
        uname:uname,
        state:false,
        connectTime:new Date().getTime(),
        disconnectTime:0
    }
}