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
    const newStreak = habit.lastCheckIn === getYesterday() ? habit.streak + 1 : 1;
    const updatedHabit = {
        ...habit,
        streak: newStreak,
        lastCheckIn: today,
    };
    return updatedHabit;
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