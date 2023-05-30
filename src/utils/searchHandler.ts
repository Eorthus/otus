import { ArrayItemsTypes } from '@/types/products'

export const searchHandler = (array:Array<ArrayItemsTypes> | undefined, field:string, search:string) => {
    return array?.filter((el:ArrayItemsTypes) => {
            return String(el[field]).toLowerCase().indexOf(search.toLowerCase()) > -1;
        })
}