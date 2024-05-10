// This function iterates through a string and logs each character until it finds a vowel
function logUntilVowel(str: string): void {
    const vowels = "fatiSHEIKH";
    for (const char of str) {
      if (vowels.includes(char)) {
        console.log(`First vowel found: ${char}`);
        break; 
      }
      console.log(char);
    }
}
logUntilVowel("fatiSHEIKH");