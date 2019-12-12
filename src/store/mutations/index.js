export default {
    SET_LOGS(state, error) {
        state.logs.unshift(error)
    },
    SET_SIDEBAR_STATUS(state) {
        let status = !state.sidebarStatus
        state.sidebarStatus = status
        cache.setCookie('sidebarStatus', status)
    }
}