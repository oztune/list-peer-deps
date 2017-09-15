#!/usr/bin/env node

const fs = require('fs')

fs.readFile('package.json', (error, buffer) => {
	if (error) {
		console.error('list-peer-deps: No package.json found')
	} else {
		try {
			const json = JSON.parse(buffer.toString())

			if (json.peerDependencies) {
				console.log(Object.keys(json.peerDependencies).map(key => {
					return `"${ key }"@"${ json.peerDependencies[key] }"`
				}).join(' '))
			}
		} catch (e) {
			console.error('list-peer-deps: Error parsing package.json')
		}
	}
})
