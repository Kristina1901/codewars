function calculate() {
    let result = 0
    return {
        add(value) {
            result += value
            return this
        },
        result() {
            return result
        }
    }
}
console.log (calculate().add(1).add(2).result())