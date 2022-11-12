export const BaseURL= 'https://techcommerce-api.netlify.app';

export const getUniqueValues=(data,type)=>{
    const values= data.map(item=> item[type]);
    return ["all",...new Set(values)];
}