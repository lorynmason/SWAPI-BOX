describe('cleanFilmsData', () => {
  it.skip('returns an object with the correct properties', () => {
    const mockdata = {
      results: [
        {
          title: 'NewHope',
          opening_crawl: 'A long time ago',
          release_date: 1978,
          extra: 'did this get removed'
        }
      ]
    }
    const expected = [
      {
        title: 'NewHope',
        text: 'A long time ago',
        date: 1978
      }
    ]
    expect(cleanFilmsData(mockdata)).toEqual(expected)
  })
})
