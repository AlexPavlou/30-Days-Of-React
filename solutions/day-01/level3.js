class stats {
    constructor(age_list, ) {
        this.list = age_list
    }
    count(){return this.list.length;}
    sum() {
        let sum = 0
        this.list.forEach(element => {
            sum+=element;
        });
        return sum;
    }
    min() {
        let min = this.list[0];
        this.list.forEach(element => {
            if (min>element) {
                min=element;
            }
        });
        return min;
    }
    max() {
        let max = this.list[0];
        this.list.forEach(element => {
            if (max<element) {
                max=element;
            }
        });
        return max;
    }
    range() {
        const min = this.min(this.list);
        const max = this.max(this.list);
        return(max-min);
    }
    mean() {
        const sum = this.sum(this.list);
        return (sum/this.list.length);
    }
    median() {
        this.list.sort();
        const length = this.list.length;
        if( length%2==1 ) {
            return this.list[Math.floor(length/2)];
        }
        let median = (this.list[length/2]+this.list[length/2+1])/2
        return median;
    }
    mode(){
        const frequencyMap = this.freqDist(this.list)

        // Find the highest frequency
        const maxFrequency = Math.max(...Object.values(frequencyMap));

        // Find all numbers with the highest frequency
        const modes = Object.keys(frequencyMap).filter(key => frequencyMap[key] === maxFrequency);

        // Return modes as an array of numbers (convert string keys to numbers)
        return {'mode': modes.map(Number), 'count': maxFrequency};
    }
    var() {
        const length = this.list.length;
        if (length <= 1 ) {
            throw new Error('Error, list must contain at least 2 entries.');
        }

        const mean = this.mean(this.list);
        const squaredDifferences = this.list.map(value => Math.pow(value - mean, 2));
        const variance = squaredDifferences.reduce((acc, diff) => acc + diff, 0) / (length - 1);
        return variance;
    }
    std() {
        const IsSample = true;
        const length = this.list.length;
        const mean = this.mean(this.list)
          
        // Calculate the sum of squared differences from the mean
        const squaredDifferences = this.list.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0);
          
        // If it's a sample, divide by (n - 1), else divide by n
        const variance = IsSample ? squaredDifferences / (length - 1) : squaredDifferences / length;
          
        // Return the square root of the variance (standard deviation)
        return Math.sqrt(variance);
    }
    freqDist() {
        const frequencyMap = {};
        // Count frequency of each element
        this.list.forEach(num => {
            frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        });
        return(frequencyMap);
    }
}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new stats(ages);
console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Range: ', statistics.range());
console.log('Mean: ', statistics.mean());
console.log('Median: ',statistics.median());
console.log('Mode: ', statistics.mode());
console.log('Variance: ',statistics.var());
console.log('Standard Deviation: ', statistics.std());
console.log('Variance: ',statistics.var());
console.log('Frequency Distribution: ',statistics.freqDist());
