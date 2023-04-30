// Uma factory retorna uma novo objeto(instancia)
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}