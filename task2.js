/**
 * Kagi Developer Assessment - Task 2
 * Court hearing time calculator
 * ----------------------------------
 * Problem:
 *  - You + 4 others = 5 people total
 *  - Cases go in alphabetical order
 *  - Each hearing = 30 minutes
 *  - `n` judges can run hearings in parallel
 *
 * Formula:
 *   time = Math.ceil(position / judges) * 30
 */

/**
 * Calculates how long until your hearing finishes.
 * @param {string} you - Your name
 * @param {number} judges - Number of judges available
 * @param {string} others - Names of four other people, space-separated
 * @returns {number} - Minutes until your hearing ends
 */
function court(you, judges, others) {
    // Build full list of participants
    const names = others.split(" ");
    names.push(you);
  
    // Sort alphabetically
    names.sort();
  
    // Find your position (1-based)
    const pos = names.indexOf(you) + 1;
  
    // Calculate which round you're in
    const round = Math.ceil(pos / judges);
  
    // Each round takes 30 minutes
    return round * 30;
  }
  
  // -----------------
  // Example test cases
  // -----------------
  console.log(court("Jules", 3, "Adam Betty Frank Mike")); // 60
  console.log(court("Zane", 1, "Mark Hank Ana Vivian"));  // 150
  
  
  // -----------------
  // Simple benchmark
  // -----------------
  function benchmark(iterations = 1e6) {
    const start = Date.now();
  
    for (let i = 0; i < iterations; i++) {
      court("Jules", 3, "Adam Betty Frank Mike");
      court("Zane", 1, "Mark Hank Ana Vivian");
    }
  
    const end = Date.now();
    console.log(`Ran ${iterations * 2} calls in ${end - start} ms`);
  }
  
  benchmark();
  