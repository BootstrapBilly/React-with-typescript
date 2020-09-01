export const shuffle_array = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)