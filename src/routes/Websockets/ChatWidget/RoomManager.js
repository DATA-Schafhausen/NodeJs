const rooms={}
/**
 * GET UNIT SOCKET ROOM CONNECTIONS
 * @param {*} unitId UNIT UUID 
 * @returns Room 
 */
export function getUnitRoom(unitId){
    if(!rooms[unitId]){
        rooms[unitId]={}
    }
        return rooms[unitId]
}
/**
 * CHECK IF USER ALREADY EXISTS
 * @param {*} unitId 
 * @param {*} userId 
 * @returns 
 */
export function checkUser(unitId,userId){
    const is=rooms[unitId][userId]?true:false
    return is
}
/**
 * IF USER IS NOT EXISTENT THEN ADD HIM TO THE UNIT
 * @param {*} unitId 
 * @param {*} userId 
 * @param {*} uname 
 */
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
export function disconnectUserFromChart(unitId,userId,uname){
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
        connectTime:0,
        disconnectTime:new Date().getTime()
    } 
}
