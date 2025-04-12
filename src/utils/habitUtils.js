import { v4 as uuidv4 } from 'uuid';

export const getGrowthStage = (streak) => {
    if (streak >= 21) return "🌸 Blooming Plant";
    if (streak >= 14) return "🪴 Mature Plant";
    if (streak >= 7) return "🌿 Young Plant";
    if (streak >= 3) return "🌱 Sprout";
    return "🌰 Seed";
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
    const updatedHabit = {
        ...habit,
        streak: newStreak,
        lastCheckIn: today,
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
        history: []
    }
    return newHabit;
}