import axios from 'axios'

//请求首页banner数据
export const getBannerData = ({
    commit
}, obj) => {
    axios.get("/bannerlist").then(data => {
        commit('changeBannerData', data.data);
    });
}