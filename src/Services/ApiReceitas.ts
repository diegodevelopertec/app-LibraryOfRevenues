import axios from 'axios'


export  type  RevenueType={
    id?:number | any,
    idUser?:string,
    title:string,
    content:string,
    description:string,
    image? :any,
    category?:string,
    author?:string

}

let Api=axios.create(
{
    baseURL:' http://localhost:3000/'
}
)

export const ApiRevenues={
    allReceitas:async():Promise<RevenueType[]>=>{
        let response=await Api.get('revenues')
        return response.data
    },
    oneRevenue:async(id:string | any):Promise<RevenueType>=>{
        let response=await Api.get(`revenues/${id}`)
        return response.data

    },
    createRevenue:async(body:RevenueType)=>{
       let response=await Api.post('revenues',body)
        return response.data
    },
    updateRevenue: async (body:RevenueType)=>{
        let response=await Api.put(`revenues/${body.id}`,{body})
        return response.data
    },
    deleteRevenue: async (id:string)=>{
        let response=await Api.delete(`revenues/${id}`)
        return response.data
    }
}