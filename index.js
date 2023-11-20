#! usr/bin/env  node
import ora from 'ora';
import psi from 'psi';

(async () => {
  // Get the PageSpeed Insights report
  const loader = ora('Measuring URL').start();
  const { data } = await psi('https://theverge.com', { links: true });

  if (data) loader.succeed();
  console.log('Speed score:', data.lighthouseResult.categories.performance.score);

  // Output a formatted report to the terminal
  await psi.output('https://theverge.com');
  console.log('Done');
})();
