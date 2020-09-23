/* global expect, isAnagram */

describe('isAnagram(firstString, secondString)', () => {

  beforeEach(() => {
    expect(isAnagram).to.be.a('function');
  });

  it('returns true for "restful" and "fluster"', () => {
    const result = isAnagram('restful', 'fluster');
    expect(result).to.equal(true);
  });

  it('returns true for "dormitory" and "dirty room"', () => {
    const result = isAnagram('dormitory', 'dirty room');
    expect(result).to.equal(true);
  });

  it('returns false for "roses" and "horse"', () => {
    const result = isAnagram('roses', 'horse');
    expect(result).to.equal(false);
  });

  it('returns true for "debit card" and "bad credit"', () => {
    const result = isAnagram('debit card', 'bad credit');
    expect(result).to.equal(true);
  });

  it('returns false for "nearby there" and "nearly three"', () => {
    const result = isAnagram('nearby there', 'nearly three');
    expect(result).to.equal(false);
  });

  it('returns true for "school master" and "the classroom"', () => {
    const result = isAnagram('school master', 'the classroom');
    expect(result).to.equal(true);
  });

  it('returns false for "ludicrous" and "ridiculous"', () => {
    const result = isAnagram('ludicrous', 'ridiculous');
    expect(result).to.equal(false);
  });

  it('returns true for "anagram" and "nag a ram"', () => {
    const result = isAnagram('anagram', 'nag a ram');
    expect(result).to.equal(true);
  });

});
