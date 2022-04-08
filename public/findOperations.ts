import {User} from "./user.js";
export function findIndexByID(id:number,users: User[])
{
    return users.findIndex((user) => user.id === id);
}

//export function findHighestID(users:User[])