import { Product } from "../state/interface"

export const filterData = (
  data: Product[],
  kind: string,
  filter: string
  ) => {

  if (kind === 'sorting'){
    let sorted;
      switch(filter){
        case "PRICE-LOW-HIGH":
         sorted = data.sort(function(a, b) {
           return a.price - b.price
         })
          break;
        case "PRICE-HIGH-LOW":
         sorted = data.sort(function(a, b) {
           return b.price - a.price
         })
          break;
        case "NEW-TO-OLD":
         sorted = data.sort(function(a, b) {
           return new Date(a.added).valueOf() - new Date(b.added).valueOf()
         })
          break;
        case "OLD-TO-NEW":
         sorted = data.sort(function(a, b) {
           return new Date(b.added).valueOf() - new Date(a.added).valueOf()
         })
          break;
        default: 
        return sorted;  
      }
          
      return sorted
  }  

}

export const filterBrands = (data: Product[], brandTerm: string) => {
  
  let brandFiltered
  if(brandTerm === "ALL"){
     brandFiltered = data 
  } else {
    brandFiltered = data.filter(prod => prod.manufacturer.toLocaleLowerCase() === brandTerm.toLocaleLowerCase())
  }
  
  return brandFiltered;
}

export const filterTags = (data: Product[], tag: string) => {
    let taggedItems: Product[]  = []

    if (tag !== "ALL"){
      for (let item of data){
        if(item.tags.includes(tag)){
          taggedItems.push(item);
        }
      }
    } else {
      taggedItems = data;
    }

    return taggedItems;
}

export const compileTags = (data: Product[]) => {
  let tags:string[] = [];
  
  for (let item of data){
    tags = [...tags, ...item.tags]
  }

  const uniqueTags = tags.filter(onlyUnique).sort()
  return uniqueTags;
}
export const compileBrands = (data: Product[]) => {
  let brands: string[] = [];
  
  for (let item of data){
    brands.push(item.manufacturer.toLocaleLowerCase())
  }

  const uniqueBrands: string[] = brands.filter(onlyUnique).sort()
  return uniqueBrands;
}

const onlyUnique = (value: any, index: any, self: any) => {
  return self.indexOf(value) === index;
}