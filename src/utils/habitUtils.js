import { v4 as uuidv4 } from 'uuid';

const HABITS_KEY = "habit_list";

export const fetchHabits = () => {
     const stored = localStorage.getItem(HABITS_KEY);

    if (stored) {
        const parsedHabits = JSON.parse(stored);
        
        // calculate wilting level
        const checkedHabits = parsedHabits.map(habit => {
            const daysMissed = getDaysMissed(habit.lastCheckIn);
            const wiltingLevel = calculateWiltingLevel(daysMissed, habit.wiltingLevel); // replace with call to checkDaysSince()
            habit.wiltingLevel = wiltingLevel;
            habit.streak = daysMissed > 0 ? 0 : habit.streak;
            return habit
        })

        // persist data
        storeHabits(checkedHabits);

        return checkedHabits;
    } else {
        return [];
    }
}

export const fetchHabit = (id) => {
    const storedHabits = JSON.parse(localStorage.getItem(HABITS_KEY));

    if (storedHabits && storedHabits.length) {
        const foundHabit = storedHabits.find(habit => habit.id === id);
        if (foundHabit) {
            return foundHabit;
        }
    }

    return null;
}

 export const storeHabits = (habitList) => {
        const stringifiedHabits = JSON.stringify(habitList);
        localStorage.setItem(HABITS_KEY, stringifiedHabits);
    }

export const getDaysMissed = (lastCheckIn) => {
    if (!lastCheckIn) return 0;
  
    const lastDate = new Date(lastCheckIn);
    const today = new Date();
  
    let daysMissed = Math.floor(
      (today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
    ) - 1 > 0 ? Math.floor(
        (today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
      ) - 1 : 0;
    
    return daysMissed;
}


export const getGrowthStage = (xp) => {
    if (xp >= 100) return "Blooming Plant 🌸";
    if (xp >= 75) return "Mature Plant 🪴";
    if (xp >= 50) return "Young Plant 🌿";
    if (xp >= 25) return "Sprout 🌱";
    return "Seed 🌰";
  }

  export const getWiltingStatus = (wiltingLevel) => {
    if (wiltingLevel === 0) return "Healthy 🍃";
    if (wiltingLevel === 1) return "Slightly Wilted 🟡";
    if (wiltingLevel === 2) return "Wilted 🟠";
    return "Dying 🔴";
  }
  
  export const calculateWiltingLevel = (daysMissed, currentWiltingLevel) => {
    const calculatedWiltingLevel = currentWiltingLevel + daysMissed <= 3 ? currentWiltingLevel + daysMissed : 3;
  
    return Math.max(0, calculatedWiltingLevel);
  }

export const getToday = () => {
    return new Date().toISOString().split("T")[0];
}
  
export const getYesterday = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().split("T")[0];
}

export const checkInHabit = (habit) => {
    const today = getToday();
    if (habit.lastCheckIn === today) return;
    const newStreak = habit.streak + 1;
    const newWiltingLevel = habit.wiltingLevel > 0 ? habit.wiltingLevel - 1 : 0;
    let newXP = habit.xp;
    

    // XP gain logic - if plant is wilting, postpone 'growth' until the plant has been revived
    const XP_PER_CHECKIN = habit.wiltingLevel === 0 ? 10 : 0;
    newXP += XP_PER_CHECKIN;

    const updatedHabit = {
        ...habit,
        streak: newStreak,
        lastCheckIn: today,
        wiltingLevel: newWiltingLevel,
        xp: newXP
    };
    return updatedHabit;
};

const getDaysSinceLastCheckIn = (s) => {

    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
    var days = hrs / 24;

    return days;
}

const getDecayAmount = (streak, lastCheckIn) => {
    const date = new Date(lastCheckIn);
    const lastCheckInmilliseconds = date.getTime();
    const today = new Date(getToday());
    const todayInMilliseconds = today.getTime();
    
    const lastCheckInDays = getDaysSinceLastCheckIn(lastCheckInmilliseconds);
    const todayInDays = getDaysSinceLastCheckIn(todayInMilliseconds);
   
    const daysSinceLastCheckIn = todayInDays - lastCheckInDays;

    return daysSinceLastCheckIn >= streak ? 0 : daysSinceLastCheckIn;
}

export const checkForHabitDecay = (habits) => {
    const today = getToday();
    const yesterday = getYesterday();

    const checkedHabits = habits.map(habit => {
        if (habit.frequency === "Daily" && habit.lastCheckIn !== today && habit.lastCheckIn !== yesterday) {
            const decayAmount = getDecayAmount(habit.streak, habit.lastCheckIn);
            habit.streak = habit.streak - decayAmount;
        }
        return habit;
    })
    return checkedHabits;
};

export const createNewHabit = (name, frequency, description) => {
    const now = new Date().toISOString().split("T")[0];
    const newHabit = {
        id: uuidv4(),
        name,
        frequency,
        streak: 0,
        lastCheckIn: null,
        createdAt: now,
        description,
        wiltingLevel: 0,
        xp: 0,
        history: []
    }
    return newHabit;
}