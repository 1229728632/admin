import {requestManageList,requestManageCount} from "../../util/request"
const state = {
    //列表数据
    list:[],
    size:2,
    total:0 ,
    page:1
}
const mutations = {
    //修改list
    changeList(state,arr){
        state.list = arr;
    },
    changeTotal(state,num){
        state.total = num
    },
    changePage(state,page){
        state.page = page
    }
}
const actions = {
    //获取列表数据
    requestList(context){
        const params ={
            page:context.state.page,
            size:context.state.size
        }
        requestManageList(params).then(res=>{
            context.commit("changeList",res.data.list)
        })
    },
    //获取总的数量
    requestTotal(context){
        requestManageCount().then(res=>{
            context.commit("changeTotal",res.data.list[0].total)
        })
    },
    //页面修改页码
    changePage(context,page){
        context.commit("changePage",page)
    }
}
const getters = {
    list(state){
        return state.list
    },
    total(state){
        return state.total
    },
    size(state){
        return state.size
    }
}
export default {
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}