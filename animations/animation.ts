export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: "50%" },
  show: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: "0.5",
    },
  },
};

export const item2 = {
  hidden: { opacity: 0, y: "50%" },
  show: {
    opacity: 1,
    y: "0%",
  },
};

export const fromLeft = {
  hidden: { opacity: 0, y: "5%" },
  show: {
    opacity: 1,
    transition: {
      y: "0%",
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const itemFromLeft = {
  hidden: { opacity: 0, x: "-20%" },
  show: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: "0.5",
    },
  },
};
