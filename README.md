## Introduction
This is a benchmark to test Imba against React and Svelte. This is obviously **not** an extensive benchmark, but just to illustrate a point: React's Virtual DOM is a big overhead.

You might feel the difference manually by clicking around super fast. But I included an automated test to click 500 times.

The test is very simple: it just clicks 500 times on a button that increments 10k other buttons
```
await Promise.all(Array.from(Array(count).keys()).map(()=> page.locator(`data-testid=${target}-1`).click())); // target is replaced with each framework
await expect(button1).toHaveText(`${count + 1}`)
```

No tricks here ^^' Inspect the code, run it locally and optimize if you feel like it.
<img width="1267" alt="image" src="https://user-images.githubusercontent.com/8558836/193265463-c502296b-8d53-492a-ab3e-c5dc8f984fad.png">

Results of running the benchmark can be seen here https://imba-benchmark.netlify.app/

Results are built on every push to main branch. And you can see the same results by inspecting github actions artifacts. Github actions machine is a bit more powerful than Netlify, so results are different but within the same range.

How comes? Well, Imba uses a different technique called the memoized DOM [Check out how it works](https://imba.io/guides/rendering). It would be interesting to see other libraries and frameworks adopt it since it's so effecient.

## Profiling
In the following manual test, I clicked 20 times on buttons of each respective "framework"
### React results 
<img width="1919" alt="image" src="https://user-images.githubusercontent.com/8558836/193266068-6e99bfb0-f05d-4fd6-a61a-3e068e5682c5.png">  |

### Imba results
<img width="1815" alt="image" src="https://user-images.githubusercontent.com/8558836/193266523-643fe75d-dac6-490b-9ce0-641fec2bd991.png"> |

