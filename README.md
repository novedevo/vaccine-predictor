# vaccine-predictor

This tool automatically fetches the latest data from the British Columbia CDC and a third-party data aggregator, filters, cleans, and processes it, graphs it, and fits a cubic forecast polynomial.
Demographic data is also shown on the output graph.
As the vaccination campaign progresses, the forecast will improve due to the additional data.

If you're reading this after COVID-19 vaccination is complete, the API endpoints may no longer be functional.

To view the rendered notebook and graph, view `vaccine-predictor.ipynb`. GitHub's Jupyter notebook rendering seems a little, so if it doesn't look right, you might have to clone the repo or download that file to open in your local installation. [Known to glitch in the current Nightly Firefox]
