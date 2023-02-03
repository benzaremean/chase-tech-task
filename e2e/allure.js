import allure from 'allure-commandline';

const generation = allure(['serve', 'allure-results']);

generation.on('exit', function (exitCode) {
  console.log('Generation is finished with code:', exitCode);
});
