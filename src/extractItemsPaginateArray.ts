import { Ientrydata, PageItems } from '../types/Ientrydata';

/**
 * extractItemsPaginateArray
 * @description
 * Extracts the items from the pages array
 * and returns an array of PageItems
 *
 * @param {Ientrydata} data
 * @return {*}  {PageItems[]}
 */
export const extractItemsPaginateArray = (data: Ientrydata): PageItems[] => {
  const pageItems: PageItems[] = [];

  if (data.pages && Array.isArray(data.pages)) {
    data.pages.forEach(page => {
      if (page.items && Array.isArray(page.items)) {
        pageItems.push(...page.items);
      }
    });
  }
  return pageItems;
};
