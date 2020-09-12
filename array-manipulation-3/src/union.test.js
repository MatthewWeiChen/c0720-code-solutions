/* global expect, union */

describe('union(first, second)', () => {

  beforeEach(() => {
    expect(union).to.be.a('function');
  });

  context('[2, 1] and [2, 3]', () => {

    it('returns [2, 1, 3]', () => {
      const output = union([2, 1], [2, 3]);
      expect(output).to.deep.equal([2, 1, 3]);
    });

  });

  context('["html", "css", "javascript"] and ["php", "css", "sql"]', () => {

    it('returns ["html", "css", "javascript", "php", "sql"]', () => {
      const output = union(
        ['html', 'css', 'javascript'],
        ['php', 'css', 'sql']
      );
      expect(output).to.deep.equal(['html', 'css', 'javascript', 'php', 'sql']);
    });

  });

  context('["a", "link", "to", "the", "past"] and ["the", "adventure", "of", "link"]', () => {

    it('returns ["a", "link", "to", "the", "past", "adventure", "of"]', () => {
      const output = union(
        ['a', 'link', 'to', 'the', 'past'],
        ['the', 'adventure', 'of', 'link']
      );
      expect(output).to.deep.equal(['a', 'link', 'to', 'the', 'past', 'adventure', 'of']);
    });

  });

});
