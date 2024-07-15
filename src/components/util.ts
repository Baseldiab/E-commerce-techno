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