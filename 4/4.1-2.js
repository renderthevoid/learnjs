///4.1-2
function isEmpty(obj) {
    for (key in obj) {
        return false;
    }
    return true;
}
let schedule = {}
schedule.key = "key";