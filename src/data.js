let masData = [
    { name: `Don't give up on your goals, your body deserves the best`, id: 1 },
    { name: `Stronger, better, faster - that's your way to achieving your goals in the gym!`, id: 2 },
    { name: `Every step in the gym is an investment in your health and physical fitness for the future`, id: 3 },
    { name: `Train today to be stronger tomorrow. It all starts with the first step in the gym`, id: 4 },
    { name: `You are stronger than you think. Overcome doubts and move forward towards your goals in the gym`, id: 5 },
    { name: `Engage in what makes you happy - train in the gym and feel the inner motivation.`, id: 6 },
    { name: `Don't let excuses distract you from your workouts. Be determined, because you're worth it`, id: 7 },
    { name: `Your body is your temple, keep it strong, healthy, and outstanding in the gym`, id: 8 },
    { name: `Challenge yourself, push your limits, and rise to a new level in the gym`, id: 9 },
    { name: `Remember, every workout day is an opportunity to become a better version of yourself`, id: 10 }
  ]

export  let masData2 = masData.map((value, id)=><li key={id} style={{textAlign:'justify', fontFamily:'Georgia, serif', fontSize:'18px', lineHeight:'28px'}}>{value.name}</li>)








  