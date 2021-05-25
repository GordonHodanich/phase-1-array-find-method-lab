function superbowlWin(record){
    function isWinner(element, index, array){
        return (element.result === 'W')
    }
    let superbowlWin = record.find(isWinner)
    if (typeof superbowlWin === "object"){
        return superbowlWin.year
    } else {
        return undefined
    }
}