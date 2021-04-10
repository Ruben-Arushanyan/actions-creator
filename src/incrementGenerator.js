
function IncrementGenerator(initialValue) {
    let current = initialValue
    return () => ++current
}


module.exports = IncrementGenerator
