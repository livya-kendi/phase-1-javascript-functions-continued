const saturdayFun = function(activity1="roller-skate", activity2="bathe my dog") {
    if (activity1){
      return ( `This Saturday, I want to ${activity1}!`)
    }
    else if(activity2) {
      return ( `This Saturday, I want to ${activity2}!`)
    }
}
const mondayWork = function(activity1="go to the office", activity2="work from home") {
    if (activity1){
        return ( `This Monday, I will ${activity1}.`)
      }
      else if(activity2) {
        return ( `This Monday, I will ${activity2}.`)
      } 
}
    const wrapAdjective = function(style="*") {
    return function (adj ="special") {
  return `You are ${style}${adj}${style}!`
    }
  }  