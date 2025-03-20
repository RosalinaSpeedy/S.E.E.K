//https://stackoverflow.com/questions/10554241/can-i-load-multiple-files-with-one-require-statement

module.exports = [
    require('./group1-shard1of4.bin'),
    require('./group1-shard2of4.bin'),
    require('./group1-shard3of4.bin'),
    require('./group1-shard4of4.bin')
]