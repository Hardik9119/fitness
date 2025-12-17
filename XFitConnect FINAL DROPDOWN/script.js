const tabs=document.querySelectorAll('.tab');
const contents=document.querySelectorAll('.tab-content');

tabs.forEach(t=>{
 t.onclick=()=>{
  tabs.forEach(x=>x.classList.remove('active'));
  contents.forEach(c=>c.classList.remove('active'));
  t.classList.add('active');
  document.getElementById(t.dataset.tab).classList.add('active');
 };
});

function saveChallenge(){
 const payload={
  name:challengeName.value,
  activity:activityType.value,
  startCategory:startCategory.value,
  rules:{
    minDistance:minDistance.value,
    timeRatio:timeRatio.value,
    speedRange:speedRange.value
  }
 };
 localStorage.setItem('earthMonthChallenge',JSON.stringify(payload));
 console.log(payload);
 alert('Challenge saved with dropdown configuration');
}
