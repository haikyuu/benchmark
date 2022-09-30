## Introduction
This is a benchmark to test Imba against React and Svelte. This is obviously **not** an extensive benchmark, but just to illustrate a point: Imba is very fast! ... 9 times faster than React and Svelte.

How comes? Well, Imba uses a different technique called the memoized DOM [Check out how it works](https://imba.io/guides/rendering). It would be interesting to see other libraries and frameworks adopt it since it's so effecient.

The benchmark is a very simple automated test that playwright runs for each framework.

The test is very simple: it just clicks 500 times on a button that increments 10k other buttons
```
await Promise.all(Array.from(Array(count).keys()).map(()=> page.locator(`data-testid=${target}-1`).click())); // target is replaced with each framework
await expect(button1).toHaveText(`${count + 1}`)
```

No tricks here ^^' Inspect the code, run it locally and optimize if you feel like it.
<img width="1223" alt="image" src="https://user-images.githubusercontent.com/8558836/193279144-b30270d4-42a1-4ffc-a1e0-50031e337b05.png">

Results of running the benchmark can be seen here https://imba-benchmark.netlify.app/

Results are built on every push to main branch. And you can see the same results by inspecting github actions artifacts. Github actions machine is a bit more powerful than Netlify, so results are different but within the same range.



## Profiling
In the following manual test, I clicked 20 times on buttons of each respective "framework". 

*If you know a way to automate this profiling, create an issue or a PR. I'd love to include that instead.*

Look at the scripting portion or even better, try the profiling in your browser:
- Imba: 147ms
- Svelte: 487ms
- React: 589ms

### React results 
<img width="1919" alt="image" src="https://user-images.githubusercontent.com/8558836/193266068-6e99bfb0-f05d-4fd6-a61a-3e068e5682c5.png">

### Imba results
<img width="1815" alt="image" src="https://user-images.githubusercontent.com/8558836/193266523-643fe75d-dac6-490b-9ce0-641fec2bd991.png">

### Svelte results
<img width="1813" alt="image" src="https://user-images.githubusercontent.com/8558836/193280520-56962430-0a01-436e-9bf6-f3a15371192f.png">
