// Code your solution in this file!
const hq = 42
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks-hq)
}

function distanceFromHqInFeet(feet) {
   return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start, destination){
    const feetPerBlock = 264;
        let distance
        if (start >= destination){
            distance = (start - destination) * feetPerBlock;
}
        else {
            distance = (destination - start) * feetPerBlock;
        }
        return distance
}

function calculatesFarePrice(start, destination){ 
   let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
   return 0;
}
           else if (distance > 400 && distance <= 2000){
            return (distance - 400) * .02;
}
            else if (distance > 2000 && distance <= 2500){
             return 25;
}
            else if (distance > 2500){
            return "cannot travel that far";
}
}
