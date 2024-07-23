

export const removeSpace = (text: string | undefined) => {
    if (text) {
        
        text.toLowerCase().replace(/ /g, "-");
    }
} 

export const removeSlash = (text: string | undefined) => {
    if (text) {
        text.replace(/-/g, " ")
    }
} 


  export const randomNumber = Math.floor(Math.random() * 100000000000001);