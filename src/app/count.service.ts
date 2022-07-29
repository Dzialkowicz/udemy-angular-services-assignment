export class CountService {
    activeToInactiveCount = 0;
    inactiveToActiceCount = 0;
    logActiveToInactiveCount() {
        this.activeToInactiveCount++;
        console.log(`Active to Inactive count: ${this.activeToInactiveCount}`);
    }
    logInactiveToActiveCount() {
        this.inactiveToActiceCount++;
        console.log(`Inactive to Active count: ${this.inactiveToActiceCount}`);
    }
}