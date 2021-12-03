function catFacts() {
  const facts = [];
  facts[0]= "1. Cats are nearsighted, but their peripheral vision and night vision are much better than that of humans" + '<br />';
  facts[1]= "2. Cats are supposed to have 18 toes (five toes on each front paw; four toes on each back paw)" + '<br />';
  facts[2]= "3. Cats have an extra organ that allows them to taste scents on the air, which is why your cat stares at you with her mouth open from time to time" + '<br />';
  facts[3]= "4. Cats have the largest eyes relative to their head size of any mammal" + '<br />';
  facts[4]= "5. Cats’ rough tongues can lick a bone clean of any shred of meat" + '<br />';
  facts[5]= "6. Some cats are ambidextrous, but 40 percent are either left- or right-pawed" + '<br />';
  facts[6]= "7. Cats’ collarbones don’t connect to their other bones, as these bones are buried in their shoulder muscles" + '<br />';
  facts[7]= "8. Cats are believed to be the only mammals who don’t taste sweetness" + '<br />';
  facts[8]= "9. Cats have a unique vocabulary with their owner — each cat has a different set of vocalizations, purrs and behaviors" + '<br />';
  facts[9]= "10. If your cat approaches you with a straight, almost vibrating tail, this means that she is extremely happy to see you" ;
  (facts.join(' '));
  document.getElementById("funFacts").innerHTML = facts;
}

function catWeight() {
  const getChart = document.getElementById('catChart').getContext('2d');
  const penguinChart = new Chart(getChart, {
    type: 'bar',
    data: {
      labels: ['Persian', 'Bengal', 'Siamese', 'Siberian', 'Bombay', 'Burmese'],
      datasets: [{
        label: 'Average Weight in Pounds',
        data: [10, 8.6, 12, 18, 11, 10.5],
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'green',
          'purple',
          'orange'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function catImage() {
  var input = document.getElementById("cats").value;
  let url = ("https://cataas.com/cat" + input);
  fetch(url)
    .then(function (response) {
      // The JSON data will arrive here
    })
    .catch(function (err) {
      // If an error occured, you will catch it here
    });
}
// Source Credit: https://www.chartjs.org/docs/latest/samples/bar/vertical.html