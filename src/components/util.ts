

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
  
 export const getWindowCardsCountHomeDeals = (windowWidth: number) => {
  switch (true) {
    case windowWidth >= 1536:
      return 12;
    case windowWidth >= 1280:
      return 10;
    case windowWidth >= 1024:
      return 8;
    case windowWidth >= 768:
      return 6;
    case windowWidth >= 640:
      return 6;
    default:
      return 10;
  }
};

export const getWindowCardsCountHomeProducts = (windowWidth: number) => {
  switch (true) {
    case windowWidth >= 1536:
      return 10;
    case windowWidth >= 1280:
      return 6;
    case windowWidth >= 640:
      return 4;
    default:
      return 10;
  }
};

export function capitalizeFirstLetter(str: string | undefined) {
  if (str) {
    
    return str.replace(/^\w/, char => char.toUpperCase());
  }
}
