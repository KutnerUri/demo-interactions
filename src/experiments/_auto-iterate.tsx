export {};

// const useAutoIterate = (max: number) =>
//   useStateMachine({
//     context: { idx: 0 },
//     initial: "resting",
//     states: {
//       idle: { on: { START: "resting" } },
//       resting: {
//         on: { ANIM: "iterating", STOP: "idle" },
//         effect: ({ send }) => {
//           const tid = setTimeout(() => send("ANIM"), RESTING_DURATION);
//           return () => clearTimeout(tid);
//         },
//       },
//       iterating: {
//         on: { REST: "resting", STOP: "idle" },
//         effect: ({ setContext, send }) => {
//           setContext((ctx) => ({
//             idx: (ctx.idx + 1) % max,
//           }));
//           const tid = setTimeout(() => send("REST"), ANIM_DURATION);
//           return () => clearTimeout(tid);
//         },
//       },
//     },
//   });
