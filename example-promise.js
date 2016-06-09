// function getTempPromise(location){
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     },1000);
//   });
// }

// getTempPromise('Philadelphia').then(function(temp){
//   console.log('promise success',temp);
// }, function(err){
//   console.log('promise failure',err);
// });

function addPromise(a,b){
  return new Promise(function(resolve,reject){
    if (typeof a ==='number' &&typeof b ==='number')
    {
      resolve(a+b);
    }else{
      reject('Parameter is not a number');
    }

  })
};

addPromise(2,'tel').then(function(temp){
  console.log('promise success',temp);
}, function(err){
  console.log('promise failure',err);
});

addPromise(2,7).then(function(temp){
  console.log('promise success',temp);
}, function(err){
  console.log('promise failure',err);
});
