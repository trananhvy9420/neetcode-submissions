class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length;
        if (n === 0) return 0;
        const cars = [];
        for (let i = 0; i < n; i++) {
            cars.push({
                position: position[i],
                time: (target - position[i]) / speed[i]
            });
        }
        cars.sort((a, b) => b.position - a.position);
        let fleets = 0;
        let lastTime = 0;
        for (let i = 0; i < n; i++) {
            if (cars[i].time > lastTime) {
                fleets++;
                lastTime = cars[i].time;
            }
        }
        return fleets;
    }
}
