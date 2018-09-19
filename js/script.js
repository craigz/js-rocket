var sayMyName = function (name) {
  alert('my name is '+name);
}

var car = {
  make: 'vw',
  type: 'polo',
  color: 'blue',
  isTurnedOn: false,
  numberOfWheels: 4,
  seats: [
    'seat1',
    'seat2',
    'seat3',
    'seat4'
  ],
  turnOn: function () {
    this.isTurnedOn = true;
  },
  fly: function () {
    alert('oh, my fuck! it\'s flying');
  },
  switchCar: function (isOn) {
    console.log('turn car '+isOn);
    if (isOn == true) {
      this.isTurnedOn = true;
    } else {
      this.isTurnedOn = false;
    }
  }
};
console.log('the slug was here.');
