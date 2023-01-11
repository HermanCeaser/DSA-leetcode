function maxIceCream(costs: number[], coins: number): number {
    let maxIceCreamBars = 0
    let previousSum = 0;

    costs.sort((a, b) => a - b );
    for(let i=0; i< costs.length; i++){
        previousSum += costs[i];
        if (previousSum > coins) break;
        maxIceCreamBars = i+1;
    }

    return maxIceCreamBars
};

// Test Cases
const maxCreamBars: number = maxIceCream([4, 5, 8, 9], 6)
console.log(maxCreamBars);