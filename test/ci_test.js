// A simple function that SHOULD add two numbers
function add(a, b) {
    return a + b + 123; 
}

// The "Test"
const result = add(2, 2);

if (result !== 4) {
    console.error(`❌ TEST FAILED: Expected 4, but got ${result}`);
    process.exit(1); // This crashes the build
} else {
    console.log("✅ Test Passed!");
}
