// [...document.querySelectorAll('[data-colour]')].map(e => e.getAttribute('data-colour'))
// https://studiowork.com.au/
const colors = ['#fdac75', '#fdac75', '#fdac75', '#bacde5', '#bacde5', '#bacde5', '#818b56', '#818b56', '#818b56', '#6042ec', '#6042ec', '#6042ec', '#aff66b', '#aff66b', '#aff66b', '#696219', '#696219', '#696219', '#b5d8e3', '#b5d8e3', '#b5d8e3', '#f066a3', '#f066a3', '#f066a3', '#f0ea8d', '#f0ea8d', '#f0ea8d', '#463c37', '#463c37', '#463c37', '#bab5ab', '#bab5ab', '#bab5ab', '#923b1f', '#923b1f', '#923b1f', '#c22929', '#c22929', '#c22929', '#003dff', '#003dff', '#003dff', '#f0592b', '#f0592b', '#f0592b', '#8ea2d3', '#8ea2d3', '#8ea2d3', '#775648', '#775648', '#775648', '#f9d3be', '#f9d3be', '#f9d3be', '#e0d9d3', '#e0d9d3', '#e0d9d3', '#747472', '#747472', '#747472', '#e4ebe3', '#e4ebe3', '#e4ebe3', '#423d2d', '#423d2d', '#423d2d', '#ecc9ca', '#ecc9ca', '#ecc9ca', '#e81b1d', '#e81b1d', '#e81b1d', '#c5b2c0', '#c5b2c0', '#c5b2c0', '#473338', '#473338', '#473338', '#4a9c45', '#4a9c45', '#4a9c45']

describe('random', () => {
  it('works', async () => {

    const set = new Set(colors)
    expect(colors.length).not.toEqual(set.size)
    expect(Array.from(set.values())).toMatchInlineSnapshot(`
      [
        "#fdac75",
        "#bacde5",
        "#818b56",
        "#6042ec",
        "#aff66b",
        "#696219",
        "#b5d8e3",
        "#f066a3",
        "#f0ea8d",
        "#463c37",
        "#bab5ab",
        "#923b1f",
        "#c22929",
        "#003dff",
        "#f0592b",
        "#8ea2d3",
        "#775648",
        "#f9d3be",
        "#e0d9d3",
        "#747472",
        "#e4ebe3",
        "#423d2d",
        "#ecc9ca",
        "#e81b1d",
        "#c5b2c0",
        "#473338",
        "#4a9c45",
      ]
    `)

  });
});