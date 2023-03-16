var cityFormEl = $('#searchPortion');
var cityListEl = $('#city-list');
var cityItem = $('input[name="city-input"]').val();
var apiKey = "59b309f78fc5600673173353d4d9796f"
var dataSpit = $(".dataSpit")
let temperature = ""
let humidity = ""
let windSpeed = ""
var fullWeather = "https://api.openweathermap.org/data/2.5/weather?q=" +
cityItem +
"&appid=" +
apiKey +
"&units=imperial";

function handleFormSubmit(event) {
  event.preventDefault();

  var cityItem = $('input[name="city-input"]').val();


  var fullWeather = "https://api.openweathermap.org/data/2.5/weather?q=" +
  cityItem +
  "&appid=" +
  apiKey +
  "&units=imperial";

  var fullWeather = fetch(fullWeather, {
    // The browser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    cache: 'reload',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
       temperature = (data.main.temp);
       humidity = (data.main.humidity);
       windSpeed = (data.wind.speed);
    let myData = temperature + ' temperature ' + humidity + ' humidity ' + windSpeed + ' windspeed '
    dataSpit.text(myData)
        console.log(data);
    });
  console.log(fullWeather)

  

  if (!cityItem) {
    console.log('No city in form!');
    return;
  } 
// else {
//     dataSpit + fullWeathers.textContent

//   }

  var cityListItemEl = $(
    '<li class="">'
  );
  cityListItemEl.text(cityItem);

  // add delete button to remove shopping list item
  cityListItemEl.append(
    '<button class="delete-item-btn">Remove</button>'
  );

  // print to the page
  cityListEl.append(cityListItemEl);

  // clear the form input element
  $('input[name="city-input"]').val('');
}

function handleRemoveItem(event) {
  // convert button we pressed (`event.target`) to a jQuery DOM object
  var btnClicked = $(event.target);

  // get the parent `<li>` element from the button we pressed and remove it
  btnClicked.parent('li').remove();
}

// use event delegation on the `shoppingListEl` to listen for click on any element with a class of `delete-item-btn`
cityListEl.on('click', '.delete-item-btn', handleRemoveItem);
cityFormEl.on('submit', handleFormSubmit);



fullWeathers = fetch(fullWeather, {
    // The browser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    cache: 'reload',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  console.log(fullWeather)



// API Link api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={59b309f78fc5600673173353d4d9796f}