/*********************
* Utility Functions  /
**********************/

/******************************
* LocalStorage Helper Functions /
********************************/
export function readLS(key) {
    //pull the stored objects from LS and parse into an array 
    return JSON.parse(localStorage.getItem(key));
} 

export function writeLS(key, data) {
    //save the updated array to localstorage
    localStorage.setItem(key, JSON.stringify(data));
}