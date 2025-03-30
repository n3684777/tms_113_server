var data = new Date();
var hour = data.getHours();
var map;

function enter(pi) {
    // Check if current hour is within the desired time ranges
    if ((hour >= 17 && hour < 24) || (hour >= 0 && hour < 7)) {
        map = 910100000;
    } else {
        // Handle other hours or scenarios if needed
        // Here, we can set a default map or handle other cases
        // In this example, we don't have specific handling for other hours
        map = 910100001; // Default map when conditions are not met
    }
    
    // Warp the player to the selected map
    pi.warp(map, 0); // Assuming 0,0 coordinates for warp position
}
