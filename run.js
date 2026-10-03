#!/usr/bin/env node
const { spawn } = require('child_process');

const scriptName = process.argv[2] || 'dev';
const extraArgs = process.argv.slice(3);

const isWindows = process.platform === 'win32';

const child = isWindows
  ? spawn(process.env.ComSpec || 'cmd.exe', ['/d', '/s', '/c', 'npm', 'run', scriptName, ...extraArgs], {
      stdio: 'inherit',
    })
  : spawn('npm', ['run', scriptName, ...extraArgs], {
      stdio: 'inherit',
    });

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
