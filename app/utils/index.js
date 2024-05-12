
export const initialize = () => {
    const is_initialized = localStorage.getItem("initialized")
    if (!is_initialized) {
        localStorage.setItem("acc1", 5000)
        localStorage.setItem("acc2", 3000)
    }
}