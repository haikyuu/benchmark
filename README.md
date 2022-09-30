## Introduction
This is a benchmark to test Imba against React. This is obviously **not** an extensive benchmark, but just to illustrate a point: Virtual DOM is a big overhead.

You can feel the difference manually by clicking around. But I included an automated test to click 500 times, and Imba is 9 times faster!!

No tricks here ^^' Inspect the code, run it locally and optimize if you feel like it.

Results of running the benchmark can be seen here https://imba-benchmark.netlify.app/

Results are built on every push to main branch. And you can see the same results by inspecting github actions artifacts. Github actions machine is a bit more powerful than Netlify, so results are different but within the same range: 9-10 times faster!

How comes? Well, Imba rerenders everything on every change ... and DOM turns out to be fast
