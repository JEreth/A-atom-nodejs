<h1 align="center">
  <img width="150" src="https://raw.githubusercontent.com/JEreth/A-atom-meta-specs/master/figures/logo.svg?sanitize=true" alt="" />
</h1>

<h3 align="center">Analytical Atom (Prototype)</h3>


<img src="https://img.shields.io/badge/status-Work%20in%20progress-yellow.svg?style=flat-square" alt="Work in progress" /> [![Build Status](https://travis-ci.org/JEreth/A-atom-generator.svg?branch=master)](https://travis-ci.org/JEreth/A-atom-generator)

**This is a sample implementation of Analytical Atoms with NodeJS.**

### Implementation details:

* Build with nodejs

### Run the application

**Run local**

You can run the application easily with `node start` from the root directory (take care that a config.json file exists).

**Run the application in a docker container**

You can also simply run the application in a docker container with the image [julianereth/a-atom-nodejs](https://hub.docker.com/r/julianereth/a-atom-nodejs/). For this simply run

`docker run -v /localpath/to/your-config.json:/usr/src/app/config.json -p 8000:8000 -d julianereth/a-atom-nodejs`


#### Related work
- [Analytical Atoms Specs](https://github.com/JEreth/A-atom-meta-specs): A specification of the underlying idea of analytical atoms (in work)
- [Analytical Atoms Data Generator](https://github.com/JEreth/a-atom-generator): A data generator to simulate analytics scenarios.
