export const staggeredChildrenParent = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const slideRight = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    x: -100,
    opacity: 0,
  },
};

export const slideLeft = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    x: 100,
    opacity: 0,
  },
};

export const slideBottom = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    y: 100,
    opacity: 0,
  },
};

export const slideTopSpring = {
  visible: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      damping: 9,
      mass: 1,
      duration: 1,
      ease: "linear",
    },
  },
  hidden: {
    y: -300,
  },
};

export const fadeIn = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0,
  },
};
