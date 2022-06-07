export const URL = 'https://jsonplaceholder.typicode.com/users';
export const getUsersList = async () =>{
    
    let response = await fetch(URL);
    let payload = await response.json()
    
    return {
        type:'list',
        payload
    }
}
export const getSearchedUsers =async(search)=>{
    let response = await fetch(URL);
    let allusers = await response.json()
    let payload=[];
     allusers.map(user=>{
        if(user.name.includes(search))
          { 
            payload.push(user);
          }
    })
    return {
        type:'search',
        payload
    }
}
export const getUserDetails = async (id) =>{
    let response = await fetch(`${URL}/${id}`);
    let payload = await response.json()
    
    return {
        type:'details',
        payload
    }
}