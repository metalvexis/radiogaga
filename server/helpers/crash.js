// Event handlers for sudden crashes
process.on('uncaughtException', function (err) {
  console.error(err.stack)
  process.exit(1)
});

process.on('SIGTERM', function (err) {
  console.error(err.stack)
  process.exit(1)
});